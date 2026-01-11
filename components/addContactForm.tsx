"use client";

import { useState } from "react";

interface AddContactFormProps {
  onAddContact: (contact: { name: string; email: string; phone: string }) => void;
}

export function AddContactForm({ onAddContact }: AddContactFormProps): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddContact({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card">
      <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Phone"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Add Contact
      </button>
    </form>
  );
}