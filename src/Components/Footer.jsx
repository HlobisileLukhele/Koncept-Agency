import KonceptAgency from '../assets/svg/Koncept-Logo.png';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Footer = () => {
  return (
    <div>
<div className="flex items-end w-full min-h-screen bg-white">

    <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div
            className="container flex flex-col flex-wrap px-5 py-20 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img src={KonceptAgency} alt="Koncept illustration logo mt-0" />

                </a>
                <p className="text-sm text-gray-500 mb-6 mt-4 "> Koncept Agency is a branding and advertising agency that focuses on corporate branding, digital illustration, socila media marketing and content creation </p>
                <div className="mt-4">
                    
                </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-4 mb-4text-center md:pl-20 md:mt-0 md:text-left">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Quick Links</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Services</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Work</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">HowWeWork</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">About</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Services</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Branding  &amp; Design </a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Content Creation</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Digital Illustration</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">Social Media Marketing</a>
                        </li>
                    </nav>
                </div>
               
                <div className="w-full px-3 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3 flex">
                         <EmailRoundedIcon className=" text-sm mr-1"/>
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900 ">hello@konceptagency.co.za</a>
                        </li>
                        <li className="mt-3">
                        <CallRoundedIcon className=" text-sm" />  
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">+27 81 916 1466</a>
                        </li>
                        <span className="inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start mt-4">
                        <a className="text-gray-500 cursor-pointer hover:text-gray-700 mt-4"> 
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700 mt-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-gray-300">
            <div className="container  px-5 py-4 mx-auto mb-0 mt-0 text-center items-center justify-center flex">
                <p className="text-sm text-gray-700 capitalize xl:text-center"> Koncept Agency © 2024 All rights reserved </p>
            </div>
        </div>
    </footer>

</div>    
    </div>
  )
}

export default Footer