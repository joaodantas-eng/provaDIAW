import "../services/votacaoService"
import "../services/listarNaRoca()"
import "../services/listarForaDaRoca()"
import "../services/registrarVoto(id)"
import { useState } from "react"

function ParticipanteCard ({ participante, onVotar }) {
    const { nome, foto, naRoca } = participante;

    return (
        <div className="card" role="button" tabIndex={0} aria-label={`Ver detalhes de ${participante.nome}`} onClick={() => onSelecionar(participante)} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelecionar(participante); } }}>
            <img src={foto} alt={participante.nome} />

            <span className="card-id">#{participante.id}</span>
            <h2>{participante.nome}</h2>

            <article className={naRoca ? 'card card-roca' : 'card'}>
                {naRoca && <span className="selo-roca">Na roça</span>}
                <img src={foto} alt={nome} className="card-foto"/>
            </article>
            {onVotar && (
                <button type="button" onClick={ () => onVotar(participante)}>
                    Votar para eliminar
                </button>
            )}
            {naRoca.map((p) =>(
                <ParticipanteCard
                key={p.id}
                participante={p}
                onVotar={handleVotar}
                />
            ))}
        </div>

    );
}

export default ParticipanteCard

const [ultimoVoto, setUltimoVoto] = useState(null);
const [votosNaSessao, setVotosNaSessao] = useState(0);

function handleVotar(participante) {
    {onVotar && (
                <button type="button" onClick={ () => onVotar(participante)}>
                    Votar para eliminar
                </button>
            )}
    registrarVoto(participante.id);
}