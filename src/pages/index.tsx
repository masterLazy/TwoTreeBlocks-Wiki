import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
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
                        了解详情
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <center>
                    <div style={{
                        height: '20rem',
                        width: auto,
                        overflow: hidden,
                        position: relative
                    }}>
                        <img src="https://i.ibb.co/s3n4x7n/ttb.jpg" style={{
                            position: absolute,
                            top: 0,
                            left: 0,
                            width: 100\\%,
                            height: 100\\%,
                            object-fit: cover
                        }}>
                    </div>
                </center>
            </main>
        </Layout>
    );
}
