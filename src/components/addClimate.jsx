import React, { useState } from 'react'
import '../search/search.css'
export const AddClimate = ({setClimate}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
     
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 1) {
             setClimate(inputValue)
             setInputValue('')
        }
      
    }

    
    
  return (
      <div className='search-input-main'>
        <form onSubmit={handleSubmit}>
            <input 
                className='search-input'
                type="text" 
                placeholder='Busca tu pais'
                value={inputValue}
                onChange={handleInputChange }
            />
             <button onClick={handleSubmit} className='search-buttom' > buscar</button>
        </form>
       
      </div>

  )
}