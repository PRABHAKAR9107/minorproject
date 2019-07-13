import Article from './Article.js';
import App from './App'

export const defaultRoutes = [
    {
        path: '/',
        component: App,
        exact: true,
    },
    {
        path: '/article/:id',
        component: Article,
    },
];
/* for nested routes */
const routes = [
    {
        path: '/',
        component: App,
        routes: defaultRoutes,
    },
];

export default defaultRoutes;