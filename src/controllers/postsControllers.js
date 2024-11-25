import { getTodosPosts, criarPost } from "../models/postsModels.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPosts(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.menssage);
        res.status(500).json({ Erro: "Falha na requisição" })
    }
}