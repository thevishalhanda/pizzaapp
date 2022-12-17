import React, { useContext, useEffect } from 'react'
import {breads, toppingsCollection} from '../constant/pizzaData'
import ImageComponent from './common/ImageComponent'
import { GlobalContext } from '../context/GlobalContext';
function SideBar() {

  const { isBaseSelected, setIsBaseSelected } = useContext(GlobalContext);

  useEffect(() => {
   
  }, [isBaseSelected])


  return (
    <div className='sidebar-container'>
      <div className='sidebar-main'>
        {isBaseSelected ? (
          <>
            <h2> Select the Topings </h2>
            {toppingsCollection && toppingsCollection.map(item => {
              return (
                <ImageComponent
                  image={item.image}
                  name={item.name}
                  id={item.id}
                />
              )
            })}
          </>
        
        ) : (
          <>

            <h2> Selected Bread </h2>
            {breads && breads.map(item => {
              return (
                <ImageComponent
                  image={item.image}
                  name={item.name}
                  id={item.id}
                />
              )
            })}
          </>
        )}
      </div>
    </div>

  )
}

export default SideBar