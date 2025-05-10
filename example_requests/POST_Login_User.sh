curl --request POST \
  --url 'http://localhost:3000/user/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser4",
    "password": "securepassword123"
    }'