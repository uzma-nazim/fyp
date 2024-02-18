"use client"
import Header from '@/Component/Header/Header'
import SurveyForm from '@/Component/SurveyForm/SurveyForm'
import React from 'react'
import bg from "@/images/bg.jpg";

const page = () => {
    return (
        <div
            style={{
                backgroundImage: ` url(${bg.src})`
            }}
        >

            <Header />
            <SurveyForm />
        </div>
    )
}

export default page
