import Logo from './assets/Logo.svg'

import './App.css'

export default function Navbar() {
    return (
        <nav className='bg-pastelPurple text-white p-4'>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <img src={Logo} alt='Logo' className='h-12 w-12' />
                    <h1 className='text-sm md:text-lg font-bold'>Network Laboratory</h1>
                </div>
                <ul className='flex space-x-2 md:space-x-4 text-sm md:text-lg lg:text-xl md:font-semibold'>
                    <li className='hover:text-gray-400 cursor-pointer'>
                        <a href="#home" className='text-white hover:text-gray-400 focus:text-gray-400 active:text-gray-400 visited:text-white no-underline'>Home</a>
                    </li>
                    <li className='hover:text-gray-400 cursor-pointer'>
                        <a href="#sbd" className='text-white hover:text-gray-400 focus:text-gray-400 active:text-gray-400 visited:text-white no-underline'>SBD</a>
                    </li>
                    <li className='hover:text-gray-400 cursor-pointer'>
                        <a href="#dmj" className='text-white hover:text-gray-400 focus:text-gray-400 active:text-gray-400 visited:text-white no-underline'>DMJ</a>
                    </li>
                    <li className='hover:text-gray-400 cursor-pointer'>
                        <a href="#os" className='text-white hover:text-gray-400 focus:text-gray-400 active:text-gray-400 visited:text-white no-underline'>OS</a>
                    </li>
                    <li className='hover:text-gray-400 cursor-pointer'>
                        <a href="#netlab" className='text-white hover:text-gray-400 focus:text-gray-400 active:text-gray-400 visited:text-white no-underline'>NETLAB</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

