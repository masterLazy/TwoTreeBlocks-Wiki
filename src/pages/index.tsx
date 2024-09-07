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
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            了解我们的服务器
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageDetails() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <body>
      <div width=800px>
        <center>
          <img src="img/TTB.png" />
        </center>
        <p>Two Three Blocks (TTB) 服务器首次于 2024.7.27 运行，现在变得越来越成熟啦</p>
        <p>阅读文档以了解更多。</p>
      </div>
    </body>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageDetails />
      </main>
    </Layout>
  );
}
