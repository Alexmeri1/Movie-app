# 🎬 Movie App

This is a simple movie search app built with **React**, **TypeScript**, and **Vite**. It uses the [TMDb API](https://www.themoviedb.org/documentation/api) to display popular movies and search for titles.

---

## 🚀 Features

- Search for movies by title  
- View popular movies on load  
- Mark movies as favorites (stored in `localStorage`)  
- Clean, component-based architecture  

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/movie-app.git
   cd movie-app
Install dependencies

bash
Copy
Edit
npm install
Create a .env file

In the root of your project (movie-app/), create a file named .env and add your TMDb API key like this:

env
Copy
Edit
VITE_API_KEY=your_tmdb_api_key_here
⚠️ This file is ignored by Git and must be created manually.

🧪 How to Test It
This project does not use automated testing yet. You can test it manually:

Start the development server:

bash
Copy
Edit
npm run dev
Open your browser to http://localhost:5173

Try the following:

Search for any movie by title

Check that popular movies appear on page load

Click to add/remove favorites

Refresh the page to confirm that favorites are saved

If you get an API error, check your .env file and make sure the key is valid.

📁 Project Structure
pgsql
Copy
Edit
movie-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── css/
│   └── main.tsx
├── .env               # Your API key (not committed)
├── .gitignore
├── index.html
├── package.json
└── vite.config.ts
⚙️ Available Scripts
bash
Copy
Edit
npm run dev       # Start local dev server
npm run build     # Build for production
npm run preview   # Preview production build
❗ Notes
.env variables must be prefixed with VITE_ to be accessible in the app.

Do not commit your API key. Make sure .env is listed in .gitignore.

📜 License
MIT – Free to use and modify for personal or commercial use.