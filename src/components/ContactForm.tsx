'use client';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20">
      <motion.h2
        className="text-4xl font-bold heading-gradient mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textShadow: '2px 2px 0px rgba(15, 164, 175, 0.3)' }}
      >
        Contact
      </motion.h2>
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#0FA4AF]/30 to-[#964734]/30 opacity-75 blur transition group-hover:opacity-100" />
          <div className="card relative p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#003135] font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-white/80 border border-[#0FA4AF]/20 rounded-lg px-4 py-2 text-[#003135] focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#003135] font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/80 border border-[#0FA4AF]/20 rounded-lg px-4 py-2 text-[#003135] focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]/40"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[#003135] font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full bg-white/80 border border-[#0FA4AF]/20 rounded-lg px-4 py-2 text-[#003135] focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]/40 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="button-primary w-full py-3 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;