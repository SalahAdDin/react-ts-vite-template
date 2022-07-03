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

## Git flow

### Commit Convention

> Note: Development based on  [Planable/commitlint-config](https://github.com/Planable/commitlint-config) and its [blog](https://strdr4605.com/commitlint-custom-commit-message-with-emojis).

#### Emoji(Type) Descriptions

Inspired by [parmentf/GitCommitEmoji](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

|   Commit type              | Emoji                                         |
|:---------------------------|:----------------------------------------------|
| Initial commit             | :tada: `:tada:`                               |
| Version tag                | :bookmark: `:bookmark:`                       |
| New feature                | :sparkles: `:sparkles:`                       |
| Bugfix                     | :bug: `:bug:`                                 |
| Metadata                   | :card_index: `:card_index:`                   |
| Documentation              | :books: `:books:`                             |
| Documenting source code    | :bulb: `:bulb:`                               |
| Performance                | :racehorse: `:racehorse:`                     |
| Cosmetic                   | :lipstick: `:lipstick:`                       |
| Tests                      | :rotating_light: `:rotating_light:`           |
| Adding a test              | :white_check_mark: `:white_check_mark:`       |
| Make a test pass           | :heavy_check_mark: `:heavy_check_mark:`       |
| General update             | :zap: `:zap:`                                 |
| Improve format/structure   | :art: `:art:`                                 |
| Refactor code              | :hammer: `:hammer:`                           |
| Removing code/files        | :fire: `:fire:`                               |
| Continuous Integration     | :green_heart: `:green_heart:`                 |
| Security                   | :lock: `:lock:`                               |
| Upgrading dependencies     | :arrow_up: `:arrow_up:`                       |
| Downgrading dependencies   | :arrow_down: `:arrow_down:`                   |
| Lint                       | :shirt: `:shirt:`                             |
| Translation                | :alien: `:alien:`                             |
| Text                       | :pencil: `:pencil:`                           |
| Critical hotfix            | :ambulance: `:ambulance:`                     |
| Deploying stuff            | :rocket: `:rocket:`                           |
| Fixing on MacOS            | :apple: `:apple:`                             |
| Fixing on Linux            | :penguin: `:penguin:`                         |
| Fixing on Windows          | :checkered_flag: `:checkered_flag:`           |
| Work in progress           | :construction:  `:construction:`              |
| Adding CI build system     | :construction_worker: `:construction_worker:` |
| Analytics or tracking code | :chart_with_upwards_trend: `:chart_with_upwards_trend:` |
| Removing a dependency      | :heavy_minus_sign: `:heavy_minus_sign:`       |
| Adding a dependency        | :heavy_plus_sign: `:heavy_plus_sign:`         |
| Docker                     | :whale: `:whale:`                             |
| Configuration files        | :wrench: `:wrench:`                           |
| Package.json in JS         | :package: `:package:`                         |
| Merging branches           | :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` |
| Bad code / need improv.    | :hankey: `:hankey:`                           |
| Reverting changes          | :rewind: `:rewind:`                           |
| Breaking changes           | :boom: `:boom:`                               |
| Code review changes        | :ok_hand: `:ok_hand:`                         |
| Accessibility              | :wheelchair: `:wheelchair:`                   |
| Move/rename repository     | :truck: `:truck:`                             |
| Other                      | [Be creative](http://www.emoji-cheat-sheet.com/)  |