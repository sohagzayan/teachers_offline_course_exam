import Image from 'next/image'
import React from 'react'
import { IoCaretDown } from 'react-icons/io5'

const ExjamGradingStepper = () => {
    return (
        <div className=''>
            <div>
                <ul className='flex items-center justify-between relative z-20 after:absolute after:w-full after:h-1 after:bg-light_gray after:top-[50%] after:left-[50%] after:-z-10 after:rounded-full after:translate-x-[-50%] after:translate-y-[-50%] '>
                    <li className='relative border-2 border-secondary rounded-full p-1'>
                        <Image src="/assets/images/g-wb.svg" width={40} height={30} alt='icon' />
                        <span className='absolute text-secondary top-[130%] left-[50%] translate-x-[-50%] translate-y-[-50%] '><IoCaretDown size={22} /></span>
                    </li>
                    <li className='border-2 border-secondary rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-yb.svg" width={40} height={30} alt='icon' />
                    </li>
                    <li className=' rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-ob.svg" width={40} height={40} alt='icon' />
                    </li>
                    <li className='border-2 border-secondary rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-gb.svg" width={40} height={40} alt='icon' />
                    </li>
                    <li className=' rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-bb.svg" width={40} height={40} alt='icon' />
                    </li>
                    <li className='border-2 border-secondary rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-pb.svg" width={40} height={40} alt='icon' />
                    </li>
                    <li className=' rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-rb.svg" width={40} height={40} alt='icon' />
                    </li>
                    <li className=' rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-wbb.svg" width={40} height={40} alt='icon' />
                    </li>
                    <li className='rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-bbb.svg" width={40} height={40} alt='icon' />
                    </li>
                    <li className='border-2 border-secondary rounded-full p-1 bg-light_gray'>
                        <Image src="/assets/images/g-bb.svg" width={40} height={40} alt='icon' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ExjamGradingStepper