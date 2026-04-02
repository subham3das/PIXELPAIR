/* ============================================================
   PIXELPAIR — SHARED JAVASCRIPT  v2.0
   ============================================================ */

// ── THEME ──────────────────────────────────────────────────
function getSavedTheme(){try{return localStorage.getItem('pp-theme')||''}catch(e){return''}}
function setSavedTheme(t){try{localStorage.setItem('pp-theme',t)}catch(e){}}
(function applyTheme(){
  const t=getSavedTheme();
  document.body.className=t;
  document.querySelectorAll('.theme-btn').forEach(b=>{
    const map={'':'t-green','theme-cyan':'t-cyan','theme-purple':'t-purple','theme-orange':'t-orange','theme-pink':'t-pink','theme-gold':'t-gold'};
    b.classList.toggle('active',b.classList.contains(map[t]));
  });
})();
function setTheme(cls){
  document.body.className=cls;setSavedTheme(cls);
  document.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));
  event.target.classList.add('active');
}

// ── CURSOR ──────────────────────────────────────────────────
(function initCursor(){
  const isTouchDev=()=>('ontouchstart'in window)||navigator.maxTouchPoints>0;
  const cursor=document.getElementById('cursor'),follower=document.getElementById('cursorFollower');
  if(!cursor||!follower)return;
  if(isTouchDev()){cursor.style.display='none';follower.style.display='none';document.body.style.cursor='auto';return;}
  let mx=0,my=0,fx=0,fy=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  (function animC(){cursor.style.left=mx+'px';cursor.style.top=my+'px';fx+=(mx-fx)*0.12;fy+=(my-fy)*0.12;follower.style.left=fx+'px';follower.style.top=fy+'px';requestAnimationFrame(animC)})();
  document.querySelectorAll('a,button,.service-card,.work-card,.proj-card,.theme-btn,.team-big-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>cursor.style.transform='translate(-50%,-50%) scale(2)');
    el.addEventListener('mouseleave',()=>cursor.style.transform='translate(-50%,-50%) scale(1)');
  });
})();

// ── HAMBURGER ───────────────────────────────────────────────
(function initHamburger(){
  const hamburger=document.getElementById('hamburger'),mobileMenu=document.getElementById('mobileMenu');
  if(!hamburger||!mobileMenu)return;
  hamburger.addEventListener('click',e=>{
    e.stopPropagation();
    const open=mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open',open);
    if(open)mobileMenu.style.display='block';
  });
  document.addEventListener('click',e=>{
    if(!mobileMenu.contains(e.target)&&!hamburger.contains(e.target)){
      mobileMenu.classList.remove('open');hamburger.classList.remove('open');
    }
  });
})();

// ── PAGE TRANSITION ──────────────────────────────────────────
const pt=document.getElementById('page-transition'),ptLabel=document.getElementById('pt-label');
function navigateTo(href,label){
  if(!pt)return(window.location.href=href);
  ptLabel.textContent=label||'Loading...';
  pt.classList.add('pt-active');
  setTimeout(()=>{window.location.href=href},500);
}
document.querySelectorAll('a[data-page]').forEach(link=>{
  link.addEventListener('click',e=>{
    const href=link.getAttribute('href');
    if(!href||href.startsWith('#'))return;
    e.preventDefault();navigateTo(href,link.dataset.page);
  });
});

// ── SCROLL REVEAL ────────────────────────────────────────────
const revObs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){e.target.style.transitionDelay=(i%4)*0.08+'s';e.target.classList.add('visible')}});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(r=>revObs.observe(r));

// ── NAV SCROLL ACCENT ────────────────────────────────────────
window.addEventListener('scroll',()=>{
  const nb=document.getElementById('navbar');
  if(nb)nb.style.borderBottomColor=window.scrollY>50?'var(--accent)':'var(--border)';
});

// ── COUNTERS ─────────────────────────────────────────────────
const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{
  if(e.isIntersecting){
    const el=e.target,target=+el.dataset.target,label=el.parentElement.querySelector('.stat-label');
    const showP=label&&label.textContent.includes('%');
    let cur=0;const step=target/50,t=setInterval(()=>{
      cur=Math.min(cur+step,target);
      el.textContent=Math.floor(cur)+(showP?'%':'+');
      if(cur>=target)clearInterval(t);
    },40);cObs.unobserve(el);
  }
})},{threshold:0.5});
document.querySelectorAll('[data-target]').forEach(c=>cObs.observe(c));
