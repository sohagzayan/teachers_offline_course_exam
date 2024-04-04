import React from 'react'
import { FaHandHolding, FaUser, FaUserCheck, FaUserGraduate, FaUsers } from 'react-icons/fa'
import { PiExamFill } from 'react-icons/pi'

const navItems = (role: any) => {

    const defaultNavItems = [

        {
            label: "Discover",
            key: `/discover`,
            icon: ""

        },
        {
            label: "For ",
            key: `/candidates/overview`,
            icon: ""

        },
        {
            label: "For companies",
            key: `/recruit/overview`,
            icon: ""
        },
    ]

    const user = [
        {
            label: 'karate Course',
            key: `/`,
            icon: <FaHandHolding />


        },
        {
            label: 'Online karate Courses',
            key: `/online-karate-courses`,
            icon: <FaUserGraduate />

        },
        {
            label: 'Students',
            key: `/student`,
            icon: <FaUsers />


        },
        {
            label: 'Attendances',
            key: `/attendances`,
            icon: <FaUserCheck />


        },
        {
            label: 'Exam & Grading',
            key: `/exam-grading`,
            icon: <PiExamFill />


        },


    ]

    const adminNavItem = [{
        label: 'karate Course',
        key: `/discover`,
        icon: ""
    },
    {
        label: 'Overview',
        key: `/candidates/overview`,
        icon: ""

    },]

    // if have any others user role here and all side bar item have a role base access control 


    if (role === 'user') return user
    else if (role === 'admin') return adminNavItem
    else {
        return defaultNavItems
    }
}

export default navItems