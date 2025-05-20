'use server';

import { createClient } from '@/src/helpers/auth/server';

export async function registerUser(userId: string, userName: string) {
  const supabase = await createClient();

  // 登録済みか確認
  const { data: existingUser } = await supabase
    .from('User')
    .select('id')
    .eq('userId', userId)
    .maybeSingle();

  // 未登録なら新規作成
  if (!existingUser) {
    const ok = await supabase.from('User').insert({
      userId,
      userName,
      avatar: '', // 必須フィールド
      isDeleted: false, // 必須フィールド
    });

    console.log(ok);
    return { success: true };
  }

  return { success: false, message: 'すでに登録されています' };
}
