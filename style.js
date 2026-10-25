// Tính năng 1: Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️ Sáng/Tối' : '🌙 Sáng/Tối';
});

// Tính năng 2: FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});

// Tính năng 3: Live Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const msgBox = document.getElementById('formMessage');
    
    if(name.length < 2) {
        msgBox.style.color = '#ef4444';
        msgBox.textContent = 'Tên gì mà ngắn thế, nhập lại xem nào!';
        return;
    }

    msgBox.style.color = '#10b981';
    msgBox.textContent = 'Gửi thành công rực rỡ! Đợi đấy tao rep nhé.';
    this.reset();
});

// Tính năng 4: Animated Stats Counters
const counters = document.querySelectorAll('.stat-number');
let animated = false;

window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    if(!statsSection) return;
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(sectionPosition < screenPosition && !animated) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 30;
            
            const updateCount = () => {
                count += speed;
                if(count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target + (target === 100 ? '%' : '+');
                }
            };
            updateCount();
        });
        animated = true;
    }
});