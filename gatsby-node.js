const path = require(`path`)


exports.createPages = async ({ graphql, actions}) => {
    const {createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')

    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    
    `)
    const posts = res.data.allContentfulBlogPost.edges
    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
    
        createPage({
        //   path: post.node.slug,
          path: `/blog/${post.node.slug}`,
          component: blogTemplate,
          context: {
            slug: post.node.slug,
            previous,
            next,
          },
        })
      })
    }
    