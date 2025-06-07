import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  // Change handleAddPost to accept two args to match PostModal
  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Add Post
        </button>

        {/* Pass isOpen prop */}
        <PostModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
        />

        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </>
  );
}
