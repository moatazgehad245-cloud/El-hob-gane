# إلى مالك قلبي

صفحة رومانسية بسيطة جاهزة للرفع على GitHub Pages.

## هيكل الملفات

```
valentine-site/
├── index.html      الصفحة الرئيسية (المحتوى)
├── css/
│   └── style.css   الألوان والتصميم
├── js/
│   └── main.js     القلوب الطايرة + ظهور الجواب مع السكرول
└── README.md
```

## الرفع على GitHub Pages

1. ارفعي الملفات كلها على الـ repository مع الحفاظ على الفولدرات (`css/` و`js/`) زي ما هي، والـ `index.html` في أول الـ repository.
2. Settings ← Pages ← Source: **Deploy from a branch**، والـ branch `main` والمجلد `/ (root)`، ثم Save.
3. الرابط بيكون بالشكل ده: `https://اسم-الحساب.github.io/اسم-الريبو/`

## تعديل الكلام

- الجواب موجود في `index.html` جوه `<div class="quote-card">`.
- العنوان موجود في `index.html` جوه `<h1>`.
- اللينك بتاع الأغنية موجود في `href` بتاع `<a class="heart-link">`.
- الألوان بتتغير من `:root` في أول `css/style.css`.
