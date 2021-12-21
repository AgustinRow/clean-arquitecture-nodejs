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

### Dockerising automatically

Pre-requisites:

- [docker engine](https://www.docker.com/) & [docker-compose](https://docs.docker.com/compose/install/ servi)
- Install `sequelize-cli` globally

Make sure the port 3306 is open, visible and is not used by any other service locally in your machine

- This step should be done only once:

  1.  build and run container(node app + mysql): `docker-compose up --build`

  2.  should get an error saying `Unknown database`, so you may have to create that database. Without stoping the current container, open a new console and run this command to create the db: `docker exec mysql_db mysql -u root -p"YOUR_PASSWORD" --execute="create database YOUR_DATABASE"`

  3.  stop the container: `ctrl+c` or `docker-compose stop`

  4.  Once completed last steps you can run your dockers container every time you want with: `docker-compose up`

Keep in mind that if you want to make any changes on your docker file or docker-compose file you should attach `--build` to step 4.
