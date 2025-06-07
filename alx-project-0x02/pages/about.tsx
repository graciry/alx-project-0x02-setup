import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">About Page</h1>
        <div className="flex gap-4 flex-wrap">
          <Button label="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button label="Large Rounded-full" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
