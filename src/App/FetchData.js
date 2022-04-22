var xhttp = new XMLHttpRequest()
var path = "https://www.metaweather.com/api/location/search/?query=london"

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(xhttp.responseText)
    }
}

xhttp.open("get",path,true)
xhttp.send()
