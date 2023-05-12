# React Tailwind Vite Firebase Chat App

This is a simple chat application built using React, Tailwind, Vite, and Firebase. The app allows users to sign in with Firebase authentication and chat with other users in real-time using Firestore.

## Getting Started

To get started, follow the instructions below:

1. Clone the repository:

```bash
git clone https://github.com/ennachite/chat-app-react-vite-firebase.git
```

2. Navigate to the project directory:

```bash
cd chat-app-react-vite-firebase
```

3. Install the dependencies:

```bash
npm install
```

4. Get your Firebase credentials:

To connect the app with Firebase, you'll need to create a Firebase project and get the necessary credentials. Follow the instructions on [Firebase documentation](https://firebase.google.com/docs/web/setup) to create a new Firebase project and get your credentials.

5. Add Firebase credentials to the app:

Reformat the name of file `src/config/firebase.example.js` to `src/config/firebase.js`, and change those variables to yours.

```js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

6. Start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Firebase Authentication

The app uses Firebase Authentication to sign in users. The authentication flow is implemented using the Firebase SDK. To add new authentication providers or customize the authentication flow, refer to the [Firebase Authentication documentation](https://firebase.google.com/docs/auth).

## Firestore

The app uses Firestore to store and retrieve chat messages. Firestore is a NoSQL document-based database that allows you to store and sync data in real-time. To learn more about Firestore, refer to the [Firestore documentation](https://firebase.google.com/docs/firestore).

The app uses Firestore real-time listeners to sync the chat messages in real-time. Whenever a new message is added to the database, the app updates the UI with the new message.

## Production Build

To create a production build of the app, run the following command:

```bash
npm run build
```

This will create a production-ready build of the app in the `dist` directory.

## Conclusion

This is a simple chat application built using React, Tailwind, Vite, and Firebase. The app demonstrates how to connect Firebase Authentication and Firestore with a React app. If you have any questions or feedback, feel free to open an issue or a pull request.