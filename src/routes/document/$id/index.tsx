import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/document/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = useParams({ from: '/document/$id/' });
  return <div>Hello from Document - <span className='font-medium text-violet-700'>"{id}"</span> !</div>
}
