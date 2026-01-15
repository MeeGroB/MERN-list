
import { Plus, Users, User, Check, X } from "lucide-react"
import StatsCard from "./components/StatsCard"
import SearchBar from "./components/SearchBar"
import UserTable from "./components/UserTable"
import UserModel from "./components/UserModel"
import { 
  getUsers, 
  searchUsers, 
  getStats, 
  addUser, 
  updateUser, 
  deleteUser } from "./api/userApi"
import { useEffect, useState } from "react"

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

function App() {

  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0});
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active"
  });

  const [editingItem, setEditingItem] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const status = ["Active", "Inactive"];

  //fetch Users
  useEffect(()=> {
    fetchUsers();
    console.log("asfdsfds")
  }, [currentPage, itemsPerPage]);

  useEffect(()=> {
    if(searchTerm)
      handleSearch();
    else
      fetchUsers();
  }, [searchTerm]);

  //fetch stats
  const fetchStats = async()=> {
    const data = await getStats();
    console.log(data)
    setStats(data);
  };

  const fetchUsers = async()=> {
    const data = await getUsers(currentPage, itemsPerPage);

    setUsers(data.users);
    setTotalPages(data.totalPages);
    setTotalUsers(data.totalUsers);
    console.log(data)
    fetchStats();
  };

  const handleSearch = async()=> {
    const data = await searchUsers(searchTerm, currentPage, itemsPerPage);
    setUsers(data.users);
    setTotalPages(data.totalPages);
    setTotalUsers(data.totalUsers);
  };

  const handleSubmit = async()=> {
    if(!formData.name || !formData.email || !formData.phone){
      return alert("Fill all fields");
    }
    setLoading(true);

    try {
      if(editingItem)
        await updateUser(editingItem._id, formData);
      else 
        await addUser(formData);

      fetchUsers();
      closeModal();
      setLoading(false);

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      alert(errorMessage);
    }
  };

  const handleDelete = async(id: string) => {
    if(window.confirm("Are you sure")) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  const openModal = (item= null)=> {
    if(item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData({ name: "", email: "", phone: "", status: "Active"});
    }

    setIsModalOpen(true);
  }

  const closeModal = ()=> {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({ name: "", email: "", phone: "", status: "Active"});
  }

  return (
    <div className='min-h-screen bg-gray-950'>
      {/* Header */}
      <header className='bg-gray-900 shadow-xl border-b border-gray-500'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg">
              <Users size={28} className="text-gray-900" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">
                User Management
              </h1>
              <p className="text-gray-400 mt-1">MERN Stack Application</p>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-green-500 text-gray-900 px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer shadow-lg font-semibold" onClick={()=> openModal()}>
            <Plus size={20} />
            Add User
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stats */}
          <StatsCard 
            title="Total Users"
            value={stats.total}
            icon={Users}
            bgIcon="bg-indigo-500"
            iconColor="text-white"
            gradient="from-indigo-900 to-indigo-700" 
            description={""}            
          />

          <StatsCard 
            title="Active Users"
            value={stats.active}
            icon={Check}
            bgIcon="bg-green-500"
            iconColor="text-white"
            gradient="from-green-900 to-green-700" 
            description={""}            
          />

          <StatsCard 
            title="Inactive Users"
            value={stats.inactive}
            icon={X}
            bgIcon="bg-red-500"
            iconColor="text-white"
            gradient="from-red-900 to-red-700" 
            description={""}            
          />
        </div>

        {/* Search */}
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          onClear={()=> {
            setSearchTerm("")
            setCurrentPage(1)
          }} 
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(value: number)=> {
            setItemsPerPage(value)
            setCurrentPage(1)
          }}

          currentPage={currentPage}
          totalUsers={totalUsers}
        />

        {/* User Table */}
        <UserTable />

        <UserModel isOpen={isModalOpen} onClose={closeModal} />
        
      </main>

    </div>
  )
}

export default App