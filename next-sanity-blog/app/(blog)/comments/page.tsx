'use client'
import React, { useState, useEffect } from 'react';

// Defining types for the comment data
interface Comment {
  username: string;
  comment: string;
}

const CommentsSection: React.FC = () => {
  // State to store the comments and input values
  const [username, setUsername] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  // Load saved comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]') as Comment[];
    setComments(savedComments);
  }, []);

  // Handle form submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && comment) {
      const newComment: Comment = { username, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);

      // Save comments to localStorage
      localStorage.setItem('comments', JSON.stringify(updatedComments));

      // Reset input fields
      setUsername('');
      setComment('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Comments Section</h2>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="space-y-4 mb-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-lg font-bold">Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="comment" className="text-lg font-bold">Comments</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here"
            rows={4}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((commentItem, index) => (
            <div key={index} className="p-4 border-b border-gray-200">
              <p className="text-xl font-medium">{commentItem.username}</p>
              <p className="text-gray-600">{commentItem.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
