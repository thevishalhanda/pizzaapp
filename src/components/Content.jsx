import React, { useState, useContext, useEffect } from 'react'
import SideBar from './SideBar'
import { GlobalContext } from "../context/GlobalContext"
import { breads, pizzaWithSingleToping, pizzaWithTwoToping, pizzaFinal, toppingsCollection } from '../constant/pizzaData';
import ImageComponent from './common/ImageComponent';
import ListIngredientComponent from './common/ListIngredientComponent';

function Content() {

    const [selectedImage, setSelectedImage] = useState();
    const [selectToping, setSelectToping] = useState("");
    const { isBaseSelected, setIsBaseSelected, selectedItem, setSelectedItem, selectedIngredient, setSelectedIngredient } = useContext(GlobalContext);

    const handlePizzaSelection = (id) => {
        breads.filter(item => {
            if (item.id == id) {
                setSelectedImage(item);
                setIsBaseSelected(true)
                setSelectedItem(item.id)
                document.getElementById('circle-container').style.display = "none"
            }
        })
    }

    useEffect(() => {

    }, [selectedIngredient])


    function isUnique(str) {
        return new Set(str).size == str.length;
      }

    const handleToppingSelection = (id) => {

        if (selectToping) {
            const isUniqueToping = isUnique(selectToping)
            if(isUniqueToping) {
                pizzaWithTwoToping.filter(item => {
                    if (item.id === `${selectToping}${id}`) {
                        setSelectedImage(item);
                        setSelectToping(`${selectToping}${id}`)
                        handleToppingList(id);
                    }
                })   
            }

            let isUniqueTopings = selectToping.includes(id);
            if(!isUniqueTopings && selectToping.length === 3) {
                if(selectToping.includes(`s`)) {
                    setSelectedImage(pizzaFinal[1])
                    handleToppingList(id);
                }
                else {
                    setSelectedImage(pizzaFinal[0])
                    handleToppingList(id);
                }
            }
        }

    

        else {
            pizzaWithSingleToping.filter(item => {
                if (item.id === `${selectedItem}${id}`) {
                    setSelectedImage(item);
                    setSelectToping(`${item.id}`)
                    handleToppingList(id);
                }
            })
        }
    }


    const handleToppingList = (id) => {
        let isIngredientPresent = selectedIngredient && selectedIngredient.find(item => {
            return item.id == id 
        })
        
        if(!isIngredientPresent) {
            toppingsCollection.filter(item => {
                if (item.id == id) {
                    setSelectedIngredient([...selectedIngredient, item])
                }
            })
        }

    }


    return (
        
        <div className='content-container'>
            <SideBar />
            <div className='content-section'>
                <div className='selected-circle-container'>
                    <div className='selection-circle'
                        id='circle-container'
                        onDrop={e => {
                            const id = e.dataTransfer.getData("id");
                            handlePizzaSelection(id);
                        }}
                        onDragOver={e => {
                            e.preventDefault();
                        }}
                    >
                    </div>
                    <div
                        onDrop={e => {
                            const id = e.dataTransfer.getData("id");
                            handleToppingSelection(id);
                        }}
                        onDragOver={e => {
                            e.preventDefault();
                        }}

                    >
                        {selectedImage ? (<img src={selectedImage.image} />) : (null)}
                    </div>
                </div>
                <div className='ingredient-list'>
                    {selectedIngredient && selectedIngredient.map(item => {
                        return (
                            <>
                                    <ListIngredientComponent
                                        name={item.name}
                                        image={item.image}
                                    />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Content