FROM node:15.14.0-alpine3.13 AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app
ENV NODE_ENV production

COPY /public ./public
COPY /.next ./.next
COPY /next.config.js ./next.config.js
COPY /package-lock.json ./package-lock.json
COPY /package.json ./package.json

RUN npm ic --only=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000

CMD ["npm", "start"]