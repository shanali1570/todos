import TodoApp from "@/components/Todo";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">My To-Do App</h1>
      <TodoApp />
    </main>
  );
}
