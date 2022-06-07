# React Typescript Vite Template

This is a template based on experiences from assessments and personal projects.

It is build on:
- [**Typescript**](https://www.typescriptlang.org/), of course, who does not like Typescript?
- [**Vite**](https://vitejs.dev/) as build tool.
- [**redaxios**](https://github.com/developit/redaxios) as fetching API tool.
- [**React Router**](https://reactrouter.com/) as routing tool.
- [**ESLint**](https://eslint.org/) and [**Prettier**] for linting and beautifying code.
- [**Testing Library**](https://testing-library.com/) with [**Jest**](https://jestjs.io/) for testing.
- [**Husky**](https://typicode.github.io/husky/#/) with [**Lint Staged**](https://github.com/okonet/lint-staged) for automatizing code beautifying at comming.

It tries to follow the Clean Architecture(getting some of inspiration from [Alan Buscaglia](https://www.linkedin.com/in/alanbuscaglia/)'s Clean Architecture series on [Gentleman Programming](https://www.youtube.com/c/GentlemanProgramming): [Clean Architecture](https://www.youtube.com/watch?v=vRGVnqylO68), [React Part 1](https://www.youtube.com/watch?v=5LqhlCd2_nE), [React Part 2](https://www.youtube.com/watch?v=XEcZaKK38fg)):
- Application: Contains all related business logic.
- Domain: Contains all models(a.k.a types/dto for Typescript).
- Interface: Contains all services required to interact with foreign services.
- Presentation: Contains all screens and components intended to render our data.

It is an intended architecture, it can be used either globally or per application's feature.