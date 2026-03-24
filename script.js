
const files = [
    // Images
    { name: "Nature Image", type: "jpg", size: "2 MB", url: "images/img1.jpg" },
    { name: "Logo PNG", type: "png", size: "1 MB", url: "images/img2.png" },
    { name: "Animation GIF", type: "gif", size: "3 MB", url: "images/img3.gif" },
    { name: "Modern WEBP", type: "webp", size: "1.5 MB", url: "images/img4.webp" },
    { name: "Vector SVG", type: "svg", size: "500 KB", url: "images/img5.svg" },
    { name: "Nature Image", type: "jpg", size: "2 MB", url: "images/img1.jpg" },
    { name: "Logo PNG", type: "png", size: "1 MB", url: "images/img2.png" },
    { name: "Animation GIF", type: "gif", size: "3 MB", url: "images/img3.gif" },
    { name: "Modern WEBP", type: "webp", size: "1.5 MB", url: "images/img4.webp" },
    { name: "Vector SVG", type: "svg", size: "500 KB", url: "images/img5.svg" },
    { name: "Nature Image", type: "jpg", size: "2 MB", url: "images/img1.jpg" },
    { name: "Logo PNG", type: "png", size: "1 MB", url: "images/img2.png" },
    { name: "Animation GIF", type: "gif", size: "3 MB", url: "images/img3.gif" },
    { name: "Modern WEBP", type: "webp", size: "1.5 MB", url: "images/img4.webp" },
    { name: "Vector SVG", type: "svg", size: "500 KB", url: "images/img5.svg" }
];

// Check if image
function isImage(type) {
    return ["jpg","jpeg","png","gif","webp","svg"].includes(type);
}

// Icon mapping
function getIcon(type) {
    switch(type) {
        case "zip":
        case "rar":
        case "tar":
            return "📦";
        case "apk":
            return "📱";
        case "exe":
            return "💻";
        default:
            return "📄";
    }
}

// Render cards
const container = document.getElementById("fileContainer");

files.forEach(file => {
    const card = document.createElement("div");
    card.className = "card";

    let preview;

    if (isImage(file.type)) {
        preview = `<img src="${file.url}" class="preview">`;
    } else {
        preview = `<div class="file-icon">${getIcon(file.type)}</div>`;
    }

    card.innerHTML = `
        ${preview}
        <div class="content">
            <div class="file-name">${file.name}</div>
            <div class="file-info">${file.type.toUpperCase()} • ${file.size}</div>
            <div class="buttons">
                <button class="download" onclick="downloadFile('${file.url}')">Download</button>
                <button class="share" onclick="shareFile('${file.name}')">Share</button>
            </div>
        </div>
    `;

    container.appendChild(card);
});

// Download
function downloadFile(url) {
    window.location.href = url;
}

// Share
function shareFile(name) {
    if (navigator.share) {
        navigator.share({
            title: name,
            text: "Check this file",
            url: window.location.href
        });
    } else {
        alert("Sharing not supported");
    }
}
