var hours=document.getElementById("hours");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
var milliseconds=document.getElementById("milliseconds");
var start=document.getElementById("start");
var reset=document.getElementById("reset");
var stop=document.getElementById("stop");

let [hr,min,sec,msec]=[0,0,0,0];
let timer=false

start.addEventListener('click',()=>
    {
        timer=true;
        stopWatch();
    });

reset.addEventListener('click',()=>
{
    timer=false;
    [hr,min,sec,msec]=[0,0,0,0]
    hours.textContent="00";
    minutes.textContent="00";
    seconds.textContent="00";
    milliseconds.textContent="00";
});

stop.addEventListener('click',()=>
{
    timer=false;
})

function stopWatch()
{
    if(timer!=false)
    {
        msec++;
        if(msec==100)
        {
            msec=0;
            sec++;
        }
        if(sec==60)
        {
            sec=0;
            min++;
        }
        if(min==60)
        {
            min=0;
            sec=0;
            hr++;
        }

        let hrs=hr<10?"0"+hr:hr;
        let mins=min<10?"0"+min:min;
        let secs=sec<10?"0"+sec:sec;
        let msecs=msec<10?"0"+msec:msec;

        hours.textContent=hrs;
        minutes.textContent=mins;
        seconds.textContent=secs;
        milliseconds.textContent=msecs;
        
        setTimeout(stopWatch,10);
    }
}