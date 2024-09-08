FROM imbios/bun-node:1-20-alpine as builder
WORKDIR /my-space

ARG NEXT_PUBLIC_API_URL 

COPY package.json bun.lockb ./
RUN bun install --no-save
COPY . .
RUN bun run build

FROM node:20-alpine as runner
WORKDIR /my-space
COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/bun.lockb .
COPY --from=builder /my-space/next.config.mjs ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next/standalone ./
COPY --from=builder /my-space/.next/static ./.next/static
COPY --from=builder /my-space/node_modules/sharp ./node_modules/sharp
ENV NEXT_SHARP_PATH=/my-space/node_modules/sharp

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
