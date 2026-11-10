/* iOS Safari only applies :active (press feedback) when a touch listener exists. */
document.addEventListener('touchstart',()=>{},{passive:true});
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
/* Brief, contact and project modals: morph out of the button that opened them and shrink back into it on close. */
function morphDialog(d,triggerSelector){
  if(!d)return;
  const nativeShow=HTMLDialogElement.prototype.showModal,nativeClose=HTMLDialogElement.prototype.close;
  const RM=matchMedia('(prefers-reduced-motion: reduce)'),SHEET=matchMedia('(max-width: 760px)');
  const EASE_OUT='cubic-bezier(0.23, 1, 0.32, 1)',EASE_DRAWER='cubic-bezier(0.32, 0.72, 0, 1)',EASE_SETTLE='cubic-bezier(0.4, 0, 0.2, 1)';
  let trigger=null,morphed=false,sheet=false,dragY=0,closing=false,anims=[];
  const run=(el,kf,o)=>{try{const a=el.animate(kf,{fill:'both',...o});anims.push(a);return a}catch(_){return null}};
  const stop=()=>{anims.forEach(a=>a.cancel());anims=[]};
  const done=list=>Promise.all(list.filter(Boolean).map(a=>a.finished.catch(()=>{})));
  const backdrop=(from,to,duration)=>run(d,[{opacity:from},{opacity:to}],{duration,easing:EASE_OUT,pseudoElement:'::backdrop'});
  const inView=el=>{if(!el)return false;const r=el.getBoundingClientRect();return r.width>0&&r.bottom>0&&r.top<innerHeight};
  function shapes(){
    const a=d.getBoundingClientRect(),b=trigger.getBoundingClientRect();
    const dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height/2-(a.top+a.height/2);
    const ix=Math.max(0,(a.width-b.width)/2),iy=Math.max(0,(a.height-b.height)/2);
    return[
      {transform:`translate(${dx}px,${dy}px)`,clipPath:`inset(${iy}px ${ix}px round ${Math.min(b.height/2,parseFloat(getComputedStyle(trigger).borderTopLeftRadius)||b.height/2)}px)`,backgroundColor:/^rgba\(.*,\s*0\)$|^transparent$/.test(getComputedStyle(trigger).backgroundColor)?getComputedStyle(d).backgroundColor:getComputedStyle(trigger).backgroundColor},
      {transform:'translate(0px,0px)',clipPath:`inset(0px 0px round ${getComputedStyle(d).borderTopLeftRadius})`,backgroundColor:getComputedStyle(d).backgroundColor}
    ];
  }
  function enter(){
    stop();
    if(RM.matches){backdrop(0,1,150);run(d,[{opacity:0},{opacity:1}],{duration:150,easing:'ease'});}
    else if(sheet){
      backdrop(0,1,300);
      run(d,[{transform:'translateY(100%)'},{transform:'translateY(0)'}],{duration:500,easing:EASE_DRAWER});
    }else if(morphed){
      backdrop(0,1,300);
      run(d,shapes(),{duration:440,easing:EASE_DRAWER});
      [...d.children].forEach(el=>run(el,[{opacity:0},{opacity:1}],{duration:220,delay:170,easing:EASE_OUT}));
    }else{
      backdrop(0,1,240);
      run(d,[{opacity:0,transform:'translateY(8px) scale(0.97)'},{opacity:1,transform:'none'}],{duration:240,easing:EASE_OUT});
    }
    const entrance=anims.slice();
    done(entrance).then(()=>{if(!closing&&entrance.length&&entrance.every(a=>a.playState==='finished')){entrance.forEach(a=>a.cancel());anims=anims.filter(a=>!entrance.includes(a))}});
  }
  function exit(){
    // Closed mid-entrance: reverse what is running so it retracts from where it is.
    const live=anims.filter(a=>a.playState==='running');
    if(live.length){live.forEach(a=>a.reverse());return done(live)}
    stop();
    if(RM.matches)return done([backdrop(1,0,120),run(d,[{opacity:1},{opacity:0}],{duration:120,easing:'ease'})]);
    if(sheet){
      // Slide back down from wherever the finger left it.
      const from=dragY;d.style.transform='';
      return done([backdrop(1,0,300),run(d,[{transform:`translateY(${from}px)`},{transform:'translateY(100%)'}],{duration:300,easing:EASE_DRAWER})]);
    }
    if(morphed&&inView(trigger)){
      // Mirror of the entrance: content fades, the shell glides back into the button, takes on its colour,
      // and in the last ~110ms crossfades into the real button so its label doesn't pop back in.
      const[collapsed,open]=shapes(),D=360,geo=k=>({transform:k.transform,clipPath:k.clipPath});
      trigger.style.visibility='';
      return done([
        ...[...d.children].map(el=>run(el,[{opacity:1},{opacity:0}],{duration:180,easing:'ease'})),
        run(d,[geo(open),geo(collapsed)],{duration:D,easing:EASE_SETTLE}),
        run(d,[{backgroundColor:open.backgroundColor},{backgroundColor:collapsed.backgroundColor}],{duration:D-126,delay:90,easing:'ease'}),
        run(d,[{opacity:1},{opacity:0}],{duration:108,delay:D-108,easing:'linear'}),
        run(trigger,[{opacity:0},{opacity:1}],{duration:126,delay:D-126,easing:'linear'}),
        backdrop(1,0,D-36)
      ]);
    }
    return done([backdrop(1,0,160),run(d,[{opacity:1,transform:'none'},{opacity:0,transform:'scale(0.98)'}],{duration:160,easing:EASE_OUT})]);
  }
  document.addEventListener('click',e=>{const t=e.target.closest(triggerSelector);if(t)trigger=t},true);
  d.showModal=function(){
    if(this.open)return;
    nativeShow.call(this);
    sheet=!RM.matches&&SHEET.matches;
    morphed=!sheet&&!RM.matches&&inView(trigger);
    if(morphed)trigger.style.visibility='hidden';
    enter();
  };
  d.close=function(){
    if(!this.open||closing)return;
    closing=true;
    // Safety net: never leave the dialog stuck if animation promises don't settle (e.g. tab hidden mid-close).
    Promise.race([exit(),new Promise(r=>setTimeout(r,700))]).then(()=>{if(this.open)nativeClose.call(this);reset()});
  };
  d.addEventListener('cancel',e=>{e.preventDefault();d.close()});
  // Swipe-to-close for the phone bottom sheet. Drags start only when pulling down with the content scrolled to the top,
  // so normal scrolling inside the sheet is untouched. Release past 25% of the height or with a quick flick to close.
  let t0=null;
  const scrollerAt=el=>{for(;el&&el!==d.parentNode;el=el.parentElement){const cs=getComputedStyle(el);if(/(auto|scroll)/.test(cs.overflowY)&&el.scrollHeight>el.clientHeight)return el}return null};
  d.addEventListener('touchstart',e=>{
    if(!sheet||closing||e.touches.length>1||anims.some(a=>a.playState==='running'))return;
    const sc=scrollerAt(e.target);
    t0={y:e.touches[0].clientY,x:e.touches[0].clientX,t:performance.now(),sc,dragging:false,lastY:0,lastT:performance.now(),v:0};
  },{passive:true});
  d.addEventListener('touchmove',e=>{
    if(!t0)return;
    const dy=e.touches[0].clientY-t0.y,dx=e.touches[0].clientX-t0.x;
    if(!t0.dragging){
      if(Math.abs(dy)<6&&Math.abs(dx)<6)return;
      if(dy>0&&Math.abs(dy)>Math.abs(dx)&&!(t0.sc&&t0.sc.scrollTop>0)){t0.dragging=true;t0.y=e.touches[0].clientY;d.classList.add('is-dragging');}
      else{t0=null;return;}
    }
    e.preventDefault();
    const raw=e.touches[0].clientY-t0.y,now=performance.now();
    // Rubber-band if pulled above the resting position.
    dragY=raw<0?-8*Math.log1p(-raw/8):raw;
    t0.v=(dragY-t0.lastY)/Math.max(1,now-t0.lastT);t0.lastY=dragY;t0.lastT=now;
    d.style.transform=`translateY(${dragY}px)`;
  },{passive:false});
  const endDrag=()=>{
    if(!t0)return;const st=t0;t0=null;
    if(!st.dragging)return;
    d.classList.remove('is-dragging');
    if(dragY>d.offsetHeight*0.25||(st.v>0.11&&dragY>10)){d.close();return}
    const from=dragY;dragY=0;d.style.transform='';
    const a=run(d,[{transform:`translateY(${from}px)`},{transform:'translateY(0)'}],{duration:400,easing:EASE_DRAWER});
    if(a)a.finished.then(()=>{a.cancel();anims=anims.filter(x=>x!==a)}).catch(()=>{});
  };
  d.addEventListener('touchend',endDrag);
  d.addEventListener('touchcancel',endDrag);
  function reset(){stop();if(trigger)trigger.style.visibility='';trigger=null;morphed=false;sheet=false;dragY=0;d.style.transform='';d.classList.remove('is-dragging');closing=false}
  // Backup for closes that bypass d.close() (e.g. a forced Esc); ignore a late event if it has been reopened since.
  d.addEventListener('close',()=>{if(!d.open)reset()});
}
morphDialog(briefDialog,'[data-open-brief]');
morphDialog(talkDialog,'[data-open-talk]');
morphDialog(projectDialog,'[data-project]');
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

