'use client';

import { useState } from 'react';
import { FaChevronDown, FaProjectDiagram, FaCode, FaUsers, FaBook } from 'react-icons/fa';

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

export default function Do() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const categories: Category[] = [
    {
      id: 'projects',
      title: 'Project Management',
      icon: <FaProjectDiagram size={20} />,
      color: 'blue',
      items: [
        'Agile project planning and execution',
        'Risk assessment and mitigation',
        'Budget management and forecasting',
        'Stakeholder communication',
        'Resource allocation and optimization',
        'Project documentation and reporting',
      ],
    },
    {
      id: 'scrum',
      title: 'Scrum Mastery',
      icon: <FaUsers size={20} />,
      color: 'green',
      items: [
        'Sprint planning and facilitation',
        'Daily standup coordination',
        'Sprint retrospectives',
        'Backlog refinement sessions',
        'Team coaching and mentoring',
        'Impediment removal',
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <FaCode size={20} />,
      color: 'purple',
      items: [
        'Jira & Confluence',
        'Microsoft Project',
        'Asana & Monday.com',
        'Slack & Microsoft Teams',
        'Miro & Figma',
        'GitHub & GitLab',
      ],
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      icon: <FaBook size={20} />,
      color: 'orange',
      items: [
        'Agile methodology workshops',
        'Leadership development courses',
        'Industry conferences and webinars',
        'Professional certification preparation',
        'Team building exercises',
        'Cross-functional collaboration training',
      ],
    },
  ];

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id)
        ? prev.filter((catId) => catId !== id)
        : [...prev, id]
    );
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-600 dark:border-blue-400',
        hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/50',
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-600 dark:border-green-400',
        hover: 'hover:bg-green-50 dark:hover:bg-green-900/50',
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-600 dark:border-purple-400',
        hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/50',
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-600 dark:border-orange-400',
        hover: 'hover:bg-orange-50 dark:hover:bg-orange-900/50',
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          What I <span className="text-blue-600">Do</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Click on a category to explore my skills and activities
        </p>

        <div className="space-y-4">
          {categories.map((category) => {
            const isOpen = openCategories.includes(category.id);
            const colors = getColorClasses(category.color);

            return (
              <div key={category.id} className="overflow-hidden">
                {/* Category Button */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-xl border-2 ${colors.border} ${colors.hover} transition-all duration-200 bg-white dark:bg-gray-800`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${colors.bg} ${colors.text}`}>
                      {category.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </span>
                  </div>
                  <FaChevronDown
                    className={`${colors.text} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>

                {/* Category Content */}
                <div
                  className={`accordion-content ${isOpen ? 'open' : ''}`}
                >
                  <div className={`mt-2 p-6 rounded-xl ${colors.bg} border-2 ${colors.border}`}>
                    <ul className="space-y-3">
                      {category.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className={`w-2 h-2 rounded-full ${colors.text} bg-current`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
