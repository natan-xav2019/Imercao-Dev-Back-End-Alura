import dotenv from "dotenv";
import conectarAoBanco from "../config/dbConfig.js";

dotenv.config();

const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}