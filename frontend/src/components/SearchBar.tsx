import { Search, X } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-4 border border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input type="text" placeholder="Search by name, email, phone or status" className="w-full pl-10 pr-10 py-2.5 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-600
            outline-none" />

            {/* Conditional Rendering */}
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-full transition-all">
                <X size={16} />
            </button>
        </div>

        {/* Rows per page & info */}
        <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Showing 1 to 5 of 10 users</span>

            <div className="flex items-center gap-2">
                <label htmlFor="" className="text-gray-400">Rows</label>
                <select name="" id="" className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default SearchBar