// 상품 데이터
const products = [
    {
        id: 1,
        title: "마법의 유니콘 인형",
        price: 29000,
        description: "부드러운 촉감의 마법 유니콘 인형입니다. 달빛에 빛나는 특별한 뿔을 가지고 있어요. 꿈꾸는 아이들의 친구가 되어줄 거예요.",
        image: "https://via.placeholder.com/300x200.png?text=마법의+유니콘+인형",
        category: "plush",
        stock: 15,
        rating: 4.8
    },
    {
        id: 2,
        title: "꿈꾸는 공주 인형",
        price: 24500,
        description: "화려한 드레스를 입은 공주 인형입니다. 반짝이는 왕관과 부드러운 머리카락을 가지고 있어요.",
        image: "https://via.placeholder.com/300x200.png?text=꼬꼬한+공주+인형",
        category: "plush",
        stock: 10,
        rating: 4.6
    },
    {
        id: 3,
        title: "우주 탐험 로봇",
        price: 42000,
        description: "다양한 움직임과 소리가 나는 우주 탐험 로봇입니다. LED 불빛과 함께 미래적인 디자인이 특징이에요.",
        image: "https://via.placeholder.com/300x200.png?text=우주+탐험+로봇",
        category: "action",
        stock: 8,
        rating: 4.9
    },
    {
        id: 4,
        title: "공룡 모험 세트",
        price: 35000,
        description: "6개의 다양한 공룡 피규어가 포함된 세트입니다. 정글 배경 매트와 함께 모험을 즐겨보세요.",
        image: "https://via.placeholder.com/300x200.png?text=공룡+모험+세트",
        category: "action",
        stock: 12,
        rating: 4.7
    },
    {
        id: 5,
        title: "숫자 학습 블록",
        price: 18500,
        description: "재미있게 숫자를 배울 수 있는 화려한 색상의 블록 세트입니다. 쌓고, 세고, 학습하세요!",
        image: "https://via.placeholder.com/300x200.png?text=숫자+학습+블록",
        category: "educational",
        stock: 20,
        rating: 4.5
    },
    {
        id: 6,
        title: "동물 퍼즐 세트",
        price: 15000,
        description: "10개의 나무 퍼즐로 구성된 귀여운 동물 학습 세트입니다. 형태 인식과 소근육 발달에 도움을 줍니다.",
        image: "https://via.placeholder.com/300x200.png?text=동물+퍼즐+세트",
        category: "educational",
        stock: 15,
        rating: 4.4
    },
    {
        id: 7,
        title: "무지개 점토 세트",
        price: 14000,
        description: "10가지 색상의 무독성 점토와 다양한 모양 도구가 포함된 창의력 개발 세트입니다.",
        image: "https://via.placeholder.com/300x200.png?text=무지개+점토+세트",
        category: "creative",
        stock: 25,
        rating: 4.6
    },
    {
        id: 8,
        title: "마법 그림 키트",
        price: 22000,
        description: "특별한 물감과 캔버스로 구성된 그림 키트입니다. 그림을 그리면 마법처럼 색상이 변합니다!",
        image: "https://via.placeholder.com/300x200.png?text=마법+그림+키트",
        category: "creative",
        stock: 10,
        rating: 4.8
    },
    {
        id: 9,
        title: "드래곤 성 블록 세트",
        price: 48000,
        description: "500개 이상의 블록으로 환상적인 드래곤 성을 만들 수 있는 세트입니다. 드래곤 피규어와 기사 미니피규어가 포함되어 있습니다.",
        image: "https://via.placeholder.com/300x200.png?text=드래곤+성+블록+세트",
        category: "creative",
        stock: 7,
        rating: 4.9
    },
    {
        id: 10,
        title: "음악 매직 완드",
        price: 19500,
        description: "흔들면 다양한 마법 소리와 음악이 나오는 반짝이는 매직 완드입니다. 빛과 소리로 상상력을 자극합니다.",
        image: "https://via.placeholder.com/300x200.png?text=음악+매직+완드",
        category: "action",
        stock: 18,
        rating: 4.3
    },
    {
        id: 11,
        title: "구름 위의 인형 하우스",
        price: 65000,
        description: "구름 모양의 환상적인 인형 하우스입니다. LED 조명과 작은 가구 세트가 포함되어 있습니다.",
        image: "https://via.placeholder.com/300x200.png?text=구름+위의+인형+하우스",
        category: "plush",
        stock: 5,
        rating: 4.7
    },
    {
        id: 12,
        title: "공룡 발굴 키트",
        price: 28000,
        description: "실제 고생물학자처럼 공룡 화석을 발굴할 수 있는 교육용 키트입니다. 도구와 가이드북이 포함되어 있습니다.",
        image: "https://via.placeholder.com/300x200.png?text=공룡+발굴+키트",
        category: "educational",
        stock: 14,
        rating: 4.6
    }
];

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 추천 상품 섹션에 상품 표시
    displayFeaturedProducts();
    
    // 상품 목록 페이지인 경우 모든 상품 표시
    if (document.querySelector('.products-grid')) {
        displayProducts();
    }
    
    // 상품 상세 페이지인 경우 상품 정보 표시
    if (document.querySelector('.product-detail')) {
        displayProductDetails();
    }
    
    // 오늘의 마법 상품 표시
    displayMagicProduct();
    
    // 장바구니 페이지인 경우 장바구니 내용 표시
    if (document.querySelector('.cart-items')) {
        displayCart();
    }
});

