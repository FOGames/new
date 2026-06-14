function loadGames(categoryFilter) {
    // التأكد أن المتغير allGames موجود (من ملف data.js)
    const data = typeof allGames !== 'undefined' ? allGames : { segments: [] };
    const container = document.getElementById('games-container');

    if (!container) {
        console.error("خطأ: لم أجد عنصر اسمه games-container في صفحة الـ HTML!");
        return;
    }

    container.innerHTML = ''; // تنظيف الحاوية

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
