import { useState } from 'react';
import Ex1 from './ex1';
import Ex2 from './ex2';
import Ex3 from './ex3';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('ex1');

  return (
    <div className="container">
      <h1>Formik Example</h1>
      
      {/* Tabs */}
      <div className="tabs">
        <button
          onClick={() => setActiveTab('ex1')}
          className={`tab ${activeTab === 'ex1' ? 'active' : ''}`}
        >
          1. Basic 
        </button>
        <button
          onClick={() => setActiveTab('ex2')}
          className={`tab ${activeTab === 'ex2' ? 'active' : ''}`}
        >
          2. Registration with Yup
        </button>
        <button
          onClick={() => setActiveTab('ex3')}
          className={`tab ${activeTab === 'ex3' ? 'active' : ''}`}
        >
          3. API Submission
        </button>
      </div>

      {/* Render active example */}
      {activeTab === 'ex1' && <Ex1 />}
      {activeTab === 'ex2' && <Ex2 />}
      {activeTab === 'ex3' && <Ex3 />}


    </div>
  );
}

export default App;