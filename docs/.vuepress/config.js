const dirTree = require('directory-tree');
const path = require('path');

const yaml = dirTree(path.join(__dirname, '../yaml'), {extensions:/\.md/});
const telemetry = dirTree(path.join(__dirname, '../telemetry'), {extensions:/\.md/});

module.exports = {
  title: 'iRacing SDK Documentation',
  description: 'Community documentation for iRacing.com\'s SDK',
  base: '/irsdkdocs/',
  themeConfig: {
    repo: 'sajax/irsdkdocs',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: true,
		contributors: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'YAML Structures', link: '/yaml/' },
      { text: 'Telemetry', link: '/telemetry/' },
      { text: 'iRacing.com', link: 'https://iracing.com' },
    ],
    sidebar: {
      // fallback
      '/yaml/': yaml.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '' ),
      '/telemetry/': telemetry.children.map(children => path.parse(children.name).name !== 'README' ? path.parse(children.name).name : '' ),
      '/': [
        '',
        'contexts'
      ]
    }
  },
	plugins: ['@vuepress/search']
}
