import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Certificaciones Profesionales
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Credenciales validadas por los principales proveedores de tecnología cloud e infraestructura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center`}>
                  <Award className="text-white w-6 h-6" />
                </div>
                <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                {cert.name}
              </h3>
              
              <p className="text-gray-400 mb-2">{cert.provider}</p>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm px-3 py-1 rounded-full bg-gray-800 ${cert.color.replace('bg-', 'text-')}/80`}>
                  {cert.level}
                </span>
                <ExternalLink className="text-gray-500 group-hover:text-green-400 w-4 h-4 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Manteniéndome actualizado con las últimas tecnologías y mejores prácticas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;