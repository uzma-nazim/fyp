'use client'
import AdviceBox from '@/Component/AdviceBox/AdviceBox'
import Header from '@/Component/Header/Header'
import React from 'react'
import { Suspense } from 'react'
const index = () => {
  return (
    <>
    <Header/>
    <Suspense>
    <AdviceBox/>
    </Suspense>
    </>
  )
}

export default index
