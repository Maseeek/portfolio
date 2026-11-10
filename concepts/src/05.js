const projectDialog=document.getElementById('project-dialog'),briefDialog=document.getElementById('brief-dialog'),talkDialog=document.getElementById('talk-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const p=projects[button.dataset.project];
  if(!p)return;
  document.getElementById('dialog-title').textContent=p.name;
  document.getElementById('dialog-kind').textContent=p.kind;
  document.getElementById('dialog-desc').textContent=p.description;
  document.getElementById('dialog-stack').textContent=p.stack;
  document.getElementById('dialog-note').textContent=p.note;
  const image=document.getElementById('dialog-image');
  if(p.image){image.src=p.image;image.alt=p.name+' live application screenshot';image.hidden=false;}
  else{image.removeAttribute('src');image.alt='';image.hidden=true;}
  const repo=document.getElementById('dialog-repo');
  if(repo){
    if(p.repo){repo.href=p.repo;repo.hidden=false;}else{repo.hidden=true;}
  }
  const live=document.getElementById('dialog-live');
  if(p.live){live.href=p.live;live.hidden=false;}else{live.hidden=true;}
  const url=document.getElementById('dialog-url');
  if(p.url){url.href=p.url;url.hidden=false;}else{url.hidden=true;}
  projectDialog.showModal();
}));
document.querySelectorAll('[data-open-brief]').forEach(b=>b.addEventListener('click',()=>briefDialog.showModal()));
document.querySelectorAll('[data-open-talk]').forEach(b=>b.addEventListener('click',()=>talkDialog.showModal()));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
[projectDialog,briefDialog,talkDialog].forEach(d=>{
  if(!d)return;
  d.addEventListener('click',e=>{
    if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}
  });
});

/* Scroll-linked Option 01 fluid meniscus fill + Pressurized Hover / Mobile Auto-Full + Click Burst/Drain */
const brandLink=document.querySelector('[data-brand-scroll]');
let isBursting=false;
function updateBrandScrollFill(){
  if(isBursting)return;
  const maxScroll=Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress=Math.max(0, Math.min(1, window.scrollY / maxScroll));
  document.documentElement.style.setProperty('--m-fill-progress', progress.toFixed(4));
  if(brandLink){
    const isFull = progress >= 0.92;
    brandLink.setAttribute('data-m-full', String(isFull));
    /* On touch/mobile devices (no hover), automatically show the subtle pressurized state when full at bottom */
    if(window.matchMedia('(hover: none), (pointer: coarse)').matches){
      brandLink.classList.toggle('is-pressurized', isFull);
    }
  }
}
window.addEventListener('scroll', updateBrandScrollFill, {passive:true});
window.addEventListener('resize', updateBrandScrollFill, {passive:true});
updateBrandScrollFill();

if(brandLink){
  brandLink.addEventListener('click', e=>{
    e.preventDefault();
    isBursting=true;
    brandLink.classList.remove('is-pressurized');
    brandLink.classList.add('is-bursting');
    brandLink.setAttribute('data-m-full', 'false');
    document.documentElement.style.setProperty('--m-fill-progress', '0');
    window.scrollTo({top:0, behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    setTimeout(()=>{
      brandLink.classList.remove('is-bursting');
      isBursting=false;
      updateBrandScrollFill();
    }, 720);
  });
}

/* Do It signed-in multi-view switcher + Dark/Light app UI synced with site theme */
let doitView='today',doitMode='dark';
const doitImg=document.querySelector('[data-doit-img]'),doitModeBtn=document.querySelector('[data-doit-mode]');
function renderDoitStage(){
  if(doitImg&&appGallery.doit[doitView]&&appGallery.doit[doitView][doitMode]){
    doitImg.src=appGallery.doit[doitView][doitMode];
  }
  if(doitModeBtn){
    doitModeBtn.setAttribute('aria-pressed',String(doitMode==='dark'));
    doitModeBtn.textContent=doitMode==='dark'?'◐ Dark UI':'☀ Light UI';
  }
}
document.querySelectorAll('[data-doit-view]').forEach(btn=>btn.addEventListener('click',()=>{
  doitView=btn.dataset.doitView;
  document.querySelectorAll('[data-doit-view]').forEach(b=>b.classList.toggle('is-on',b===btn));
  renderDoitStage();
}));
if(doitModeBtn){
  doitModeBtn.addEventListener('click',()=>{
    doitMode=doitMode==='dark'?'light':'dark';
    renderDoitStage();
  });
}

/* Website Dark / Light theme toggle — automatically syncs Do It showcase theme */
const rootEl=document.documentElement,themeBtn=document.querySelector('[data-theme-toggle]'),themeLabel=document.querySelector('[data-theme-label]');
function applySiteTheme(theme){
  rootEl.setAttribute('data-theme',theme);
  if(themeLabel)themeLabel.textContent=theme==='dark'?'Light':'Dark';
  doitMode=theme==='dark'?'dark':'light';
  renderDoitStage();
}
if(themeBtn){
  themeBtn.addEventListener('click',()=>{
    const next=rootEl.getAttribute('data-theme')==='dark'?'light':'dark';
    applySiteTheme(next);
  });
}

/* Nothing But Net multi-view switcher */
const nbnImg=document.querySelector('[data-nbn-img]');
document.querySelectorAll('[data-nbn-view]').forEach(btn=>btn.addEventListener('click',()=>{
  const v=btn.dataset.nbnView;
  document.querySelectorAll('[data-nbn-view]').forEach(b=>b.classList.toggle('is-on',b===btn));
  if(nbnImg&&appGallery.nbn[v])nbnImg.src=appGallery.nbn[v];
}));

/* Inbuilt Code HUD overlay toggles (collapsed by default on mobile so screenshots stay clean) */
if(window.matchMedia('(max-width: 760px)').matches){
  document.querySelectorAll('.code-hud').forEach(hud=>hud.setAttribute('hidden',''));
  document.querySelectorAll('[data-code-toggle]').forEach(btn=>btn.setAttribute('aria-pressed','false'));
}
document.querySelectorAll('[data-code-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
  const target=btn.dataset.codeToggle;
  const hud=document.querySelector('[data-code-hud="'+target+'"]');
  if(!hud)return;
  const show=hud.hasAttribute('hidden');
  hud.toggleAttribute('hidden',!show);
  btn.setAttribute('aria-pressed',String(show));
}));

