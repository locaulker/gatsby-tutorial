const path = require("path")

// To create pages dynamically
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulGatsbyTutorialProduct {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
