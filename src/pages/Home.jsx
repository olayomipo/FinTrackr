

import { Navbar, Hero, Switcher } from '../components';
// import Switcher from '../components/Switcher';

const Home = () => {
  return (
    <div >
        <div className="Home">
            {/* <Switcher /> */}
            <Navbar />
            <Hero />
        </div>
    </div>
  )
}

export default Home