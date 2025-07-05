import React, { useState } from 'react';
import { Code, Server, Cloud, Monitor, Wrench, Terminal, Shield, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  technologies: Technology[];
}

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCategories: TechCategory[] = [
    {
      name: 'CI/CD',
      icon: <Wrench className="w-6 h-6" />,
      color: 'text-blue-400',
      bgGradient: 'from-blue-500 to-blue-600',
      technologies: [
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: 'hover:bg-red-500/20' },
        { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', color: 'hover:bg-orange-500/20' },
        { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'hover:bg-gray-500/20' },
        { name: 'Azure DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: 'hover:bg-blue-500/20' },
        { name: 'CircleCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg', color: 'hover:bg-green-500/20' },
        { name: 'Travis CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg', color: 'hover:bg-yellow-500/20' }
      ]
    },
    {
      name: 'Containerización y Orquestación',
      icon: <Server className="w-6 h-6" />,
      color: 'text-green-400',
      bgGradient: 'from-green-500 to-green-600',
      technologies: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'hover:bg-blue-500/20' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: 'hover:bg-blue-600/20' },
        { name: 'OpenShift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openshift/openshift-original.svg', color: 'hover:bg-red-500/20' },
        { name: 'Docker Swarm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'hover:bg-blue-400/20' }
      ]
    },
    {
      name: 'Infraestructura como Código',
      icon: <Code className="w-6 h-6" />,
      color: 'text-orange-400',
      bgGradient: 'from-orange-500 to-orange-600',
      technologies: [
        { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: 'hover:bg-purple-500/20' },
        { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', color: 'hover:bg-red-500/20' },
        { name: 'Pulumi', icon: 'https://www.pulumi.com/logos/brand/avatar-on-white.svg', color: 'hover:bg-purple-600/20' },
        { name: 'CloudFormation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: 'hover:bg-orange-500/20' },
        { name: 'Helm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg', color: 'hover:bg-blue-500/20' }
      ]
    },
    {
      name: 'Monitoreo y Observabilidad',
      icon: <Monitor className="w-6 h-6" />,
      color: 'text-purple-400',
      bgGradient: 'from-purple-500 to-purple-600',
      technologies: [
        { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', color: 'hover:bg-orange-500/20' },
        { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', color: 'hover:bg-orange-600/20' },
        { name: 'ELK Stack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg', color: 'hover:bg-yellow-500/20' },
        { name: 'Datadog', icon: 'https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_purple.png', color: 'hover:bg-purple-500/20' },
        { name: 'New Relic', icon: 'https://newrelic.com/static-assets/images/icons/avatar-newrelic.png', color: 'hover:bg-green-500/20' },
        { name: 'Nagios', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nagios/nagios-original.svg', color: 'hover:bg-red-500/20' }
      ]
    },
    {
      name: 'Cloud Providers',
      icon: <Cloud className="w-6 h-6" />,
      color: 'text-blue-400',
      bgGradient: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: 'hover:bg-orange-500/20' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: 'hover:bg-blue-500/20' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: 'hover:bg-blue-400/20' },
        { name: 'DigitalOcean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg', color: 'hover:bg-blue-600/20' }
      ]
    },
    {
      name: 'Herramientas de Colaboración',
      icon: <Users className="w-6 h-6" />,
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-500 to-amber-500',
      technologies: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'hover:bg-red-500/20' },
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', color: 'hover:bg-blue-500/20' },
        { name: 'Confluence', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg', color: 'hover:bg-blue-600/20' },
        { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', color: 'hover:bg-purple-500/20' }
      ]
    },
    {
      name: 'Seguridad',
      icon: <Shield className="w-6 h-6" />,
      color: 'text-red-400',
      bgGradient: 'from-red-500 to-pink-500',
      technologies: [
        { name: 'Vault', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg', color: 'hover:bg-yellow-500/20' },
        { name: 'SonarQube', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg', color: 'hover:bg-blue-500/20' },
        { name: 'Trivy', icon: 'https://github.com/aquasecurity/trivy/raw/main/docs/imgs/logo.png', color: 'hover:bg-blue-600/20' },
        { name: 'OWASP ZAP', icon: 'https://www.zaproxy.org/img/zap256x256.png', color: 'hover:bg-blue-700/20' }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Stack Tecnológico
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Herramientas y tecnologías que domino para construir soluciones robustas, escalables y seguras en entornos DevOps modernos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.bgGradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-bold ${category.color} group-hover:text-white transition-colors duration-300`}>
                  {category.name}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`relative bg-gray-700/30 rounded-xl p-4 transition-all duration-300 cursor-pointer group/tech ${tech.color} hover:scale-110 hover:shadow-lg border border-gray-600/30 hover:border-gray-500/50`}
                    onMouseEnter={() => setHoveredTech(`${categoryIndex}-${techIndex}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-10 h-10 object-contain transition-transform duration-300 group-hover/tech:scale-110 filter brightness-90 group-hover/tech:brightness-110"
                          onError={(e) => {
                            // Fallback to a generic icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                          <Terminal className="text-gray-300 w-6 h-6" />
                        </div>
                      </div>
                      
                      {/* Technology Name - Always visible on mobile, hover on desktop */}
                      <span className={`text-xs font-medium text-center leading-tight transition-all duration-300 ${
                        hoveredTech === `${categoryIndex}-${techIndex}` || window.innerWidth < 768
                          ? 'text-white opacity-100 transform translate-y-0'
                          : 'text-gray-400 opacity-70 md:opacity-0 md:transform md:translate-y-2'
                      }`}>
                        {tech.name}
                      </span>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover/tech:opacity-20 transition-opacity duration-300 ${tech.color.replace('hover:bg-', 'bg-').replace('/20', '/10')}`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DevOps Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Filosofía DevOps
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wrench className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Automatización
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Eliminar tareas manuales repetitivas para aumentar la eficiencia y reducir errores humanos
                </p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Monitor className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  Observabilidad
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Monitoreo proactivo y análisis de métricas para detectar y resolver problemas rápidamente
                </p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Cloud className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  Escalabilidad
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Infraestructura que crece dinámicamente con las necesidades del negocio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-6">
            ¿Interesado en implementar estas tecnologías en tu proyecto?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Hablemos de tu proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;