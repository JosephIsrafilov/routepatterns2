'use client';

export default function UsersError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-8">
      <h2 className="text-lg font-semibold text-red-600 mb-2">Something went wrong!</h2>
      <p className="text-gray-600 mb-4">Failed to load users</p>
      <button
        onClick={reset}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
