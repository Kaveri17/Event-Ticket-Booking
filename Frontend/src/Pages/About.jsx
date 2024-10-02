import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   speed: 2000,
    //   autoplaySpeed: 2000,
    //   cssEase: "linear",
    //   arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  return (
    <div className='pb-5 '>
      <div className='ram w-full h-screen ' >

        <div className='py-16'>
          <h1 className='text-3xl text-white text-center font-bold '>ABOUT US</h1>

          <div className=' flex-wrap flex flex-row justify-center'>
            <h1 className='text-white text-center font-semibold text-xl '><Link to='/'>Home</Link> <span className='ps-2'> <i class="fa-solid fa-greater-than text-white "></i> </span></h1>
            <h1 className='text-white text-center font-semibold text-xl  ps-2'><Link to='/about'>About</Link></h1>


          </div>
        </div>
      </div>
      {/* our story */}

      <div className='pt-8  w-5/6 mx-auto '>
        <div className=' flex flex-wrap  justify-between '>
          <div className=' w-full lg:w-1/2 '>
            <h1 className='text-3xl font-bold'>Our Story</h1>
            <p className='pt-5 text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos nostrum dolorum officiis eos expedita.
            </p>
            <p className='pt-5 text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos nostrum dolorum officiis eos expedita.
            </p>
            <p className='pt-5 text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos nostrum dolorum officiis eos expedita.
            </p>
          </div>

          <div className='lg:w-1/2 md:pt-4 pt-4 md:ps-4'>
            <img src="/4th img.jpg" alt="Our Story" className='w-full  ' />
          </div>
        </div>
      </div>

      {/* 
      our testimonial */}
      <div className='md:pt-8 pt-2 w-5/6 mx-auto'>
        <div className='flex  flex-wrap justify-between '>
          <div className=' w-full lg:w-1/2 '>
            <img src="/9th img.webp" alt="" className='h-full w-full ' />
          </div>
          <div className=' md:pt-4 pt-4 w-full  lg:w-1/2  items-center '>
            <div className='md:ps-12   text-3xl font-bold'>
              <h1>Our Testomial</h1>

            </div>
            <p className='md:ps-12   text-xl pt-4 pb-4'>The client tell about us..</p>
            <div className='md:ps-12 ps -12 pb-3'>
              <div className="  border-t-4 w-16 border-red-500 ..."></div>
            </div>


            <div className="slider-container">
              <Slider {...settings} >
                <div>
                  <div className=' md:ps-12 text-lg pb-7 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit vel veritatis nisi et in sed quae quos placeat laboriosam.</p>
                  </div>
                  <div className='flex items-center gap-10  '>
                    <div className='ps-12 md:ps-12 sm:w-1/4 max-w-40 md:w-1/2 w-full'>
                      <img src="team1.jpg" alt="" className='  w-full  aspect-square object-left-top rounded-full  ' />
                    </div>
                    <div className='flex flex-col   '>

                      <h1 className='from-neutral-900 md:text-2xl  text-lg'>Henry Cavill</h1>
                      <h1 className='text-neutral-500  md:text-xl text-lg'>CEO</h1>
                    </div>
                  </div>
                </div>

                <div>
                  <div className=' md:ps-12 text-lg pb-7 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit vel veritatis nisi et in sed quae quos placeat laboriosam.</p>
                  </div>
                  <div className='flex items-center gap-10   '>
                    <div className='ps-12 md:ps-12 sm:w-1/4 max-w-40 md:w-1/2 w-full '>
                      <img src="team4.jpg" alt="" className='  w-full  aspect-square object-left-top rounded-full  ' />
                    </div>
                    <div className='flex flex-col   '>

                      <h1 className='from-neutral-900 md:text-2xl  text-lg '>Anna Dixon</h1>
                      <h1 className='text-neutral-500  md:text-xl text-lg'>web Developer and Designer</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=' md:ps-12 text-lg pb-7 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit vel veritatis nisi et in sed quae quos placeat laboriosam.</p>
                  </div>
                  <div className='flex items-center gap-10  '>
                    <div className='ps-12 md:ps-12 sm:w-1/4 max-w-40 md:w-1/2 w-full  ' >
                      <img src="team6.jpg" alt="" className='  w-full  aspect-square object-left-top rounded-full  ' />
                    </div>
                    <div className='flex flex-col   '>

                      <h1 className='from-neutral-900 md:text-2xl  text-lg '>Oliver Cook</h1>
                      <h1 className='text-neutral-500  md:text-xl text-lg'> Web Developer </h1>
                    </div>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* our team */}

      <div className='pt-8 w-5/6 mx-auto pb-5'>
        <div className=''>


          <div className=' '>
            <h1 className='text-extrabold text-3xl '>Our Team</h1>
            <h1 className='pt-4 pb-4 text-xl'>We are strong about event</h1>
            <div className=" border-t-4 w-16 border-red-500 ..."></div>
          </div>
        </div>
     

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8'>
        <div className='w-full  h-auto pb-16 img1 '>
          <img src="team7.jpg" alt="Image 1" className='w-full h-full object-cover' />
          <h1 className='text-center font-semibold text-base md:text-lg lg:text-xl pt-5 md:pt-5'>Vikas Makwana</h1>
          <p className='text-center text-neutral-500 text-sm md:text-base lg:text-lg'>Web Developer</p>
        </div>
        <div className='w-full  h-auto pb-16 img2'>
          <img src="team2.jpg" alt="Image 2" className='w-full h-full object-cover' />
          <h1 className='text-center font-semibold text-base md:text-lg lg:text-xl pt-5 md:pt-5'>Sophie Turnera</h1>
          <p className='text-center text-neutral-500 text-sm md:text-base lg:text-lg'>Web Designer</p>
        </div>
        <div className='w-full h-auto pb-16 img3'>
          <img src="team6.jpg" alt="Image 3" className='w-full h-full object-cover' />
          <h1 className='text-center font-semibold text-base md:text-lg lg:text-xl pt-5 md:pt-5'>Oliver Cook</h1>
          <p className='text-center text-neutral-500 text-sm md:text-base lg:text-lg'>Web Developer</p>
        </div>
        <div className='w-full  h-auto pb-16 img4 '>
          <img src="team4.jpg" alt="Image 4" className='w-full h-full object-cover' />
          <h1 className='text-center font-semibold text-base md:text-lg lg:text-xl pt-5 md:pt-5'>Anna Dixonr</h1>
          <p className='text-center text-neutral-500 text-sm md:text-base lg:text-lg'>Web Designer</p>
        </div>
      </div>
      </div>




    </div>



  );
};

export default About;
