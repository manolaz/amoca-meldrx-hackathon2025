# AMOCA: Adaptive Medical Operations and Care Analytics (NextJs)

AMOCA is a comprehensive healthcare platform that leverages advanced analytics, AI-driven insights, and FHIR-compatible data integration to optimize medical operations and improve patient care outcomes.

## Core Features

1. **Evidence-Based Decision Support**
   - Integration with clinical guidelines and research
   - Real-time alerts based on patient data
   - Medication interaction checks and allergy warnings
   - Treatment pathway recommendations based on current medical evidence

2. **Predictive Analytics Engine**
   - Early detection of patient deterioration 
   - Readmission risk prediction
   - Treatment outcome forecasting
   - Resource utilization optimization

3. **FHIR-Compatible Data Integration**
   - Seamless connection with existing EHR systems
   - Standardized data exchange using FHIR protocols
   - Secure API connectivity for interoperability
   - Real-time data synchronization

4. **Comprehensive Patient Data Analysis**
   - Problem list integration and analysis
   - Medication management and reconciliation
   - Allergy and intolerance tracking
   - Lab results trend analysis
   - Vital signs monitoring and alerting

5. **Demographic-Aware Decision Support**
   - Personalized recommendations based on age, gender, ethnicity
   - Social determinants of health integration
   - Language preference accommodation
   - Cultural sensitivity in care recommendations

6. **Role-Based Configuration**
   - Customizable alert settings for different clinical roles
   - Provider-specific dashboards and interfaces
   - Administrative controls for system-wide settings
   - Specialty-specific decision support modules

7. **Validation and Fairness Monitoring**
   - Regular performance metric tracking
   - Demographic fairness evaluation
   - External validation process documentation
   - Continuous improvement mechanisms

8. **Transparency in AI Decision-Making**
   - Clear explanation of recommendation sources
   - Documentation of intervention development
   - Funding and development disclosure
   - Known limitations and cautionary use cases

9. **Feedback Collection System**
   - User feedback on specific interventions
   - Exportable feedback data for quality improvement
   - Intervention effectiveness tracking
   - User satisfaction metrics

10. **Regulatory Compliance**
    - Alignment with EHR certification requirements
    - HIPAA-compliant data handling
    - Documentation for clinical decision support interventions
    - Audit trails for regulatory reporting

## Getting Started
Before launching the app ensure the following configuration steps have been followed:
- app redirect url
    - on https://app.meldrx.com
    - go to `Apps` -> your application
    - in the `Redirect URLs` section
    - add the redirect url `http://localhost:{port}/login-callback` with the same port as this application, by default it's `3000`
- workspace configuration
    - if the workspace is `standalone`
        - you will want to seed it with a patient that you can select to view in this app.
        - go to https://app.meldrx.com/ccda?sample=sample1
        - copy paste the ccda xml in to a new file such as `ccda.xml`
        - go to `Workspaces` -> your workspace -> `Patients` -> click on `Import Data`
        - select the `ccda.xml` file
    - if the workspace is `linked` (to Epic or Cerner etc...)
        - you will want to ignore MeldRx storage, and only use external.
        - go to `Workspaces` -> your workspace -> `Settings` -> `Data Rules`
        - in the `Bulk Updates` section, fill out the form to:
            - `Trigger Action`: `Read`
            - `Resource Type`: `Select All`
            - `Target`: `External`
            - press `Update Rules`


### Preqrequisites
- NodeJs

### App Setup/Installation
- Run `npm install`

### App Configuration
- Open `.env`
- Replace the `NEXT_PUBLIC_MELDRX_CLIENT_ID` with the Client Id (aka "MeldRx App Id") of your **MeldRx App** (Get this from the "My Apps" page)
- Replace the `NEXT_PUBLIC_MELDRX_WORKSPACE_URL` with the Workspace URL

### Run the App
- `npm run dev`
