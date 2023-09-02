export type DocMode = 'dark' | 'light'

type RouteData = {
    '/': 'home';
    '/about': 'about me';
    '/edu': 'education';
    '/skills': 'skills';
    '/work': 'my work';
    '/contact': 'contact me';
};

export type AppUrl = keyof RouteData

export type NavRoute = {
    url: keyof RouteData;
    text: RouteData[AppUrl];
}

const navRoutes: NavRoute[] = [
    { url: '/', text: 'home' },
    { url: '/about', text: 'about me' },
    { url: '/edu', text: 'education' },
    { url: '/skills', text: 'skills' },
    { url: '/work', text: 'my work' },
    { url: '/contact', text: 'contact me' }
];

