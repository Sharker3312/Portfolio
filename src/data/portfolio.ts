import { Certification, Project, Experience, TechCategory } from '../types';

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    provider: 'Amazon Web Services',
    level: 'Associate',
    year: '2023',
    color: 'bg-orange-500',
    icon: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png'
  },
  {
    id: '2',
    name: 'Google Cloud Associate Engineer',
    provider: 'Google Cloud Platform',
    level: 'Associate',
    year: '2023',
    color: 'bg-blue-500',
    icon: 'https://images.credly.com/size/340x340/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png'
  },
  {
    id: '3',
    name: 'Docker Certified Associate',
    provider: 'Docker Inc.',
    level: 'Associate',
    year: '2022',
    color: 'bg-blue-600',
    icon: 'https://images.credly.com/size/340x340/images/b2cc1327-5624-4b9a-ac10-6c7d9db923fb/image.png'
  },
  {
    id: '4',
    name: 'Terraform Associate',
    provider: 'HashiCorp',
    level: 'Associate',
    year: '2022',
    color: 'bg-purple-500',
    icon: 'https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png'
  },
  {
    id: '5',
    name: 'Kubernetes Administrator',
    provider: 'Cloud Native Computing Foundation',
    level: 'CKA',
    year: '2023',
    color: 'bg-blue-700',
    icon: 'https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png'
  },
  {
    id: '6',
    name: 'Jenkins Engineer',
    provider: 'CloudBees',
    level: 'Certified',
    year: '2022',
    color: 'bg-red-500',
    icon: 'https://images.credly.com/size/340x340/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Multi-Cloud Infrastructure Platform',
    description: 'Automated infrastructure provisioning across AWS, GCP, and Azure using Terraform modules and GitOps workflows.',
    technologies: ['Terraform', 'AWS', 'GCP', 'Azure', 'GitLab CI/CD', 'Kubernetes'],
    githubUrl: 'https://github.com/devops-engineer/multi-cloud-iac',
    category: 'IaC',
    diagram: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    name: 'Kubernetes Monitoring Stack',
    description: 'Complete observability solution with Prometheus, Grafana, and AlertManager for production Kubernetes clusters.',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm', 'AlertManager'],
    githubUrl: 'https://github.com/devops-engineer/k8s-monitoring',
    demoUrl: 'https://monitoring-demo.example.com',
    category: 'Monitoring',
    diagram: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    name: 'CI/CD Pipeline Automation',
    description: 'Zero-downtime deployment pipeline with automated testing, security scanning, and rollback capabilities.',
    technologies: ['Jenkins', 'Docker', 'SonarQube', 'Trivy', 'ArgoCD'],
    githubUrl: 'https://github.com/devops-engineer/cicd-automation',
    category: 'CI/CD',
    diagram: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    name: 'Container Orchestration Platform',
    description: 'Production-ready Kubernetes platform with service mesh, ingress controllers, and automated scaling.',
    technologies: ['Kubernetes', 'Istio', 'NGINX', 'HPA', 'Cluster Autoscaler'],
    githubUrl: 'https://github.com/devops-engineer/k8s-platform',
    category: 'Kubernetes',
    diagram: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    name: 'Infrastructure as Code Templates',
    description: 'Reusable Terraform modules and Ansible playbooks for rapid infrastructure deployment.',
    technologies: ['Terraform', 'Ansible', 'Packer', 'Vault', 'Consul'],
    githubUrl: 'https://github.com/devops-engineer/iac-templates',
    category: 'IaC',
    diagram: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    name: 'Log Aggregation Pipeline',
    description: 'Centralized logging solution with real-time processing and intelligent alerting.',
    technologies: ['ELK Stack', 'Fluentd', 'Kafka', 'Redis', 'Logstash'],
    githubUrl: 'https://github.com/devops-engineer/log-pipeline',
    category: 'Monitoring',
    diagram: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior DevOps Engineer',
    company: 'TechCorp Solutions',
    startDate: '2022-03',
    endDate: 'Present',
    description: [
      'Led infrastructure modernization initiative, migrating legacy applications to cloud-native architecture',
      'Implemented GitOps workflows with ArgoCD, reducing deployment time by 75%',
      'Designed and maintained CI/CD pipelines serving 50+ microservices',
      'Established monitoring and alerting systems achieving 99.9% uptime SLA'
    ],
    technologies: ['Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Prometheus', 'ArgoCD']
  },
  {
    id: '2',
    title: 'DevOps Engineer',
    company: 'CloudFirst Technologies',
    startDate: '2020-06',
    endDate: '2022-02',
    description: [
      'Automated infrastructure provisioning using Terraform and Ansible',
      'Built and maintained Docker containerization strategy for development teams',
      'Implemented security scanning and compliance automation in CI/CD pipelines',
      'Optimized cloud costs by 40% through resource right-sizing and automation'
    ],
    technologies: ['Docker', 'Terraform', 'Ansible', 'GitLab CI/CD', 'AWS', 'Monitoring']
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Engineer',
    company: 'StartupVenture Inc.',
    startDate: '2019-01',
    endDate: '2020-05',
    description: [
      'Designed and implemented multi-environment cloud infrastructure on AWS',
      'Set up monitoring and logging solutions for application performance tracking',
      'Collaborated with development teams to establish CI/CD best practices',
      'Managed production deployments and incident response procedures'
    ],
    technologies: ['AWS', 'Jenkins', 'ELK Stack', 'Python', 'Bash', 'CloudFormation']
  }
];

export const techCategories: TechCategory[] = [
  {
    name: 'Cloud Platforms',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean'],
    color: 'text-blue-400'
  },
  {
    name: 'Container & Orchestration',
    technologies: ['Docker', 'Kubernetes', 'Helm', 'Istio'],
    color: 'text-green-400'
  },
  {
    name: 'Infrastructure as Code',
    technologies: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'],
    color: 'text-orange-400'
  },
  {
    name: 'CI/CD Tools',
    technologies: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'ArgoCD'],
    color: 'text-purple-400'
  },
  {
    name: 'Monitoring & Observability',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
    color: 'text-yellow-400'
  },
  {
    name: 'Programming & Scripting',
    technologies: ['Python', 'Bash', 'Go', 'YAML', 'JSON'],
    color: 'text-red-400'
  }
];