async function setLanguage(lang) {
    try {
        const response = await fetch(`./assets/sources/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const name = document.getElementById("name");
        const school = document.getElementById("school");
        const role = document.getElementById("role");

        if (name) name.textContent = data.name;
        if (school) school.textContent = data.school;
        if (role) role.textContent = data.role;

        document.documentElement.lang = lang;
        localStorage.setItem("portfolio_lang", lang);
    } catch (error) {
        console.error("Lỗi khi tải ngôn ngữ:", error);
    }
}
