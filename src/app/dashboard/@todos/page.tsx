interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

async function getTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }
  const allTodos = await res.json();
  return allTodos.slice(0, 10); // Get only first 10 todos
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div key={todo.id} className="border-b border-gray-200 pb-3 last:border-b-0">
          <div className="flex items-start gap-3">
            <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
              todo.completed ? 'bg-green-500' : 'bg-gray-300'
            }`}></div>
            <p className={`text-sm ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {todo.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
