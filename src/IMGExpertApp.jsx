import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const IMGExpertApp = () => {

    const [categories, setCategories] = useState([ 'Galaxy', 'Planets' ])

    const onAddCategory = () => {
        setCategories([...categories, 'hola'])
    }
    
    return(
        <>
            {/* Titulo */}
            <h1>IMGExpertApp</h1>
        
            {/* Input */}
            <AddCategory />

            {/* Listado de imagenes/videos */}
            <button onClick={ onAddCategory }>Agregar</button>
                <ol>
                    { categories.map(
                        category => {
                            return <li key={ category }>{ category }</li>
                        }
                    )}
                </ol>

                {/* IMG/VIDEO Item */}

        </>
    )
}