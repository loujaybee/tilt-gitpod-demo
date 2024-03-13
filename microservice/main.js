const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Microservice A running on port ${PORT} - DX DAY!!!!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
    console.info("Interrupted")
    process.exit(0)
})