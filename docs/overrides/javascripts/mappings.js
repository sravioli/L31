// Vim-like keybinds

// get current anchor number
var is_anchor_clicked = false;
var curr_anchornr = 0;
let headerlinks = document.getElementsByClassName("headerlink");
function getClickedAnchor() {
  for (let i = 0; i < headerlinks.length; i++) {
    document.getElementsByClassName("headerlink")[i]
      .addEventListener("click", function () {
        is_anchor_clicked = true;
        curr_anchornr = i;
      })
  }
}
setInterval(getClickedAnchor, 2000);

keyboard$.subscribe(function(key) {
  if (key.mode === "global") {
    switch (key.type) {
      case "h":
        document.querySelector("a[rel=prev]")?.click(); // check null
        break;

      case "l":
        document.querySelector("a[rel=next]")?.click(); // check null
        break;

      case "j":
        window.scrollBy(0, 20);
        break;

      case "k":
        window.scrollBy(0, -20);
        break;

      case "g":
        window.scrollTo(0, -document.body.clientHeight);
        break;

      case "G":
        window.scrollTo(0, document.body.clientHeight);
        break;

      case "d":
        window.scrollBy(0, window.innerHeight);
        break;
      
      case "u":
        window.scrollBy(0, -window.innerHeight);
        break;

      case "H":
        document.querySelector("[data-md-component=logo]")?.click();
        break;
      
      case "J":
        curr_anchornr = 
          (curr_anchornr >= headerlinks.length - 1) ? 0 : curr_anchornr + 1;
        headerlinks[curr_anchornr].click();
        break;

      case "K":
        curr_anchornr = 
          (curr_anchornr <= 0) ? headerlinks.length - 1 : curr_anchornr - 1;
        headerlinks[curr_anchornr].click();
        break;

      default:
        key.claim();
        break;
    }
    key.claim();
  }
})

