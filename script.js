function loadGames(categoryFilter) {
    const container = document.getElementById('games-container');
    if (!container) return;
    container.innerHTML = '';

    // التحقق من أن المتغير allGames معرف
    if (typeof allGames === 'undefined') {
        console.error("خطأ: المتغير allGames غير موجود في data.js");
        return;
    }

    // سنقوم بتحويل البيانات لشكل يمكننا التعامل معه بسهولة
    // إذا كانت البيانات عبارة عن كائن (Object) يحتوي على مفتاح segments
    const segments = allGames.segments || [];

    segments.forEach(segment => {
        // إذا كان هناك hits داخل الـ segment
        if (segment.hits && Array.isArray(segment.hits)) {
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
        }
    });
}
