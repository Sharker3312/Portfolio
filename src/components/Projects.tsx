import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useTranslation } from '../hooks/useTranslation';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDiagram, setSelectedDiagram] = useState<string | null>(null);
  const { t } = useTranslation();
  
  const categories = ['all', 'CI/CD', 'IaC', 'Kubernetes', 'Monitoring', 'Pipelines', 'Automation'];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'CI/CD': 'bg-blue-500',
      'IaC': 'bg-orange-500',
      'Kubernetes': 'bg-blue-600',
      'Monitoring': 'bg-green-500',
      'Pipelines': 'bg-purple-500',
      'Automation': 'bg-yellow-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const openDiagram = (diagramUrl: string) => {
    setSelectedDiagram(diagramUrl);
  };

  const closeDiagram = () => {
    setSelectedDiagram(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="text-gray-400 w-5 h-5 mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category === 'all' ? t('projects.all') : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              {/* Project Diagram Preview */}
              {project.diagram && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.diagram} 
                    alt={`${project.name} architecture`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
                  <button
                    onClick={() => openDiagram(project.diagram!)}
                    className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-lg transition-colors duration-200"
                    title={t('projects.viewDiagram')}
                  >
                    <ImageIcon size={16} />
                  </button>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              {t('projects.noProjects')}
            </p>
          </div>
        )}
      </div>

      {/* Diagram Modal */}
      {selectedDiagram && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeDiagram}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedDiagram} 
              alt="Project Architecture Diagram"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeDiagram}
              className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-lg transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;