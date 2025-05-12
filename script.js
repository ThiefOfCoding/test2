// Cria o botão de música
const musicBtn = document.createElement('button');
musicBtn.id = 'music-btn';
musicBtn.innerText = '🎵 ▶️';

// Adiciona ao painel HOME
window.addEventListener('DOMContentLoaded', () => {
    const homePanel = document.getElementById('home');
    if (homePanel) {
        homePanel.appendChild(musicBtn);
    }

    // controle de navegação
    const home = document.getElementById('home');
    const album = document.getElementById('album');
    document.getElementById('btn-back').onclick = () => {
        album.style.display = 'none';
        home.style.display = 'flex';
    };
});

// Cria iframe do YouTube
const musicDiv = document.createElement('div');
musicDiv.id = 'music-player';
const musicIframe = document.createElement('iframe');
musicIframe.width = '0';
musicIframe.height = '0';
musicIframe.src = 'https://www.youtube.com/embed/ZZ0cTl8umGU?enablejsapi=1&loop=1&playlist=ZZ0cTl8umGU';
musicIframe.allow = 'autoplay';
musicIframe.frameBorder = '0';
musicDiv.appendChild(musicIframe);
document.body.appendChild(musicDiv);

let player;
let isPlaying = false;

// Carrega a API do YouTube
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// YouTube API ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player(musicIframe, {
        events: {
            'onReady': (event) => {
                // Player pronto, mas não inicia automaticamente
            }
        }
    });
}

// Controle de som no botão
musicBtn.onclick = () => {
    if (!player) return;

    if (!isPlaying) {
        player.playVideo();
        musicBtn.innerText = '🎵 ⏸️';
        isPlaying = true;
    } else {
        player.pauseVideo();
        musicBtn.innerText = '🎵 ▶️';
        isPlaying = false;
    }
};
