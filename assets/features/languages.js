async function setLanguage(lang) {
    const response = await fetch(`./assets/features/${lang}.json`);
    const data = await response.json();

    const name = document.getElementById("name");
    const school = document.getElementById("school");
    const role = document.getElementById("role");

    if (name) name.textContent = data.name;
    if (school) school.textContent = data.school;
    if (role) role.textContent = data.role;

    document.documentElement.lang = lang;
}
