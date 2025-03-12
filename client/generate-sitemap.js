const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://jinxsage.com/' });

  const urls = [
    { url: '/home', changefreq: 'daily', priority: 1.0 },
    { url: '/profile/:id', changefreq: 'yearly', priority: 1.0 },
    { url: '/authors', changefreq: 'yearly', priority: 1.0 },
    { url: '/create', changefreq: 'yearly', priority: 0.5 },
    { url: '/posts/categories/:category', changefreq: 'daily', priority: 1.0 },
    { url: '/posts/users/:id', changefreq: 'daily', priority: 1.0 },
    { url: '/myposts/:id', changefreq: 'daily', priority: 1.0 },
    { url: '/posts/:id/edit', changefreq: 'daily', priority: 1.0 },
    { url: '/posts/:id/delete', changefreq: 'daily', priority: 1.0 },
    { url: '/logout', changefreq: 'daily', priority: 1.0 },
  ];

  urls.forEach((url) => sitemap.write(url));
  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap).then((data) => data.toString());

  fs.writeFileSync('./public/sitemap.xml', sitemapXML);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();
