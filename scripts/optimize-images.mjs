// 批量将原始 PNG 漫画压缩为 WebP，输出到 docs/public/images/bank/
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = 'C:/Users/康子悦/Doubao/chats/2026-11-20/new-chat-1/银行对公柜台账户管理知识_图片'
const outDir = path.join(__dirname, '..', 'docs', 'public', 'images', 'bank')

fs.mkdirSync(outDir, { recursive: true })

const files = fs.readdirSync(srcDir).filter(f => /^\d{2}\.png$/i.test(f)).sort()

let totalSrc = 0
let totalOut = 0

for (const file of files) {
  const srcPath = path.join(srcDir, file)
  const name = path.basename(file, '.png')
  const outPath = path.join(outDir, `${name}.webp`)

  await sharp(srcPath)
    .resize({ width: 1000, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outPath)

  const srcSize = fs.statSync(srcPath).size
  const outSize = fs.statSync(outPath).size
  totalSrc += srcSize
  totalOut += outSize
  console.log(`${name}.webp  ${(srcSize / 1024 / 1024).toFixed(2)}MB -> ${(outSize / 1024).toFixed(0)}KB`)
}

console.log(`\n合计：${(totalSrc / 1024 / 1024).toFixed(1)}MB -> ${(totalOut / 1024 / 1024).toFixed(1)}MB`)
