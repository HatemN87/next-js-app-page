import React from 'react'
export let metadata={
  title:'Show Articles Page',
}
function layout({children}) {
  

  return (
    <div>
        <h1>Articles</h1>
       <div 
       style={{
        marginTop:'50px',
        background:'blue',
        padding:'20px',
        borderRadius:'10px'}}>
            {children}

       </div>





    </div>
  )
}

export default layout