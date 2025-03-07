import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import FeatureLayout from '../../components/FeatureLayout';
import styles from '../../styles/Features.module.css';
import { Feature, features, getFeatureById } from '../../types/features';

interface FeaturePageProps {
  feature: Feature;
}

const FeaturePage: React.FC<FeaturePageProps> = ({ feature }) => {
  const router = useRouter();

  // Handle loading state or fallback
  if (router.isFallback || !feature) {
    return <div>Loading...</div>;
  }

  return (
    <FeatureLayout title={feature.title} description={feature.description}>
      <section className={styles.featureSection}>
        <h2>Key Capabilities</h2>
        <ul>
          {feature.capabilities.map((capability, index) => (
            <li key={index} className={styles.featureItem}>
              {capability}
            </li>
          ))}
        </ul>
      </section>
      
      <section className={`${styles.featureSection} ${styles.howItWorks}`}>
        <h2>How It Works</h2>
        <p>
          {getFeatureDescription(feature.id)}
        </p>
      </section>
      
      <section className={styles.featureSection}>
        <h2>Benefits</h2>
        <ul>
          {feature.benefits.map((benefit, index) => (
            <li key={index} className={styles.featureItem}>
              {benefit}
            </li>
          ))}
        </ul>
      </section>
    </FeatureLayout>
  );
};

// Helper function to get detailed descriptions for each feature
function getFeatureDescription(featureId: string): string {
  const descriptions: {[key: string]: string} = {
    'evidence-based-decision-support': 
      'Our Evidence-Based Decision Support system continuously analyzes patient data against the latest clinical guidelines and research. By integrating with medical knowledge databases and processing real-time patient information, AMOCA provides contextually-relevant recommendations that support better clinical decision making.',
    
    'predictive-analytics': 
      'AMOCA\'s Predictive Analytics Engine uses advanced machine learning algorithms to identify patterns in patient data that may indicate future health events. By analyzing historical data alongside real-time patient information, our system can predict possible complications before they occur, enabling proactive interventions.',
    
    'fhir-integration': 
      'Our FHIR-Compatible Data Integration layer enables seamless connectivity with any healthcare system that supports the FHIR standard. AMOCA acts as a universal translator, ensuring that data flows securely and accurately between different systems, providing a unified view of patient information regardless of its source.',
    
    'patient-data-analysis': 
      'The Comprehensive Patient Data Analysis module consolidates information from multiple sources to create a complete clinical picture. Our system identifies trends, flags potential issues, and provides visualization tools that make it easy to understand complex patient data at a glance.',
    
    'demographic-aware-support': 
      'Our Demographic-Aware Decision Support system considers individual patient factors including age, gender, ethnicity, and social determinants of health when generating recommendations. This ensures that care plans are personalized and relevant to each patient\'s unique circumstances.',
    
    'role-based-configuration': 
      'AMOCA\'s Role-Based Configuration allows each healthcare professional to experience the system in a way that\'s optimized for their specific role. Physicians, nurses, administrators, and other staff each receive customized interfaces, alerts, and workflows designed to maximize their efficiency.',
    
    'validation-fairness': 
      'Our Validation and Fairness Monitoring system continuously evaluates algorithm performance across different demographic groups. This ensures that AMOCA\'s recommendations are equitable and that no patient population receives systematically different quality of care recommendations.',
    
    'ai-transparency': 
      'AMOCA\'s Transparency in AI Decision-Making feature provides clear explanations for all system recommendations. Users can see the data sources, clinical guidelines, and reasoning that led to each suggestion, ensuring that healthcare providers maintain full control and understanding of all clinical decisions.',
    
    'feedback-collection': 
      'The Feedback Collection System allows clinicians to quickly rate and comment on AMOCA\'s recommendations. This feedback loop continuously improves the system\'s accuracy and relevance, while building an institutional knowledge base of clinical decision making.',
    
    'regulatory-compliance': 
      'Our Regulatory Compliance framework ensures that AMOCA meets all relevant healthcare regulations, including HIPAA, GDPR, and FDA requirements for clinical decision support tools. Comprehensive audit trails and documentation make certification and regulatory reviews straightforward.'
  };
  
  return descriptions[featureId] || 'Detailed description coming soon.';
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = features.map((feature) => ({
    params: { featureId: feature.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<FeaturePageProps> = async ({ params }) => {
  const featureId = params?.featureId as string;
  const feature = getFeatureById(featureId);

  if (!feature) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      feature,
    },
  };
};

export default FeaturePage;
