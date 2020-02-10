// console.log('testing');
/*==============================================================================
  Setting up Spoonacular server response - f308c68870684766ae3372174c399412
==============================================================================*/
const myApiKey = "apiKey=f308c68870684766ae3372174c399412";

const fetchRecipe = () => {
  $('form').on('submit', (event) => {
    event.preventDefault();
    let selection = document.activeElement.getAttribute('value');
    const userInput = $('.search-box').val()
    const userSearch = `&query=${userInput}&number=10`;
    console.log(userSearch);
    const myData = $.ajax({
      url: "https://api.spoonacular.com/recipes/search?" + myApiKey + userSearch
    }).then(
      (data)=>{
        for (let i = 0; i < 10; i++) {
          let $returnItems = $('<li>')
          $('.food-description').append($returnItems)
          $returnItems.addClass('item-container')
          let $recipe = $('<a>').text(data.results[i].title).attr('href', '#tab-2')
          $recipe.addClass('top-recipes')
          $returnItems.append($recipe)
        }

/*==============================================================================
  Need to get the id from this ajax request and add another ajax request to add the id to a search based on a click, showing up in tabs two and three.

  ingredients
  https://api.spoonacular.com/recipes/{id}/ingredientWidget.json

  price
  https://api.spoonacular.com/recipes/{id}/priceBreakdownWidget.json
==============================================================================*/

        console.log("good");
        console.log(data);
      },
      ()=>{
        console.log('bad');
      }
    );
  })
}



/*==============================================================================
  Tab Panel
==============================================================================*/

const searchTabs = () => {
  $('.tab-list').each(function(){
    let $this = $(this);
    let $tab = $this.find('li.active');
    let $link = $tab.find('a');
    let $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function(e) {
      console.log('clicked');
      e.preventDefault();
      let $link = $(this);
      let id = this.hash;

      if (id && !$link.is('.active')) {
        $panel.removeClass('active');
        $tab.removeClass('active');

        $panel = $(id).addClass('active');
        $tab = $link.parent().addClass('active');
      }
    });
  });
}

/*==============================================================================
  Onload functions
==============================================================================*/
$(() => {
  fetchRecipe();
  searchTabs();
})
