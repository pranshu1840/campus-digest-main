# Campus Digest

Welcome to Campus Digest! This project is a full-featured web application where you can post, like, comment and manage events, hackathons, and sports events. It is built using the MERN (MongoDB, Express.js, React, Node.js) stack, with JWT and Firebase for authentication and storage.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Usage](#usage)

## Features

- **User Authentication**: Secure login using email and password authentication.
- **CRUD Operations**: Create, read, update, and delete event and hackathon posts.
- **Image Upload**: Upload and manage images for your posts.
- **Search and Filter**: Advanced search functionality with filters and sorting options.
- **Admin Dashboard**: Manage users, comments, and posts from a user-friendly dashboard.
- **Deployment**: Easily deployable using the 'render' platform.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/pranshu1840/campus-digest-main.git
    cd campus-digest-main
    ```

2. **Install dependencies:**

    - For the backend:

        ```sh
        npm i
        ```

    - For the frontend:

        ```sh
        cd client
        npm i
        ```

## Running the Project

To start the project, you'll need to run both the frontend and backend servers.

1. **Start the backend server:**

    ```sh
    npm run start
    ```

2. **Start the frontend server:**

    ```sh
    cd client
    npm run dev
    ```

## Building the Project

To build the project for production:

```sh
npm run build
```

## Usage

- **Frontend**: `npm run dev` (runs the React development server)
- **Backend**: `npm run start` (runs the Express server)
- **Build for Production**: `npm run build` (creates a production build of the project)
