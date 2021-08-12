# Admin Panel

Проект представляет из себя 2 части:
- frontend: ReactJS;
- backend: nodejs, express, mongodb


Запуск backend части:
- установите docker c [официального сайта](https://www.docker.com/get-started)
- перейдите в директорию docker-env `cd docker-env`
- выполните команду `docker-compose up --build -d`
- создайте базу данных `todolist` с пустой коллекцией `todos`
  при помощи веб интерфейса `http://localhost:8081`
- перейдите в диреткорию с backend частью
- выполните команду npm install
- после установки запустите `node server.js`, по умолчанию проект запустится `http://localhost:3030`

Описание методов restapi:
- Взять список задач (get query)
  `curl <host:port>/todos/`
  
- Добавить в список одну задачу(post query)
  `curl -X POST -d '{"title": "Test", "completed": false}' -H "Content-Type: application/json" <host:port>/todos/>`
  
- Обновить одну задачу по id задачи(put query)
  `curl -X PUT -d '{"title": "Test", "completed": true}' -H "Content-Type: application/json" <host:port>/todos/:id>`

- Удалить задачу по id задачи(delete query)
  `curl -X DELETE <host:port>/todos/:id>`