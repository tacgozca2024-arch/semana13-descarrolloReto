const API_KEY = "B49aK6AvHbLj2gPGatQjlPoLfV_J3ZW0lRwtfUlb9v4";

var form = document.getElementById("searchForm");
var input = document.getElementById("searchInput");
var grid = document.getElementById("imageGrid");
var modal = document.getElementById("modalOverlay");
var modalClose = document.getElementById("modalClose");

modalClose.onclick = function() {
    modal.classList.remove("active");
}

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
}

fetchPhotos("fashion");

form.onsubmit = function(e) {
    e.preventDefault();
    var query = input.value;
    if (query) {
        fetchPhotos(query);
    }
}

async function fetchPhotos(query) {
    try {
        grid.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            var skeleton = document.createElement("div");
            skeleton.className = "skeleton-card";
            grid.appendChild(skeleton);
        }

        var url = "https://api.unsplash.com/search/photos?page=1&per_page=20&query=" + query + "&client_id=" + API_KEY;
        var res = await fetch(url);
        var data = await res.json();

        if (data.results.length === 0) {
            grid.innerHTML = "<p>Sin resultados para " + query + "</p>";
            return;
        }

        grid.innerHTML = "";

        for (var i = 0; i < data.results.length; i++) {
            var photo = data.results[i];

            var card = document.createElement("div");
            card.className = "pin-card";
            card.setAttribute("data-full", photo.urls.full);
            card.setAttribute("data-name", photo.user.name);
            card.setAttribute("data-username", "@" + photo.user.username);
            card.setAttribute("data-likes", photo.likes);
            card.setAttribute("data-desc", photo.description || photo.alt_description || "Sin descripción");
            card.setAttribute("data-avatar", photo.user.name.charAt(0).toUpperCase());

            card.innerHTML = `
                <img src="${photo.urls.small}" alt="${photo.alt_description || query}" />
                <button class="pin-save-btn">Guardar</button>
                <div class="pin-actions">
                    <button class="pin-action-btn">
                        <i class="bi bi-box-arrow-up-right"></i> Visitar s...
                    </button>
                    <button class="pin-action-btn pin-share">
                        <i class="bi bi-upload"></i>
                    </button>
                </div>
            `;

            var img = card.getElementsByTagName("img")[0];
            img.onclick = function() {
                var parentCard = this.parentElement;
                document.getElementById("modalImg").src = parentCard.getAttribute("data-full");
                document.getElementById("modalName").innerHTML = parentCard.getAttribute("data-name");
                document.getElementById("modalUsername").innerHTML = parentCard.getAttribute("data-username");
                document.getElementById("modalDesc").innerHTML = parentCard.getAttribute("data-desc");
                document.getElementById("modalLikes").innerHTML = parentCard.getAttribute("data-likes");
                document.getElementById("modalAvatar").innerHTML = parentCard.getAttribute("data-avatar");
                document.getElementById("modalDownloadBtn").href = parentCard.getAttribute("data-full");
                modal.classList.add("active");
            }

            grid.appendChild(card);
        }

        var btnHome = document.getElementById("btnHome");
            btnHome.onclick = function(e) {
            e.preventDefault();
            input.value = "";
            fetchPhotos("Frontend");
}

            var btnChevron = document.getElementById("btnChevron");
var userDropdown = document.getElementById("userDropdown");

btnChevron.onclick = function(e) {
    e.stopPropagation();
    userDropdown.classList.toggle("active");
}

document.onclick = function() {
    userDropdown.classList.remove("active");
}

    } catch (err) {
        grid.innerHTML = "<p>Error al cargar imágenes.</p>";
    }
}