import ShoppingItem from '../models/ShoppingItem.js';

export const createItem = async (userId, data) => {
  return await ShoppingItem.create({ ...data, user: userId });
};

export const getAllItems = async (userId) => {
  return await ShoppingItem.find({ user: userId });
};

export const getItemById = async (userId, id) => {
  return await ShoppingItem.findOne({ _id: id, user: userId });
};

export const updateItem = async (userId, id, data) => {
  return await ShoppingItem.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true, runValidators: true } // Boa prática para retornar o documento atualizado
  );
};

export const deleteItem = async (userId, id) => {
  return await ShoppingItem.findOneAndDelete({ _id: id, user: userId });
};