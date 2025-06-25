const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');

// 버튼을 클릭했을 때 기부 내역을 추가하는 함수
function addTask() {
    const name = nameInput.value.trim();
    const amount = amountInput.value.trim();

    // 관리자 모금 내역 초기화 명령어
    if (name === "초기화" && amount === "1234567890") {
        localStorage.removeItem("donations");
        document.getElementById("donation_UI").innerHTML = '';
        alert("모든 기부 내역이 초기화되었습니다.");
        document.getElementById('donation_Form').reset();
        nameInput.focus();
        return;
    }

    // 이름이 입력되지 않은 경우
    if (!name) {
        alert('이름을 입력해주세요.');
        nameInput.focus();
        return;
    }

    // 금액이 입력되지 않았거나 1원 미만인 경우
    if (!amount || isNaN(amount) || Number(amount) < 1) {
        alert('1원 이상의 금액을 입력해주세요.');
        amountInput.focus();
        return;
    }

    // 기부 내역 객체 생성
    const donation = {
        name: name,
        amount: Number(amount),
        time: new Date().toISOString()
    };

    // 기부 내역을 목록에 추가
    addDonationToList(donation, true);

    // 결제 완료 알림
    alert(`${name}님,\n${amount}원 결제되었습니다.\n저희를 도와주셔서 감사합니다!`);
    
    // 입력 필드 초기화
    document.getElementById('donation_Form').reset();
}

// 기부 내역을 목록에 추가하는 함수
function addDonationToList(donation, save = false) {
    const donation_UI = document.getElementById('donation_UI');
    const li = document.createElement('li');
    const hr = document.createElement('hr');
    li.style.background = 'white';
    li.style.borderRadius = '12px';
    li.style.marginBottom = '10px';
    li.style.width = '100%';
    li.style.padding = '0px';
    li.style.margin = '6px';
    li.innerHTML = `<b>${donation.name}</b> 님이 <b>${donation.amount.toLocaleString()}원</b>을 모금했습니다.<br>기부 시간 : ${donation.time.toLocaleString().slice(0, 10)}`;
    donation_UI.prepend(hr);
    donation_UI.insertBefore(li, donation_UI.firstChild);

    if (save) {
        let donations = JSON.parse(localStorage.getItem('donations')) || [];
        donations.unshift(donation);
        localStorage.setItem('donations', JSON.stringify(donations));
    }
}

// 데이터 불러오기
function loadDonations() {
    const donations = JSON.parse(localStorage.getItem('donations')) || [];
    donations.slice().reverse().forEach(d => addDonationToList(d, false));
}

// 접속시 데이터 불러오기
loadDonations();