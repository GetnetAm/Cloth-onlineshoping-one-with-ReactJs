
import React from 'react'
import "./NewCollection.css"

import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

function NewCollection() {
  return (
    <div className='new-collections'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
   
        
                <div className='collections'>
                    {
                        new_collections.map((item, i)=>{
                            return <Item Key={i} id={item.id} name={item.name} image={item.image}
                              />
                        })
                    }
                    

                </div>
                

      
    </div>
  )
}

export default NewCollection
