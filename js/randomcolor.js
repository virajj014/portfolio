function randomtheme() {
  const myrandomcolor = [
    "#0AD6A0","#FFDE59","#5CE1E6","#FF9656","#7ED957","#00C2CB","#8C52FF","#FF5757","#FF914D"
  ];
  let root = document.documentElement;
  root.style.setProperty("--color-1", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color1", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color2", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color3", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color4", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color5", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color6", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color7", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
  root.style.setProperty("--card-color8", myrandomcolor[Math.floor(Math.random() * myrandomcolor.length)]);
}
window.onload = randomtheme();