import { useState } from "react"


export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState('adam')
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
    }

    return(
        <>
            <form onSubmit={ (event) => onSubmit(event)}>
                <input 
                    type="text" 
                    placeholder="Buscar imagen/video" 
                    value={ inputValue } 
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}