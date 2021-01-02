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

});


app.once('pageInit',()=>{
  
  const calendar = document.getElementById("calendar");
  const calendarButton = document.getElementById("calendar_button");
  days = [];
  
  
    function calendarCreate(){
      calendar.innerHTML = ``;
      for(i=1;i<=360;i++){
        days.push(i);
        };
      days.forEach(e=>{
            calendar.innerHTML += `<div class="days day${e}">${e}<div>`;
      });
    };
      

  calendarButton.addEventListener("click",()=>{
    days = [];
    calendar.innerHTML = "";
    let weekDays = document.getElementById("weekDays").value;

      if(weekDays==1){
          calendar.style.gridTemplateColumns = "1fr";
       }
      else if(weekDays==2){
          calendar.style.gridTemplateColumns = "1fr 1fr";
      }
      else if(weekDays==4){
        calendar.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
      }
      else if(weekDays==6){
        calendar.style.gridTemplateColumns = "repeat(6,1fr)";
      }
      else if(weekDays==8){
        calendar.style.gridTemplateColumns = "repeat(8,1fr)";
      }
      else if(weekDays==9){
        calendar.style.gridTemplateColumns = "repeat(9,1fr)";
      }
      else if(weekDays==10){
        calendar.style.gridTemplateColumns = "repeat(10,1fr)";
      }
      else if(weekDays==15){
        calendar.style.gridTemplateColumns = "repeat(15,1fr)";
      }
    calendarCreate();
  });
});