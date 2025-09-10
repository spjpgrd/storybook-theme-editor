'use client';

import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Palette } from 'lucide-react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  description?: string;
}

export default function ColorPicker({ label, value, onChange, description }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {description && (
          <span className="text-xs text-gray-500 ml-1">({description})</span>
        )}
      </label>

      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-8 rounded border border-gray-300 shadow-sm flex items-center justify-center hover:border-gray-400 transition-colors"
          style={{ backgroundColor: value }}
          title={`Current color: ${value}`}
        >
          <Palette className="w-4 h-4 text-white drop-shadow-sm" />
        </button>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          placeholder="#000000"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <HexColorPicker color={value} onChange={onChange} />
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
