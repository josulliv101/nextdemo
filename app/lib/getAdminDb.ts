import * as admin from "firebase-admin";
import * as store from "firebase-admin/firestore";

console.log("keyy", process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);
console.log("serviceAccount", typeof serviceAccount, serviceAccount);
let adminApp = null;
let firestore: any = null;

// const adminAuth = adminApp?.auth();
console.log("???", store);

export default async function getAdminDb() {
  console.log("store", store);
  console.log("getAdminDb", process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  adminApp = !admin.apps.length
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: "fir-abc-a965d",
      })
    : admin.app();

  if (firestore) return firestore;

  firestore = await store.getFirestore(adminApp);

  return firestore;
}
