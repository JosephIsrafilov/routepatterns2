import Link from "next/link";

interface Post {
  id: number;
  title: string;
  userId: number;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <div key={post.id} className="border-b border-gray-200 pb-3 last:border-b-0">
          <Link 
            href={`/dashboard/posts/${post.id}`}
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
