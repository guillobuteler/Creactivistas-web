# Creactivistas online personality tests

Single page application comprising of two different personality tests:
- One based in [MBTI](https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator) (Myers–Briggs Type Indicator)
- The other based in the [Big-Five](https://en.wikipedia.org/wiki/Big_Five_personality_traits) personality traits.

See the app live and find out your own score [here](http://creactivistas.enneagonstudios.com/).

## Improvements over the past version
- Upgraded Next v9.4.4 to v14.0.3, and upgraded from vanilla JS to Typescript + TailwindCSS.
- New design, more delightful, fully responsive, and matching the brand's palette.
- Removed the heavy weight (overkill) Material UI library, in favor of creating a few custom components to replace those previously installed and imported. Most notably: 
- 1. An `AwesomeInput` component (😁), extending React's `input` component with valid/invalid behavior, namely via neutral, valid, and invalid border colors, and an optional invalid message.
- 2. A styled `Button`, with primary, secondary and tertiary colors, matching the brand's palette
- 3. A styled `Card`, reused for descriptions and instructions throughout the site
- 4. A `Rating` component, matching the brand's palette, to allow the user to score each question from the test.
- 5. The layout was significantly simplified by using Tailwind and CSS's flex capabilities, instead of using MUI's Grid and Table component trees.
- Complete UX redesign of the Actus MBTI test
- - Better user name and email input validation (whereas before validation happened on submit, now the button to proceed is disabled until all requirements are met).
- - All 40 questions are now divided in steps, with a sleek and fresh design that makes the experience more streamlined to the user.
- - All progress in the test, and/or test results are stored locally to prevent losses due to network temporary malfunctions.

## Credits
This project was engineered and [TDD](https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%2Ddriven%20development%20(TDD),software%20against%20all%20test%20cases.)ed by [EnneagonStudios](https://www.enneagonstudios.com/) using a combination of:
- [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)
- bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- special thanks to [https://learntdd.in/next/] for their tutorial combining [Cypress](https://www.cypress.io/), [Jest](https://jestjs.io/) and the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) with Next.js.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
