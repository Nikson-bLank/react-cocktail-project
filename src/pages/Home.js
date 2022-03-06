import React from 'react'

//component
import SearchForm from "../component/SearchForm";
import CocktailList from "../component/CocktailList";

function Home() {
  return (
  <main>
    <SearchForm></SearchForm>
    <CocktailList></CocktailList>
  </main>
  )
}

export default Home