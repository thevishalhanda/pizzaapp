import React from 'react'

function ImageComponent({image , name ,id  }) {

  return (
    <div className='image-container'>
        <img src = {image} draggable= {true} id = {id} onDragStart = {(e) => {
         e.dataTransfer.setData("id", e.target.id)
        }} />
        <h3>{name}</h3>
    </div>

  )
}

export default ImageComponent