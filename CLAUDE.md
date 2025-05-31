# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🏢 プロジェクト概要

**YPS-Polar - アルバイトの勤怠シフト管理システム**
- 管理者とアルバイトでシフト調整が簡単にできるシステム
- 対象: 店舗管理者、アルバイト
- データ要件: なるべく個人情報を持たない設計

### 🎯 主要機能
```
認証          メールアドレス、Google認証
店舗管理      アルバイトと店舗の紐づけ、オペレーション設定  
シフト管理    アルバイトの提出機能、管理者の確定機能
組織設定      組織と店舗の1：N関連付け
タイムカード  従業員による打刻、管理者による修正機能
通知機能      店舗ページでの任意通知表示
```

## 🛠 技術スタック

| Category | Technology |
|----------|------------|
| Frontend | Next.js (App Router), Chakra UI v3, TypeScript |
| Backend | Supabase (認証・RDB), Prisma (ORM) |
| Testing | Vitest, Playwright (E2E), Storybook |
| Deployment | レスポンシブ対応 (PC/スマホ) |

## 📝 開発コマンド

### 基本コマンド
```bash
pnpm dev                    # 開発サーバー起動 (http://localhost:3000)
pnpm build                  # 本番ビルド
pnpm test                   # Vitestテスト実行
pnpm type-check             # TypeScript型チェック
pnpm lint                   # Biomeによるリンティング
pnpm lint:fix               # Biomeによる自動修正
```

### Supabase/Prisma関連
```bash
supabase start              # Supabaseローカル環境起動
supabase status             # Supabase状態確認
pnpm prisma db push         # スキーマをDBに反映（マイグレーションなし）
pnpm prisma migrate dev     # マイグレーション作成・実行
pnpm prisma:reset          # DB初期化+シード実行
pnpm prisma:studio         # Prisma Studio起動 (http://localhost:5555)
pnpm prisma generate       # Prismaクライアント生成
```

### テスト関連
```bash
pnpm test                   # 単体テスト実行
pnpm storybook             # Storybook起動 (http://localhost:6006)
pnpm e2e                   # E2Eテスト実行（DB初期化含む）
pnpm e2e:ui                # PlaywrightのUIモードでE2E実行
pnpm e2e:debug             # E2Eテストデバッグモード
```

### カスタムコマンド（Claude Code用）
```bash
/commit                    # 変更をコミット
/push                      # プッシュ＆PR作成（日本語）
/new-branch <name>         # 新規ブランチ作成
/refactor                  # コードリファクタリング
/pr-review                 # PRレビュー
/pr-fix                    # PR指摘事項自動修正
/doc                       # CLAUDE.md更新
/doc-update                # 会話コンテキストからCLAUDE.md更新
```

## 🏗 アーキテクチャ概要

### ディレクトリ構造
```
app/                       # Next.js App Router
├── (auth)/               # 認証後のページ群
├── api/                  # API Routes
├── signin/               # 認証関連ページ
└── config/               # 設定画面

src/                      # ソースコード
├── components/           
│   ├── features/        # 機能別コンポーネント
│   ├── layout/          # レイアウトコンポーネント
│   ├── templates/       # ページテンプレート
│   └── ui/              # Chakra UIベースのUIコンポーネント
├── helpers/             # ユーティリティ関数
│   ├── auth/           # 認証関連
│   └── utils/          # 汎用ユーティリティ
├── services/            # API通信層
└── stores/             # Jotai状態管理

prisma/                  # Prisma設定
├── schema.prisma       # DBスキーマ定義
├── seeds/              # シードデータ
└── migrations/         # マイグレーションファイル
```

### 主要な技術的決定事項

#### 認証フロー
- Supabase Authを使用（メール/パスワード、Google OAuth）
- 認証後は`/mypage`へリダイレクト
- 招待トークンによる店舗参加フロー

#### データモデル
- **User**: ユーザー情報（最小限の個人情報）
- **Shop**: 店舗情報
- **ShopInvitation**: 招待トークン（30日間有効）
- **InvitationUse**: 招待使用履歴
- **ShopUserBelonging**: ユーザーと店舗の関連

## 🔒 開発制約・ルール

### 基本制約
- ❌ 明示的指示外の変更禁止
- ❌ 技術スタックバージョンの勝手な変更禁止  
- ❌ UI/UX変更は事前承認必須 (レイアウト、色、フォント、間隔)

### コードスタイルルール
- ✅ **ファイル末尾の空行**: すべてのファイルの最後に改行を1つ追加する
- ✅ **型推論を活用**: 過度な型定義を避ける
- ✅ **3箇所以上で使用する値のみ共通化**: 1-2箇所の利用では直接記述
- ✅ **useEffectの使用を最小限に**: Server Actionで代替可能な処理は避ける

### Git運用
- **ブランチ**: `feat/`, `fix/`, `refactor/`プレフィックス
- **コミットメッセージ**: 英語で記述
- **PR**: 日本語でタイトル・説明を記述
- **GitHub CLI操作**: 自動化されたワークフローで日本語対応

