"use client";

interface ExportButtonProps {
  onExport: () => void;
}

export function ExportButton({ onExport }: ExportButtonProps) {
  return (
    <button
      onClick={onExport}
      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
    >
      Export Contacts
    </button>
  );
}