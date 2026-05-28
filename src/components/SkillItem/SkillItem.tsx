export const SkillItem = ({ index }: { index: number }) => {
  return (
    <div className="group perspective-[1000px] flex items-center justify-center">
      <div
        className="
          relative w-40 h-40
          transition-transform duration-700
          transform-3d
          group-hover:transform-[rotateY(180deg)]
        "
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0
            rounded-full bg-purple-200
            flex items-center justify-center
            backface-hidden
          "
        >
          <img
            src={`/weapons/${index}.svg`}
            alt="Weapon"
            className="w-30 h-30 object-contain"
          />
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            rounded-full bg-white
            flex items-center justify-center
            transform-[rotateY(180deg)]
            backface-hidden
          "
        >
          <img
            src={`/skill/${index}.svg`}
            alt="Skill"
            className="w-25 h-25 object-contain"
          />
        </div>
      </div>
    </div>
  );
};
