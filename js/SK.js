function OnClickHome(event,EventName){

    let buttons = document.getElementById(1);
    // alert("Home");
    console.log(buttons);
    let content = document.getElementsByClassName('tabcontent');
    console.log(content.length)
    for (let index = 0; index < content.length; index++) {
        let element = content[index];
        element.style.display="none";
        
    }
    document.getElementById(EventName).style.display="block";

}
function displaytime() {

    let time = new Date();
    // let time = new time();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displaytime, 1000);