# node-auth

### :construction: The App is under construction ...

## Technologies

### Back-End
- Node + Express + TS
- express-session + Redis
- MongoDB + Mongoose

### DevOps
- Docker + docker-compose

## Dev setup

```sh
# Bootstrap the app in development mode:
# - provide mongo & redis
# - launch api & web
npm run up

# Only run api & web
npm run dev

# Stop docker containers
npm run stop

# Tear down containers
npm run down
```

### curl

```sh
curl -v -X POST localhost:3000/register -H "Content-Type:application/json" -d "{\"email\":\"arthur@mail.com\",\"name\":\"Arthur\",\"password\":\"Secret12\", \"passwordConfirmation\":\"Secret12\"}"

curl -v -X POST localhost:3000/login -H "Content-Type:application/json" -d "{\"email\":\"arthur@mail.com\",\"password\":\"Secret12\"}"
```

### docker

```sh
# Check session keys
> docker exec -it node-auth_cache_1 redis-cli -a secret
> scan 0

# Check database
> docker exec -it node-auth_db_1 mongo -u admin -p secret auth
> db.users.find({})
```
