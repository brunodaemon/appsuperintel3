import { get } from '../api';

const CNPJ_MATRIZ = `4686827000151`;

export async function getTotalizadoresFaturamento() { 
    return await get(`app001/app001-faturamento-rede-7dd-35dd/?cnpjmatriz=${CNPJ_MATRIZ}`);
}

export async function getVariacaoPercentual() {
    return await get(`app001/app001-faturamento-variacao-percentual/`);
}

export async function getComprasVendasRedeSemanal() {
    return await get(`app001/app001-compras-vendas-trocas-perdas-ultimos7dd/`);
}

export async function getGraficoLinhaSemanal() {
    return await get(`app001/app001-faturamento-semanal-rede-grafico-linha/`);
}

export async function getTabelaFaturamentoSemanal() {
    return await get(`app001/app001-faturamento-semanal-lojas/?id=7`);
}