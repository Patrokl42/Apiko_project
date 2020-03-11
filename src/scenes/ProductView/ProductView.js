import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { observer } from 'mobx-react'
import Product from '../../components/Product/Product'
import { useProductsCollection } from '../../stores/Products/ProductsCollection'

const ProductView = () => {
  const { productId } = useParams();
  const collection = useProductsCollection();

  const product = collection.get(productId);

  useEffect(() => {
    if(!product || product.owner) {
      collection.getProduct.run(productId);
    }
  }, []);

  if (collection.getProduct.isLoading){
    return <div>loading...</div>
  } else if(!product){
    return <div>Not found</div>
  }

  return(
    <div>
      <Product product={product}/>
      <h2>{product.owner && product.owner.fullName}</h2>
    </div>
    )
};


export default observer(ProductView)