/* Do It & Nothing But Net multi-view switchers + Dark/Light app UI synced with site theme + Mobile-aware screenshots */
const mobQuery=window.matchMedia?window.matchMedia('(max-width: 760px)'):null;
function pickStageUrl(entry, mode){
  if(!entry)return '';
  if(typeof entry==='string')return entry;
  const isMob=mobQuery&&mobQuery.matches;
  if(isMob){
    const mobKey='mob_'+mode;
    if(entry[mobKey])return entry[mobKey];
  }
  return entry[mode]||entry.dark||'';
}

let themeSwitching=false;
/* Crossfade an app screenshot to a new src: the old frame fades out on top once the new one has decoded. */
function swapStageImg(img,url){
  if(!img||!url||img.getAttribute('src')===url)return;
  const frame=img.parentElement;
  const token=img._swapToken=(img._swapToken||0)+1;
  if(themeSwitching||matchMedia('(prefers-reduced-motion: reduce)').matches||!img.complete||!img.naturalWidth||!frame||!img.getClientRects().length){img.src=url;return;}
  const next=new Image();next.src=url;
  Promise.race([(next.decode?next.decode():Promise.resolve()).catch(()=>{}),new Promise(r=>setTimeout(r,300))]).then(()=>{
    if(img._swapToken!==token)return;
    frame.querySelectorAll('.stage-ghost').forEach(g=>g.remove());
    const ghost=img.cloneNode(false);
    ghost.removeAttribute('data-doit-img');ghost.removeAttribute('data-nbn-img');
    ghost.className='stage-ghost';ghost.alt='';ghost.setAttribute('aria-hidden','true');
    ghost.style.cssText='position:absolute;left:0;top:0;width:100%;height:'+img.offsetHeight+'px;object-fit:cover;object-position:top left;pointer-events:none';
    frame.appendChild(ghost);
    img.src=url;
    const a=ghost.animate([{opacity:1},{opacity:0}],{duration:200,easing:'ease',fill:'forwards'});
    a.finished.catch(()=>{}).then(()=>ghost.remove());setTimeout(()=>ghost.remove(),450);
  });
}

