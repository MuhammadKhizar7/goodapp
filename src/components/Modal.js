import React from 'react'
import { PrimaryButton } from './Buttons'

const Modal = ({ show, setShow }) => {
  return (
    <>
      {/* <!-- Extra Large Modal --> */}
      <div
        className={
          (show ? '' : 'hidden') +
          ' overflow-y-auto overflow-x-hidden bg-orange-300 bg-opacity-75 fixed right-0 left-0 top-4 z-50 flex justify-center items-center md:inset-0 h-model sm:h-full'
        }
        id='extralarge-modal'
      >
        <div className='relative px-4 w-full max-w-7xl h-full md:h-auto'>
          {/* <!-- Modal content --> */}
          <div className='relative bg-white rounded-lg shadow'>
            {/* <!-- Modal header --> */}
            <div className='flex justify-between items-center p-5 rounded-t border-b '>
              <div className='relative w-full'>
                <input
                  type='text'
                  name='search'
                  id='search'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow outline-none focus:ring-green-500 focus:border-green-500 block w-full p-2.5'
                  placeholder='Search'
                  required
                />
              </div>
              {/* <PrimaryButton className={'ml-4'} to={'#'}>
                <span className='text-white'>Search</span>
              </PrimaryButton> */}
              <button
                type='button'
                className='text-white bg-red-400 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center -mt-4 absolute -right-4 top-0'
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
            </div>
            {/* <!-- Modal body --> */}
            <div className='p-6 space-y-6'>
              <p className='text-base leading-relaxed text-gray-500 '>
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
