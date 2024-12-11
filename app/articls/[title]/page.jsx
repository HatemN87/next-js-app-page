import React from 'react'
export let metadata={
    title:'ShowArticlesPage',
  }
  
function ShowArticlesPage(prop) {
    console.log(prop);
    


  return (
    <div>Show Articles Page
    <h1>{prop.params.title}</h1>

    </div>
  )
}

export default ShowArticlesPage