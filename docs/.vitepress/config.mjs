import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iRacing SDK Documentation",
  description: "Community documentation for iRacing SDK",
  base: '/irsdkdocs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'YAML Structures', link: '/yaml/' },
      { text: 'Telemetry', link: '/telemetry/' },
      { text: 'iRacing.com', link: 'https://iracing.com' },
    ],
    sidebar: {
      // fallback
      '/yaml/': generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: '/yaml',
        useTitleFromFileHeading: true,
        useFolderLinkFromIndexFile: true,
        sortMenusByName: true
      }),
      '/telemetry/': generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: '/telemetry',
        useTitleFromFileHeading: true,
        useFolderLinkFromIndexFile: true,
        sortMenusByName: true
      }),
      '/': generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: '/',
        excludePattern: ['yaml/', 'telemetry/'],
        useTitleFromFileHeading: true,
        useFolderLinkFromIndexFile: true,
        sortMenusByName: true
      })
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/sajax/irsdkdocs/edit/master/docs/:path'
    }
  }
})
