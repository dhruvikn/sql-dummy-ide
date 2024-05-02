# SQL Dummy IDE

A beautiful IDE -

- to write SQL with syntax highlighting,
- to run random/specific queries on dummy datasources,
- and to view the non-queried (not synced with query) data in a tabular manner.

![Screenshot of the application](./public/screenshot.jpg 'Screenshot of the application')

## Features

Here are some of the main features of the app -

- You can write SQL queries in the fully fledged editor.
- The "Run query" button fetches a random data from [here](https://github.com/graphql-compose/graphql-compose-examples/blob/master/examples/northwind/data/csv/README.md).
- A saved queries list that contains a few predefined templates.
- A tables list; when selected will show fetch and show real data in the viewer.
- Cmd + Enter shortcut to run queries.
- Export CSV of the table.
- Sorting and resizing of columns.

## Design Process

After ideating for a bit, here's the first iteration, inspired by [GraphQL Demo](https://graphql-demo.mead.io/).
![First iteration of the wireframe](./public/first-iteration.jpg 'First iteration of the wireframe')

After some more thinking and organising, I decided to go with a more minimalistic approach. I was immensely inspired by [SQL Editor by Martin Rariga on Dribbble](https://dribbble.com/shots/20127080-SQL-Editor) and [Build your audience with an SQL query by Rory Colsell for Vero on Dribbble](https://dribbble.com/shots/16135108-Build-your-audience-with-an-SQL-query).
![Second iteration of the wireframe](./public/second-iteration.jpg 'Second iteration of the wireframe')

## Tech Stack

- Next.js
- TypeScript
- CSS Modules
- [React Codemirror](https://uiwjs.github.io/react-codemirror/)
- [AG Grid React](https://www.npmjs.com/package/ag-grid-react)
- [Axios](https://www.npmjs.com/package/axios/)
- [Classnames](https://www.npmjs.com/package/classnames)
- [Use Hooks](https://usehooks.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on - [Vercel](https://vercel.com/)

---

## Development

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
