‎
‎// Heart burst
‎document.addEventListener("click", createHearts);
‎document.addEventListener("touchstart", createHearts);
‎
‎function createHearts(e){
‎let x = e.touches ? e.touches[0].clientX : e.clientX;
‎let y = e.touches ? e.touches[0].clientY : e.clientY;
‎const emojis = ["💜","🌷","🤍"];
‎
‎for(let i=0;i<10;i++){  
‎    let heart=document.createElement("div");  
‎    heart.className="heart";  
‎    heart.textContent=emojis[Math.floor(Math.random()*emojis.length)];  
‎    heart.style.left = x + "px";  
‎    heart.style.top = y + "px";  
‎    let moveX = (Math.random()-0.5)*400 + "px";  
‎    let moveY = (Math.random()-0.5)*400 + "px";  
‎    heart.style.setProperty("--x", moveX);  
‎    heart.style.setProperty("--y", moveY);  
‎    document.body.appendChild(heart);  
‎    setTimeout(()=>heart.remove(),2500);  
‎}
‎
‎}
‎
‎// Messages
‎const boxes = document.querySelectorAll('.msg-box');
‎
‎// IntersectionObserver for pop-in
‎const observer = new IntersectionObserver(entries=>{
‎entries.forEach(entry=>{
‎if(entry.isIntersecting){
‎entry.target.classList.add('show');
‎} else {
‎entry.target.classList.remove('show');
‎}
‎});
‎},{threshold:0.1});
‎
‎// Observe each box
‎boxes.forEach(box => observer.observe(box));
‎
‎// Popup
‎const popup = document.getElementById('popup');
‎const yesBtn = document.getElementById('yesBtn');
‎const noBtn = document.getElementById('noBtn');
‎let popupActive = true;
‎
‎// Show popup on load
‎popup.style.display='flex';
‎document.body.classList.add('popup-active');
‎
‎// Fade popup on scroll
‎window.addEventListener('scroll', ()=>{
‎if(popupActive){
‎popup.classList.remove('fade-in');
‎void popup.offsetWidth;
‎popup.classList.add('fade-in');
‎}
‎});
‎
‎// Yes button click
‎yesBtn.addEventListener('click', ()=>{
‎popup.style.display='none';
‎document.body.classList.remove('popup-active');
‎// Do NOT add 'show' here; let IntersectionObserver trigger animation on scroll
‎popupActive=false;
‎});
‎
‎// No button hover: move randomly in the viewport
‎noBtn.addEventListener('mousemove', ()=>{
‎const padding = 20; // distance from screen edges
‎const maxX = window.innerWidth - noBtn.offsetWidth - padding;
‎const maxY = window.innerHeight - noBtn.offsetHeight - padding;
‎const x = Math.random() * maxX;
‎const y = Math.random() * maxY;
‎noBtn.style.position='fixed';
‎noBtn.style.left = x + 'px';
‎noBtn.style.top = y + 'px';
‎});
‎// Falling petals effect
‎const petals = ["🌸", "🌷", "💮"];
‎
‎function createPetal() {
‎const petal = document.createElement("div");
‎petal.className = "petal";
‎petal.textContent = petals[Math.floor(Math.random() * petals.length)];
‎
‎const size = Math.random() * 30 + 28; // bigger petals  
‎const blur = Math.random() < 0.4 ? 4 : 0;  
‎const duration = Math.random() * 10 + 12;  
‎
‎petal.style.fontSize = size + "px";  
‎petal.style.filter = "blur(" + blur + "px)";  
‎petal.style.animationDuration = duration + "s";  
‎
‎// Start anywhere across the screen  
‎petal.style.left = Math.random() * 100 + "vw";  
‎
‎// Random diagonal drift  
‎const driftX = Math.random() * 400 - 200 + "px";  
‎petal.style.setProperty("--dx", driftX);  
‎
‎document.body.appendChild(petal);  
‎
‎setTimeout(() => {  
‎    petal.remove();  
‎}, duration * 1000);
‎
‎}
‎
‎setInterval(createPetal, 450);