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
    <section className="container margin-vert--xl">
      {/* Clean intro */}
      <div className="row">
        <div className="col col--8 col--offset-2">
          <div className="text--center margin-bottom--xl">
            <h2 style={{fontSize: '2rem', fontWeight: '600', color: '#1976d2', marginBottom: '1rem'}}>
              Marketing Knowledge Base
            </h2>
            <p style={{fontSize: '1.1rem', color: '#666', lineHeight: '1.6'}}>
              Comprehensive marketing strategy and execution materials organized for systematic CMO review. 
              Start with high-priority sections and work through the complete strategic foundation.
            </p>
          </div>
        </div>
      </div>

      {/* Clean stats */}
      <div className="row margin-bottom--xl">
        <div className="col col--10 col--offset-1">
          <div className="card" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)', border: 'none'}}>
            <div className="card__body">
              <div className="row">
                <div className="col col--4 text--center">
                  <h3 style={{color: '#1976d2', fontSize: '2.5rem', margin: '0', fontWeight: '700'}}>17</h3>
                  <p style={{margin: '0.5rem 0 0 0', color: '#666'}}>Core Documents</p>
                </div>
                <div className="col col--4 text--center">
                  <h3 style={{color: '#1976d2', fontSize: '2.5rem', margin: '0', fontWeight: '700'}}>4</h3>
                  <p style={{margin: '0.5rem 0 0 0', color: '#666'}}>Priority Sections</p>
                </div>
                <div className="col col--4 text--center">
                  <h3 style={{color: '#1976d2', fontSize: '2.5rem', margin: '0', fontWeight: '700'}}>Q1 2025</h3>
                  <p style={{margin: '0.5rem 0 0 0', color: '#666'}}>Strategic Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean navigation cards */}
      <div className="row">
        <div className="col col--10 col--offset-1">
          <div className="row">
            <div className="col col--6 margin-bottom--lg">
              <div className="card" style={{height: '100%', border: '1px solid #1976d2', borderRadius: '12px'}}>
                <div className="card__header" style={{background: 'linear-gradient(135deg, #1976d2 0%, #1e88e5 100%)', color: 'white'}}>
                  <h3 style={{margin: '0', color: 'white'}}>🔴 High Priority</h3>
                </div>
                <div className="card__body">
                  <p style={{marginBottom: '1rem', color: '#666'}}>Start here - Core strategic foundation</p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <Link to="/docs/strategy/marketing-strategy" className="button button--outline button--primary" style={{justifyContent: 'flex-start'}}>
                      🎯 Strategy & Planning
                    </Link>
                    <Link to="/docs/brand/Brand_Voice_Guide" className="button button--outline button--primary" style={{justifyContent: 'flex-start'}}>
                      🎨 Brand & Messaging
                    </Link>
                    <Link to="/docs/strategy/content-planning/lead-nurturing-system" className="button button--outline button--primary" style={{justifyContent: 'flex-start'}}>
                      📝 Content Strategy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col col--6 margin-bottom--lg">
              <div className="card" style={{height: '100%', border: '1px solid #f57c00', borderRadius: '12px'}}>
                <div className="card__header" style={{background: 'linear-gradient(135deg, #f57c00 0%, #ff9800 100%)', color: 'white'}}>
                  <h3 style={{margin: '0', color: 'white'}}>🟡 Medium Priority</h3>
                </div>
                <div className="card__body">
                  <p style={{marginBottom: '1rem', color: '#666'}}>Supporting research and content</p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    <Link to="/docs/research/market-sizing-tam-sam-som" className="button button--outline" style={{justifyContent: 'flex-start', borderColor: '#f57c00', color: '#f57c00'}}>
                      🔍 Market Research
                    </Link>
                    <div className="button button--outline" style={{justifyContent: 'flex-start', borderColor: '#f57c00', color: '#f57c00', cursor: 'default'}}>
                      📚 Content Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col col--6">
              <div className="card" style={{border: '1px solid #2e7d32', borderRadius: '12px'}}>
                <div className="card__header" style={{background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)', color: 'white'}}>
                  <h3 style={{margin: '0', color: 'white'}}>🟢 Low Priority</h3>
                </div>
                <div className="card__body">
                  <p style={{marginBottom: '1rem', color: '#666'}}>Sales enablement materials</p>
                  <Link to="/docs/sales/customer-testimonials-library" className="button button--outline" style={{borderColor: '#2e7d32', color: '#2e7d32'}}>
                    💼 Sales Support
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--6">
              <div style={{padding: '2rem', background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h4 style={{color: '#1976d2', marginBottom: '1rem'}}>💡 Review Guide</h4>
                <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                  <li style={{marginBottom: '0.5rem', color: '#666'}}>✓ Start with high priority sections</li>
                  <li style={{marginBottom: '0.5rem', color: '#666'}}>✓ Use sidebar navigation to browse</li>
                  <li style={{marginBottom: '0.5rem', color: '#666'}}>✓ Search for specific topics</li>
                  <li style={{color: '#666'}}>✓ Focus on strategic alignment</li>
                </ul>
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
