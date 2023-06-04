import React from 'react'

const Education = () => {
  return (
    <>
     <div className='ms-6 me-5'>
     <div className='text-3xl font-semibold text-gray-900'>
        Education
     </div>
        <ul className='mt-3'>
            <div>
            <li className='font-light text-3xl text-black-400'>Bachelor</li>
            <li className='text-2xl font-normal'> National College Of Engineering</li>
            <div className='flex flex-row justify-between'>
            <span className='text-slate-500 font-serif'>Computer Engineering</span>
            <p className='text-slate-400'>-Lalitpur,Nepal</p>
            </div>
            </div>
        

            <div className='my-7'>
                 
            <li className='font-light text-3xl text-black-400'>H.S.E.B</li>
            <li className='text-2xl font-normal'>Golden Gate Int'l College</li>
            <div className='flex flex-row justify-between'>
            <span className='text-slate-500 font-serif'>Science</span>
            <p className='text-slate-400'>-Kathmandu,Nepal</p>
            </div>
            </div>
           
            <div className='my-7'>
                 
                 <li className='font-light text-3xl text-black-400'>Frontend Course</li>
                 <li className='text-2xl font-normal'>Vrit Technology</li>
                 <div className='flex flex-row justify-between'>
                 <span className='text-slate-500 font-serif'>React js</span>
                 <p className='text-slate-400'>-Kathmandu,Nepal</p>
                 </div>
                 </div>
        </ul>
    </div>
    </>
  )
}

export default Education
