const bunga=7.75,admin=3575000,fid=1900000,provPct=1,asuPct=2.675;
const ids=['off','bbn','kar','otr'];
const $=id=>document.getElementById(id);
const num=v=>Number((v||'').replace(/\./g,''))||0;
const rp=n=>'Rp '+Math.round(n).toLocaleString('id-ID');
ids.forEach(id=>$(id).addEventListener('input',e=>{let v=e.target.value.replace(/\D/g,'');e.target.value=v?Number(v).toLocaleString('id-ID'):'';update();}));
function update(){let on=num($('off').value)+num($('bbn').value)+num($('kar').value);$('on').textContent=rp(on);$('diskon').textContent=rp(num($('otr').value)-on);}
function hitung(){let on=num(off.value)+num(bbn.value)+num(kar.value),otr=num($('otr').value),dp=otr*(+$('dp').value)/100,pokok=otr-dp,bTot=pokok*(bunga/100)*((+$('tenor').value)/12),ang=(pokok+bTot)/(+$('tenor').value),asu=otr*asuPct/100,prov=pokok*provPct/100,awal=dp+ang+asu+admin+fid+prov,setor=awal-(otr-on);hasil.innerHTML=`<div class='big'>DP SETOR<br>${rp(setor)}</div><hr><div class='big' style='color:#c00'>ANGSURAN<br>${rp(ang)}</div>`}
update();