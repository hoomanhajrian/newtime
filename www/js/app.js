// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.newtime', // App bundle ID
  name: 'newtime', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      
    };
  },
  // App root methods
  methods: {
    
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/calendar/'
});
var aboutView = app.views.create('#view-settings', {
  url: '/about/'
});

