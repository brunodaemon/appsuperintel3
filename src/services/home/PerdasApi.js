import { get } from '../api';

const CNPJ_MATRIZ = `4686827000151`;

export async function getTotalizadoresPerdas() { 
    return await get(`cardperdas/pfcard/?cnpjmatriz=${CNPJ_MATRIZ}`);
}

export async function getTabelaPerdas() {
    return await get(`app001/app001-tabela-perdas-por-loja-com-percentuais/`);
}