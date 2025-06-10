import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Simple-Card/__docusaurus/debug',
    component: ComponentCreator('/Simple-Card/__docusaurus/debug', 'f94'),
    exact: true
  },
  {
    path: '/Simple-Card/__docusaurus/debug/config',
    component: ComponentCreator('/Simple-Card/__docusaurus/debug/config', '259'),
    exact: true
  },
  {
    path: '/Simple-Card/__docusaurus/debug/content',
    component: ComponentCreator('/Simple-Card/__docusaurus/debug/content', '26e'),
    exact: true
  },
  {
    path: '/Simple-Card/__docusaurus/debug/globalData',
    component: ComponentCreator('/Simple-Card/__docusaurus/debug/globalData', '96e'),
    exact: true
  },
  {
    path: '/Simple-Card/__docusaurus/debug/metadata',
    component: ComponentCreator('/Simple-Card/__docusaurus/debug/metadata', '1c5'),
    exact: true
  },
  {
    path: '/Simple-Card/__docusaurus/debug/registry',
    component: ComponentCreator('/Simple-Card/__docusaurus/debug/registry', '2f0'),
    exact: true
  },
  {
    path: '/Simple-Card/__docusaurus/debug/routes',
    component: ComponentCreator('/Simple-Card/__docusaurus/debug/routes', '518'),
    exact: true
  },
  {
    path: '/Simple-Card/blog',
    component: ComponentCreator('/Simple-Card/blog', '388'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/archive',
    component: ComponentCreator('/Simple-Card/blog/archive', '5fc'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/authors',
    component: ComponentCreator('/Simple-Card/blog/authors', 'dee'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Simple-Card/blog/authors/all-sebastien-lorber-articles', '1ae'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/authors/yangshun',
    component: ComponentCreator('/Simple-Card/blog/authors/yangshun', 'f46'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/first-blog-post',
    component: ComponentCreator('/Simple-Card/blog/first-blog-post', '30e'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/long-blog-post',
    component: ComponentCreator('/Simple-Card/blog/long-blog-post', 'eea'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/mdx-blog-post',
    component: ComponentCreator('/Simple-Card/blog/mdx-blog-post', 'ffb'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/tags',
    component: ComponentCreator('/Simple-Card/blog/tags', '034'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/tags/docusaurus',
    component: ComponentCreator('/Simple-Card/blog/tags/docusaurus', '2fe'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/tags/facebook',
    component: ComponentCreator('/Simple-Card/blog/tags/facebook', '778'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/tags/hello',
    component: ComponentCreator('/Simple-Card/blog/tags/hello', 'f1f'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/tags/hola',
    component: ComponentCreator('/Simple-Card/blog/tags/hola', '697'),
    exact: true
  },
  {
    path: '/Simple-Card/blog/welcome',
    component: ComponentCreator('/Simple-Card/blog/welcome', '057'),
    exact: true
  },
  {
    path: '/Simple-Card/markdown-page',
    component: ComponentCreator('/Simple-Card/markdown-page', 'eea'),
    exact: true
  },
  {
    path: '/Simple-Card/docs',
    component: ComponentCreator('/Simple-Card/docs', '92f'),
    routes: [
      {
        path: '/Simple-Card/docs',
        component: ComponentCreator('/Simple-Card/docs', 'f21'),
        routes: [
          {
            path: '/Simple-Card/docs',
            component: ComponentCreator('/Simple-Card/docs', '42d'),
            routes: [
              {
                path: '/Simple-Card/docs/intro',
                component: ComponentCreator('/Simple-Card/docs/intro', '2ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Simple-Card/',
    component: ComponentCreator('/Simple-Card/', 'd3d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
