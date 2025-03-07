export interface Feature {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  benefits: string[];
}

export const features: Feature[] = [
  {
    id: 'evidence-based-decision-support',
    title: 'Evidence-Based Decision Support',
    description: 'Make informed clinical decisions with our evidence-based tools',
    capabilities: [
      'Integration with clinical guidelines and research',
      'Real-time alerts based on patient data',
      'Medication interaction checks and allergy warnings',
      'Treatment pathway recommendations based on current medical evidence'
    ],
    benefits: [
      'Reduced medical errors',
      'Improved patient outcomes',
      'Standardized care protocols based on best practices',
      'Time savings for clinical staff'
    ]
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics Engine',
    description: 'Forecast health outcomes and optimize resource allocation',
    capabilities: [
      'Early detection of patient deterioration',
      'Readmission risk prediction',
      'Treatment outcome forecasting',
      'Resource utilization optimization'
    ],
    benefits: [
      'Prevent adverse events through early intervention',
      'Optimize hospital resource allocation',
      'Reduce unplanned readmissions',
      'Improve clinical workflow efficiency'
    ]
  },
  {
    id: 'fhir-integration',
    title: 'FHIR-Compatible Data Integration',
    description: 'Connect seamlessly with existing healthcare systems',
    capabilities: [
      'Seamless connection with existing EHR systems',
      'Standardized data exchange using FHIR protocols',
      'Secure API connectivity for interoperability',
      'Real-time data synchronization'
    ],
    benefits: [
      'Eliminate data silos between systems',
      'Reduce implementation time and costs',
      'Ensure data consistency across platforms',
      'Enable rapid healthcare innovation'
    ]
  },
  {
    id: 'patient-data-analysis',
    title: 'Comprehensive Patient Data Analysis',
    description: 'Gain holistic insights from patient health information',
    capabilities: [
      'Problem list integration and analysis',
      'Medication management and reconciliation',
      'Allergy and intolerance tracking',
      'Lab results trend analysis',
      'Vital signs monitoring and alerting'
    ],
    benefits: [
      'Comprehensive patient overview at a glance',
      'Early identification of concerning trends',
      'Simplified medication reconciliation',
      'Enhanced clinical decision making'
    ]
  },
  {
    id: 'demographic-aware-support',
    title: 'Demographic-Aware Decision Support',
    description: 'Personalize care recommendations based on individual factors',
    capabilities: [
      'Personalized recommendations based on age, gender, ethnicity',
      'Social determinants of health integration',
      'Language preference accommodation',
      'Cultural sensitivity in care recommendations'
    ],
    benefits: [
      'More accurate and relevant care plans',
      'Improved patient engagement and trust',
      'Reduced healthcare disparities',
      'Better health outcomes for diverse populations'
    ]
  },
  {
    id: 'role-based-configuration',
    title: 'Role-Based Configuration',
    description: 'Tailor the experience for different clinical roles',
    capabilities: [
      'Customizable alert settings for different clinical roles',
      'Provider-specific dashboards and interfaces',
      'Administrative controls for system-wide settings',
      'Specialty-specific decision support modules'
    ],
    benefits: [
      'Optimized workflows for each role',
      'Reduced alert fatigue',
      'Improved user adoption and satisfaction',
      'Enhanced team collaboration'
    ]
  },
  {
    id: 'validation-fairness',
    title: 'Validation and Fairness Monitoring',
    description: 'Ensure equitable and reliable AI-driven recommendations',
    capabilities: [
      'Regular performance metric tracking',
      'Demographic fairness evaluation',
      'External validation process documentation',
      'Continuous improvement mechanisms'
    ],
    benefits: [
      'Trustworthy AI-driven insights',
      'Transparent system performance',
      'Equitable healthcare delivery',
      'Continuous quality improvement'
    ]
  },
  {
    id: 'ai-transparency',
    title: 'Transparency in AI Decision-Making',
    description: 'Understand the reasoning behind system recommendations',
    capabilities: [
      'Clear explanation of recommendation sources',
      'Documentation of intervention development',
      'Funding and development disclosure',
      'Known limitations and cautionary use cases'
    ],
    benefits: [
      'Increased trust in system recommendations',
      'Better informed clinical decisions',
      'Improved regulatory compliance',
      'Enhanced educational opportunities'
    ]
  },
  {
    id: 'feedback-collection',
    title: 'Feedback Collection System',
    description: 'Continuously improve based on real-world usage',
    capabilities: [
      'User feedback on specific interventions',
      'Exportable feedback data for quality improvement',
      'Intervention effectiveness tracking',
      'User satisfaction metrics'
    ],
    benefits: [
      'Data-driven system improvements',
      'Enhanced user engagement',
      'Identification of high-impact features',
      'Rapid issue resolution'
    ]
  },
  {
    id: 'regulatory-compliance',
    title: 'Regulatory Compliance',
    description: 'Meet healthcare regulatory requirements with confidence',
    capabilities: [
      'Alignment with EHR certification requirements',
      'HIPAA-compliant data handling',
      'Documentation for clinical decision support interventions',
      'Audit trails for regulatory reporting'
    ],
    benefits: [
      'Reduced compliance risk',
      'Streamlined audit processes',
      'Protected patient information',
      'Easier regulatory certification'
    ]
  }
];

export function getFeatureById(id: string): Feature | undefined {
  return features.find(feature => feature.id === id);
}
