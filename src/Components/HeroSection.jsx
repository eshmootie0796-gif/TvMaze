import { useState, useContext } from "react"
import { getMovies } from "../Services/Api"
import { movieContext } from "../App"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function HeroSection() {
  const [active, setActive] = useState(0)
  const { movies } = useContext(movieContext)

  const sliderMovies = movies.slice(20, 30)
  const activeMovie = sliderMovies[active]

  const nextBtn = () => {
    setActive(prev => prev === sliderMovies.length - 1 ? 0 : prev + 1)
  }
  const prevBtn = () => {
    setActive(prev => prev === 0 ? sliderMovies.length - 1 : prev - 1)
  }

  return (
    <div className="relative h-163 overflow-hidden ">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" >
        <AnimatePresence mode="sync">
          {activeMovie && (
            <motion.div key={activeMovie.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
              style={{ backgroundImage: `url(${activeMovie?.image?.original})` }}
            />


          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>
      <button size="icon" variant="ghost" onClick={prevBtn} className="absolute left-6 top-1/2 -translate-y-1/2 z-50 cursor-pointer bg-zinc-800/80 rounded-4xl text-white p-2 hover:bg-zinc-700">
        <ChevronLeft />
      </button>
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center z-10"
        style={{ perspective: 1800 }}>
        <AnimatePresence>
          {sliderMovies.map((movie, index) => {
            let offset = index - active
            if (offset > 5) {
              offset -= 10
            }
            if (offset < -5) {
              offset += 10
            }

            return (
              <motion.img
                key={movie.id}
                src={movie.image.medium}
                alt={movie.title}
                className="absolute w-64 rounded-2xl shadow-2xl cursor-pointer"
                animate={{ x: offset * 250, scale: offset === 0 ? 1 : 0.8, rotateY: offset * 20, opacity: Math.abs(offset) > 2 ? 0 : 1, zIndex: 100 - Math.abs(offset) }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
              />
            )
          })}
        </AnimatePresence>
      </div>
      <button size="icon" onClick={nextBtn} className="absolute right-6 top-1/2 -translate-y-1/2 z-50 cursor-pointer bg-zinc-800/80 rounded-4xl text-white p-2 hover:bg-zinc-700">
        <ChevronRight />
      </button>
    </div>
  )
}

export default HeroSection