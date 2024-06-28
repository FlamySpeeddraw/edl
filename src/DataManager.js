import db from './db';

export const createClasseurGC = async (id,residence,dossier,prestation,gcs) => {
  try {
    await db.gc.add({id,residence,dossier,prestation,gcs});
    console.log('Résidence créée');
  } catch (error) {
    console.error('Erreur création résidence :', error);
  }
};

export const getAllClasseursGC = async () => {
  try {
    const data = await db.gc.toArray();
    return data;
  } catch (error) {
    console.error('Erreur getAllClasseur :', error);
  }
};

export const getClasseurGC = async (id) => {
  try {
    const data = await db.gc.get(id);
    return data;
  } catch (error) {
    console.error('Erreur getClasseur :', error);
  }
};

export const deleteClasseurGC = async (id) => {
  try {
    await db.gc.delete(id);
    console.log('Data deleted successfully.');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

export const updateNomsClasseursGC = async (id,residence,dossier,prestation) => {
  try {
    await db.gc.update(id,{residence,dossier,prestation});
    console.log('Data updated successfully.');
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

export const updateGC = async (idResidence,uid,gc) => {
  try {
    const result = await getClasseurGC(idResidence);
    if (result.gcs.findIndex((gc) => gc.uid === uid) !== -1) {
      const index = result.gcs.findIndex((gc) => gc.uid === uid);
      result.gcs[index] = {uid:uid,gc:gc};
    } else {
      result.gcs.push({uid:uid,gc:gc});
    }
    await db.gc.update(idResidence,{gcs:result.gcs});
    console.log('Data updated successfully.');
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

export const getGC = async (idResidence,uid) => {
  try {
    const result = await getClasseurGC(idResidence);
    if (result.gcs.findIndex((gc) => gc.uid === uid) !== -1) {
      const index = result.gcs.findIndex((gc) => gc.uid === uid);
      return result.gcs[index];
    }
    return false;
  } catch (error) {
    console.error('Error get data:', error);
  }
}

export const deleteGC = async (idResidence,uid) => {
  try {
    const result = await getClasseurGC(idResidence);
    const index = result.gcs.findIndex((gc) => gc.uid === uid);
    result.gcs.splice(index,1);
    await db.gc.update(idResidence,result);
    const ret = await getClasseurGC(idResidence);
    console.log('Data updated successfully.');
    return ret;
  } catch (error) {
    console.error('Error updating data:', error);
  }
}