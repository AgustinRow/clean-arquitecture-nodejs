# Clean-arquitecture-nodejs

Clean arquitecture server with NodeJs + Express + sequelize. It is just for practical purpose

## Project dependencies

Below you can find what you need to run the server.

### Pre-requisites

The backend

- Nodejs: [Express](https://expressjs.com/en/starter/generator.html)
- DataBase: MySQL
- ORM: Sequelize
- Container: Docker

### Dockerising manually

Setting up `mysql` in a docker container manually and expose it in port 3306:

Make sure the port 3306 is open, visible and is not used by any other service. You could check that with `netstat -a | grep :3306`

- create the docker image: `docker run --name=neocomplexx --env MYSQL_ROOT_PASSWORD=1234 --detach --publish 3306:3306 mysql_db`

- create network: `docker network create --driver=bridge network-neocomplexx`

- connect your localhost with that network: `docker run -d --network=network-neocomplexx -p 3306:3306 --name=neocomplexx --rm mysql:8.0.27`

- create a new database: `docker exec neocomplexx mysql -u root -p"1234" --execute="create database neocomplexx"`

After all those steps you should be able to connect with the database

### Dockerising automatically

Pre-requisites: `docker-compose`

- build and run container(node app + mysql): `docker-compose up -d --build`

- to stop containers: `docker stop clean-arquitecture-nodejs_app_1 clean-arquitecture-nodejs_db_1`
