import React from 'react'
import s from './Product.module.scss'
import locationIcon from '../../assets/img/locationIcon.svg';

const Product = ({ product }) => {
  return (
    <div className={s.product}>
      <img className={s.product__image}
           src={'https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}/>
      <div className={s.product__content}>
        <div className={s.product__content_header}>
          <div className={s.product_details}>
            <span className={s.product__title}>{product.title}</span>
            <span className={s.product__updated}>{product.updatedAt}</span>
          </div>
          <div className={s.product__location}>
            <img src={locationIcon}/>
            <span className={s.product__location_name}>{product.location}</span>
          </div>
        </div>
        <div className={s.product__description}>
          {product.location}
        </div>
      </div>
    </div>
  )
}

export default Product
