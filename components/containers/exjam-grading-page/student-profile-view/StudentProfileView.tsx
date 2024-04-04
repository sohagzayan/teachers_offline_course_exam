"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const StudentProfileView = () => {
    return (
        <div>
            <div className='bg-white shadow-sm shadow-light_gray rounded-3xl'>
                <div className='bg-primary py-3 relative overflow-hidden bg-bg-animated bg-no-repeat bg-center after:w-full after:h-full after:bg-[#27245C] after:top-0 after:left-0 after:z-40 after:absolute after:bg-opacity-80 rounded-tr-3xl rounded-tl-3xl'>
                    <div className='bg-[#8280A0]/40 w-[110px] h-[110px] rounded-full flex items-center justify-center mx-auto relative z-50'>
                        <div className='bg-[#DEDEE6] w-[100px] h-[100px] rounded-full flex items-center justify-center'>
                            <div className='bg-[#cfcfd1] w-[90px] h-[90px] rounded-full flex items-center justify-center'>
                                <div className='bg-[#BCBBCC] w-[82px] h-[82px] rounded-full flex items-center justify-center'>
                                    <Image src="/assets/images/user 2.png" width={80} height={80} alt="profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center  '>
                        <motion.div
                            animate={{ x: 50 }}
                            transition={{ ease: "linear", duration: 4, repeat: Infinity, repeatType: "reverse", }}
                        >
                            <Image src="/assets/images/animation 1.png" style={{ width: "100%", height: "100%" }} width={0} height={0} sizes='100wv' alt="Ranch Investor" />
                        </motion.div>
                        <motion.div
                            animate={{ x: -50 }}
                            transition={{ ease: "linear", duration: 4, repeat: Infinity, repeatType: "reverse", }}
                        >
                            <Image src="/assets/images/animation 1.png" style={{ width: "100%", height: "100%" }} width={0} height={0} sizes='100wv' alt="Ranch Investor" className='' />
                        </motion.div>

                    </div>

                </div>
                <div>


                    <div className="relative overflow-x-auto py-6">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Student Nme :
                                    </th>
                                    <td className="px-6 py-4 text-sm">
                                        <select id="countries" className="bg-white focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Choose a Student</option>
                                            <option value="sohag">Sohag</option>
                                            <option value="you">You</option>
                                            <option value="me">Me</option>
                                            <option selected value="Amin">Amin</option>
                                        </select>
                                    </td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Roll No:
                                    </th>
                                    <td className="px-6 py-4">
                                        <select id="countries" className="bg-white focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Choose a role</option>
                                            <option selected value="KC11223344">KC1122334</option>
                                            <option value="KC1122334">KC34343</option>
                                        </select>
                                    </td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Course:
                                    </th>
                                    <td className="px-6 py-4">
                                        <p>SHITO-RYU KARATE White Belt</p>
                                    </td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Batch:
                                    </th>
                                    <td className="px-6 py-4">
                                        <p>Karate Course 22041</p>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Trainer:
                                    </th>
                                    <td className="px-6 py-4">
                                        <p>Adil Rashid</p>
                                    </td>
                                </tr>
                                <tr className="bg-white rounded-br-3xl  dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Result:
                                    </th>
                                    <td className="px-6 py-4">
                                        <p>70(Pass)</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StudentProfileView