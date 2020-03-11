import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../stores/createStore'
import { generatePath } from 'react-router'
import { NavLink } from 'react-router-dom';
import { routes } from '../routes'
import ProductCard from '../../components/ProductCard/ProductCard'
import s from './Home.module.scss';

const Home = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, [])

  if(store.latestProducts.fetchLatest.onProgress) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul className={s.products_list}>
        {store.latestProducts.items.map(item =>
          <li className={s.products_list__item}>
            <NavLink to={generatePath(routes.product, {
              productId: item.id
            })}>
              <ProductCard key={item.id} product={item}/>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
});

export default Home;
