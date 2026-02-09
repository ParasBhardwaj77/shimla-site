function navbar() {
  return (
    <nav className="absolute top-8 left-0 w-full z-10 px-6 py-2 flex items-center justify-between text-white bg-black/20">
      <h1 className="text-lg font-semibold">Discover Now</h1>
      <ul className="flex gap-10 text-lg font-medium">
        <li className="cursor-pointer hover:text-gray-300">Plan Trip</li>
        <li className="cursor-pointer hover:text-gray-300">Itineraries</li>
        <li className="cursor-pointer hover:text-gray-300">Maps</li>
        <li className="cursor-pointer hover:text-gray-300">Search</li>
      </ul>
    </nav>
  );
}

export default navbar;
