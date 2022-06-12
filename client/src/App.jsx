import { Navbar, Footer, Services, Loader, Transactions, Welcome } from './components';
import './index.css';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    document.title = "Kryptx - Crypto Exchange"
  }, []);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
