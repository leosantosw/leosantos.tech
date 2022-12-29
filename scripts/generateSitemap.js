const fs = require('fs')
const globby = require('globby')

;(async () => {
  const pages = await globby([
    'pages/**/*{.tsx,.jsx,.js}',
    '!pages/_*{.tsx,.jsx,.js}'
  ])
  const fixedPages = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('./', '')
              .replace('pages', '')
              .replace('.tsx', '')

            const route = path === '/index' ? '' : path

            return `
            <url>
              <loc>${`https://leosantos.tech${route}`}</loc>
            </url>
          `
          })
          .join('')}
      </urlset>
    `

  fs.writeFileSync('public/sitemap.xml', fixedPages)
})()
