import React, { use, useEffect } from 'react'
import Nav from './Nav'
import { categories } from '../category'
import CategoryCard from './CategoryCard'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import { useState } from 'react';
import { useSelector } from 'react-redux';



function UserDashboard() {
  const {currentCity}=useSelector(state=>state.user)
  const cateScrollRef = React.useRef();
  const [showLeftCateButton, setShowLeftCateButton] = useState(false);
  const [showRightCateButton, setShowRightCateButton] = useState(false);

  const updateButton=(ref, setLeftButton, setRightButton)=>{
    const element = ref.current;
    if(element){
      setLeftButton(element.scrollLeft > 0);
      setRightButton(element.scrollWidth > element.clientWidth + element.scrollLeft);
    }
  }
  const scrollHandler = (ref, direction) => {
    if(ref.current){
      ref.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth"
      })
    }
  }

  useEffect(()=>{
    if(cateScrollRef.current){
      updateButton(cateScrollRef, setShowLeftCateButton, setShowRightCateButton)
      cateScrollRef.current.addEventListener("scroll",()=>{
        updateButton(cateScrollRef, setShowLeftCateButton, setShowRightCateButton)
      })
    }

    return ()=>cateScrollRef.current.removeEventListener("scroll",()=>{
        updateButton(cateScrollRef, setShowLeftCateButton, setShowRightCateButton)
      })
  },[categories])

  return (
    // <div className='w-full min-h-screen flex flex-col items-center px-5 py-8'>
    //   <h1 className='text-2xl font-bold'>User Dashboard</h1>
    // </div>
    <div className='w-screen min-h-screen flex flex-col gap-5 items-center bg-[#fff9f6] overflow-y-auto'>
      <Nav />
      {/* category section */}
      <div className='w-full max-w-6xl flex flex-col gap-5 items-start p-[10px]'>
        <h1 className='text-gray-800 text-2xl sm:text-3xl'> Inspiration for your first order</h1>
        <div className='w-full relative'>
          {showLeftCateButton && <button className='absolute left-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10 ' onClick={()=>scrollHandler(cateScrollRef,"left")}>
            <FaCircleChevronLeft />
          </button>}
          
          <div className='w-full flex overflow-x-auto gap-4 pb-2 ' ref={cateScrollRef}>
            {categories.map((cate, index)=>(
              <CategoryCard data={cate} key={index} />
            ))}
          </div>
          {showRightCateButton && <button className='absolute right-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10 ' onClick={()=>scrollHandler(cateScrollRef,"right")}>
            <FaChevronCircleRight />
          </button> }
          
        </div>
      </div>

      {/* Shop section */}
      <div className='w-full max-w-6xl flex flex-col gap-5 items-start p-[10px]'>
        <h1 className='text-gray-800 text-2xl sm:text-3xl'>Best Shop in  {currentCity}</h1>

      </div>

    </div>
  )
}

export default UserDashboard
