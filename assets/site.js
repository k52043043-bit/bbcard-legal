(function(){
  var root=document.documentElement;
  function setLang(l,save){
    root.setAttribute('data-lang',l);root.lang=l==='zh'?'zh-Hant':'en';
    var t=document.querySelector('title');
    if(t){var v=t.getAttribute('data-'+l);if(v)document.title=v}
    var bs=document.querySelectorAll('.langsw button');
    for(var i=0;i<bs.length;i++)bs[i].setAttribute('aria-pressed',bs[i].getAttribute('data-set-lang')===l?'true':'false');
    if(save){try{localStorage.setItem('bb-lang',l)}catch(e){}}
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-set-lang]');
    if(b)setLang(b.getAttribute('data-set-lang'),true);
  });
  setLang(root.getAttribute('data-lang')==='en'?'en':'zh',false);
  if(window.matchMedia&&matchMedia('(max-width:900px)').matches){
    var ds=document.querySelectorAll('details.toc');
    for(var i=0;i<ds.length;i++)ds[i].open=false;
  }
})();
