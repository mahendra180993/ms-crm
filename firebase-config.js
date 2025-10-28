// <!-- Firebase SDK -->
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import {
      getFirestore,
      collection,
      addDoc,
      getDocs,
      updateDoc,
      deleteDoc,
      doc,
    } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

    // ✅ Firebase Config
    const firebaseConfig = {
      apiKey: "AIzaSyA1_fR7Lp-MAQr9LxkHz-gfpXsL1HfuJYM",
      authDomain: "client-crm-42c99.firebaseapp.com",
      projectId: "client-crm-42c99",
      storageBucket: "client-crm-42c99.firebasestorage.app",
      messagingSenderId: "803857193271",
      appId: "1:803857193271:web:7cdeaf0178f23e4ce8a2b2",
      measurementId: "G-WSY8T2LWRB",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    </script>