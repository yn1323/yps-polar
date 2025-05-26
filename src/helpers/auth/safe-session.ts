import type { createServerClient } from '@supabase/ssr';
import { type JWTPayload, jwtVerify } from 'jose';

interface SafeSessionUser {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
  app_metadata?: Record<string, unknown>;
}

interface SafeSessionResult {
  user: SafeSessionUser | null;
  error: Error | null;
}

export class SupabaseSafeSession {
  private supabase: ReturnType<typeof createServerClient>;
  private jwtSecret: string;

  constructor(
    supabase: ReturnType<typeof createServerClient>,
    jwtSecret: string,
  ) {
    this.supabase = supabase;
    this.jwtSecret = jwtSecret;
  }

  /**
   * JWT検証を使った安全で高速なユーザー取得
   * getUser()の代替として使用可能
   */
  async getUser(): Promise<SafeSessionResult> {
    try {
      // セッションからアクセストークンを取得
      const {
        data: { session },
        error: sessionError,
      } = await this.supabase.auth.getSession();

      if (sessionError || !session?.access_token) {
        return { user: null, error: sessionError };
      }

      // JWT検証
      const secret = new TextEncoder().encode(this.jwtSecret);
      const { payload } = await jwtVerify(session.access_token, secret);

      // JWTペイロードからユーザー情報を抽出
      const user = this.extractUserFromJWT(payload);

      return { user, error: null };
    } catch (error) {
      console.error('Safe session verification failed:', error);
      return { user: null, error: error as Error };
    }
  }

  /**
   * JWTペイロードからユーザー情報を安全に抽出
   */
  private extractUserFromJWT(payload: JWTPayload): SafeSessionUser | null {
    if (!payload.sub) {
      return null;
    }

    return {
      id: payload.sub,
      email: payload.email as string,
      user_metadata: payload.user_metadata as Record<string, unknown>,
      app_metadata: payload.app_metadata as Record<string, unknown>,
    };
  }

  /**
   * セッションの有効性をチェック（JWT検証のみ）
   */
  async isValidSession(): Promise<boolean> {
    const { user } = await this.getUser();
    return user !== null;
  }

  /**
   * フォールバック: 通常のgetUser()を呼ぶ
   * JWT検証が失敗した場合の安全な代替手段
   */
  async getUserFallback(): Promise<SafeSessionResult> {
    try {
      const {
        data: { user },
        error,
      } = await this.supabase.auth.getUser();

      if (error || !user) {
        return { user: null, error };
      }

      return {
        user: {
          id: user.id,
          email: user.email,
          user_metadata: user.user_metadata,
          app_metadata: user.app_metadata,
        },
        error: null,
      };
    } catch (error) {
      return { user: null, error: error as Error };
    }
  }
}
