import { Link, useParams } from "react-router-dom";
import { deleteGC, getClasseurGC } from "../DataManager"
import { useEffect, useState } from "react";

export const ListeFicheGC = () => {
    const params = useParams();
    const [residence,setResidence] = useState(undefined);
    const [verif,setVerif] = useState(true);
    console.log(residence)

    useEffect(() => {
        const test = async () => {
            const result = await getClasseurGC(params.id);
            setResidence(result);
        }
        if (verif) {
            test();
            setVerif(false)
        }
    },[params,residence,verif]);

    return (
        <ul>
            <li id="li-ajouter-residence"><Link className="link-liste-residence" to={"/GC/" + params.id + "/edit/new"}><p>Ajouter une nouvelle fiche</p></Link></li>
            {residence === undefined ? "" : residence.gcs.map((fiche) => (
                <li className="li-liste-residence" key={fiche.uid}>
                    <Link className="link-liste-residence" to={"/GC/" + residence.id + "/edit/" + fiche.uid}>{fiche.gc.numeroPorte} - {fiche.gc.adresse}</Link>
                    <button id="delete" onClick={() => deleteGC(residence.id,fiche.uid).then((response) => setResidence(response))}>
                        <svg className="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 40" width="40" height="40">
                            <path className="trash-lid" fillRule="evenodd" d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z" />
                            <path className="trash-can" d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    )
}