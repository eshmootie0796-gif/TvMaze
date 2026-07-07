import { Star } from "lucide-react"

function Card({ movie }) {
    return (
        <div className="group flex flex-col gap-3 h-full cursor-pointer">
            <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[2/3] relative shadow-sm group-hover:shadow-md transition-all duration-300">
                <img 
                    src={movie.image?.medium || movie.image?.original} 
                    alt={movie.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col gap-0.5 px-0.5">
                <h2 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-1 group-hover:text-[#8864FE] transition-colors duration-200">
                    {movie.name}
                </h2>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <div className="flex items-center gap-0.5 text-amber-500">
                        <Star size={13} fill="currentColor" className="stroke-amber-500" />
                        <span>{movie.rating.average || 'N/A'}</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="truncate text-gray-500 font-medium"> {movie.runtime ? `${movie.runtime} Mins` : "-----"}</span>
                </div>
            </div>
        </div>
    )
}

export default Card