import Logo from './assets/Logo.svg';
import './App.css';

export default function Navbar() {
    return (
        <nav className="bg-navbarGlass text-white backdrop-blur-md p-4 rounded-b-xl shadow-md animate-fade-down sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <img src={Logo} alt="Logo" className="h-10 w-10" />
                    <h1 className="text-lg md:text-xl font-semibold font-poppins tracking-wide">Network Laboratory</h1>
                </div>
                <ul className="flex space-x-2 md:space-x-4 text-sm md:text-lg lg:text-xl font-extrabold font-quicksand">
                    {['Home', 'SBD', 'DMJ', 'OS', 'ASLAB'].map((item) => (
                        <li key={item} className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-pastelYellow">
                            <a href={`#${item.toLowerCase()}`} className="no-underline text-white font-bold">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
