import { useState } from 'react';

export const SkillItem = ({ index }: { index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches;

  return (
    <button
      type="button"
      onClick={() => {
        if (isTouchDevice) {
          setIsFlipped((prev) => !prev);
        }
      }}
      className="group perspective-[1000px] flex items-center justify-center"
    >
      <div
        className={`
          relative h-40 w-40
          transform-3d transition-transform duration-700
          group-hover:transform-[rotateY(180deg)]
          ${isFlipped ? 'transform-[rotateY(180deg)]' : ''}
        `}
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
            className="h-25 w-25 object-contain p-1"
          />
        </div>
      </div>
    </button>
  );
};
