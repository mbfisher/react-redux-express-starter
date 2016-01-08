FROM node:5-onbuild

ENV NODE_ENV=production DEBUG=*

RUN npm run build && npm prune