import express from 'express';
import { addAsync, Router } from '@awaitjs/express';
const app = addAsync(express());
const router = Router();
router.getAsync('/user', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 50));
    res.send('Hello User!');
});
app.use(router);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});
