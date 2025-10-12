# TODO App with Next.js, tRPC, Prisma, and Tailwind CSS

A simple TODO application built with Next.js (App Router), tRPC, Prisma, and Tailwind CSS. Features include adding, editing, deleting tasks, toast notifications, and a confirmation modal for deletion.

---

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/ujangdoubleday/simple-todo-t3-app.git
cd todo-app
```

### 2. Install Dependencies

Install the required dependencies using Bun (or npm if you prefer):

```bash
bun install
```

### 3. Set Up Environment Variables

Rename the .env.example file to .env and update the database connection URL:

### 4. Set Up the Database

Run the following command to apply the Prisma migrations and seed the database:

```bash
bunx prisma migrate dev --name init
```

### 5. Run the Application

Start the development server:

```bash
bun run dev
```

Open your browser and navigate to http://localhost:3000 to view the application.
