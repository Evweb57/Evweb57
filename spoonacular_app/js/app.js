// console.log('testing');
/*==============================================================================
  Setting up Spoonacular server response - f308c68870684766ae3372174c399412
==============================================================================*/
const myApiKey = "apiKey=f308c68870684766ae3372174c399412";
let userInput = "&query=cheese&number=2";

const fetchRecipe = () => {
  const myData = $.ajax({
    url: "https://api.spoonacular.com/recipes/search?" + myApiKey + userInput
  }).then(
    (data)=>{
      // $('#test').html(data.)
      console.log("good");
      console.log(data);
    },
    ()=>{
      console.log('bad');
    }
  );
}

/*==============================================================================
  Onload functions
==============================================================================*/
$(() => {
  // fetchRecipe();
})
