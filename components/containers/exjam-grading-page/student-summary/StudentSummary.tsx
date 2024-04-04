"use client"
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
import { MdKeyboardArrowRight } from 'react-icons/md'
import { GoTriangleDown } from 'react-icons/go'
import { FaCaretUp } from 'react-icons/fa'



const invoices = [
  {
    no: "1",
    category: "Stretching",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "2",
    category: "Exercises",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "3",
    category: "Zuki",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "4",
    category: "Uke",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "5",
    category: "Uchi",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "6",
    category: "Geri",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "7",
    category: "Dachi",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "8",
    category: "Tenshin",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "9",
    category: "Kumite",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "10",
    category: "Kata",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "11",
    category: "Bunkai",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "12",
    category: "Online Demonstration",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "13",
    category: "Class Performance",
    fullMark: "5",
    studentMark: '00',
  },
  {
    no: "14",
    category: "Personal Development",
    fullMark: "5",
    studentMark: '00',
  },

]
const StudentSummary = () => {
  return (
    <div className='bg-white rounded-3xl shadow-sm shadow-light_gray'>
      <div>


        <Table>
          <TableHeader>
            <TableRow className=''>
              <TableHead className="text-center bg-light_gray  rounded-tl-3xl ">No</TableHead>
              <TableHead className="text-center bg-light_gray ">Category</TableHead>
              <TableHead className="text-center bg-light_gray ">Full Mark</TableHead>
              <TableHead className="text-center bg-light_gray  rounded-tr-3xl">Student Mark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.no} className=''>
                <TableCell className="font-medium text-center border-b py-1">{invoice.no}</TableCell>
                <TableCell className="text-center border-b py-1">{invoice.category}</TableCell>
                <TableCell className="text-center border-b py-1">{invoice.fullMark}</TableCell>
                <TableCell className="text-center border-b  flex items-center justify-center gap-3 py-1">
                  {invoice.studentMark}
                  <div className='flex flex-col '>
                    <FaCaretUp size={17} className='text-light_gray' />
                    <GoTriangleDown size={17} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>

        <div className='flex justify-end mt-4 p-5'>
          <div>
            <p> Total marks out of 100 is:   <span className='text-green-500'> 70</span></p>
            <div className='flex items-center gap-2 mt-4'>
              <Button className='bg-[#FFB606] text-primary rounded-full'>Conform</Button>
              <Button className='bg-off_white text-primary rounded-full flex items-center gap-2'>All Result
                <span className='bg-primary w-4 h-4 rounded-full text-white flex items-center justify-center first:'><MdKeyboardArrowRight /></span>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StudentSummary