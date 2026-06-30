/* ╔══════════════════════════════════════════════════════════════════╗
   ║                                                                    ║
   ║   ★★★  所有文字 / 图片 / 视频 / 音乐 都在这一个文件里改  ★★★          ║
   ║                                                                    ║
   ║                                                                    ║
   ║   文件结构：                                                        ║
   ║   ─────────                                                        ║
   ║   birthday/                                                        ║
   ║   ├─ index.html       网页结构和逻辑（一般不动）                     ║
   ║   ├─ content.js       ★ 你正在编辑的这个文件                       ║
   ║   └─ assets/          所有素材放这里                                ║
   ║      ├─ photos/       照片丢这里（建议命名 gallery-01.jpg 等）       ║
   ║      ├─ video.mp4     把视频文件命名为这个，覆盖即可                 ║
   ║      └─ music.mp3     把音乐文件命名为这个，覆盖即可                 ║
   ║                                                                    ║
   ║                                                                    ║
   ║   改完保存 → 推送到 GitHub → 等约 30 秒 → 刷新网页就能看到。         ║
   ║                                                                    ║
   ║                                                                    ║
   ║   怎么换图片？                                                      ║
   ║   ──────────                                                       ║
   ║   方式 A（推荐，用你自己的照片）：                                    ║
   ║     1. 把照片放进 assets/photos/ 文件夹                             ║
   ║     2. 把下面的 image 值改成 'assets/photos/你的照片名.jpg'         ║
   ║                                                                    ║
   ║   方式 B（用网络图片）：                                              ║
   ║     把 image 值直接写成 https://... 链接（默认就是这种方式）          ║
   ║                                                                    ║
   ║                                                                    ║
   ║   小贴士：                                                          ║
   ║   ─────────                                                       ║
   ║   • 文字里可以用 <br> 换行                                          ║
   ║   • 文字里有 ' 或 " 时要小心，别和外面的引号冲突                     ║
   ║   • 想删掉某个区块？直接把对应数组里的 { ... } 整条删掉              ║
   ║                                                                    ║
   ╚══════════════════════════════════════════════════════════════════╝ */

