import React, { useRef } from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const {setSearchText} = useGlobalContext();
  const searchBox = useRef("") //or react.useRef for without import
  
  const handleSearch= ()=>{
    setSearchText(searchBox.current.value)
  }
  
  React.useEffect(()=>{
   searchBox.current.focus()
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="search">Search</label>
          <input type="text" placeholder="search here" ref = {searchBox} onChange = {handleSearch} />
          </div>
      </form>
    </section>
  );
}

export default SearchForm;
