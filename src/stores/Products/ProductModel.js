import { types } from 'mobx-state-tree';
import { UserModel } from '../Users/UserModel';
import { safeReference } from '../ViewerStore';

export const ProductModel = types.model('ProductModel',{
  id: types.identifierNumber,
  ownerId: types.number,
  title: types.string,
  description: types.maybeNull(types.string),
  photos: types.maybeNull(types.array(types.string)),
  location: types.string,
  price: types.number,
  saved: false,
  createdAt: types.string,
  updatedAt: types.string,
  owner: safeReference(types.late(() => UserModel ))
})
