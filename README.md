## Getting Started
This project uses [Next.js], [OpenAi], [Prisma], [MongoDB], and [TypeScript] to generate explainer video scripts and storyboards. This project can be used to create simple advertisement video ideas for businesses of any kind.

First, provide these variables in your .env.local file or through your hosting provider:

GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''
DATABASE_URL=''
NEXTAUTH_URL='http://localhost:3000' // Or your hosted url, no trailing slash.
NEXTAUTH_SECRET=''
OPENAI_API_KEY=''

To get your google client id and google client secret, you must create a new app and set up api and oauth access in google cloud console.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
