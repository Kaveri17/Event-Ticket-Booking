import React from 'react'

import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };
  
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
          <div className=' lg:w-1/6 w-full md:w-1/3 border-2 border-solid border-gray-200 hover:border-red-300 cursor-pointer p-8 '>
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
      <div className='w-5/6 mx-auto pt-12  ' >
        <div>
          <h1 className='text-4xl font-bold '>Upcoming Events</h1>
          <h1 className='text-xl text-neutral-500  pt-2 pb-3'>You can choose to display featured</h1>
          <div className="border-t-2 w-16 pb-6 border-red-500"></div>
        <div className='flex flex-col md:flex-row md:flex-wrap justify-between pt-8 '>
        </div>
        <div className="slider-container ">
          {/* /1 */}

          
      <Slider {...settings}>
        {/* 1 */}
        <div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9  '>

<img src="/music.jpg" alt="" className='w-full h-auto' />


<div className='p-6'>
  <h1 className='text-2xl font-bold pb-3'>Music Concert</h1>


  <div className='items-center flex text-xl text-neutral-500 space-x-2'>
    <i className="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> September 30, 2024, 9:00am</span>
  </div>


  <div className='items-center flex text-lg text-neutral-500 space-x-2 pt-3'>
    <i className="fa-solid fa-location-dot "></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Hotel Ambassador, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Lazimpat </span>

  </div>





  <div className='flex justify-between items-center pt-5'>
    <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
    <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
  </div>
</div>
</div>
       {/*2  */}
     
<div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9  '>

<img src="/images.jpg" alt="" className='w-full h-auto' />


<div className='p-6'>
  <h1 className='text-2xl font-bold pb-3'>Dance Show</h1>


  <div className='items-center flex text-lg text-neutral-500 space-x-2'>
    <i className="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> October 30, 2024, 9:00am</span>
  </div>


  <div className='items-center flex text-xl text-neutral-500 space-x-2 pt-3'>
    <i className="fa-solid fa-location-dot "></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Nachghar, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Jamal </span>

  </div>





  <div className='flex justify-between items-center pt-5'>
    <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
    <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
  </div>
</div>
</div>

        {/*3  */}
<div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9  '>

<img src="/sports.jpg" alt="" className='w-full h-auto' />


<div className='p-6'>
  <h1 className='text-2xl font-bold pb-3'>Sports</h1>


  <div className='items-center flex text-xl text-neutral-500 space-x-2'>
    <i className="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> December 30, 2024, 9:00am</span>
  </div>


  <div className='items-center flex text-lg text-neutral-500 space-x-2 pt-3'>
    <i className="fa-solid fa-location-dot "></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Dasharath Rangasala, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'>Tripureshwar </span>

  </div>





  <div className='flex justify-between items-center pt-5'>
    <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
    <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
  </div>
</div>
</div>
        
        
    
