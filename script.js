const images = [
    {
        title: "Nissan GTR 2011",
        url: "https://i.pinimg.com/1200x/bf/8c/ba/bf8cba019a2b41c718438009adc89135.jpg",
        description: "Дуже швидкий"
    },
    {
        title: "Porsche 911 GT3",
        url: "https://i.pinimg.com/736x/32/05/f0/3205f065374af46c22854ee312f40c46.jpg",
        description: "Чемпіон"
    },
    {
        title: "Porsche 911 GT3 RSR",
        url: "https://i.pinimg.com/736x/41/2d/75/412d7517438b8176d3aff5720f278b57.jpg",
        description: "Перемога в Лімані"
    },
    {
        title: "Lamborgini GT3 EVO",
        url: "https://i.pinimg.com/1200x/2d/01/5f/2d015fc74b6a2fd2a21c448212e67a3b.jpg",
        description: "Конкурент"
    },
    {
        title: "BMW M4 GT3",
        url: "https://i.pinimg.com/1200x/df/11/83/df1183fca96d85dc48505efa965e6046.jpg",
        description: "Найшвидший"
    },
    {
        title: "McLaren 720s GT3 EVO",
        url: "https://i.pinimg.com/1200x/ad/c8/e4/adc8e4b62142b6fd6c71fa5ae1c68f09.jpg",
        description: "Точність"
    }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const effectSelect = document.getElementById("effectSelect");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const closeBtn = document.querySelector(".close");
const pagination = document.getElementById("pagination");

let currentIndex = 0;
const imagesPerPage = 4;
let currentPage = 1;

function renderGallery() {
    gallery.innerHTML = "";
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    images.slice(start, end).forEach((img, index) => {
        const image = document.createElement("img");
        image.src = img.url;
        image.alt = img.title;
        image.onclick = () => openModal(start + index);
        gallery.appendChild(image);
    });
}

function renderPagination() {
    pagination.innerHTML = "";
    const pages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= pages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            renderGallery();
        };
        pagination.appendChild(btn);
    }
}

function openModal(index) {
    currentIndex = index;
    updateModal();
    modal.classList.add("active");
}

function updateModal() {
    const effect = effectSelect.value;

    modalImage.className = "";
    modalImage.src = images[currentIndex].url;
    modalTitle.textContent = images[currentIndex].title;
    modalDescription.textContent = images[currentIndex].description;

    void modalImage.offsetWidth;

    modalImage.classList.add(effect);
}


prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModal();
};

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateModal();
};

closeBtn.onclick = () => modal.classList.remove("active");

effectSelect.onchange = updateModal;

renderGallery();
renderPagination();
