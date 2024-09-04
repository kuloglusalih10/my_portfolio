import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { emailSchema } from '../../utils/email_yup';

const index = () => {

    const form = useRef();

    const { handleSubmit, handleChange, values, errors ,touched,resetForm} = useFormik({

        initialValues:{
            user_name: '',
            user_surname: '',
            user_email: '',
            message: '',
        },
        validationSchema: emailSchema,
        onSubmit: async  (values)=> {

            
            emailjs
            .sendForm(`${import.meta.env.VITE_EMAIL_SERVICE_ID}`, `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`, form.current, {
              publicKey: `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`,
            })
            .then(
              () => {
                resetForm({message: '', user_email: '', user_surname: '', user_name: ''});
                document.getElementById('user_name').value= '';
                document.getElementById('user_surname').value= '';
                document.getElementById('user_email').value= '';
                document.getElementById('message').value= '';
                toast("Email Gönderildi...",{type: 'success'})
              },
              (error) => {
                toast("Bir hata oluştu!",{type:'error'})
              },
            );

            

        }

    });


    return (
        <div className='w-full  flex flex-col sm:flex-row items-start justify-center xl:px-52 lg:px-12 py-12 relative z-[2] bg-[#fafafa] dark:bg-zinc-900 border-t border-gray-300 dark:border-gray-600 '>
            
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center mb-6 sm:my-0 px-5 3xlg:px-12'>
                <div className='flex flex-col items-center sm:items-start justify-start w-full'>
                    <h3 className=' relative py-3 text-3xl sm:text-4xl md:text-5xl lg:text:6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-600 font-sans font-bold flex items-center gap-x-4'>
                        Contact Me
                        <div className='flex items-center justify-center'>
                            <span className='p-1 rounded-full bg-dark-green  ml-1 '></span>
                        </div>
                    </h3>
                    <p>
                        Anny question? I would be happy to help you!
                    </p>
                </div>
                <div className='w-full flex flex-row sm:flex-col mt-6 gap-y-4 gap-x-3 justify-center items-center'>
                    <div className='flex items-center justify-start  sm:gap-x-7 p-2 sm:p-0 sm:px-4 sm:py-3 border border-gray-200 rounded-full sm:rounded-md sm:w-full bg-white dark:bg-[#1e1f26] dark:text-white dark:border-gray-600'>
                        <FaLinkedin size={24} />
                        <p className='hidden sm:block'>
                            in/salih-kuloğlu
                        </p>
                    </div>
                    <div className='flex items-center justify-start sm:gap-x-7 p-2 sm:p-0 sm:px-4 sm:py-3  border border-gray-200 rounded-full sm:rounded-md sm:w-full bg-[#333435] dark:border-gray-600'>
                        <MdEmail color='#fff' size={24} />
                        <p className='text-white hidden sm:block'>
                            kuloglusalih10@gmail.com
                        </p>
                    </div>
                    <div className='flex items-center justify-start  sm:gap-x-7 p-2 sm:p-0 sm:px-4 sm:py-3 border border-gray-200 rounded-full sm:rounded-md sm:w-full bg-white dark:bg-[#1e1f26] dark:text-white dark:border-gray-600'>
                        <FaGithub size={24} />
                        <p className='hidden sm:block'>
                            kuloglusalih10
                        </p>
                    </div>
                    <div className='flex items-center justify-start  sm:gap-x-7 p-2 sm:p-0 sm:px-4 sm:py-3 border border-gray-200 rounded-full sm:rounded-md sm:w-full bg-white dark:bg-[#1e1f26] dark:text-white dark:border-gray-600'>
                        <IoLocation size={24} />
                        <p className='hidden sm:block'>
                            Istanbul / Turkey
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] bg-gray-200 dark:bg-[#333435] h-[1px] mx-auto sm:hidden mb-6'/>
            <form ref={form} onSubmit={handleSubmit}className='w-full sm:w-1/2 sm:border-l  dark:border-[#333435]  border-gray-200 flex flex-col px-5 3xlg:px-12 gap-y-4'>
                <div className='flex flex-row w-full gap-x-4'>
                    <div className='flex flex-col gap-y-1 w-1/2 '>
                        <h3 className='font-sans font-bold text-sm sm:text-base'>
                            Name
                        </h3>
                        <input type="text" name='user_name' id='user_name'  onChange={handleChange} values={values.user_name}  className='w-full p-2 sm:p-3 border border-slate-200 rounded-md bg-white dark:bg-[#1e1f26] dark:text-white dark:border-gray-600' placeholder='Your first name'/>
                        {errors.user_name && touched.user_name ? ( <div className='text-dark-red/70 w-full text-[13px]'>{errors.user_name} </div> ) : null}
                    </div>
                    <div className='flex flex-col gap-y-1 w-1/2 '>
                        <h3 className='font-sans font-bold text-sm sm:text-base '>
                            Surname
                        </h3>
                        <input type="text" name='user_surname' id='user_surname'  onChange={handleChange} values={values.user_surname}  className='w-full p-2 sm:p-3 border border-slate-200 rounded-md bg-white dark:bg-[#1e1f26] dark:text-white dark:border-gray-600' placeholder='Your surname'/>
                        {errors.user_surname && touched.user_surname ? ( <div className='text-dark-red/70 w-full text-[13px]'>{errors.user_surname} </div> ) : null}
                    </div>
                </div>
                <div className='flex flex-col gap-y-1 w-full '>
                        <h3 className='font-sans font-bold text-sm sm:text-base '>
                            Email
                        </h3>
                        <input type="email" name='user_email' id='user_email' onChange={handleChange} values={values.user_email}  className='w-full p-2 sm:p-3 border border-slate-200 rounded-md bg-white dark:bg-[#1e1f26] dark:text-white dark:border-gray-600' placeholder='youremail@email.com'/>
                        {errors.user_email && touched.user_email ? ( <div className='text-dark-red/70 w-full text-[13px]'>{errors.user_email} </div> ) : null}
                </div>
                <div className='flex flex-col gap-y-1 w-full '>
                        <h3 className='font-sans font-bold text-sm sm:text-base  '>
                            Message
                        </h3>
                        <textarea type="text" name='message' id='message' onChange={handleChange} values={values.message}   className='resize-none w-full p-2 sm:p-3  border border-slate-200 rounded-md h-[120px] bg-white dark:bg-[#1e1f26] dark:text-white dark:border-gray-600' placeholder='Type your message here...'/>
                        {errors.message && touched.message ? ( <div className='text-dark-red/70 w-full text-[13px]'>{errors.message} </div> ) : null}
                </div>
                <button type="submit" value="Send" className='flex items-center justify-center gap-x-4 w-full rounded-md bg-[#333435] text-white p-3 dark:border dark:border-gray-600 '>
                    Send Message <IoIosSend size={23} />
                </button>
            </form>

        </div>
    )
}

export default index