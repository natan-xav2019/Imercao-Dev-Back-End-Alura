import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPosts } from "../controllers/postsControllers.js";

const upload = multer({ dest: './uploads' })

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPosts);
    app.post("/upload", upload.single("imagem"),)
}

export default routes;