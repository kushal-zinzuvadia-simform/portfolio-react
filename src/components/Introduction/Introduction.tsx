export const Introduction = () => {
  return (
    <section className="min-h-screen text-white flex flex-col justify-center px-6">
      <div className="w-full max-w-7xl mx-auto mb-16">
        <p className="text-2xl">
          Hello! I Am{' '}
          <span className="text-purple-500 font-medium tracking-wide">
            Kushal Zinzuvadia
          </span>
          ,
        </p>
      </div>

      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* Purple Glow */}
          <div className="absolute w-[320px] h-80 bg-purple-700/40 blur-3xl rounded-full" />

          <img
            src="/engineer.png"
            alt="Engineer"
            className="relative z-10 w-70"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-2xl mb-4 underline underline-offset-6">
            A Developer who
          </p>

          <h1 className="text-5xl font-light leading-tight">
            Loves solving
            <br />
            problems with{' '}
            <span className="text-purple-500 relative inline-block">
              code
              <span className="absolute p-4 left-0 top-0.5 w-full h-full border border-purple-400 rounded-full scale-115" />
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Building clean, scalable and interactive web experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
