// AOS Animation Init
AOS.init({
  duration: 800,
  once: true,
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link, a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id && id.startsWith('#') && document.querySelector(id)){
        e.preventDefault();
        const y = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - 72; // navbar offset
        window.scrollTo({top:y, behavior:'smooth'});
        
        // Close mobile menu if open
        if(window.innerWidth < 992){
        const nav = document.getElementById('nav');
        if(nav && nav.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(nav);
            if (bsCollapse) bsCollapse.hide();
        }
        }
    }
    });
});

// Image Modal Logic
const imageModal = document.getElementById('imageModal');
if (imageModal) {
  imageModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const triggerElement = event.relatedTarget;
    // Extract info from data-img-src attributes
    const imageSrc = triggerElement.getAttribute('data-img-src');
    const modalImage = imageModal.querySelector('#modalImage');
    modalImage.src = imageSrc;
  });
}