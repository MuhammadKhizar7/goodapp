import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const { site, post, news } = useStaticQuery(
    graphql`
      query SITE_FOOTER_QUERY {
        site {
          siteMetadata {
            siteName {
              first
              middle
              last
            }
            title
            description
          }
        }
        post: allMarkdownRemark(
          limit: 3
          filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
        news: allMarkdownRemark(
          limit: 3
          filter: { frontmatter: { templateKey: { eq: "news-page" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `
  )
  const { siteName, title, description } = site.siteMetadata
  const { nodes: posts } = post
  const { nodes: siteNews } = news

  return (
    <footer className='bg-orange-300'>
      <div className='max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
        <div className='lg:flex'>
          <div className='w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5'>
            <div className='px-4 sm:px-6 lg:px-8'>
              <Link className='flex items-center gap-1' to='/'>
                <StaticImage
                  src='../images/khatm-e-nubuwat_academy_icon.svg'
                  alt='Khatm-e-Nubuwat Academy icon'
                  layout='fixed'
                  width={40}
                  height={40}
                  backgroundColor='transparent'
                  placeholder='blurred'
                />
                <div className='text-xl font-bold tracking-wide uppercase'>
                  <span className='font-semibold pr-2'>{siteName.first}</span>
                  <span className='text-green-700'>
                    {siteName.middle} &nbsp; {siteName.last}
                  </span>
                </div>
              </Link>

              <p className='max-w-md mt-2 '>{description}</p>
            </div>
          </div>

          <div className='mt-6 lg:mt-0 lg:flex-1'>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4'>
              <div>
                <h3 className='text-gray-700 uppercase'>About</h3>
                <Link
                  to='/about'
                  className='block mt-2 text-sm  hover:underline'
                >
                  About
                </Link>
                <Link
                  to='/contact'
                  className='block mt-2 text-sm hover:underline'
                >
                  Contact
                </Link>
                <Link
                  to='/introduction'
                  className='block mt-2 text-sm hover:underline'
                >
                  Introduction
                </Link>
              </div>

              <div>
                <h3 className='text-gray-700 uppercase'>Blog</h3>
                {posts.map(({ fields: { slug }, frontmatter: { title } }) => {
                  return (
                    <Link
                      key={slug}
                      to={slug}
                      className='block mt-2 text-sm hover:underline truncate'
                    >
                      {title}
                    </Link>
                  )
                })}
              </div>
              <div>
                <h3 className='text-gray-700 uppercase'>News</h3>
                {siteNews.map(
                  ({ fields: { slug }, frontmatter: { title } }) => {
                    return (
                      <Link
                        key={slug}
                        to={slug}
                        className='block mt-2 text-sm hover:underline truncate'
                      >
                        {title}
                      </Link>
                    )
                  }
                )}
              </div>
              <div>
                <h3 className='text-gray-700 uppercase '>Contact</h3>
                <span className='block mt-2 text-sm  hover:underline'>
                  +1 526 654 8965
                </span>
                <span className='block mt-2 text-sm  hover:underline'>
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className='h-px my-6 border-orange-400' />

        <div>
          <p className='text-center'>
            © {title} {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
