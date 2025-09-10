import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '🔴 High Priority',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '🎯 Strategy & Planning',
          items: [
            'strategy/marketing-strategy',
            'strategy/marketing-plan',
            'strategy/quarterly-objectives',
            'strategy/Marketing_OS',
          ],
        },
        {
          type: 'category',
          label: '🎨 Brand & Messaging',
          items: [
            'brand/Brand_Voice_Guide',
            'brand/Audience_Personas',
            'brand/Value_Propositions',
            'brand/messaging-framework-v2',
            'brand/Content_Pillars',
            'brand/ideal-customer-profile',
          ],
        },
        {
          type: 'category',
          label: '📝 Content Strategy',
          items: [
            'strategy/content-planning/lead-nurturing-system',
            'strategy/content-planning/q1-2025-substack-calendar',
            'strategy/content-planning/weekly-content-planner',
            'strategy/content-planning/content-repurposing-workflows',
            'strategy/content-planning/seo-optimization-strategy',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🟡 Medium Priority',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '🔍 Market Research',
          items: [
            'research/market-sizing-tam-sam-som',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🟢 Low Priority',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '💼 Sales Support',
          items: [
            'sales/customer-testimonials-library',
            'sales/social-proof-library-expanded',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
