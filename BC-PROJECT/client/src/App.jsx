import { useState } from 'react';
import Particles from 'react-tsparticles';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen md:w-full respon">
        <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
        <Particles id='tsparticles'/>
    </div>
  );
}

export default App
