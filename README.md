# NewsHub

## Overview
NewsHub is a full-stack web application designed to aggregate and display top news headlines by category. The application features user authentication via Firebase, allowing users to save their favorite articles for later viewing. It is built with a React frontend and an Express backend, utilizing MongoDB for data persistence and the NewsAPI for real-time content.

## Features
*   **Category Filtering:** Browse top headlines across various categories (General, Technology, Business, Entertainment, Health, Science, Sports).
*   **User Authentication:** Secure login/signup and Google authentication powered by Firebase.
*   **Saved Articles:** Authenticated users can save articles to their account.
*   **Dark Mode:** Toggle between light and dark themes for a personalized reading experience.
*   **Responsive Design:** Built with Tailwind CSS for a mobile-friendly, modern UI.

## Tech Stack
*   **Frontend:** React, React Router, Tailwind CSS, Axios, Firebase SDK.
*   **Backend:** Node.js, Express, Mongoose (MongoDB), Axios.
*   **Database:** MongoDB Atlas.
*   **Authentication:** Firebase Auth.
*   **External API:** NewsAPI.

## Folder Structure
*   `/client`: React frontend application.
    *   `/src/components`: Reusable UI components (Navbar, NewsCard, CategorySelector).
    *   `/src/pages`: Application views (Home, Saved, Login).
*   `/server`: Node.js/Express backend.
    *   `/models`: Mongoose schemas (User).
    *   `/routes`: API route definitions.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../server
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the `/server` directory and add the following:
    *   `NEWS_API_KEY`: Your API key from [NewsAPI](https://newsapi.org/).
    *   `MONGO_URI`: Your MongoDB connection string.
    *   `PORT`: (Optional) Defaults to 5000.

## Usage

1.  **Start the development server:**
    From the root directory, you can run the backend and frontend concurrently.
    ```bash
    # Start server
    cd server
    npm start

    # Start client (in a separate terminal)
    cd client
    npm start
    ```
2.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

### Client
*   `npm start`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm test`: Launches the test runner.

### Server
*   `npm start`: Starts the Express server.
*   `npm run build`: Installs client dependencies and builds the React frontend for production deployment.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License
This project is provided as-is. Please refer to the repository owner for licensing information.