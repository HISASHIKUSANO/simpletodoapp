# Intelligent TODO System - Claude Code Project

## プロジェクト概要
サイバーパンク風のTODOアプリケーション。高度なアニメーション、パーティクルエフェクト、ニューラルネットワーク背景を備えたインテリジェントなタスク管理システム。

## ファイル構成
```
simpletodoapp/
├── index.html          # メインHTMLファイル（ニューラルネットワーク、パーティクル含む）
├── style.css           # 高度なCSS（800+行、アニメーション、エフェクト）
├── script.js           # JavaScript（スムーズなアニメーション付きTODO機能）
├── README.md           # プロジェクト説明書
└── CLAUDE.md           # このファイル（Claude Code用設定）
```

## 技術仕様

### HTML構造
- `particles-background`: 浮遊パーティクルシステム（6個のパーティクル）
- `neural-network`: ニューラルネットワーク可視化（5ノード、3接続）
- `header-section`: グリッチエフェクト付きタイトル
- `input-section`: スキャナー付き入力フィールド
- `todo-list`: アニメーション付きタスクリスト

### CSS機能
- **テーマ**: ダークサイバーパンク（#0a0a0a背景）
- **フォント**: JetBrains Mono（技術的な印象）、Inter
- **アニメーション**: 
  - `taskMaterialize`: タスク作成時のアニメーション
  - `glitch`: テキストグリッチエフェクト
  - `float`: パーティクルの浮遊アニメーション
  - `pulse`: ニューラルネットワークノードのパルス
- **エフェクト**: backdrop-filter blur、グラデーション境界線、発光
- **レスポンシブ**: モバイル対応（768px以下）

### JavaScript機能
- **クラス**: `TodoApp`
- **メソッド**:
  - `addTodo()`: アニメーション付きタスク追加
  - `toggleTodo()`: 完了状態切り替え（⚡アイコン）
  - `deleteTodo()`: 分解アニメーション付き削除
  - `renderWithAnimation()`: スムーズなレンダリング
  - `updateTaskCounter()`: リアルタイムカウンター更新
- **ストレージ**: localStorage自動保存
- **アニメーション**: 各操作に対応するvisual feedback

## デプロイ情報
- **GitHub**: https://github.com/HISASHIKUSANO/simpletodoapp
- **GitHub Pages**: https://hisashikusano.github.io/simpletodoapp/
- **ブランチ**: master
- **デプロイ方法**: GitHub Pages（rootフォルダから）

## 開発履歴
1. 基本TODO機能実装
2. ダークテーマ適用
3. サイバーパンク風デザイン追加
4. パーティクルエフェクト実装
5. ニューラルネットワーク背景追加
6. グリッチエフェクト実装
7. 高度なアニメーション追加
8. レスポンシブデザイン対応
9. GitHub Pages デプロイ

## 再開方法

### 1. プロジェクトディレクトリに移動
```bash
cd /home/kusanohisashi/simpletodoapp
```

### 2. 現在の状態確認
```bash
git status
ls -la
```

### 3. ファイル編集
```bash
# HTML編集
nano index.html
# または Claude Code の Edit tool を使用

# CSS編集  
nano style.css
# または Claude Code の Edit tool を使用

# JavaScript編集
nano script.js
# または Claude Code の Edit tool を使用
```

### 4. 変更の確認とコミット
```bash
# 変更確認
git diff

# ステージング
git add .

# コミット
git commit -m "変更内容の説明"

# プッシュ
git push
```

### 5. ローカルテスト
ブラウザで `/home/kusanohisashi/simpletodoapp/index.html` を開いて動作確認

### 6. デプロイ確認
GitHub Pages: https://hisashikusano.github.io/simpletodoapp/

## よく使用する変更パターン

### 新機能追加
1. HTML構造の拡張（index.html）
2. CSS スタイリング追加（style.css） 
3. JavaScript ロジック実装（script.js）
4. テスト＆デバッグ
5. コミット＆プッシュ

### デザイン調整
1. style.css の該当セクション編集
2. カラーパレット: #7877c6, #ff77c6, #78dbff
3. アニメーション timing の調整
4. レスポンシブ breakpoint 調整

### 機能拡張
1. TodoApp クラスに新メソッド追加
2. localStorage スキーマ拡張
3. 新しいイベントリスナー追加
4. render() メソッドの更新

## 重要な設定値
- **アニメーション duration**: 0.3s - 0.8s
- **Blur値**: 8px - 30px  
- **Border radius**: 12px - 24px
- **Particle数**: 6個
- **Neural network nodes**: 5個
- **Color opacity**: 0.1 - 0.8

## トラブルシューティング
- **アニメーションが動かない**: ブラウザの Developer Tools でCSS エラー確認
- **localStorage が効かない**: プライベートモードでないか確認
- **パーティクルが表示されない**: CSS変数（--delay, --duration）の設定確認
- **レスポンシブが崩れる**: media query の breakpoint 確認

このファイルを参照することで、いつでもプロジェクトの全容を把握し、効率的に開発を再開できます。