import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-green-50 p-8">
        <Card
          title="Welcome to ALX"
          content="This project demonstrates basic routing and component reuse with Next.js and TypeScript."
        />
        <Card
          title="Reusable Components"
          content="This Card component is reusable and accepts props for dynamic content."
        />
        <Card
          title="Powered by Tailwind"
          content="Styled with Tailwind CSS for a modern and responsive layout."
        />
      </main>
    </>
  );
}
