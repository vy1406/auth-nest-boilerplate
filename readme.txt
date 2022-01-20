1. npm run i

2. npm run start


3. try:

post
http://localhost:3000/login

without credentials.
u will get UnauthorizedExceptions

4. try 
post
http://localhost:3000/login
with body:
{
	"username": "ironmane",
	"password": "123"
}

u get access_token