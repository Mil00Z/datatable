
const Pagination = ({counterPages,pageIndex,setPageIndex}) =>  {

 
  function handleClick(pageNumber) {

    setPageIndex((pageIndex) => parseInt(pageNumber));
   
  }


return (
  <>
  <div className="my-2 flex items-center gap-x-4" data-counterpages={counterPages.length}>

      {counterPages.map((page,index)=>{
          return (<a key={`pagination-element-${index}`} href="#" className={`pagination-link dark:bg-gray-800 text-white hover:bg-white hover:text-gray-800 ${pageIndex === page ? 'active' : null}`} onClick={()=>{handleClick(page)}}>{page}</a>)
      })}

  </div>
  </>
  
  )
}

export default Pagination;