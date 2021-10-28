import mongoose from "mongoose";
const carSchema = new mongoose.Schema({ driver: mongoose.ObjectId });
const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    cnpj: String,
    vaga: String,
    descricao: String,
    liguagens: String,
    Requisitos: String,
    valores: String,
});

export default mongoose.model('cards', cardSchema);