'use client';

interface BaseSelectorProps {
  value: 'light' | 'dark';
  onChange: (value: 'light' | 'dark') => void;
}

export default function BaseSelector({ value, onChange }: BaseSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Base Theme
        <span className="text-xs text-gray-500 ml-1">(light or dark)</span>
      </label>

      <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            value="light"
            checked={value === 'light'}
            onChange={(e) => onChange(e.target.value as 'light' | 'dark')}
            className="mr-2 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Light</span>
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            value="dark"
            checked={value === 'dark'}
            onChange={(e) => onChange(e.target.value as 'light' | 'dark')}
            className="mr-2 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Dark</span>
        </label>
      </div>
    </div>
  );
}
