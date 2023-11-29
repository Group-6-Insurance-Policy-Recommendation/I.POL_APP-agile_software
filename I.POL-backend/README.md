# Backend Development: Node.js, Express, MongoDB, Firebase

This repository contains the backend implementation for I.POL APP, developed using Node.js with the Express framework. It uses MongoDB for data storage and Firebase for user authentication. The development server is managed by `nodemon` for automatic server restarts during development.

## Getting Started

Follow the steps below to set up and run the backend server.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Firebase project with service account key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Group-6-Insurance-Policy-Recommendation/I.POL_APP-agile_software.git
   cd I.POL-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project: [Firebase Console](https://console.firebase.google.com/)
   - Generate a service account key and save it as `path/to/your/firebase/serviceAccountKey.json`

4. Run the server:

   ```bash
   npm start
   ```

   For development with automatic server restarts, use:

   ```bash
   npm run dev
   ```

   The server will run on http://localhost:3000.

### Configuration

- Update the MongoDB connection URL in `server.js`:

  ```javascript
  mongoose.connect("mongodb://localhost/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  ```

- Update the Firebase configuration in `firebase-auth.js`:

  ```javascript
  const serviceAccount = require("path/to/your/firebase/serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-project-id.firebaseio.com",
  });
  ```

## API Endpoints

- **POST /api/your-endpoint**

  - Description of what this endpoint does.

  Example Request:

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"idToken": "YOUR_FIREBASE_ID_TOKEN", "otherData": "some value"}' http://localhost:3000/api/your-endpoint
  ```

  Example Response:

  ```json
  { "message": "Success", "data": {} }
  ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or create a pull request.

## License
