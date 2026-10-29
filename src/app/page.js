export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <section className="relative z-10 w-full max-w-xl text-center">
        {/* Status badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          Under Construction
        </span>

        {/* Name */}
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl">
          Rafiul Islam{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Sagor
          </span>
        </h1>

        <p className="mt-4 text-lg text-slate-400">Official Website</p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

        <p className="text-slate-400">
          working continue in this project. The new full version of this website will be live after development
        </p>

        {/* Animated dots */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-400" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-400 [animation-delay:200ms]" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-400 [animation-delay:400ms]" />
        </div>
      </section>
    </main>
  );
}
