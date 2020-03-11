import { getParent, types } from 'mobx-state-tree'
import { ProductModel } from './ProductModel'
import { asyncModel } from '../utils'
import Api from '../../api';

export const OwnProducts = types.model('OwnProductsStore', {
  item: types.array(types.reference(ProductModel)),

  fetch: asyncModel(fetchOwnProducts),
})
  .actions((store) => ({
    setItems (items) {
      store.items = items
    }
  }));

function fetchOwnProducts () {
  return async function fetchOwnProductsFlow(flow, store) {
    const res = await Api.Products.byUserId(getParent(store).id);

    // const result = flow.merge(res.data.list, OwnProductsSchema);

    // store.setItems(result);
  };
}
