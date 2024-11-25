import dotenv from "dotenv";
import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

dotenv.config();

const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    return colecao.updateOne({ _id: new ObjectId(objId) }, { $set: novoPost })
}