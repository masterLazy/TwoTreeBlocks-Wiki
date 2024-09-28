import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Two Three Blocks Wiki',
  tagline: '二三方块 Minecraft 服务器官方 Wiki',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://masterLazy.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TwoThreeBlocks-Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'masterLazy', // Usually your GitHub org/user name.
  projectName: 'TwoThreeBlocks Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/masterLazy/TwoThreeBlocks-Wiki/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: 'Two Three Blocks Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ttb.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mySidebar',
          position: 'left',
          label: '服务器概述',
        },
        {
          to: '/docs/guide/alpha',
          position: 'left',
          label: '加入',
        },
        {
          to: '/docs/donate',
          position: 'left',
          label: '赞助',
        },
        {
          href: 'https://github.com/masterLazy/TwoThreeBlocks-Wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '服务器概述',
              to: '/docs/intro',
            },
            {
              label: '加入我们',
              to: '/docs/guide/alpha'
            },
            {
              label: '赞助我们',
              to: '/docs/donate'
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/masterLazy/TwoThreeBlocks-Wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @masterLazy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
