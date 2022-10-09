import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // adapter: FirestoreAdapter({
  //   // const firebaseConfig = {
  //   //   apiKey: "AIzaSyD471lBS70iKxJ2_5eV6TIBqxFGCP4t1Pk",
  //   //   authDomain: "api-project-193572480095.firebaseapp.com",
  //   //   projectId: "api-project-193572480095",
  //   //   storageBucket: "api-project-193572480095.appspot.com",
  //   //   messagingSenderId: "193572480095",
  //   //   appId: "1:193572480095:web:b8cc163283b6e9529da7ea",
  //   //   measurementId: "G-JQR3PSSVWS"
  //   // };
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   appId: process.env.FIREBASE_APP_ID,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //   // Optional emulator config (see below for options)
  //   emulator: {},
  // }),
})