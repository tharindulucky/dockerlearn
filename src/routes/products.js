import express from "express";
import productsController from "../controllers/Products.Controller.js"
const router = express.Router();

router.get('/',  productsController.index);
router.post('/',  productsController.save);

export default router;