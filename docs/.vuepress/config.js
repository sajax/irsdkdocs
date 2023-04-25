import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import dirTree from 'directory-tree';
import path from 'path';

const yaml = dirTree(path.join(__dirname, '../yaml'), {extensions:/\.md/});
const telemetry = dirTree(path.join(__dirname, '../telemetry'), {extensions:/\.md/});

export default defineUserConfig({
  lang: 'en-US',
  title: 'iRacing SDK Documentation',
  description: 'Community documentation for iRacing.com\'s SDK',
  base: '/irsdkdocs/',
	theme: defaultTheme({
    repo: 'sajax/irsdkdocs',
    docsBranch: 'master',
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
  }),
	plugins: [searchPlugin()]
});
