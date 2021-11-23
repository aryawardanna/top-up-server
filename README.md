Top Up Server
Top Up App is an application to build app top up in bisnis. It performs standard CRUD actions based on RESTful complex.

This app has :

RESTful endpoint for 10 API CRUD 
JSON formatted response
 

Tech Stack used to build this app :

Node JS
Express JS framework
MongoDB
 

Responses API using MERN from consume API 
These responses are applied  on all endpoints

Player
GET Get_landing_page
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/landingpage>"
}
GET Get_dashboard 
AUTHORIZATION
Bearer Token
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/dashboard>"
}

GET Get_profile
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/profile>"
}

PUT Get_update_profile
AUTHORIZATION
Bearer Token
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/profile>"
}

GET Get_detail_page
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/603152e0a4dd027eefadde60/detail/>"
}

POST Add_new_checkout
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/checkout>"
}

GET Get_history
AUTHORIZATION
Bearer Token
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/history?status=failed>"
}

GET Get_history_detail
AUTHORIZATION
Bearer Token
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/history/60bedda711b1afb14e9c6087/detail>"
}


RESTful endpoints AUTH

POST Signup
AUTHORIZATION
Bearer Token
Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/auth/signup>"
}

Request Body formdata

Response (200)

[
  {
    "id": 1,
    "name": "<signup name>",
    "email": "<signup email>",
    "username": "<signup username>",
    "password": "<signup password>",
    "phoneNumber": "<signup phoneNumber>",
    "role": "<signup role>", //default => [user],
    "status": "<signup status>", //[y/n]
    "favorite": "<signup favorite>", //_id []=>category
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]

GET Get_category

Response (200 - OK)

{
  "message": "<http://localhost:3000/api/v1/players/category>"
}

POST Sign_in
Create new signin

Response (200 - OK)

{
  "message": "http://localhost:3000/api/v1/auth/signin>"
}

Request raw

{
  "email": "player@gmail.com",
  "password": "<your password>"
}
