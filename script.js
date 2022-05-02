  function shuffle(array){
            var currentIndex = array.length,
            randomIndex;
            while(0 !== currentIndex){
              randomIndex= Math.floor(Math.random() * currentIndex);
              currentIndex--;
              [array[currentIndex],array[randomIndex]] = [
                    array[currentIndex],array[currentIndex],];
            }
            return array;
}
function spin(){
  wheel.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";


  let Ac= shuffle([1890,2250,2610]);
  let Ab= shuffle([1850,2210,2570]);
  let Zonk= shuffle([1770,2130,2490]);
  let Ad= shuffle([1810,2170,2530]);
  let Ae= shuffle([1750,2110,2470]);
  let Af= shuffle([1630,1990,2350]);
  let Ag= shuffle([1570,1930,2290]);

  let results = shuffle ([
    Ac[0],
    Ab[0],
    Zonk[0],
    Ad[0],
    Ae[0],
    Af[0],
    Ag[0],
      
  ]);
  if(Ac.includes (results[0])) SelectedItem = "RP. 5.000";

if(Ab.includes (results[0])) SelectedItem= "RP. 15.000";

if (Zonk.includes (results[0])) SelectedItem ="yhahaha kasian";

if (Ad.includes (results[0])) SelectedItem="RP. 25 .000";

if (Ae.includes (results[0])) SelectedItem= "- RP. 25.000";

if (Af.includes (results[0])) SelectedItem= "RP. 50.000";

if (Ag.includes (results[0])) SelectedItem= "- RP. 50.000";

box.style.setProperty("transition", "all ease 5s");

box.style.transform = "rotate(" + results[0] + "deg)";

element.classList.remove("animate");

setTimeout(function(){

  element.classList.add("animate");

}, 5000);

setTimeout(function(){
  gg.play();
 Swal.fire({
  title: 'YOU WON ' +  SelectedItem,
  width: 600,
  padding: '3em',
  color: '#716add',
  background: 'black',
  backdrop: `
    rgba(0,0,123,0.4)
    url("tenor.gif")
    left top
    no-repeat
  `
})
},5500)

setTimeout(function(){

box.style.setProperty("transition", "initial"); box.style.transform = "rotate (90deg)";

}, 6000);


}