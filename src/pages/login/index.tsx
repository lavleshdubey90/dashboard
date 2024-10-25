import React, { useState } from 'react';
import LoginImage from "/login.jpg";

interface Form {
    email: string;
    password: string;
}

const Login: React.FC = () => {

    const [form, setForm] = useState<Form>({
        email: "",
        password: ""
    });

    const handleSubmit = (event:Event):void => {
        event.preventDefault();
    }

    return (
        <section className='flex items-center'>
            <div className='w-0 md:w-1/2 lg:w-4/6 h-screen'>
                <img src={LoginImage} alt="login image" className='w-full h-full object-cover' />
            </div>

            <div className='md:w-1/2 lg:w-2/6 flex flex-col gap-y-20 justify-center mx-auto items-center px-5 sm:px-10'>
                <h1 className='text-sky-500 font-bold text-4xl text-center'>Login</h1>

                <form className='space-y-5'>
                    <input type="text" className='input' placeholder='Enter your email' />
                    <input type="password" className='input' placeholder='Enter your password' />
                    <button onClick={()=>handleSubmit} className='px-7 py-3 bg-sky-500 rounded-md text-white font-bold w-full'>Log in</button>
                </form>
            </div>
        </section>
    )
}

export default Login;