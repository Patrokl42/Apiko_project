import React from 'react';
import s from './ProductCard.module.scss';

const ProductCard = ({product}) => {
  return(
    <div className={s.product_Cart}>
      <img className={s.product_image} src={'https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}/>
      <div className={s.product_info}>
        <span className={s.product_name}>{product.title}</span>
        <span className={s.product_price}>{product.price}</span>
      </div>
    </div>
  )
}

export default ProductCard;
