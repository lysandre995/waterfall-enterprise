barba.init({
    transitions: [
        {
            name: "default-transition",
            async leave(data) {
                showLoader();
                await delay(300);
            },
            async enter(data) {
                await preloadImages(data.next.container);
                hideLoader();
            }
        }
    ]
});

const showLoader = () => {
    document.getElementById("loader").classList.remove("d-none");
};

const hideLoader = () => {
    document.getElementById("loader").classList.add("d-none");
};

const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const preloadImages = container => {
    const images = [...container.querySelectorAll("img")];
    return Promise.all(
        images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = img.onerror = resolve;
            });
        })
    );
};
const savedTheme = localStorage.getItem("theme") || "light";
const html = document.documentElement;

html.setAttribute("data-bs-theme", savedTheme);

document.getElementById("theme-toggle").addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-bs-theme", newTheme);

    localStorage.setItem("theme", newTheme);
});
