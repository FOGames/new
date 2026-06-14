function loadGames(categoryFilter) {
    const data = allGames; // استخدام المتغير مباشرة
    const container = document.getElementById('games-container');
    container.innerHTML = '';

    data.segments.forEach(segment => {
        segment.hits.forEach(game => {
            if (categoryFilter === 'all' || (game.genres && game.genres.includes(categoryFilter))) {
                container.innerHTML += `
                    <div class="game-card">
                        <h3>${game.title}</h3>
                        <iframe src="${game.gameURL}" width="300" height="200"></iframe>
                    </div>
                `;
            }
        });
    });
}
loadGames('puzzle');