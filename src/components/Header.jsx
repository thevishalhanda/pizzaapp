import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Header() {

 const {isBaseSelected ,selectedIngredient} = useContext(GlobalContext);

  return (
    <div className='header-container'>
        <div className='header-main'>
            <h1>Pizza Plaour </h1>
          {isBaseSelected && selectedIngredient ? (
            <button onClick={() => {
           if(isBaseSelected && selectedIngredient) {
           const isPizzaAdded = window.confirm("Are you want to remove this Pizza")
           if(isPizzaAdded) {
            window.location.reload();
           }
           }
         }}> Remove Pizza </button>
          ) : (null)}
         
        </div>
    </div>
  )
}

export default Header