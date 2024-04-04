"use client"
import { DisplayTeacherProfile, ExjamGradingStepper } from '@/components/containers/exjam-grading-page'
import StudentDetails from '@/components/containers/exjam-grading-page/student-details/StudentDetails'
import React, { useState } from 'react'

const ExamGrading = () => {
    const [isDetails, setIsDetails] = useState(false)
    return (
        <main className="p-6 ">
            <div>
                <div>
                    <ExjamGradingStepper />
                    <DisplayTeacherProfile />
                </div>
            </div>
        </main>
    )
}

export default ExamGrading