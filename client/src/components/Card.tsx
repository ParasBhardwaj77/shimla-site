interface CardProps {
  image: string;
  title: string;
  rating: number;
  reviews: string;
  price: string;
}

function Card({ image, title, rating, reviews, price }: CardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-[240px] h-full flex flex-col cursor-pointer group border border-slate-100 shadow-sm">
      <div className="relative h-[150px] overflow-hidden m-2 mb-0 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-md p-1 rounded-full hover:bg-white/50 transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-sm"></div>
        </div>
      </div>

      <div className="px-3 py-3 text-center space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="text-base font-bold text-slate-800 line-clamp-1 leading-tight"
            title={title}
          >
            {title}
          </h3>

          <div className="flex items-center justify-center gap-1.5 text-slate-600 mt-1">
            <div className="flex text-amber-400 text-[10px]">
              {"★".repeat(Math.floor(rating))}
              {rating % 1 !== 0 && "½"}
            </div>
            <span className="font-medium text-[10px]">
              {rating} <span className="text-slate-400">({reviews})</span>
            </span>
          </div>
        </div>

        <div className="text-emerald-700 font-bold text-sm">
          {price}{" "}
          <span className="text-slate-400 font-normal text-[10px]">
            / person
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
