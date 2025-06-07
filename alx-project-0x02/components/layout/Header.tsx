import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex space-x-4">
      <h1 className="text-xl font-semibold">ALX Project</h1>
      <nav className="ml-6 space-x-4">
        <Link href="/">Home</Link>
        <Link href="/home">home</Link>
        <Link href="/about">about</Link>
      </nav>
    </header>
  );
}
