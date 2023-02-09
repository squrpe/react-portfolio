import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import About from './components/About'
import Contacts from './components/Contacts'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About/>
      case 'Portfolio':
        return <Portfolio/>
      case 'Contacts':
        return <Contacts/>
      case 'Resume':
        return <Resume/>
      default:
        return <About/>
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
