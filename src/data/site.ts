export const company = {
  name: 'IT Band',
  descriptor: 'Cloud Architecture, Networking & DevOps',
  location: 'Stockholm, Sweden',
  email: 'info@it-band.net',
};

export const proofPoints = [
  '20+ years in IT',
  '10+ years DevOps, cloud and automation',
  'Azure, AWS and Oracle Cloud',
  'Kubernetes, Terraform and CI/CD',
  'Banking, public sector and enterprise delivery',
];

export const overviewCards = [
  {
    href: '/services/',
    label: 'Design & build',
    title: 'Cloud, Networking & DevOps',
    description: 'Architecture and hands-on delivery across Azure, AWS, OCI and on-prem. Explore the cloud, network and platform expertise.',
    action: 'Explore services',
  },
  {
    href: '/advisory/',
    label: 'Assess, optimize & implement',
    title: 'Technical Advisory & Optimization',
    description: 'Find bottlenecks, resolve difficult issues and improve how systems are built and operated. From independent assessment to hands-on implementation.',
    action: 'Explore tailored engagements',
  },
  {
    href: '/work/',
    label: 'Experience & capabilities',
    title: 'Work & Technical Range',
    description: 'Enterprise cloud, regulated environments, networks and application delivery. See the experience map and technologies behind the work.',
    action: 'View experience',
  },
  {
    href: '/approach/',
    label: 'Flexible engagements',
    title: 'Ways to Work Together',
    description: 'Focused discovery, implementation, fractional architecture or hourly and part-time DevOps. Find the level of support that fits your team.',
    action: 'Choose an approach',
  },
];

export const cloudPlatforms = [
  {
    name: 'Microsoft Azure',
    abbreviation: 'Azure',
    summary:
      'Cloud foundations and enterprise integration for workloads that need to connect with existing Microsoft and on-prem environments.',
    focus: ['Landing zones and governance', 'Networking, identity and private access', 'AKS, Azure PaaS and infrastructure automation'],
  },
  {
    name: 'Amazon Web Services',
    abbreviation: 'AWS',
    summary:
      'Architecture and delivery for AWS environments, from secure foundations and network design to automated infrastructure and Kubernetes platforms.',
    focus: ['Account structure and IAM', 'VPC design and hybrid connectivity', 'EKS, Terraform and delivery pipelines'],
  },
  {
    name: 'Oracle Cloud Infrastructure',
    abbreviation: 'OCI',
    summary:
      'Cloud architecture for enterprise and regulated workloads, with clear governance, network boundaries and integration with existing systems.',
    focus: ['Compartments, IAM and landing zones', 'VCN design and on-prem connectivity', 'OKE, Terraform and OCI DevOps'],
  },
];

export const services = [
  {
    eyebrow: 'Architecture first',
    title: 'Cloud & Solution Architecture',
    summary:
      'Turn business requirements and technical constraints into a practical target architecture across Azure, AWS, OCI and on-prem. Make security, resilience, cost and operational trade-offs explicit before implementation.',
    deliverables: ['Current-state assessment and architecture review', 'Target architecture and decision records', 'Landing-zone and governance design', 'Migration roadmap and operating model'],
  },
  {
    eyebrow: 'Hybrid reality',
    title: 'Hybrid Cloud & Network Architecture',
    summary:
      'Design how cloud and data-center environments communicate: address space, routing, private connectivity, VPNs, DNS, segmentation, firewalls and identity. Integrate the infrastructure you already have instead of treating it as an afterthought.',
    deliverables: ['Network topology and connectivity design', 'Routing, VPN and segmentation plan', 'DNS, firewall and identity integration', 'Resilient on-prem to cloud transition'],
  },
  {
    eyebrow: 'Delivery systems',
    title: 'DevOps, CI/CD & GitOps',
    summary:
      'Repeatable delivery pipelines for infrastructure and applications using GitHub Actions, GitLab CI, Azure DevOps, Jenkins and OCI DevOps.',
    deliverables: ['Pipeline architecture', 'Promotion and rollback flows', 'Policy gates', 'Release automation'],
  },
  {
    eyebrow: 'Platform layer',
    title: 'Kubernetes & Platform Engineering',
    summary:
      'Production-ready AKS, OKE, EKS and self-managed Kubernetes platforms with Helm, ingress, secrets, multi-tenancy and team enablement.',
    deliverables: ['Cluster architecture', 'Helm delivery model', 'Ingress and secrets setup', 'Golden paths for teams'],
  },
  {
    eyebrow: 'Automation',
    title: 'Infrastructure as Code',
    summary:
      'Terraform, Terragrunt, Terramate, Bicep and Ansible practices that make infrastructure auditable, reusable and safer to change.',
    deliverables: ['Terraform modules', 'State strategy', 'Import and drift controls', 'IaC review workflows'],
  },
  {
    eyebrow: 'Operations',
    title: 'Observability, Reliability & Security',
    summary:
      'Monitoring, logging, alerting, secrets, certificates and SLO practices for systems that must be operated under real production pressure.',
    deliverables: ['Dashboards and alerts', 'Runbooks', 'Vault and Key Vault patterns', 'Audit-ready logging'],
  },
];

