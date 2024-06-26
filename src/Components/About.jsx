import CompanyLogos from "../assets/Images/Company-Structure.png";

const About = () => {
  return (
    <>
    <div className="container-fluid company-container ">
    <h1 className="about-company text-gray-600 flex text-center mt-10 justify-center text-lg pb-0">About Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto pb-5">
    <div className="col-span-1 border-gray-50">
    <img src={CompanyLogos} className="image-fluid logo-structures  flex items-right" />
    </div>
    <div className="col-span-1">
      <div className=" company-about items-right pr-10 pt-20 md:pr-4  tems-center  pl-4">
      <p className="company-par pb-5  sm:pt-2 text-gray-600">
      <span className="company-name-1">Koncept Agency</span> is a branding and advertising agency that focuses on corporate branding, socila media marketing and content creation.
      Koncept Agency is a branding and advertising agency that focuses on corporate branding, socila media marketing and content creation.
      </p>
        <p className="company-par pb-5 pt-20 text-gray-600 md:pt-8">
        <span className="company-name-2">Koncept illustration</span> is division of Koncept Agency focusing on digital illustrationwith specialisation in full color and black and white outline portraits.
        </p>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default About;
