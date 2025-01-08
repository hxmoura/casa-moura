"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

interface ModalHeaderProps {
  label: string;
  onClose: () => void;
}

export default function ModalHeader({ label, onClose }: ModalHeaderProps) {
  return (
    <header className="bg-brand-primary min-h-16 max-h-16 flex items-center justify-between px-4">
      <strong className="text-white font-medium">{label}</strong>
      <button onClick={onClose}>
        <Icon icon="heroicons:x-mark" className="w-5 h-5 text-white" />
      </button>
    </header>
  );
}
