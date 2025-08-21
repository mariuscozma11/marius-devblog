# Day 1

Already created the github monorepo, containing the folders "frontend" and "backend". My intuition tells me to start with the backend so I initialized the NestJs project with "nest new ." inside the backend folder. Next step would be to setup the dependencies and setup for those that needs a setup.

Here is the tasklist for today:
[x] .env setup
[x] Prisma setup
[x] Passport setup

Created a .env file and now thinkig about testing if it works properly. I've installed "@nestjs/config" for dotenv setup. Succesfully set up .env, tested by returning a variable from .env path "/" with a get request.


According to the NestJS Documentation, there is a recipe for prisma, I'll use it later on (https://docs.nestjs.com/recipes/prisma). I've set up Prisma by first installing the dependency:

``bash
npm install prisma --save-dev
``
Afterwards setting it up for the project with:

``bash
npx prisma init
``

For the passport setup I've just installed the deps with:

``bash
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local
``

No point in doing any further setup until choosing the strategy to go about it. That's it for day 1, for day 2 I hope I'll do more implementing, need to think the development strategy through.