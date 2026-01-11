"use client";

import { useState } from "react";

interface TagsManagerProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export function TagsManager({ tags, onAddTag, onRemoveTag }: TagsManagerProps) {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim()) {
      onAddTag(newTag.trim());
      setNewTag("");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Manage Tags</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Add new tag..."
        />
        <button
          onClick={handleAddTag}
          className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full cursor-pointer"
            onClick={() => onRemoveTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}