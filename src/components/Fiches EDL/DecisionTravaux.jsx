import { useEffect, useState } from "react";
import { PieceEdl, PieceOpr } from "./PieceEdl";
import './../../styles/EDL/tableau.css';

export const DecisionTravaux = ({deletePiece,listePieces,handleUpdatePieces,observationsGeneralesOpr,observationsGenerales,handleChangeObservationsGeneralesOpr,handleChangeObservationsGenerales,edlOpr}) => {
  const [observationsGenaralesArea,setObservationsGeneralesArea] = useState(observationsGenerales);
  const [observationsGenaralesAreaOpr,setObservationsGeneralesAreaOpr] = useState(observationsGeneralesOpr);
  const [verif,setVerif] = useState(false);
  const [verif2,setVerif2] = useState(false);

  useEffect(() => {
    setObservationsGeneralesArea(observationsGenerales);
    setObservationsGeneralesAreaOpr(observationsGeneralesOpr);
    if (verif) {
      handleChangeObservationsGenerales(observationsGenaralesArea);
      setVerif(false);
    }
    if (verif2) {
      handleChangeObservationsGeneralesOpr(observationsGenaralesAreaOpr);
      setVerif2(false);
    }
  },[verif,observationsGenaralesArea,handleChangeObservationsGenerales,observationsGenerales,handleChangeObservationsGeneralesOpr,observationsGeneralesOpr,observationsGenaralesAreaOpr,verif2]);

  const updatePiece = (index,updatedElements) => {
    const updatedPieces = [...listePieces];
    const indexPiece = updatedPieces.findIndex(object => object.id === index);
    updatedPieces[indexPiece].elements = updatedElements;
    handleUpdatePieces(updatedPieces);
  }

  const updateOpr = (index,updatedElements) => {
    const updatedPieces = [...listePieces];
    const indexPiece = updatedPieces.findIndex(object => object.id === index);
    updatedPieces[indexPiece].elements = updatedElements;
    handleUpdatePieces(updatedPieces);
  }

  const updateDeleteElement = (index,element) => {
    const piecesUpdated = [...listePieces];
    const indexPiece = piecesUpdated.findIndex(object => object.id === index);
    piecesUpdated[indexPiece].elements = piecesUpdated[indexPiece].elements.filter(filtre => filtre.id !== element);
    handleUpdatePieces(piecesUpdated);
  }

  const handleObservationsGenerales = (e) => {
    setObservationsGeneralesArea(e.target.value);
    setVerif(true);
  }

  const handleObservationsGeneralesOpr = (e) => {
    setObservationsGeneralesAreaOpr(e.target.value);
    setVerif2(true);
  }

    return edlOpr ? (
      <table className="table-travaux">
        <thead>
          <tr className="opr-head">
            <td className="td-designation">Désignations</td>
            <td className="td-faire" rowSpan={2}>A faire ?</td>
            <td id="sans-reserve" className="td-prestation">Sans réserve</td>
            <td id="reserve" className="td-prestation">Avec réserve(s)</td>
            <td id="effectuee" className="td-prestation">Prestation non effectuée</td>
            <td id="concerne" className="td-prestation">Non concerné</td>
            <td className="opr-observations">Observations</td>
          </tr>
        </thead>
        <tbody>
          {listePieces.map((piece) => (
            <PieceOpr onDeletePiece={deletePiece} key={piece.id} infosPiece={piece} onUpdatedOpr={updateOpr} onDeleteElement={updateDeleteElement} index={piece.id} />
          ))}
        </tbody>
        <tfoot>
          <tr className="nom-piece"><td className="td-observations-gene" colSpan={7}>Observations générales MOE</td></tr>
          <tr><td className="footer-textarea-container" colSpan={7}><textarea value={observationsGenaralesAreaOpr} onChange={handleObservationsGeneralesOpr}/></td></tr>
        </tfoot>
      </table>
    ) : (
      <table className="table-travaux">
        <thead>
          <tr className="decision-head">
            <td className="td-designation" rowSpan={2}>Désignations</td>
            <td className="td-etat" colSpan={3}>Etat</td>
            <td className="td-faire" rowSpan={2}>A faire ?</td>
            <td className="td-observations" rowSpan={2}>Observations</td>
          </tr>
          <tr className="tr-etat">
            <td>+</td>
            <td>=</td>
            <td>-</td>
          </tr>
        </thead>
        <tbody>
          {listePieces.map((piece) => (
            <PieceEdl onDeletePiece={deletePiece} key={piece.id} infosPiece={piece} index={piece.id} onUpdatedPiece={updatePiece} onDeleteElement={updateDeleteElement} />
          ))}
        </tbody>
        <tfoot>
          <tr className="nom-piece"><td className="td-observations-gene" colSpan={6}>Observations générales</td></tr>
          <tr><td className="footer-textarea-container" colSpan={6}><textarea value={observationsGenaralesArea} onChange={handleObservationsGenerales}/></td></tr>
        </tfoot>
      </table>
    );
}