import { MoonStar, Sun, Heart, Film, Clock, Home, Search } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router"
import { movieContext } from "../features/context"
import { Tabs, TabsList, TabsTrigger } from "../Components/ui/tabs"

function Header() {
    const { setIsDark, isDark, user } = useContext(movieContext)

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <div className="sticky top-0 z-50 p-6 flex gap-10 items-center justify-between max-h-20 border-b border-transparent bg-[#eeeeee] dark:bg-zinc-900">
            <Link to="/" className="flex gap-1.5">
                <Film size={48} className="-mt-1.5 text-[#4C3E86]" />
                <h1 className="bg-linear-to-r from-[#4C3E86] to-[#8864FE] bg-clip-text text-4xl text-transparent font-bold">TvMaze</h1>
            </Link>
            <div className="flex gap-3">
                <div>
                    <button
                        onClick={toggleTheme}
                        className="relative h-11 w-24 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white p-1 shadow-sm select-none dark:border-zinc-700 dark:bg-zinc-900"
                        aria-label="Toggle theme"
                    >
                        <div className={`absolute top-1 left-1 h-9 w-9 rounded-full bg-black transition-transform duration-300 ease-out dark:bg-zinc-100 ${!isDark ? 'translate-x-12' : 'translate-x-0'}`} />
                        <div className="flex gap-3">
                            <div className={`z-10 flex h-9 w-9 items-center justify-center transition-colors duration-300 ${isDark ? 'text-white dark:text-zinc-900' : 'text-slate-800'}`}>
                                <MoonStar size={18} />
                            </div>
                            <div className={`z-10 flex h-9 w-9 items-center justify-center transition-colors duration-300 ${!isDark ? 'text-white dark:text-zinc-900' : 'text-slate-800'}`}>
                                <Sun size={18} />
                            </div>
                        </div>
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <Tabs defaultValue="Home" className="w-max mx-auto">
                        <TabsList className="h-11 p-1 bg-white border border-gray-200 rounded-full shadow-sm gap-1 dark:bg-zinc-900 dark:border-zinc-700">
                            <TabsTrigger
                                value="Home"
                                className="flex gap-2 items-center rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer duration-500 data-[state=active]:bg-[#4C3E86] data-[state=active]:text-white dark:data-[state=active]:bg-[#8864FE] shadow-none data-[state=active]:shadow-none">
                                <Home size={16} />
                                Home
                            </TabsTrigger>
                            <TabsTrigger
                                value="Recently Watched"
                                className="flex gap-2 items-center rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer duration-500 data-[state=active]:bg-[#4C3E86] data-[state=active]:text-white dark:data-[state=active]:bg-[#8864FE] shadow-none data-[state=active]:shadow-none">
                                <Clock size={16} />
                                Recents
                            </TabsTrigger>
                            <TabsTrigger
                                value="Favorites"
                                className="flex gap-2 items-center rounded-full px-5 py-2 text-sm font-medium transition-all duration-500 cursor-pointer data-[state=active]:bg-[#4C3E86] data-[state=active]:text-white dark:data-[state=active]:bg-[#8864FE] shadow-none data-[state=active]:shadow-none">
                                <Heart size={16} />
                                Favorites
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>
            <div className="flex justify-center items-center gap-8">
                <Link to="/search" aria-label="Search shows" className="text-gray-500 hover:text-[#8864FE] transition-colors dark:text-zinc-400 dark:hover:text-[#8864FE]">
                    <Search />
                </Link>
                <div className="flex gap-2">
                    <img src={user.pfp} alt="" className="w-12 h-12 rounded-full cursor-pointer" />
                    <div>
                        <p className="text-[20px]">{user.username}</p>
                        <p className="-mt-2 text-gray-700 text-[14px] dark:text-zinc-400">{user.role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
