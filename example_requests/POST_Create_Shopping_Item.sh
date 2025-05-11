#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEwYmQ5NGUwOTA4NzRlMTE2NDAxYiIsImlhdCI6MTc0NzAwMzYyOCwiZXhwIjoxNzQ3MDA3MjI4fQ.YsCAbVcAEJpCEZW2Nk4eSAcbwbS-DZf_mCIqcCwWIQA"

echo "Criando novo item..."
curl -X POST http://localhost:3000/api/shopping \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Suco",
    "quantity": 2,
    "category": "bebidas"
  }'
echo -e "\n"