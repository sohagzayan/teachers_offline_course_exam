'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import FilterPanel from '../filter-panel/FilterPanel'
import { useRouter } from 'next/navigation'

const invoices = [
    {
        No: 1,
        Name: "John Doe",
        Batch: "A",
        Date: "2024-04-01",
        StartDate: "2024-03-01",
        EndDate: "2024-04-01",
        TeacherConfirmation: "Confirmed",
        status: true,
        key: '/student-details/23'

    },
    {
        No: 1,
        Name: "John Doe",
        Batch: "A",
        Date: "2024-04-01",
        StartDate: "2024-03-01",
        EndDate: "2024-04-01",
        TeacherConfirmation: "Confirmed",
        status: false,
        key: '/student-details'

    },
    {
        No: 1,
        Name: "John Doe",
        Batch: "A",
        Date: "2024-04-01",
        StartDate: "2024-03-01",
        EndDate: "2024-04-01",
        TeacherConfirmation: "Confirmed",
        status: false,
        key: '/student-details',

    },
    {
        No: 1,
        Name: "John Doe",
        Batch: "A",
        Date: "2024-04-01",
        StartDate: "2024-03-01",
        EndDate: "2024-04-01",
        TeacherConfirmation: "Confirmed",
        status: false,
        key: '/student-details'
    },
    // Add more invoice entries as needed
]

function DisplayTeacherProfile() {

    const router = useRouter()
    return (
        <div className='mt-10 bg-white p-6 rounded-3xl '>
            <FilterPanel />
            <div>
                <div>
                    <div className='shadow-sm rounded-3xl'>
                        <Table className="">
                            <TableHeader>
                                <TableRow className='text-[12px] bg-light_gray '>
                                    <TableHead className="text-center rounded-tl-2xl">No</TableHead>
                                    <TableHead className='text-center '>Name</TableHead>
                                    <TableHead className='text-center '>Batch</TableHead>
                                    <TableHead className='text-center '>Date</TableHead>
                                    <TableHead className='text-center '>Start Date</TableHead>
                                    <TableHead className='text-center '>End Date</TableHead>
                                    <TableHead className='text-center rounded-tr-2xl'>Teacher Confirmation</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className=''>
                                {invoices.map((invoice, index) => (
                                    <TableRow key={invoice.Date}>
                                        <TableCell className='text-center text-[12px] py-0 px-0 p-1'>{invoice.No}</TableCell>
                                        <TableCell className='text-center text-[12px] py-0 px-0 p-1'>{invoice.Name}</TableCell>
                                        <TableCell className='text-center text-[12px] py-0 px-0 p-1'>{invoice.Batch}</TableCell>
                                        <TableCell className='text-center text-[12px] py-0 px-0 p-1'>{invoice.Date}</TableCell>
                                        <TableCell className='text-center text-[12px] py-0 px-0 p-1'>{invoice.StartDate}</TableCell>
                                        <TableCell className='text-center text-[12px] py-0 px-0 p-1'>{invoice.EndDate}</TableCell>
                                        <TableCell className='text-center text-[12px] py-0 px-0 p-1'>
                                            {/* Your button component here */}
                                            <button className={`bg-[#27245C] text-white px-4 py-2 rounded-full ${invoice.status ? ' bg-opacity-100 pointer-events-auto' : 'bg-opacity-50 pointer-events-none'}`}
                                                onClick={() => router.push(invoice.key)}>
                                                Conform
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayTeacherProfile
