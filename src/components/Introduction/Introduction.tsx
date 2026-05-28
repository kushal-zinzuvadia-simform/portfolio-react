export const Introduction = () => {
  return (
    <section className="min-h-screen text-white flex flex-col justify-center px-4 py-8 sm:px-6 lg:px-0">
      <div className="w-full max-w-7xl mx-auto mb-18 flex justify-center">
        <p className="text-xl sm:text-2xl">
          Hello! I Am{' '}
          <span className="text-purple-500 font-medium tracking-wide">
            Kushal Zinzuvadia
          </span>
          ,
        </p>
      </div>

      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          {/* Purple Glow */}
          <div className="absolute w-70 h-72 bg-purple-700/40 blur-3xl rounded-full sm:w-85 sm:h-80" />

          <img
            src="/engineer.png"
            alt="Engineer"
            className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-105"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xl sm:text-2xl mb-4 underline underline-offset-6">
            A Developer who
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            Loves solving
            <br />
            problems with{' '}
            <span className="text-purple-500 relative inline-block">
              code
              <span className="absolute p-4 left-0 top-0.5 w-full h-full border border-purple-400 rounded-full scale-110" />
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Building clean, scalable, and interactive web experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
