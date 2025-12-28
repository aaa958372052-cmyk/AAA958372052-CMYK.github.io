/* =========================
   Facebook Pixel
========================= */
!function(f,b,e,v,n,t,s){
  if(f.fbq)return;
  n=f.fbq=function(){
    n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
  };
  if(!f._fbq)f._fbq=n;
  n.push=n;
  n.loaded=!0;
  n.version='2.0';
  n.queue=[];
  t=b.createElement(e); t.async=!0;
  t.src=v;
  s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s);
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '873307421916681');
fbq('track', 'PageView');

/* =========================
   CTA Buttons
========================= */
function addLine(){
  fbq('track', 'Contact', { channel: 'line' });
  window.open("https://line.me/ti/p/~zv56", "_blank");
}

function addTg(){
  fbq('track', 'Contact', { channel: 'telegram' });
  window.open("https://deadss.com/j/lfstGz9t", "_blank");
}
