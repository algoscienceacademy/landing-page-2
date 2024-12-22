document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    function setActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
    setActiveNav();

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Chat functionality
    const chatFab = document.querySelector('.chat-fab');
    const chatContainer = document.querySelector('.chat-container');
    const closeChat = document.querySelector('.chat-close-btn');
    const chatInput = document.getElementById('chatInput');
    const sendChat = document.getElementById('sendChat');

    if (chatFab) {
        chatFab.addEventListener('click', function() {
            chatContainer.classList.add('active');
            chatFab.style.display = 'none';
            if (chatInput) chatInput.focus();
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatContainer.classList.remove('active');
            chatFab.style.display = 'flex';
        });
    }

    if (sendChat && chatInput) {
        sendChat.addEventListener('click', function() {
            const message = chatInput.value.trim();
            if (message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'chat-message user';
                messageDiv.innerHTML = `
                    <div class="message-content">
                        <p>${message}</p>
                        <span class="message-time">${new Date().toLocaleTimeString()}</span>
                    </div>
                `;
                document.querySelector('.chat-messages').appendChild(messageDiv);
                chatInput.value = '';
                
                const chatMessages = document.querySelector('.chat-messages');
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        });

        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChat.click();
            }
        });
    }

    // Pricing Toggle Functionality
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const yearlyPrices = document.querySelectorAll('.price.yearly');

    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            monthlyPrices.forEach(price => {
                price.classList.toggle('hidden');
            });
            yearlyPrices.forEach(price => {
                price.classList.toggle('hidden');
            });
        });
    }

    // Scroll to Top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 