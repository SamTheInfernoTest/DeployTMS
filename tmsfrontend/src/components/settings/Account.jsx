import React from 'react'

import ImageUploader from './ImageUploader'
import useUser from '../../context/UserContext'


function Account() {

    const { profileImage, setProfileImage } = useUser()

    return (
        <div>
            <div >
                <h2
                    className='text-lg font-semibold py-2'
                >Change Password</h2>
                <div className=''>

                <input
                    className='p-1 rounded-md'
                    type="password" placeholder='New Password' />
                <div className='py-2'>

                <input
                    className='p-1 rounded-md' type="password" placeholder='Confirm Password' />
                <button
                className='ml-8 p-1 px-2 rounded-xl bg-lightButton text-white'
                >Change Password</button>
                </div>
                </div>
            </div>
            <hr className='border-b border-black dark:border-white' />
            <div>
                <h2 
                    className='text-lg font-semibold py-2'
                >Change Profile Image</h2>
                <div className='flex py-4'>
                    <ImageUploader image={profileImage} w={40} h={40} />
                </div>
            </div>
            <hr className='border-b border-black dark:border-white' />
            <div>
                <h2
                    className='text-lg font-semibold py-2'
                >Change Home Background</h2>
            </div>
            <div>
                <h2
                    className='text-lg font-semibold py-2'
                >Change Your Moto</h2>
            </div>
        </div>
    )
}

export default Account