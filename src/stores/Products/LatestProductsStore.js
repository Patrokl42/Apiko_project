import { types } from 'mobx-state-tree'
import { asyncModel } from '../utils'
import Api from '../../api'
import { ProductModel } from './ProductModel'
import { LatestProductCollection } from '../schemas'

export const LatestProductsStore = types
  .model('LatestProductsStore',
    {
      items: types.array(types.reference(ProductModel)),

      fetchLatest: asyncModel(fetchLatest),
    })
  .actions(store => ({
    setItems(items){
      store.items = items;
    }
  }));

function fetchLatest () {
  return async function fetchLatestFlow (flow, store, Root) {
    const res = await Api.Products.fetchLatest()

    const result = flow.merge(res.data, LatestProductCollection);

    store.setItems(result);
  }
}
