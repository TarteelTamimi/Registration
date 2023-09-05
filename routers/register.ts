import express from "express";
import { User } from "../db/entities/User.js";
import db from "../db/index.js";

const router = express.Router();

router.get('/', (rea, res) => {
  console.log(res.locals.User)
  res.send('All users');
});

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await User.findOne({ where: { id } });
    res.send(user);
  } catch (error) {
    res.status(404).send("User not found!")
  }
});

router.post('/', async (req, res) => {
  try {
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    await User.save(user);
    res.send('User Created');

  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong, " + error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await User.findOneBy({ id });
    if (user) {
      await user.remove();
      res.send('User Deleted');
    } else {
      res.status(404).send('User not found!');
    }
  } catch (error) {
    res.status(500)
      .send(`Something went wrong, you can't delete a user if he have todo items!`);
  }
});


export default router;