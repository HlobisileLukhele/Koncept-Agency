
import Homepage from './Components/Homepage';
import CallToAction from './Components/CallToAction';
import CompaniesWorkedWith from './Components/CompaniesWorkedWith';
import Footer from './Components/Footer';


const Home = () => {
  return (
    <div className='Container-fluid'>
    <Homepage />
    <CallToAction />
    <CompaniesWorkedWith />
    <Footer />
    </div>
  )
}

export default Home