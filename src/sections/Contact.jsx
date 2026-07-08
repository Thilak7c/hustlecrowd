import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#f9f9f9] text-gray-700 relative z-3 py-40 bg-cover bg-center font-circular">
      <div className="container relative mx-auto">
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="contact-info px-4 mb-8 md:mb-0">
            {/* <div className="contact-info-item flex items-center mb-4">
              <div className="contact-info-icon h-12 w-12 flex items-center justify-center bg-[#8800FF] rounded-full text-white text-xl">
                <FaPhoneAlt />
              </div>
              <div className="contact-info-content ml-4">
                <h4 className="text-lg font-bold">Phone</h4>
                <p>+60 165 876 915</p>
              </div>
            </div> */}
            <div className="contact-info-item flex items-center mb-4">
              <div className="contact-info-icon h-12 w-12 flex items-center justify-center bg-[#8800FF] rounded-full text-white text-xl">
                <FaEnvelope />
              </div>
              <div className="contact-info-content ml-4">
                <h4 className="text-lg font-bold">Email</h4>
                <p>hello@hustlecrowd.my</p>
              </div>
            </div>
            <div className="contact-info-item flex items-center mb-4">
              <div className="contact-info-icon h-12 w-12 flex items-center justify-center bg-[#8800FF] rounded-full text-white text-xl">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-content ml-4">
                <h4 className="text-lg font-bold">Address</h4>
                <p>81, Jalan Melaka Baru 2/3, Taman Melaka Baru, Batu Berendam 75350, Melaka.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
