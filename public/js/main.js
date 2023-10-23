const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_Name = document.getElementById('city-Name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_Status = document.getElementById('tempStatus');
const dataHide = document.querySelector('.middleLayer')

const getData = async(event) =>{
    event.preventDefault();
    let cityValue = cityName.value;
    if(cityValue === ""){
        city_Name.innerText = 'Write the city name please!';
        dataHide.classList.add('data_hide')



    }else{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=d41b0672c85863d00da2bbcf0d089b7f`;
            const response = await fetch(url);
            const data = await response.json();
            const arrayData = [data];
            city_Name.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country} `
            temp_real_val.innerText = (arrayData[0].main.temp-273.15).toFixed(2).toString();
            // temp_Status.innerText = arrayData[0].weather[0].main
            
            const tempMood = arrayData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_Status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_Status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

            }
            else if(tempMood == "Rain"){
                temp_Status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";

            }else{
                temp_Status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            dataHide.classList.remove('data_hide');

        }
        catch{
            city_Name.innerText = 'Write the city name please!';
            dataHide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', getData);