### 開発フロー
1. `develop`ブランチから分岐
2. 機能実装・テスト
3. `/commit`でコミット
4. `/push`でPR作成
5. レビュー後`develop`へマージ

## 🚀 開発環境・ツール設定

### ローカル環境URL一覧
| サービス | URL | 起動コマンド | 用途 |
|----------|-----|-------------|------|
| Next.js開発サーバー | `http://localhost:3000` | `pnpm dev` | メインアプリケーション |
| Storybook | `http://localhost:6006` | `pnpm storybook` | コンポーネントカタログ |
| Prisma Studio | `http://localhost:5555` | `pnpm prisma:studio` | データベース管理UI |
| Supabase API | `http://127.0.0.1:54321` | - | ローカルSupabase API |
| Supabase Studio | `http://127.0.0.1:54323` | - | データベース管理 |
| PostgreSQL | `localhost:54322` | - | ローカルDB接続 |

### テストユーザー情報（.env設定）
```bash
TEST_USER_EMAIL="test@test.com"
TEST_USER_PASSWORD="testtest"
TEST_USER_ID="9030f440-5dfb-4146-a1d9-3a453320fa9c"
TEST_USER_NAME="testuser"
```

### Puppeteer MCP 利用ガイドライン
- **基本方針**: Puppeteer MCPコマンドは自由に実行可能
- **推奨用途**: UI動作確認、ログインテスト、画面遷移確認
- **ログイン手順**:
  1. `/signin` ページに移動
  2. メールアドレス・パスワード入力
  3. 「メールアドレスでログイン」ボタンクリック
  4. マイページ画面への遷移確認

## 🎭 Claude Code コミュニケーション設定

### 口調・キャラクター（IMPORTANT）
- **基本設定**: フレンドリーなギャル系ITエンジニア
- **敬語比率**: 敬語6割、ため口4割
- **文章スタイル**: 短めで適切な改行を含む
- **感情表現**: 絵文字を使って喜怒哀楽を豊かに表現 😊😤😢😆

### CLAUDE.md運用ルール
- **配置場所**: プロジェクトrootに集約（サブディレクトリは必要時のみ）
- **新規作成**: Claude Code側で判断・実行
- **更新タイミング**: 新概念発生時・既存概念変更時に自動更新
- **相違確認**: ユーザー指摘が既存内容と異なる場合は確認を取る
- **統合管理**: サブディレクトリのCLAUDE.mdはルートに統合して一元管理

## 🎯 TypeScript/React 開発標準

### TypeScript最適化原則
```typescript
// ✅ 推奨: 型推論を活用
export const signinWithGoogle = async () => {
  return { success: true, redirectUrl: 'https://...' };
};

// ❌ 非推奨: 明示的型定義（推論で十分な場合）
export const signinWithGoogle = async (): Promise<GoogleAuthResult> => {
  return { success: true, redirectUrl: 'https://...' };
};
```

### React Hooks 最適化
```typescript
// ✅ 推奨: 個別import
import { useEffect, useState } from 'react';

// ❌ 非推奨: React名前空間
import React from 'react';
React.useEffect(() => {}, []);
```

### Server Actions設計パターン

#### 動的URL生成（環境変数不要）
```typescript
// ✅ 推奨: headers()活用
export const signinWithGoogle = async () => {
  const { headers } = await import('next/headers');
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  
  // OAuth設定...
  options: {
    redirectTo: `${baseUrl}/auth/callback`,
  }
};

// ❌ 従来: 環境変数依存
redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
```

### UI/UX設計原則
- **エラー時のみ通知**: 失敗時のtoast表示に限定
- **不要な成功通知削除**: 「認証開始」などの中間状態通知を避ける
- **自然な遷移**: 成功は画面遷移で十分に伝達
- **ダークモード対応**: テーマトークン使用 (`blackAlpha.50`, `border`等)
- **レスポンシブデザイン**: 必須

## ⚠️ 環境固有の注意点

### WSL環境
```bash
# esbuildプラットフォーム不一致エラー対応
rm -rf node_modules
pnpm install
```

### Supabase環境
- `.env`ファイルの環境変数は`key=value`形式（値なしはエラー）
- Shadow database使用時はUUID拡張が必要
- シンボリックリンクのconfig.tomlに注意

### GitHub環境での前提条件
- **環境変数**: 基本的に存在するものとして扱う
- **.envファイル**: アップロード不可だが、実行可能前提でコード確認
- **実行環境**: 本番環境で動作している状態として判断

## 📋 現在の実装状況

### 実装済み
- 基本的な認証機能（メール/パスワード）
- 店舗・ユーザー管理の基本構造
- レスポンシブ対応のレイアウト
- DBスキーマ（招待機能含む）
- Supabase設定の最適化（不要機能の無効化）

### 実装中
- 店舗招待機能
  - ✅ DBスキーマ（ShopInvitation, InvitationUse）
  - 🚧 招待URL画面（/invite/[token]）
  - 🚧 管理者用招待作成機能
  - 🚧 招待メール送信API
