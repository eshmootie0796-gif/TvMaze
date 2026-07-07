import Header from "./Components/Header"
import { Outlet } from "react-router"

function Layout(){
    return(
        <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
        
    </div>
    )
}

export default Layout