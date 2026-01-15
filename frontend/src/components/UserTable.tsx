import { ChevronLeft, ChevronRight, Edit, Trash } from "lucide-react"

const UserTable = () => {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-800 border-b border-gray-700">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Name</th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Email</th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Phone</th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Created</th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-800">
                        <tr className="hover:bg-gray-800 transition-colors">
                            <td className="px-6 py-4 text-sm text-white font-medium">User name</td>

                            <td className="px-6 py-4 text-sm text-white font-medium">User Email</td>

                            <td className="px-6 py-4 text-sm text-white font-medium">User Phone</td>

                            <td className={`px-3 py-1 rounded-full text-xs font-semibold`}>Active</td>

                            <td className="px-6 py-4 text-sm text-gray-400 font-medium">Date</td>

                            <td className="px-6 py-4 text-center">
                                <div  className="flex justify-center gap-2">
                                    <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-500 text-gray-900 rounded-lg hover:bg-green-400 transition-all font-semibold">
                                        <Edit size={16} /> Edit
                                    </button>

                                    <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-500 text-gray-900 rounded-lg hover:bg-red-400 transition-all font-semibold">
                                        <Trash size={16} /> Delete
                                    </button>
                                </div>

                            </td>
                        </tr>

                        {/* Conditional Rendering */}
                        <tr>
                            <td colSpan={6} className="text-center py-12 text-gray-400">No users found</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {/* Conditional Rendering */}
            <div className="px-6 py-4 border-t border-gray-800 flex justify-between items-center bg-gray-800">
                <div className="text-sm text-gray-400">
                    Page 1 of 5
                </div>

                <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50">
                        <ChevronLeft size={16} /> Prev
                    </button>

                    <button className={`px-3 py-2 rounded-lg`}>
                        1
                    </button>

                    <button className="flex items-center gap-1 px-3 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserTable