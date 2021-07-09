import React, { useState } from 'react'
import { AddCategory } from './componetnts/AddCategory'
import { GifGrid } from './componetnts/GifGrid';

//rafc crea todo el codigo del componente

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Flash']);



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />



            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key = {category}
                        category ={ category } 
                        />
                    ))

                }

            </ol>
        </>
    )
}



