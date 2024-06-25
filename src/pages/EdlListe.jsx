import { useEffect, useState } from "react";
import { EdlListeChild } from "../components/EdlListeChild";
import "./../styles/EDL/liste.css"
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { createClasseurEdl, deleteClasseurEdl, getAllClasseursEdl, updateNomsClasseursEdl } from "../DataManager";
import { v4 as uuid } from 'uuid';

export const EdlListe = () => {
    const navigate = useNavigate();
    const [residences,setResidences] = useState([]);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isModalOpenModifer,setIsModalOpenModifer] = useState(false);
    const [nomResidence,setNomResidence] = useState("");
    const [nomDossier,setnomDossier] = useState("");
    const [nomPrestation,setNomPrestation] = useState("");
    const [selectClasseur,setSelectClasseur] = useState("");
    const [errorMessage,setErrorMessage] = useState(false);
    const [message,setMessage] = useState("");

    document.title = "Liste des résidences";
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await getAllClasseursEdl();
          setResidences(result);
        };
    
        fetchData();
    },[]);

    const checkIfExist = (nomResidenceF,nomDossierF) => {
        for (var i = 0;i < residences.length;i++) {
            if (residences[i].residence.toLowerCase() === nomResidenceF && residences[i].dossier.toLowerCase() === nomDossierF) {
                return true;
            }
        }
        return false;
    }

    const onValidate = () => {
        if (nomResidence === "" || nomDossier === "" || nomPrestation === "") {
            setMessage("Veuillez remplir tous les champs");
            setErrorMessage(true);
            setTimeout(() => {
                setMessage("");
                setErrorMessage(false);
            },2000);
        } else if (checkIfExist(nomResidence.toLowerCase(),nomDossier.toLowerCase())) {
            setMessage("La résidence éxiste déjà");
            setErrorMessage(true);
            setTimeout(() => {
                setMessage("");
                setErrorMessage(false);
            },2000);
        } else {
            const id = uuid();
            createClasseurEdl(id,nomResidence,nomDossier,nomPrestation,[]);
            setIsModalOpen(false);
            navigate("/edl/" + id + "/edit/new");
            setNomResidence("");
            setnomDossier("");
        }
    }

    const deleteResidence = async (id) => {
        await deleteClasseurEdl(id);
        const updatedData = await getAllClasseursEdl();
        setResidences(updatedData);
    }

    const openModalModifier = (id,nom,dossier,prestation) => {
        setSelectClasseur(id);
        setNomResidence(nom);
        setnomDossier(dossier);
        setNomPrestation(prestation)
        setIsModalOpenModifer(true);
    }

    const onValidateModifier = async () => {
        if (nomResidence === "" || nomDossier === "" || nomPrestation === "") {
            setMessage("Veuillez remplir tous les champs");
            setErrorMessage(true);
            setTimeout(() => {
                setMessage("");
                setErrorMessage(false);
            },2000);
        } else if (checkIfExist(nomResidence.toLowerCase(),nomDossier.toLowerCase())) {
            setMessage("La résidence éxiste déjà");
            setErrorMessage(true);
            setTimeout(() => {
                setMessage("");
                setErrorMessage(false);
            },2000);
        } else {
            updateNomsClasseursEdl(selectClasseur,nomResidence,nomDossier,nomPrestation);
            const updatedData = await getAllClasseursEdl();
            setResidences(updatedData);            
            setSelectClasseur("");
            setnomDossier("");
            setNomResidence("");
            setNomPrestation("");
            setIsModalOpenModifer(false);
        }
    }

    return (
        <div>
            <ul>
                <li id="li-ajouter-residence" onClick={() => {setNomResidence("");setnomDossier("");setIsModalOpen(true);}}><p>Ajouter une nouvelle résidence</p></li>
                {residences.map((residence) => (
                    <EdlListeChild key={residence.id} residenceInfos={residence} handleDeleteResidence={deleteResidence} handleModifierNom={openModalModifier} />
                ))}
            </ul>
            <Modal isOpen={isModalOpen} onValidate={() => onValidate()} onClose={() => setIsModalOpen(false)}>
                <h3>Création d'une nouvelle résidence</h3>
                <div className="inner-content-modal">
                    <input placeholder="Nom de la résidence" value={nomResidence} onChange={(e) => setNomResidence(e.target.value)} />
                    <input placeholder="Nom du dossier" value={nomDossier} onChange={(e) => setnomDossier(e.target.value)} />
                    <input placeholder="Nom de la prestation" value={nomPrestation} onChange={(e) => setNomPrestation(e.target.value)} />
                    {errorMessage ? <p style={{color:'red'}} className="error-message error-container">{message}</p> : <p className="error-container"></p>}
                </div>
            </Modal>
            <Modal isOpen={isModalOpenModifer} onValidate={() => onValidateModifier()} onClose={() => setIsModalOpenModifer(false)}>
                <h3>Modifier la résidence</h3>
                <div className="inner-content-modal">
                    <input placeholder="Nouveau nom de la résidence" value={nomResidence} onChange={(e) => setNomResidence(e.target.value)} />
                    <input placeholder="Nouveau nom du dossier" value={nomDossier} onChange={(e) => setnomDossier(e.target.value)} />
                    <input placeholder="Nouveau nom de la prestation" value={nomPrestation} onChange={(e) => setNomPrestation(e.target.value)} />
                    {errorMessage ? <p style={{color:'red'}} className="error-message error-container">{message}</p> : <p className="error-container"></p>}
                </div>
            </Modal>
        </div>
    )
}