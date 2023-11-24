import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

function Popular() {
  return (
    <div className='popular'>
        <h1>Popular in Women</h1>
        <hr />

        <div className='popular_item'>

          {
            data_product.map((item, i)=>{
              return <Item key={1} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
            })

          }

        {/* {
          data_product && data_product.map((item)=>{
            return(
              <div className='popular-list' key={item.id}>
                {item.name}

                <img src={item.image} alt='' />
                {item.new_price}
                {item.old_price}
                


                </div>
            )
          })
        } */}

</div>

        {/* <div className='popular-item'>
            {data_product.map((item, i)=>{
                return <Item key={i} 
                id={item.id}
                 name={item.name} 
               
                 newPrice={item.new_price} 
                 old_price={item.old_price} />

               

            })}

         

        </div> */}
      
    </div>
  )
}

export default Popular
