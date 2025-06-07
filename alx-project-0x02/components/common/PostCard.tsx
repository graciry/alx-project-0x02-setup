// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
