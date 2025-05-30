# Frontend Development Guidelines

## 📋 開発原則

### UI/UX設計
- ✅ ダークモード対応: テーマトークン使用 (`border`, `blackAlpha.50`)
- ✅ レイアウト簡素化: 不要なFlex/VStack入れ子を避ける
- ✅ 適切なアイコン選択: 機能に合致したもの選択
- ✅ Chakra UI参考資料: `chakraui-llms-full.txt`を参照してコンポーネント実装

### コード品質
- ✅ 可読性重視: 効率的共通化 < 上から下への読みやすさ
- ✅ 操作と検証の分離: operations(操作) ≠ test(検証)
- ✅ 重複実装防止: 事前の既存機能確認必須

## 🏗 主要コンポーネント

### SideMenu (`src/components/layout/SideMenu/`)
```
機能: レスポンシブサイドバーナビゲーション
特徴: ダークモード対応、アクティブ状態表示、ログアウト機能

メニュー構成:
├── マイページ (/mypage)
├── シフト (/shifts)  
├── 勤怠記録 (/attendance)
├── タイムカード (/timecard)
└── 設定 (/settings)

⚠️ ユーザー設定(/config/user)はメインナビゲーション対象外
```

## 📖 重要な設計決定

| 項目 | 決定内容 | 理由 |
|------|----------|------|
| ユーザー設定配置 | 設定ページ内で管理 | メインナビゲーション簡潔化 |
| テスト構造 | expectは全てテストファイル内 | 読みやすさ最優先 |
| ダークモード対応 | テーマトークン使用 | 固定色回避で自動対応 |

## 🎨 Chakra UI実装ガイド

### 基本方針
- `chakraui-llms-full.txt`を参考にしてコンポーネント実装
- テーマトークンを積極的に活用
- レスポンシブ対応を考慮した設計

### よく使うパターン
```typescript
// ダークモード対応の背景色
bg="blackAlpha.50"          // 薄い透明度
borderColor="border"        // テーマ対応ボーダー

// レイアウト簡素化
<VStack gap={4}>           // 適切なgapでシンプルに
  <Button width="full">    // 必要最小限のprops
</VStack>
```