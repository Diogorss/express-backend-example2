curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{"username": "existinguser", "password": "newpass123"}'