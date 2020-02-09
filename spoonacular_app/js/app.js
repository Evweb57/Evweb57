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
  Tab Panel
==============================================================================*/

$('.tab-list').each(function(){
  var $this = $(this);
  var $tab = $this.find('li.active');
  var $link = $tab.find('a');
  var $panel = $($link.attr('href'));

  $this.on('click', '.tab-control', function(e) {
    console.log('clicked');
    e.preventDefault();
    var $link = $(this);
    var id = this.hash;

    if (id && !$link.is('.active')) {
      $panel.removeClass('active');
      $tab.removeClass('active');

      $panel = $(id).addClass('active');
      $tab = $link.parent().addClass('active');
    }
  });
});

/*==============================================================================
  Onload functions
==============================================================================*/
$(() => {
  // fetchRecipe();
})
