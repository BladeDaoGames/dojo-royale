import React, { useState } from "react";

interface Tab {
  label: string;
  disabled: boolean;
}

interface TabInterfaceProps {
  tabs: Tab[];
  initialActiveTab?: string; // Optional prop for setting the initially active tab
}

const TabInterface = ({ tabs, initialActiveTab }: TabInterfaceProps) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab || tabs[0].label);

  return (
    <ul className="mt-2 flex text-sm font-medium text-center text-beige-100 dark:border-gray-700 dark:text-gray-400">
      {tabs.map((tab) => (
        <li key={tab.label}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!tab.disabled) setActiveTab(tab.label);
            }}
            className={`inline-block px-6 rounded-t-lg text-2xl font-bold ${
              tab.disabled
                ? "text-white cursor-not-allowed dark:text-beige-100"
                : activeTab === tab.label
                ? "text-white bg-beige-100"
                : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-black dark:hover:text-gray-300 bg-white border border-beige-100"
            }`}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TabInterface;
