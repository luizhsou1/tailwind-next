export default function Home() {
  return (
    <div className="h-screen bg-slate-900 px-44">
      <h1 className="flex items-center gap-3 font-serif text-3xl font-bold text-luiz before:flex before:h-8 before:w-0.5 before:bg-sky-500 sm:text-4xl lg:text-6xl">
        Hello tailwind
      </h1>
      <h2>Hello tailwind</h2>
      <h3>
        Hello <strong>tailwind</strong>
      </h3>
      <button
        disabled
        className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Sign In
      </button>
    </div>
  )
}
