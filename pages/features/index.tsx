import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Features.module.css';
import { features } from '../../types/features';

const FeaturesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AMOCA Features</title>
        <meta name="description" content="Explore the core features of AMOCA's healthcare platform" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>AMOCA Core Features</h1>
        
        <p className={styles.description}>
          Discover how AMOCA transforms healthcare through advanced analytics and AI-driven insights
        </p>

        <div className={styles.grid}>
          {features.map((feature) => (
            <Link href={`/features/${feature.id}`} key={feature.id}>
              <a className={styles.card}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage;
