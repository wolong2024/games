// 国际化配置
const i18nConfig = {
    zh: {
        title: "网页版五子棋游戏",
        gameTitle: "五子棋游戏",
        currentPlayer: "当前玩家：",
        blackPiece: "黑子",
        whitePiece: "白子",
        gameInProgress: "游戏进行中",
        gameOver: "游戏结束",
        restart: "重新开始",
        undo: "悔棋",
        moveHistory: "走棋记录",
        gameRules: "游戏规则",
        rule1: "黑子先手，白子后手",
        rule2: "在棋盘上点击放置棋子",
        rule3: "率先连成5子者获胜",
        rule4: "可横向、纵向、斜向连线",
        congratulations: "🎉 恭喜{player}获胜！",
        playAgain: "再来一局",
        blackWins: "黑子获胜！",
        whiteWins: "白子获胜！"
    },
    en: {
        title: "Gomoku Game",
        gameTitle: "Gomoku Game",
        currentPlayer: "Current Player:",
        blackPiece: "Black",
        whitePiece: "White", 
        gameInProgress: "Game in Progress",
        gameOver: "Game Over",
        restart: "Restart",
        undo: "Undo",
        moveHistory: "Move History",
        gameRules: "Game Rules",
        rule1: "Black moves first, White second",
        rule2: "Click on the board to place pieces",
        rule3: "First to connect 5 pieces wins",
        rule4: "Connect horizontally, vertically, or diagonally",
        congratulations: "🎉 Congratulations! {player} wins!",
        playAgain: "Play Again",
        blackWins: "Black Wins!",
        whiteWins: "White Wins!"
    },
    ja: {
        title: "五目並べゲーム",
        gameTitle: "五目並べ",
        currentPlayer: "現在のプレイヤー：",
        blackPiece: "黒",
        whitePiece: "白",
        gameInProgress: "ゲーム進行中",
        gameOver: "ゲーム終了",
        restart: "再開",
        undo: "待った",
        moveHistory: "手順記録",
        gameRules: "ゲームルール",
        rule1: "黒が先手、白が後手",
        rule2: "盤面をクリックして石を置く",
        rule3: "先に5つ並べた方の勝ち",
        rule4: "縦・横・斜めに並べる",
        congratulations: "🎉 おめでとうございます！{player}の勝利！",
        playAgain: "もう一度",
        blackWins: "黒の勝ち！",
        whiteWins: "白の勝ち！"
    },
    ko: {
        title: "오목 게임",
        gameTitle: "오목",
        currentPlayer: "현재 플레이어:",
        blackPiece: "흑돌",
        whitePiece: "백돌",
        gameInProgress: "게임 진행중",
        gameOver: "게임 종료",
        restart: "다시 시작",
        undo: "무르기",
        moveHistory: "기보",
        gameRules: "게임 규칙",
        rule1: "흑돌이 먼저, 백돌이 나중",
        rule2: "바둑판을 클릭하여 돌을 놓기",
        rule3: "먼저 5개를 연결하면 승리",
        rule4: "가로, 세로, 대각선으로 연결",
        congratulations: "🎉 축하합니다! {player} 승리!",
        playAgain: "다시 하기",
        blackWins: "흑돌 승리!",
        whiteWins: "백돌 승리!"
    },
    vi: {
        title: "Trò Chơi Cờ Carô",
        gameTitle: "Cờ Carô",
        currentPlayer: "Người chơi hiện tại:",
        blackPiece: "Quân Đen",
        whitePiece: "Quân Trắng",
        gameInProgress: "Trò chơi đang diễn ra",
        gameOver: "Trò chơi kết thúc",
        restart: "Chơi lại",
        undo: "Hoàn tác",
        moveHistory: "Lịch sử nước đi",
        gameRules: "Luật chơi",
        rule1: "Quân đen đi trước, quân trắng đi sau",
        rule2: "Nhấp vào bàn cờ để đặt quân",
        rule3: "Ai tạo thành 5 quân liên tiếp trước sẽ thắng",
        rule4: "Có thể xếp theo hàng ngang, dọc hoặc chéo",
        congratulations: "🎉 Chúc mừng! {player} thắng!",
        playAgain: "Chơi lại",
        blackWins: "Quân Đen thắng!",
        whiteWins: "Quân Trắng thắng!"
    },
    'km': {
        title: 'ល្បែងកំប៉ុងធ្នូ',
        currentPlayer: 'អ្នកលេងបច្ចុប្បន្ន៖',
        gameReady: 'ល្បែងត្រៀមរួចរាល់',
        reset: 'ចាប់ផ្តើមឡើងវិញ',
        undo: 'ថយក្រោយ',
        rulesTitle: 'ច្បាប់ល្បែង',
        rule1: 'វេនគ្នាដាក់ក្បួនលើក្តារ',
        rule2: 'អ្នកដំបូងដែលភ្ជាប់បានប្រាំក្បួនជាអ្នកឈ្នះ',
        rule3: 'អាចភ្ជាប់តាមបណ្តោយ បណ្តឹង ឬ​ទ្រេត',
        playerWins: 'អ្នកលេង {player} ឈ្នះ!',
        gameDraw: 'សម្រុប!',
        blackPlayer: 'ខ្មៅ',
        whitePlayer: 'ស'
    }
};

