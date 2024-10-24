import Gallery from "../Components/Gallery"
import Testimonial from "../Components/Testimonial"
const Work = () => {
  return (
    <> 
    <div className="container-fluid d-block items-center project-container">
    <h1 className="text-gray-500 pt-8 project-heading pb-8  pr-4 text-sm">   
    HAVE A LOOK AT SOME WORK DONE FOR CLIENTS
    </h1>
    <p className="text-gray-800 pb-7 flex items-center text-lg project-para1">You think it, We bring it to live. Our work is a clear visual representation of our clients vision into reality.</p>
    </div>
    <Gallery />
    <Testimonial />
    </>
  )
}

export default Work;
