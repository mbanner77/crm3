"use client";

import { useState } from "react";
import { ContactList } from "@/components/ContactList";
import { SearchBar } from "@/components/SearchBar";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { TagsManager } from "@/components/TagsManager";
import { ExportButton } from "@/components/ExportButton";
import { AddContactForm } from "@/components/AddContactForm";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  tags: string[];
  activities: string[];
}

export default function Page() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleSearch = (query: string) => {
    // Implement search logic
  };

  const handleExport = () => {
    // Implement export logic
  };

  const handleAddContact = (newContact: { name: string; email: string; phone: string }) => {
    const contact: Contact = {
      id: Math.random().toString(36).substr(2, 9), // Simple ID generator
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone,
      tags: [],
      activities: []
    };
    setContacts([...contacts, contact]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Kontakt-Management-System</h1>
      <SearchBar onSearch={handleSearch} />
      <AddContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onSelect={setSelectedContact} />
      {selectedContact && (
        <>
          <ActivityTimeline contact={selectedContact} />
          <TagsManager contact={selectedContact} />
        </>
      )}
      <ExportButton onExport={handleExport} />
    </div>
  );
}