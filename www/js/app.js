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
      data: function () {
        return {
          title: 'Component Page',
          names: ['John', 'Vladimir', 'Timo'],
        }
      },
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
  url: '/',
  domCache: true //enable inline pages  
});
var catalogView = app.views.create('#view-catalog', {
  url: '/calendar/'
});
var aboutView = app.views.create('#view-settings', {
  url: '/about/'
});

app.on('pageInit',()=>{
 

  const time = document.getElementById("time");
  const dato = document.getElementById("dato");
  const oldTime = document.getElementById("oldTime");
  const oldDate = document.getElementById("date");
  
  // function to get the passed days from an start date
  function days_passed() {
    // date.getTime() returns the milliseconds since the invention of it, in java script.
  const date = new Date();
      var currentTime = new Date(date.getTime());
      var previousTime = new Date(date.getFullYear(), 0, 1);
      
      return Math.ceil(((currentTime - previousTime + 1) / 86400000));
    }
  
  
  const timeConverter = ()=>{
      
  // date.getTime() returns the milliseconds since the invention of it, in java script.
  const date = new Date();
      // defining hours minutes and seconds;
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      // total passed seconds in a day
      const totalPassedSeconds = hours*3600 + minutes*60 + seconds;
      // converting total passed seconds to SEKO in 24 hours
      // each Seko is 0.96 second.
      const totalPassedSeko = totalPassedSeconds / 0.96;
      // it updates every 100 seconds
      const totalPassedBiMino = totalPassedSeko /100;
      // Ora, Mino, Seko
      
      const currentBiOra = totalPassedBiMino/100;
      const currentBiMino =  (currentBiOra - Math.floor(currentBiOra))*100;
      const currentSeko = ((totalPassedSeko)/100 - Math.floor(totalPassedSeko/100))*100;
      function sekoMinoPrinter(x){
        if (x<10){
          return `0${x}`;
        }
        else if (x>=10){
          return `${x}`;
        }
      };
      
      time.innerHTML = `<span class="ora">${Math.floor(currentBiOra)}</span><span class="mino">${sekoMinoPrinter(Math.floor(currentBiMino))}</span><span class="seko">${sekoMinoPrinter((Math.floor(currentSeko)))}</span>`;
  
      dato.innerHTML = `<span class="week">${Math.floor(days_passed(date)/10)}</span><span>${days_passed(date) - Math.floor(days_passed(date)/10)*10}</span>`;   
  };
  const timer = () => {
    // date.getTime() returns the milliseconds since the invention of it, in java script.
  const date = new Date();
    oldDate.innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    oldTime.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  
  setInterval(timer,1000);
  setInterval(timeConverter,0960);
  
// calendar functions

const weekDays = document.getElementById("weekDays");
const calendarButton = document.getElementById("calendar_button");

function dayMaker(){
days = [];
for(i=1;i<=360;i++){
  days.push(i);
  };
  return days;
};


function calendarCreate(x){
  const calendar = document.getElementById("calendar_table");
  let cal = dayMaker();
  console.log(cal);
};



calendarButton.addEventListener("click",()=>{
  let numberOfRows = 360/weekDays.value;
  calendarCreate(numberOfRows);
});


 
// row = calendar.insertRow(0);
// const cell1 = row.insertCell(0);
// const cell2 = row.insertCell(1);

// cell1.innerHTML = 'hi';
// cell2.innerHTML = 'bye';

});