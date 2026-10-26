import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Layers, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';
import { PROJECTS, BEFORE_AFTER_SHOWCASE } from '../data/projectsData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Hardscaping', 'Lawn Care', 'Cleanups', 'Grading'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-20 pb-16">
      
      {/* HEADER */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=2000&q=80" 
            alt="Hardscaping project" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-400/30">
            Real Cary, NC Projects
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Our Work & Transformations
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our handcrafted paver patios, retaining walls, emerald lawns, and drainage solutions across Cary.
          </p>

          {/* Filter Bar */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BEFORE & AFTER SLIDER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider 
          title={BEFORE_AFTER_SHOWCASE.title}
          subtitle={BEFORE_AFTER_SHOWCASE.subtitle}
          location={BEFORE_AFTER_SHOWCASE.location}
          beforeImage={BEFORE_AFTER_SHOWCASE.beforeImage}
          afterImage={BEFORE_AFTER_SHOWCASE.afterImage}
          beforeLabel={BEFORE_AFTER_SHOWCASE.beforeLabel}
          afterLabel={BEFORE_AFTER_SHOWCASE.afterLabel}
        />
      </section>

      {/* PROJECTS GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Project Showcase ({filteredProjects.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Click any project card to inspect specs and materials.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {project.category}
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-brand-700 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Specs footer */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{project.stats.sqft}</span>
                <span className="font-semibold text-brand-700 group-hover:underline">View details &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
              <img 
                src={activeModalProject.image} 
                alt={activeModalProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-brand-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                {activeModalProject.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-700">
                <MapPin className="w-4 h-4" />
                <span>{activeModalProject.location}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {activeModalProject.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="grid grid-cols-3 gap-3 p-3 bg-stoneBg rounded-xl border border-slate-200 text-center text-xs">
                <div>
                  <div className="text-slate-400 uppercase text-[10px] font-bold">Timeline</div>
                  <div className="font-bold text-slate-800 mt-0.5">{activeModalProject.stats.time}</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase text-[10px] font-bold">Scope / Size</div>
                  <div className="font-bold text-slate-800 mt-0.5">{activeModalProject.stats.sqft}</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase text-[10px] font-bold">Primary Material</div>
                  <div className="font-bold text-slate-800 mt-0.5 truncate">{activeModalProject.stats.material}</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  state={{ service: activeModalProject.title }}
                  onClick={() => setActiveModalProject(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-xl shadow transition-colors text-sm"
                >
                  <span>Request Quote Like This</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left max-w-xl">
            <h3 className="text-2xl font-bold text-white">Have a specific idea or Pinterest board?</h3>
            <p className="text-brand-200 text-sm mt-1">
              Share your photos with our landscape design crew and we will tailor a custom quote for your Cary home.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-brand-950 hover:bg-brand-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-transform hover:scale-105"
          >
            <span>Start Your Yard Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