// 추천 상품 표시
function displayFeaturedProducts() {
    const container = document.querySelector('.product-container');
    if (!container) return;
    
    // 상위 평점의 상품 6개 선택
    const featuredProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
    
    container.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const isFavorite = checkIfFavorite(product.id);
        
        container.innerHTML += `
            <div class="product-card fade-in" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <div class="product-actions">
                    <button class="add-to-cart">장바구니 추가</button>
                    <button class="like-button ${isFavorite ? 'active' : ''}">❤</button>
                </div>
            </div>
        `;
    });
    
    // 페이드인 애니메이션 적용을 위한 타임아웃
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// 상품 목록 표시
function displayProducts() {
    const container = document.querySelector('.products-grid');
    if (!container) return;
    
    // URL에서 카테고리 파라미터 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const searchParam = urlParams.get('search');
    
    // 필터링된 상품
    let filteredProducts = [...products];
    
    // 카테고리별 필터링
    if (categoryParam) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryParam);
        
        // 카테고리 제목 업데이트
        const categoryTitle = document.querySelector('.category-title');
        if (categoryTitle) {
            let categoryName = '';
            switch (categoryParam) {
                case 'plush':
                    categoryName = '부드러운 인형';
                    break;
                case 'action':
                    categoryName = '액션 피규어';
                    break;
                case 'educational':
                    categoryName = '교육용 장난감';
                    break;
                case 'creative':
                    categoryName = '창의력 키트';
                    break;
            }
            categoryTitle.textContent = categoryName;
        }
    }
    
    // 검색어 필터링
    if (searchParam) {
        const searchTerm = searchParam.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        
        // 검색 결과 제목 업데이트
        const categoryTitle = document.querySelector('.category-title');
        if (categoryTitle) {
            categoryTitle.textContent = `"${searchParam}" 검색 결과`;
        }
        
        // 검색 입력란에 검색어 설정
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = searchParam;
        }
    }
    
    container.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '<div class="no-results">해당 조건에 맞는 상품이 없습니다.</div>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const isFavorite = checkIfFavorite(product.id);
        
        container.innerHTML += `
            <div class="product-card fade-in" data-id="${product.id}">
                <a href="product-detail.html?id=${product.id}" class="product-link hover-zoom">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                </a>
                <h3 class="product-title">
                    <a href="product-detail.html?id=${product.id}">${product.title}</a>
                </h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <div class="product-actions">
                    <button class="add-to-cart">장바구니 추가</button>
                    <button class="like-button ${isFavorite ? 'active' : ''}">❤</button>
                </div>
            </div>
        `;
    });
    
    // 페이드인 애니메이션 적용을 위한 타임아웃
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
    
    // 이벤트 리스너 다시 추가
    attachProductEventListeners();
}

