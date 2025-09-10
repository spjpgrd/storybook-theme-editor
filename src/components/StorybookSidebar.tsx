'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  children?: SidebarItem[];
}

interface StorybookSidebarProps {}

const sidebarItems: SidebarItem[] = [
  {
    id: 'intro',
    label: 'Intro'
  },
  {
    id: 'theme-config',
    label: 'THEME CONFIG',
    children: [
      { id: 'base-theme', label: 'Base Theme' },
      { id: 'primary-colors', label: 'Primary Colors' },
      { id: 'app-colors', label: 'App Colors' },
      { id: 'typography', label: 'Typography' },
      { id: 'text-colors', label: 'Text Colors' },
      { id: 'bar-colors', label: 'Navigation Bar' },
      { id: 'button-colors', label: 'Buttons' },
      { id: 'input-colors', label: 'Inputs' },
      { id: 'boolean-colors', label: 'Boolean Controls' },
      { id: 'border-radius', label: 'Border Radius' },
      { id: 'grid', label: 'Grid' },
      { id: 'brand', label: 'Brand' }
    ]
  },
  {
    id: 'preview',
    label: 'PREVIEW',
    children: [
      { id: 'live-preview', label: 'Live Preview' },
      { id: 'export', label: 'Export Theme' }
    ]
  }
];

export default function StorybookSidebar({}: StorybookSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['theme-config', 'preview']);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderItem = (item: SidebarItem, level: number = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        <div
          className={`
            flex items-center py-1 cursor-pointer hover:bg-gray-100
            ${level === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'}
          `}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            }
          }}
        >
          {hasChildren && (
            <div className="mr-1">
              {isExpanded ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </div>
          )}
          <span className="text-sm">{item.label}</span>
        </div>

        {hasChildren && isExpanded && (
          <div>
            {item.children!.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4">
        <div className="mb-4">
          <div className="text-lg font-bold text-gray-900 mb-1">S</div>
          <div className="text-sm text-gray-600">Storybook Theme Editor</div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Press '/' to search..."
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          {sidebarItems.map(item => renderItem(item))}
        </div>
      </div>
    </div>
  );
}
