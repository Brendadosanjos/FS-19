import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center space-x-8 mt-8">
        <a href="Brazil" target="_blank" className="transform transition-all hover:scale-105">
          <img src="public/brazil.png" className="w-46 h-40" alt="Brazil flag" />
        </a>
        <a href="Germany" target="_blank" className="transform transition-all hover:scale-105">
          <img src="public/germany.png" className="w-44 h-32" alt="Germany flag" />
        </a>
      </div>

      <h1 className="text-center text-4xl mt-6 font-bold">
        <div className='ml-16'>Brasil x Alemanha</div>
        <br />
        <p className='flex gap-10 text-center items-center justify-center '>
          <div>{count}</div> | 
          <div>{count2}</div>
        </p>
      </h1>

      <div className="flex justify-center mt-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-row gap-8">
          {/* Coluna para os botões do Brasil */}
          <div className="flex flex-col items-center justify-between space-y-4 h-full">
            <button 
              onClick={() => setCount((count) => count + 1)} 
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all"
            >
              GOOOOOL !!!
            </button>
            <button 
              onClick={() => setCount((count) => count - 1)} 
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-all"
            >
              ANULADO
            </button>
          </div>

          {/* Coluna para os botões da Alemanha */}
          <div className="flex flex-col items-center justify-between space-y-4 h-full">
            <button 
              onClick={() => setCount2((count2) => count2 + 1)} 
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all"
            >
              GOOOOOL !!!
            </button>
            <button 
              onClick={() => setCount2((count2) => count2 - 1)} 
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-all"
            >
              ANULADO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
