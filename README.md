# url-shortener
a url shorten web service written by TypeScript, Express.js and EJS.

## Run in your machine

### Required

- Node.js >= v16
- Postgresql Database

### Quick Start

1. Clone project
```shell
https://github.com/yihaoWang/url-shortener.git
```

2. Set up env

```shell
export INSTANCE_ID="${INSTANCE_ID}" // Default: '1'
export DATABASE_URL="${DATABASE_URL}" // Example: postgres://${username}:${password}@${host}/${database}
export SHORTENER_DOMAIN="${SHORTENER_DOMAIN}" // Default: http://localhost:3000
```

3. Install dependencies

```shell
yarn install
```

4. Migrate database

```shell
npx prisma migrate deploy
```

5. Run App

```shell
yarn dev
```
