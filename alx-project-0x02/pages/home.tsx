import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setModalOpen(true)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Post
      </button>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
