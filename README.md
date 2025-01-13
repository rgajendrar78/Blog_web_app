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

3. Create a [.env](http://_vscodecontentref_/1) file in the [backend](http://_vscodecontentref_/2) directory and add the following environment variables:
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
    - [email](http://_vscodecontentref_/3) (string, required)
    - [password](http://_vscodecontentref_/4) (string, required)
  - **Response:**
    - `201 Created` on success
    - `400 Bad Request` if email or password is missing
    - `500 Internal Server Error` on server error

- **Login User**
  - **URL:** `/api/auth/login`
  - **Method:** `POST`
  - **Body Parameters:**
    - [email](http://_vscodecontentref_/5) (string, required)
    - [password](http://_vscodecontentref_/6) (string, required)
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
    - [title](http://_vscodecontentref_/7) (string, required)
    - [category](http://_vscodecontentref_/8) (string, required)
    - [description](http://_vscodecontentref_/9) (string, optional)
    - [status](http://_vscodecontentref_/10) (string, optional, default: "Pending")
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

1. Navigate to the [frontend](http://_vscodecontentref_/11) directory:
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

- **[npm test](http://_vscodecontentref_/12)**
  - Launches the test runner in the interactive watch mode.
  - See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **`npm run build`**
  - Builds the app for production to the `build` folder.
  - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - Your app is ready to be deployed!
  - See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- **`npm run eject`**
  - **Note: this is a one-way operation. Once you `eject`, you can't go back!**
  - If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
  - Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
  - You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
