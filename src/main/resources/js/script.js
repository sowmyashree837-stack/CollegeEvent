
// College Event Details

const events = [

    {
        title: "Technical Symposium",
        category: "Technical",
        date: "2026-12-05",
        time: "10:00 AM",
        venue: "Main Auditorium",
        icon: "💻",
        description: "A technical event featuring coding competitions, project demonstrations and technology presentations."
    },

    {
        title: "Web Development Workshop",
        category: "Workshop",
        date: "2026-12-10",
        time: "11:00 AM",
        venue: "Computer Lab",
        icon: "🌐",
        description: "Learn HTML, CSS and JavaScript through practical website development activities."
    },

    {
        title: "Artificial Intelligence Seminar",
        category: "Seminar",
        date: "2026-12-15",
        time: "02:00 PM",
        venue: "Seminar Hall",
        icon: "🤖",
        description: "Discover artificial intelligence, machine learning and emerging technologies."
    },

    {
        title: "Annual Cultural Fest",
        category: "Cultural",
        date: "2026-12-20",
        time: "09:00 AM",
        venue: "College Ground",
        icon: "🎭",
        description: "Enjoy music, dance, art and cultural performances by talented students."
    },

    {
        title: "Cyber Security Workshop",
        category: "Workshop",
        date: "2027-01-08",
        time: "10:00 AM",
        venue: "Innovation Lab",
        icon: "🔐",
        description: "Understand cyber security concepts, digital safety and online protection."
    },

    {
        title: "Entrepreneurship Seminar",
        category: "Seminar",
        date: "2027-01-15",
        time: "11:30 AM",
        venue: "Conference Hall",
        icon: "💡",
        description: "Learn about startups, innovation, business ideas and entrepreneurship."
    }

];

// Get HTML Elements

const eventContainer =
    document.getElementById("eventContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const noEvents =
    document.getElementById("noEvents");

// Format Date

function formatDate(date) {

    return new Date(date + "T00:00:00")
        .toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

}

// Display Events

function displayEvents() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedCategory =
        categoryFilter.value;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredEvents = events.filter(event => {

        const eventDate =
            new Date(event.date + "T00:00:00");

        const matchesSearch =
            event.title.toLowerCase().includes(searchText) ||
            event.description.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            event.category === selectedCategory;

        return eventDate >= today &&
            matchesSearch &&
            matchesCategory;

    }).sort((a, b) => a.date.localeCompare(b.date));

    // Update Event Cards

    eventContainer.innerHTML = filteredEvents.map(event => {

        const categoryClass =
            event.category.toLowerCase();

        return `

            <div class="event-card">

                <div class="event-image ${categoryClass}">
                    ${event.icon}
                </div>

                <div class="event-details">

                    <span class="event-category">
                        ${event.category}
                    </span>

                    <h3>${event.title}</h3>

                    <p>${event.description}</p>

                    <div class="event-info">

                        <p>📅 ${formatDate(event.date)}</p>

                        <p>🕒 ${event.time}</p>

                        <p>📍 ${event.venue}</p>

                    </div>

                    <a class="register-btn"
                       href="mailto:events@college.edu?subject=${encodeURIComponent("Registration: " + event.title)}">
                        Register Now
                    </a>

                </div>

            </div>

        `;

    }).join("");

    noEvents.hidden = filteredEvents.length !== 0;

}

// Search Events

searchInput.addEventListener(
    "input",
    displayEvents
);

// Filter Events

categoryFilter.addEventListener(
    "change",
    displayEvents
);

// Initial Display

displayEvents();
