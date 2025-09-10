import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Beings Marketing Knowledge Base
        </Heading>
        <p className="hero__subtitle">Comprehensive marketing strategy and execution guide for CMO review</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            📋 Start CMO Review
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className="container margin-vert--lg">
      <div className="row">
        <div className="col col--12">
          <div className="text--center margin-bottom--lg">
            <h2>🎯 Ready for Your October CMO Review</h2>
            <p className="margin-bottom--lg">
              Your marketing knowledge base is organized and ready for comprehensive review. 
              All marketing assets are categorized by priority for systematic evaluation.
            </p>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col col--4">
          <div className="card margin-bottom--lg" style={{borderLeft: '4px solid #dc3545', height: '100%'}}>
            <div className="card__header">
              <h3>🔴 High Priority</h3>
            </div>
            <div className="card__body">
              <p><strong>Essential sections for CMO review:</strong></p>
              <ul>
                <li><Link to="/docs/strategy/2025-marketing-strategy">🎯 Strategy & Planning</Link></li>
                <li><Link to="/docs/brand/Brand_Voice_Guide">🎨 Brand & Messaging</Link></li>
                <li><Link to="/docs/strategy/content-planning/lead-nurturing-system">📝 Content Strategy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col col--4">
          <div className="card margin-bottom--lg" style={{borderLeft: '4px solid #ffc107', height: '100%'}}>
            <div className="card__header">
              <h3>🟡 Medium Priority</h3>
            </div>
            <div className="card__body">
              <p><strong>Supporting materials:</strong></p>
              <ul>
                <li><Link to="/docs/research/market-sizing-tam-sam-som">🔍 Market Research</Link></li>
                <li>📚 Content Library (in main folders)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col col--4">
          <div className="card margin-bottom--lg" style={{borderLeft: '4px solid #28a745', height: '100%'}}>
            <div className="card__header">
              <h3>🟢 Low Priority</h3>
            </div>
            <div className="card__body">
              <p><strong>Sales enablement:</strong></p>
              <ul>
                <li><Link to="/docs/sales/customer-testimonials-library">💼 Sales Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row margin-top--lg">
        <div className="col col--12">
          <div className="card">
            <div className="card__header">
              <h3>📊 Knowledge Base Overview</h3>
            </div>
            <div className="card__body">
              <div className="row">
                <div className="col col--4 text--center">
                  <h4 style={{color: '#1976d2', fontSize: '2rem', margin: '0'}}>17</h4>
                  <p>Total Documents</p>
                </div>
                <div className="col col--4 text--center">
                  <h4 style={{color: '#1976d2', fontSize: '2rem', margin: '0'}}>4</h4>
                  <p>Core Sections</p>
                </div>
                <div className="col col--4 text--center">
                  <h4 style={{color: '#1976d2', fontSize: '2rem', margin: '0'}}>Q1 2025</h4>
                  <p>Current Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Beings Marketing Knowledge Base"
      description="Comprehensive marketing strategy and execution guide for CMO review">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
