import axios from "axios";

class Api {
    async GetValorMetroQuadrado(){

        const dadosApi = await axios.get('http://localhost:3333/api1');

        if (dadosApi.status != 200){
            return res.status(500).json({error:"API1 (custo do M²) está indisponível."});
        }

        return dadosApi.data.valorMetroQuadrado;
    }
}

export default new Api();