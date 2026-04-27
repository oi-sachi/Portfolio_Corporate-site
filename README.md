# ABC Technologies コーポレートサイト. / ABC Technologies Corporate Site

ITシステム開発・DX推進コンサルティングを行う株式会社ABCテクノロジーのコーポレートサイトです。  
大井佐智のポートフォリオ作品として制作しました。

---

## ページ構成 / Sitemap

| ファイル | ページ名 |
|---|---|
| index.html | ホーム |
| company.html | 会社情報 |
| service.html | 料金一覧 |
| recruit.html | 採用情報 |
| job-ui-designer.html | 募集要項（UI/UXデザイナーのみ） |
| apply.html | 採用応募フォーム |
| contact.html | 資料請求フォーム / 無料相談フォーム |
| privacy.html | プライバシーポリシー |

---

## 技術スタック / Tech Stack 

- HTML / CSS / JavaScript（バニラ、フレームワークなし）
- Google Fonts（Noto Sans JP）
- Formspree（静的フォーム送信）

---

## ディレクトリ構成 / Directory Structure

```
/
├── css/
│   ├── style.css          # メインスタイル
│   └── responsive.css     # レスポンシブ対応（767px以下）
├── images/                # 画像素材
├── nav.js                 # ナビゲーション制御
├── index.html
├── company.html
├── service.html
├── recruit.html
├── job-ui-designer.html
├── apply.html
├── contact.html
└── privacy.html
```

---

## フォームの設定について / Form Configuration

お問い合わせフォーム（contact.html）および採用応募フォーム（apply.html）は [Formspree](https://formspree.io) を使用しています。  
利用する際は以下の手順でフォームIDを設定してください。

1. [https://formspree.io](https://formspree.io) にアクセスしてアカウントを作成
2. 「New Form」を作成し、受信するメールアドレスを登録
3. 発行されたフォームID（例：`xpwzabcd`）を各HTMLの `action` 属性に設定

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## レスポンシブ対応 / Responsive Design

`css/responsive.css` にて767px以下の画面サイズに対応しています。  
`index.html` の `<link>` タグで条件付き読み込みを行っています。

```html
<link rel="stylesheet" href="css/responsive.css" media="screen and (max-width: 767px)" />
```

---

## 制作者 / Author

**Sachi Oi** — UI/UX Designer & Web Designer  
- Portfolio: [https://oisachi0405.github.io](https://oisachi0405.github.io)
- LinkedIn: [https://www.linkedin.com/in/oisachi/](https://www.linkedin.com/in/oisachi/)

---

© 2026 Sachi Oi. All rights reserved.
