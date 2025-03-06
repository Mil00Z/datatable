import {useState,useEffect} from 'react';

import Pagination from '../../components/Pagination/Pagination';


const DataTable = ({initialDatas}) => {

  const [filteredDatas,setFilteredDatas] = useState(initialDatas);
  const [sortingDatas,setSortingDatas] = useState('asc');
  const [elementsPerPage,setElementsPerPage] = useState(initialDatas.length);
  const [counterPages,setCounterPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
 


 // Create Columns
  const colLabels = Object.keys(initialDatas[0]);

// Get Number of Element by Page
  function entriesByPage(inputValue){

    let entry = parseInt(inputValue);

    // Record number of Element by Pages 
    setElementsPerPage((elementsPerPage) => entry);

    //Record Array of Pagination
    setCounterPages((counterPages) => listOfPages(entry))
    
  
  }

// Create List of Pagination
  function listOfPages(value){

    let numberOfPages = initialDatas.length / value;

    if(numberOfPages % value > 0){

      numberOfPages = Math.ceil(numberOfPages);

    }

    let links=[];
    for (let i = 1; i <= numberOfPages; i++) {
      links.push(i);
    }

    return links;
  }

// Filter by Lexical Order
  function lexicalFilter(value) {
    
    let sortedDatas;

    if (sortingDatas === 'asc') {
      sortedDatas = [...filteredDatas].sort((a, b) => {
        return a[value].localeCompare(b[value], 'fr');
      });
      setSortingDatas('desc');
    } else {
      sortedDatas = [...filteredDatas].sort((a, b) => {
        return b[value].localeCompare(a[value], 'fr');
      });
      setSortingDatas('asc');
    }
    setFilteredDatas(sortedDatas);
  }

// Global Search by Lexical
  function globalSearch(input){

  
    if(filteredDatas.length === 0 || input === ''){

      setFilteredDatas(initialDatas);

    } else {

      const filteredSearch = filteredDatas.filter((row) => {
  
        return Object.values(row).some((value) =>{
          return value.toLowerCase().includes(input.toLowerCase());
        })
      })
  
      setFilteredDatas(filteredSearch);
    }
    
  }

  // Trigger Pagination Calcul 
  useEffect(() => {

    //Update Local State of Datas
    setFilteredDatas((filteredDatas) => {

      return initialDatas.slice((pageIndex - 1) * elementsPerPage, elementsPerPage * pageIndex);
    });
   
  },[elementsPerPage,pageIndex])



  return(
    <>
      
      <div className="top my-4">
      
        <div className="numbering flex flex-row items-center">

          <select className="p-2 bg-gray-800 text-base text-white" onChange={(event)=>{entriesByPage(event.target.value)}}>
              <option defaultValue="" value={initialDatas.length}>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="25">20</option>
          </select>
          <label htmlFor="dt-length-0" className="px-4 text-black font-semibold text-base"> {filteredDatas.length > 1 ? 'entries' : 'entry'} per page</label>
          
        </div>

        <div className="searching flex flex-row items-center">
          <label htmlFor="search" className="px-2 mx-2 font-semibold text-black text-base">Search:</label>
          <input type="search" id="search" className="p-2 bg-gray-800 text-base text-white" placeholder="votre recherche" onChange={(event)=>{globalSearch(event.target.value)}} />
        </div>
        
      </div>

      
      <table id="employee-table" className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-gray-800">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr >
                {colLabels.map((label,index) => {
                return (<th key={`label-${index}`} className="px-3 py-3 text-yellow-600 text-lg" data-head={`${label}`} onClick={()=>{lexicalFilter(label)}} scope="col">{label}</th>)
              })}
              </tr>
          </thead>
          <tbody>

            {filteredDatas.length > 0 ? (filteredDatas.map((row, index) => {
                  return (
                    <tr key={`row-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      
                      {Object.values(row).map((cell, index) => {
                        return (
                          <>
                            <td key={`cell-${index}`} className="px-3 py-4 text-base">
                            {cell.length !== 0 ? cell : '❌'}
                            </td>
                          </>
                        );
                      })}
                    </tr>);
                })
              ) : (
                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-800">
                  <>
                    <td className="bg-red-600 px-6 py-4 text-white">
                      Aucun résultat trouvé
                    </td>
                  </>
                </tr>
              )}

          </tbody>
      </table>


      <div className="bottom px-5 my-2 flex justify-between items-center">

        <div className="my-2 details text-base"> Show <span className="text-lg font-semibold text-red-600">{filteredDatas.length}</span> entries of <span className="text-lg font-bold text-yellow-600">{initialDatas.length}</span></div>

      
        <Pagination counterPages={counterPages} pageIndex={pageIndex} setPageIndex={setPageIndex} />
      
      </div>

    </>

  )
}

export default DataTable