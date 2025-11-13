import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BrandStrip from '../components/BrandStrip';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Create mailto link with the recipient email
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );

      const mailtoLink = `mailto:hovetinotenda50@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setSubmitMessage('Opening your email client...');

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitMessage('');
      }, 2000);
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        bg="/about.jpg"
        badge="Agrimo"
        titleLine1="Contact Us"
        titleLine2=""
        subtitle=""
        ctaLabel=""
      />


      <section className="bg-[#F6F7EE] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FiMail size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Mail us 24/7</h3>
                <p className="text-sm text-gray-600 mt-2">
                  <a href="mailto:hovetinotenda50@gmail.com">hovetinotenda50@gmail.com</a><br />
                  <a href="mailto:info@agrimo.com">info@agrimo.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FiPhone size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Call us 24/7</h3>
                <p className="text-sm text-gray-600 mt-2">Phone: (+01) 345 - 5678<br />Mobile: (+01) 345 - 9236</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FiMapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Our Locations</h3>
                <p className="text-sm text-gray-600 mt-2">4019 12th Ave, SE, Abuja.<br />99999, USA mainly city.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 ">
          <div>
            <img src="/contact.jpg" alt="Contact" className="w-full h-[690px] object-cover " />
          </div>
          <div className="bg-[#F6F7EE]  p-6 md:p-8">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-green-900 border border-green-900/20 bg-white/70">Get In Contact Us</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mt-4">Have any Questions? Get in Touch!</h2>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="5"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed md:col-span-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FiArrowRight />
              </button>
            </form>
            {submitMessage && (
              <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-800 text-sm">
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Logos strip */}
      <BrandStrip />

      {/* Map */}
      <section className="bg-white pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.719430293599!2d7.4951!3d9.072264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4cb3a4c6d9%3A0x26d6a7f2c0a1d8!2sAbuja!5e0!3m2!1sen!2sng!4v1696520000000!5m2!1sen!2sng"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
