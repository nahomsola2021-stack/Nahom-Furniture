        const admin = require("firebase-admin");
        const serviceAccount = require("./service-account-key.json");

        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount)
        });

        // Paste the UID of your admin user here
        const uid = "3MO6JKw0fsR5rdBlsbkaX1OLHdj2";

        admin.auth().setCustomUserClaims(uid, { admin: true })
          .then(() => {
            console.log(`Successfully set admin claim for user: ${uid}`);
            process.exit(0);
          })
          .catch((error) => {
            console.error("Error setting custom claims:", error);
            process.exit(1);
          });