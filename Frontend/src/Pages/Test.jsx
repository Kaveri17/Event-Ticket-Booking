




import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
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
        </div>
        <div>
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

        </div>
        <div>
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
        
        
      </Slider>
    </div>
  );
}

export default AutoPlay;
