const menuBtn=document.getElementById('menuBtn'),menu=document.getElementById('menu'),settingsBtn=document.getElementById('settingsBtn'),settingsMenu=document.getElementById('settingsMenu');
menuBtn?.addEventListener('click',()=>menu.classList.toggle('open'));
settingsBtn?.addEventListener('click',(e)=>{e.stopPropagation();settingsMenu.classList.toggle('open')});
document.addEventListener('click',(e)=>{if(settingsMenu&&!settingsMenu.contains(e.target)&&!settingsBtn.contains(e.target))settingsMenu.classList.remove('open')});
const copyPix=document.getElementById('copyPix'),pixKey=document.getElementById('pixKey');
copyPix?.addEventListener('click',async()=>{let k=pixKey.textContent.trim();try{await navigator.clipboard.writeText(k);copyPix.textContent='PIX copiado!';setTimeout(()=>copyPix.textContent='Copiar chave PIX',1600)}catch{alert('Chave PIX: '+k)}});
document.getElementById('year').textContent=new Date().getFullYear();