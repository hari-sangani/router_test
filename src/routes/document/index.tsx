import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/document/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/document/" in index!</div>
}
