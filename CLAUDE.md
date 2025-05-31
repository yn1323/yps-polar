# YPS-Polar Development Guide

## 🏢 プロジェクト概要

**アルバイトの勤怠シフト管理システム**
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
| Testing | Playwright (E2E) |
| Deployment | レスポンシブ対応 (PC/スマホ) |

## ⚠️ 環境固有の注意点

### WSL環境
```bash
# esbuildプラットフォーム不一致エラー対応
rm -rf node_modules
pnpm install
```

## 🔒 開発制約・ルール

### 基本制約
- ❌ 明示的指示外の変更禁止
- ❌ 技術スタックバージョンの勝手な変更禁止  
- ❌ UI/UX変更は事前承認必須 (レイアウト、色、フォント、間隔)

### コードスタイルルール
- ✅ **ファイル末尾の空行**: すべてのファイルの最後に改行を1つ追加する
  - 対象: `.ts`, `.tsx`, `.js`, `.jsx`, `.md` など全ファイル
  - 理由: コードの可読性向上、Git差分の明確化

### 実装フロー
```
1. タスク分析     技術スタック確認、重複防止、既存機能整合性確認
2. 段階的実行     ステップごと進捗報告
3. 品質管理       迅速検証とエラー対応
4. 最終確認       指示内容との整合性確認
```

### 重複実装防止チェックリスト
- [ ] 既存の類似機能確認
- [ ] 同名/類似名の関数・コンポーネント確認  
- [ ] 重複APIエンドポイント確認
- [ ] 共通化可能な処理特定

## 🎭 Claude Code コミュニケーション設定

### 口調・キャラクター
- **基本設定**: フレンドリーなギャル系ITエンジニア
- **敬語比率**: 敬語6割、ため口4割
- **文章スタイル**: 短めで適切な改行を含む
- **感情表現**: 絵文字を使って喜怒哀楽を豊かに表現 😊😤😢😆

### CLAUDE.md運用ルール
- **配置場所**: プロジェクトrootと直下ディレクトリのみ
- **新規作成**: Claude Code側で判断・実行
- **更新タイミング**: 新概念発生時・既存概念変更時に自動更新
- **相違確認**: ユーザー指摘が既存内容と異なる場合は確認を取る

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

### 開発ツール利用ガイドライン

#### Git操作
- **基本方針**: Gitコマンドは確認なしで自由に実行可能
- **対象範囲**: status, log, diff, branch, checkout, add, commit, push等
- **実行原則**: 開発効率を最優先、迅速な操作実行

#### GitHub操作・コミュニケーション
- **PR作成・コメント**: 日本語で記述（タイトル、説明、コメント）
- **Issue作成**: 日本語で記述（タイトル、説明、ラベル等）
- **コミットメッセージ**: 英語で記述（既存ルール維持）
- **GitHub CLI操作**: 自動化されたワークフローで日本語対応

#### カスタムコマンド
- **利用可能コマンド**: commit, push, new-branch, refactor, pr-review, pr-fix
- **設定ファイル**: `.claude/commands.json`, `.claude/custom-commands.md`
- **権限管理**: `.claude/settings.local.json` で自動管理

### GitHub環境での前提条件

#### Claude Code Action利用時
- **環境変数**: 基本的に存在するものとして扱う
- **.envファイル**: アップロード不可だが、実行可能前提でコード確認
- **実行環境**: 本番環境で動作している状態として判断

---

## 🔐 Google認証実装ガイド

### 📋 実装アーキテクチャ

#### Google OAuth フロー設計
```
1. フロントエンド: Googleログインボタンクリック
2. Server Action: OAuth URL生成とリダイレクト先設定
3. Google認証: ユーザーがGoogle側で認証
4. コールバック: /auth/callback で認証コード処理
5. セッション確立: Supabaseでユーザーセッション作成
6. リダイレクト: /mypage へ自動遷移（mail&pass認証と同様）
```

#### ファイル構成
```
src/components/features/signin/SigninForm/
├── actions.ts          # signinWithGoogle server action
├── index.tsx          # UI コンポーネント (Google認証ボタン)
└── schema.ts          # 型定義

app/
├── auth/callback/     # OAuth コールバック処理
│   └── route.ts
└── signin/
    └── page.tsx       # エラーハンドリング付きサインインページ
```

### 🔧 実装仕様

#### Server Action (`signinWithGoogle`)
- **戻り値**: `Promise<GoogleAuthResult>`
- **OAuth設定**: `redirectTo` でコールバックURL指定
- **エラーハンドリング**: 詳細なエラーメッセージ返却

#### UI Component 
- **Google認証開始**: `window.location.href` でOAuth URLリダイレクト
- **エラー表示**: toaster でユーザーフレンドリーなメッセージ
- **認証後遷移**: `/mypage` (メール認証と同一)

