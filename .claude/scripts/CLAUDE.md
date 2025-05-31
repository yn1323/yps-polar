# Claude Code Scripts

## 📁 ディレクトリ概要
Claude Code専用のスクリプト集です。開発作業の効率化とワークフロー自動化のために作成されています。

## 🎯 利用目的
- Claude Code での開発作業支援
- Puppeteer MCP との連携処理
- プロジェクト固有の自動化タスク

---

## 📸 Screenshot Management

### `move-screenshots.cjs`
**目的**: Puppeteer MCP + html2canvas で撮影したスクリーンショットを管理

**機能**:
- ユーザーのダウンロードフォルダから Google認証関連のスクリーンショットを検索
- `logs/screenshots/` ディレクトリに自動移動
- 元ファイルの自動削除

**使用方法**:
```bash
# Claude Code での実行
node .claude/scripts/move-screenshots.cjs
```

**ワークフロー**:
1. Puppeteer MCP でページアクセス
2. ブラウザ内で html2canvas を実行（ダウンロードフォルダに保存）
3. このスクリプトでプロジェクト内に移動

**対象ファイル**:
- ファイル名に `google-auth` を含む `.png` ファイル
- 今後他のパターンも追加予定

---

## 🔧 メンテナンス

### スクリプト追加時の注意
- **拡張子**: ESモジュールエラー回避のため `.cjs` を使用
- **権限**: 必要に応じて `chmod +x` で実行権限付与
- **設定**: `.claude/settings.local.json` に実行権限を追加

### 今後の拡張予定
- [ ] E2Eテスト結果のスクリーンショット管理
- [ ] Storybook VRT用画像処理
- [ ] 開発サーバー起動状態チェック
- [ ] ログファイル整理・アーカイブ

---

## 🚀 Claude Code Integration

このディレクトリのスクリプトは Claude Code の作業効率を向上させるために設計されています。

**設計原則**:
- ✅ 単一責任: 1つのスクリプト = 1つの明確な目的
- ✅ 自動化: 手動作業の最小化
- ✅ エラーハンドリング: 適切なログ出力とエラー処理
- ✅ プロジェクト連携: yps-polar の開発フローとの統合