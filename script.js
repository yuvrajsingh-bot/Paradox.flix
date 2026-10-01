
const movies = [
    {
        title: "Inception",
        category: "movie",
        videoId: "Qwe6qXFTdgc",
        image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
        desc: "A thief who steals corporate secrets through dream-sharing technology.",
        cast: [
            { name: "Leonardo DiCaprio", img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg" },
            { name: "Cillian Murphy", img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Cillian_Murphy_Press_Conference_The_Party_Berlinale_2017_02cr.jpg" },
            { name: "Tom Hardy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThoNZ75J_wzmPbHiuJqDEV5LdoQVLeXF6EPpxUS0zppA&s=10" }
        ]
    },
    {
        title: "Money Heist",
        category: "series",
        videoId: "TzR9tgPEa8s",
        image: "https://m.media-amazon.com/images/M/MV5BODdiNWI5ZjgtY2RhZi00ODlmLTkyNDEtMzIyMTEyZDE2ZjNjXkEyXkFqcGc@._V1_.jpg",
        desc: "An unusual group of robbers attempt to carry out the most perfect robbery.",
        cast: [
            { name: "Pedro Alonso", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2h2bq0zEHWFAaC8scb2yjqzZmozse8fWa2M8SeRzh3QOfBU_NVd68GA&s=10" },
            { name: "Úrsula Corberó", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7_WPwydgDQuWeoivJ2yHjqTVY95gP5sZ0ndTq7GeYhQP2-RAzqUomGY&s=10" },
            { name: "Álvaro Morte", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOddQbeHRE6pJRgKam5y91Yjjnw8Mzg-0lTrQYRu1tuWFBGwIeTv0K5AQr&s=10" }
        ]
    },
    {
        title: "Stranger Things",
        category: "series",
        videoId: "b9EkMc79ZSU",
        image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTWGrLjDUXHyZZwVT2_kjTXOq8nF8IBgEL5Gp3i97xghSCY3z5nsAKDRMm5qmQ9KNUFFnbWufml7YIz9hVHDoBxpqsrKS_S-VS_5.jpg?r=94b",
        desc: "When a young boy vanishes, a small town uncovers a mystery.",
        cast: [
            { name: "Millie Bobby Brown", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBAevNKHoETc0TBUg33hAANR3DSC8ka8eunzzAVzSHQ&s" },
            { name: "Finn Wolfhard", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI87eV99wCYLGNko4loyg4GKoJLT0skePLDb_RQiLcC6rQsLT7CSEOgII&s=10" },
            { name: "Winona Ryder", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLyj4khYX2tJIZSU25eexfunOkhrd4wEpanugDFCtEfLdxG-KNnEA4Wi-&s=10" }
        ]
    },
    {
        title: "Spider-Man: No Way Home",
        category: "movie",
        videoId: "JfVOs4VSpmA",
        image: "https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg",
        desc: "Peter asks Doctor Strange for help after his identity is revealed.",
        cast: [
            { name: "Tom Holland", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg" },
            { name: "Zendaya", img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg" }
        ]
    },
    {
        title: "Extraction",
        category: "movie",
        videoId: "L6P3nI6VnlY",
        image: "https://m.media-amazon.com/images/M/MV5BNDBhMmI3OWYtZTA2Ny00Y2RjLTliMWQtYWY5MGIwN2RlZGFjXkEyXkFqcGc@._V1_.jpg",
        desc: "A black market mercenary is hired to rescue a kidnapped boy.",
        cast: [
            { name: "Chris Hemsworth", img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg" },
            { name: "Randeep Hooda", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iI_1ivq6c9yh8Sr5TYrbaVLVdBuWV6RI6bVYunBBNiz8tEPFk8qAlGM&s=10" }
        ]
    },
    {
        title: "Titanic",
        category: "movie",
        videoId: "CHekzSiZcwY",
        image: "https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg",
        desc: "A young aristocrat falls in love with an artist aboard the Titanic.",
        cast: [
            { name: "Leonardo DiCaprio", img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg" },
            { name: "Kate Winslet", img: "https://cdn.britannica.com/38/130638-050-DBCE19EE/Kate-Winslet.jpg" }
        ]
    }
];

function displayMovies(movieList) {
    const grid = document.getElementById("movieGrid");
    grid.innerHTML = "";

    for (let i = 0; i < movieList.length; i++) {
        let m = movieList[i];
        grid.innerHTML += `
            <div class="movie-card">
                <img src="${m.image}" alt="${m.title}">
                <h4>${m.title}</h4>
                <p>${m.desc}</p>
                <div class="card-buttons">
                    <button onclick="playVideo('${m.videoId}')">Play</button>
                    <button class="info-btn" onclick="openInfo('${m.title}')">About</button>
                </div>
            </div>
        `;
    }
}

window.onload = function() {
    displayMovies(movies);
};
function filterMovies(category) {
    if (category === 'all') {
        displayMovies(movies);
    } else {
        let filtered = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].category === category) {
                filtered.push(movies[i]);
            }
        }
        displayMovies(filtered);
    }
}

function searchMovies() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let searched = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(query)) {
            searched.push(movies[i]);
        }
    }
    displayMovies(searched);
}

function playVideo(videoId) {
    let modal = document.getElementById("playerModal");
    let container = document.getElementById("iframeContainer");
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="Video player" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "flex";
}

function closePlayer() {
    let modal = document.getElementById("playerModal");
    document.getElementById("iframeContainer").innerHTML = "";
    modal.style.display = "none";
}

function openInfo(title) {
    let selectedMovie = null;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === title) {
            selectedMovie = movies[i];
            break;
        }
    }

    if (selectedMovie) {
        document.getElementById("infoTitle").innerText = selectedMovie.title;
        document.getElementById("infoDesc").innerText = selectedMovie.desc;
        
        let castContainer = document.getElementById("castGrid");
        castContainer.innerHTML = "";
        
        for (let j = 0; j < selectedMovie.cast.length; j++) {
            let actor = selectedMovie.cast[j];
            castContainer.innerHTML += `
                <div class="cast-member">
                    <img src="${actor.img}" alt="${actor.name}" class="cast-img">
                    <p>${actor.name}</p>
                </div>
            `;
        }

        document.getElementById("infoModal").style.display = "flex";
    }
}

function toggleSignIn() {
    document.getElementById("authModal").style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


function loginUser() {
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    if (emailInput === "" || passwordInput === "") {
        alert("Please fill in both email and password fields.");
    } else {
        alert("Login successful! Welcome back.");
        document.getElementById("signInBtn").innerText = "Logout";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        closeModal('authModal');
    }
}