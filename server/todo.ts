import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const todoRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await prisma.todo.findMany();
  }),
  addTodo: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.todo.create({
        data: {
          title: input.title,
        },
      });
    }),
  toggleTodo: publicProcedure
    .input(z.object({ id: z.number(), completed: z.boolean() }))
    .mutation(async ({ input }) => {
      return await prisma.todo.update({
        where: { id: input.id },
        data: { completed: input.completed },
      });
    }),
  deleteTodo: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      return await prisma.todo.delete({
        where: { id: input.id },
      });
    }),
  editTodo: publicProcedure
    .input(z.object({ id: z.number(), title: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.todo.update({
        where: { id: input.id },
        data: { title: input.title },
      });
    }),
});
