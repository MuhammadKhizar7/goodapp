import React from 'react'
import { Link } from 'gatsby'

export const PrimaryButton = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium transition-colors duration-100 rounded-md text-white bg-blue-700 hover:bg-blue-500 ${className}`}
    >
      {children}
    </Link>
  )
}

export const SecondaryButton = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium transition-colors duration-100 text-blue-700 bg-orange-300 rounded-md shadow lg:text-sm group hover:bg-orange-200 ${className}`}
    >
      {children}
    </Link>
  )
}
export const SecondaryButtonLink = ({ children, className, ...rest }) => {
  return (
    <a
      {...rest}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium transition-colors duration-100 text-blue-700 bg-orange-300 rounded-md shadow lg:text-sm group hover:bg-orange-200 ${className}`}
    >
      {children}
    </a>
  )
}
