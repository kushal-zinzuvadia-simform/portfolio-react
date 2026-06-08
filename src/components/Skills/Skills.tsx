import { skills } from '../../data/skillData';
import { SkillItem } from './SkillItem';

export const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 min-h-screen text-white flex flex-col items-center text-center px-4 pb-8 sm:px-6 lg:px-0"
    >
      <div className="p-10">
        <h2 className="font-black text-4xl">The Arsenal</h2>
        <p className="font-mono">Weapons of Warfare</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 w-full p-10">
        {skills.map((skill) => (
          <SkillItem key={skill.id} index={skill.id} />
        ))}
      </div>
    </section>
  );
};
