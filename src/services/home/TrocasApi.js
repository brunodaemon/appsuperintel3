import { get } from '../api';

const CNPJ_MATRIZ = `4686827000151`;

export async function getTotalizadoresTrocas() { 
    return await get(`cardtrocas/tfcard/?cnpjmatriz=${CNPJ_MATRIZ}`);
}

export async function getTotalizadoresEstoqueTrocas() { 
    return await get(`cardtrocas/tfcard/?cnpjmatriz=${CNPJ_MATRIZ}`);
}

export async function getTabelaTrocas() {
    return await get(`app001/app001-tabela-trocas-por-loja-com-percentuais/`);
}

export async function getTabelaEstoqueTrocas() {
    return await get(`app001/app001-tabela-trocas-por-loja-com-percentuais/`);
}