import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    content: '自分のキャリアのスタートはIOSネイティブアプリのエンジニアとして。これまでのキャリアの中でIOSネイティブアプリエンジニアとして業務を通じ基礎的なコーディングを取得、WEBを扱うサーバサイドで足りていないと言った環境も相まってJQUERYを始めとしたCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んでいきました。'
  }
});

export default app;
