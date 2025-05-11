curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"password": "123"}'  # Falta o "username"