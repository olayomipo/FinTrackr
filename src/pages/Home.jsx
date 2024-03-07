

import { Navbar, Hero, Switcher, WalletCard } from '../components';
// import Switcher from '../components/Switcher';

const Home = () => {
  return (
    <div >
        <div className="Home bg-other">
            {/* <Switcher /> */}
            <Navbar />
            <Hero />
            <WalletCard />
        </div>
    </div>
  )
}

export default Home