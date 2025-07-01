import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t('contact.messageSent'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.info')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('contact.email')}</p>
                    <a 
                      href="mailto:contact@devopsengineer.com" 
                      className="text-white hover:text-green-400 transition-colors duration-300"
                    >
                      contact@devopsengineer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('contact.phone')}</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('contact.location')}</p>
                    <p className="text-white">{t('contact.remote')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('contact.followMe')}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/devops-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 group"
                >
                  <Github className="text-gray-400 group-hover:text-white w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/devops-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                >
                  <Linkedin className="text-gray-400 group-hover:text-white w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/devops_engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300 group"
                >
                  <MessageSquare className="text-gray-400 group-hover:text-white w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">{t('contact.availability')}</h4>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-400 font-medium">{t('contact.available')}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('contact.availableDesc')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-300"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-300"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-2">
                    {t('contact.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-300"
                  >
                    <option value="">{t('contact.selectSubject')}</option>
                    <option value="consulting">{t('contact.consulting')}</option>
                    <option value="project">{t('contact.project')}</option>
                    <option value="job">{t('contact.job')}</option>
                    <option value="collaboration">{t('contact.collaboration')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-300 resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                >
                  <Send className="mr-2 w-5 h-5" />
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;