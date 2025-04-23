import fs from 'fs';
import path from 'path';

const articlesPath = './_data/articles.json';
const templatePath = './templates/template.html';
const cardPath = './templates/card.html';

const outputDirs = {
  fr: './fr',
  en: './en',
  es: './es'
};

const indexFiles = {
  fr: './index.html',
  en: './index-en.html',
  es: './index-es.html'
};

const langSuffix = {
  fr: '',
  en: '-en',
  es: '-es'
};

function formatTemplate(template, data) {
  return template
    .replace(/{{title}}/g, data.title)
    .replace(/{{date}}/g, data.date)
    .replace(/{{{body}}}/g, data.body)
    .replace(/{{imgSrc}}/g, data.image.src)
    .replace(/{{imgAlt}}/g, data.image.alt)
    .replace(/{{slug}}/g, data.slug)
    .replace(/{{intro}}/g, data.intro)
    .replace(/{{lang}}/g, data.lang)
    .replace(/{{langSuffix}}/g, langSuffix[data.lang]);
}

function insertIntoIndex(indexFile, cardBlock) {
  const marker = '<!-- AUTO-INSERT-ARTICLES -->';
  let indexContent = fs.readFileSync(indexFile, 'utf8');
  if (!indexContent.includes(marker)) {
    indexContent = `<main class=\"articles-grid\">\n${marker}\n</main>`;
  }
  const updated = indexContent.replace(marker, cardBlock + '\n' + marker);
  fs.writeFileSync(indexFile, updated);
}

const rawData = fs.readFileSync(articlesPath);
const articles = JSON.parse(rawData);
const template = fs.readFileSync(templatePath, 'utf8');
const cardTemplate = fs.readFileSync(cardPath, 'utf8');

articles.forEach(article => {
  ['fr', 'en', 'es'].forEach(lang => {
    const data = {
      slug: article.slug,
      title: article[lang].title,
      date: article[lang].date,
      intro: article[lang].intro,
      body: article[lang].body,
      image: article.image,
      lang
    };

    const content = formatTemplate(template, data);
    const filePath = path.join(outputDirs[lang], `${article.slug}.html`);
    fs.writeFileSync(filePath, content);

    const cardBlock = formatTemplate(cardTemplate, data);
    insertIntoIndex(indexFiles[lang], cardBlock);

    console.log(`✔ Article généré : ${filePath}`);
  });
});

