import React from 'react'

export const GifGridItem = ( { title, url } ) => {

   // console.log( titlle, url );
  
    return (
        <div className ="card animate__animated animate__rotateInDownLeft">
            <img src={ url } alt ={title} />
            <p> { title } </p>
        </div>
    )
}
