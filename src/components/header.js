import React from 'react'
import ArrowDown from "../assets/arrow-down.png"
import Avatar from "../assets/Avatar.png"

const Header = () => {
    return (
        <>
            <div className='flex justify-between mx-8 mt-12'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-white text-xl font-medium tracking-wide'>THE </h3>
                    <h3 className='bg-white px-1 text-xl font-medium tracking-wide'>PRODUCT</h3>
                    <h3 className='text-white text-xl font-medium tracking-wide'>PLATFORM</h3>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-1'>
                        <h1 className='text-gray-500 text-lg font-bold'>Learn</h1>
                        <img src={ArrowDown} alt='arrow-down' />
                    </div>
                    <div className='flex items-center gap-1'>
                        <h1 className='text-gray-500 text-lg font-bold'>Practice</h1>
                        <img src={ArrowDown} alt='arrow-down' />
                    </div>
                    <div>
                        <img width={38} src={Avatar} alt='avatar' />
                    </div>
                </div>
            </div>
            <div className='border mt-10'>

            </div>
        </>
    )
}

export default Header