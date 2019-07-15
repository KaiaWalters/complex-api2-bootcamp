// api that return the target alleles of a mouse, its colony, and the procedure it underwent,
//dictionary provides a definition of the procedure for the user to view.
//Css involves images of cute mice.
var url = `http://www.ebi.ac.uk/mi/impc/solr/genotype-phenotype/select?q=*:*&rows=10&wt=json&indent=1`

document.querySelector("button").addEventListener('click',function(){

fetch(url)
  .then(res => res.json())
  .then(response => {
   console.log(response.value)
   document.getElementById("bang").innerText = `${response.value}`
   //document.getElementById("temp").innerText = `${newTemp}`
   //document.getElementById("sky").innerText = `${response.weather.description}`
  })
});
