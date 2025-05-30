# E2E Testing Strategy

## 🧪 実行方法

```bash
pnpm e2e                    # 全E2Eテスト実行
pnpm e2e <test-file>        # 特定テストファイル実行
```

## 📐 テスト設計原則

### Core Philosophy
```
可読性 > 効率性
上から下の流れ > 複雑な抽象化
直接的なexpect > 間接的な検証関数
```

### 構造分離
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

// ❌ 非推奨: operations内での検証
export const navigateAndVerify = async (page, url) => {
  await page.goto(url);
  await expect(page).toHaveURL(url);  // operations内での検証はNG
};
```

## 🗂 ディレクトリ構造

```
e2e/
├── CLAUDE.md              # このファイル
├── tests/                 # テストファイル群
│   ├── navigation/
│   │   └── sideMenu.test.ts
│   └── login/
│       ├── initialRegister.test.ts
│       └── transition.test.ts
└── utils/
    └── operations/        # 純粋な操作関数群 (expectなし)
        ├── auth/
        │   ├── login.ts
        │   └── logout.ts
        ├── form/
        │   └── registerUser.ts
        └── navigation/
            └── navigateToPage.ts
```

## 🎯 テストケース管理

### データ配置原則
- **テストケース定数**: 各テストファイル内に配置
- **共有が必要**: 明確な理由がある場合のみ外部ファイル化

### SideMenuナビゲーションテスト

#### 対象ページ
```typescript
const navigationTestCases = [
  { buttonText: 'マイページ', url: '/mypage', expectedHeading: 'マイページ' },
  { buttonText: 'シフト', url: '/shifts', expectedHeading: 'シフト' },
  { buttonText: '勤怠記録', url: '/attendance', expectedHeading: '勤怠記録' },
  { buttonText: 'タイムカード', url: '/timecard', expectedHeading: 'タイムカード' },
  { buttonText: '設定', url: '/settings', expectedHeading: '設定' },
];
```

#### テスト内容
1. **ページ遷移+アクティブ状態**: 1回ログイン後、順次全ページ訪問
2. **ログアウト機能**: ログアウト後の画面遷移確認

#### パフォーマンス最適化
- ✅ ログインは各テストで1回のみ (`beforeEach`)
- ✅ 順次ナビゲーションで効率的にテスト
- ✅ 重複するセットアップ処理の排除

## 🔧 環境問題の解決策

### esbuild プラットフォームエラー
```
Error [TransformError]: You installed esbuild for another platform...
```

**原因**: WSL環境でWindowsのnode_modules使用

**解決法**:
```bash
rm -rf node_modules
pnpm install
```

## 🔒 開発制約

### 実装制約
- ❌ **指示外テストケース追加禁止**: 明示的に指示されていないテスト実装不可
- ❌ **UI変更制限**: テスト対象UIの勝手な変更は事前承認必須
- ❌ **技術スタック変更禁止**: Playwright機能の勝手な変更不可

### 品質管理プロセス

#### 実装前チェックリスト
- [ ] **既存テスト重複確認**: 類似機能のテストケース確認
- [ ] **技術制約確認**: Playwrightバージョン等の制約確認
- [ ] **共通操作特定**: 重複する操作関数の特定と活用

#### 実装後検証
- [ ] **段階的検証**: 各テスト実装後の迅速な動作確認
- [ ] **エラー対応**: 問題発生時の切り分けと原因特定
- [ ] **トレース確認**: 失敗時のデバッグ情報確実な確認

### 完了報告フォーマット
```markdown
## テスト実装完了報告

### 実装したテストケース
- [テストケース一覧]

### 発生した問題と対応
- [問題内容と解決策]

### 既存テストへの影響
- [影響の有無と詳細]

### 今後の注意点・改善提案
- [気づいた点や改善案]
```

## 🚀 今後の方針

- **可読性最優先**: テストの意図が一目で分かる構造維持
- **メンテナンス性**: 新機能追加時の容易な拡張
- **操作関数純粋性**: expectを含まない操作関数の徹底