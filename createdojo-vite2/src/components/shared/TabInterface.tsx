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
    <ul className="mt-2 text-sm text-center text-beige-100
    h-full mb-2
      dark:border-gray-700 dark:text-gray-400
      grid grid-cols-3 gap-0
      ">
      {tabs.map((tab) => (
        <li key={tab.label}
        className=""
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!tab.disabled) setActiveTab(tab.label);
            }}
            className={`inline-block px-6 border-2 border-gray-500 rounded-t-lg text-2xl font-normal w-full
            ${
              tab.disabled
                ? "text-white cursor-not-allowed dark:text-beige-100"
                : activeTab === tab.label
                ? "text-black bg-white font-semibold"
                : `bg-neutral-400 border border-beige-100 text-gray-700
                hover:text-gray-600 hover:bg-gray-50 
                dark:hover:bg-black dark:hover:text-gray-300`
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
