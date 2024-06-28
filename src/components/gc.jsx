import { useNavigate, useParams } from "react-router-dom";
import { getClasseurGC, getGC, updateGC } from "../DataManager";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

export const GC = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [residence,setResidence] = useState([]);
    const [denom,setDenom] = useState("");
    const [client,setClient] = useState("");
    const [adresse,setAdresse] = useState("");
    const [athemes,setAthemes] = useState("");
    const [site,setSite] = useState("");
    const [technicien,setTechnicien] = useState("");
    const [visite,setVisite] = useState("");
    const [miseService,setMiseService] = useState("");
    const [numeroPorte,setNumeroPorte] = useState("");
    const [hauteur,setHauteur] = useState("");
    const [ca,setCa] = useState("");
    const [natureClos,setNatureClos] = useState("");
    const [portable,setPortable] = useState("");
    const [typologie,setTypologie] = useState("");
    const [natureCouvert,setNatureCouvert] = useState("");
    const [adresseRue,setAdresseRue] = useState("");
    const [etage,setEtage] = useState("");
    const [typoGC,setTypoGC] = useState("");
    const [presentAbsentRefus,setPresentAbsentRefus] = useState("");
    const [situation,setSituation] = useState([]);
    const [autreSituation,setAutreSituation] = useState([]);
    const [natureGC,setNatureGC] = useState("");
    const [largeurGC,setLargeurGC] = useState("");
    const [structureGC,setStructureGC] = useState([]);
    const [materiauxGC,setMateriauxGC] = useState([]);
    const [autresMateriaux,setAutresMateriaux] = useState("");
    const [typeRemplissage,setTypeRemplissage] = useState([]);
    const [gabarit,setGabarit] = useState("");
    const [vide,setVide] = useState("");
    const [autresRemplissage,setAutresRemplissage] = useState("");
    const [rampeRehausse,setRampeRehausse] = useState([]);
    const [typeMaintient,setTypeMaintient] = useState([]);
    const [autreTypeMaintient,setAutreTypeMaintient] = useState("");
    const [longueurGC,setLongueurGC] = useState("");
    const [nbGC,setNbGC] = useState("");
    const [remarquesEventuelles,setRemarquesEventuelles] = useState("");
    const [stationnement,setStationnement] = useState("");
    const [mesureGene1,setMesureGene1] = useState("");
    const [mesureGene2,setMesureGene2] = useState("");
    const [mesureGene3,setMesureGene3] = useState("");
    const [mesureGene4,setMesureGene4] = useState("");
    const [mesureGene5,setMesureGene5] = useState("");
    const [mesureGene6,setMesureGene6] = useState("");
    const [mesureGene7,setMesureGene7] = useState("");
    const [mesureGene8,setMesureGene8] = useState("");
    const [mesureGene9,setMesureGene9] = useState("");
    const [mesureGene10,setMesureGene10] = useState("");
    const [mesureGene11,setMesureGene11] = useState("");
    const [mesureGene12,setMesureGene12] = useState("");
    const [mesureGene13,setMesureGene13] = useState("");
    const [mesureGene14,setMesureGene14] = useState("");
    const [mesureGene15,setMesureGene15] = useState("");
    const [mesureGene16,setMesureGene16] = useState("");
    const [mesureGene17,setMesureGene17] = useState("");
    const [mesureGene18,setMesureGene18] = useState("");
    const [mesureGeneCote1,setMesureGeneCote1] = useState("");
    const [mesureGeneCote2,setMesureGeneCote2] = useState("");
    const [mesureGeneCote3,setMesureGeneCote3] = useState("");
    const [mesureGeneCote4,setMesureGeneCote4] = useState("");
    const [mesureGeneCote5,setMesureGeneCote5] = useState("");
    const [mesureGeneCote6,setMesureGeneCote6] = useState("");
    const [mesureGeneCote7,setMesureGeneCote7] = useState("");
    const [mesureGeneCote8,setMesureGeneCote8] = useState("");
    const [mesureGeneCote9,setMesureGeneCote9] = useState("");
    const [mesureGeneCote10,setMesureGeneCote10] = useState("");
    const [mesureGeneCote11,setMesureGeneCote11] = useState("");
    const [mesureGeneCote12,setMesureGeneCote12] = useState("");
    const [mesureGeneCote13,setMesureGeneCote13] = useState("");
    const [mesureGeneCote14,setMesureGeneCote14] = useState("");
    const [mesureGeneCote15,setMesureGeneCote15] = useState("");
    const [mesureGeneCote16,setMesureGeneCote16] = useState("");
    const [mesureGeneCote17,setMesureGeneCote17] = useState("");
    const [mesureGeneCote18,setMesureGeneCote18] = useState("");
    const [elemInf1,setElemInf1] = useState("");
    const [elemInf2,setElemInf2] = useState("");
    const [elemInf3,setElemInf3] = useState("");
    const [elemInf4,setElemInf4] = useState("");
    const [elemInf5,setElemInf5] = useState("");
    const [elemInf6,setElemInf6] = useState("");
    const [elemInf7,setElemInf7] = useState("");
    const [elemInf8,setElemInf8] = useState("");
    const [elemInfCote1,setElemInfCote1] = useState("");
    const [elemInfCote2,setElemInfCote2] = useState("");
    const [elemInfCote3,setElemInfCote3] = useState("");
    const [elemInfCote4,setElemInfCote4] = useState("");
    const [elemInfCote5,setElemInfCote5] = useState("");
    const [elemInfCote6,setElemInfCote6] = useState("");
    const [elemInfCote7,setElemInfCote7] = useState("");
    const [elemInfCote8,setElemInfCote8] = useState("");
    const [escaladeEnfant,setEscaladeEnfant] = useState("");
    const [confVideSousGC,setConfVideSousGC] = useState("");
    const [confZSN,setConfZSN] = useState("");
    const [confZSP,setConfZSP] = useState("");
    const [surLeGC,setSurLeGC] = useState([]);
    const [surLeBati,setSurLeBati] = useState([]);
    const [autreDesordre,setAutreDesordre] = useState("");
    const [etatRevet,setEtatRevet] = useState("");
    const [etatBati,setEtatBati] = useState("");
    const [concluConf,setConcluConf] = useState("");
    const [concluSante,setConcluSante] = useState("");
    const [recomConf,setRecomConf] = useState([]);
    const [recomEtat,setRecomEtat] = useState([]);
    const [verif,setVerif] = useState(true);

    useEffect(() => {
            const save = async () => {
                await updateGC(params.id,params.uid,{
                    denom:denom,client:client,adresse:adresse,athemes:athemes,site:site,technicien:technicien,visite:visite,miseService:miseService
                    ,numeroPorte:numeroPorte,hauteur:hauteur,ca:ca,natureClos:natureClos,portable:portable,typologie:typologie,natureCouvert:natureCouvert
                    ,adresseRue:adresseRue,etage:etage,typoGC:typoGC,presentAbsentRefus:presentAbsentRefus,situation:situation,autreSituation:autreSituation
                    ,natureGC:natureGC,largeurGC:largeurGC,structureGC:structureGC,materiauxGC:materiauxGC,autresMateriaux:autresMateriaux,typeRemplissage:typeRemplissage
                    ,gabarit:gabarit,vide:vide,autresRemplissage:autresRemplissage,rampeRehausse:rampeRehausse,typeMaintient:typeMaintient,autreTypeMaintient:autreTypeMaintient
                    ,longueurGC:longueurGC,nbGC:nbGC,remarquesEventuelles:remarquesEventuelles,stationnement:stationnement,mesureGene1:mesureGene1,mesureGene2:mesureGene2
                    ,mesureGene3:mesureGene3,mesureGene4:mesureGene4,mesureGene5:mesureGene5,mesureGene6:mesureGene6,mesureGene7:mesureGene7,mesureGene8:mesureGene8
                    ,mesureGene9:mesureGene9,mesureGene10:mesureGene10,mesureGene11:mesureGene11,mesureGene12:mesureGene12,mesureGene13:mesureGene13,mesureGene14:mesureGene14
                    ,mesureGene15:mesureGene15,mesureGene16:mesureGene16,mesureGene17:mesureGene17,mesureGene18:mesureGene18,mesureGeneCote1:mesureGeneCote1,mesureGeneCote2:mesureGeneCote2
                    ,mesureGeneCote3:mesureGeneCote3,mesureGeneCote4:mesureGeneCote4,mesureGeneCote5:mesureGeneCote5,mesureGeneCote6:mesureGeneCote6
                    ,mesureGeneCote7:mesureGeneCote7,mesureGeneCote8:mesureGeneCote8,mesureGeneCote9:mesureGeneCote9,mesureGeneCote10:mesureGeneCote10
                    ,mesureGeneCote11:mesureGeneCote11,mesureGeneCote12:mesureGeneCote12,mesureGeneCote13:mesureGeneCote13,mesureGeneCote14:mesureGeneCote14
                    ,mesureGeneCote15:mesureGeneCote15,mesureGeneCote16:mesureGeneCote16,mesureGeneCote17:mesureGeneCote17,mesureGeneCote18:mesureGeneCote18
                    ,elemInf1:elemInf1,elemInf2:elemInf2,elemInf3:elemInf3,elemInf4:elemInf4,elemInf5:elemInf5,elemInf6:elemInf6,elemInf7:elemInf7
                    ,elemInf8:elemInf8,elemInfCote1:elemInfCote1,elemInfCote2:elemInfCote2,elemInfCote3:elemInfCote3,elemInfCote4:elemInfCote4,elemInfCote5:elemInfCote5
                    ,elemInfCote6:elemInfCote6,elemInfCote7:elemInfCote7,elemInfCote8:elemInfCote8,escaladeEnfant:escaladeEnfant,confVideSousGC:confVideSousGC,confZSN:confZSN
                    ,confZSP:confZSP,surLeGC:surLeGC,surLeBati:surLeBati,autreDesordre:autreDesordre,etatRevet:etatRevet,etatBati:etatBati,concluConf:concluConf
                    ,concluSante:concluSante,recomConf:recomConf,recomEtat:recomEtat
                });
            }

        const fetchData = async () => {
          const result = await getClasseurGC(params.id);
          setResidence(result);

          if (params.uid !== "new") {
            if (getGC(params.id,params.uid) !== false && verif) {
                const gc = await getGC(params.id,params.uid);
                setDenom(gc.gc.denom);
                setClient(gc.gc.client);
                setAdresse(gc.gc.adresse);
                setAthemes(gc.gc.athemes);
                setSite(gc.gc.site);
                setTechnicien(gc.gc.technicien);
                setVisite(gc.gc.visite);
                setMiseService(gc.gc.miseService);
                setNumeroPorte(gc.gc.numeroPorte);
                setHauteur(gc.gc.hauteur);
                setCa(gc.gc.ca);
                setNatureClos(gc.gc.natureClos);
                setPortable(gc.gc.portable);
                setTypologie(gc.gc.typologie);
                setNatureCouvert(gc.gc.natureCouvert);
                setAdresseRue(gc.gc.adresseRue);
                setEtage(gc.gc.etage);
                setTypoGC(gc.gc.typoGC);
                setPresentAbsentRefus(gc.gc.presentAbsentRefus);
                setSituation(gc.gc.situation);
                setAutreSituation(gc.gc.autreSituation);
                setNatureGC(gc.gc.natureGC);
                setLargeurGC(gc.gc.largeurGC);
                setStructureGC(gc.gc.structureGC);
                setMateriauxGC(gc.gc.materiauxGC);
                setAutresMateriaux(gc.gc.autresMateriaux);
                setTypeRemplissage(gc.gc.typeRemplissage);
                setGabarit(gc.gc.gabarit);
                setVide(gc.gc.vide);
                setAutresRemplissage(gc.gc.autresRemplissage);
                setRampeRehausse(gc.gc.rampeRehausse);
                setTypeMaintient(gc.gc.typeMaintient);
                setAutreTypeMaintient(gc.gc.autreTypeMaintient);
                setLongueurGC(gc.gc.longueurGC);
                setNbGC(gc.gc.nbGC);
                setRemarquesEventuelles(gc.gc.remarquesEventuelles);
                setStationnement(gc.gc.stationnement);
                setMesureGene1(gc.gc.mesureGene1);
                setMesureGene2(gc.gc.mesureGene2);
                setMesureGene3(gc.gc.mesureGene3);
                setMesureGene4(gc.gc.mesureGene4);
                setMesureGene5(gc.gc.mesureGene5);
                setMesureGene6(gc.gc.mesureGene6);
                setMesureGene7(gc.gc.mesureGene7);
                setMesureGene8(gc.gc.mesureGene8);
                setMesureGene9(gc.gc.mesureGene9);
                setMesureGene10(gc.gc.mesureGene10);
                setMesureGene11(gc.gc.mesureGene11);
                setMesureGene12(gc.gc.mesureGene12);
                setMesureGene13(gc.gc.mesureGene13);
                setMesureGene14(gc.gc.mesureGene14);
                setMesureGene15(gc.gc.mesureGene15);
                setMesureGene16(gc.gc.mesureGene16);
                setMesureGene17(gc.gc.mesureGene17);
                setMesureGene18(gc.gc.mesureGene18);
                setMesureGeneCote1(gc.gc.mesureGeneCote1);
                setMesureGeneCote2(gc.gc.mesureGeneCote2);
                setMesureGeneCote3(gc.gc.mesureGeneCote3);
                setMesureGeneCote4(gc.gc.mesureGeneCote4);
                setMesureGeneCote5(gc.gc.mesureGeneCote5);
                setMesureGeneCote6(gc.gc.mesureGeneCote6);
                setMesureGeneCote7(gc.gc.mesureGeneCote7);
                setMesureGeneCote8(gc.gc.mesureGeneCote8);
                setMesureGeneCote9(gc.gc.mesureGeneCote9);
                setMesureGeneCote10(gc.gc.mesureGeneCote10);
                setMesureGeneCote11(gc.gc.mesureGeneCote11);
                setMesureGeneCote12(gc.gc.mesureGeneCote12);
                setMesureGeneCote13(gc.gc.mesureGeneCote13);
                setMesureGeneCote14(gc.gc.mesureGeneCote14);
                setMesureGeneCote15(gc.gc.mesureGeneCote15);
                setMesureGeneCote16(gc.gc.mesureGeneCote16);
                setMesureGeneCote17(gc.gc.mesureGeneCote17);
                setMesureGeneCote18(gc.gc.mesureGeneCote18);
                setElemInf1(gc.gc.elemInf1);
                setElemInf2(gc.gc.elemInf2);
                setElemInf3(gc.gc.elemInf3);
                setElemInf4(gc.gc.elemInf4);
                setElemInf5(gc.gc.elemInf5);
                setElemInf6(gc.gc.elemInf6);
                setElemInf7(gc.gc.elemInf7);
                setElemInf8(gc.gc.elemInf8);
                setElemInfCote1(gc.gc.elemInfCote1);
                setElemInfCote2(gc.gc.elemInfCote2);
                setElemInfCote3(gc.gc.elemInfCote3);
                setElemInfCote4(gc.gc.elemInfCote4);
                setElemInfCote5(gc.gc.elemInfCote5);
                setElemInfCote6(gc.gc.elemInfCote6);
                setElemInfCote7(gc.gc.elemInfCote7);
                setElemInfCote8(gc.gc.elemInfCote8);
                setEscaladeEnfant(gc.gc.escaladeEnfant);
                setConfVideSousGC(gc.gc.confVideSousGC);
                setConfZSN(gc.gc.confZSN);
                setConfZSP(gc.gc.confZSP);
                setSurLeGC(gc.gc.surLeGC);
                setSurLeBati(gc.gc.surLeBati);
                setAutreDesordre(gc.gc.autreDesordre);
                setEtatRevet(gc.gc.etatRevet);
                setEtatBati(gc.gc.etatBati);
                setConcluConf(gc.gc.concluConf);
                setConcluSante(gc.gc.concluSante);
                setRecomConf(gc.gc.recomConf);
                setRecomEtat(gc.gc.recomEtat);
                setVerif(false);
            }
            if (!verif) {
                save();
            }
          }
        };
    
        fetchData();
    },[verif,params,denom
        ,client
        ,adresse
        ,athemes
        ,site
        ,technicien
        ,visite
        ,miseService
        ,numeroPorte
        ,hauteur
        ,ca
        ,natureClos
        ,portable
        ,typologie
        ,natureCouvert
        ,adresseRue
        ,etage
        ,typoGC
        ,presentAbsentRefus
        ,situation
        ,autreSituation
        ,natureGC
        ,largeurGC
        ,structureGC
        ,materiauxGC
        ,autresMateriaux
        ,typeRemplissage
        ,gabarit
        ,vide
        ,autresRemplissage
        ,rampeRehausse
        ,typeMaintient
        ,autreTypeMaintient
        ,longueurGC
        ,nbGC
        ,remarquesEventuelles
        ,stationnement
        ,mesureGene1
        ,mesureGene2
        ,mesureGene3
        ,mesureGene4
        ,mesureGene5
        ,mesureGene6
        ,mesureGene7
        ,mesureGene8
        ,mesureGene9
        ,mesureGene10
        ,mesureGene11
        ,mesureGene12
        ,mesureGene13
        ,mesureGene14
        ,mesureGene15
        ,mesureGene16
        ,mesureGene17
        ,mesureGene18
        ,mesureGeneCote1
        ,mesureGeneCote2
        ,mesureGeneCote3
        ,mesureGeneCote4
        ,mesureGeneCote5
        ,mesureGeneCote6
        ,mesureGeneCote7
        ,mesureGeneCote8
        ,mesureGeneCote9
        ,mesureGeneCote10
        ,mesureGeneCote11
        ,mesureGeneCote12
        ,mesureGeneCote13
        ,mesureGeneCote14
        ,mesureGeneCote15
        ,mesureGeneCote16
        ,mesureGeneCote17
        ,mesureGeneCote18
        ,elemInf1
        ,elemInf2
        ,elemInf3
        ,elemInf4
        ,elemInf5
        ,elemInf6
        ,elemInf7
        ,elemInf8
        ,elemInfCote1
        ,elemInfCote2
        ,elemInfCote3
        ,elemInfCote4
        ,elemInfCote5
        ,elemInfCote6
        ,elemInfCote7
        ,elemInfCote8
        ,escaladeEnfant
        ,confVideSousGC
        ,confZSN
        ,confZSP
        ,surLeGC
        ,surLeBati
        ,autreDesordre
        ,etatRevet
        ,etatBati
        ,concluConf
        ,concluSante
        ,recomConf
        ,recomEtat]);

    const changeNatureGC = (nature) => {
        if (nature === natureGC) {
            setNatureGC("");
        } else {
            setNatureGC(nature);
        }
    }

    const changeLargeurGC = (largeur) => {
        if (largeur === largeurGC) {
            setLargeurGC("");
        } else {
            setLargeurGC(largeur);
        }
    }

    const changeSituationGC = (situationParam) => {
        const temp = [...situation]
        if (situation.includes(situationParam)) {
            const index = situation.indexOf(situationParam);
            temp.splice(index,1);
            setSituation(temp);
        } else {
            temp.push(situationParam);
            setSituation(temp);
        }
    }

    const changeStructureGC = (structure) => {
        const temp = [...structureGC]
        if (structureGC.includes(structure)) {
            const index = structureGC.indexOf(structure);
            temp.splice(index,1);
            setStructureGC(temp);
        } else {
            temp.push(structure);
            setStructureGC(temp);
        }
    }

    const changeMateriauxGC = (materiaux) => {
        const temp = [...materiauxGC]
        if (materiauxGC.includes(materiaux)) {
            const index = materiauxGC.indexOf(materiaux);
            temp.splice(index,1);
            setMateriauxGC(temp);
        } else {
            temp.push(materiaux);
            setMateriauxGC(temp);
        }
    }

    const changeTypeRemplissageGC = (remplissage) => {
        const temp = [...typeRemplissage]
        if (typeRemplissage.includes(remplissage)) {
            const index = typeRemplissage.indexOf(remplissage);
            temp.splice(index,1);
            setTypeRemplissage(temp);
        } else {
            temp.push(remplissage);
            setTypeRemplissage(temp);
        }
    }

    const changeRampeRehausseGC = (rehausse) => {
        const temp = [...rampeRehausse]
        if (rampeRehausse.includes(rehausse)) {
            const index = rampeRehausse.indexOf(rehausse);
            temp.splice(index,1);
            setRampeRehausse(temp);
        } else {
            temp.push(rehausse);
            setRampeRehausse(temp);
        }
    }

    const changeTypeMaintientGC = (maintient) => {
        const temp = [...typeMaintient]
        if (typeMaintient.includes(maintient)) {
            const index = typeMaintient.indexOf(maintient);
            temp.splice(index,1);
            setTypeMaintient(temp);
        } else {
            temp.push(maintient);
            setTypeMaintient(temp);
        }
    }

    const changeSurLeGC = (param) => {
        const temp = [...surLeGC]
        if (surLeGC.includes(param)) {
            const index = surLeGC.indexOf(param);
            temp.splice(index,1);
            setSurLeGC(temp);
        } else {
            temp.push(param);
            setSurLeGC(temp);
        }
    }

    const changeSurLeBati = (param) => {
        const temp = [...surLeBati]
        if (surLeBati.includes(param)) {
            const index = surLeBati.indexOf(param);
            temp.splice(index,1);
            setSurLeBati(temp);
        } else {
            temp.push(param);
            setSurLeBati(temp);
        }
    }

    const changeRecomConf = (param) => {
        const temp = [...recomConf]
        if (recomConf.includes(param)) {
            const index = recomConf.indexOf(param);
            temp.splice(index,1);
            setRecomConf(temp);
        } else {
            temp.push(param);
            setRecomConf(temp);
        }
    }

    const changeRecomEtat = (param) => {
        const temp = [...recomEtat]
        if (recomEtat.includes(param)) {
            const index = recomEtat.indexOf(param);
            temp.splice(index,1);
            setRecomEtat(temp);
        } else {
            temp.push(param);
            setRecomEtat(temp);
        }
    }

    const update = async (uid,data) => {
        await updateGC(residence.id,uid,data);
    }

    const save2 = () => {
        const uid = uuid();
        const data = {
            denom:denom,client:client,adresse:adresse,athemes:athemes,site:site,technicien:technicien,visite:visite,miseService:miseService
            ,numeroPorte:numeroPorte,hauteur:hauteur,ca:ca,natureClos:natureClos,portable:portable,typologie:typologie,natureCouvert:natureCouvert
            ,adresseRue:adresseRue,etage:etage,typoGC:typoGC,presentAbsentRefus:presentAbsentRefus,situation:situation,autreSituation:autreSituation
            ,natureGC:natureGC,largeurGC:largeurGC,structureGC:structureGC,materiauxGC:materiauxGC,autresMateriaux:autresMateriaux,typeRemplissage:typeRemplissage
            ,gabarit:gabarit,vide:vide,autresRemplissage:autresRemplissage,rampeRehausse:rampeRehausse,typeMaintient:typeMaintient,autreTypeMaintient:autreTypeMaintient
            ,longueurGC:longueurGC,nbGC:nbGC,remarquesEventuelles:remarquesEventuelles,stationnement:stationnement,mesureGene1:mesureGene1,mesureGene2:mesureGene2
            ,mesureGene3:mesureGene3,mesureGene4:mesureGene4,mesureGene5:mesureGene5,mesureGene6:mesureGene6,mesureGene7:mesureGene7,mesureGene8:mesureGene8
            ,mesureGene9:mesureGene9,mesureGene10:mesureGene10,mesureGene11:mesureGene11,mesureGene12:mesureGene12,mesureGene13:mesureGene13,mesureGene14:mesureGene14
            ,mesureGene15:mesureGene15,mesureGene16:mesureGene16,mesureGene17:mesureGene17,mesureGene18:mesureGene18,mesureGeneCote1:mesureGeneCote1,mesureGeneCote2:mesureGeneCote2
            ,mesureGeneCote3:mesureGeneCote3,mesureGeneCote4:mesureGeneCote4,mesureGeneCote5:mesureGeneCote5,mesureGeneCote6:mesureGeneCote6
            ,mesureGeneCote7:mesureGeneCote7,mesureGeneCote8:mesureGeneCote8,mesureGeneCote9:mesureGeneCote9,mesureGeneCote10:mesureGeneCote10
            ,mesureGeneCote11:mesureGeneCote11,mesureGeneCote12:mesureGeneCote12,mesureGeneCote13:mesureGeneCote13,mesureGeneCote14:mesureGeneCote14
            ,mesureGeneCote15:mesureGeneCote15,mesureGeneCote16:mesureGeneCote16,mesureGeneCote17:mesureGeneCote17,mesureGeneCote18:mesureGeneCote18
            ,elemInf1:elemInf1,elemInf2:elemInf2,elemInf3:elemInf3,elemInf4:elemInf4,elemInf5:elemInf5,elemInf6:elemInf6,elemInf7:elemInf7
            ,elemInf8:elemInf8,elemInfCote1:elemInfCote1,elemInfCote2:elemInfCote2,elemInfCote3:elemInfCote3,elemInfCote4:elemInfCote4,elemInfCote5:elemInfCote5
            ,elemInfCote6:elemInfCote6,elemInfCote7:elemInfCote7,elemInfCote8:elemInfCote8,escaladeEnfant:escaladeEnfant,confVideSousGC:confVideSousGC,confZSN:confZSN
            ,confZSP:confZSP,surLeGC:surLeGC,surLeBati:surLeBati,autreDesordre:autreDesordre,etatRevet:etatRevet,etatBati:etatBati,concluConf:concluConf
            ,concluSante:concluSante,recomConf:recomConf,recomEtat:recomEtat
        }
        update(uid,data);
        navigate("/GC/" + residence.id + "/edit/" + uid);
    }

    return (
            <div style={{display:"flex",rowGap:"40px",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"20px"}}>
                <button onClick={() => save2()} style={{border:"2px solid black",backgroundColor:"white",padding:"15px",borderRadius:"10px",cursor:"pointer"}}>SAUVEGARDER</button>
                <table style={{borderCollapse:"collapse"}}>
                    <tbody>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Dénom.Client EI</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={denom} onChange={(e) => setDenom(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Résidence</td>
                            <td style={{border:"2px solid black",padding:"5px"}}>{residence.residence === undefined ? "" : residence.residence}</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Repère client</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={client} onChange={(e) => setClient(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Adresse</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={adresse} onChange={(e) => setAdresse(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Repère Athemes</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={athemes} onChange={(e) => setAthemes(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Contact site</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={site} onChange={(e) => setSite(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Technicien</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={technicien} onChange={(e) => setTechnicien(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Date visite</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={visite} onChange={(e) => setVisite(e.target.value)} /></td>
                        </tr>
                    </tbody>
                </table>
                <table style={{borderCollapse:"collapse"}}>
                    <tbody>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Année de mise en service</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={miseService} onChange={(e) => setMiseService(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Numéro de porte</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={numeroPorte} onChange={(e) => setNumeroPorte(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Hauteur</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={hauteur} onChange={(e) => setHauteur(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Intitulé CA</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={ca} onChange={(e) => setCa(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} style={{border:"2px solid black",padding:"5px"}}>Nature du clos</td>
                            <td rowSpan={2} style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={natureClos} onChange={(e) => setNatureClos(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Téléphone portable</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={portable} onChange={(e) => setPortable(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Typologie du logement</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={typologie} onChange={(e) => setTypologie(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Nature du couvert</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={natureCouvert} onChange={(e) => setNatureCouvert(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Adresse rue</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={adresseRue} onChange={(e) => setAdresseRue(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Etage</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={etage} onChange={(e) => setEtage(e.target.value)} /></td>
                            <td style={{border:"2px solid black",padding:"5px"}}>N° de typologie GC</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={typoGC} onChange={(e) => setTypoGC(e.target.value)} /></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label>
                        <input type="radio" name="absent" onChange={() => setPresentAbsentRefus("absent")} checked={"absent" === presentAbsentRefus} />Absent
                    </label>
                    <label>
                        <input type="radio" name="present" onChange={() => setPresentAbsentRefus("present")} checked={"present" === presentAbsentRefus} />Présent
                    </label>
                    <label>
                        <input type="radio" name="refus" onChange={() => setPresentAbsentRefus("refus")} checked={"refus" === presentAbsentRefus} />Refus
                    </label>
                </div>
                <table style={{borderCollapse:"collapse"}}>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{border:"2px solid black",padding:"5px"}}>Situation</td>
                        </tr>
                        <tr>
                            <td onClick={() => changeSituationGC("partpriv")} style={{border:"2px solid black",padding:"5px"}}>Part priv</td>
                            <td onClick={() => changeSituationGC("partpriv")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("partpriv") ? "X" : ""}</td>
                            <td onClick={() => changeSituationGC("partcomm")} style={{border:"2px solid black",padding:"5px"}}>Part comm</td>
                            <td onClick={() => changeSituationGC("partcomm")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("partcomm") ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td onClick={() => changeSituationGC("balclogg")} style={{border:"2px solid black",padding:"5px"}}>Balc / Logg</td>
                            <td onClick={() => changeSituationGC("balclogg")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("balclogg") ? "X" : ""}</td>
                            <td onClick={() => changeSituationGC("terraccess")} style={{border:"2px solid black",padding:"5px"}}>Terr access</td>
                            <td onClick={() => changeSituationGC("terraccess")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("terraccess") ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td onClick={() => changeSituationGC("fenetre")} style={{border:"2px solid black",padding:"5px"}}>Fenêtre</td>
                            <td onClick={() => changeSituationGC("fenetre")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("fenetre") ? "X" : ""}</td>
                            <td onClick={() => changeSituationGC("appuifenetre")} style={{border:"2px solid black",padding:"5px"}}>Appui de fenêtre</td>
                            <td onClick={() => changeSituationGC("appuifenetre")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("appuifenetre") ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td onClick={() => changeSituationGC("escalier")} style={{border:"2px solid black",padding:"5px"}}>Escalier</td>
                            <td onClick={() => changeSituationGC("escalier")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("escalier") ? "X" : ""}</td>
                            <td onClick={() => changeSituationGC("palieretage")} style={{border:"2px solid black",padding:"5px"}}>Palier d'étage</td>
                            <td onClick={() => changeSituationGC("palieretage")} style={{border:"2px solid black",padding:"5px"}}>{situation.includes("palieretage") ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Autre</td>
                            <td colSpan={3} style={{border:"2px solid black",padding:"5px"}}><textarea style={{border:0}} value={autreSituation} onChange={(e) => setAutreSituation(e.target.value)} /></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{display:"flex",gap:"40px"}}>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td  style={{border:"2px solid black",padding:"5px"}} colSpan={2}>Nature du GC</td>
                            </tr>
                            <tr onClick={() => changeNatureGC("unique")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Unique</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{natureGC === "unique" ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeNatureGC("mixte")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Mixte</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{natureGC === "mixte" ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td  style={{border:"2px solid black",padding:"5px"}} colSpan={2}>Largeur du GC</td>
                            </tr>
                            <tr onClick={() => changeLargeurGC("mince")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Mince ≤ 20 cm</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{largeurGC === "mince" ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeLargeurGC("epais")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Epais* {">"} 20 cm</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{largeurGC === "epais" ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>*Habitation Epais GC ≥ 60 cm | HGC = H' ≥ 80 cm</p>
                <div style={{display:"flex",gap:"40px"}}>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td  style={{border:"2px solid black",padding:"5px"}} colSpan={2}>Structure du GC</td>
                            </tr>
                            <tr onClick={() => changeStructureGC("gcstructurel")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>GC structurel</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{structureGC.includes("gcstructurel") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeStructureGC("jardiniere")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Jardinière</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{structureGC.includes("jardiniere") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeStructureGC("balustrade")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Balustrade</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{structureGC.includes("balustrade") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeStructureGC("gcrapporte")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>GC rapporté</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{structureGC.includes("gcrapporte") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeStructureGC("gcrehausse")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>GC en rehausse</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{structureGC.includes("gcrehausse") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeStructureGC("barreappui")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Barre d'appui</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{structureGC.includes("barreappui") ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td  style={{border:"2px solid black",padding:"5px"}} colSpan={2}>Matériaux</td>
                            </tr>
                            <tr onClick={() => changeMateriauxGC("acier")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Acier</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{materiauxGC.includes("acier") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeMateriauxGC("alliageleger")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Alliage léger</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{materiauxGC.includes("alliageleger") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeMateriauxGC("beton")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Béton</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{materiauxGC.includes("beton") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeMateriauxGC("maconne")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Maçonné</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{materiauxGC.includes("maconne") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeMateriauxGC("pierre")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Pierre</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{materiauxGC.includes("pierre") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeMateriauxGC("bois")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Bois</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{materiauxGC.includes("bois") ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <textarea value={autresMateriaux} onChange={(e) => setAutresMateriaux(e.target.value)} style={{border:"2px solid black",padding:"5px",width:"35%"}} placeholder="Autres matériaux"></textarea>
                <table style={{borderCollapse:"collapse"}}>
                    <tbody>
                        <tr>
                            <td  style={{border:"2px solid black",padding:"5px"}} colSpan={4}>Type de remplissage</td>
                        </tr>
                        <tr>
                            <td onClick={() => changeTypeRemplissageGC("barreaudage")}  style={{border:"2px solid black",padding:"5px"}}>Barreaudages</td>
                            <td onClick={() => changeTypeRemplissageGC("barreaudage")}  style={{border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("barreaudage") ? "X" : ""}</td>
                            <td onClick={() => changeTypeRemplissageGC("compoinclinee")}  style={{border:"2px solid black",padding:"5px"}}>Compo inclinée</td>
                            <td onClick={() => changeTypeRemplissageGC("compoinclinee")}  style={{border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("compoinclinee") ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td onClick={() => changeTypeRemplissageGC("lisserigide")}  style={{border:"2px solid black",padding:"5px"}}>Lisses rigides</td>
                            <td onClick={() => changeTypeRemplissageGC("lisserigide")}  style={{border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("lisserigide") ? "X" : ""}</td>
                            <td onClick={() => changeTypeRemplissageGC("compoverticalehorizontale")}  style={{border:"2px solid black",padding:"5px"}}>Compo verticale horizontale</td>
                            <td onClick={() => changeTypeRemplissageGC("compoverticalehorizontale")}  style={{border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("compoverticalehorizontale") ? "X" : ""}</td>
                        </tr>
                        <tr onClick={() => changeTypeRemplissageGC("maconne")}>
                            <td  style={{border:"2px solid black",padding:"5px"}}>Maçonné</td>
                            <td colSpan={3}  style={{textAlign:'center',border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("maconne") ? "X" : ""}</td>
                        </tr>
                        <tr onClick={() => changeTypeRemplissageGC("vitre")}>
                            <td  style={{border:"2px solid black",padding:"5px"}}>Vitré (verre/synthé)</td>
                            <td colSpan={3}  style={{textAlign:'center',border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("vitre") ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td onClick={() => changeTypeRemplissageGC("tole")}   style={{border:"2px solid black",padding:"5px"}}>Tôlé</td>
                            <td onClick={() => changeTypeRemplissageGC("tole")}   style={{border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("tole") ? "X" : ""}</td>
                            <td onClick={() => changeTypeRemplissageGC("perfcreve")} style={{border:"2px solid black",padding:"5px"}}>Perf/crevé</td>
                            <td onClick={() => changeTypeRemplissageGC("perfcreve")} style={{border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("perfcreve") ? "X" : ""}</td>
                        </tr>
                        <tr onClick={() => changeTypeRemplissageGC("treillisgrillageconforme")}>
                            <td  style={{border:"2px solid black",padding:"5px"}}>Treillis / Grillage</td>
                            <td  style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("treillisgrillageconforme") ? "X" : ""}</td>
                            <td colSpan={2}  style={{border:"2px solid black",padding:"5px"}}>≤ à 5 cm</td>
                        </tr>
                        <tr onClick={() => changeTypeRemplissageGC("treillisgrillagenonconforme")}>
                            <td  style={{border:"2px solid black",padding:"5px"}}>Treillis / Grillage</td>
                            <td  style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("treillisgrillagenonconforme") ? "X" : ""}</td>
                            <td colSpan={2} style={{border:"2px solid black",padding:"5px"}}>{">"} à 5 cm (non conforme)</td>
                        </tr>
                        <tr onClick={() => changeTypeRemplissageGC("ferforgferrone")}>
                            <td  style={{border:"2px solid black",padding:"5px"}}>FerForg / Ferroné </td>
                            <td colSpan={3} style={{border:"2px solid black",padding:"5px"}}>{typeRemplissage.includes("ferforgferrone") ? "X" : ""}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Gabarit : 25 x 11 x 11 cm vérifié ?</p>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label style={{color:"green"}}>
                        <input type="radio" name="ouigabarit" onChange={() => setGabarit("oui")} checked={"oui" === gabarit} />Oui
                    </label>
                    <label style={{color:"red"}}>
                        <input type="radio" name="nongabarit" onChange={() => setGabarit("non")} checked={"non" === gabarit} />Non
                    </label>
                </div>
                <p>Absence de vide : ≥ 0 10 cm de largeur et à 5 cm de hauteur ?</p>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label style={{color:"green"}}>
                        <input type="radio" name="ouivide" onChange={() => setVide("oui")} checked={"oui" === vide} />Oui
                    </label>
                    <label style={{color:"red"}}>
                        <input type="radio" name="nonvide" onChange={() => setVide("non")} checked={"non" === vide} />Non
                    </label>
                </div>
                <textarea value={autresRemplissage} onChange={(e) => setAutresRemplissage(e.target.value)} style={{border:"2px solid black",padding:"5px",width:"35%"}} placeholder="Autres remplissages"></textarea>
                <div style={{display:"flex",gap:"40px"}}>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td  style={{border:"2px solid black",padding:"5px"}} colSpan={2}>GC rampe de rehausse</td>
                            </tr>
                            <tr onClick={() => changeRampeRehausseGC("origine")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>D'origine</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{rampeRehausse.includes("origine") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRampeRehausseGC("remplace")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Remplacé</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{rampeRehausse.includes("remplace") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRampeRehausseGC("renove")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Rénové</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}>{rampeRehausse.includes("renove") ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td  style={{border:"2px solid black",padding:"5px"}} colSpan={2}>Type de maintient en position</td>
                            </tr>
                            <tr onClick={() => changeTypeMaintientGC("scellement")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Scellement</td>
                                <td  style={{textAlign:"center",border:"2px solid black",padding:"5px"}}>{typeMaintient.includes("scellement") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeTypeMaintientGC("mecanique")}>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Fixation mécanique</td>
                                <td  style={{textAlign:"center",border:"2px solid black",padding:"5px"}}>{typeMaintient.includes("mecanique") ? "X" : ""}</td>
                            </tr>
                            <tr>
                                <td  style={{border:"2px solid black",padding:"5px"}}>Autre</td>
                                <td  style={{border:"2px solid black",padding:"5px"}}><textarea value={autreTypeMaintient} onChange={(e) => setAutreTypeMaintient(e.target.value)} style={{border:"0"}}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table style={{borderCollapse:"collapse"}}>
                    <tbody>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Longueur du GC</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={longueurGC} onChange={(e) => setLongueurGC(e.target.value)} style={{border:"0"}}></textarea>ml</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Nombre de GC</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={nbGC} onChange={(e) => setNbGC(e.target.value)} style={{border:"0"}}></textarea>U</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Remarques éventuelles</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={remarquesEventuelles} onChange={(e) => setRemarquesEventuelles(e.target.value)} style={{border:"0"}}></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <p>Zone de stationnement normale : Surface de stationnement  : Larg. ≥ 30 cm long ≥30 cm</p>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label style={{color:"green"}}>
                        <input type="radio" name="ouistationnement" onChange={() => setStationnement("oui")} checked={"oui" === stationnement} />Oui
                    </label>
                    <label style={{color:"red"}}>
                        <input type="radio" name="nonstationnement" onChange={() => setStationnement("non")} checked={"non" === stationnement} />Non
                    </label>
                </div>
                <table style={{borderCollapse:"collapse"}}>
                    <tbody>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Mesures générales du GC et/ou RehausGC</td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Conf.</td>
                            <td style={{border:"2px solid black",padding:"5px"}}>N.Conf.</td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Côtes</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Ht de sécu (H) du GC ≥ 100 cm</td>
                            <td onClick={() => {mesureGene1 === "conf" ? setMesureGene1("") : setMesureGene1("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene1 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene1 === "nonconf" ? setMesureGene1("") : setMesureGene1("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene1 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote1} onChange={(e) => setMesureGeneCote1(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Ht de sécu (H) avec Rehaus de GC ≥ 100 cm</td>
                            <td onClick={() => {mesureGene2 === "conf" ? setMesureGene2("") : setMesureGene2("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene2 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene2 === "nonconf" ? setMesureGene2("") : setMesureGene2("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene2 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote2} onChange={(e) => setMesureGeneCote2(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Epaisseur du GC</td>
                            <td onClick={() => {mesureGene3 === "conf" ? setMesureGene3("") : setMesureGene3("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene3 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene3 === "nonconf" ? setMesureGene3("") : setMesureGene3("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene3 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote3} onChange={(e) => setMesureGeneCote3(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Hauteur rehausse de GC</td>
                            <td onClick={() => {mesureGene4 === "conf" ? setMesureGene4("") : setMesureGene4("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene4 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene4 === "nonconf" ? setMesureGene4("") : setMesureGene4("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene4 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote4} onChange={(e) => setMesureGeneCote4(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Epaisseur rehausse de GC</td>
                            <td onClick={() => {mesureGene5 === "conf" ? setMesureGene5("") : setMesureGene5("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene5 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene5 === "nonconf" ? setMesureGene5("") : setMesureGene5("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene5 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote5} onChange={(e) => setMesureGeneCote5(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Distance moyenne entre les montants</td>
                            <td onClick={() => {mesureGene6 === "conf" ? setMesureGene6("") : setMesureGene6("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene6 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene6 === "nonconf" ? setMesureGene6("") : setMesureGene6("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene6 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote6} onChange={(e) => setMesureGeneCote6(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide entre barreau &jouée/Tableau  ≤ 11 cm</td>
                            <td onClick={() => {mesureGene7 === "conf" ? setMesureGene7("") : setMesureGene7("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene7 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene7 === "nonconf" ? setMesureGene7("") : setMesureGene7("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene7 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote7} onChange={(e) => setMesureGeneCote7(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide entre barreaux ≤ 11 cm</td>
                            <td onClick={() => {mesureGene8 === "conf" ? setMesureGene8("") : setMesureGene8("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene8 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene8 === "nonconf" ? setMesureGene8("") : setMesureGene8("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene8 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote8} onChange={(e) => setMesureGeneCote8(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide entre lisses hautes ≤ 18 cm</td>
                            <td onClick={() => {mesureGene9 === "conf" ? setMesureGene9("") : setMesureGene9("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene9 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene9 === "nonconf" ? setMesureGene9("") : setMesureGene9("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene9 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote9} onChange={(e) => setMesureGeneCote9(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide entre lisse basse et dalle ≤ 11 cm</td>
                            <td onClick={() => {mesureGene10 === "conf" ? setMesureGene10("") : setMesureGene10("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene10 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene10 === "nonconf" ? setMesureGene10("") : setMesureGene10("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene10 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote10} onChange={(e) => setMesureGeneCote10(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide entre GC en saillie de la dalle ≤ 5 cm</td>
                            <td onClick={() => {mesureGene11 === "conf" ? setMesureGene11("") : setMesureGene11("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene11 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene11 === "nonconf" ? setMesureGene11("") : setMesureGene11("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene11 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote11} onChange={(e) => setMesureGeneCote11(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{border:"2px solid black",padding:"5px"}}>Cas des rampe d'escalier :</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Ht de sécu (H) Rampe Escalier  ≥ 90 cm</td>
                            <td onClick={() => {mesureGene12 === "conf" ? setMesureGene12("") : setMesureGene12("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene12 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene12 === "nonconf" ? setMesureGene12("") : setMesureGene12("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene12 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote12} onChange={(e) => setMesureGeneCote12(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide sous lisse Escalier sans limon ≤ 5 cm</td>
                            <td onClick={() => {mesureGene13 === "conf" ? setMesureGene13("") : setMesureGene13("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene13 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene13 === "nonconf" ? setMesureGene13("") : setMesureGene13("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene13 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote13} onChange={(e) => setMesureGeneCote13(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide sous lisse et le nezdemarche ≤ 5 cm</td>
                            <td onClick={() => {mesureGene14 === "conf" ? setMesureGene14("") : setMesureGene14("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene14 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene14 === "nonconf" ? setMesureGene14("") : setMesureGene14("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene14 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote14} onChange={(e) => setMesureGeneCote14(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide parallèle sous lisse &pente/limon ≤ 18cm</td>
                            <td onClick={() => {mesureGene15 === "conf" ? setMesureGene15("") : setMesureGene15("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene15 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene15 === "nonconf" ? setMesureGene15("") : setMesureGene15("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene15 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote15} onChange={(e) => setMesureGeneCote15(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide entre lisses ≤ 18 cm</td>
                            <td onClick={() => {mesureGene16 === "conf" ? setMesureGene16("") : setMesureGene16("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene16 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene16 === "nonconf" ? setMesureGene16("") : setMesureGene16("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene16 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote16} onChange={(e) => setMesureGeneCote16(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Vide Rampe en saillie  ≤ 5 cm</td>
                            <td onClick={() => {mesureGene17 === "conf" ? setMesureGene17("") : setMesureGene17("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene17 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene17 === "nonconf" ? setMesureGene17("") : setMesureGene17("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene17 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote17} onChange={(e) => setMesureGeneCote17(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{border:"2px solid black",padding:"5px"}}>Jour d'escalier sur palier</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Largeur jour d'escalier ≤ 60cm (Ht sécu ≥ 90 cm)</td>
                            <td onClick={() => {mesureGene18 === "conf" ? setMesureGene18("") : setMesureGene18("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{mesureGene18 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {mesureGene18 === "nonconf" ? setMesureGene18("") : setMesureGene18("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{mesureGene18 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={mesureGeneCote18} onChange={(e) => setMesureGeneCote18(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                    </tbody>
                </table>
                <table style={{borderCollapse:"collapse"}}>
                    <tbody>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Elem inférieur de GC et/ou de Rehaus GC</td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Conf.</td>
                            <td style={{border:"2px solid black",padding:"5px"}}>N.Conf.</td>
                            <td style={{border:"2px solid black",padding:"5px"}}>Côtes</td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{border:"2px solid black",padding:"5px"}}>Possibilité d'agenouillement :</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>GC avec élem inférieur Ht 45 ≤ D {"<"} 60 cm</td>
                            <td onClick={() => {elemInf1 === "conf" ? setElemInf1("") : setElemInf1("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf1 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf1 === "nonconf" ? setElemInf1("") : setElemInf1("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf1 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote1} onChange={(e) => setElemInfCote1(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Larg. élem inférieur 13 ≤ D {"<"} 60 cm</td>
                            <td onClick={() => {elemInf2 === "conf" ? setElemInf2("") : setElemInf2("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf2 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf2 === "nonconf" ? setElemInf2("") : setElemInf2("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf2 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote2} onChange={(e) => setElemInfCote2(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Ht sécurité à genoux ≥ 50 cm (Tol en œuvre -15mm)</td>
                            <td onClick={() => {elemInf3 === "conf" ? setElemInf3("") : setElemInf3("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf3 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf3 === "nonconf" ? setElemInf3("") : setElemInf3("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf3 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote3} onChange={(e) => setElemInfCote3(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{border:"2px solid black",padding:"5px"}}></td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>GC avec élem inférieur {"<"} 45 cm</td>
                            <td onClick={() => {elemInf4 === "conf" ? setElemInf4("") : setElemInf4("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf4 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf4 === "nonconf" ? setElemInf4("") : setElemInf4("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf4 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote4} onChange={(e) => setElemInfCote4(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Larg. élem inférieur {"<"} 13 cm</td>
                            <td onClick={() => {elemInf5 === "conf" ? setElemInf5("") : setElemInf5("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf5 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf5 === "nonconf" ? setElemInf5("") : setElemInf5("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf5 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote5} onChange={(e) => setElemInfCote5(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Larg. élem inférieur 13 ≤ D {"<"} 30 cm</td>
                            <td onClick={() => {elemInf6 === "conf" ? setElemInf6("") : setElemInf6("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf6 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf6 === "nonconf" ? setElemInf6("") : setElemInf6("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf6 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote6} onChange={(e) => setElemInfCote6(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Zone de stationnement précaire (ZNP)</td>
                            <td onClick={() => {elemInf7 === "conf" ? setElemInf7("") : setElemInf7("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf7 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf7 === "nonconf" ? setElemInf7("") : setElemInf7("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf7 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote7} onChange={(e) => setElemInfCote7(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",padding:"5px"}}>Hauteur (H') du GC ≥ 90 cm </td>
                            <td onClick={() => {elemInf8 === "conf" ? setElemInf8("") : setElemInf8("conf")}} style={{backgroundColor:"green",border:"2px solid black",padding:"5px"}}>{elemInf8 === "conf" ? "X" : ""}</td>
                            <td onClick={() => {elemInf8 === "nonconf" ? setElemInf8("") : setElemInf8("nonconf")}} style={{backgroundColor:"red",border:"2px solid black",padding:"5px"}}>{elemInf8 === "nonconf" ? "X" : ""}</td>
                            <td style={{border:"2px solid black",padding:"5px"}}><textarea value={elemInfCote8} onChange={(e) => setElemInfCote8(e.target.value)} style={{border:"0"}}></textarea>cm</td>
                        </tr>
                    </tbody>
                </table>
                <p>Possibilités d'escalade des enfants</p>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label>
                        <input type="radio" name="ouiesca" onChange={() => setEscaladeEnfant("oui")} checked={"oui" === escaladeEnfant} />Oui
                    </label>
                    <label>
                        <input type="radio" name="nonesca" onChange={() => setEscaladeEnfant("non")} checked={"non" === escaladeEnfant} />Non
                    </label>
                </div>
                <p>Conformité : vides sous GC/RehausGC/Rampe</p>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label>
                        <input type="radio" name="confvide" onChange={() => setConfVideSousGC("conf")} checked={"conf" === confVideSousGC} />Conf.
                    </label>
                    <label>
                        <input type="radio" name="nonvide" onChange={() => setConfVideSousGC("nonconf")} checked={"nonconf" === confVideSousGC} />N.Conf.
                    </label>
                </div>
                <p>Conformité du GC ZSN :</p>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label>
                        <input type="radio" name="confzsn" onChange={() => setConfZSN("conf")} checked={"conf" === confZSN} />Conf.
                    </label>
                    <label>
                        <input type="radio" name="nonconfzsn" onChange={() => setConfZSN("nonconf")} checked={"nonconf" === confZSN} />N.Conf.
                    </label>
                </div>
                <p>Conformité du GC ZSP :</p>
                <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                    <label>
                        <input type="radio" name="confzsp" onChange={() => setConfZSP("conf")} checked={"conf" === confZSP} />Conf.
                    </label>
                    <label>
                        <input type="radio" name="nonconfzsp" onChange={() => setConfZSP("nonconf")} checked={"nonconf" === confZSP} />N.Conf.
                    </label>
                </div>
                <div style={{display:"flex",gap:"40px"}}>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td colSpan={2} style={{border:"2px solid black",padding:"5px"}}>Sur le garde-corps</td>
                            </tr>
                            <tr onClick={() => changeSurLeGC("manquant")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Elément manquant et/ou cassé</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeGC.includes("manquant") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeGC("lisse")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Dégradation ou déformation de lisses</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeGC.includes("lisse") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeGC("barreaux")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Dégradation ou déformation de barreaux</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeGC.includes("barreaux") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeGC("grillage")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Dégradation ou déformation de grillage</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeGC.includes("grillage") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeGC("mecanique")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Dégradation de scellement et/ou de fixation mécanique</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeGC.includes("mecanique") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeGC("soudures")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Dégradation de soudures</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeGC.includes("soudures") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeGC("corrosion")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Corrosion et oxydation de l'Ouvrage</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeGC.includes("corrosion") ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td colSpan={2} style={{border:"2px solid black",padding:"5px"}}>Sur le bâti support de gardes-corps</td>
                            </tr>
                            <tr onClick={() => changeSurLeBati("nez")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Eclats de béton en nez de dalle</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeBati.includes("nez") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeBati("eau")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Eclats au droit de la goutte d'eau</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeBati.includes("eau") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeBati("tableau")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Eclats de béton en tableaux</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeBati.includes("tableau") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeBati("eclat")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Fissuration et éclats au sol de balcons</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeBati.includes("eclat") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeBati("eclatsous")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Dégradation en sous face de balcons</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeBati.includes("eclatsous") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeSurLeBati("eclatsur")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Eclat de béton sur GC maçonnés</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{surLeBati.includes("eclatsur") ? "X" : ""}</td>
                            </tr>
                            <tr>
                                <td style={{border:"2px solid black",padding:"5px"}}>Autre désordre</td>
                                <td style={{border:"2px solid black",padding:"5px"}}><textarea value={autreDesordre} onChange={(e) => setAutreDesordre(e.target.value)} style={{border:"0"}}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{display:"flex",gap:"40px"}}>
                    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <p>Bon état des revêtements</p>
                        <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                            <label>
                                <input type="radio" name="ouirevet" onChange={() => setEtatRevet("oui")} checked={"oui" === etatRevet} />Oui
                            </label>
                            <label>
                                <input type="radio" name="nonrevet" onChange={() => setEtatRevet("non")} checked={"non" === etatRevet} />Non
                            </label>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <p>Bon état du bâti support</p>
                        <div style={{display:"flex",gap:"15px",border:"2px solid black",padding:"15px"}}>
                            <label>
                                <input type="radio" name="ouibati" onChange={() => setEtatBati("oui")} checked={"oui" === etatBati} />Oui
                            </label>
                            <label>
                                <input type="radio" name="nonbati" onChange={() => setEtatBati("non")} checked={"non" === etatBati} />Non
                            </label>
                        </div>
                    </div>
                </div>
                <textarea value={concluConf} onChange={(e) => setConcluConf(e.target.value)} style={{border:"2px solid black",padding:"5px",width:"35%"}} placeholder="Conclusion Etat de la conformité :"></textarea>
                <textarea value={concluSante} onChange={(e) => setConcluSante(e.target.value)} style={{border:"2px solid black",padding:"5px",width:"35%"}} placeholder="Conclusion Etat de santé :"></textarea>
                <div style={{display:"flex",gap:"40px"}}>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td colSpan={2} style={{border:"2px solid black",padding:"5px"}}>Recommandations de mise en conformité</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("treillis")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Remplissage par treillis métalliques</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("treillis") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("tole")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Remplissage par tôle perforée ou crevée</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("tole") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("doublevitrage")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Remplissage par double vitrage / synthétique</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("doublevitrage") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("lisseGC")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Rehausse par ajout d'une lisse haute sur le GC</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("lisseGC") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("lissebati")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Rehausse par ajout d'une lisse haute sur le bâti support</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("lissebati") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("lissebasseGC")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Ajout d'une lisse basse sur le GC</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("lissebasseGC") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("lissebassebati")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Ajout d'une lisse basse sur le bâti support</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("lissebassebati") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("barreGC")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Ajout d'une barre d'appui sur le GC</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("barreGC") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("barreBati")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Ajout d'une barre d'appui sur le Bâti support</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("barreBati") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("barreau")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Ajout de barreau sur GC</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("barreau") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomConf("securecom")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Remplacement de l'élément de sécurité recommandé</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomConf.includes("securecom") ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{borderCollapse:"collapse"}}>
                        <tbody>
                            <tr>
                                <td colSpan={2} style={{border:"2px solid black",padding:"5px"}}>Recommandations de mise en conformité</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("refixation")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Refixation de la lisse haute</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("refixation") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("refection")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Réfection de scellement</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("refection") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("lisse")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Remplacement de lisse</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("lisse") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("barreaudages")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Remplacement de barreaudages</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("barreaudages") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("soudures")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Révision de soudures</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("soudures") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("renforcement")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Renforcement du garde corps</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("renforcement") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("anticorrosion")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Peinture anti corrosion garde corps</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("anticorrosion") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("traitementfissures")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Traitement fissures et éclats sur sols</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("traitementfissures") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("peinturessousface")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Peinture des sous faces</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("peinturessousface") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("sel")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Traitement SEL sur sols</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("sel") ? "X" : ""}</td>
                            </tr>
                            <tr onClick={() => changeRecomEtat("remplacementcomplet")}>
                                <td style={{border:"2px solid black",padding:"5px"}}>Remplacement complet de l'élément de sécurité</td>
                                <td style={{border:"2px solid black",padding:"5px"}}>{recomEtat.includes("remplacementcomplet") ? "X" : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}