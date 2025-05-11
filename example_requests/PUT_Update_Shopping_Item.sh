#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEwYmQ5NGUwOTA4NzRlMTE2NDAxYiIsImlhdCI6MTc0NzAwMzYyOCwiZXhwIjoxNzQ3MDA3MjI4fQ.YsCAbVcAEJpCEZW2Nk4eSAcbwbS-DZf_mCIqcCwWIQA"
ITEM_ID="68212f74dc7c55676da40fe0"

echo "Atualizando item..."
curl -X PUT http://localhost:3000/api/shopping/$ITEM_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "quantity": 3,
    "purchased": true
  }'
echo -e "\n"