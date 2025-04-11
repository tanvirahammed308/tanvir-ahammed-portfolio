import React from 'react'
import img1 from "../../assets/img/icons/html.png"
import img2 from "../../assets/img/icons/css.png"
import img3 from "../../assets/img/icons/js.png"
import img4 from "../../assets/img/icons/react.png"

const MyExpertise = () => {

    const imgs=[

        {
            img:img1,
            name:"html"
        },
        {
            img:img2,
            name:"css"
        },
        {
            img:img3,
            name:"js"
        },
        {
            img:img4,
            name:"react"
        }
    ]
  return (
    <div className='mt-20 bg-gray-200 px-2 py-2 md:py-10 md:px-10 rounded-md '>
        <h1 className='text-3xl font-bold text-[#1A1D41] capitalize py-5 text-center'>my expertise</h1>
        {/* card */}
        <div className='card-parent flex flex-wrap justify-evenly my-5 gap-5'>
            {
                imgs.map((item,index)=><div key={index} className='border-3 border-[#1A1D41] w-[100px] p-2 rounded-2xl flex flex-col justify-center items-center shadow-md bg-white'>
                <div className='flex-grow'>
                    <img src={item.img} alt="" className='w-16'/>
                </div>
                <div className=' border-t-2 border-[#1A1D41] w-[100px] mt-2 '>
                    <h2 className='text-center font-bold'>{item.name}</h2>
                </div>
            </div>)
            }
            

        </div>
    </div>
  )
}

export default MyExpertise