function manage(){
    let date = new Date();
    var time = document.getElementById("time");
    var setDate = document.getElementById("date");
    time.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    setDate.innerHTML = date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear();
}

onload = manage();
setInterval(manage,100);
