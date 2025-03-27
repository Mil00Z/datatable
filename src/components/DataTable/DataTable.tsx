import {useState,useEffect} from 'react';


import Pagination from '../../components/Pagination/Pagination';


export type Employee = {
  firstName: string;
  lastName: string;
  dateBirth: string;
  city: string;
  department: string;
  startDate: string;
  street: string;
  zipCode: string;
  id?: string;
}


export interface DataTableProps {
  initialDatas: Employee[];
}



const DataTable = ({initialDatas} : DataTableProps) => {

  const [searchedDatas,setSearchedDatas] = useState<Employee[]>(initialDatas);
  const [filteredDatas,setFilteredDatas] = useState<Employee[]>([]);
  const [sortingDatas,setSortingDatas] = useState<string>('asc');
  const [elementsPerPage,setElementsPerPage] = useState<number>(initialDatas.length);
  const [counterPages,setCounterPages] = useState<number[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
 


 // Create Columns
  const colLabels = Object.keys(initialDatas[0]);

// Get Number of Element by Page
  function entriesByPage(inputValue:string){

    const entry = parseInt(inputValue);

    // Record number of Element by Pages 
    setElementsPerPage(entry);

    //Record Array of Pagination
    setCounterPages(listOfPages(entry))
    
  }

// Create List of Pagination
  function listOfPages(value:number){

    let numberOfPages = searchedDatas.length / value;
   

    if(numberOfPages % value > 0){

      numberOfPages = Math.ceil(numberOfPages);

    }

    const links=[];
    for (let i = 1; i <= numberOfPages; i++) {
      links.push(i);
    }

    return links;
  }

 
// Filter by Lexical Order

  interface OrderDatas {
    [key: string] : string,
  }

  function lexicalFilter(value:string) {
    
    let sortedDatas;

    if (sortingDatas === 'asc') {
     
      sortedDatas = [...searchedDatas].sort((a, b) => {
        return (a as OrderDatas)[value].localeCompare((b as OrderDatas)[value], 'fr');
      });
      setSortingDatas('desc');
    } else {
     
      sortedDatas = [...searchedDatas].sort((a, b) => {
        return (b as OrderDatas)[value].localeCompare((a as OrderDatas)[value], 'fr');
      });
      setSortingDatas('asc');
    }
    setSearchedDatas(sortedDatas);
    
  }


// Global Search by Lexical
  function globalSearch(input:string){

    if(searchedDatas.length === 0 || input === ''){

      setSearchedDatas(initialDatas);
     
    } else {

      const globalSearchedDatas = searchedDatas.filter((row) => {
        return Object.values(row).some((value) =>{
          return value.toLowerCase().includes(input.toLowerCase());
        })
      })
  
      setSearchedDatas(globalSearchedDatas);
    }
    
  }


  // Trigger Pagination Calcul 
  useEffect(() => {

    //Update Local State of Datas
    setFilteredDatas(() => {

      const start = (pageIndex - 1) * elementsPerPage;
      let end = pageIndex * elementsPerPage;

      return searchedDatas.slice(start, end);
    });

  }, [elementsPerPage, pageIndex,searchedDatas]);

  




  return(
    <>
      <div className="top flex items-center py-2 my-4">
      
        <div className="numbering flex flex-row items-center">

          <select className="p-2 bg-gray-800 text-base text-white" onChange={(event)=>{entriesByPage(event.target.value)}} name="dt-length">
              <option defaultValue="" value={initialDatas.length}>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="25">20</option>
          </select>
          <label htmlFor="dt-length-0" className="px-4 text-black font-semibold text-base"> {searchedDatas.length > 1 ? 'entries' : 'entry'} per page</label>
         
        </div>

        <div className="searching flex flex-row items-center ml-auto">
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

            {initialDatas.length > 0 ? (filteredDatas.map((row, index) => {
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
                    <td className="px-6 py-4 bg-red-600  text-white">
                      Aucun résultat trouvé
                    </td>
                  </>
                </tr>
              )}

          </tbody>
      </table>


      <div className="bottom my-2 flex justify-between items-center">

        <div className="details my-2 text-base"> Show <span className="text-lg font-semibold text-red-600">{searchedDatas.length}</span> entries of <span className="text-lg font-bold text-yellow-600">{initialDatas.length}</span></div>
        

        <Pagination counterPages={counterPages} pageIndex={pageIndex} setPageIndex={setPageIndex} />

      </div>

    </>

  )
}

export default DataTable