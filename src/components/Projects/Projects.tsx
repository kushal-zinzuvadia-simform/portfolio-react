import { projectData } from '../../data/projectData';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 min-h-screen bg-[#11071F] text-white flex flex-col items-center text-center px-4 py-8 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl w-full">
        <div className="mb-16">
          <p className="text-violet-400 tracking-[0.3em] uppercase text-sm font-mono mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl font-black">My Projects</h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A collection of projects focused on frontend engineering, reusable
            abstractions, interactive UI, and TypeScript-driven development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => {
            return <ProjectItem info={project} />;
          })}
        </div>
      </div>
    </section>
  );
};
