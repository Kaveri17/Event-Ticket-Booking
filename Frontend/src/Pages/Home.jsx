

import React from 'react'

const Home = () => {
  return (
   <>
   <div className='sita h-screen w-full'>
    <div className=' w-5/6 mx-auto '>
      <div className=' text-6xl font-bold text-center p-48 text-white r'>
        <h1>Connecting the World</h1>
     
      <div>
        <p className='text-xl pt-5'>Easy to search, You just enter the keyword</p>
      </div>

      <div className='w-1/3'>

      <div className='w-1/3'>
      

      </div>


       
          {/* <div >
          <input
            type="text"
            value='search'
            placeholder="Search restaurant by name, city & country"
            className="pl-10  shadow-lg"
          />
          </div>
           */}
      
      </div>
      </div>


    </div>
   </div>

   {/* events */}
    <div className='md:w-5/6 mx-auto pt-12  '>
    <div className='flex justify-between gap-4 flex-wrap lg:flex-nowrap   '>

   
    {/* business */}
   <div className=  ' lg:w-1/6 w-full md:w-1/3 border-2 border-solid border-gray-200 hover:border-red-300 cursor-pointer p-8 '>
   <div className='pt-3 ml-5'>
    <img src="/business.png" alt="" />
    <h1 className='text-xl font-bold pt-4'>Business</h1>
    <span className='text-lg'>3 Events</span>
   </div>
    
    </div>
    {/* concert */}
    <div className='lg:w-1/6 w-full md:w-1/3  border-2 border-solid border-gray-200 hover:border-red-300 cursor-pointer p-8 '>
   <div className='pt-3 ml-5'>
    <img src="/music.png" alt="" />
    <h1 className='text-xl font-bold pt-4'>Concert</h1>
    <span className='text-lg'>2 Events</span>
   </div>
    </div>
{/* food and drinks */}
<div className='lg:w-1/6 w-full md:w-1/3 border-2 border-solid border-gray-200 hover:border-red-300 cursor-pointer p-8 '>
   <div className='pt-3 ml-5'>
    <img src="/food_drink.png" alt="" />
    <h1 className='text-xl font-bold pt-4'>Food&Drink</h1>
    <span className='text-lg'>2 Events</span>
   </div>
    </div>
    {/* sport */}
    <div className='lg:w-1/6 w-full md:w-1/3  border-2 border-solid border-gray-200 hover:border-red-300 cursor-pointer p-8 '>
   <div className='pt-3 ml-5'>
    <img src="/sport.png" alt="" />
    <h1 className='text-xl font-bold pt-4'>Sport</h1>
    <span className='text-lg'>5 Events</span>
   </div>
    </div>
    {/*Conference  */}
    <div className='lg:w-1/6 w-full md:w-1/3  border-2 border-solid border-gray-200 hover:border-red-300 cursor-pointer p-8 '>
   <div className='pt-3 ml-5'>
    <img src="/conference.png" alt="" />
    <h1 className='text-xl font-bold pt-4'>Conference</h1>
    <span className='text-lg'>5 Events</span>
   </div>
    </div>
      {/* Festival */}
    <div className='lg:w-1/6 w-full md:w-1/3  border-2 border-solid border-gray-200 hover:border-red-300 cursor-pointer p-8  '>
   <div className='pt-3 ml-5'>
    <img src="/festival.png" alt="" />
    <h1 className='text-xl font-bold pt-4'>Festival</h1>
    <span className='text-lg'>5 Events</span>
   </div>
    </div>
    </div>
   </div>
   {/* holiday */}
   <div className='w-5/6 mx-auto pt-12'>
    <div>
      <h1 className='text-4xl font-bold '>Upcoming Events</h1>
      <h1 className='text-xl text-neutral-500'>You can choose to display featured</h1>
        
    </div>
   </div>

   </>
  )
}

export default Home