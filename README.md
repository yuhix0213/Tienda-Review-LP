# Tienda Review LP — Integrated v1.0

LPの全主要セクションを一つのNext.jsプロジェクトとして統合した完成版です。

## 統合済みセクション

1. Header
2. Hero
3. Education / Cómo funciona
4. Problem
5. Barrier
6. Smart Review™
7. Growth
8. Digital Trust
9. FAQ
10. CTA
11. Footer

## v1.0統合時の修正

- 正式Tienda Review横長SVGロゴをHeaderとFooterへ実装
- 正式スクエアアイコンをfavicon / shortcut / Apple iconへ設定
- 実在しないセクションへ向いていたHeaderリンクを修正
- 全主要セクションにアンカーIDを設定
- スムーズスクロールと固定Header用オフセットを追加
- 暫定メールアドレスと未実装SNSリンクを削除
- 未完成の法務ページをクリック不能な「準備中」表示へ変更
- モバイル時のロゴサイズとセクション遷移を調整

## 現時点で意図的に未実装

- 問い合わせフォームのバックエンド
- ログイン機能
- Privacy / Terms / Cookieの正式ページ
- OGP画像
- Analytics
- 本番ドメインへのデプロイ設定

これらは全セクション完成後の機能・公開準備工程で実装します。

## 起動

```bash
npm install
npm run dev
```

## ビルド確認

```bash
npm run build
```
