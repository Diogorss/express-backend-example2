import mongoose from 'mongoose';

const ShoppingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, informe o nome do item'],
    trim: true,
    maxlength: [100, 'Nome não pode ter mais que 100 caracteres']
  },
  quantity: {
    type: Number,
    required: [true, 'Por favor, informe a quantidade'],
    min: [1, 'Quantidade deve ser pelo menos 1']
  },
  category: {
    type: String,
    enum: ['alimentos', 'bebidas', 'limpeza', 'higiene', 'outros'],
    default: 'outros'
  },
  purchased: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String,
    maxlength: [500, 'Notas não podem ter mais que 500 caracteres']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Schema atualizado
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Índice único composto
ShoppingItemSchema.index({ name: 1, user: 1 }, { unique: true });

// Validação customizada
ShoppingItemSchema.pre('save', function(next) {
  if (this.isModified('quantity') && this.quantity < 1) {
    next(new Error(' Quantidade mínima: 1 unidade'));
    return;
  }
  next();
});

// Método para busca otimizada
ShoppingItemSchema.statics.findByUser = async function(userId) {
  return await this.find({ user: userId }).lean();
};

const ShoppingItem = mongoose.model('ShoppingItem', ShoppingItemSchema);
export default ShoppingItem; // Exportação ES6