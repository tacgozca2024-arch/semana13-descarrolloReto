const galaxyCanvas = document.querySelector('.galaxy-canvas');
const gCtx = galaxyCanvas.getContext('2d');

galaxyCanvas.width = window.innerWidth;
galaxyCanvas.height = window.innerHeight;

const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * galaxyCanvas.width,
    y: Math.random() * galaxyCanvas.height,
    r: Math.random() * 4.8 + 2.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.7 + 0.2,
    color: ['#6d28d9', '#0ea5e9', '#059669', '#dc2626', '#d97706'][
        Math.floor(Math.random() * 5)
    ]
}));

function animateGalaxy() {
    gCtx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

    stars.forEach(p => {
        gCtx.beginPath();
        gCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        gCtx.fillStyle = p.color;
        gCtx.globalAlpha = p.alpha;
        gCtx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > galaxyCanvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > galaxyCanvas.height) p.dy *= -1;
    });

    gCtx.globalAlpha = 1;
    requestAnimationFrame(animateGalaxy);
}

animateGalaxy();

window.addEventListener('resize', () => {
    galaxyCanvas.width = window.innerWidth;
    galaxyCanvas.height = window.innerHeight;
});
