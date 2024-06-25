import Dexie from "dexie";

const db = new Dexie("DbAthemes");
db.version(1).stores({
    gc:'id,residence,dossier,prestation,gcs',
});

export default db;