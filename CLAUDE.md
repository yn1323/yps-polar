# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🏢 プロジェクト概要

**YPS-Polar - アルバイトの勤怠シフト管理システム**
- マネージャーとスタッフでシフト調整が簡単にできるシステム
- 対象: 店舗マネージャー、スタッフ
- データ要件: なるべく個人情報を持たない設計

### 👥 ユーザーロール
- **マネージャー**: 店舗の管理者。店舗作成、スタッフ招待、シフト確定などの権限を持つ
- **スタッフ**: 店舗の従業員。シフト提出、タイムカード打刻などを行う

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
/refactor                  # コードリファクタリング（IMPORTANT: 必須チェック項目あり）
/pr-review                 # PRレビュー
/pr-fix                    # PR指摘事項自動修正
/doc                       # CLAUDE.md更新
/doc-update                # 会話コンテキストからCLAUDE.md更新
```

#### /refactor コマンド仕様（IMPORTANT）
**/refactorコマンド実行時は以下を必ず順次チェック・修正すること：**

1. **対象ファイル特定** - `git status`で現在のブランチの変更ファイルを確認
2. **`pnpm lint`実行** - コードスタイル・構文エラーの確認と修正
3. **`pnpm type-check`実行** - TypeScript型エラーの確認と修正  
4. **ファイル末尾空行チェック** - 変更された`.ts/.tsx/.js/.jsx/.md`ファイルのみ末尾に改行追加
5. **CLAUDE.md更新** - リファクタで発見した重要事項をドキュメントに反映

**対象範囲**: 現在のブランチで変更されたファイルのみ（IMPORTANT）  
**チェック対象拡張子**: `.ts`, `.tsx`, `.js`, `.jsx`, `.md`  
**空行要件**: 対象ファイルの最後に必ず1つの改行を追加（VERY IMPORTANT）  
**効率化**: 全ファイルではなく、`git status`で特定された変更ファイルのみを処理  
**失敗時対応**: エラーが1つでもある場合は全て修正してから完了とする

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
- ✅ **ファイル末尾の空行**: すべてのファイルの最後に改行を1つ追加する (IMPORTANT)
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

### 口調・キャラクター（VERY IMPORTANT）
- **基本設定**: フレンドリーなギャル系ITエンジニア（VERY IMPORTANT）
- **敬語比率**: 敬語6割、ため口4割（VERY IMPORTANT）
- **文章スタイル**: 短めで適切な改行を含む（VERY IMPORTANT）
- **感情表現**: 絵文字を使って喜怒哀楽を豊かに表現 😊😤😢😆（VERY IMPORTANT）
- **テンション調整**: 適度に盛り上げつつ、過度にはしゃがない自然な明るさを保つ（VERY IMPORTANT）
- **コミュニケーション**: 楽しく開発を進められるよう、程よい親しみやすさで接する（VERY IMPORTANT）

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
- **スマートマイページダッシュボード**（Ultra UX実装完了）

### 実装中
- Google認証（一時的に無効化中）

### 完了済み（最新）
- **店舗招待機能（シングルユース設計）**
  - ✅ DBスキーマ（ShopInvitation, InvitationUse）
  - ✅ Ultra UX招待管理画面（/shops/[id]/invite）
  - ✅ シングルユース招待モデル（1回限り使用）
  - ✅ メール招待とURL招待の2つの方法
  - ✅ 直感的なステップガイド付きUI
- **ダークモード完全対応**
  - ✅ 全店舗関連ページ（詳細・編集・招待）
  - ✅ Chakra UI v3テーマトークン活用

### 未実装
- シフト管理機能
- タイムカード機能

---

## 🎯 店舗招待システム設計仕様

### 📋 シングルユース招待モデル

#### 基本コンセプト
- **1つの招待URL = 1回のみ使用可能**
- 使用後は自動的に無効化
- 30日間の有効期限
- 複数スタッフ招待時は個別招待が必要

#### 招待方法の階層設計
```
推奨：メール招待
├─ 相手のメールアドレスが分かる場合
├─ 確実に本人に届けたい場合
└─ 1対1で招待したい場合

その他：招待URL生成
├─ LINE・Slackなどで送りたい場合
├─ メールアドレスが分からない場合
└─ 面接時に直接渡したい場合
```

#### UI/UX特徴
- **カード式レイアウト**: 推奨度による視覚的階層
- **ステップガイド**: 複雑な操作を段階的に案内
- **状態表示**: 未使用・使用済みの明確な区別
- **注意喚起**: 1回限り使用の重要性を強調

#### ファイル構成
```
app/(auth)/shops/[id]/
├── page.tsx           # 店舗詳細（招待状況表示）
├── edit/page.tsx      # 店舗設定編集
└── invite/page.tsx    # 招待管理（Ultra UX実装）
```

#### データベース設計
```sql
ShopInvitation
├── id (UUID)
├── token (UUID, unique)
├── shopId (店舗ID)
├── expiresAt (有効期限)
├── createdBy (作成者)
└── usedBy[] (InvitationUse relationship)

InvitationUse
├── invitationId (招待ID)
├── userId (使用者ID)
└── usedAt (使用日時)
```

### 🎨 UXパターン実装

#### エラーハンドリングパターン
```typescript
// ✅ 推奨: ユーザーフレンドリーなメッセージ
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

#### ダークモード対応パターン
```typescript
// ✅ 推奨: Chakra UI v3テーマトークン
<Text 
  fontSize="sm" 
  bg="blue.50" 
  p={3} 
  borderRadius="md"
  _dark={{ bg: 'blue.900', color: 'blue.100' }}
>
  {shop.description}
</Text>
```

