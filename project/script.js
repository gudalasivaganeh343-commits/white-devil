function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

function generateBrand() {
    const industry = document.getElementById("industry").value;
    const keywords = document.getElementById("keywords").value;
    const tone = document.getElementById("tone").value;

    document.getElementById("brandOutput").innerText =
        `Generating brand names for ${industry} with ${keywords} in ${tone} tone...`;
}

function generateLogo() {
    document.getElementById("logoOutput").innerText =
        "Generating professional logo concept...";
}

function generateContent() {
    document.getElementById("contentOutput").innerText =
        "Generating marketing content...";
}

function analyzeSentiment() {
    document.getElementById("sentimentOutput").innerText =
        "Analyzing sentiment...";
}

function askAI() {
    document.getElementById("chatOutput").innerText =
        "Branding assistant is thinking...";
}