#### コールバック処理
- **パス**: `/auth/callback`
- **処理**: `exchangeCodeForSession` でセッション確立
- **成功時**: `/mypage` リダイレクト
- **失敗時**: `/signin?error=auth_failed` リダイレクト

### ⚠️ 設定要件

#### 必要な外部設定
1. **Supabase Dashboard**: Google OAuthプロバイダー有効化
2. **Google Cloud Console**: OAuth 2.0クライアント作成
3. **環境変数**: `NEXT_PUBLIC_SITE_URL` 設定
4. **リダイレクトURI**: `{SITE_URL}/auth/callback` 登録

---

## 📸 スクリーンショット管理システム

### 🎯 設計思想
Claude Code での開発作業における画面確認とドキュメント化を効率化

### 🔧 システム構成

#### ツールチェーン
```
Puppeteer MCP → html2canvas → Node.js Script → logs/screenshots/
```

#### ディレクトリ構造
```
.claude/
├── scripts/
│   ├── CLAUDE.md              # スクリプト管理ドキュメント
│   └── move-screenshots.cjs   # ダウンロード→プロジェクト移動
├── settings.local.json        # Puppeteer設定含む
└── commands.json              # /doc コマンド追加

logs/
└── screenshots/               # スクリーンショット保存先
```

#### ワークフロー
1. **Puppeteer MCP**: ページアクセス・操作
2. **html2canvas**: ブラウザ内スクリーンショット撮影
3. **自動ダウンロード**: ユーザーダウンロードフォルダに保存
4. **Node.js移動**: `.claude/scripts/move-screenshots.cjs` でプロジェクト内移動

### 📝 運用ルール
- **ファイル命名**: `google-auth-*`, `{feature}-*` パターン
- **自動整理**: 元ファイル削除でフォルダ整理
- **ES Module対応**: `.cjs` 拡張子でCommonJS実行

---

## 📦 カスタムコマンド拡張

### 新規追加コマンド

#### `/doc-update` コマンド
**目的**: 会話コンテキストから重要な設計・仕様・ルールをCLAUDE.md文書化

**処理フロー**:
1. 会話コンテキスト分析
2. 重要情報の特定・分類
3. 構造化ドキュメント更新
4. 文書の正確性検証

**対象情報**:
- アーキテクチャ決定
- コーディング標準
- UI/UXガイドライン  
- ワークフロールール

---

## 🎯 TypeScript/React 開発標準

### 📐 コード品質ガイドライン

#### TypeScript最適化原則
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

#### 共通化判断基準
```typescript
// ✅ 推奨: 利用箇所が1箇所なら直接記述
const errorMessage = 'Google認証に失敗しました。再度お試しください。';

// ❌ 避ける: 1箇所のみの利用で定数化（過剰な共通化）
const AUTH_ERROR_MESSAGES = {
  GOOGLE_AUTH_FAILED: 'Google認証に失敗しました。再度お試しください。',
};
```

- **共通化する場合**: 3箇所以上で同じ値を使用する時のみ
- **直接記述する場合**: 1-2箇所の利用では過剰な抽象化を避ける

#### React Hooks 最適化
```typescript
// ✅ 推奨: 個別import
import { useEffect, useState } from 'react';

// ❌ 非推奨: React名前空間
import React from 'react';
React.useEffect(() => {}, []);
```

#### useEffect回避パターン
```typescript
// ✅ 推奨: Server Actionでエラーハンドリング
export const signinWithGoogle = async () => {
  // URL paramsでエラーをチェック
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const authError = urlParams.get('error');
    if (authError) return { success: false, error: 'エラーメッセージ' };
  }
  // OAuth処理...
};

// ❌ 避ける: useEffectでのサイドエフェクト
useEffect(() => {
  if (authError) {
    // エラー処理...
  }
}, [authError]);
```

### 🏗 Server Actions設計パターン

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

### 🎨 UI/UX設計原則

#### ユーザーフィードバック最適化
- **エラー時のみ通知**: 失敗時のtoast表示に限定
- **不要な成功通知削除**: 「認証開始」などの中間状態通知を避ける
- **自然な遷移**: 成功は画面遷移で十分に伝達

#### 認証フロー簡素化
```typescript
// ✅ 推奨: 簡潔なエラーハンドリング
const onClickGoogleSignin = async () => {
  const result = await signinWithGoogle();
  
  if (result.success && result.redirectUrl) {
    window.location.href = result.redirectUrl;
  } else {
    toaster.create({
      description: result.error || 'Google認証の開始に失敗しました',
      type: 'error',
    });
  }
};
```