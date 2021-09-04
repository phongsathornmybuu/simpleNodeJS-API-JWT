# simpleNodeJS-API-JWT
simpleNodeJS-API-JWT

REGISTER AT PATH /api/auth/register

example json body 
{
    "first_name": "Phongsathorn",
    "last_name": "Phuttha",
    "email": "thornza007@gmail.com",
    "password": "thornPassword"
}

------------------------------------------

LOGIN AT PATH /api/auth/login

example json body
{
    "email": "thornza007@gmail.com",
    "password": "thornPassword"
}

example response 
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzA3NjIyMjF9.pYQ5sIji1s7sHyktlUUC4I5zbLfHUDP0VHUQYXVhsNM"
}


