import Header from "./Components/Header"
import { Outlet } from "react-router"

function Layout(){
    return(
        <div className="flex flex-col min-h-screen bg-[#f3f3f3] text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
        <Header></Header>
        <main className="flex-1">
            <Outlet></Outlet>
        </main>
    </div>
    )
}

export default Layout