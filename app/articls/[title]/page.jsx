import React from 'react'

  
function ShowArticlesPage(prop) {
    console.log(prop);
    


  return (
    <div>Show Articles Page
    <h1>{prop.params.title}</h1>

    </div>
  )
}

export default ShowArticlesPage