// pages/posts.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        // Map API response body to content
        const mappedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));

        setPosts(mappedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <PostCard
                key={`${post.userId}-${post.title}`}
                userId={post.userId}
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
