import React, { useState } from 'react'
import './App.css'

interface ContentSection {
  id: string;
  title: string;
  description: string;
  files: string[];
  priority: 'high' | 'medium' | 'low';
}

const App = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const sections: ContentSection[] = [
    {
      id: 'strategy',
      title: '🎯 Strategy & Planning',
      description: 'Core marketing strategy, objectives, and quarterly plans',
      files: [
        'strategy/2025-marketing-strategy.md',
        'strategy/2025-marketing-plan.md', 
        'strategy/2025-quarterly-objectives.md',
        'strategy/Marketing_OS.md'
      ],
      priority: 'high'
    },
    {
      id: 'brand',
      title: '🎨 Brand & Messaging',
      description: 'Brand guidelines, voice, personas, and value propositions',
      files: [
        'brand/Brand_Voice_Guide.md',
        'brand/Audience_Personas.md',
        'brand/Value_Propositions.md',
        'brand/messaging-framework-v2.md',
        'brand/Content_Pillars.md',
        'brand/ideal-customer-profile.md'
      ],
      priority: 'high'
    },
    {
      id: 'content',
      title: '📝 Content Strategy',
      description: 'Content planning, calendars, and production workflows',
      files: [
        'strategy/content-planning/lead-nurturing-system.md',
        'strategy/content-planning/q1-2025-substack-calendar.md',
        'strategy/content-planning/weekly-content-planner.md',
        'strategy/content-planning/content-repurposing-workflows.md',
        'strategy/content-planning/seo-optimization-strategy.md'
      ],
      priority: 'high'
    },
    {
      id: 'research',
      title: '🔍 Market Research',
      description: 'Customer discovery, competitor analysis, and market insights',
      files: [
        'research/customer-discovery/',
        'research/competitor-analysis/',
        'research/market-sizing-tam-sam-som.md',
        'research/qualitative-research/',
        'research/quantitative-research/'
      ],
      priority: 'medium'
    },
    {
      id: 'content-library',
      title: '📚 Content Library',
      description: 'Blog posts, case studies, newsletters, and video scripts',
      files: [
        'content/blog-posts/',
        'content/case-studies/',
        'content/newsletters/',
        'content/video-scripts/',
        'content/website/markdown/pages/'
      ],
      priority: 'medium'
    },
    {
      id: 'sales',
      title: '💼 Sales Support',
      description: 'Testimonials, social proof, and sales enablement materials',
      files: [
        'sales/customer-testimonials-library.md',
        'sales/social-proof-library-expanded.md'
      ],
      priority: 'low'
    }
  ];

  const priorityColors = {
    high: 'border-red-200 bg-red-50',
    medium: 'border-yellow-200 bg-yellow-50', 
    low: 'border-green-200 bg-green-50'
  };

  const priorityLabels = {
    high: '🔴 High Priority',
    medium: '🟡 Medium Priority',
    low: '🟢 Low Priority'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Beings Marketing OS</h1>
              <p className="text-gray-600 mt-1">Comprehensive marketing knowledge base for CMO review</p>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedSection ? (
          /* Main Dashboard */
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">📋 Quick Overview</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">6</div>
                    <div className="text-gray-600">Content Sections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">200+</div>
                    <div className="text-gray-600">Marketing Assets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">Q1 2025</div>
                    <div className="text-gray-600">Current Focus</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">🗂️ Marketing Sections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className={`bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border-l-4 ${priorityColors[section.priority]}`}
                    onClick={() => setSelectedSection(section.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                        {priorityLabels[section.priority]}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                    <div className="text-sm text-gray-500">
                      {section.files.length} files/folders
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 How to Use This Knowledge Base</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• <strong>Start with Strategy & Planning</strong> - Get the big picture first</li>
                <li>• <strong>Review Brand & Messaging</strong> - Understand positioning and voice</li>
                <li>• <strong>Dive into Content Strategy</strong> - See execution plans and calendars</li>
                <li>• <strong>Explore Research</strong> - Understand market and customer insights</li>
                <li>• Click on any section to browse files and documents</li>
              </ul>
            </div>
          </div>
        ) : (
          /* Section View */
          <div>
            <div className="flex items-center mb-6">
              <button
                onClick={() => {setSelectedSection(null); setSelectedFile(null);}}
                className="text-blue-600 hover:text-blue-800 mr-4"
              >
                ← Back to Overview
              </button>
              <h2 className="text-2xl font-semibold text-gray-900">
                {sections.find(s => s.id === selectedSection)?.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* File List */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📁 Files & Documents</h3>
                  <ul className="space-y-2">
                    {sections.find(s => s.id === selectedSection)?.files.map((file, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setSelectedFile(file)}
                          className={`w-full text-left p-2 rounded hover:bg-gray-50 text-sm ${
                            selectedFile === file ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                          }`}
                        >
                          {file.split('/').pop()?.replace('.md', '') || file}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Content Preview */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  {selectedFile ? (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        📄 {selectedFile.split('/').pop()?.replace('.md', '')}
                      </h3>
                      <div className="bg-gray-50 rounded p-4 text-sm text-gray-600">
                        <p><strong>File Path:</strong> {selectedFile}</p>
                        <p className="mt-2">
                          <em>Click the file path above to open this document in your editor, or use the terminal command:</em>
                        </p>
                        <code className="bg-white px-2 py-1 rounded mt-2 inline-block">
                          open "{selectedFile}"
                        </code>
                      </div>
                      
                      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">📝 Review Notes</h4>
                        <textarea 
                          className="w-full h-32 p-3 border rounded-md text-sm"
                          placeholder="Add your review notes, questions, or recommendations for this document..."
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-12">
                      <div className="text-4xl mb-4">📄</div>
                      <p>Select a file from the list to preview</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
