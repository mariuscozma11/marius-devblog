# Day 1

Already created the github monorepo, containing the folders "frontend" and "backend". My intuition tells me to start with the backend so I initialized the NestJs project with "nest new ." inside the backend folder. Next step would be to setup the dependencies and setup for those that needs a setup.

Here is the tasklist for today:
[x] .env setup
[] Prisma setup
[] Passport setup

Created a .env file and now thinkig about testing if it works properly. I've installed "@nestjs/config" for dotenv setup. Succesfully set up .env, tested by returning a variable from .env path "/" with a get request.