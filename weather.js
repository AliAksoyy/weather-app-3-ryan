const form = document.querySelector("section.top-banner form")
const input = document.querySelector(".container input")
const msg = document.querySelector(".span.msg")
const list = document.querySelector(".ajax-section .cities")

localStorage.setItem(
  "tokenKey",
  "pc8YHOgPN1XTHnmt2lLm/vIGUAaGJFJ1vEABsIprjGvkdyLesISAotmAipoCW2bg"
);
// localStorage.setItem(
//   "tokenKeyEncrypted",
//   EncryptStringAES("5bb1e360c88ace5e3a7f0c8cfe9a34d7")
// );

form.addEventListener("submit", (e)=> {
        e.preventDefault();
    getWeatherDataFromApi()
})

//* get api func. (http method == verbs)

const getWeatherDataFromApi = async ()=> {
        // alert("http request is gone")
      const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"))
      console.log(tokenKey)

      const inputValue = input.ariaValueMax;
      const units = "metric"
      const lang = "tr"

      const url = `https://api.openweathermap.org/data/2.5/weather?=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

       const response = await fetch(url).then(responsive=>responsive.json())
       console.log(response)

    const {main,sys,weather,name} = response

       const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        
      
       const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
        
       const createdLi =document.createElement("li")
       createdLi.className = "city"
    createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${
      sys.country
    }">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                <img class="city-icon" src="${iconUrl}">
                <figcaption>${weather[0].description}</figcaption>
            </figure>`;
    list.prepend(createdLi)
}

