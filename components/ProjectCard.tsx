
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const displayImages = project.images && project.images.length > 0 ? project.images : (project.imageUrl ? [project.imageUrl] : []);

  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-full border border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1">
      {displayImages.length > 0 && (
        <div className="relative group w-full h-56 bg-slate-700">
          <img
            src={displayImages[currentImageIndex]}
            alt={project.title}
            className="w-full h-56 object-cover transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
          {displayImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
              {displayImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-emerald-500 w-4' : 'bg-white/50 hover:bg-white'}`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}
          {displayImages.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10">
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1)); }}
                className="p-1 rounded-full bg-black/50 text-white hover:bg-emerald-500 transition-colors"
              >
                ←
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1)); }}
                className="p-1 rounded-full bg-black/50 text-white hover:bg-emerald-500 transition-colors"
              >
                →
              </button>
            </div>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {project.logo && <div className="mb-3">{project.logo}</div>}
        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500" style={{fontFamily: "'Orbitron', sans-serif"}}>{project.title}</h3>
        {project.beneficiary && (
          <p className="text-sm text-cyan-400 mb-2">Beneficiary: {project.beneficiary}</p>
        )}
        <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
        
        <div className="space-y-2 mb-4">
          {project.details.map((detail, index) => (
            <p key={index} className="text-xs text-gray-500">- {detail}</p>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-700">
          {project.investment && (
            <p className="text-sm text-gray-300"><strong className="text-emerald-400">Investment:</strong> {project.investment}</p>
          )}
          {project.expectedReturn && (
            <p className="text-sm text-gray-300"><strong className="text-blue-400">Expected Return:</strong> {project.expectedReturn}</p>
          )}
          {project.duration && (
            <p className="text-sm text-gray-300"><strong className="text-cyan-400">Duration:</strong> {project.duration}</p>
          )}
          {project.grantAmount && (
            <p className="text-sm text-gray-300"><strong className="text-yellow-400">Grant Amount:</strong> {project.grantAmount}</p>
          )}
          {project.status && (
            <p className="text-xs mt-2 px-2 py-1 inline-block bg-slate-700 text-yellow-300 rounded-full">{project.status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
    