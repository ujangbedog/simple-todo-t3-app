import { TodoList } from "../components/TodoList";
import { AddTodo } from "../components/AddTodo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Simple TODO App</h1>
        <div className="max-w-2xl mx-auto">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
