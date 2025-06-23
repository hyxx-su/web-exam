document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('donationForm');
    if (!form) return;

    // right-ads 영역에 이미 있는 donationList를 사용
    const donationList = document.getElementById('donationList');
    if (donationList && !document.getElementById('donationUl')) {
        donationList.style.marginTop = '30px';
        donationList.innerHTML = '<h3>최근 모금 내역</h3><ul id="donationUl" style="list-style:none; padding:0;"></ul>';
    }
    const donationUl = document.getElementById('donationUl');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const amountInput = document.getElementById('amount');
        const messageInput = document.getElementById('message');
        const name = nameInput.value.trim();
        const amount = amountInput.value.trim();
        const message = messageInput.value.trim();

        if (!name) {
            alert('이름을 입력해주세요.');
            nameInput.focus();
            return;
        }
        if (!amount || isNaN(amount) || Number(amount) < 1) {
            alert('1원 이상의 금액을 입력해주세요.');
            amountInput.focus();
            return;
        }

        // 모금 내역 화면에 추가
        const li = document.createElement('li');
        li.style.background = '#f0f6ff';
        li.style.borderRadius = '8px';
        li.style.marginBottom = '10px';
        li.style.padding = '12px';
        li.innerHTML = `<b>${name}</b> 님이 <b>${Number(amount).toLocaleString()}원</b>을 모금했습니다.<br><span style=\"color:#555;\">${message ? '메시지: ' + message : ''}</span>`;
        donationUl.prepend(li);

        alert('모금이 성공적으로 접수되었습니다! 감사합니다.');
        form.reset();
        nameInput.focus();
    });
});
