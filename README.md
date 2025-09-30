# 🎮 Games Collection - 开发者文档

这是一个精心制作的网页游戏合集项目，通过GitHub Pages发布。用户可以通过访问 `https://wolong2024.github.io/games` 直接在线游玩。

## � 在线访问

**游戏首页**: [https://wolong2024.github.io/games](https://wolong2024.github.io/games)

用户通过首页可以：
- 浏览所有可用游戏
- 查看游戏简介和特性
- 一键进入游戏
- 查看游戏详细说明

## 📁 项目结构

```
games/
├── index.html            # 游戏首页入口
├── styles.css           # 首页样式文件
├── script.js            # 首页交互逻辑
├── README.md            # 开发者文档（本文档）
└── wuziqi/             # 五子棋游戏
    ├── index.html      # 游戏主页面
    ├── script.js       # 游戏逻辑
    ├── styles.css      # 游戏样式
    └── README.md       # 游戏说明文档
```

## 🎮 当前游戏列表

### 1. 五子棋 (Gomoku)
- **路径**: `/wuziqi/`
- **访问**: [在线游玩](https://wolong2024.github.io/games/wuziqi/)
- **特性**: 双人对战、悔棋、多语言支持
- **技术**: HTML5 Canvas、响应式设计

## 🚀 本地开发

### 环境要求
- 现代浏览器（Chrome、Firefox、Safari、Edge）
- 本地Web服务器（可选，推荐）

### 快速开始

1. **克隆项目**
```bash
git clone https://github.com/wolong2024/games.git
cd games
```

2. **本地运行**
```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx serve

# 或使用PHP
php -S localhost:8000
```

3. **访问项目**
打开浏览器访问 `http://localhost:8000`

### 直接打开
也可以直接用浏览器打开 `index.html` 文件，但推荐使用本地服务器以避免跨域问题。

## �️ 技术架构

### 首页技术栈
- **HTML5**: 语义化结构和现代标签
- **CSS3**: Flexbox/Grid布局、动画效果、响应式设计
- **JavaScript ES6+**: 模块化代码、DOM操作、事件处理
- **Web Fonts**: Google Fonts (Inter字体)

### 设计特性
- **响应式设计**: 适配桌面、平板、手机
- **现代化UI**: 渐变背景、卡片式布局、微交互
- **性能优化**: 图片压缩、CSS优化、JavaScript模块化
- **可访问性**: 键盘导航、语义化HTML、合适的对比度

## 📝 添加新游戏

### 1. 创建游戏文件夹
```bash
mkdir new-game-name
cd new-game-name
```

### 2. 创建必需文件
- `index.html` - 游戏主页面
- `script.js` - 游戏逻辑
- `styles.css` - 游戏样式
- `README.md` - 游戏说明文档

### 3. 更新首页配置
在 `/script.js` 中的 `games` 对象添加新游戏：

```javascript
const games = {
    // 现有游戏...
    newgame: {
        title: '新游戏名称',
        description: '游戏描述',
        features: ['特性1', '特性2', '特性3'],
        path: './new-game-name/index.html',
        detailsPath: './new-game-name/README.md'
    }
};
```

### 4. 更新首页HTML
在 `/index.html` 中添加新的游戏卡片。

### 5. 游戏开发规范

**HTML结构**:
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>游戏名称</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- 游戏内容 -->
    <script src="script.js"></script>
</body>
</html>
```

**CSS要求**:
- 响应式设计
- 移动端优先
- 现代化视觉效果
- 良好的性能

**JavaScript要求**:
- ES6+语法
- 模块化架构
- 错误处理
- 跨浏览器兼容

## 🎨 UI/UX 指南

### 色彩规范
- 主色调: 渐变紫蓝 `#667eea` → `#764ba2`
- 成功色: `#4CAF50`
- 警告色: `#FF9800`
- 危险色: `#F44336`
- 中性色: `#718096`

### 间距规范
- 基础间距: `8px` 的倍数
- 卡片内边距: `20px-30px`
- 按钮内边距: `12px-20px`
- 元素间距: `15px-30px`

### 动画效果
- 悬停效果: `transform: translateY(-2px)`
- 过渡时间: `0.3s ease`
- 加载动画: 使用CSS keyframes
- 微交互: 按钮点击反馈

## 📊 部署说明

### GitHub Pages 部署
1. 推送代码到 `main` 分支
2. 在GitHub仓库设置中启用Pages
3. 选择 `main` 分支作为源
4. 访问 `https://username.github.io/games`

### 其他平台部署
- **Netlify**: 拖拽文件夹部署
- **Vercel**: 连接GitHub自动部署
- **Firebase Hosting**: 使用Firebase CLI

## 🐛 调试指南

### 常见问题
1. **跨域错误**: 使用本地服务器而非直接打开文件
2. **移动端适配**: 检查viewport设置和CSS媒体查询
3. **性能问题**: 优化图片大小和JavaScript代码
4. **兼容性问题**: 使用现代浏览器测试

### 调试工具
- Chrome DevTools
- Firefox Developer Tools
- 移动端调试: Chrome远程调试
- 性能分析: Lighthouse

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交Issue和Pull Request！

---

**开发愉快！** 🚀
