import { describe, expect, it } from 'vitest';
import { schema } from './schema';

const validData = {
  email: 'test@example.com',
  password: 'password123', // 8〜24文字
  passwordConfirmation: 'password123',
};

const invalidDataList = [
  {
    name: 'メールアドレスが空',
    data: {
      email: '',
      password: 'password123',
      passwordConfirmation: 'password123',
    },
    error: '必須項目です',
  },
  {
    name: 'メールアドレスが不正',
    data: {
      email: 'invalid',
      password: 'password123',
      passwordConfirmation: 'password123',
    },
    error: 'メールアドレスの形式で入力してください',
  },
  {
    name: 'パスワードが短すぎる',
    data: {
      email: 'test@example.com',
      password: 'short',
      passwordConfirmation: 'short',
    },
    error: '8〜24文字で入力してください',
  },
  {
    name: 'パスワードが長すぎる',
    data: {
      email: 'test@example.com',
      password: 'a'.repeat(25),
      passwordConfirmation: 'a'.repeat(25),
    },
    error: '8〜24文字で入力してください',
  },
  {
    name: 'パスワード確認が短すぎる',
    data: {
      email: 'test@example.com',
      password: 'password123',
      passwordConfirmation: 'short',
    },
    error: '8〜24文字で入力してください',
  },
  {
    name: 'パスワード確認が長すぎる',
    data: {
      email: 'test@example.com',
      password: 'password123',
      passwordConfirmation: 'a'.repeat(25),
    },
    error: '8〜24文字で入力してください',
  },
  {
    name: 'パスワードとパスワード確認が一致しない',
    data: {
      email: 'test@example.com',
      password: 'password123',
      passwordConfirmation: 'password456',
    },
    error: 'パスワードが一致しません',
  },
];

describe('SignupSchema', () => {
  it('有効なデータはパスする', () => {
    const result = schema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  invalidDataList.forEach(({ name, data, error }) => {
    it(`${name}場合はエラー`, () => {
      const result = schema.safeParse(data);
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain(error);
    });
  });
});
