# Sound of Music App - Frontend

## About

This frontend application provides a user-friendly interface to explore "The Sound Of Music" musical. Users can browse information about characters, songs, and locations, and authenticated users can contribute by adding, editing, and deleting data.

## [Backend Repository](https://github.com/sachiiiiii/sound-of-music-backend)

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A build tool that provides a fast and lean development experience for modern web projects.
* **React Router DOM:** A library for dynamic routing in React applications.
* **Axios:** A promise-based HTTP client for making API requests to the backend.

## Installation
Follow these steps to set up the frontend application locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sachiiiiii/sound-of-music-frontend
    cd react-som-frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables (if necessary):**
    * This frontend primarily interacts with the backend API, so if you have any frontend-specific environment variables, create a `.env.local` file in the root directory and add them there (e.g., API_BASE_URL if it differs from the default). For our current setup, the API base URL is defined directly in `src/services/api.js`.

4.  **Run the frontend development server:**

    ```bash
    npm run dev
    ```

    This command starts the Vite development server, and the application should be accessible in your browser, usually at `http://localhost:5173`.

## Resources and Credits (Backend Focus)
While this README documents the frontend, the application heavily relies on the backend API. The development of the backend part of this project benefited from the following resources:

* **Express.js Documentation:** [https://expressjs.com/](https://expressjs.com/) - For understanding the fundamentals of the backend framework.
* **Mongoose Documentation:** [https://mongoosejs.com/](https://mongoosejs.com/) - For guidance on interacting with the MongoDB database.
* **jsonwebtoken (JWT) Documentation:** [https://jwt.io/](https://jwt.io/) and its npm package documentation - Crucial for implementing user authentication.
* **bcrypt npm package:** [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt) - Used for secure password hashing on the backend.
* **dotenv npm package:** [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables on the backend.
* **Axios npm package:** [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios) - This library was essential for making HTTP requests from the frontend to the backend API.

I would like to thank the creators and maintainers of these technologies and their documentation, which were invaluable in building this application.

I would also like to acknowledge the knowledge and guidance my instructors Tishana Trainor, Bryan Santos, and Constance Nwaigwe shared and gave.

## Future Plans

Future enhancements for this frontend application may include:
* **Improved UI/UX:** Enhance the visual design and user experience with more polished styling and interactions.
* **Search Functionality:** Add a search bar to easily find specific items.
* **Detailed Views:** Create dedicated pages for individual characters, songs, and locations with more in-depth information.
* **User Profile Management:** Allow users to manage their accounts on the application. Allow users with varying permission to integrate different third-party applications with the data (if Role-Based Access Control is implemented on the backend). E.g. Potentially allow for integration of travel agencies with locations data for user roles mid-tier and above.
* **Role-Based Access Control UI:** Implementing a clearer visual distinction for administrative functionalities based on user roles (if implemented on the backend).
* **Testing:** Writing unit and integration tests to ensure the reliability and correctness of the frontend components.
* **State Management:** Implementing a more robust state management solution (like Redux or Zustand) for larger-scale applications.
* **Accessibility Improvements:** Ensuring the application is accessible to users with disabilities.

This README provides an overview of the frontend part of the Sound of Music application. For any questions or issues, please refer to the Resourcer & Credits section or contact [me](https://mail.google.com/mail/u/0/#inbox).