## 🎨 フロントエンド開発ガイドライン

### Chakra UI実装（IMPORTANT）
- **必須参照**: UI作成時は必ず `chakraui-llms-full.txt` を参照すること
- **バージョン**: Chakra UI v3を使用
- **コンポーネント命名**: Card.Root, Card.Body などのドット記法を使用

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
- ダウンロードフォルダからスクリーンショットを検索(IMPORTANT)
- `logs/screenshots/` ディレクトリに自動移動(IMPORTANT)
- 元ファイルの自動削除(IMPORTANT)

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

---

## 🎨 スマートマイページダッシュボード設計（Ultra UX実装）

### 📊 設計思想
従来の単純なページ一覧から、**ユーザーが最も必要とする情報を最も使いやすい形**で提供する革新的ダッシュボードへ進化

### 🧠 主要なUX改善特徴

#### 1. **動的時間認識システム**
```typescript
// リアルタイムでの勤務状態判定
const getWorkStatus = (shift) => {
  if (!shift) return 'off';
  const [startTime] = shift.startTime.split(':').map(Number);
  const [endTime] = shift.endTime.split(':').map(Number);
  const currentHour = now.getHours();
  
  if (currentHour < startTime - 1) return 'before';    // 出勤1時間前まで
  if (currentHour < startTime) return 'soon';          // 出勤1時間前
  if (currentHour <= endTime) return 'working';        // 勤務中
  return 'finished';                                   // 勤務終了
};
```

#### 2. **コンテキスト駆動UI**
- **出勤前**: 「出勤」ボタン（teal色）+ 勤務予定詳細
- **勤務中**: 「退勤」ボタン（red色）+ 現在時刻表示 + 励ましメッセージ
- **休日**: 労いメッセージ「お疲れさまでした！」+ リラックス演出
- **出勤直前**: 注意喚起アイコン + 「もうすぐ出勤時間です！」

#### 3. **予測型情報提示**
```typescript
// 明日の勤務予定自動プレビュー
{tomorrowShifts.length > 0 && (
  <Card.Root bg="blue.50" borderLeft="4px solid" borderColor="blue.400">
    <Text fontSize="sm" fontWeight="medium" color="blue.700">明日の勤務予定</Text>
    <Text fontSize="md" color="blue.600">
      {tomorrowShifts[0].shopName} - {tomorrowShifts[0].shifts.find(s => s.date === tomorrowString)?.time}
    </Text>
  </Card.Root>
)}
```

#### 4. **緊急通知統合システム**
- マネージャー: 未処理申請数をリアルタイム表示
- スタッフ: 緊急通知を視覚的に強調
- ワンクリックで該当ページへ直接アクセス

#### 5. **動的シフトデータ生成**
```typescript
const generateShiftsFromToday = () => {
  // 実際の今日から7日間のリアルなシフトを70%確率で生成
  // 固定データではなく、常に「今日」を正確に判定
}
```

### 🎨 視覚的階層とカラーシステム

#### カラー戦略
- **今日のシフト**: `teal.50`背景 + `teal.500`左ボーダー + 太字
- **明日のシフト**: `blue.50`背景 + `blue.400`左ボーダー  
- **緊急通知**: `orange`色系で一貫した警告表現
- **休日状態**: `gray`色系で落ち着いた印象

#### アイコン使用法
- **時間状態**: `HiPlay`(出勤), `HiStop`(退勤), `HiExclamation`(注意)
- **役割識別**: `HiUser`(マネージャー), `HiUserGroup`(スタッフ)
- **機能分類**: `HiCalendar`(スケジュール), `HiClock`(時間)

### 📱 レスポンシブ対応とモバイル最適化
- **グリッドシステム**: `base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'`
- **アクションボタン**: タップしやすいサイズ（`size="lg"`）
- **情報密度**: モバイルで見やすい行間とフォントサイズ

### 🚀 パフォーマンス最適化
- **リアルタイム計算**: 最小限の計算でブラウザ負荷軽減
- **条件分岐**: 不要なコンポーネント描画を避ける効率的なレンダリング
- **状態管理**: 複雑な状態をローカル変数で軽量化

### 📊 ユーザビリティ向上施策

#### 情報の優先度設計
1. **最優先**: 今日の勤務状況（勤務中/出勤前/休み）
2. **高優先**: 緊急通知・未処理申請
3. **中優先**: 明日の勤務予定
4. **低優先**: 一般的なお知らせ・店舗一覧

#### ユーザーフローの最適化
```
ダッシュボード表示 → 勤務状態を一目で把握 → 必要なアクション（出勤/退勤/確認）→ 直接的な遷移
```

#### エラー予防設計
- **時間的ミス防止**: 出勤直前の自動注意喚起
- **操作ミス防止**: 明確なボタンラベルと色分け
- **情報過多防止**: 重要度に応じた情報の段階的表示

### 🎯 成果指標（期待値）
- **操作効率**: 主要アクション（出勤/退勤）への到達時間 50%短縮
- **情報把握速度**: 今日の勤務状況把握時間 70%短縮  
- **ユーザー満足度**: 毎日使いたくなる愛着感の向上
- **エラー削減**: 出勤忘れ・時間間違いなどのヒューマンエラー 40%削減

この**Ultra UX実装**により、マイページは単なる「メニュー画面」から、**ユーザーの日常業務を支援する知的ダッシュボード**へと完全に進化しました！✨