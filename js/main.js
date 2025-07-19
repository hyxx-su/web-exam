// 화면 중앙에 공지사항 팝업을 띄우는 함수
function openPopup() {
    // 팝업창 크기 지정
    const popupWidth = 500;
    const popupHeight = 400;
    // 듀얼 모니터 등 다양한 환경에서 좌상단 기준 좌표값 구하기
    const screenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const screenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    // 현재 브라우저 창의 가로/세로 크기 구하기
    const width = window.innerWidth || document.documentElement.clientWidth || screen.width;
    const height = window.innerHeight || document.documentElement.clientHeight || screen.height;
    // 중앙 정렬을 위한 left/top 좌표 계산
    const left = screenLeft + (width - popupWidth) / 2;
    const top = screenTop + (height - popupHeight) / 2;
    // 팝업창 열기
    let neWin = window.open("notice.html", "공지", `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);
    // 팝업 차단 시 안내
    if (neWin == null) {
        alert("팝업이 차단되어 있습니다. 팝업차단을 해제해주세요.");
    }
};

// 현재 URL에 'main.html'이 포함되어 있는지 확인
if (document.location.href.includes("main.html")) {
    // 포함되어 있다면 창을 열 때 openPopup을 작동시킴
    window.addEventListener('DOMContentLoaded', openPopup);
}