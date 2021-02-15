export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '602ae0f8983cfd7807c891ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-csbq77no',
                  apiId: 'ce96cea9-c792-44ca-ab98-d8af4d17928c'
                },
                {
                  buildHookId: '602ae0f9e4ec29776c59c537',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-56n44qup',
                  apiId: 'b63ba93c-d285-4de8-bf39-5803fc6b4049'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dawidczech355a/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-56n44qup.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
