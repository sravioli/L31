// Vim-like keybinds
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

      default:
        key.claim();
        break;
    }
    key.claim();
  }
})

