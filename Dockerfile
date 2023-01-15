FROM jarredsumner/bun:edge as base
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
RUN bun bun src/index.tsx
EXPOSE 3000
ENTRYPOINT ["bun", "dev"]