{/* 
          <div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9  '>

            <img src="/music concert.jpg" alt="" className='w-full' />


            <div className='p-6'>
              <h1 className='text-2xl font-bold pb-3'>Music Concert</h1>


              <div className='items-center flex text-xl text-neutral-500'>
                <i className="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> September 30, 2024, 9:00am</span>
              </div>


              <div className='items-center flex text-xl text-neutral-500'>
                <i className="fa-solid fa-location-dot pr-2"></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Hotel Ambassador, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Lazimpat </span>

              </div>





              <div className='flex justify-between items-center pt-5'>
                <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
                <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
              </div>
            </div>
          </div> */}
          {/* 2 */}
          {/* <div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9  '>

            <img src="/music concert.jpg" alt="" className='w-full' />


            <div className='p-6'>
              <h1 className='text-2xl font-bold pb-3'>Music Concert</h1>


              <div className='items-center flex text-xl text-neutral-500'>
                <i className="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> September 30, 2024, 9:00am</span>
              </div>


              <div className='items-center flex text-xl text-neutral-500'>
                <i className="fa-solid fa-location-dot pr-2"></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Hotel Ambassador, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Lazimpat </span>

              </div>





              <div className='flex justify-between items-center pt-5'>
                <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
                <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
              </div>
            </div>
          </div> */}

          {/* 3 */}
          {/* <div className='lg:w-1/3 lg:p:8 w-full border-2 border-gray-200 pb-9 '>

            <img src="/music concert.jpg" alt="" className='w-full' />


            <div className='p-6'>
              <h1 className='text-2xl font-bold pb-3'>Music Concert</h1>


              <div className='items-center flex text-xl text-neutral-500'>
                <i className="fa-solid fa-clock pr-2"></i>  <span className=' text-neutral-500'> September 30, 2024, 9:00am</span>
              </div>


              <div className='items-center flex text-xl text-neutral-500'>
                <i className="fa-solid fa-location-dot pr-2"></i> <span className=' hover:text-red-400 cursor-pointer text-neutral-500 ' >Hotel Ambassador, </span><span className=' hover:text-red-400 cursor-pointer text-neutral-500'> Lazimpat </span>

              </div>





              <div className='flex justify-between items-center pt-5'>
                <button className='py-2 px-4 text-lg font-semibold border-2 border-solid border-gray-400 hover:bg-red-300 hover:text-white'>Get Ticket</button>
                <span className='text-red-400 text-xl font-bold'>Rs-500 - Rs10000</span>
              </div>
            </div>
          </div> */}
            </Slider>
            </div>
        </div>
      </div>

      {/* how it work */}

      <div className='w-5/6 mx-auto pt-12'>
        <div>
          <h1 className='font-bold text-4xl p-4 '>How It Work</h1>
          <p className='pb-4'>You can choose to display featured</p>
          <div className="border-t-2 w-16 pb-8 border-red-500"></div>
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap justify-between items-center '>


          {/* 1 */}
          <div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-12  '>
            <div className='w-1/3 mx-auto bg-gray-100   hover:bg-neutral-200  rounded-full p-6 img1'>
              <img src="/feature_1.png" alt="" className='w-full object-cover  max-w-full   ' />
            </div>

            <div className='p-6 text-center'>
              <h1 className='text-2xl font-bold pb-3'>Choose What To Do</h1>
              <p>Easily find your event via search system with multiple params</p>

            </div>
          </div>

          {/* 2 */}
          <div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-12  '>
            <div className='w-1/3 mx-auto   bg-gray-100   hover:bg-neutral-200  rounded-full  p-6  img1 '>
              <img src="/feature_2.png" alt="" className='w-full object-cover  max-w-full   ' />
            </div>

            <div className='p-6 text-center'>
              <h1 className='text-2xl font-bold pb-3'>
                Booking event that you like</h1>
              <p>Choose Ticket add to cart. Support payment via Woocommerce system</p>
            </div>
          </div>
          {/* 3 */}
          <div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-12 '>
            <div className='w-1/3 mx-auto  bg-gray-100 rounded-full  hover:bg-neutral-200  p-6  img1'>
              <img src="/feature_3.png" alt="" className='w-full  object-cover max-w-full h-auto  ' />
            </div>

            <div className='p-6 text-center'>
              <h1 className='text-2xl font-bold pb-3'>Get the ticket to attend</h1>
              <p>After booking successfully, You will get ticket in email or download in your account</p>
            </div>
          </div>

        </div>

      </div>
      {/*  */}


      {/* subscribe */}


      <div className=' pt-32 ra relative w-5/6 mx-auto '>
        <div className='text-center text-white mb-6 relative z-10'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Stay Up to Date With Your Favourite Events</h1>
          <p className='mt-4 text-base md:text-lg lg:text-xl text-center'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          </p>
          <p className='text-base md:text-lg lg:text-xl text-center'>
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat..
          </p>


          <div className='flex justify-center items-center w-full pb-12 pt-6 '>
            <form className='flex w-full max-w-3xl'>
              <input
                className="border border-stone-400 w-full py-2 px-3 pl-8 rounded-full mr-2"
                type="email"
                placeholder="Enter Your E-mail Address"
                required
              />
              <button className='border-2 rounded-full px-8 py-3 text-white text-lg font-semibold transition duration-200 ease-in-out hover:bg-red-400 hover:text-white'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home