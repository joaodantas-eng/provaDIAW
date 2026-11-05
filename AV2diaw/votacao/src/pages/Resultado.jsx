import { useState } from "react";
import { calcularResultado, calcularTotalVotos, obterVotos } from "../services/votacaoService";

const [votos, setVotos] = useState (() => obterVotos());

const total = calcularTotalVotos(votos)
const resultado = calcularResultado(votos);

