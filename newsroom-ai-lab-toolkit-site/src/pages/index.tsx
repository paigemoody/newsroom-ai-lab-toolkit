import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start building →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageIntro() {
  return (
    <section className={styles.intro}>
      <div className={clsx('container', styles.introInner)}>
        <p>
          Exploring how AI could benefit your newsroom, but not sure where to
          start, or why an idea keeps stalling? This guide shares the process
          we use with partner newsrooms through Hacks/Hackers' Newsroom AI Lab.
          It was generated, tested, and iterated through real newsroom
          partnerships, shaped by the challenges, questions, experiments, and
          feedback that came up along the way.
        </p>
        <p>
          Our goal is to help teams of any size get clearer about the specific
          challenge or opportunity they want to tackle, who they are trying to
          help, and what they still need to understand before jumping into tools
          or solutions.
        </p>
        <p>Inside, you'll find practical exercises and frameworks to help you:</p>
        <ul className={styles.featureList}>
          <li>start with newsroom needs, not technology</li>
          <li>turn observations into clear problem statements</li>
          <li>build problem briefs that clarify impact and value</li>
          <li>evaluate if / where AI is actually the right fit</li>
          <li>scope responsible requirements</li>
          <li>prototype, test, learn, and iterate</li>
        </ul>
        <p>
          This process has been designed and refined through our experiences
          helping newsrooms move from "we have an idea" or "we think AI might
          help somehow" toward a clear understanding of what problem is worth
          solving, what success should look like, and what to try next.
        </p>
        <p>Questions, feedback, or ideas for improving this handbook? We'd love to hear from you.</p>
        <p className={styles.authors}>
          Jake Kara &amp; Paige Moody<br />
          <a href="mailto:jakek@hackshackers.com">jakek@hackshackers.com</a>
          {' '}&amp;{' '}
          <a href="mailto:paige@hackshackers.com">paige@hackshackers.com</a>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageIntro />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
