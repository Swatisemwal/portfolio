import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "amitthakurrr112@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Address</span>
            <span className='py-4 px-6  text-gray-400 font-medium'
            >Bhajanpura, Delhi - 110053</span>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Phone No</span>
            <span className='py-4 px-6  text-gray-400 font-medium'
            >7503963518</span>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <span className='py-4 px-6  text-gray-400 font-medium'
            >swati.semwal17@gmail.com </span>
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Github</span>
            {/* <span className='py-4 px-6  text-gray-400 font-medium'
            >   */}
            <a
            href='https://github.com/Swatisemwal'
            target='_blank'
            rel='noopener noreferrer'
            className='py-4 px-6 text-gray-400 font-medium hover:underline'
          >
            github.com/Swatisemwal
          </a>
          {/* </span> */}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>LinkedIn</span>
            <a
    href='https://www.linkedin.com/in/swati-semwal-d/'
    target='_blank'
    rel='noopener noreferrer'
    className='py-4 px-6 text-gray-400 font-medium hover:underline'
  >
    linkedin.com/in/swati-semwal-d
  </a>
          </label>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
