import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
}
