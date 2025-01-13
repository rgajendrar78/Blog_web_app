# API Documentation

## Authentication

### Register User
- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Body Parameters:**
    - `email` (string, required)
    - `password` (string, required)
- **Response:**
    - `201 Created` on success
    - `400 Bad Request` if email or password is missing
    - `500 Internal Server Error` on server error

### Login User
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

## Blogs

### Create Blog
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

### Get All Blogs
- **URL:** `/api/blogs`
- **Method:** `GET`
- **Response:**
    - `200 OK` with list of blogs
    - `500 Internal Server Error` on server error

### Update Blog
- **URL:** `/api/blogs/:id`
- **Method:** `PUT`
- **Body Parameters:** (any fields to update)
- **Response:**
    - `200 OK` on success
    - `500 Internal Server Error` on server error

### Delete Blog
- **URL:** `/api/blogs/:id`
- **Method:** `DELETE`
- **Response:**
    - `200 OK` on success
    - `500 Internal Server Error` on server error
