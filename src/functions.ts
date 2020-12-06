import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import next from "next";

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "my-app" });
const handle = app.getRequestHandler();

export const nextjs = functions.https.onRequest(async (request, response) => {
  console.log("Received requested: " + request.originalUrl);
  return app.prepare().then(() => handle(request, response));
});
