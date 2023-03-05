# React with Bun runtime

This is a React project boostrapped with bun.

### Local Dev

First, run the development server.

```
bun dev
```
 ### Docker
```
docker build . -t sr/ma-frontend

docker run -rm -ti -p 3000:3000 --env PORT=3000 sr/ma-frontend
```
