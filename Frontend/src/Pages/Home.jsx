

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
   <div className='w-5/6 mx-auto pt-12 ' >
    <div>
      <h1 className='text-4xl font-bold '>Upcoming Events</h1>
      <h1 className='text-xl text-neutral-500  pt-2 pb-3'>You can choose to display featured</h1>
      <div className="border-t-2 w-16 pb-6 border-red-500"></div>
    </div>

    <div className='flex flex-col md:flex-row md:flex-wrap justify-between pt-8'>
{/* /1 */}
  
    <div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9  '>
    
    <img src="/music concert.jpg" alt="" className='w-full' />
    

 <div className='p-6'>
 <h1 className='text-2xl font-bold pb-3'>Music Concert</h1>

 
 <div className='items-center flex text-xl text-neutral-500'>
<i class="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> September 30, 2024, 9:00am</span> 
   </div>

      
   <div className='items-center flex text-xl text-neutral-500'>
<i class="fa-solid fa-location-dot pr-2"></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Hotel Ambassador, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Lazimpat </span>

 </div>

 



 <div className='flex justify-between items-center pt-5'>
     <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
     <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
   </div>  
</div>
</div>
    {/* 2 */}
    <div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9  '>
    
    <img src="/music concert.jpg" alt="" className='w-full' />
    

 <div className='p-6'>
 <h1 className='text-2xl font-bold pb-3'>Music Concert</h1>

 
 <div className='items-center flex text-xl text-neutral-500'>
<i class="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> September 30, 2024, 9:00am</span> 
   </div>

      
   <div className='items-center flex text-xl text-neutral-500'>
<i class="fa-solid fa-location-dot pr-2"></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Hotel Ambassador, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Lazimpat </span>

 </div>

 



 <div className='flex justify-between items-center pt-5'>
     <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
     <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
   </div>  
</div>
</div>
    
    {/* 3 */}
    <div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9 '>
    
         <img src="/music concert.jpg" alt="" className='w-full' />
         
     
      <div className='p-6'>
      <h1 className='text-2xl font-bold pb-3'>Music Concert</h1>
    
      
      <div className='items-center flex text-xl text-neutral-500'>
    <i class="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> September 30, 2024, 9:00am</span> 
        </div>

           
        <div className='items-center flex text-xl text-neutral-500'>
<i class="fa-solid fa-location-dot pr-2"></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Hotel Ambassador, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Lazimpat </span>

      </div>
    
      
    

     
      <div className='flex justify-between items-center pt-5'>
          <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
          <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
        </div>  
  </div>
  </div>
    </div>
   </div>
 
{/* how it work */}
 
 <div className='w-5/6 mx-auto pt-12'>
 <div>
  <h1 className='font-bold text-4xl '>How It Work</h1>
  <p>You can choose to display featured</p>
  <div className="border-t-2 w-16 pb-6 border-red-500"></div>
 </div>
 <div className='flex flex-col md:flex-row md:flex-wrap justify-between items-center '>


{/* 1 */}
 <div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-9  '>
 <div className='w-1/3 mx-auto bg-gray-100   hover:bg-neutral-200  rounded-full p-7  img1'>
 <img src="/feature_1.png" alt="" className='w-full object-cover  max-w-full   ' />
 </div>

 <div className='p-6 text-center'>
 <h1 className='text-2xl font-bold pb-3'>Choose What To Do</h1>
 <p>Easily find your event via search system with multiple params</p>
 
</div>
</div>

{/* 2 */}
<div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-9  '>
 <div className='w-1/3 mx-auto   bg-gray-100   hover:bg-neutral-200  rounded-full  p-7  img1 '>
 <img src="/feature_1.png" alt="" className='w-full object-cover  max-w-full   ' />
 </div>

 <div className='p-6 text-center'>
 <h1 className='text-2xl font-bold pb-3'>Choose What To Do</h1>
 <p>Easily find your event via search system with multiple params</p>
</div>
</div>
{/* 3 */}
<div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-9  '>
 <div className='w-1/3 mx-auto  bg-gray-100   hover:bg-neutral-200  rounded-full  p-7  img1 '>
 <img src="/feature_1.png" alt="" className='w-full object-cover  max-w-full    ' />
 </div>

 <div className='p-6 text-center'>
 <h1 className='text-2xl font-bold pb-3'>Choose What To Do</h1>
 <p>Easily find your event via search system with multiple params</p>
</div>
</div>
</div>

 </div>





   </>
  )
}

export default Home