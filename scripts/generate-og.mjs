// Generates public/og-image.png (1200x630) — the social share image.
// Run with: node scripts/generate-og.mjs   (requires devDependency "sharp")
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = join(__dirname, '..', 'public', 'og-image.png')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2B4F66"/>
      <stop offset="1" stop-color="#3E6E8E"/>
    </linearGradient>
    <radialGradient id="teal" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7FB6AE" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#7FB6AE" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gold" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#C8A35B" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#C8A35B" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="140" cy="120" r="300" fill="url(#teal)"/>
  <circle cx="1080" cy="560" r="320" fill="url(#gold)"/>

  <!-- Ring "C" logo -->
  <g transform="translate(600,210)">
    <circle cx="0" cy="0" r="74" fill="none" stroke="#7FB6AE" stroke-width="3" opacity="0.6"/>
    <path d="M 52 -36 A 60 60 0 1 0 52 36" fill="none" stroke="#C8A35B" stroke-width="13" stroke-linecap="round"/>
  </g>

  <text x="600" y="380" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="92" font-weight="600" fill="#FFFFFF" letter-spacing="10">CONNECTA</text>

  <rect x="540" y="418" width="120" height="3" rx="1.5" fill="#C8A35B"/>

  <text x="600" y="486" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif"
        font-size="38" fill="#D6E4EA">Terapi og veiledning online</text>

  <text x="600" y="566" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif"
        font-size="26" fill="#9FBDCB" letter-spacing="2">connecta.no</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(out)
console.log('Wrote', out)
