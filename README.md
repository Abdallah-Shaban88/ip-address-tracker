# 🌍 Frontend Mentor - IP Address Tracker Solution

This is my custom solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). It allows users to track any IP address or domain name and instantly see its location on an interactive map.

## 🚀 Live Demo

🔗 **[View Live Site](اضغط_هنا_وحط_لينك_المشروع_بتاعك_على_Vercel_او_Netlify)**

---

## 🎯 Features

Users are able to:

- **Auto-Detect IP:** View their own IP address and location on the map upon initial page load.
- **Search Functionality:** Search for any valid IP addresses or domain names to retrieve key location and ISP details.
- **Interactive Map:** Dynamic map marker rendering that smoothly transitions (pans) to the queried location.
- **Responsive Layout:** Optimized interface for all screen sizes (Mobile to Desktop).

---

## 📸 Screenshots

### Desktop Preview

![Desktop View](./design/desktop-preview.jpg)

---

## 🛠️ Built With

- **Semantic HTML5** - For structured web content.
- **CSS3 & Flexbox** - For clean layout alignments and responsive cards.
- **Vanilla JavaScript (ES6+)** - For handling asynchronous API actions and DOM manipulation.
- **[LeafletJS](https://leafletjs.com/)** - An open-source JavaScript library for interactive maps.
- **[IP Geolocation API by IPify](https://geo.ipify.org/)** - For fetching precise backend IP data.
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling (Build tool & Dev server)

---

## 💡 What I Learned & Key Achievements

- **Environment & Security:** Migrated the project from a basic HTML/JS setup to **Vite**. This allowed me to implement strict security measures by separating environment variables (`.env`) from the source code, ensuring API keys are protected.
- **Asynchronous Flow:** Handled complex asynchronous data fetching with `async/await` and seamlessly integrated it with the **LeafletJS** map rendering instance.

````javascript
// Dynamically centering the map view based on API response
L.marker([info.location.lat, info.location.lng]).addTo(map);
map.setView([info.location.lat, info.location.lng], 17);

## 🔧 How to Run Locally

Follow these steps to set up the project locally with Vite and secure your API Key:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/IP-Address-Tracker.git](https://github.com/YOUR_USERNAME/IP-Address-Tracker.git)
   cd IP-Address-Tracker
2. Install dependencies:
   run this command "npm install"
3. Set up Environment Variables:
   create a .env file in the root directory of the project.
   add your IPify API key inside it like this:

   VITE_API_KEY=[https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_ACTUAL_API_KEY&ipAddress=](https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_ACTUAL_API_KEY&ipAddress=)
4. Start the development server:
   write this command "npm run dev"
5. Build for production:
   write this command "npm run build"
````
