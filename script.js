// api that return the target alleles of a mouse, its colony, and the procedure it underwent,
//dictionary provides a definition of the procedure for the user to view.
//Css involves images of cute mice.
var url = `http://www.ebi.ac.uk/mi/impc/solr/genotype-phenotype/select?q=*:*&rows=10&wt=json&indent=1`;
var corsProxy = `https://cors-anywhere.herokuapp.com/`;
var urlD = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key`;

document.querySelector("button").addEventListener('click',function(){
//corsProxy+url
//`${corsProxy}${url}`

//go back to mouse consortium and change the end point so you can get more mice
fetch(`${corsProxy}${url}`)
  .then(res => res.json())
  .then(data => {

  data.response.docs.forEach((el, i) => {
   console.log(data.response)
   console.table(data.response.docs)
   document.getElementById("procedure").innerText = `${el.procedure_name}`
   document.getElementById("allele").innerText = `${el.allele_name}`
   document.getElementById("sex").innerText = `${el.sex}`
   document.getElementById("lifeStage").innerText = `${el.life_stage_name}`

   //document.getElementById("bang").innerText = `${data.response.numFound}`
   getDefinition(el.procedure_name)
 })
})

});

//Dictionary API
function getDefinition(term){
fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+term+'?key=4855a37c-1179-4b6a-8580-0449cdb89b36')
  .then(response => response.json())
  .then(response => {
   let definition = response;
   console.log(definition)
   definitionToDom(definition)

  })
}

function definitionToDom (description) {
  let text = description[0].shortdef[0] + " " +description[0].shortdef[1]
  document.getElementById("definition").innerText = text
  //document.getElementById('procedure').innerHTML = description[1].shortdef[2];
  }
