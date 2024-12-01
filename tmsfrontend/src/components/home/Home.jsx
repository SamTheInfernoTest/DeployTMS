import React from 'react'

import useUser from '../../context/UserContext'
import CircularChart from './CircularChart'

function Home() {

  const { axiosSecure,standards } = useUser()
  return (
    <div className='w-full h-full'>
      <div className=''>
        <div className='w-full h-[34vh] overflow-hidden object-cover relative rounded-md '>
          <img src="https://picsum.photos/1200/400" alt="" 
          className='w-full h-full object-cover'
          />
          <h2
            className='absolute bottom-0 text-xl font-semibold  sm:text-right text-center bg-black/25 text-white p-2 max-h-fit sm:ml-32 rounded-lg text-pretty'
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repellendus nemo libebus dignissimos ipsa tempora debitis.</h2>
        </div>
        <div className='w-full p-3 sm:flex justify-between hidden gap-28 h-20  bg-lightPanel dark:bg-darkPanel relative rounded-lg'>
          <img
            className='w-28 h-36 overflow-hidden rounded-lg -translate-y-24 '
            src="https://picsum.photos/200/301" alt="" />
            <div className=''>

            <h3 className='p-5 font-semibold'>
              {standards.join(' ')}
            </h3>
            </div>
        </div>
        {console.log
        (sessionStorage.getItem('moto'))}
      </div>
      <div className='mt-10 flex gap-4 sm:flex-row flex-col'>
        <h2
        className='text-3xl font-semibold my-auto'
        >Task Completion</h2>
        <CircularChart a={40} b={100} />
      </div>
    </div>
  )
}

export default Home