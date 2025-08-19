import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/document')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
