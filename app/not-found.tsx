import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center space-y-3 text-center">
      <h2 className="text-4xl font-bold text-green-600">Not Found</h2>
      <p className="text-xl text-gray-500">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
