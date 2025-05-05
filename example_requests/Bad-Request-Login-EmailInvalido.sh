curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{"username": "nonexistentuser", "password": "securepass123"}'