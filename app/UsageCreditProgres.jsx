import { Progress } from '@/components/ui/progress'
import React from 'react'

function UsageCreditProgres() {
  return (
    <div className='p-3 mb-5 border rounded-2xl flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Free plan</h2>
        <p className='text-gray-400'>0/5 message Used</p>
        <Progress value={33} />
    </div>
  )
}

export default UsageCreditProgres 