// 国际化管理器
class I18nManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('gomoku-language') || 'zh';
        this.translations = i18nConfig;
        this.init();
    }
    
    init() {
        this.updateLanguageSelector();
        this.translatePage();
        this.bindLanguageChange();
    }
    
    updateLanguageSelector() {
        const selector = document.getElementById('language-select');
        if (selector) {
            selector.value = this.currentLanguage;
        }
    }
    
    bindLanguageChange() {
        const selector = document.getElementById('language-select');
        if (selector) {
            selector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('gomoku-language', lang);
            this.translatePage();
            document.documentElement.lang = lang;
        }
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.get(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // 更新页面标题
        const title = this.get('title');
        if (title) {
            document.title = title;
        }
    }
    
    get(key, params = {}) {
        let translation = this.translations[this.currentLanguage]?.[key] || 
                         this.translations['zh'][key] || key;
        
        // 替换参数
        Object.keys(params).forEach(param => {
            translation = translation.replace(`{${param}}`, params[param]);
        });
        
        return translation;
    }
}

class GomokuGame {
    constructor() {
        // 初始化国际化
        this.i18n = new I18nManager();
        
        this.canvas = document.getElementById('game-board');
        this.ctx = this.canvas.getContext('2d');
        this.boardSize = 15;
        
        // 动态计算格子大小以适应不同屏幕
        this.calculateCellSize();
        
        this.board = [];
        this.currentPlayer = 1; // 1为黑子，2为白子
        this.gameOver = false;
        this.moveHistory = [];
        
        this.initGame();
        this.bindEvents();
        this.drawBoard();
        this.updateUI();
        
        // 监听窗口大小变化
        window.addEventListener('resize', () => {
            this.handleResize();
        });
        
        // 监听屏幕方向变化
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleResize();
            }, 100);
        });
    }
    
    calculateCellSize() {
        // 获取容器实际尺寸
        const container = document.querySelector('.game-board-container');
        const containerRect = container.getBoundingClientRect();
        
        // 移动端适配
        if (window.innerWidth <= 768) {
            // 计算可用空间，减去padding
            const availableWidth = Math.min(
                containerRect.width - 40,  // 减去padding
                window.innerHeight - 300,  // 为其他元素留出空间
                480  // 最大尺寸限制
            );
            
            this.cellSize = Math.floor(availableWidth / (this.boardSize + 1));
            this.cellSize = Math.max(18, Math.min(this.cellSize, 32));
        } else {
            this.cellSize = 40;
        }
        
        // 确保canvas尺寸是整数
        this.canvasSize = this.cellSize * (this.boardSize + 1);
    }
    
    handleResize() {
        this.calculateCellSize();
        this.canvas.width = this.canvasSize;
        this.canvas.height = this.canvasSize;
        
        // 设置CSS尺寸
        this.canvas.style.width = this.canvasSize + 'px';
        this.canvas.style.height = this.canvasSize + 'px';
        
        this.drawBoard();
    }
    
    initGame() {
        // 初始化棋盘
        for (let i = 0; i < this.boardSize; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.boardSize; j++) {
                this.board[i][j] = 0;
            }
        }
        
        // 设置canvas尺寸
        this.canvas.width = this.canvasSize;
        this.canvas.height = this.canvasSize;
        
        // 设置canvas的CSS尺寸以保持正确的显示比例
        this.canvas.style.width = this.canvasSize + 'px';
        this.canvas.style.height = this.canvasSize + 'px';
    }
    
    bindEvents() {
        // 支持鼠标和触摸事件
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.handleTouch(e);
        });
        
        // 防止触摸时的默认行为
        this.canvas.addEventListener('touchstart', (e) => e.preventDefault());
        this.canvas.addEventListener('touchmove', (e) => e.preventDefault());
        
        // 重新开始按钮
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartGame();
        });
        
        // 悔棋按钮
        document.getElementById('undo-btn').addEventListener('click', () => {
            this.undoMove();
        });
        
        // 新游戏按钮（胜利弹窗中）
        document.getElementById('new-game-btn').addEventListener('click', () => {
            this.restartGame();
            document.getElementById('win-modal').style.display = 'none';
        });
    }
    
    handleClick(e) {
        if (this.gameOver) return;
        const coords = this.getCoordinates(e);
        if (coords && this.isValidMove(coords.row, coords.col)) {
            this.makeMove(coords.row, coords.col);
        }
    }
    
    handleTouch(e) {
        if (this.gameOver) return;
        
        const touch = e.changedTouches[0];
        const coords = this.getTouchCoordinates(touch);
        
        // 调试信息（可在开发时启用）
        // console.log('Touch coords:', coords);
        // this.showTouchDebug(touch, coords);
        
        if (coords && this.isValidMove(coords.row, coords.col)) {
            this.makeMove(coords.row, coords.col);
        }
    }
    
    // 调试方法：显示触摸点位置（开发时可启用）
    showTouchDebug(touch, coords) {
        const rect = this.canvas.getBoundingClientRect();
        console.log('Touch Debug:', {
            touchX: touch.clientX,
            touchY: touch.clientY,
            canvasRect: rect,
            calculatedCoords: coords,
            cellSize: this.cellSize,
            canvasSize: this.canvasSize
        });
    }
    
    getCoordinates(e) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        return this.convertToGridCoordinates(x, y);
    }
    
    getTouchCoordinates(touch) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        const x = (touch.clientX - rect.left) * scaleX;
        const y = (touch.clientY - rect.top) * scaleY;
        return this.convertToGridCoordinates(x, y);
    }
    
    convertToGridCoordinates(x, y) {
        // 使用更精确的坐标转换
        const offsetX = this.cellSize / 2;
        const offsetY = this.cellSize / 2;
        
        const col = Math.round((x - offsetX) / this.cellSize);
        const row = Math.round((y - offsetY) / this.cellSize);
        
        // 添加边界检查和容错
        if (row >= 0 && row < this.boardSize && col >= 0 && col < this.boardSize) {
            return { row, col };
        }
        return null;
    }
    
    drawBoard() {
        const ctx = this.ctx;
        const cellSize = this.cellSize;
        
        // 清空画布
        ctx.fillStyle = '#DEB887';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制网格线
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = Math.max(1, cellSize * 0.025);
        
        for (let i = 0; i < this.boardSize; i++) {
            // 垂直线
            ctx.beginPath();
            ctx.moveTo(cellSize / 2 + i * cellSize, cellSize / 2);
            ctx.lineTo(cellSize / 2 + i * cellSize, cellSize / 2 + (this.boardSize - 1) * cellSize);
            ctx.stroke();
            
            // 水平线
            ctx.beginPath();
            ctx.moveTo(cellSize / 2, cellSize / 2 + i * cellSize);
            ctx.lineTo(cellSize / 2 + (this.boardSize - 1) * cellSize, cellSize / 2 + i * cellSize);
            ctx.stroke();
        }
        
        // 绘制天元和星位
        this.drawStars();
        
        // 绘制棋子
        this.drawPieces();
        
        // 绘制最后一步的标记
        this.drawLastMoveMarker();
    }
    
    drawStars() {
        const ctx = this.ctx;
        const cellSize = this.cellSize;
        const starPositions = [
            [3, 3], [3, 11], [11, 3], [11, 11], [7, 7]
        ];
        
        ctx.fillStyle = '#8B4513';
        const starRadius = Math.max(2, cellSize * 0.08);
        starPositions.forEach(pos => {
            const x = cellSize / 2 + pos[1] * cellSize;
            const y = cellSize / 2 + pos[0] * cellSize;
            ctx.beginPath();
            ctx.arc(x, y, starRadius, 0, 2 * Math.PI);
            ctx.fill();
        });
    }
    
    drawPieces() {
        const ctx = this.ctx;
        const cellSize = this.cellSize;
        
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                if (this.board[i][j] !== 0) {
                    const x = cellSize / 2 + j * cellSize;
                    const y = cellSize / 2 + i * cellSize;
                    const radius = cellSize * 0.4;
                    
                    // 绘制棋子阴影
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                    ctx.beginPath();
                    ctx.arc(x + 2, y + 2, radius, 0, 2 * Math.PI);
                    ctx.fill();
                    
                    // 绘制棋子
                    if (this.board[i][j] === 1) {
                        // 黑子
                        const gradient = ctx.createRadialGradient(x - radius/3, y - radius/3, 0, x, y, radius);
                        gradient.addColorStop(0, '#666');
                        gradient.addColorStop(1, '#000');
                        ctx.fillStyle = gradient;
                    } else {
                        // 白子
                        const gradient = ctx.createRadialGradient(x - radius/3, y - radius/3, 0, x, y, radius);
                        gradient.addColorStop(0, '#fff');
                        gradient.addColorStop(1, '#ddd');
                        ctx.fillStyle = gradient;
                    }
                    
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI);
                    ctx.fill();
                    
                    // 棋子边框
                    ctx.strokeStyle = this.board[i][j] === 1 ? '#333' : '#999';
                    ctx.lineWidth = Math.max(1, cellSize * 0.025);
                    ctx.stroke();
                }
            }
        }
    }
    
    drawLastMoveMarker() {
        if (this.moveHistory.length === 0) return;
        
        const lastMove = this.moveHistory[this.moveHistory.length - 1];
        const ctx = this.ctx;
        const cellSize = this.cellSize;
        const x = cellSize / 2 + lastMove.col * cellSize;
        const y = cellSize / 2 + lastMove.row * cellSize;
        
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = Math.max(2, cellSize * 0.05);
        ctx.beginPath();
        ctx.arc(x, y, cellSize * 0.3, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    isValidMove(row, col) {
        return row >= 0 && row < this.boardSize && 
               col >= 0 && col < this.boardSize && 
               this.board[row][col] === 0;
    }
    
    makeMove(row, col) {
        this.board[row][col] = this.currentPlayer;
        this.moveHistory.push({
            row: row,
            col: col,
            player: this.currentPlayer
        });
        
        this.updateMoveHistory();
        
        if (this.checkWin(row, col)) {
            this.gameOver = true;
            this.showWinModal();
        } else {
            this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        }
        
        this.drawBoard();
        this.updateUI();
    }
    
    checkWin(row, col) {
        const player = this.board[row][col];
        const directions = [
            [0, 1],   // 水平
            [1, 0],   // 垂直
            [1, 1],   // 主对角线
            [1, -1]   // 副对角线
        ];
        
        for (let dir of directions) {
            let count = 1;
            
            // 向一个方向检查
            for (let i = 1; i < 5; i++) {
                const newRow = row + dir[0] * i;
                const newCol = col + dir[1] * i;
                
                if (newRow < 0 || newRow >= this.boardSize || 
                    newCol < 0 || newCol >= this.boardSize ||
                    this.board[newRow][newCol] !== player) {
                    break;
                }
                count++;
            }
            
            // 向相反方向检查
            for (let i = 1; i < 5; i++) {
                const newRow = row - dir[0] * i;
                const newCol = col - dir[1] * i;
                
                if (newRow < 0 || newRow >= this.boardSize || 
                    newCol < 0 || newCol >= this.boardSize ||
                    this.board[newRow][newCol] !== player) {
                    break;
                }
                count++;
            }
            
            if (count >= 5) {
                return true;
            }
        }
        
        return false;
    }
    
    undoMove() {
        if (this.moveHistory.length === 0 || this.gameOver) return;
        
        const lastMove = this.moveHistory.pop();
        this.board[lastMove.row][lastMove.col] = 0;
        this.currentPlayer = lastMove.player;
        
        this.drawBoard();
        this.updateUI();
        this.updateMoveHistory();
    }
    
    restartGame() {
        this.board = [];
        this.moveHistory = [];
        this.currentPlayer = 1;
        this.gameOver = false;
        
        this.initGame();
        this.drawBoard();
        this.updateUI();
        this.updateMoveHistory();
    }
    
    updateUI() {
        const playerText = document.getElementById('current-player-text');
        const playerIndicator = document.getElementById('player-indicator');
        const gameStatus = document.getElementById('game-status');
        const undoBtn = document.getElementById('undo-btn');
        
        if (this.gameOver) {
            const winnerKey = this.currentPlayer === 1 ? 'blackWins' : 'whiteWins';
            gameStatus.textContent = this.i18n.get('gameOver') + ' - ' + this.i18n.get(winnerKey);
            gameStatus.style.background = '#e74c3c';
        } else {
            const playerKey = this.currentPlayer === 1 ? 'blackPiece' : 'whitePiece';
            playerText.textContent = this.i18n.get(playerKey);
            playerIndicator.className = 'player-indicator';
            if (this.currentPlayer === 2) {
                playerIndicator.classList.add('white');
            }
            gameStatus.textContent = this.i18n.get('gameInProgress');
            gameStatus.style.background = '#3498db';
        }
        
        undoBtn.disabled = this.moveHistory.length === 0 || this.gameOver;
    }
    
    updateMoveHistory() {
        const moveList = document.getElementById('move-list');
        moveList.innerHTML = '';
        
        this.moveHistory.forEach((move, index) => {
            const moveItem = document.createElement('div');
            moveItem.className = `move-item ${move.player === 1 ? 'black' : 'white'}`;
            
            const moveText = document.createElement('span');
            moveText.textContent = `${index + 1}. ${String.fromCharCode(65 + move.col)}${move.row + 1}`;
            
            const playerText = document.createElement('span');
            playerText.textContent = move.player === 1 ? '●' : '○';
            
            moveItem.appendChild(moveText);
            moveItem.appendChild(playerText);
            moveList.appendChild(moveItem);
        });
        
        // 滚动到底部
        moveList.scrollTop = moveList.scrollHeight;
    }
    
    showWinModal() {
        const modal = document.getElementById('win-modal');
        const winMessage = document.getElementById('win-message');
        const playerKey = this.currentPlayer === 1 ? 'blackPiece' : 'whitePiece';
        const player = this.i18n.get(playerKey);
        
        winMessage.textContent = this.i18n.get('congratulations', { player });
        modal.style.display = 'block';
        
        // 添加烟花效果
        this.createFireworks();
    }
    
    createFireworks() {
        // 简单的庆祝效果
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.style.cssText = `
                    position: fixed;
                    width: 4px;
                    height: 4px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    animation: firework 2s ease-out forwards;
                `;
                
                document.body.appendChild(firework);
                
                setTimeout(() => {
                    firework.remove();
                }, 2000);
            }, i * 50);
        }
        
        // 添加CSS动画
        if (!document.getElementById('firework-style')) {
            const style = document.createElement('style');
            style.id = 'firework-style';
            style.textContent = `
                @keyframes firework {
                    0% {
                        transform: scale(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new GomokuGame();
});

// 点击模态框背景关闭
document.addEventListener('click', (e) => {
    const modal = document.getElementById('win-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 防止页面滚动（移动端）
document.addEventListener('touchmove', (e) => {
    if (e.target.tagName !== 'SELECT' && !e.target.classList.contains('move-list')) {
        e.preventDefault();
    }
}, { passive: false });