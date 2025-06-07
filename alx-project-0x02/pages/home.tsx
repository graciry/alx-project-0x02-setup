import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-green-100">
        <h1 className="text-3xl font-bold text-green-700">Welcome to the Home Page</h1>
      </main>
    </>
  );
}
