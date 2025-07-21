// FAQ 아코디언 기능 및 신청 폼 안내 메시지 (education.html 전용)
document.addEventListener('DOMContentLoaded', function() {
    // FAQ 아코디언
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const item = btn.parentElement;
            item.classList.toggle('active');
        });
    });

    // 신청 폼 제출 시 안내 메시지 표시
    const eduForm = document.getElementById('educationForm');
    if (eduForm) {
        eduForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formSuccess').style.display = 'block';
            eduForm.reset();
            setTimeout(function() {
                document.getElementById('formSuccess').style.display = 'none';
            }, 3000);
        });
    }

    // 장애 인식 퀴즈 기능
    (function() {
        const quizOptions = document.querySelectorAll('.quiz-option');
        const quizResult = document.querySelector('.quiz-result');
        if (quizOptions.length && quizResult) {
            quizOptions.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    // 모든 버튼 선택 해제
                    quizOptions.forEach(function(b) { b.classList.remove('selected'); });
                    btn.classList.add('selected');
                    // 정답 판별
                    if (btn.dataset.correct) {
                        quizResult.textContent = '정답입니다! 장애인은 다양한 가능성과 능력을 가진 소중한 이웃입니다.';
                        quizResult.className = 'quiz-result correct';
                    } else {
                        quizResult.textContent = '아쉽습니다. 다시 한 번 생각해보세요!';
                        quizResult.className = 'quiz-result incorrect';
                    }
                    quizResult.style.display = 'block';
                });
            });
        }
    })();

    (function() {
        const maze = [
            ['S',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
            [1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1],
            [1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
            [1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1],
            [1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1],
            [1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
            [1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1],
            [1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
            [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
            [1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
            [1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1],
            [1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
            [1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
            [1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
            [1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
            [1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1],
            [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1],
            [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1],
            [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1],
            [1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1],
            [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'E'],
        ];
          
        const ROWS = maze.length;
        const COLS = maze[0].length;
        let player = {row:0, col:0};
        for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++) if(maze[r][c]==='S'){player={row:r,col:c};}
        const mazeGame = document.getElementById('maze-game');
        const mazeMessage = document.getElementById('maze-message');
        const mazeStartBtn = document.getElementById('maze-start-btn');
        function renderMaze() {
            mazeGame.innerHTML = '';
            for(let r=0;r<ROWS;r++) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'maze-row';
                for(let c=0;c<COLS;c++) {
                    const cellDiv = document.createElement('div');
                    let cellType = maze[r][c];
                    cellDiv.className = 'maze-cell ' + (
                        cellType===1 ? 'maze-wall' :
                        cellType==='S' ? 'maze-start' :
                        cellType==='E' ? 'maze-end' :
                        'maze-path'
                    );
                    if(r===player.row && c===player.col) {
                        const playerDiv = document.createElement('div');
                        playerDiv.className = 'maze-player';
                        cellDiv.appendChild(playerDiv);
                    }
                    rowDiv.appendChild(cellDiv);
                }
                mazeGame.appendChild(rowDiv);
            }
        }
        function isWall(r,c) {
            return r<0||c<0||r>=ROWS||c>=COLS||maze[r][c]===1;
        }
        function isEnd(r,c) {
            return maze[r][c]==='E';
        }
        let gameActive = false;
        if(mazeStartBtn) {
            mazeStartBtn.addEventListener('click', function() {
                player = {row:0, col:0};
                gameActive = true;
                mazeGame.style.display = 'inline-block';
                mazeMessage.style.display = 'none';
                renderMaze();
                // 버튼을 미로 아래로 이동
                if (mazeGame.nextSibling !== mazeStartBtn) {
                    mazeGame.parentNode.insertBefore(mazeStartBtn, mazeGame.nextSibling);
                }
                // 버튼 비활성화
                mazeStartBtn.disabled = true;
                mazeStartBtn.style.opacity = '0.7';
                mazeStartBtn.style.cursor = 'not-allowed';
            });
        }
        document.addEventListener('keydown', function(e) {
            if(!mazeGame || !gameActive) return;
            if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
                e.preventDefault();
                if(e.key==='ArrowUp') handleMove(-1,0);
                if(e.key==='ArrowDown') handleMove(1,0);
                if(e.key==='ArrowLeft') handleMove(0,-1);
                if(e.key==='ArrowRight') handleMove(0,1);
            }
        });
        function handleMove(dr,dc) {
            if(mazeMessage) mazeMessage.style.display='none';
            const nr = player.row+dr, nc = player.col+dc;
            if(isWall(nr,nc)) return;
            player = {row:nr, col:nc};
            renderMaze();
            if(isEnd(nr,nc)) {
                if(mazeMessage) {
                    mazeMessage.textContent = '축하합니다! 장애인도 안전하고 편리하게 이동할 권리가 있습니다.';
                    mazeMessage.style.display = 'block';
                }
                gameActive = false;
                // 버튼 활성화
                mazeStartBtn.disabled = false;
                mazeStartBtn.style.opacity = '1';
                mazeStartBtn.style.cursor = 'pointer';
            }
        }
        renderMaze();
    })();
}); 