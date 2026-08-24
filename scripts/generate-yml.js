import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Импортируем массив товаров из вашей папки src/data/Products.js
import { PRODUCTS } from '../src/data/Products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateYml() {
  const siteUrl = "https://your-domain.com/lavka"; // Укажите реальный URL вашего сайта

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<yml_catalog date="${new Date().toISOString().slice(0, 19).replace('T', ' ')}">\n`;
  xml += `  <shop>\n`;
  xml += `    <name>Лавка</name>\n`;
  xml += `    <company>Лавка Продукты</company>\n`;
  xml += `    <url>${siteUrl}</url>\n`;
  xml += `    <currencies>\n      <currency id="RUB" rate="1"/>\n    </currencies>\n`;
  xml += `    <categories>\n      <category id="1">Продукты</category>\n    </categories>\n`;
  xml += `    <offers>\n`;

  PRODUCTS.forEach((p) => {
    xml += `      <offer id="${p.id}" available="true">\n`;
    xml += `        <url>${siteUrl}/#product-${p.id}</url>\n`;
    xml += `        <price>${p.price}</price>\n`;
    xml += `        <currencyId>RUB</currencyId>\n`;
    xml += `        <categoryId>1</categoryId>\n`;
    xml += `        <name>${escapeXml(p.name || p.title)}</name>\n`;
    if (p.description) {
      xml += `        <description>${escapeXml(p.description)}</description>\n`;
    }
    xml += `      </offer>\n`;
  });

  xml += `    </offers>\n`;
  xml += `  </shop>\n`;
  xml += `</yml_catalog>`;

  // Сохраняем YML прямо в готовую статику Vike
  const distDir = path.join(__dirname, '../dist/client');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(path.join(distDir, 'feed.yml'), xml, 'utf8');
  console.log('✅ YML-фид успешно сгенерирован в dist/client/feed.yml');
}

generateYml();