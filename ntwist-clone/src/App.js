import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import AdditionalContent from './components/AdditionalContent';

import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
           <div className="app-container">
              <Header />
              <MainContent />
            </div>
            <AdditionalContent/>
            <br/>
            <Footer />
        </div>
    );
}

export default App;
