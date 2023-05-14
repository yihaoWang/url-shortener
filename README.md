# url-shortener

## Run in your machine

### Required

- Node.js >= v16
- Postgresql Database

### Install

#### Set up env

```shell
export INSTANCE_ID="${INSTANCE_ID}"
export DATABASE_URL="${DATABASE_URL}"
export SHORTENER_DOMAIN="${SHORTENER_DOMAIN}"
```

#### Default envs

- INSTANCE_ID: 1
- SIGN_DASH_DOMAIN: <http://localhost:3000>

#### Install libraries

```shell
yarn install
```

#### Migrate database

```shell
npx prisma migrate deploy
```

#### Run App

```shell
yarn dev
```
