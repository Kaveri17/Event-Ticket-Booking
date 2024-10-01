import React from 'react';

const Contact = () => {
  return (
    <>
  <div className='bg-red-400 w-full h-64 relative'>
  <img src="data:image/jpeg;base64,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" alt="Background" className='absolute inset-0 w-full h-full object-cover' />
  <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 text-white'>
    <h2 className='text-3xl font-bold'>CONTACT</h2>
  </div>
</div>




    
    <div className="flex flex-col md:flex-row items-start justify-around mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="w-full md:w-2/5 flex flex-col pr-10">
        <h2 className="text-4xl font-semibold text-gray-800 pb-6 mb-6">
          Contact Info
          <div className="border-b-2 border-orange-500 w-16 pt-2"></div>
        </h2>
        <p className="text-gray-600 mb-4 pb-8">
          For inquiries or further information, please feel free to reach out to us  or call us. You can also connect with us through our social media channels. We’re here to assist you and look forward to hearing from you!
        </p>
        <div className="space-y-2 mb-6">
        <span className="text-red-500 pb-2">
  <i className="fa-solid fa-phone text-xl mr-4"></i>
</span>
<span className='cursor-pointer'> +977-987654321</span>
<br className='mb-1' />
<br className="mb-1" />
<span className="text-red-500">
  <i className="fa-solid fa-message text-xl mr-4"></i>
</span>
<span className='cursor-pointer'> contact@domain.com</span>
<br />
<br  className='mb-1'/>

  <span className="text-red-500">
    <i className="fa-solid fa-link text-xl mr-4"></i> 
  </span>
  <span className='cursor-pointer'> www.contactdomain.com</span>
  <br />
  <br className='mb-1'/>
  <span className="text-red-500">
    <i className="fa-solid fa-location-crosshairs text-xl mr-4 pb-5"></i> 
  </span>
  <span className='cursor-pointer'> Sanepa, Lalitpur</span>
</div>


        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.940348876112!2d85.29995187546668!3d27.68823847619348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb184a281e7491%3A0xf947496b7f4831a7!2sSagarmatha%20College%20of%20Science%20and%20Technology%20%5BSCST%5D!5e0!3m2!1sen!2snp!4v1726974034459!5m2!1sen!2snp"
            width="600"
            height="500" 
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>



      <div className="w-full md:w-2/5 flex flex-col items-start mr-9 mt-8 md:mt-0">
        <h2 className="text-4xl font-semibold text-gray-800 pb-6">
          Get In Touch
          <div className="border-b-2 border-orange-500 w-16 pt-2"></div>
        </h2>
        <form className="w-full bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">

            <label className="block text-gray-700 mb-2 text-xl" htmlFor="name">Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <i className="fa-solid fa-user text-black p-2"></i>
              <input
                type="text"
                id="name"
                className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>

          </div>
          <div className="mb-4">

            <label className="block text-gray-700 mb-2 text-xl" htmlFor="email">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <i className="fa-solid fa-envelope text-black p-2 "></i>
              <input
                type="email"
                id="email"
                className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
              />
            </div>

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xl" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-4  ` rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-2/5 text-orange-400 py-2 border border-orange-600 transition duration-200 hover:bg-orange-600 hover:text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
