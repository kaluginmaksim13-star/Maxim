window.addEventListener('load', () => {
    const element = document.querySelector('.hero__title');
    if (!element) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            element.classList.add('is-visible');
        });
    });
});

window.addEventListener('load', () => {
    const element = document.querySelector('.hero__pic');
    if (!element) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            element.classList.add('is-visible');
        });
    });
});

//main-hero-end
//main-partners

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.partners__title');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.partners__card');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-partners-end
//main-benefits


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.benefits__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-benefits-end
//main-transform

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.transform__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-transform-end
//main-special

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.special__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-special-end
//main-article 

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.article__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-article-end
//main-maps

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.maps__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-maps-end
//main-picture

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.picture__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-picture-end
//main-contact

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.contact__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});

//main-contact-end
//footer

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.footer__wrapper');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // один раз
                }
            });
        },
        {
            threshold: 0.2 // 20% элемента в экране
        }
    );

    elements.forEach(el => observer.observe(el));
});