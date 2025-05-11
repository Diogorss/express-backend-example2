import {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
} from '../services/shopping.service.js';

export const create = async (req, res) => {
  try {
    const item = await createItem(req.userId, req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error('Erro ao criar item:', err);
    res.status(400).json({ error: 'Falha ao criar item na lista' });
  }
};

export const getAll = async (req, res) => {
  try {
    const items = await getAllItems(req.userId);
    res.json(items);
  } catch (err) {
    console.error('Erro ao buscar itens:', err);
    res.status(500).json({ error: 'Falha ao carregar lista de compras' });
  }
};

export const getById = async (req, res) => {
  try {
    const item = await getItemById(req.userId, req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.json(item);
  } catch (err) {
    console.error('Erro ao buscar item:', err);
    res.status(500).json({ error: 'Falha ao carregar item' });
  }
};

export const update = async (req, res) => {
  try {
    const item = await updateItem(req.userId, req.params.id, req.body);
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.json(item);
  } catch (err) {
    console.error('Erro ao atualizar item:', err);
    res.status(400).json({ error: 'Falha ao atualizar item' });
  }
};

export const remove = async (req, res) => {
  try {
    const item = await deleteItem(req.userId, req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.json({ message: 'Item removido com sucesso' });
  } catch (err) {
    console.error('Erro ao excluir item:', err);
    res.status(500).json({ error: 'Falha ao excluir item' });
  }
};