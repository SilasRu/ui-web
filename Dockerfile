FROM jarredsumner/bun:edge
WORKDIR /app

COPY package.json package.json
COPY bun.lockb bun.lockb

RUN bun install

COPY . .

CMD bun dev
