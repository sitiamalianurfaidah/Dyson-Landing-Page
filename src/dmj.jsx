import DMJLogo from './assets/DMJLogo.svg';
import './App.css'

export default function dmj() {
    return (        
        <div className="w-screen h-screen bg-pastelPink text-white flex flex-col justify-center items-center">
            <div className='flex flex-col md:flex-row items-center'>
                    <div>
                        <h1 className='text-2xl md:text-4xl font-bold text-white text-left ml-4'>NETLAB SBD</h1>
                            <div className='bg-pastelSky rounded-lg p-4 mt-4'>  
                                <p className='text-md md:text-xl text-white max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <p className='text-md md:text-xl text-white max-w-2xl'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                    <img src={DMJLogo} alt="SBD Logo" className= "h-64 w-64 ml-4"/>
            </div>
        </div>
    )
}
