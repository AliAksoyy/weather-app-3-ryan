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
      const lang = tr

      const url = `https://api.openweathermap.org/data/2.5/weather?=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

        const responsive = await fetch(url).then((res)=> res.json())
        console.log(responsive)
        
      


}

