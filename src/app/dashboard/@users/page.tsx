interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="border-b border-gray-200 pb-3 last:border-b-0">
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-600">@{user.username}</p>
        </div>
      ))}
    </div>
  );
}
