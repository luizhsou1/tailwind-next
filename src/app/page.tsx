export default function Home() {
  return (
    <div className="px-44 bg-slate-900 h-screen">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-6xl flex items-center gap-3 text-luiz before:w-0.5 before:h-8 before:bg-sky-500 before:flex">Hello tailwind</h1>
      <h2>Hello tailwind</h2>
      <h3>Hello <strong>tailwind</strong></h3>
      <button disabled className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">Sign In</button>
    </div>
  );
}
