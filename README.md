<div align="center">
<h1><a href="#" target="_blank">Retail Product Search App</a></h1>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/-NextJS-000000?logo=nextdotjs">
  <img src="https://img.shields.io/badge/-ReactJS-61DAFB?logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white">
   + Postgresql, Prisma
</div>

<br>

<p align="center">This is a <strong>Next.js</strong> frontend web app that consumes the Product API at <a href="https://www.amazon.com/" target="_blank">amazon.com</a>.</p>

## Demo Video
- https://www.loom.com/share/5aa07c2cc8124325be0b62972a35b6c3

## Getting Started

To get a local copy up and running, follow these simple example steps.

### Prerequisites
- PostgreSQL
- Node.js
- NPM
- Yarn

### Install Dependencies
- Clone the repository to your local machine.
- Install dependencies by running `yarn`.

### Install Database
- You should have postgres installed on your local machine and set your db password in .env file(currently the password is `'root'` in .env, you can change it into your postgres password).
- Sync Database with Prisma Model `yarn prisma:push`.
- Generate the client from the Prisma schema file `yarn prisma:generate`.

### Local deploy
- Run the app with `yarn dev`.

### Open in your browser
- http://localhost:3000

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