const SITE_CONFIG = {

    /* ───────── 1. 顶部与首屏 ───────── */
    header: {
        brand: 'To Yiting',          // 左上角小标
    },
    hero: {
        subtitle: 'Happy 30th Birthday',           // 英文副标题
        name: '余 宜 婷',                            // 名字（空格隔开更有气质）
        desc: '三十岁，像珍珠般温润闪耀的年纪。<br>滑动指尖，光影会为你让路。'
    },

    /* ───────── 2. 散落拾光（可拖拽翻转的拍立得相片）───────── */
    // 想加几张就加几条；位置用 top/left/right/bottom（百分比或像素）+ rotate（度数）
    gallery: {
        title: '散落的拾光',
        hint: '（拖拽移动，点击右下角翻转相片）',
        photos: [
            {
                image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80',
                // image: 'assets/photos/gallery-01.jpg',   ← 改成本地照片就这样写
                no: '01',
                backText: '初次相见的惊艳<br>至今难忘',
                backTitle: 'The Beginning',
                pos: { top: '5%',  left: '15%' }, rotate: -5
            },
            {
                image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=400&q=80',
                no: '02',
                backText: '每一个日常<br>都是闪光的碎片',
                backTitle: 'Daily Love',
                pos: { top: '25%', right: '15%' }, rotate: 8
            },
            {
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
                no: '03',
                backText: '愿你永远自信、从容<br>做最美的自己',
                backTitle: 'Happy Birthday',
                pos: { top: '40%', left: '35%' }, rotate: -2,
                size: { width: 260, height: 320 }   // 选填：自定义这张的尺寸
            },
            {
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
                no: '04',
                backText: '去感受世界<br>去拥抱风',
                backTitle: 'Free Soul',
                pos: { top: '15%', left: '45%' }, rotate: 4
            },
            {
                image: 'https://images.unsplash.com/photo-1499933374294-4584d31ac0f8?auto=format&fit=crop&w=400&q=80',
                no: '05',
                backText: '镜头里的你<br>如此迷人',
                backTitle: 'My Muse',
                pos: { top: '55%', left: '12%' }, rotate: -8
            },
            {
                image: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?auto=format&fit=crop&w=400&q=80',
                no: '06',
                backText: '把最好的偏爱<br>都留给你',
                backTitle: 'Endless Love',
                pos: { top: '50%', right: '20%' }, rotate: 6
            }
        ]
    },

    /* ───────── 3. 过渡语（中间的抒情段落）───────── */
    // 每条要么是字符串，要么是 { text, highlight:true }（高亮金色段落）
    transition: [
        '褪去二十岁的懵懂与青涩，<br>迎来的，是沉淀后迷人的优雅与从容。',
        '不论时光如何流转，<br>在我眼里，你始终是那个让我心动的小女孩。',
        { text: '三十而立，光芒万丈。', highlight: true }
    ],

    /* ───────── 4. 视频区 ───────── */
    // 把你的视频命名为 video.mp4 放进 assets/ 文件夹，然后 src 改成 'assets/video.mp4'
    video: {
        title: '动态的你',
        subtitle: 'Cinematic Memories',
        src: 'https://cdn.pixabay.com/video/2020/05/24/40093-424823126_large.mp4',
        poster: 'https://images.unsplash.com/photo-1499363145340-41a1b6ed3630?auto=format&fit=crop&w=1200&q=80'
    },

    /* ───────── 5. 光影辑录（照片墙网格）───────── */
    // span 控制每张图占几格，可选：
    //   ''                       普通方图（占 1 格）
    //   'col-span-2'             横图（占 2 列）
    //   'row-span-2'             竖图（占 2 行）
    //   'col-span-2 row-span-2'  大图（占 2×2）
    //   'col-span-2 md:col-span-3'  底部通栏长图
    photoWall: {
        title: '光影辑录',
        hint: '（每一次定格，都是心动的证明）',
        photos: [
            { image: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?auto=format&fit=crop&w=800&q=80',  span: 'col-span-2 row-span-2' },
            { image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',  span: 'row-span-2' },
            { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',  span: '' },
            { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',  span: 'col-span-2' },
            { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',  span: '' },
            { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',  span: '' },
            { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',  span: 'col-span-2 md:col-span-3' }
        ]
    },

    /* ───────── 6. 足迹坐标（左侧坐标列表 + 右侧切换照片）───────── */
    map: {
        title: '足迹坐标',
        subtitle: 'Our World Map',
        hint: '（悬浮或点击坐标，点亮那里的回忆）',
        locations: [
            { coords: '35.6762° N, 139.6503° E', title: '初雪的浪漫 · 某座城', image: 'https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&w=800&q=80' },
            { coords: '18.2528° N, 109.5119° E', title: '海风与日落 · 某片海', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
            { coords: '48.8566° N, 2.3522° E',   title: '城市漫步 · 某条街', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80' },
            { coords: '31.2304° N, 121.4737° E', title: '属于我们的家',       image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80' }
        ]
    },

    /* ───────── 7. 一封专属情书 ───────── */
    // letter 文本里的 \n 表示换行
    letter: {
        title: '一封专属情书',
        hint: '（轻触火漆印章拆启）',
        waxInitial: 'Y',                                // 火漆印章上的字母
        recipient: '致 亲爱的宜婷',
        content: '生日快乐，我的女孩。\n\n三十岁，是人生另一段华丽冒险的开篇。无论外面的世界多复杂，在我这里，你可以永远做最真实、最放松的自己。未来的每一步，无论是晴空万里还是细雨微风，我都会牵着你的手一起走。\n\n愿你岁岁平安，闪闪发光。\n我爱你。',
        signature: '爱你的他'
    },

    /* ───────── 8. 页脚 ───────── */
    footer: 'FOREVER & ALWAYS',

    /* ───────── 9. 背景音乐 ───────── */
    // 把你的音乐命名为 music.mp3 放进 assets/ 文件夹，然后把下面改成 'assets/music.mp3'
    music: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=romantic-piano-116132.mp3'
};
