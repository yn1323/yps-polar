/**
 * 認証関連のエラーメッセージ定数
 */
export const AUTH_ERROR_MESSAGES = {
  GOOGLE_AUTH_FAILED: 'Google認証に失敗しました。再度お試しください。',
  GENERAL_AUTH_ERROR: '認証エラーが発生しました。',
  GOOGLE_AUTH_START_FAILED: 'Google認証の開始に失敗しました',
  OAUTH_URL_NOT_GENERATED: 'OAuth URL not generated',
} as const;

/**
 * 認証関連のエラータイプ
 */
export const AUTH_ERROR_TYPES = {
  AUTH_FAILED: 'auth_failed',
} as const;