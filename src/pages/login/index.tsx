import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import LoginImage from "/login.jpg";

interface Form {
    email: string;
    password: string;
}

const Login: React.FC = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState<Form>({
        email: "",
        password: ""
    });


    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        if (form.email === "" || form.password === "") {
            alert("Please fill all the details");
            return;
        }

        navigate("/dashboard");
    };

    return (
        <section className='flex items-center'>
            <div className='w-0 md:w-1/2 lg:w-4/6 h-screen'>
                <img src={LoginImage} alt="login image" className='w-full h-full object-cover' />
            </div>

            <div className='md:w-1/2 lg:w-2/6 flex flex-col gap-y-20 justify-center mx-auto items-center px-5 sm:px-10'>
                <h1 className='text-sky-500 font-bold text-4xl text-center'>Login</h1>

                <form className='space-y-5' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='input'
                        placeholder='Enter your email'
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <input
                        type="password"
                        className='input'
                        placeholder='Enter your password'
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <button type="submit" className='px-7 py-3 bg-sky-500 rounded-md text-white font-bold w-full'>Log in</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
