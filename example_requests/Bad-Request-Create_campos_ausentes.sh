curl -X POST http://localhost:3000/api/shopping \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEwYmQ5NGUwOTA4NzRlMTE2NDAxYiIsImlhdCI6MTc0NzAwMzYyOCwiZXhwIjoxNzQ3MDA3MjI4fQ.YsCAbVcAEJpCEZW2Nk4eSAcbwbS-DZf_mCIqcCwWIQA" \
  -H "Content-Type: application/json" \
  -d '{"quantity": 2}'  #  Falta o "name"