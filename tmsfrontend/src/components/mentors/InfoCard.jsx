import React from 'react'
import {useState} from 'react'

import  useWeb  from '../../context/WebContext'

function InfoCard({mentor}) {
  const {baseApiUrl} = useWeb()
  return (
    <div
    className="dark:bg-darkPanel bg-lightPanel rounded-xl p-2 flex"
    >
        <div>
        <img src={mentor?.profileImage ? `${baseApiUrl}${mentor?.profileImage}` : '/user.svg'} alt="Profile Image"
          className="w-16 h-16 rounded-full lg:scale-100 scale-75" />
        </div>
        <h2
        className="text-xl font-bold my-auto ml-6"
        >{mentor?.name}</h2>
    </div>
  )
}

export default InfoCard