export const projectCategories = [
  {
    title: 'Enterprise Cloud & Migration',
    items: [
      'Cloud foundations and migration work for retail, logistics, manufacturing and financial environments',
      'Landing zones, reusable infrastructure modules and integration with existing data centers',
      'Architecture reviews, network dependencies and staged migration planning',
    ],
    technologies: ['Azure', 'OCI', 'Terraform', 'Bicep', 'Hybrid networking'],
  },
  {
    title: 'Public Sector & Regulated Platforms',
    items: [
      'Engineering experience in taxation, government administration and public-safety environments',
      'Cloud infrastructure, Kubernetes application platforms and repeatable VM provisioning',
      'Identity boundaries, secrets management and controlled deployment workflows',
    ],
    technologies: ['OCI', 'OKE', 'Terraform', 'Argo CD', 'WebLogic', 'OCI Vault'],
  },
  {
    title: 'Business Applications & Release Automation',
    items: [
      'Architecture and delivery workflows for business applications and enterprise integrations',
      'CI/CD pipelines, release orchestration, environment promotion and customization workflows',
      'Self-hosted build agents and infrastructure execution patterns for repeatable delivery',
    ],
    technologies: ['Azure DevOps', 'Power Platform', '.NET', 'Terraform', 'VM Scale Sets'],
  },
  {
    title: 'Cloud-Native Products & Platforms',
    items: [
      'Infrastructure and deployment work for SaaS, gaming and data-driven application platforms',
      'Kubernetes foundations, application delivery pipelines and environment configuration',
      'Secrets, monitoring and operational practices for teams running containerized workloads',
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Helm', 'HashiCorp Vault'],
  },
  {
    title: 'Network & Security Infrastructure',
    items: [
      'Cloud networking and platform integration for network-access and security applications',
      'Private connectivity, VPNs, DNS, routing, firewalls and application load balancing',
      'Infrastructure automation across cloud resources and existing network components',
    ],
    technologies: ['F5 BIG-IP', 'Azure', 'AKS', 'Terraform', 'Ansible', 'VPN'],
  },
  {
    title: 'IoT & Connected Systems',
    items: [
      'Device simulation, telemetry flows and supporting application infrastructure',
      'Cloud-backed data ingestion, APIs and visualization components',
      'Development and test environments for validating connected-system behavior',
    ],
    technologies: ['Python', 'Docker', 'Telemetry', 'REST APIs', 'Azure Storage'],
  },
  {
    title: 'Cloud Assessment & Cost Visibility',
    items: [
      'Structured reviews of infrastructure, delivery workflows, reliability and security posture',
      'Automated cloud-cost analysis, reporting and distribution across subscriptions',
      'Prioritized improvement roadmaps and infrastructure-as-code monitoring configuration',
    ],
    technologies: ['Azure Cost Management', 'Azure Functions', 'Power Automate', 'Pulumi', 'Python'],
  },
  {
    title: 'Systems & On-Prem Foundations',
    items: [
      'Mixed Linux and Windows environments, virtualization and infrastructure operations',
      'Identity integration, backups, patching and operational monitoring',
      'Connecting legacy services to cloud-native delivery and platform practices',
    ],
    technologies: ['VMware ESXi', 'vCenter', 'Linux', 'Windows Server', 'DNS', 'Monitoring'],
  },
];

export const advisoryFocus = [
  { title: 'Delivery & automation', description: 'Streamline CI/CD, remove manual release steps and introduce repeatable infrastructure and application workflows.' },
  { title: 'Performance & runtime', description: 'Investigate application, database and runtime bottlenecks. Agree measurable baselines before tuning or code changes.' },
  { title: 'Reliability & troubleshooting', description: 'Trace recurring bugs, failing integrations and operational risks across application and infrastructure boundaries.' },
  { title: 'Architecture & engineering practices', description: 'Review technical decisions, improve maintainability and implement practices that fit your systems and team.' },
];

export const recoveryLevels = [
  {
    number: '01',
    title: 'Diagnose',
    scope: 'Independent assessment',
    outcome: 'Understand the current state, bottlenecks and highest-value improvements.',
    deliverables: ['Evidence-backed findings and known limitations', 'Risk and business-impact priorities', 'Practical recommendations and a decision briefing'],
    engagement: 'Initial assessment target: 1-2 weeks',
  },
  {
    number: '02',
    title: 'Shape the solution',
    scope: 'Diagnosis + implementation options',
    outcome: 'Choose a realistic route forward before committing to changes.',
    deliverables: ['Everything in Diagnose', 'Solution options with trade-offs and effort estimates', 'Sequenced roadmap, owners, validation and rollback approach'],
    engagement: 'Assessment + an agreed planning phase',
  },
  {
    number: '03',
    title: 'Implement together',
    scope: 'Diagnosis + plan + hands-on support',
    outcome: 'Give your team the expertise to execute the agreed plan.',
    deliverables: ['Everything in Shape the solution', 'Pairing, implementation help and technical reviews', 'Validation, knowledge transfer and operational guidance'],
    engagement: 'Agreed hours or delivery milestones',
  },
  {
    number: '04',
    title: 'Lead the delivery',
    scope: 'End-to-end delivery within an agreed scope',
    outcome: 'One technical lead from discovery through implementation and handover.',
    deliverables: ['Everything in Implement together', 'Coordination of the agreed specialist team and delivery', 'Approved changes, acceptance checks, runbooks and handover'],
    engagement: 'Scoped milestones with acceptance criteria',
  },
];

export const recoverySteps = [
  { title: 'Scope & access', description: 'Agree the goal, business impact, specialist roles, access boundaries, baseline and expected outputs.' },
  { title: 'Investigate', description: 'Review the relevant code, release history, data flows, platform, network and security controls.' },
  { title: 'Decide', description: 'Walk through the evidence, uncertainties and improvement options. Agree what happens next.' },
  { title: 'Implement & verify', description: 'If commissioned, deliver approved changes, compare results against the agreed baseline and hand over what your team needs.' },
];

export const engagementModels = [
  {
    title: 'Architecture & Network Discovery',
    duration: '1-2 weeks',
    description:
      'Review current systems, network dependencies and business requirements. Leave with architecture options, identified risks and a prioritized implementation roadmap.',
  },
  {
    title: 'Build / Modernization Engagement',
    duration: '4-12 weeks',
    description:
      'Hands-on implementation of landing zones, CI/CD, Kubernetes, IaC, observability, security controls or hybrid connectivity.',
  },
  {
    title: 'Fractional Cloud & Platform Architect',
    duration: 'Ongoing',
    description:
      'Senior architecture guidance, reviews, delivery acceleration, team mentoring and production-readiness support.',
  },
  {
    title: 'Hourly & Part-Time DevOps',
    duration: 'Hourly / reserved capacity',
    description:
      'Senior hands-on help with cloud, pipelines, Terraform, Kubernetes and day-to-day delivery. Agree an hourly budget or recurring part-time capacity, priorities and reporting before work starts.',
  },
];

export const technologies = [
  'Azure',
  'OCI',
  'AWS',
  'Kubernetes',
  'AKS',
  'OKE',
  'EKS',
  'Terraform',
  'Terragrunt',
  'Terramate',
  'Bicep',
  'Ansible',
  'GitHub Actions',
  'GitLab CI',
  'Azure DevOps',
  'Jenkins',
  'OCI DevOps',
  'Docker',
  'Helm',
  'VMware ESXi',
  'vCenter',
  'Linux',
  'Windows Server',
  'VPN',
  'DNS',
  'Prometheus',
  'Grafana',
  'ELK',
  'Dynatrace',
  'Datadog',
  'Key Vault',
  'OCI Vault',
];
