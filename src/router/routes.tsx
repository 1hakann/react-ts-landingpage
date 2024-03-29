import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));

const routes = [
    {
        path: '/',
        element: <Index />,
    },
];

export { routes };