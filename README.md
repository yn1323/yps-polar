# YPS-Polar

YPS-Polarは、店舗と従業員のシフト管理を効率化するWebアプリケーションです。

## 概要

このアプリケーションは、中小規模の店舗チェーンや飲食店などでの従業員シフト管理を想定した業務効率化ツールです。

### 主要機能

- **ユーザー認証**: メールアドレス/パスワードおよびGoogle認証に対応
- **店舗管理**: 店舗の登録、営業時間、シフト提出頻度の設定
- **ユーザー管理**: 従業員のユーザー名登録と店舗への所属管理
- **シフト管理**: 固定シフトと変動シフトの管理
- **タイムカード機能**: 勤怠管理システム
- **組織管理**: 複数店舗を持つ組織の管理
- **招待システム**: 店舗への従業員招待機能
- **お知らせ機能**: 組織・店舗からのアナウンス配信

### 技術スタック

- **フロントエンド**: Next.js 15, React 19, TypeScript
- **UIライブラリ**: Chakra UI v3, React Hook Form, Zod
- **状態管理**: Jotai
- **認証**: Supabase Auth
- **データベース**: PostgreSQL + Prisma ORM
- **テスト**: Vitest, Playwright (E2E)
- **開発ツール**: Storybook, Biome (Linting)

### ユーザーワークフロー

1. Googleまたはメール認証でサインイン
2. ユーザー名を登録
3. 店舗を登録または招待を受けて店舗に所属
4. シフトの登録・管理、タイムカードの利用
5. 組織からのお知らせの確認

## セットアップ

### 依存関係のインストール

```bash
pnpm i --frozen-lockfile
```

### SupabaseDB初回設定

1. `pnpm prisma db push`

2. `pnpm prisma generate`

### 開発サーバーの起動

```bash
pnpm dev
```

### その他のコマンド

- `pnpm build`: 本番用ビルド
- `pnpm test`: テスト実行
- `pnpm lint`: コードの静的解析
- `pnpm storybook`: Storybookの起動
- `pnpm e2e`: E2Eテストの実行
