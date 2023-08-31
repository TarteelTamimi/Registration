import express from "express";

const router = express.Router();

router.get('/', (rea, res) => {
    res.send("it is working :)");
});


export default router;