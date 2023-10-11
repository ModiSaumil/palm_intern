var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var onlytemp = document.querySelector('#onlytemp')
var humi = document.querySelector("#hum")
var feels_like = document.querySelector("#fl")
var sunrise = document.querySelector("#sunrise")
var sunset = document.querySelector("#sunset")
var visibi = document.querySelector("#visi")
var cur = document.querySelector("#ctm")
var ti = document.querySelector("#ti")
var pr = document.querySelector("#pr")
// var dt = document.querySelector("#dt")

var n1 = document.querySelector("#nd1")
var t1 = document.querySelector("#temp1")
var w1 = document.querySelector("#wind1")
var h1 = document.querySelector("#hum1")

var n2 = document.querySelector("#nd2")
var t2 = document.querySelector("#temp2")
var w2 = document.querySelector("#wind2")
var h2 = document.querySelector("#hum2")

var n3 = document.querySelector("#nd3")
var t3 = document.querySelector("#temp3")
var w3 = document.querySelector("#wind3")
var h3 = document.querySelector("#hum3")

var n4 = document.querySelector("#nd4")
var t4 = document.querySelector("#temp4")
var w4 = document.querySelector("#wind4")
var h4 = document.querySelector("#hum4")

var n5 = document.querySelector("#nd5")
var t5 = document.querySelector("#temp5")
var w5 = document.querySelector("#wind5")
var h5 = document.querySelector("#hum5")



apik = "9499e7c215d99b6812f33b75fead0174"
function convertion(val) {
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputval.value + '&cnt=16&appid=' + apik)
        .then(res => res.json())

        .then(data => {
            var nameval = data['city']['name']
            var descrip = data['list']['0']['weather']['0']['description']
            var tempature = data['list']['0']['main']['temp']
            var wndspd = data['list']['0']['wind']['speed']
            var humidity = data['list']['0']['main']['humidity']
            var feels = data['list']['0']['main']['feels_like']
            var sunrisest = data['city']['sunrise']
            var sunsetst = data['city']['sunset']
            var prr = data['list']['0']['main']['pressure']

            var t11 = data['list']['0']['main']['temp']
            var w11 = data['list']['0']['wind']['speed']
            var h11 = data['list']['0']['main']['humidity']

            var t22 = data['list']['1']['main']['temp']
            var w22 = data['list']['1']['wind']['speed']
            var h22 = data['list']['1']['main']['humidity']

            var t33 = data['list']['2']['main']['temp']
            var w33 = data['list']['2']['wind']['speed']
            var h33 = data['list']['2']['main']['humidity']

            var t44 = data['list']['3']['main']['temp']
            var w44 = data['list']['3']['wind']['speed']
            var h44 = data['list']['3']['main']['humidity']

            var t55 = data['list']['4']['main']['temp']
            var w55 = data['list']['4']['wind']['speed']
            var h55 = data['list']['4']['main']['humidity']

            var visib = data['list']['0']['visibility']
            var visibc = (visib / 1000);

            var curn = new Date()
            curn.setDate(curn.getDate())
            var curn1 = new Date()
            curn1.setDate(curn.getDate() + 1)
            var curn2 = new Date()
            curn2.setDate(curn.getDate() + 2)
            var curn3 = new Date()
            curn3.setDate(curn.getDate() + 3)
            var curn4 = new Date()
            curn4.setDate(curn.getDate() + 4)

            var tii1 = curn1.toISOString().split('T')[0]
            var tii2 = curn2.toISOString().split('T')[0]
            var tii3 = curn3.toISOString().split('T')[0]
            var tii4 = curn4.toISOString().split('T')[0]


            var tii = curn.toISOString().split('T')[0]
            // var dtt = curn.toISOString().split('T')[0]

            let unixTimestampst = sunsetst;
            let dateObj1 = new Date(unixTimestampst * 1000);
            let utcString1 = dateObj1.toLocaleString();
            let timest = utcString1.slice(-11, -4);
            console.log(timest);

            let unixTimestampsr = sunrisest;
            let dateObj2 = new Date(unixTimestampsr * 1000);
            let utcString2 = dateObj2.toLocaleString();
            let timesr = utcString2.slice(-11, -4);
            console.log(timesr);

            pr.innerHTML = `<span>${prr} bar</span>`
            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `<h1><span>${convertion(tempature)} <sup> o</sup> C</span>`
            description.innerHTML = `<span style="text-transform:uppercase;"><b>${descrip}</b><span>`
            wind.innerHTML = `<span><b>${wndspd} km/h</b><span>`
            humi.innerHTML = `<span><b>${humidity} %</b></span>`
            feels_like.innerHTML = `<span><b>Feels Like : ${convertion(feels)}</b> <sup> o</sup> C</span>`
            sunrise.innerHTML = `<span><b>${timesr} AM<b><span>`
            sunset.innerHTML = `<span><b>${timest} PM<b><span>`
            visibi.innerHTML = `<span><b>${visibc} km</b></span>`
            cur.innerHTML = `<span>${curn}</span>`
            ti.innerHTML = `<span>${tii}</span>`
            // dt.innerHTML = `<span>${dtt}</span>`

            n1.innerHTML = `<span>${tii}</span>`
            t1.innerHTML = `<span>${convertion(t11)} <sup> o</sup> C</span>`
            w1.innerHTML = `<span>${w11} km/h</span>`
            h1.innerHTML = `<span>${h11} %</span>`

            n2.innerHTML = `<span>${tii1}</span>`
            t2.innerHTML = `<span>${convertion(t22)} <sup> o</sup> C</span>`
            w2.innerHTML = `<span>${w22} km/h</span>`
            h2.innerHTML = `<span>${h22} %</span>`

            n3.innerHTML = `<span>${tii2}</span>`
            t3.innerHTML = `<span>${convertion(t33)} <sup> o</sup> C</span>`
            w3.innerHTML = `<span>${w33} km/h</span>`
            h3.innerHTML = `<span>${h33} %</span>`

            n4.innerHTML = `<span>${tii3}</span>`
            t4.innerHTML = `<span>${convertion(t44)} <sup> o</sup> C</span>`
            w4.innerHTML = `<span>${w44} km/h</span>`
            h4.innerHTML = `<span>${h44} %</span>`

            n5.innerHTML = `<span>${tii4}</span>`
            t5.innerHTML = `<span>${convertion(t55)} <sup> o</sup> C</span>`
            w5.innerHTML = `<span>${w55} km/h</span>`
            h5.innerHTML = `<span>${h55} %</span>`
        })

        .catch(err => alert('You entered Wrong city name'))
})

inputval.innerHTML = "";