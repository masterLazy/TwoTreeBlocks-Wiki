# Deploy Docusaurus V3 website to GitHub Pages using GitHub Actions

This repository is an example of deploying a Docusaurus V3 website to GitHub Pages using GitHub Actions.

This repository is base on [LayZeeDK/github-pages-docusaurus](https://github.com/LayZeeDK/github-pages-docusaurus),thanks [Lars](https://github.com/LayZeeDK)!

**Please note**: There are some difference between Docusaurus V2 and Docusaurus V3 on the "baseURL" setting.

## Configuring the GitHub repository

It uses the *new* GitHub Pages experience with GitHub Actions to deploy the website.

Enable this experience in *GitHub.com -> Repository -> Settings -> Pages -> Build and deployment -> Source* by selecting *GitHub Actions* instead of the legacy *Deploy from a branch* option.

## Configuring Docusaurus

Generate a Docusuarus website using the following command:

```
yarn create docusaurus <folder-name> classic --typescript
```



Make the following changes to the `docusaurus.config.ts` configuration file:

1. Set the URL/base URL

   ```
   const config: Config = {
     // (...)
     url: `https://<github-organization-name>.github.io`,
     baseUrl = '/<repository-name>/`;
     };
   ```

   

2. Set the `organizationName` and `projectName` options

   ```
   const config: Config = {
     // (...)
     organizationName: '<github-organization-name>',
     projectName: '<repository-name>',
   };
   ```

   

3. Configure the blog and docs edit URLs

   ```
   const config: Config = {
     // (...)
     presets: [
       [
         "classic",
         {
           docs: {
             // (...)
             editUrl: `https://github.com/<github-organization-name>/<repository-name>/tree/main/`,
           },
           blog: {
             // (...)
             editUrl: `https://github.com/<github-organization-name>/<repository-name>/tree/main/`,
           },
         },
       ],
     ],
   };
   ```

   

## Adding a GitHub Actions deployment workflow

Use a GitHub Actions workflow template for GitHub Pages from the [`actions/starter-workflows`](https://github.com/actions/starter-workflows) repository. Place it in `.github/workflows/<workflow-name>.yml`.

Add steps for building the website before the GitHub Pages actions are executed and specify the `path` to the `actions/upload-pages-artifact`:

```
# (...)
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      # 👇 Build steps
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn
      - name: Install dependencies
        run: yarn install --frozen-lockfile --non-interactive
      - name: Build
        run: yarn build
      # 👆 Build steps
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # 👇 Specify build output path
          path: build
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```
