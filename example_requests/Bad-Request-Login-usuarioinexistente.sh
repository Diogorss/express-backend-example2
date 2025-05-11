curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"username": "inexistente", "password": "errada"}'  # Usuário não existe