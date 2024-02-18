const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    const translation = teluguTranslations[link.textContent];
    link.setAttribute('title', translation);
  });

  link.addEventListener('mouseout', () => {
    const translation = teluguTranslations[link.textContent];
    link.setAttribute('title', translation);
  });
});

const teluguTranslations = {
  "Home": "హోమ్",
  "Products": "ఉత్పత్తులు",
  "Contact": "సంప్రదించండి"
};

const sidebarToggle = document.querySelector('#sidebar-toggle');
const sidebar = document.querySelector('#sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Add media query for sidebar toggle
@media (max-width: 768px) 
{
  #sidebar
   {
    left: 0;
  }

  #sidebar-toggle
   {
    display: block;
    position: absolute;
    top: 10 px;
  }
}
