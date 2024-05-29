// JavaScript code to handle lyrics display and audio play
document.getElementById('audioPlayer').addEventListener('play', function() {
    document.getElementById('lyricsText').classList.remove('hidden');
});
