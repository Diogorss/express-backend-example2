#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEwYmQ5NGUwOTA4NzRlMTE2NDAxYiIsImlhdCI6MTc0NzAwMzYyOCwiZXhwIjoxNzQ3MDA3MjI4fQ.YsCAbVcAEJpCEZW2Nk4eSAcbwbS-DZf_mCIqcCwWIQA"
ITEM_ID="68212f74dc7c55676da40fe0"

echo "Deletando item..."
curl -X DELETE http://localhost:3000/api/shopping/$ITEM_ID \
  -H "Authorization: Bearer $TOKEN"
echo -e "\n"