import * as admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.GOOGLE_CREDS!);
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;