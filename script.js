// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
})

// Tab Switching
const tabButtons = document.querySelectorAll(".tab-button")
const tabContents = document.querySelectorAll(".tab-content")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabContents.forEach((content) => content.classList.remove("active"))

    // Add active class to clicked button and corresponding content
    button.classList.add("active")
    const tabId = button.getAttribute("data-tab")
    document.getElementById(`${tabId}-tab`).classList.add("active")
  })
})

// Event Data
const featuredEvents = [
  {
    title: "Coldplay - Music Of The Spheres World Tour",
    date: "15 juillet 2025",
    time: "20:00",
    location: "Stade de France, Saint-Denis",
    price: "75,00 €",
    image: "img\ColdplayBBC071221_(cropped).jpg",
  },
  {
    title: "Taylor Swift - The Eras Tour",
    date: "9 mai 2025",
    time: "19:30",
    location: "Paris La Défense Arena, Nanterre",
    price: "85,50 €",
    /** URL or path to the event's representative image */
    image: "",
  },
  {
    title: "Ligue 1 - PSG vs Marseille",
    date: "24 octobre 2024",
    time: "21:00",
    location: "Parc des Princes, Paris",
    price: "45,00 €",
    image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/PSG%20vs%20OM",
  },
  {
    title: "Le Roi Lion - Comédie Musicale",
    date: "Du 5 au 30 novembre 2024",
    time: "Plusieurs horaires",
    location: "Théâtre Mogador, Paris",
    price: "39,00 €",
    image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Le%20Roi%20Lion",
  },
]

const popularEvents = [
  {
    title: "Billie Eilish - Hit Me Hard and Soft Tour",
    date: "23 juin 2025",
    time: "20:00",
    location: "Accor Arena, Paris",
    price: "69,50 €",
    image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Billie%20Eilish",
  },
  {
    title: "Cirque du Soleil - Kurios",
    date: "Du 12 mars au 5 avril 2025",
    time: "Plusieurs horaires",
    location: "La Villette, Paris",
    price: "45,00 €",
    image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Cirque%20du%20Soleil",
  },
  {
    title: "Kendrick Lamar",
    date: "1 septembre 2024",
    time: "20:30",
    location: "Accor Arena, Paris",
    price: "79,00 €",
    image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Kendrick%20Lamar",
  },
  {
    title: "Roland-Garros 2025",
    date: "Du 26 mai au 9 juin 2025",
    time: "Plusieurs horaires",
    location: "Stade Roland-Garros, Paris",
    price: "39,00 €",
    image: "https://placeholder.pics/svg/300x200/DEDEDE/555555/Roland%20Garros",
  },
]

// Function to create event cards
function createEventCard(event) {
  return `
    <a href="#" class="event-card">
      <div class="event-image">
        <img src="${event.image}" alt="${event.title}">
      </div>
      <div class="event-details">
        <h3 class="event-title">${event.title}</h3>
        <div class="event-info">
          <i class="fas fa-calendar"></i>
          <span>${event.date}</span>
        </div>
        <div class="event-info">
          <i class="fas fa-clock"></i>
          <span>${event.time}</span>
        </div>
        <div class="event-info">
          <i class="fas fa-map-marker-alt"></i>
          <span>${event.location}</span>
        </div>
        <div class="event-price">
          À partir de ${event.price}
        </div>
      </div>
    </a>
  `
}

// Populate event grids
const featuredEventsGrid = document.getElementById("featured-events-grid")
const popularEventsGrid = document.getElementById("popular-events-grid")

featuredEvents.forEach((event) => {
  featuredEventsGrid.innerHTML += createEventCard(event)
})

popularEvents.forEach((event) => {
  popularEventsGrid.innerHTML += createEventCard(event)
})

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    if (targetId !== "#") {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Add window resize event listener to hide mobile menu on resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active")
  }
})

// Add scroll event to add shadow to header when scrolled
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 0) {
    header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
  } else {
    header.style.boxShadow = "none"
  }
})

// Add hover effects for event cards
const eventCards = document.querySelectorAll(".event-card")
eventCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)"
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Initialize view more buttons
const viewMoreButtons = document.querySelectorAll(".view-more-button")
viewMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // This would typically load more events
    // For demo purposes, we'll just show an alert
    alert("Chargement de plus d'événements...")
  })
})

