import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="flex items-center justify-center gap-4 p-2">
        <Link to="/" className="[&.active]:font-bold [&.active]:bg-blue-700/20 rounded p-2">Home</Link>
        <Link to="/about" className="[&.active]:font-bold [&.active]:bg-blue-700/20 rounded p-2">About</Link>
        <Link to="/document" className="[&.active]:font-bold [&.active]:bg-blue-700/20 rounded p-2">Document</Link>
        <Link to="/document/new" className="[&.active]:font-bold [&.active]:bg-blue-700/20 rounded p-2">New Document</Link>
      </nav>
      <hr className='opacity-10'/>
      <div className='flex justify-center h-[calc(100vh-4rem)] mt-16'>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
