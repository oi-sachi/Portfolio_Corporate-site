// nav.js を作って各ページからfetchで読み込む
fetch('/components/nav.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('nav').innerHTML = html;
  });