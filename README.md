# lab-todos-app
This is a demo app todo

## requirements
- python
- NodeJS 
- MySQL


## installation

`mkdir todo-app && cd todo-app`

`mkdir frontend && mkdir backend`

### frontend
change the directory
`cd backend`

cloning the repositry to local machine
`git clone https://github.com/youngsterjaidev/lab-todos-app.git`

`cd lab-todos-app`

switch the branch to the "frontend"
`git checkout frontend`

installing the dependencies and run the react project
`npm install && npm run dev`

start the development server
`npm run dev`

### backend
change the directory
`cd frontend`

cloning the repositry to local machine
`git clone https://github.com/youngsterjaidev/lab-todos-app.git`

switch to repo
`cd lab-todos-app`

switch the branch to the "frontend"
`git checkout backend`

installing the dependencies and run the react project
`pip install -r requirements.txt && python3 -m flask run --host 0.0.0.0`

start the development  server
`python3 -m flask run --host 0.0.0.0`

Deployment 
FRONTEND - STATIC APP
BACKEND - APP Service
DATABASE - AZURE MYSQL server
