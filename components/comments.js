'use client'
import { useState } from "react";

export default function AddCommentForm({ id, comment }) {
  const [newComment, setNewComment] = useState();

  const handleSubmit=()=>{
    comment.push(newComment);
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ newComment }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to update topic");
//       }

//       router.refresh();
//       router.push("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewComment(e.target.value)}
        value={newComment}
        className="self-center w-full border-b border-b-gray-300 bg-transparent"
        type="text"
        placeholder="Add an anonymous comment"
      />
      <button className="self-end relative text-gray-700 text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
        Post
      </button>
    </form>
  );
}