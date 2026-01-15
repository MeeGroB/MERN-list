import { Search, X } from "lucide-react"

interface SearchBarProps {
    value: string,
    onChange: (value: string)=> void,
    onClear: ()=> void,
    itemsPerPage: number,
    onItemsPerPageChange: (e: number)=> void,
    currentPage : number,
    totalUsers: number
}

const SearchBar = ({ value,onChange, onClear, itemsPerPage, onItemsPerPageChange, currentPage, totalUsers }: SearchBarProps) => {

    const startUser = totalUsers === 0 ? 0 : (currentPage - 1 ) * itemsPerPage +1;
    const endUser = Math.min(currentPage * itemsPerPage, totalUsers)

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-4 border border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input 
                type="text" 
                placeholder="Search by name, email, phone or status" 
                className="w-full pl-10 pr-10 py-2.5 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-600
                outline-none"
                value={value}
                onChange={(e)=> onChange(e.target.value)}
            />

            {/* Conditional Rendering */}
            {value && (
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-full transition-all" onClick={onClear}>
                    <X size={16} />
                </button>
            )}
        </div>

        {/* Rows per page & info */}
        <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Showing {startUser} to {endUser} of {totalUsers} users</span>

            <div className="flex items-center gap-2">
                <label htmlFor="" className="text-gray-400">Rows</label>
                <select name="" id="" className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm" onChange={(e)=> onItemsPerPageChange(Number(e.target.value))}>
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