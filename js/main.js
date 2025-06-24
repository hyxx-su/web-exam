// ===== 로그인 팝업 열기/닫기 =====
document.addEventListener('DOMContentLoaded', function() {
    // 로그인 팝업
    const loginBtn = document.querySelector('.login-btn');
    const popup = document.getElementById('login-popup');
    const closeBtn = document.querySelector('.close-btn');
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.remove('hidden');
    });
    closeBtn.addEventListener('click', function() {
        popup.classList.add('hidden');
    });
    // 팝업 바깥 클릭 시 닫기
    popup.addEventListener('click', function(e) {
        if (e.target === popup) popup.classList.add('hidden');
    });

    // ===== 갤러리 이미지 클릭 시 확대/축소 =====
    document.querySelectorAll('.img-container img').forEach(function(img) {
        img.addEventListener('click', function() {
            img.classList.toggle('zoom');
        });
    });

    // ===== 표 행 클릭 시 색상 변경 =====
    document.querySelectorAll('.info-table tbody tr').forEach(function(row) {
        row.addEventListener('click', function() {
            row.style.background = '#ffe6e6';
            setTimeout(function() {
                row.style.background = '';
            }, 800);
        });
    });

    // ===== 폼 제출 시 alert =====
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('문의가 접수되었습니다!');
        this.reset();
    });
});
