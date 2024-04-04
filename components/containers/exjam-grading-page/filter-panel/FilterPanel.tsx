import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import React from 'react'

const FilterPanel = () => {
    return (
        <div>
            <div className='flex items-center gap-4 justify-end mb-6 flex-wrap'>
                <div>
                    <form className="flex items-center max-w-sm mx-auto ">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 end-0 flex items-center pe-6 pointer-events-none">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-off_white border shadow-sm focus:outline-primary shadow-light_gray rounded-full  text-gray-900 text-sm    block w-full pe-10  p-2.5 px-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything here " required />
                        </div>
                    </form>
                </div>
                <div>
                    <div className='inline-flex px-2 cursor-pointer py-2 rounded-full items-center gap-2 text-sm bg-off_white 
                    shadow-sm shadow-light_gray border'>
                        <Image src="/assets/icons/Filter.svg" width={16} height={16} alt='icon' />
                        <p>Filter</p>
                    </div>
                </div>
                <div>
                    <Select>
                        <SelectTrigger className=" min-w-[220px] rounded-full bg-off_white shadow-sm shadow-light_gray">
                            <SelectValue placeholder="Select courses" />
                        </SelectTrigger>
                        <SelectContent className='bg-white'>
                            <SelectGroup>
                                <SelectItem value="course 1">Karate Course 22041 </SelectItem>
                                <SelectItem value="course 2">course 1 </SelectItem>
                                <SelectItem value="course 3">course 2</SelectItem>
                                <SelectItem value="course 3">course 3</SelectItem>
                                <SelectItem value="course 5">course 4</SelectItem>
                                <SelectItem value="course 6">course</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Select >
                        <SelectTrigger className=" min-w-[220px] rounded-full bg-off_white shadow-sm shadow-light_gray">
                            <SelectValue placeholder="Course schedule" />
                        </SelectTrigger>
                        <SelectContent className='bg-white'>
                            <SelectGroup>
                                <SelectItem value="online">Online courses</SelectItem>
                                <SelectItem value="offline">Offline Courses</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel