export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f730c124a0f9b5b52a5f169',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-inork3a5',
                  apiId: '23cafba5-fbd0-4a5f-94b7-b09ca0f0fe15'
                },
                {
                  buildHookId: '5f730c1288e45861b2070b0c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-568orx6e',
                  apiId: 'a29a82ed-210c-4ace-be2a-10d7bf795dc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dejiabiola/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-568orx6e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
