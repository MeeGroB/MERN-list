import React from "react"
import { type LucideIcon } from "lucide-react"

type statsCardProps = {
    title: string,
    value: number,
    icon: LucideIcon,
    bgIcon: string,
    iconColor: string,
    gradient: string,
    description: string
}

const StatsCard = ({title, value, icon, bgIcon="bg-gray-700", iconColor="text-white", gradient="from-gray-900 to-gray-700", description=""}: statsCardProps) => {
    return (
        <div className={`rounded-lg shadow-lg p-6 border border-gray-800 transform hover:scale-105 transition-all bg-linear-to-r ${gradient}`}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-300 text-sm font-medium">{title}</p>
                    <p className="text-3xl font-bold mt-2" style={{ color: "white"}}>{value}</p>
                    {/* Conditional Rendering */}
                    {description && (
                        <p className="text-gray-400 text-sm mt-1">{description}</p>
                    )}
                </div>

                {/* Icon */}
                <div className={`p-3 rounded-lg flex items-center justify-center ${bgIcon}`}>
                    {React.cloneElement(React.createElement(icon), { size: 22, className: iconColor})}
                   
                </div>
            </div>
        </div>
    )
}

export default StatsCard