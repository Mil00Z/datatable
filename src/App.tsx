import reactLogo from './assets/react.svg';
import mock from './datas/mock.json';

import DataTable from './components/DataTable/DataTable';

import './App.css';


function App() {
 
  return (
    <>

      <h1 className="text-3xl text-black font-bold text-center flex justify-center">
        <img src={reactLogo} alt="Logo" />
      Simple Clone of DataTables
        <img src={reactLogo} alt="Logo" />
      </h1>
      
      <DataTable initialDatas={mock}/>
    
    </>
  )
}

export default App
