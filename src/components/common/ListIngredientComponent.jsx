import React from 'react'

function ListIngredientComponent({name, image, id}) {
  return (
    <>    
    <div className='ingredients-container'>
       <div className='ingredients-main'>
        <img src = {image} /> 
        <h4>{name}</h4>
       </div>
    </div>
    </>
  )
}

export default ListIngredientComponent