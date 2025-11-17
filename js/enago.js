

let demoArray = new Array();
fetch("https://easydash.enago.jp/Acceptedpapers")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    demoArray = data;
    console.log("demoArray",demoArray);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

const demoData = [
  {
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },
  {
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },{
    title: "Extremely Low Operating Voltage Green Phosphorescent Organic Light-Emitting Devices",
    author: "S. H.",
    impact: 10.18,
    publisher: "John Wiley & Sons, Inc.",
    image: "https://via.placeholder.com/300x180?text=Journal+Cover",
    link: "#"
  },
  // Duplicate or add more entries as needed
];


const cardsPerPage = 6;
let currentPage = 1;
let filteredData = [...demoData];

const cardContainer = document.getElementById("cardContainer");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

function renderCards(data) {
  cardContainer.innerHTML = "";
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach(item => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text"><strong>Author:</strong> ${item.author}</p>
          <p class="card-text"><strong>Impact Factor:</strong> ${item.impact}</p>
          <p class="card-text"><strong>Publisher:</strong> ${item.publisher}</p>
          <a href="${item.link}" class="btn btn-primary">もっと読む</a>
        </div>
      </div>

    `;
    cardContainer.appendChild(card);
  });
}

function renderPagination(data) {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(data.length / cardsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderCards(filteredData);
      renderPagination(filteredData);
    });
    pagination.appendChild(li);
  }
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  filteredData = demoData.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.author.toLowerCase().includes(query)
  );

  const sortBy = sortSelect.value;
  filteredData.sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "impact") return b.impact - a.impact;
  });

  currentPage = 1;
  renderCards(filteredData);
  renderPagination(filteredData);
}

searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);

applyFilters();



//   document.querySelectorAll('.nav-item').forEach(item => {
//   item.addEventListener('click', () => {
//     alert(`You clicked: ${item.textContent.trim()}`);
//   });
// });

// document.querySelectorAll('.dropdown').forEach(select => {
//   select.addEventListener('change', () => {
//     alert(`Selected: ${select.value}`);
//   });
// });

document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Quote request submitted!');
});


