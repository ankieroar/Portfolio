async function setLanguage(lang) {
    const response = await fetch(`./assets/features/${lang}.json`);
    const data = await response.json();

    document.getElementById("name").textContent = data.name;
    document.getElementById("school").textContent = data["school"];
    document.getElementById("role").textContent = data["role"];

    document.documentElement.lang = lang;
}

setLanguage("en");