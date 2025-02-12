document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html", { cache: "no-cache" })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
            console.log("Footer loaded successfully!");

            // Dynamically add the footer.css file
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "footer.css";
            document.head.appendChild(link);
        })
        .catch(error => console.error("Error loading footer:", error));
});
