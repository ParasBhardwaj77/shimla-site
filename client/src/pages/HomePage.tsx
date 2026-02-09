import Nav from "../components/Nav";
import Card from "../components/Card";

function HomePage() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full flex-shrink-0 h-[65vh] min-h-[400px]">
        <img
          src="/assets/hero.jpg"
          className="w-full h-full object-cover object-[50%_60%]"
          alt="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-slate-50/90"></div>
        <Nav />

        {/* Hero Content */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl tracking-tight">
            Discover Shimla
          </h1>
          <p className="text-lg md:text-xl mt-2 font-medium drop-shadow-lg text-slate-100">
            Plan your perfect 3 day trip
          </p>
          <button className="mt-5 px-8 py-2.5 bg-emerald-600/90 hover:bg-emerald-600 backdrop-blur-sm text-white text-base font-semibold rounded-full transition-all shadow-lg hover:shadow-emerald-900/40 active:scale-95 border border-emerald-500/30">
            Plan My Trip
          </button>
        </div>
      </div>

      {/* Popular Section - Overlapping & Scrollable */}
      <div className="flex-1 relative -mt-32 z-10 flex flex-col justify-end pb-6">
        <div className="w-fit mx-auto">
          <div className="px-1 mb-3">
            <h2 className="text-xl font-bold text-slate-800/90 drop-shadow-sm">
              Popular Destinations
            </h2>
          </div>

          <div className="flex overflow-x-visible gap-5 px-1 pb-4 scrollbar-hide snap-x snap-mandatory pt-2">
            {[
              {
                title: "Jakhoo Temple",
                image: "/assets/jakhootemple.jpg",
                rating: 4.8,
                reviews: "3.2k",
                price: "Free",
              },
              {
                title: "Christ Church",
                image: "/assets/shimlachurch.png",
                rating: 4.7,
                reviews: "4.5k",
                price: "Free",
              },
              {
                title: "Kufri Fun World",
                image: "/assets/kufri.jpg",
                rating: 4.5,
                reviews: "2.1k",
                price: "₹ 500",
              },
              {
                title: "Viceregal Lodge",
                image: "/assets/viceregallodge.jpg",
                rating: 4.6,
                reviews: "1.8k",
                price: "₹ 100",
              },
              {
                title: "Golf Course",
                image: "/assets/golfcourse.jpg",
                rating: 4.4,
                reviews: "950",
                price: "₹ 800",
              },
            ].map((place, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center first:pl-0 last:pr-0"
              >
                <Card {...place} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
