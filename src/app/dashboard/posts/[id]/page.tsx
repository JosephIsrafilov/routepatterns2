import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const user = await getUser(post.userId);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link 
        href="/dashboard"
        className="text-blue-600 hover:text-blue-800 hover:underline mb-4 inline-block"
      >
        ← Back to Dashboard
      </Link>
      
      <article className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Author</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Content</h2>
          <p className="text-gray-700 leading-relaxed">{post.body}</p>
        </div>
      </article>
    </div>
  );
}
