import { Link } from '@tanstack/react-router'

export function NavBar() {

return (

 <header className="flex flex-row gap-18 bg-gray-100 shadow-sm justify-center p-4 rounded-xl ">
    <div className="text-lg font-grotesk"> Website Name</div>
    <nav className="flex flex-row">
      <Link to="/" className="mx-2">Home</Link>

    </nav>
       
</header>

)
}