let doitView='today',doitMode='dark';
const doitImg=document.querySelector('[data-doit-img]'),doitModeBtn=document.querySelector('[data-doit-mode]');
function renderDoitStage(){
  if(doitImg&&appGallery.doit[doitView]){
    swapStageImg(doitImg,pickStageUrl(appGallery.doit[doitView],doitMode));
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

let nbnView='home',nbnMode='dark';
const nbnImg=document.querySelector('[data-nbn-img]'),nbnModeBtn=document.querySelector('[data-nbn-mode]');
function renderNbnStage(){
  if(nbnImg&&appGallery.nbn[nbnView]){
    swapStageImg(nbnImg,pickStageUrl(appGallery.nbn[nbnView],nbnMode));
  }
  if(nbnModeBtn){
    nbnModeBtn.setAttribute('aria-pressed',String(nbnMode==='dark'));
    nbnModeBtn.textContent=nbnMode==='dark'?'◐ Dark UI':'☀ Light UI';
  }
}
document.querySelectorAll('[data-nbn-view]').forEach(btn=>btn.addEventListener('click',()=>{
  nbnView=btn.dataset.nbnView;
  document.querySelectorAll('[data-nbn-view]').forEach(b=>b.classList.toggle('is-on',b===btn));
  renderNbnStage();
}));
if(nbnModeBtn){
  nbnModeBtn.addEventListener('click',()=>{
    nbnMode=nbnMode==='dark'?'light':'dark';
    renderNbnStage();
  });
}
if(mobQuery&&mobQuery.addEventListener){
  mobQuery.addEventListener('change',()=>{
    renderDoitStage();
    renderNbnStage();
  });
}

/* Website Dark / Light theme — defaults to System preference, then toggles manually between Dark and Light */
const rootEl=document.documentElement,themeBtn=document.querySelector('[data-theme-toggle]'),themeLabel=document.querySelector('[data-theme-label]');
const sysColorQuery=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
let manualThemeOverride=false;
function applySiteTheme(theme){
  rootEl.setAttribute('data-theme',theme);
  if(themeLabel)themeLabel.textContent=theme==='dark'?'Light':'Dark';
  doitMode=theme==='dark'?'dark':'light';
  nbnMode=theme==='dark'?'dark':'light';
  renderDoitStage();
  renderNbnStage();
}
/* Initialize from system preference on page load */
applySiteTheme(sysColorQuery&&!sysColorQuery.matches?'light':'dark');
if(sysColorQuery&&sysColorQuery.addEventListener){
  sysColorQuery.addEventListener('change',e=>{
    if(!manualThemeOverride)applySiteTheme(e.matches?'dark':'light');
  });
}
if(themeBtn){
  themeBtn.addEventListener('click',()=>{
    manualThemeOverride=true;
    const next=rootEl.getAttribute('data-theme')==='dark'?'light':'dark';
    if(document.startViewTransition&&!document.hidden&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
      themeSwitching=true;
      const vt=document.startViewTransition(()=>{
        applySiteTheme(next);
        // Let the swapped app screenshots decode before the new snapshot is taken (capped so the switch never stalls).
        const decodes=[doitImg,nbnImg].filter(i=>i&&i.decode&&i.getClientRects().length).map(i=>i.decode().catch(()=>{}));
        return Promise.race([Promise.all(decodes),new Promise(r=>setTimeout(r,150))]);
      });
      vt.ready.catch(()=>{});vt.finished.finally(()=>{themeSwitching=false});
    }else applySiteTheme(next);
  });
}

/* Expandable "See more of my work at NEXT" drawer (Desktop & Mobile) */
const neosMoreBtn=document.querySelector('[data-neos-more-btn]'),neosMoreDrawer=document.getElementById('neos-more-drawer'),neosMoreLabel=document.querySelector('[data-neos-more-label]');
if(neosMoreBtn){
  neosMoreBtn.addEventListener('click',()=>{
    const stage=neosMoreBtn.closest('.neos-stage');
    if(!stage)return;
    const open=stage.classList.toggle('is-more-open');
    neosMoreBtn.setAttribute('aria-expanded',String(open));
    if(neosMoreDrawer)neosMoreDrawer.setAttribute('aria-hidden',String(!open));
    if(neosMoreLabel)neosMoreLabel.textContent=open?'Hide additional work at NEXT':'See more of my work at NEXT';
    setTimeout(updateBrandScrollFill,540);
  });
}

/* Mobile progressive disclosure toggles (NEOS demo, Bento extra repos, Full 12 module marks) */
document.querySelectorAll('[data-mob-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
  const targetClass=btn.dataset.mobToggle;
  const container=btn.closest('.'+targetClass)||document.getElementById(targetClass);
  if(!container)return;
  const open=container.classList.toggle('mob-expanded');
  btn.textContent=open?btn.dataset.less:btn.dataset.more;
  setTimeout(updateBrandScrollFill,300);
}));

/* Copy email / phone buttons */
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
  const val=button.dataset.copy,label=button.dataset.label||'Copied.';
  const container=button.closest('.contact-tools,.talk-copy-bar')||document;
  const status=container.querySelector('.copy-status');
  try{await navigator.clipboard.writeText(val);if(status)status.textContent=label;}
  catch{if(status)status.textContent=val;}
  if(status&&status.animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches)status.animate([{opacity:0},{opacity:1}],{duration:180,easing:'cubic-bezier(0.23, 1, 0.32, 1)'});
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
