"use client";

import { useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  tags: string[];
}

interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
}

export function ContactList({ contacts, onDeleteContact }: ContactListProps) {
  return (
    <div className="divide-y">
      {contacts.map((contact) => (
        <div key={contact.id} className="flex justify-between items-center py-3">
          <div>
            <h3 className="font-bold">{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}