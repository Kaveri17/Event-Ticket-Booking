import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    
<div>


<div className='gall w-full h-screen ' >

<div className='py-16'>
  <h1 className='text-3xl text-white text-center font-bold '>GALLERY</h1>

  <div className=' flex-wrap flex flex-row justify-center'>
    <h1 className='text-white text-center font-semibold text-xl '><Link to='/'>Home</Link> <span className='ps-2'> <i class="fa-solid fa-greater-than text-white "></i> </span></h1>
    <h1 className='text-white text-center font-semibold text-xl  ps-2'><Link to='/about'>Gallery</Link></h1>


  </div>
</div>
</div>

{/* our gallery */}
    
    

     <div className='w-5/6 mx-auto pt-6'>
     <div className='text-5xl font-bold text-center '>
             <h1>Our Gallery</h1>
           </div>

           <div className='flex flex-wrap pb-14'>
            {/* 1 */}
           <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10 img1">
                <img src="/california.jpg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'   >California</h1>
             
              </div>

              {/* 2 */}
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10 img1">
                <img src="/music.jpg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'   >Music Concert</h1>
             
              </div>
              {/* 3 */}

              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10 img1">
                <img src="/sportse.jpg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'   >Sports</h1>
             
              </div>
              {/* 4 */}
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10 img1">
                <img src="/art.png" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'   >Art Exhibition</h1>
             
              </div>
              {/* 5 */}
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10 img1">
                <img src="/texas.jpg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'   >Texas</h1>
             
              </div>
              {/* 6 */}
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10 img1">
                <img src="/holi.jpg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'   >Festival</h1>
             
              </div>
           </div>
       



    </div>
    </div>
  )
}

export default Gallery