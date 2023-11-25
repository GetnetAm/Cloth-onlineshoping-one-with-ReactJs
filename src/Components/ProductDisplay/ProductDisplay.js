import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"

function ProductDisplay(props) {
    const {product} =props;
  return (
    <div className='productdisplay'>
        <div className='productdisplaly-laft'>
            <div className='productdispaly-img-list'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
 

            </div>

            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>

            </div>

        </div>

        <div className='productdisply-right'>
            <h1>{product.name}</h1>

            <div className='productdisplay-right-star'>
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_dull_icon} alt='' />

                <p>(122)</p>

            </div>


        </div>

      
    </div>
  )
}

export default ProductDisplay
