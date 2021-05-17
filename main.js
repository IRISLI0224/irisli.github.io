function createNavigation(){
   var previous ='';
   var current  = 'Home';

   changePage();
   changeNavigationItem();

   document 
    .querySelectorAll('.navigation__navigationBar__item')
     .forEach(function(element){
            element.onclick = function(event){
            event.preventDefault();
            var nextPage = event.target.getAttribute('href');
            push(nextPage);
            console.log(nextPage);
        };
    });

 function push(nextPage){
    previous = current;
    current  = nextPage;

    changePage();
    changeNavigationItem();
 }

}

function changePage(){
    var className = 'page__active';

    if (previous){
        var previousPage = document.querySelector('#'+previous);
        previousPage.classList.remove(className);
    }
    var page = document.querySelector('#' + current);
    page.classList.add(className);  
}

function changeNavigationItem(){
    var className = 'navbar__item--active';

    if(previous){
        var previousNavItem = document.querySelector('[href="'+ previous +'"]');
        previousNavItem.classList.remove(className);
    }

    var navItem = document.querySelector('[href="'+ current +'"]');
    navItem.classList.add(className); 
}

function main(){
    createNavigation();
}

main();

