// 장바구니 관련 함수들

// 장바구니에 상품 추가
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingProductIndex = cart.findIndex(item => item.id.toString() === product.id.toString());
    
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// 장바구니에서 상품 제거
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id.toString() !== productId.toString());
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (document.querySelector('.cart-items')) {
        displayCart();
    }
}

// 장바구니 아이템 수량 변경
function updateCartItemQuantity(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id.toString() === productId.toString());
    
    if (productIndex > -1) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            cart[productIndex].quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            if (document.querySelector('.cart-items')) {
                displayCart();
            }
        }
    }
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

// 장바구니 페이지 초기화
function initCart() {
    // 장바구니 페이지인 경우에만 실행
    if (!document.querySelector('.cart-page')) return;
    
    displayCart();
    
    // 이벤트 리스너 설정
    document.addEventListener('click', function(e) {
        // 수량 증가 버튼
        if (e.target.classList.contains('plus')) {
            const productId = e.target.dataset.id;
            const input = e.target.parentElement.querySelector('input');
            const currentQuantity = parseInt(input.value);
            updateCartItemQuantity(productId, currentQuantity + 1);
        }
        // 수량 감소 버튼
        else if (e.target.classList.contains('minus')) {
            const productId = e.target.dataset.id;
            const input = e.target.parentElement.querySelector('input');
            const currentQuantity = parseInt(input.value);
            updateCartItemQuantity(productId, currentQuantity - 1);
        }
        // 삭제 버튼
        else if (e.target.classList.contains('remove-from-cart')) {
            const productId = e.target.dataset.id;
            removeFromCart(productId);
        }
    });
    
    // 결제 버튼
    const checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            // 결제 처리는 백엔드 연동이 필요하므로 여기서는 알림만 표시
            alert('결제 기능은 준비 중입니다.');
        });
    }
}

// 장바구니 내용 표시
function displayCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummaryContainer = document.querySelector('.cart-summary');
    
    if (!cartItemsContainer || !cartSummaryContainer) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        document.querySelector('.cart-page').innerHTML = `
            <h1>장바구니</h1>
            <div class="cart-empty">
                <p>장바구니가 비어있습니다.</p>
                <a href="products.html" class="cta-button">쇼핑 계속하기</a>
            </div>
        `;
        return;
    }
    
    // 장바구니 아이템 표시
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3 class="cart-item-title">${item.title}</h3>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-quantity">
                        <button class="cart-quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="text" class="cart-quantity-input" value="${item.quantity}" readonly>
                        <button class="cart-quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
                    <button class="remove-from-cart" data-id="${item.id}">×</button>
                </div>
            </div>
        `;
    });
    
    // 장바구니 요약 정보
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 50000 ? 0 : 3000; // 5만원 이상 무료배송
    const total = subtotal + shipping;
    
    cartSummaryContainer.innerHTML = `
        <h2 class="summary-title">주문 요약</h2>
        <div class="summary-item">
            <span>상품 금액</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-item">
            <span>배송비</span>
            <span>${shipping === 0 ? '무료' : formatPrice(shipping)}</span>
        </div>
        <div class="summary-total">
            <span>총 금액</span>
            <span>${formatPrice(total)}</span>
        </div>
        <button class="checkout-button cta-button">결제하기</button>
    `;
}

// 가격 포맷팅 (천 단위 구분자)
function formatPrice(price) {
    return '₩' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initCart();
});
