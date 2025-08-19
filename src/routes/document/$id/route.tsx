import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/document/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
