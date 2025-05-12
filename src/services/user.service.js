import bcrypt from 'bcrypt';
import User from '../models/User.js';

export class UserService {
  static async createUser(username, password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    return User.create({
      username,
      password: hashedPassword
    });
  }

  static async validateUser(username, password) {
    const user = await User.findOne({ username }).select('+password');
    if (!user) throw new Error('Usuário não encontrado');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Credenciais inválidas');
    
    return user;
  }
}