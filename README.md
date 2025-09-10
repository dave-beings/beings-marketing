# Beings Marketing OS

A comprehensive content management system using Cursor AI to centrally manage all marketing content as a single source of truth.

## 🎯 Overview

This repository implements a "Marketing OS" approach where all marketing knowledge - from foundational brand identity to tactical content execution - is organized in a logical, scalable structure that enables AI-powered content creation and maintains brand consistency across all materials.

**🎉 CONVERSION COMPLETE**: All research and marketing files have been converted to accessible markdown format with comprehensive organization and full searchability.

## 🚀 Live Site

**Production:** https://dave-beings.github.io/beings-marketing/  
**Local Development:** http://localhost:5173/beings-marketing/

## 📁 Project Structure

```
├── brand/                             # Foundational Brand Identity
│   ├── Brand_Voice_Guide.md               # Brand voice guidelines
│   ├── Audience_Personas.md               # Target personas
│   ├── Content_Pillars.md                 # Content themes
│   └── Value_Propositions.md              # Key messaging
├── research/                          # Research Data & Insights
│   ├── competitor-analysis/               # Market and competitor research
│   ├── message-mining/                    # Voice of customer research
│   ├── qualitative-research/              # Qual research and interviews
│   │   ├── transcripts/                   # Interview transcripts
│   │   └── admin/                         # Administrative documents
│   ├── quantitative-research/             # Survey data and analysis
│   │   └── data/                          # Survey responses and analysis
│   ├── ai-research-interviews/            # AI adoption research (19 files)
│   ├── customer-discovery/                # Customer interviews and discovery
│   └── podcast-interviews/                # Podcast content and interviews
├── strategy/                          # Marketing Strategy & Planning
│   ├── 2025-marketing-strategy.md         # Annual marketing strategy
│   ├── Marketing_OS.md                    # Marketing operating system
│   └── content-planning/                  # Content calendars and planning
├── content/                           # External-Facing Content Assets
│   ├── blog-posts/                        # Published and planned blog content
│   ├── newsletters/                       # Newsletter content and series
│   ├── guides/                            # User guides and documentation
│   │   ├── onboarding/                    # User onboarding materials
│   │   └── prompting-guides/              # AI prompting guides
│   ├── video-scripts/                     # Video content scripts
│   ├── advertising/                       # Ad campaigns and copy
│   └── website/                           # Website-specific content
├── sales/                             # Sales Enablement
│   └── Beings_Playbook.md                 # Sales playbook and materials
├── archive/                           # Historical Versions
│   ├── brand-iterations/                  # Previous brand versions
│   ├── deliverables/                      # Past project deliverables
│   └── reports/                           # Historical reports
├── src/                               # React/Vite Website Application
│   ├── App.tsx
│   └── main.tsx
└── .github/workflows/                 # Auto-deployment
    └── deploy.yml
```

## 🧠 Marketing OS Concept

### Core Principles
- **Logical Organization:** Knowledge flows from foundational elements (brand, research) through strategic planning to tactical execution
- **Single Source of Truth:** All marketing knowledge centrally managed in version-controlled files
- **AI-Powered:** Content generation using structured prompts with brand context and research insights
- **Brand Consistency:** Every piece references foundation files for consistent voice and messaging
- **Scalable Workflow:** Clear separation between strategy, execution, and enablement materials

### Knowledge Architecture
- **`brand/`** - Core brand identity that informs all other work
- **`research/`** - Customer insights and market intelligence that drives strategy
- **`strategy/`** - High-level planning and content calendars
- **`content/`** - All external-facing assets and materials
- **`sales/`** - Sales enablement materials and playbooks
- **`archive/`** - Historical versions and past iterations

## 🎯 Q3 Brochure Project (Live Example)

The `q3-brochure-project/` demonstrates the system in action:

### Source Content (12 Files)
- **01** - Introduction to Aida in Beings
- **03** - Setting Up Your First Research Project  
- **04** - Common Onboarding Mistakes
- **05** - When to Use Aida vs. Your Own Judgment
- **06-08** - Prompting guides (synthesis candidates)
- **11-12** - Data synthesis and output creation
- **16** - Manager's guide
- **17** - Essential prompt library
- **19** - Troubleshooting

### AI-Powered Content Synthesis
Use prompts like:
```
"Using @Provisional_Brand_Voice_Guide.md and @Q3_Brochure_Project.md, 
synthesize content from @source-drafts/06-how-to-write-effective-aida-prompts.md, 
@source-drafts/07-prompting-aida-for-deeper-research-insights.md, and 
@source-drafts/08-debugging-and-iterating-aida-prompts.md into a single, 
concise 'Ultimate Prompting Guide' section for our brochure..."
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone and install
git clone https://github.com/dave-beings/beings-marketing.git
cd beings-marketing
npm install

# Start development server
npm run dev
# Opens http://localhost:5173/beings-marketing/

# Build for production
npm run build
```

### Deployment
- **Automatic:** Every push to `main` triggers GitHub Pages deployment
- **Manual:** Run `npm run build` and deploy `dist/` folder anywhere

## 📝 Content Workflow

### 1. Project Setup
- Create project folder in `content/`
- Add project hub file (like `Q3_Brochure_Project.md`)
- Organize source materials in `source-drafts/`

### 2. AI Content Generation
- Reference foundation files in prompts: `@Provisional_Brand_Voice_Guide.md`
- Use specific source files: `@source-drafts/01-introduction-to-aida-in-beings.md`
- Maintain brand consistency across all outputs

### 3. Review & Refinement
- Track progress in project hub files
- Version control all changes
- Iterate based on feedback

## 🎨 Brand Voice

**Core Tone:** Insightful, Direct, Empowering  
**Style:** Seth Godin-inspired - concise, story-led, impactful  
**Gut Check:** "Does this make our researcher feel smarter and more capable?"

See `content/Provisional_Brand_Voice_Guide.md` for complete guidelines.

## 🔄 Continuous Integration

- **GitHub Actions** automatically builds and deploys on every push
- **TypeScript** type checking and compilation
- **Vite** for fast development and optimized builds

## 📊 Project Status

✅ Marketing OS foundation established  
✅ Q3 Brochure Project source content organized (12/19 files)  
✅ Brand voice guidelines active  
✅ Automated deployment pipeline  
✅ Live website deployment  

## 🚀 Next Steps

1. **Content Synthesis:** Use AI to create brochure sections from source materials
2. **Template Expansion:** Fill out foundation template files with Beings-specific content  
3. **Website Integration:** Connect markdown content to React components
4. **Scale System:** Apply workflow to additional marketing projects

## 🤝 Contributing

This system is designed for collaborative content creation:
1. All content changes are version controlled
2. Project hubs track progress and assignments
3. Brand guidelines ensure consistency
4. AI prompts can be shared and refined

---

**Built with:** React, TypeScript, Vite, GitHub Actions  
**Content Management:** Markdown files with AI-powered synthesis  
**Deployment:** GitHub Pages with automatic CI/CD
