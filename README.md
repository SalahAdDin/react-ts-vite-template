# React Typescript Vite Template

This is a template based on experiences from assessments and personal projects.

It is build on:
- [**Typescript**](https://www.typescriptlang.org/), of course, who does not like Typescript?
- [**Vite**](https://vitejs.dev/): it's faster than **Webpack** at development and building time, it comes out of the box prepared for working with many different frameworks but still keeps simplicity and customizability.
- [**MSW**](https://mswjs.io/): it intercepts requests on the network level, guarantying an identical application's behavior with and without mocks, without requiring any change in the application's code for the sake of mocking.
- [**Axios**](https://github.com/axios/axios) as fetching API tool.
- [**TanStack-Query**](https://tanstack.com/query/v4/docs/react/overview): gives us caching of server data out of the box with cache invalidation and request de-duping.
- [**ESLint**](https://eslint.org/) and [**Prettier**](https://prettier.io/) for linting and beautifying code.
- [**Testing Library**](https://testing-library.com/) with **[Vitest](https://vitest.dev/)**: **Vitest** support itself in **Vite**, accelerating the testing a lot, and addressing many of the **Jest** modern problems while keeping also a compatible **API**, so making testing even more enjoyable.
- [**Husky**](https://typicode.github.io/husky/#/) with [**Lint Staged**](https://github.com/okonet/lint-staged) for automatizing code beautifying at commiting.
- [**Playwright**](https://playwright.dev/): It is an agnostic tool who support testing for multiple browsers and devices, it has a similar **API** (to **Cypress** and other frameworks) and multilanguage support; it have multiple improvements related theh the modern browser capabilities and addresses some of the most common problems of its counterparts in testing field.
- [**Commitlint**](https://github.com/conventional-changelog/commitlint): It allows you to establish a series of rules for the construction of the messages of the commits.
- [**Conventional Changelog**](https://github.com/conventional-changelog/conventional-changelog): It writes the changelos of changes in each version from the messages of the repository's commitments.
- [**React Headless Pagination**](https://github.com/fullhdpixel/react-headless-pagination): the pagination is the most complex component to handle in the project, to avoid wasting much time on it, we opted for using a headless ready component to it, so we can customize its design by using **CSS**.

## Folder Structure
Following the architecturing approach, we decided to structure this project as follows:
- **Mocks:** It contains all sources relates to **MSW**, i. e., the mocking service.
- **Src**: It is the application sources' folder itself.
- **Tests**: It includes **E2E**, **integration** and other non unit tests.

### Application's Architecture
It tries to follow the Clean Architecture(getting some of inspiration from [Alan Buscaglia](https://www.linkedin.com/in/alanbuscaglia/)'s Clean Architecture series on [Gentleman Programming](https://www.youtube.com/c/GentlemanProgramming): [Clean Architecture](https://www.youtube.com/watch?v=vRGVnqylO68), [React Part 1](https://www.youtube.com/watch?v=5LqhlCd2_nE), [React Part 2](https://www.youtube.com/watch?v=XEcZaKK38fg)):
- **Application:** Contains all related business logic.
- **Domain:** Contains all models(a.k.a types/dto for Typescript).
- **Interface:** Contains all services required to interact with foreign services.
- **Presentation:** Contains all screens and components intended to render our data.

It is an intended architecture, it can be used either globally or per application's feature.

## Git flow

### Commit Convention

> Note: Development based on  [Planable/commitlint-config](https://github.com/Planable/commitlint-config) and its [blog](https://strdr4605.com/commitlint-custom-commit-message-with-emojis).

The commint convention tries to add a ticker number before the commit `type`, always optional, extentending the [conventional commit base proposition](https://www.conventionalcommits.org/en/v1.0.0/).

Hence, the intended pattern[ is as follows](https://regex101.com/r/YyeQ0X/1):

```
[PAP-2013] feat(lang): :arrow_up: add Polish language.
```

Where the ticket number is embedded in square brackets and is optional. We accept [gitmojies](https://gitmoji.dev/) now on the `subject` and not  as a type, making it more clear.

~~#### Emoji(Type) Description~~

~~Inspired by [parmentf/GitCommitEmoji](https://gist.github.com/parmentf/035de27d6ed1dce0b36a), we follow [this emoji schema](https://gitmoji.dev/).~~

### Available scripts

#### `pnpm dev`

Runs the app in development mode.
Open `https://localhost:5173` to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

#### `pnpm build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
