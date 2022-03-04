import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Modal from '../components/modal'

const NAVLINK_CLASSES =
  'my-1 py-3 px-2 text-center font-medium hover:border-b-4 hover:border-green-700 md:mx-2 md:my-0 whitespace-no-wrap'

// this link will be active when itself or deeper routes
// are current
// https://reach.tech/router/api/Link
// this is only active when the location pathname is exactly
// the same as the href.
const isActive = ({ isCurrent }) => {
  return isCurrent
    ? {
        className:
          NAVLINK_CLASSES + '  border-b-4 text-green-700 border-green-700',
      }
    : {}
}

const ExactNavLink = ({ children, ...rest }) => {
  return (
    <div className='flex justify-center'>
      <Link className={NAVLINK_CLASSES} getProps={isActive} {...rest}>
        {children}
      </Link>
    </div>
  )
}

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? {
        className:
          NAVLINK_CLASSES + '  border-b-4 text-green-700 border-green-700',
      }
    : {}
}

const PartialNavLink = ({ children, ...rest }) => {
  return (
    <div className='flex justify-center'>
      <Link className={NAVLINK_CLASSES} getProps={isPartiallyActive} {...rest}>
        {children}
      </Link>
    </div>
  )
}

const Navbar = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-30 bg-orange-300 shadow-xl ${className}`}
      >
        <div className='max-w-7xl px-4 sm:px-3 mx-auto md:flex md:justify-between md:items-center'>
          <div className='flex items-center justify-between py-2'>
            <Link className='flex items-center gap-1' to='/'>
              <StaticImage
                src='../images/khatm-e-nubuwat_academy_icon.svg'
                alt='Khatm-e-Nubuwat Academy icon'
                className='w-8 h-8 sm:w-10 sm:h-10'
                layout='constrained'
                width={40}
                height={40}
                loading='eager'
                backgroundColor='transparent'
                placeholder='none'
              />
              <div className='text-sm sm:text-xl font-bold uppercase xl:block lg:hidden md:hidden'>
                <span className='text-gray-800 font-semibold'>
                  Khatm-E-Nubuwat{' '}
                </span>
                <span className='text-green-700'>Acandemy</span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-green-700 focus:outline-none '
                aria-label='toggle menu'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                  <path
                    fillRule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={
              'items-center ' + (menuOpen ? 'block' : 'hidden') + ' md:flex'
            }
          >
            <div className='flex flex-col w-full md:flex-row md:mx-3 md:my-2 items-center'>
              <ExactNavLink
                to='/'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                Home
              </ExactNavLink>
              <ExactNavLink
                to='/introduction'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                Introduction
              </ExactNavLink>
              <ExactNavLink
                to='/court-law'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                Court Law
              </ExactNavLink>
              <PartialNavLink
                to='/books'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                Books
              </PartialNavLink>
              <PartialNavLink
                to='/news'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                News
              </PartialNavLink>
              <PartialNavLink
                to='/blog'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                Blog
              </PartialNavLink>
              <ExactNavLink
                to='/about'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                About
              </ExactNavLink>
              <ExactNavLink
                to='/contact'
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                Contact
              </ExactNavLink>
              <ExactNavLink
                to='#'
                onClick={() => {
                  setMenuOpen(false)
                  setShow(!show)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </ExactNavLink>
            </div>
          </div>
        </div>
      </nav>
      <Modal show={show} setShow={setShow}></Modal>
    </>
  )
}

export default Navbar
