import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/document/$id/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = useParams({ from: '/document/$id/edit' });
  return <div>Hello, you can Edit Document - <span className='font-medium text-violet-700'>"{id}"</span> here...</div>
}
