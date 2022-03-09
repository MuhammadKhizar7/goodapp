import React from 'react'
import Search from './Search'
const Modal = ({ show, setShow }) => {
  return (
    <>
      {/* <!-- Extra Large Modal --> */}
      <div
        className={
          (show ? '' : 'hidden') +
          ' overflow-hidden bg-green-700 bg-opacity-75 fixed right-0 left-0 top-0 z-50 flex justify-center md:inset-0 h-model h-full'
        }
        id='extralarge-modal'
      >
        <div className='relative px-4 w-full max-w-7xl h-full md:h-auto mt-20'>
          {/* <!-- Modal content --> */}
          <div className='relative bg-white rounded-lg shadow'>
            {/* <!-- Modal header --> */}
            <button
              type='button'
              className='text-white bg-red-400 hover:bg-red-300 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center -mt-4 absolute -right-4 top-0'
              data-modal-toggle='extralarge-modal'
              onClick={() => {
                setShow(false)
              }}
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            {/* <!-- Modal body --> */}
            <div className='p-6 space-y-6'>
              <Search></Search>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
