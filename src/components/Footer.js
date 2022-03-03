import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
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
                  <span className='font-semibold pr-2'>Khatm-E-Nubuwat</span>
                  <span className='text-green-700'>Academy London</span>
                </div>
              </Link>

              <p className='max-w-md mt-2 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, nisi! Id.
              </p>
            </div>
          </div>

          <div className='mt-6 lg:mt-0 lg:flex-1'>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4'>
              <div>
                <h3 className='text-gray-700 uppercase'>About</h3>
                <Link to='/' className='block mt-2 text-sm hover:underline'>
                  Company
                </Link>
                <Link to='/' className='block mt-2 text-sm hover:underline'>
                  Community
                </Link>
                <Link to='/' className='block mt-2 text-sm  hover:underline'>
                  Careers
                </Link>
              </div>

              <div>
                <h3 className='text-gray-700 uppercase'>Blog</h3>
                <Link to='/' className='block mt-2 text-sm hover:underline'>
                  Tec
                </Link>
                <Link to='/' className='block mt-2 text-sm hover:underline'>
                  Music
                </Link>
                <Link to='/' className='block mt-2 text-sm hover:underline'>
                  Videos
                </Link>
              </div>

              <div>
                <h3 className='text-gray-700 uppercase'>Products</h3>
                <a
                  href='https://www.gatsbyjs.com/'
                  className='block mt-2 text-sm hover:underline'
                  rel='noreferrer'
                  target='_blank'
                >
                  Gatsby
                </a>
                <a
                  href='https://www.netlifycms.org/'
                  className='block mt-2 text-sm  hover:underline'
                  rel='noreferrer'
                  target='_blank'
                >
                  Netlify CMS
                </a>
                <a
                  href='https://tailwindcss.com/'
                  className='block mt-2 text-sm  hover:underline'
                  rel='noreferrer'
                  target='_blank'
                >
                  Tailwind CSS
                </a>
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

        <hr className='h-px my-6 border-gray-400' />

        <div>
          <p className='text-center'>
            © Khatm-e-nubuwat Academy London {new Date().getFullYear()} - All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
