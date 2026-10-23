# Massachusetts State Sanitary Code
This site contains information for tenants about the responsibilities of their landlord and provides links to helpful tools. Demo: [https://housing-code.web.app](https://housing-code.web.app)

# to run
Use Node 22.23.4 or newer. Run `npm ci`, then `npm start`.

# to build static pages
`npm run build` \
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build uses Vite instead of the retired Create React App toolchain.
Use npm and `package-lock.json`; the obsolete Yarn lockfile has been removed.
Run `npm test` to check rendering, language selection, and category navigation.
Run `npm run preview` to serve the production build locally.

# To deploy to github pages

`npm run deploy`

Depends on:

* `homepage` being set to https://nonprofittechy.github.io/ (without the trailing repository name)
* add a CNAME file with code.getuptocode.org in the /public directory


# to update the housing_code_checklist.csv
When the CSV gets updated, run the function in [convertCSVToJson.js](/src/convertCSVToJson.js) and then copy over the data to
* [housing_code_checklist.json](/src/housing_code_checklist.json) and store it as a child of the "data" key.

# translations
When there is new or edited text, write the translations in [translations.json](/src/translations.json). The key is the 
English text.

When a new language is added update [translations.json](/src/translations.json) and make sure to add the column key.
The column refers to the column of the language description in the [housing_code_checklist.json](/src/housing_code_checklist.json)
