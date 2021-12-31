// simple demo driver
setBar = function(percent) {
    document.querySelector('#percentage').textContent = (Math.floor(percent) + '%');
  document.querySelector('#loadingbar').style.transform = 'translateX(-' + (100 - percent) + '%)'
//   = ('transform', 'translateX(-' + (100 - percent) + '%)')
}
  
  let percent = 0;
  

setBar(30)
setInterval(() => {
    setBar(++percent)
}, 300000);