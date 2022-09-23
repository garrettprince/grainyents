function Nav() {
  return (
    <div className="w-full max-w-5xl flex justify-between">
      <p className="font-bold text-5xl">grainyents</p>
      <section className="flex items-center space-x-10">
        <div className="relative group">
          <button className="text-2xl">How it works</button>
          <span className="absolute left-0 -bottom-3 w-0 h-3 bg-yellow-300 transition-all group-hover:w-full"></span>
        </div>
        <div className="relative group">
          <button className="text-2xl">Contact</button>
          <span className="absolute left-0 -bottom-3 w-0 h-3 bg-yellow-300 transition-all group-hover:w-full"></span>
        </div>
      </section>
    </div>
  );
}

export default Nav;
