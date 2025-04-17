// 사용자 계정 관련 함수들

// 사용자 데이터 구조
// const userExample = {
//     email: 'user@example.com',
//     name: '홍길동',
//     password: 'hashedPassword', // 실제 구현에서는 해시 처리 필요
//     address: {
//         street: '서울시 강남구 테헤란로 123',
//         city: '서울',
//         zipCode: '06234'
//     },
//     orders: [],
//     favorites: []
// };

// 로그인 상태 확인
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// 로그인 처리
function login(email, password) {
    // 실제 구현에서는 서버 API 호출해야 함
    // 여기서는 간단한 시뮬레이션만 수행
    
    // 테스트용 사용자 정보
    const testUser = {
        email: 'test@example.com',
        password: 'password123',
        name: '테스트 사용자'
    };
    
    // 로그인 정보 확인
    if (email === testUser.email && password === testUser.password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', testUser.name);
        localStorage.setItem('userEmail', testUser.email);
        return true;
    }
    
    return false;
}

// 로그아웃 처리
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    
    // 로그인 페이지로 리다이렉트
    window.location.href = 'login.html';
}

// 회원가입 처리
function register(userData) {
    // 실제 구현에서는 서버 API 호출해야 함
    // 여기서는 간단한 시뮬레이션만 수행
    
    // 이메일 유효성 검사
    if (!isValidEmail(userData.email)) {
        return { success: false, message: '유효하지 않은 이메일 주소입니다.' };
    }
    
    // 비밀번호 유효성 검사
    if (userData.password.length < 8) {
        return { success: false, message: '비밀번호는 8자 이상이어야 합니다.' };
    }
    
    // 비밀번호 확인
    if (userData.password !== userData.confirmPassword) {
        return { success: false, message: '비밀번호가 일치하지 않습니다.' };
    }
    
    // 로컬 스토리지에 저장 (실제 구현에서는 서버에 저장)
    localStorage.setItem('registeredEmail', userData.email);
    localStorage.setItem('registeredName', userData.name);
    
    return { success: true, message: '회원가입이 완료되었습니다. 로그인해주세요.' };
}

// 이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 사용자 즐겨찾기 상품 추가/제거
function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const index = favorites.indexOf(productId.toString());
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId.toString());
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// 사용자 즐겨찾기 상품 가져오기
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// 로그인 페이지 초기화
function initLoginPage() {
    const loginForm = document.getElementById('login-form');
    
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (login(email, password)) {
            // 로그인 성공
            window.location.href = 'index.html';
        } else {
            // 로그인 실패
            const errorMsg = document.querySelector('.error-message');
            errorMsg.textContent = '이메일 또는 비밀번호가 올바르지 않습니다.';
            errorMsg.style.display = 'block';
        }
    });
}

// 회원가입 페이지 초기화
function initRegisterPage() {
    const registerForm = document.getElementById('register-form');
    
    if (!registerForm) return;
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirm-password').value
        };
        
        const result = register(userData);
        
        if (result.success) {
            // 회원가입 성공
            alert(result.message);
            window.location.href = 'login.html';
        } else {
            // 회원가입 실패
            const errorMsg = document.querySelector('.error-message');
            errorMsg.textContent = result.message;
            errorMsg.style.display = 'block';
        }
    });
}

// 계정 페이지 초기화
function initAccountPage() {
    if (!document.querySelector('.account-content')) return;
    
    if (!isLoggedIn()) {
        // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
        window.location.href = 'login.html';
        return;
    }
    
    // 사용자 정보 표시
    const userName = localStorage.getItem('userName') || '사용자';
    const userEmail = localStorage.getItem('userEmail') || 'email@example.com';
    
    document.querySelector('.user-name').textContent = userName;
    document.querySelector('.user-email').textContent = userEmail;
    
    // 로그아웃 버튼
    const logoutBtn = document.querySelector('.logout-button');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            logout();
        });
    }
    
    // 좋아요 목록 표시
    displayFavorites();
}

// 좋아요 목록 표시
function displayFavorites() {
    const favoritesContainer = document.querySelector('.favorites-container');
    if (!favoritesContainer) return;
    
    const favorites = getFavorites();
    
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>관심 상품이 없습니다.</p>';
        return;
    }
    
    favoritesContainer.innerHTML = '<div class="favorites-grid"></div>';
    const grid = favoritesContainer.querySelector('.favorites-grid');
    
    // products.js에서 정의된 products 배열 사용
    favorites.forEach(favId => {
        const product = products.find(p => p.id.toString() === favId);
        
        if (product) {
            grid.innerHTML += `
                <div class="favorite-card">
                    <img src="${product.image}" alt="${product.title}" class="favorite-image">
                    <h3 class="favorite-title">${product.title}</h3>
                    <p class="favorite-price">${formatPrice(product.price)}</p>
                    <div class="favorite-actions">
                        <a href="product-detail.html?id=${product.id}" class="view-product">상세보기</a>
                        <button class="remove-favorite" data-id="${product.id}">✕</button>
                    </div>
                </div>
            `;
        }
    });
    
    // 좋아요 제거 버튼에 이벤트 리스너 추가
    const removeButtons = document.querySelectorAll('.remove-favorite');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            toggleFavorite(productId);
            displayFavorites(); // 목록 새로고침
        });
    });
}

// 가격 포맷팅 (천 단위 구분자)
function formatPrice(price) {
    return '₩' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 로그인 상태에 따른 UI 업데이트
    const isUserLoggedIn = isLoggedIn();
    const loginLink = document.getElementById('login-link');
    const accountLink = document.getElementById('account-link');
    
    if (loginLink && accountLink) {
        if (isUserLoggedIn) {
            loginLink.style.display = 'none';
            accountLink.style.display = 'block';
        } else {
            loginLink.style.display = 'block';
            accountLink.style.display = 'none';
        }
    }
    
    // 각 페이지별 초기화
    initLoginPage();
    initRegisterPage();
    initAccountPage();
});
