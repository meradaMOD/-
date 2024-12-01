document.addEventListener('DOMContentLoaded', function() {
    // تهيئة مكتبة AOS للتحريك
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    const root = document.getElementById('root');
    
    // إنشاء الهيدر
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="container">
            <h1 data-aos="fade-down">الجزائر التعليمية</h1>
            <nav>
                <ul>
                    <li><a href="#" data-aos="fade-left" data-aos-delay="100"><i class="fas fa-home"></i> الرئيسية</a></li>
                    <li><a href="#courses" data-aos="fade-left" data-aos-delay="200"><i class="fas fa-book"></i> الدروس</a></li>
                    <li><a href="#about" data-aos="fade-left" data-aos-delay="300"><i class="fas fa-info-circle"></i> عن المنصة</a></li>
                    <li><a href="#contact" data-aos="fade-left" data-aos-delay="400"><i class="fas fa-envelope"></i> اتصل بنا</a></li>
                </ul>
            </nav>
        </div>
    `;

    // إنشاء المحتوى الرئيسي
    const main = document.createElement('main');
    main.innerHTML = `
        <section class="hero-section" data-aos="zoom-in">
            <h2>مرحباً بكم في منصة الجزائر التعليمية</h2>
            <p>اكتشف عالماً من المعرفة والتعلم</p>
            <button class="btn btn-primary">ابدأ الآن</button>
        </section>

        <section class="features">
            <div class="feature-card" data-aos="fade-up">
                <i class="fas fa-graduation-cap feature-icon"></i>
                <h3>دروس تفاعلية</h3>
                <p>محتوى تعليمي متميز يناسب جميع المستويات</p>
            </div>

            <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                <i class="fas fa-book-reader feature-icon"></i>
                <h3>مكتبة متنوعة</h3>
                <p>مجموعة واسعة من المواد التعليمية</p>
            </div>

            <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                <i class="fas fa-users feature-icon"></i>
                <h3>مجتمع نشط</h3>
                <p>تواصل مع الطلاب والمعلمين</p>
            </div>
        </section>

        <section id="about" class="about-section" data-aos="fade-up">
            <h2>عن المنصة</h2>
            <p>منصة تعليمية جزائرية تهدف إلى توفير تعليم عالي الجودة لجميع الطلاب</p>
        </section>

        <section id="contact" class="contact-section">
            <h2>اتصل بنا</h2>
            <form id="contactForm">
                <input type="text" name="name" placeholder="اسمك">
                <input type="email" name="email" placeholder="بريدك الإلكتروني">
                <textarea name="message" placeholder="رسالتك"></textarea>
                <button type="submit">إرسال</button>
            </form>
        </section>
    `;

    // إضافة العناصر للصفحة
    root.appendChild(header);
    root.appendChild(main);

    // إضافة تأثيرات للروابط
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // تفعيل نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح!');
            this.reset();
        });
    }

    // إضافة تأثيرات للبطاقات
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // إضافة تأثيرات التحريك عند التمرير
    window.addEventListener('scroll', function() {
        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    });

    // تفعيل الأزرار
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = 'scale(1)', 200);
        });
    });
});
