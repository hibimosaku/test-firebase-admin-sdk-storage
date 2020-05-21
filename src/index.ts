import {
  initializeApp,
  credential,
} from 'firebase-admin';
import * as serviceAccount from './service-account.json';


const app = initializeApp({
  credential: credential.cert(serviceAccount as any),
  databaseURL: 'https://admin-sdk-test-c89fd.firebaseio.com',
  storageBucket: 'admin-sdk-test-c89fd.appspot.com',
});

app.storage().bucket()
  .upload('./tsconfig.json')
  .catch(e => console.log(e));
