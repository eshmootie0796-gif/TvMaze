import { Film } from "lucide-react"
import { useState } from "react"
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6"

function Footer() {
    const [email, setEmail] = useState("")
    const [sent, setSent] = useState(false)
    return (
        <div className="flex justify-between p-10 bg-[#eeeeee] dark:bg-zinc-900">
            <div className="w-60 flex flex-col gap-3">
                <div className="flex gap-1.5">
                    <Film size={48} className="-mt-1.5 text-[#4C3E86]" />
                    <h1 className="bg-linear-to-r from-[#4C3E86] to-[#8864FE] bg-clip-text text-4xl text-transparent font-bold">TvMaze</h1>
                </div>
                <p>Tv Maze is the world's largest database and calender. Track shows you love and discover what's next 💜</p>
            </div>
            <div className="w-100 flex flex-col gap-3">
                <h1 className="text-2xl">Stay in loop</h1>
                <p>Get the lastest Tv news and updates delivered straight to your inbox ^^</p>

                <div className="flex gap-3">
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={sent ? "Thank you for submitting " : "Your email adress"}
                        className="flex-1 h-12 font-medium rounded-2xl px-4 py-3 outline-none border border-gray-300 bg-white text-zinc-900 placeholder:text-gray-400 focus:border-[#8864FE] dark:border-zinc-700 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                    />
                    <button onClick={() => setSent(true)} className="bg-[#4C3E86] h-12 text-white px-6 py-3 rounded-2xl cursor-pointer hover:bg-[#8864FE] transition-colors">
                        {sent ? "Sent" : "Submit"}
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl">Follow us on social media</h1>
                <div className="flex gap-6">
                    <FaXTwitter className="w-8 h-8 text-gray-400 hover:text-[#8864FE] transition-colors cursor-pointer" />
                    <FaYoutube className="w-8 h-8 text-gray-400 hover:text-[#8864FE] transition-colors cursor-pointer" />
                    <FaFacebook className="w-8 h-8 text-gray-400 hover:text-[#8864FE] transition-colors cursor-pointer" />
                    <FaInstagram className="w-8 h-8 text-gray-400 hover:text-[#8864FE] transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Footer