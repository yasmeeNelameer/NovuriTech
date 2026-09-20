  var btn = document.getElementById('langBtn');
  var body = document.body;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  btn.addEventListener('click', function(){
    var isAr = body.classList.contains('lang-ar');
    var applySwitch = function(){
      if(isAr){
        body.classList.remove('lang-ar'); body.classList.add('lang-en');
        document.documentElement.setAttribute('lang','en');
        document.documentElement.setAttribute('dir','ltr');
      } else {
        body.classList.remove('lang-en'); body.classList.add('lang-ar');
        document.documentElement.setAttribute('lang','ar');
        document.documentElement.setAttribute('dir','rtl');
      }
    };
    if(reducedMotion){ applySwitch(); return; }
    body.style.opacity = '0';
    setTimeout(function(){
      applySwitch();
      body.style.opacity = '1';
    }, 160);
  });

  var navEl = document.querySelector('nav');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 12){ navEl.classList.add('scrolled'); }
    else{ navEl.classList.remove('scrolled'); }
  }, { passive:true });

  document.addEventListener('DOMContentLoaded', function(){
    var els = document.querySelectorAll('.reveal');
    if(reducedMotion){
      els.forEach(function(el){ el.classList.add('is-in'); });
      return;
    }
    els.forEach(function(el, i){
      setTimeout(function(){ el.classList.add('is-in'); }, 150 + i * 130);
    });
  });
