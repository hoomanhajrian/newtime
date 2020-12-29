routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/calendar/',
    componentUrl: './pages/calendar.html',
  },
  {
    path: '/about/',
    componentUrl: './pages/about.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
