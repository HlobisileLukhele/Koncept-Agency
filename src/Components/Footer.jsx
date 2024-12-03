import KonceptAgency from '../assets/svg/Koncept-Logo.png';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <div className="flex items-end w-full" id="footer">
    <footer className="w-full text-gray-700 bg-gray-100 body-font text-md">
        <div
            className="container flex flex-col flex-wrap px-5 py-20 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap md:text-md">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left pl-8">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img src={KonceptAgency} alt="Koncept illustration logo mt-0" className=" max-w-20 " />
                </a>
                <p className="text-md text-gray-500 mb-6 mt-4 offer"> Koncept Agency is a branding and advertising agency that focuses on corporate branding, digital illustration, social media marketing and content creation </p>
                <div className="mt-4">
                    
                </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-4 mb-4text-center md:pl-20 md:mt-0 md:flex text-center">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-bold tracking-widest  uppercase title-font offer">Quick Links</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/Services">Services</Link>
                            </a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/projects">Projects</Link>
                            </a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/howwework">HowWeWork</Link>
                            </a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/AboutUs">AboutUs</Link>
                            </a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-bold tracking-widest uppercase title-font offer">Services</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/Services">Branding  &amp; Design</Link> 
                            </a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/Services">Content Creation</Link> 
                            </a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/Services">Digital Illustration</Link> 
                            </a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                            <Link to="/Services">Social Media Marketing</Link> 
                            </a>
                        </li>
                    </nav>
                </div>
               
                <div className="w-full px-3 lg:w-1/4 md:w-1/2">
  <h2 className="mb-3 text-sm font-bold tracking-widest uppercase title-font offer text-center">Contact</h2>
  <nav className="mb-10 list-none">
    <li className="mt-3 flex items-center justify-center md:pl-6">
      <EmailRoundedIcon className="text-sm mr-1"/>
      <a href="mailto:hello@konceptagency.co.za" target="_blank" className="text-gray-500 cursor-pointer hover:text-gray-900 sm:mr-5">
        hello@konceptagency.co.za
      </a>
    </li>
    <li className="mt-3 flex items-center justify-center">
      <CallRoundedIcon className="text-sm mr-1" />  
      <a className="text-gray-500 cursor-pointer hover:text-gray-900">+27 81 916 1466</a>
    </li>
    <span className="inline-flex justify-center sm:ml-auto sm:justify-start mt-2">
      <a href='http://www.instagram.com/konceptagency' target="_blank" className="text-gray-500 cursor-pointer hover:text-gray-700 mt-4"> 
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href="http://www.facebook.com/konceptagency" target="_blank" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700 mt-4">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <rect width="22" height="22" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </span>
  </nav>
</div>

            </div>
        </div>
        <div className="bg-gray-600">
            <div className="container  px-5 py-4 mx-auto mb-0 mt-0 text-center items-center justify-center flex">
                <p className="text-lg text-white font-semibold capitalize xl:text-center offer "> Koncept Agency © 2024 All rights reserved </p>
            </div>
        </div>
    </footer>

</div>    
  );
}

export default Footer