# Blog Application

This is a full-stack blog application built with Node.js, Express, MongoDB for the backend, and React for the frontend.

## Backend

### Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the [backend](http://_vscodecontentref_/1) directory and add the following environment variables:
    ```env
    MONGO_URI=mongodb://localhost:27017/blog
    PORT=4000
    SECRET_KEY=1234567890
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### API Endpoints

#### Authentication

- **Register User**
  - **URL:** `/api/auth/register`
  - **Method:** `POST`
  - **Body Parameters:**
    - `email` (string, required)
    - `password` (string, required)
  - **Response:**
    - `201 Created` on success
    - `400 Bad Request` if email or password is missing
    - `500 Internal Server Error` on server error

- **Login User**
  - **URL:** `/api/auth/login`
  - **Method:** `POST`
  - **Body Parameters:**
    - `email` (string, required)
    - `password` (string, required)
  - **Response:**
    - `200 OK` with JWT token on success
    - `400 Bad Request` if password is invalid
    - `404 Not Found` if user is not found
    - `500 Internal Server Error` on server error

#### Blogs

- **Create Blog**
  - **URL:** `/api/blogs`
  - **Method:** `POST`
  - **Body Parameters:**
    - `title` (string, required)
    - `category` (string, required)
    - `description` (string, optional)
    - `status` (string, optional, default: "Pending")
  - **Response:**
    - `201 Created` on success
    - `400 Bad Request` if title or category is missing
    - `500 Internal Server Error` on server error

- **Get All Blogs**
  - **URL:** `/api/blogs`
  - **Method:** `GET`
  - **Response:**
    - `200 OK` with list of blogs
    - `500 Internal Server Error` on server error

- **Update Blog**
  - **URL:** `/api/blogs/:id`
  - **Method:** `PUT`
  - **Body Parameters:** (any fields to update)
  - **Response:**
    - `200 OK` on success
    - `500 Internal Server Error` on server error

- **Delete Blog**
  - **URL:** `/api/blogs/:id`
  - **Method:** `DELETE`
  - **Response:**
    - `200 OK` on success
    - `500 Internal Server Error` on server error

## Frontend

### Setup

1. Navigate to the [frontend](http://_vscodecontentref_/2) directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

### Available Scripts

In the project directory, you can run:

- **`npm start`**
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes.
  - You may also see any lint errors in the console.

- **`npm run build`**
  - Builds the app for production to the `build` folder.
  - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - Your app is ready to be deployed!

### Services

#### Authentication Services

- **Login**
  - **Function:** `login`
  - **Parameters:**
    - `email` (string, required)
    - `password` (string, required)
  - **Description:** Sends a POST request to the `/api/auth/login` endpoint with the provided email and password. Stores the received JWT token in local storage.

- **Register**
  - **Function:** `register`
  - **Parameters:**
    - `email` (string, required)
    - `password` (string, required)
  - **Description:** Sends a POST request to the `/api/auth/register` endpoint with the provided email and password. Returns the response data.

- **Logout**
  - **Function:** `logout`
  - **Description:** Removes the JWT token from local storage.

- **Is Authenticated**
  - **Function:** `isAuthenticated`
  - **Description:** Checks if a JWT token is stored in local storage. Returns `true` if a token is found, otherwise `false`.

#### Blog Services

- **Get Blogs**
  - **Function:** `getBlogs`
  - **Description:** Sends a GET request to the `/api/blogs` endpoint. Returns the list of blogs.

- **Create Blog**
  - **Function:** `createBlog`
  - **Parameters:**
    - `blogData` (object, required)
  - **Description:** Sends a POST request to the `/api/blogs` endpoint with the provided blog data. Returns the created blog.

- **Update Blog**
  - **Function:** `updateBlog`
  - **Parameters:**
    - `id` (string, required)
    - `blogData` (object, required)
  - **Description:** Sends a PUT request to the `/api/blogs/:id` endpoint with the provided blog data. Returns the updated blog.

- **Delete Blog**
  - **Function:** `deleteBlog`
  - **Parameters:**
    - `id` (string, required)
  - **Description:** Sends a DELETE request to the `/api/blogs/:id` endpoint. Returns the response data.

### UI Development

The UI components are currently under development. The services for authentication and blog management are implemented and can be used to interact with the backend.

