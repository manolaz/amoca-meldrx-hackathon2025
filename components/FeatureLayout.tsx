import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Features.module.css';

interface FeatureLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const FeatureLayout: React.FC<FeatureLayoutProps> = ({ title, description, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | AMOCA</title>
        <meta name="description" content={description} />
      </Head>

      <main className={styles.main}>
        <Link href="/features">
          <a className={styles.backLink}>← Back to All Features</a>
        </Link>
        
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.featureContent}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default FeatureLayout;