/* Mobile progressive disclosure toggles (NEOS demo, Bento extra repos, Full 12 module marks) */
document.querySelectorAll('[data-mob-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
  const targetClass=btn.dataset.mobToggle;
  const container=btn.closest('.'+targetClass)||document.getElementById(targetClass);
  if(!container)return;
  const open=container.classList.toggle('mob-expanded');
  btn.textContent=open?btn.dataset.less:btn.dataset.more;
}));

/* Copy email / phone buttons */
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
  const val=button.dataset.copy,label=button.dataset.label||'Copied.';
  const container=button.closest('.contact-tools,.talk-copy-bar')||document;
  const status=container.querySelector('.copy-status');
  try{await navigator.clipboard.writeText(val);if(status)status.textContent=label;}
  catch{if(status)status.textContent=val;}
}));

const workTrack=document.getElementById('work-track'),workSlides=[...document.querySelectorAll('.work-slide')];let workIndex=0,workTarget=null;
function updateWork(i){
  workIndex=i;
  const total=workSlides.length;
  document.getElementById('work-position').textContent=String(i+1).padStart(2,'0')+' / '+String(total).padStart(2,'0');
  document.getElementById('work-progress').style.width=((i+1)/total*100)+'%';
}
function goWork(i){
  i=(i+workSlides.length)%workSlides.length;
  updateWork(i);
  workTarget=Math.min(workSlides[i].offsetLeft-workSlides[0].offsetLeft,workTrack.scrollWidth-workTrack.clientWidth);
  workTrack.scrollTo({left:workTarget,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
document.getElementById('work-next').addEventListener('click',()=>goWork(workIndex+1));
document.getElementById('work-prev').addEventListener('click',()=>goWork(workIndex-1));
workTrack.addEventListener('pointerdown',()=>workTarget=null);
workTrack.addEventListener('wheel',()=>workTarget=null,{passive:true});
workTrack.addEventListener('scroll',()=>{
  if(workTarget!==null){if(Math.abs(workTrack.scrollLeft-workTarget)>2)return;workTarget=null;}
  let nearest=0,distance=Infinity;
  workSlides.forEach((s,i)=>{const d=Math.abs(s.offsetLeft-workSlides[0].offsetLeft-workTrack.scrollLeft);if(d<distance){distance=d;nearest=i;}});
  updateWork(nearest);
},{passive:true});
workTrack.addEventListener('keydown',e=>{
  if(e.target!==workTrack)return;
  if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();goWork(workIndex+(e.key==='ArrowRight'?1:-1));}
  if(e.key==='Home'||e.key==='End'){e.preventDefault();goWork(e.key==='Home'?0:workSlides.length-1);}
});
updateWork(0);

const neosToggle=document.querySelector('[data-neos-toggle]'),neosArt=document.querySelector('.neos-art');
if(neosToggle&&neosArt){
  neosToggle.addEventListener('click',()=>{
    const on=neosArt.classList.toggle('overridden');
    neosToggle.setAttribute('aria-pressed',String(on));
    neosToggle.textContent=on?'Reset to AI suggestion':'Simulate editor override';
    const chip=document.querySelector('[data-neos-chip]'),prev=document.querySelector('[data-neos-prev]'),status=document.querySelector('[data-neos-status]'),banner=document.querySelector('[data-neos-banner]');
    if(chip){chip.textContent=on?'✓ 100% Cotton (Editor)':'✦ Cotton Mix';chip.className='nf-chip '+(on?'green':'blue');}
    if(prev)prev.hidden=!on;
    if(status)status.textContent=on?'Editor override · Implicitly queued FeedbackOverride':'Shield 84% · Pending AI suggestion';
    if(banner)banner.textContent=on?'1 override captured implicitly — ready for ApprovedWithEdits publish':'Shield AI generated values for 3 fields — review required before publishing';
  });
}

function updateClock(){
  try{
    const now=new Date();
    const t=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',hour12:false}).format(now);
    const h=parseInt(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',hour12:false}).format(now),10);
    document.querySelectorAll('[data-uk-time]').forEach(el=>el.textContent=t);
    const mood=document.querySelector('[data-uk-mood]');
    if(mood)mood.textContent=(h>=23||h<7)?'probably asleep, and I\'ll reply in the morning':(h<18?'probably at my desk':'probably on a basketball court or building something');
  }catch{}
}
updateClock();
setInterval(updateClock,30000);

if('IntersectionObserver' in window){
  const ro=new IntersectionObserver(entries=>{
    entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');ro.unobserve(en.target);}});
  },{threshold:0.12});
  document.querySelectorAll('.reveal,.grades').forEach(el=>ro.observe(el));

  const navLinks=[...document.querySelectorAll('[data-nav]')];
  const so=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        navLinks.forEach(a=>a.toggleAttribute('aria-current',a.dataset.nav===en.target.id));
      }
    });
  },{rootMargin:'-40% 0px -50% 0px'});
  ['placement','work','opensource','foundations','about'].forEach(id=>{const el=document.getElementById(id);if(el)so.observe(el);});
}else{
  document.querySelectorAll('.reveal,.grades').forEach(el=>el.classList.add('in'));
}
