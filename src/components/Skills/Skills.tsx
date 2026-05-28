import { SkillItem } from '../SkillItem/SkillItem';

export const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 min-h-screen text-white flex flex-col items-center text-center px-4 py-8 sm:px-6 lg:px-0"
    >
      <div className="p-10">
        <h2 className="font-black text-4xl">The Arsenal</h2>
        <p className="font-mono">Weapons of Warfare</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 w-full p-10">
        <SkillItem index={1} />
        <SkillItem index={2} />
        <SkillItem index={3} />
        <SkillItem index={4} />
        <SkillItem index={5} />
        <SkillItem index={6} />
        <SkillItem index={7} />
        <SkillItem index={8} />
      </div>
    </section>
  );
};
