import Home from '@/views/home'
import { lazy, Suspense } from 'react'
function LazyWrapper (url) {
  const Component = lazy(() => import(`../views/${url}`))
  return (
    <Suspense fallback={<div>loading</div>}>
      <Component />
    </Suspense>
  );
}
let router = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: '/test',
    element: LazyWrapper('test')
  }
];


export default router
