"use client"
import React from 'react'
import FilterPanel from '../filter-panel/FilterPanel'
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
import StudentProfileView from '../student-profile-view/StudentProfileView'
import StudentSummary from '../student-summary/StudentSummary'


const invoices = [
    {
        No: 1,
        Name: "John Doe",
        Batch: "A",
        Date: "2024-04-01",
        StartDate: "2024-03-01",
        EndDate: "2024-04-01",
        totalStudent: 30,
    },
]



const StudentDetails = () => {

    const handleAction = (data: any) => {

    }

    return (
        <div className='mt-10  3xl:p-6 2xl:p-6 xl:p-6 lg:p-6   '>
            <div>
                <FilterPanel />
                <div>
                    <Table className="">
                        <TableHeader>
                            <TableRow className='text-[12px] bg-light_gray '>
                                <TableHead className="text-center rounded-tl-2xl">No</TableHead>
                                <TableHead className='text-center '>Name</TableHead>
                                <TableHead className='text-center '>Batch</TableHead>
                                <TableHead className='text-center '>Date</TableHead>
                                <TableHead className='text-center '>Start Date</TableHead>
                                <TableHead className='text-center '>End Date</TableHead>
                                <TableHead className='text-center rounded-tr-2xl'>Total Student</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className='bg-white '>
                            {invoices.map((invoice, index) => (
                                <TableRow key={invoice.Date} className='bg-white'>
                                    <TableCell className='text-center text-[12px] py-0 px-0 p-3 rounded-bl-3xl'>{invoice.No}</TableCell>
                                    <TableCell className='text-center text-[12px] py-0 px-0 p-3'>{invoice.Name}</TableCell>
                                    <TableCell className='text-center text-[12px] py-0 px-0 p-3'>{invoice.Batch}</TableCell>
                                    <TableCell className='text-center text-[12px] py-0 px-0 p-3'>{invoice.Date}</TableCell>
                                    <TableCell className='text-center text-[12px] py-0 px-0 p-3'>{invoice.StartDate}</TableCell>
                                    <TableCell className='text-center text-[12px] py-0 px-0 p-3'>{invoice.EndDate}</TableCell>
                                    <TableCell className='text-center text-[12px] py-0 px-0 p-3 rounded-br-3xl'>{invoice.totalStudent}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div
                    className='grid 3xl:grid-cols-2  2xl:grid-cols-2 xl:grid-cols-2   mt-10 gap-6 lg:grid-cols-2 md:grid-cols-1  '>
                    <StudentProfileView />
                    <StudentSummary />
                </div>
            </div>
        </div>
    )
}

export default StudentDetails