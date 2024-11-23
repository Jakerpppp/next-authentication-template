# Next.js Authentication Template

This is a basic Next.js authentication template with signup, login, and password update functionalities. It provides a simple framework for implementing user authentication in web applications. This template is being used as the foundation for the **Kaizen Blogs** platform, which also includes two-factor authentication (2FA) features.

### Features:
- **Signup**: Allows users to create a new account.
- **Login**: Authenticates users and provides session management.
- **Update Password**: Allows users to change their passwords.
- **Basic Web Framework**: Includes a basic UI to showcase the authentication features.

This template serves as the starting point for Kaizen Blogs, a blogging platform that extends the authentication features with **two-factor authentication (2FA)** to add an extra layer of security for users.

---

## Installation

Follow these steps to get your local development environment up and running:

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (or a MongoDB cloud service like Atlas)

### Steps:

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Jakerpppp/next-authentication.git
   cd authentication-code
   ```

2. **Install Dependencies**:
   Install the necessary packages using npm or yarn:
   ```bash
   npm install
   # Or if using yarn:
   yarn install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file at the root of the project and add the following fields:

   ```
   MONGODB_URI=<Your MongoDB URI>
   AUTH_SECRET=<A secret string for JWT authentication>
   ```

   - **MONGODB_URI**: This should point to your MongoDB database. If you're using MongoDB Atlas, you'll find this in your Atlas dashboard.
   - **AUTH_SECRET**: This is used for signing JSON Web Tokens (JWT) to manage user sessions. Choose a secure, random string.

4. **Run the Development Server**:
   ```bash
   npm run dev
   # Or with yarn:
   yarn dev
   ```

   The application should now be running at [http://localhost:3000](http://localhost:3000).

---

## Functionality

### Authentication Features:

- **Signup**: Users can create new accounts by providing an email and password. The password is securely hashed and stored.
- **Login**: Existing users can log in using their email and password. Upon successful login, a JWT is generated to maintain their session.
- **Update Password**: Users can change their password if logged in. A verification step ensures that the password meets security standards.

---

## Kaizen Blogs Extension

This authentication template is used as the base for **Kaizen Blogs**. In Kaizen Blogs, we have extended the authentication flow by adding **two-factor authentication (2FA)** for an extra layer of security.

You can access Kaizen Blogs [here](blogs.kaizentech.uk)

---

## Credits

Built by Jake Rawal

---

### Contributing
If you want others to contribute, you can add:

```markdown
## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

Please ensure your code follows the coding conventions and passes all tests before submitting a pull request.
```

---
