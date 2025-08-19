import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/document/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/document/new"! ---- I'm on new!!!</div>
}