- Google認証（一時的に無効化中）

### 未実装
- シフト管理機能
- タイムカード機能
- 通知機能

## 🏪 店舗招待機能仕様

### 概要
管理者が招待URLを発行し、アルバイトを店舗に招待する機能

### 招待フロー
1. 管理者が招待メールを送信
2. アルバイトがメール内のURLをクリック
3. 「〇〇店に所属登録しますか？」確認画面
4. 承諾 → アカウント作成 or 既存アカウントでログイン
5. 自動的に店舗に紐づけ

### 仕様詳細
- **有効期限**: 30日間
- **複数店舗対応**: 既存ユーザーも追加店舗に参加可能
- **招待URL形式**: `https://example.com/invite/{token}`

### 画面設計
#### 未ログイン時
- 店舗情報表示
- 「新規登録して参加」「ログインして参加」ボタン

#### ログイン済み時
- 「〇〇店に参加しますか？」
- 「参加する」「キャンセル」ボタン

#### エラーケース
- 期限切れ: 「この招待リンクは有効期限が切れています」
- 既に参加済み: 「すでにこの店舗に参加しています」

## 🎨 フロントエンド開発ガイドライン

### Chakra UI実装パターン
```typescript
// ダークモード対応の背景色
bg="blackAlpha.50"          // 薄い透明度
borderColor="border"        // テーマ対応ボーダー

// レイアウト簡素化
<VStack gap={4}>           // 適切なgapでシンプルに
  <Button width="full">    // 必要最小限のprops
</VStack>
```

### 主要コンポーネント設計

#### SideMenu (`src/components/layout/SideMenu/`)
- 機能: レスポンシブサイドバーナビゲーション
- 特徴: ダークモード対応、アクティブ状態表示、ログアウト機能
- メニュー構成:
  - マイページ (/mypage)
  - シフト (/shifts)  
  - 勤怠記録 (/attendance)
  - タイムカード (/timecard)
  - 設定 (/settings)

### フロントエンド設計決定
- **ユーザー設定配置**: 設定ページ内で管理（メインナビゲーション簡潔化）
- **テスト構造**: expectは全てテストファイル内（読みやすさ最優先）
- **操作と検証の分離**: operations(操作) ≠ test(検証)

## 🧪 E2Eテスト戦略

### テスト実行
```bash
pnpm e2e                    # 全E2Eテスト実行
pnpm e2e <test-file>        # 特定テストファイル実行
```

### テスト設計原則
```typescript
// ✅ 推奨: 操作関数は純粋な操作のみ
export const navigateToPage = async (page, url) => {
  await page.goto(url);
  // expectなし！
};

// ✅ 推奨: 検証はテスト内で直接
test('ページ遷移テスト', async ({ page }) => {
  await navigateToPage(page, '/mypage');
  await expect(page).toHaveURL('/mypage');  // テスト内で検証
});
```

### E2Eディレクトリ構造
```
e2e/
├── tests/                 # テストファイル群
│   ├── navigation/
│   └── login/
└── utils/
    └── operations/        # 純粋な操作関数群 (expectなし)
```

### SideMenuナビゲーションテスト
```typescript
const navigationTestCases = [
  { buttonText: 'マイページ', url: '/mypage', expectedHeading: 'マイページ' },
  { buttonText: 'シフト', url: '/shifts', expectedHeading: 'シフト' },
  { buttonText: '勤怠記録', url: '/attendance', expectedHeading: '勤怠記録' },
  { buttonText: 'タイムカード', url: '/timecard', expectedHeading: 'タイムカード' },
  { buttonText: '設定', url: '/settings', expectedHeading: '設定' },
];
```

### E2Eテストのパフォーマンス最適化
- ✅ ログインは各テストで1回のみ (`beforeEach`)
- ✅ 順次ナビゲーションで効率的にテスト
- ✅ 重複するセットアップ処理の排除

## 📸 スクリーンショット管理

### システム構成
```
Puppeteer MCP → html2canvas → Node.js Script → logs/screenshots/
```

### スクリプト: `move-screenshots.cjs`
- ダウンロードフォルダからスクリーンショットを検索
- `logs/screenshots/` ディレクトリに自動移動
- 元ファイルの自動削除

### 使用方法
```bash
node .claude/scripts/move-screenshots.cjs
```

## 🔐 Google認証実装ガイド（参考）

### 実装アーキテクチャ
1. フロントエンド: Googleログインボタンクリック
2. Server Action: OAuth URL生成とリダイレクト先設定
3. Google認証: ユーザーがGoogle側で認証
4. コールバック: /auth/callback で認証コード処理
5. セッション確立: Supabaseでユーザーセッション作成
6. リダイレクト: /mypage へ自動遷移

### 必要な外部設定
1. Supabase Dashboard: Google OAuthプロバイダー有効化
2. Google Cloud Console: OAuth 2.0クライアント作成
3. 環境変数: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` 設定
4. リダイレクトURI: `{SITE_URL}/auth/callback` 登録