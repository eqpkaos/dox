const tabTitles = [
    "fucked by vile",
    "Scam",
    "Explanation",
    "Doxxer",
];

let index = 0;

function updateTabTitle() {
    document.title = tabTitles[index];
    index = (index + 1) % tabTitles.length;
}

updateTabTitle();

setInterval(updateTabTitle, 500);
