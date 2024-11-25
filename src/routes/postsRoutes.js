import express from "express";
import { listarPosts, postarNovoPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPosts);
}

export default routes;