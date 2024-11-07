import SidePanel from "./SidePanel"

export default function DefaultLayout({ children }) {
    return (
        <div className="flex flex-row w-full h-[100vh] bg-gray-300">
            <aside className="w-[20%] bg-white">
                <SidePanel />
            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}
