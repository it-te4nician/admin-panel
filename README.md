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
- после установки запустите `node server.js`