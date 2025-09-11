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
      label: '🎯 Strategy',
      collapsed: true,
      items: [
        'strategy/marketing-strategy',
        'strategy/marketing-plan', 
        'strategy/quarterly-objectives',
        'strategy/Marketing_OS',
        'strategy/pricing-analysis-2025',
        {
          type: 'category',
          label: 'Content Planning',
          items: [
            'strategy/content-planning/lead-nurturing-system',
            'strategy/content-planning/q1-2025-substack-calendar',
            'strategy/content-planning/weekly-content-planner',
            'strategy/content-planning/content-repurposing-workflows',
            'strategy/content-planning/seo-optimization-strategy',
            'strategy/content-planning/Beings.com - CLUSTERS & 12-Week Content Plan_V1',
            'strategy/content-planning/BEINGS.COM - Content Calendar - Q3_4 _Updated September 24',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🎨 Brand',
      collapsed: true,
      items: [
        'brand/Brand_Voice_Guide',
        'brand/Audience_Personas',
        'brand/Value_Propositions',
        'brand/messaging-framework-v2',
        'brand/messaging-framework-v1',
        'brand/Content_Pillars',
        'brand/ideal-customer-profile',
        'brand/brand-guidelines-brief',
      ],
    },
    {
      type: 'category',
      label: '🔍 Research',
      collapsed: true,
      items: [
        'research/market-sizing/market-sizing-tam-sam-som',
        'research/agency-vendor-list',
        {
          type: 'category',
          label: 'Competitor Analysis',
          items: [
            'research/competitor-analysis/BEINGS_Competitor_Content_Analysis',
            'research/competitor-analysis/competitor-landscape-overview',
            'research/competitor-analysis/uk-market-research-analysis-extended',
          ],
        },
        {
          type: 'category',
          label: 'Message Mining',
          items: [
            'research/message-mining/jobs-to-be-done-framework',
            'research/message-mining/voice-of-customer-database-summary',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '💼 Sales',
      collapsed: true,
      items: [
        'sales/customer-testimonials-library',
        'sales/social-proof-library-expanded',
      ],
    },
  ],
};

export default sidebars;
