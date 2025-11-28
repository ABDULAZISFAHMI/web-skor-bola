async function loadMatches() {
    const container = document.getElementById('matches');

    try {
        const res = await fetch('./api/matches.json');
        const data = await res.json();

        container.innerHTML = "";

        data.matches.forEach(match => {
            container.innerHTML += `
                <div class="match-card">
                    <div class="team">${match.home} ${match.score_home} - ${match.score_away} ${match.away}</div>
                    <div class="status">${match.status}</div>
                </div>
            `;
        });

    } catch (e) {
        container.innerHTML = "<p>Gagal memuat data...</p>";
    }
}

loadMatches();
