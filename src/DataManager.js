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

export const getClasseurEdl = async (id) => {
  try {
    const data = await db.edl.get(id);
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

export const updateEdl = async (idResidence,id,numeroAppartement,typeAppartement,numeroBat,numeroEtage,pieces,observationsGenerales,observationsGeneralesOpr) => {
  try {
    const result = await getClasseurEdl(idResidence);
    if (result.edls.findIndex((edl) => edl.id === id) !== -1) {
      const index = result.edls.findIndex((edl) => edl.id === id);
      result.edls[index] = {id:id,numeroAppartement:numeroAppartement,typeAppartement:typeAppartement,numeroBat:numeroBat,numeroEtage:numeroEtage,pieces:pieces,observationsGenerales:observationsGenerales,observationsGeneralesOpr:observationsGeneralesOpr};
    } else {
      result.edls.push({id:id,numeroAppartement:numeroAppartement,typeAppartement:typeAppartement,numeroBat:numeroBat,numeroEtage:numeroEtage,pieces:pieces,observationsGenerales:observationsGenerales,observationsGeneralesOpr:observationsGeneralesOpr});
    }
    await db.edl.update(idResidence,{edls:result.edls});
    console.log('Data updated successfully.');
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

export const deleteEdl = async (idResidence,id) => {
  try {
    const result = await getClasseurEdl(idResidence);
    const index = result.edls.findIndex((edl) => edl.id === id);
    result.edls.splice(index,1);
    await db.edl.update(idResidence,result);
    console.log('Data updated successfully.');
  } catch (error) {
    console.error('Error updating data:', error);
  }
}