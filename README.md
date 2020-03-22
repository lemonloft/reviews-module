# Review Module for LemonLoft

Microservice focused on frontend functionality and appearance.

## Related Projects
  - https://github.com/lemonloft/reservation-module
  - https://github.com/lemonloft/photo-gallery-module
  - https://github.com/lemonloft/photo-gallery-module-gs

## Screen capture demonstrating some of the functionality:

![Imgur Image](./reviews_demo.gif)


## Setup to run locally

Install node ^8.15.1 and webpack ^4.41.2 if not already installed.

Clone repo to local machine.

From within the root directory of repo run the following commands:

```sh
npm install
npm run db:setup
npm run build:production
npm run server:production
```

Navigate to link in a web browser.
>http://localhost:3004


Optionally add an 'id' query key, value between 1 and 100.
>http://localhost:3004/5