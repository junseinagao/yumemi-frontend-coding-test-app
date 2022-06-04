# Yumemi-frontend-coding-test-app

📦 [Deploied Preview here](https://yumemi-frontend-coding-test-app.vercel.app/)

💌 [ゆめみ採用担当者様へこちらを一読ください](./COVER_LETTER.md)

## 開発するためには

```bash
git clone https://github.com/junseinagao/yumemi-frontend-coding-test-app.git
cd yumemi-frontend-coding-test-app
npm ci
```

### 環境変数の設定

`.env.local` を作成してください。

```bash
# .env.local
NEXT_PUBLIC_RESAS_API_URI=https://opendata.resas-portal.go.jp
NEXT_PUBLIC_RESAS_API_KEY=自分で取得したRESASAPIのapikeyを設定してください。
```

### 起動とテスト

```bash
npm run dev
npm test
```