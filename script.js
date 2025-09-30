// 游戏数据
const games = {
    wuziqi: {
        title: '五子棋',
        description: '经典策略对战游戏，支持双人本地对战。先连成五子者获胜！',
        features: ['标准15x15棋盘', '智能胜负判断', '悔棋功能', '走棋记录', '多语言支持'],
        path: './wuziqi/index.html',
        detailsPath: './wuziqi/README.md'
    }
};

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initializePreview();
    addClickEffects();
});

// 初始化游戏预览
function initializePreview() {
    drawGomokuPreview();
}

// 绘制五子棋预览
function drawGomokuPreview() {
    const canvas = document.getElementById('gomoku-preview');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const size = 120;
    ctx.clearRect(0, 0, size, size);
    
    // 绘制棋盘
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 1;
    
    // 绘制网格线
    for (let i = 1; i < 8; i++) {
        const pos = (i * size) / 8;
        // 垂直线
        ctx.beginPath();
        ctx.moveTo(pos, size/8);
        ctx.lineTo(pos, size - size/8);
        ctx.stroke();
        
        // 水平线
        ctx.beginPath();
        ctx.moveTo(size/8, pos);
        ctx.lineTo(size - size/8, pos);
        ctx.stroke();
    }
    
    // 绘制一些示例棋子
    const pieces = [
        {x: 2, y: 3, color: '#000'},
        {x: 3, y: 3, color: '#fff'},
        {x: 4, y: 3, color: '#000'},
        {x: 3, y: 4, color: '#fff'},
        {x: 4, y: 4, color: '#000'}
    ];
    
    pieces.forEach(piece => {
        const x = (piece.x * size) / 8;
        const y = (piece.y * size) / 8;
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = piece.color;
        ctx.fill();
        ctx.strokeStyle = piece.color === '#000' ? '#333' : '#ccc';
        ctx.stroke();
    });
}

// 添加点击效果
function addClickEffects() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 开始游戏
function playGame(gameId) {
    const game = games[gameId];
    if (!game) {
        alert('游戏暂未开放');
        return;
    }
    
    // 添加加载动画
    const button = event.target.closest('.play-button');
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="play-icon">⏳</span> 启动中...';
    button.disabled = true;
    
    // 模拟加载延迟，然后跳转
    setTimeout(() => {
        window.open(game.path, '_blank');
        
        // 恢复按钮状态
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1000);
    }, 500);
}

// 显示游戏详情
function showGameInfo(gameId) {
    const game = games[gameId];
    if (!game) return;
    
    const modal = document.getElementById('game-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2 style="color: #2d3748; margin-bottom: 20px; font-size: 1.8rem;">
            ${game.title} - 游戏详情
        </h2>
        <p style="color: #718096; margin-bottom: 20px; line-height: 1.6;">
            ${game.description}
        </p>
        <h3 style="color: #4a5568; margin-bottom: 15px;">游戏特性</h3>
        <ul style="color: #718096; margin-bottom: 25px; padding-left: 20px;">
            ${game.features.map(feature => `<li style="margin-bottom: 8px;">${feature}</li>`).join('')}
        </ul>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button onclick="playGame('${gameId}')" style="
                background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s;
            " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                🎮 立即游戏
            </button>
            <button onclick="window.open('${game.detailsPath}', '_blank')" style="
                background: rgba(103, 126, 234, 0.1);
                color: #667eea;
                border: 2px solid #667eea;
                padding: 12px 24px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            " onmouseover="this.style.background='#667eea'; this.style.color='white'" onmouseout="this.style.background='rgba(103, 126, 234, 0.1)'; this.style.color='#667eea'">
                📖 详细说明
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // 添加ESC键关闭功能
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('game-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// 添加一些动画效果
function addFloatingAnimation() {
    const icons = document.querySelectorAll('.floating-icon');
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 2}s`;
    });
}

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    addFloatingAnimation();
});

// 添加粒子效果（可选的酷炫效果）
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: float ${Math.random() * 10 + 5}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
    `;
    
    container.appendChild(particle);
}

// 可选：启用粒子效果（取消注释下面这行）
// createParticles();