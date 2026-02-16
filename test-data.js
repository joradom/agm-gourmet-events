const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seed() {
    // 1. Crear Lugar
    const lugarRef = db.collection('lugares').doc('ifema-madrid');
    await lugarRef.set({
        nombre: "IFEMA Madrid",
        direccion: "Av. del Partenón, 5, 28042 Madrid",
        ciudad: "Madrid",
        ubicacion: new admin.firestore.GeoPoint(40.4667, -3.6333)
    });

    // 2. Crear Categoría
    const catRef = db.collection('categorias_eventos').doc('ferias');
    await catRef.set({ nombre: "Ferias", slug: "ferias" });

    // 3. Crear Evento con Referencias
    const eventoRef = db.collection('eventos').doc('hip-horeca-2026');
    await eventoRef.set({
        titulo: "HIP – Horeca Professional Expo 2026",
        slug: "hip-horeca-professional-expo-2026",
        fecha_inicio: admin.firestore.Timestamp.fromDate(new Date("2026-02-23T09:00:00Z")),
        fecha_fin: admin.firestore.Timestamp.fromDate(new Date("2026-02-25T18:00:00Z")),
        imagen_destacada: "https://alimentaciongourmet.com/wp-content/uploads/2023/12/hip-horeca.jpg",
        categoria_ref: catRef,
        lugar_ref: lugarRef,
        precio: 0
    });

    console.log("✅ Estructura creada con éxito");
}

seed();
