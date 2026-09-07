const menuBtn=document.getElementById('menuBtn');
const menu=document.getElementById('menu');
const settingsBtn=document.getElementById('settingsBtn');
const settingsMenu=document.getElementById('settingsMenu');

menuBtn?.addEventListener('click',()=>menu.classList.toggle('open'));
settingsBtn?.addEventListener('click',(e)=>{
  e.stopPropagation();
  settingsMenu.classList.toggle('open');
});
document.addEventListener('click',(e)=>{
  if(settingsMenu && settingsBtn && !settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)){
    settingsMenu.classList.remove('open');
  }
});
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
