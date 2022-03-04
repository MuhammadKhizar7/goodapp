import React from 'react'
import { graphql, Link } from 'gatsby'
import MyHelmet from '../components/MyHelmet'
import { Container } from '../components/Sections'
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid'
import NewsPageTemplate from './NewsPageTemplate'
import Layout from '../components/Layout'

const NewsPage = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post
  return (
    <Layout>
      <MyHelmet title={fm.title} description={post.excerpt} />
      <NewsPageTemplate
        title={fm.title}
        date={fm.date}
        image={fm.featuredimage}
        body={post.html}
      />

      {/* Links to previous and next project */}
      <Container className=''>
        <div className='sm:flex sm:justify-between sm:items-center sm:gap-4 border-t py-4'>
          {previous && previous.frontmatter.templateKey === 'project-page' ? (
            <Link to={previous.fields.slug} className='group'>
              <div className='flex items-center gap-x-2 text-gray-500'>
                <ArrowNarrowLeftIcon className='w-5 h-5' />
                Next
              </div>
              <h3 className='font-bold text-lg text-gray-700 group-hover:underline'>
                {previous.frontmatter.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {next && next.frontmatter.templateKey === 'project-page' ? (
            <div className='mt-6 sm:mt-0'>
              <Link to={next.fields.slug} className='group sm:text-right'>
                <div className='flex items-center gap-x-2 text-gray-500 sm:justify-end'>
                  Previous
                  <ArrowNarrowRightIcon className='w-5 h-5' />
                </div>
                <p className='mt-4 uppercase text-green-600 font-bold text-xs tracking-wide'>
                  {next.frontmatter.location}
                </p>
                <h3 className='font-bold text-lg text-gray-700 group-hover:underline'>
                  {next.frontmatter.title}
                </h3>
              </Link>
            </div>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </Layout>
  )
}

export default NewsPage

export const NewsQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        location
        featuredimage {
          alt
          image {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
