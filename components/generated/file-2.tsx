"use client";

import { memo } from "react";

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

export const ContactList = memo(function ContactList({ contacts, onDeleteContact }: ContactListProps): JSX.Element {
  return (
    <div className="divide-y">
      {contacts.map((contact) => (
        <div key={contact.id} className="flex justify-between items-center py-3 card hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <div>
            <h3 className="font-bold text-lg">{contact.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{contact.phone}</p>
          </div>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className="px-4 py-2 bg-secondary hover:bg-red-500 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
});