// 메인 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 애니메이션
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);

    // 스크롤 애니메이션 적용
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    // 초기 로드 시 체크
    checkFade();
    
    // 스크롤 시 체크
    window.addEventListener('scroll', checkFade);

    // 스크롤 인디케이터
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    function updateScrollIndicator() {
        const windowScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (windowScroll / height) * 100;
        scrollIndicator.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', updateScrollIndicator);

    // 커서 팔로워 효과
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursorFollower) {
        document.addEventListener('mousemove', e => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursorFollower.classList.add('active');
        });

        document.addEventListener('mouseup', () => {
            cursorFollower.classList.remove('active');
        });

        // 버튼 및 링크에 호버 효과
        const buttons = document.querySelectorAll('button, .cta-button, a');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                cursorFollower.classList.add('active');
            });
            button.addEventListener('mouseleave', () => {
                cursorFollower.classList.remove('active');
            });
        });
    }

    // 버튼 리플 이펙트
    const rippleButtons = document.querySelectorAll('.cta-button, .add-to-cart');
    
    rippleButtons.forEach(button => {
        button.classList.add('ripple-effect');
        
        button.addEventListener('click', e => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 컨페티 효과
    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti-container');
        if (!confettiContainer) return;
        
        const colors = ['', 'color-2', 'color-3'];
        const shapes = ['', 'star', 'circle', 'triangle'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            
            confetti.className = `confetti ${color} ${shape}`;
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() + 's';
            
            confettiContainer.appendChild(confetti);
            
            // 애니메이션 종료 후 제거
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    // 페이지 로드 시 컨페티 효과 적용
    createConfetti();

    // 장바구니 버튼에 클릭 이벤트 리스너 추가
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 장바구니에 아이템 추가
            const productCard = this.closest('.product-card');
            
            if (productCard) {
                const productId = productCard.dataset.id;
                const productTitle = productCard.querySelector('.product-title').textContent;
                const productPrice = productCard.querySelector('.product-price').textContent;
                const productImage = productCard.querySelector('.product-image').src;
                
                // 장바구니에 추가
                addToCart({
                    id: productId,
                    title: productTitle,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                });
                
                // 시각적 피드백
                showNotification(`${productTitle}이(가) 장바구니에 추가되었습니다!`);
                updateCartCount();
                
                // 간단한 애니메이션
                createConfetti();
            }
        });
    });

    // 좋아요 버튼에 클릭 이벤트 리스너 추가
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const productCard = this.closest('.product-card');
            
            if (productCard) {
                const productId = productCard.dataset.id;
                toggleFavorite(productId);
            }
        });
    });

    // 뉴스레터 구독 폼
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // 여기서는 백엔드 API 호출 없이 성공 메시지만 표시
            const messageElement = document.querySelector('.subscription-message');
            messageElement.textContent = `${email} 주소로 구독 신청이 완료되었습니다!`;
            messageElement.style.color = '#00875A';
            
            // 폼 리셋
            this.reset();
            
            // 5초 후 메시지 삭제
            setTimeout(() => {
                messageElement.textContent = '';
            }, 5000);
        });
    }

    // 매직 스팟에 특별 애니메이션 추가
    const magicProduct = document.getElementById('magic-product');
    if (magicProduct) {
        magicProduct.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
            const sparkles = document.createElement('div');
            sparkles.className = 'magic-glow';
            this.appendChild(sparkles);
        });
        
        magicProduct.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
            const sparkles = this.querySelector('.magic-glow');
            if (sparkles) sparkles.remove();
        });
    }

    // 카테고리 카드에 클릭 이벤트 리스너 추가
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            window.location.href = `products.html?category=${category}`;
        });
    });

    // 캐러셀 기능
    initializeCarousel();

    // 로그인 상태에 따른 UI 업데이트
    updateLoginUI();
});

// 알림 메시지 표시
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification slide-in';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// 장바구니 기능
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// 장바구니 카운트 업데이트
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartCountElem = document.querySelector('.cart-count');
    if (cartCountElem) {
        cartCountElem.textContent = totalItems;
        
        if (totalItems > 0) {
            cartCountElem.classList.add('bounce');
            setTimeout(() => {
                cartCountElem.classList.remove('bounce');
            }, 1000);
        }
    }
}

// 좋아요 기능
function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
        showNotification('관심 상품에 추가되었습니다!');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// 로그인 상태 체크 및 UI 업데이트
function updateLoginUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginLink = document.getElementById('login-link');
    const accountLink = document.getElementById('account-link');
    
    if (isLoggedIn) {
        if (loginLink) loginLink.style.display = 'none';
        if (accountLink) accountLink.style.display = 'block';
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (accountLink) accountLink.style.display = 'none';
    }
}

// 캐러셀 기능 초기화
function initializeCarousel() {
    const carousel = document.querySelector('.product-carousel');
    if (!carousel) return;
    
    const container = carousel.querySelector('.product-container');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    let position = 0;
    const cardWidth = 310; // 카드 폭 + 마진
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const totalCards = container.children.length;
    const maxPosition = Math.max(0, totalCards - visibleCards);
    
    // 버튼 활성화/비활성화 상태 업데이트
    function updateButtons() {
        prevBtn.disabled = position <= 0;
        nextBtn.disabled = position >= maxPosition;
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    }
    
    // 초기 버튼 상태 설정
    updateButtons();
    
    // 이전 버튼 클릭 이벤트
    prevBtn.addEventListener('click', () => {
        if (position > 0) {
            position--;
            container.style.transform = `translateX(-${position * cardWidth}px)`;
            updateButtons();
        }
    });
    
    // 다음 버튼 클릭 이벤트
    nextBtn.addEventListener('click', () => {
        if (position < maxPosition) {
            position++;
            container.style.transform = `translateX(-${position * cardWidth}px)`;
            updateButtons();
        }
    });
    
    // 윈도우 크기 변경 시 캐러셀 재조정
    window.addEventListener('resize', () => {
        const newVisibleCards = Math.floor(carousel.offsetWidth / cardWidth);
        const newMaxPosition = Math.max(0, totalCards - newVisibleCards);
        
        // 현재 위치가 새 최대 위치를 넘어가면 조정
        if (position > newMaxPosition) {
            position = newMaxPosition;
            container.style.transform = `translateX(-${position * cardWidth}px)`;
        }
        
        updateButtons();
    });
}

// 페이지 로드 시 장바구니 카운트 업데이트
updateCartCount();
