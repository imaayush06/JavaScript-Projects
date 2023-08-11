const endDate = prompt("Enter Date&Time Format-29 July 2023 4:10 PM")//"29 July 2023 4:10 PM"


document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000 //to convert miliseconds into seconds we "/1000"
    console.log(diff)
    if(diff<0) return
    //convert into dates
    inputs[0].value = Math.floor(diff / 3600 / 24) 
    //for converting seconds into day we divided by 3600(as 60 min = 60*60seconds) and divided by 24hrs in a day
    //(for remaining hours
    inputs[1].value = Math.floor(diff/3600) % 24     
    //for remaining minutes
    inputs[2].value = Math.floor(diff/60) % 60
    //for remaining seconds
    inputs[3].value = Math.floor(diff) % 60
}

//initial call
clock()

setInterval(
    function (){
        clock()
    },
    1000
)
