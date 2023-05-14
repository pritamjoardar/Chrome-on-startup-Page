
function todaysDate(){
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth()+1;
    let year = currentDate.getFullYear();
    let day =currentDate.getDay();
    if(date<10){
        date = "0"+date;
    }
    if(month<10){
        month = "0"+month;
    }
    let monthDateYear =date +'/'+ month + '/' + year;
    document.getElementById("da").innerHTML = monthDateYear;
    if (day==0) {
        document.getElementById("day").innerHTML ="Sunday";
    }else if(day==1){
        document.getElementById("day").innerHTML ="Monday";
    }else if(day==2){
        document.getElementById("day").innerHTML ="Tuesday";
    }else if(day==3){
        document.getElementById("day").innerHTML ="Wednesday";
    }else if(day==4){
        document.getElementById("day").innerHTML ="Thrusday";
    }else if(day==5){
        document.getElementById("day").innerHTML ="Friday";
    }else if(day==6){
        document.getElementById("day").innerHTML ="Saturday";
    }   
};

// For time
function todaysTime(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    if(hour>12){
        hour = "0"+(hour-12);
    }
    else if(hour==0){
        hour = 12;
    }
    else if(hour<10){
        hour = "0"+hour;
    }
    if(sec<10){
        sec = "0"+sec;
    }
    if(min<10){
        min = "0"+min;
    }
    let latestTime = hour + ':' + min + ':' + sec;
    document.getElementById("tim").innerHTML = latestTime;
    
}

// for weather API
function weather(){   
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b482fbe31amshb013eeceebd09f3p10e66cjsn69a7cae3eb5d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let city=(city)=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response => response.json())
.then(response =>{

let max_temp = response.max_temp;
let hum = response.humidity;

document.getElementById("temp").innerHTML = max_temp;
document.getElementById("temp1").innerHTML = max_temp;
document.getElementById("temp2").innerHTML = hum;

})

.catch(err => console.error(err));
}
city("kolkata");
let weatherSearch = document.getElementById("next_search");
weatherSearch.addEventListener("click",()=>{
    
    let input = document.getElementById("search_weather").value ;
    city(input);
    document.getElementById("city").innerHTML = input;
})

}

// for input value
let input=()=>{
    document.getElementById("search_input").addEventListener("click",()=>{
        let value = document.getElementById("any_search").value ;
        
    })
}



todaysDate();
setInterval(todaysTime,900);
weather();
input();


