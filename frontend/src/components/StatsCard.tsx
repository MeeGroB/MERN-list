import { User } from "lucide-react"

const StatsCard = () => {
    return (
        <div className={`rounded-lg shadow-lg p-6 border border-gray-800 transform hover:scale-105 transition-all bg-red-300`}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-300 text-sm font-medium">Title</p>
                    <p className="text-3xl font-bold mt-2">Numer</p>
                    {/* Conditional Rendering */}
                    <p className="text-gray-400 text-sm mt-1">Description</p>
                </div>

                {/* Icon */}
                <div className={`p-3 rounded-lg flex items-center justify-center`}>
                    <User />
                </div>
            </div>
        </div>
    )
}

export default StatsCard