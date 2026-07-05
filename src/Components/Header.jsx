import { MoonStar, Sun, Heart, Film, Clock, Home } from "lucide-react"
import { useContext } from "react"
import { movieContext } from "../App"
import { Tabs, TabsList, TabsTrigger } from "../Components/ui/tabs"


function Header() {
    const { setIsDark, isDark } = useContext(movieContext)

    const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

    return (
        <div className="p-6 flex gap-10 items-center justify-between max-h-20">
            <div className="flex gap-1.5">
                <Film size={48} className="-mt-1.5 text-[#4C3E86]"></Film>
                <h1 className="bg-gradient-to-r from-[#4C3E86] to-[#8864FE] bg-clip-text text-4xl text-transparent font-bold">TvMaze</h1>
            </div>
            <div className="flex gap-3">
                <div>
                    <button
                        onClick={toggleTheme}
                        className="relative h-11 w-24 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white p-1 shadow-sm select-none"
                        aria-label="Toggle theme"
                    >
                        <div className={`absolute top-1 left-1 h-9 w-9 rounded-full bg-black transition-transform duration-300 ease-out ${!isDark ? 'translate-x-12' : 'translate-x-0'}`} />
                        <div className="flex gap-3">
                            <div className={`z-10 flex h-9 w-9 items-center justify-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                <MoonStar size={18} />
                            </div>
                            <div className={`z-10 flex h-9 w-9 items-center justify-center transition-colors duration-300 ${!isDark ? 'text-white' : 'text-slate-800'}`}>
                                <Sun size={18} />
                            </div>
                        </div>
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <Tabs defaultValue="Home" className="w-max mx-auto">
                        <TabsList className="h-11 p-1 bg-white border border-gray-200 rounded-full shadow-sm gap-1 dark:bg-white dark:bord">
                            <TabsTrigger
                                value="Home"
                                className="flex gap-2 items-center rounded-full px-5 py-2 text-sm font-medium transition-all data-[state=active]:text-white dark:data-[state=active]:bg-black dark:data-[state=active]:text-white shadow-none data-[state=active]:shadow-none">
                                <Home size={16} />
                                Home
                            </TabsTrigger>
                            <TabsTrigger
                                value="Recently Watched"
                                className="flex gap-2 items-center rounded-full px-5 py-2 text-sm font-medium transition-all data-[state=active]:text-white dark:data-[state=active]:bg-black dark:data-[state=active]:text-white shadow-none data-[state=active]:shadow-none">
                                <Clock size={16} />
                                Recents
                            </TabsTrigger>
                            <TabsTrigger
                                value="Favorites"
                                className="flex gap-2 items-center rounded-full px-5 py-2 text-sm font-medium transition-all data-[state=active]:text-white dark:data-[state=active]:bg-black dark:data-[state=active]:text-white shadow-none data-[state=active]:shadow-none">
                                <Heart size={16} />
                                Favorites
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Header