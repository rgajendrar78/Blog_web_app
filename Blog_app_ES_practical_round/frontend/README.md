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