// 상품 상세 정보 표시
function displayProductDetails() {
    const detailContainer = document.querySelector('.product-detail');
    if (!detailContainer) return;
    
    // URL에서 상품 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // 상품 찾기
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        detailContainer.innerHTML = '<div class="error-message">상품을 찾을 수 없습니다.</div>';
        return;
    }
    
    const isFavorite = checkIfFavorite(product.id);
    
    // 상품 정보 표시
    detailContainer.innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.title}" class="main-image">
            <div class="thumbnail-container">
                <img src="${product.image}" alt="${product.title}" class="thumbnail active">
                <!-- 추가 이미지가 있을 경우 여기에 더 추가 -->
            </div>
        </div>
        
        <div class="product-info">
            <h1>${product.title}</h1>
            <p class="price">${formatPrice(product.price)}</p>
            <div class="rating">
                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                <span class="rating-value">${product.rating}</span>
            </div>
            <p class="description">${product.description}</p>
            
            <div class="product-actions-detail">
                <div class="quantity-control">
                    <button class="quantity-btn minus">-</button>
                    <input type="text" class="quantity-input" value="1" readonly>
                    <button class="quantity-btn plus">+</button>
                </div>
                
                <button class="cta-button add-to-cart-detail">장바구니에 추가</button>
                <button class="like-button-large ${isFavorite ? 'active' : ''}">❤</button>
            </div>
            
            <div class="product-meta">
                <div class="meta-item">
                    <div class="meta-label">카테고리:</div>
                    <div class="meta-value">${getCategoryName(product.category)}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">재고:</div>
                    <div class="meta-value">${product.stock > 0 ? `${product.stock}개 남음` : '품절'}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">배송:</div>
                    <div class="meta-value">2-3일 내 배송</div>
                </div>
            </div>
        </div>
    `;
    
    // 이벤트 리스너 추가
    const quantityInput = detailContainer.querySelector('.quantity-input');
    const minusBtn = detailContainer.querySelector('.minus');
    const plusBtn = detailContainer.querySelector('.plus');
    const addToCartBtn = detailContainer.querySelector('.add-to-cart-detail');
    const likeBtn = detailContainer.querySelector('.like-button-large');
    
    // 수량 조절 버튼
    minusBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity < product.stock) {
            quantityInput.value = quantity + 1;
        } else {
            showNotification('재고 수량을 초과할 수 없습니다.');
        }
    });
    
    // 장바구니 추가 버튼
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
        
        showNotification(`${product.title}이(가) 장바구니에 추가되었습니다!`);
        updateCartCount();
    });
    
    // 좋아요 버튼
    likeBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        toggleFavorite(product.id);
    });
}

// 오늘의 마법 상품 표시
function displayMagicProduct() {
    const magicProductContainer = document.getElementById('magic-product');
    if (!magicProductContainer) return;
    
    // 랜덤 상품 선택
    const randomIndex = Math.floor(Math.random() * products.length);
    const magicProduct = products[randomIndex];
    
    const isFavorite = checkIfFavorite(magicProduct.id);
    
    magicProductContainer.innerHTML = `
        <div class="magic-product-content">
            <img src="${magicProduct.image}" alt="${magicProduct.title}" class="magic-product-image">
            <h3 class="magic-product-title">${magicProduct.title}</h3>
            <p class="magic-product-description">${magicProduct.description}</p>
            <p class="magic-product-price">${formatPrice(magicProduct.price)}</p>
            <div class="magic-product-special">특별 할인 가격: ${formatPrice(Math.floor(magicProduct.price * 0.85))}</div>
            <div class="magic-product-actions">
                <a href="product-detail.html?id=${magicProduct.id}" class="cta-button">자세히 보기</a>
                <button class="like-button ${isFavorite ? 'active' : ''}" data-id="${magicProduct.id}">❤</button>
            </div>
        </div>
    `;
    
    // 좋아요 버튼에 이벤트 리스너 추가
    const likeButton = magicProductContainer.querySelector('.like-button');
    if (likeButton) {
        likeButton.addEventListener('click', function() {
            this.classList.toggle('active');
            toggleFavorite(magicProduct.id);
        });
    }
}

// 장바구니 내용 표시
function displayCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummaryContainer = document.querySelector('.cart-summary');
    
    if (!cartItemsContainer) return;
    
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
    
    cartItemsContainer.innerHTML = '';
    
    // 각 아이템 정보
    cart.forEach(item => {
        const productDetails = products.find(p => p.id.toString() === item.id.toString()) || item;
        
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
    
    // 장바구니 금액 계산
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 50000 ? 0 : 3000;
    const total = subtotal + shipping;
    
    // 요약 정보 업데이트
    if (cartSummaryContainer) {
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
        
        // 결제 버튼 이벤트
        const checkoutButton = cartSummaryContainer.querySelector('.checkout-button');
        checkoutButton.addEventListener('click', function() {
            // 여기서는 결제 기능 대신 알림만 표시
            showNotification('결제 기능은 준비 중입니다.');
        });
    }
    
    // 장바구니 이벤트 리스너 추가
    attachCartEventListeners();
}

// 장바구니 이벤트 리스너 추가
function attachCartEventListeners() {
    // 수량 감소 버튼
    const minusButtons = document.querySelectorAll('.cart-quantity-btn.minus');
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.dataset.id;
            updateCartItemQuantity(itemId, -1);
        });
    });
    
    // 수량 증가 버튼
    const plusButtons = document.querySelectorAll('.cart-quantity-btn.plus');
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.dataset.id;
            updateCartItemQuantity(itemId, 1);
        });
    });
    
    // 삭제 버튼
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.dataset.id;
            removeFromCart(itemId);
        });
    });
}

// 상품 이벤트 리스너 추가
function attachProductEventListeners() {
    // 장바구니 추가 버튼
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.dataset.id;
            const product = products.find(p => p.id.toString() === productId);
            
            if (product) {
                addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
                
                showNotification(`${product.title}이(가) 장바구니에 추가되었습니다!`);
                updateCartCount();
            }
        });
    });
    
    // 좋아요 버튼
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
}

// 장바구니 아이템 수량 업데이트
function updateCartItemQuantity(itemId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id.toString() === itemId.toString());
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity < 1) {
            cart[itemIndex].quantity = 1;
            showNotification('최소 수량은 1개입니다.');
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}

// 장바구니에서 아이템 제거
function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id.toString() !== itemId.toString());
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCart();
    updateCartCount();
    
    showNotification('상품이 장바구니에서 제거되었습니다.');
}

// 좋아요 상태 체크
function checkIfFavorite(productId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(productId.toString());
}

// 카테고리 이름 가져오기
function getCategoryName(categoryId) {
    switch (categoryId) {
        case 'plush':
            return '부드러운 인형';
        case 'action':
            return '액션 피규어';
        case 'educational':
            return '교육용 장난감';
        case 'creative':
            return '창의력 키트';
        default:
            return categoryId;
    }
}

// 가격 포맷팅 (천 단위 구분자)
function formatPrice(price) {
    return '₩' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
