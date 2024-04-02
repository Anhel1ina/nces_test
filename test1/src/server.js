const express = require('express');
const https = require('https');
const app = express();
const port = 3000; // Порт вашего сервера

app.get('/api/v2/egr/getShortInfoByRegNum/:regNum', async (req, res) => {
    const regNum = req.params.regNum;
    const options = {
        hostname: 'egr.gov.by',
        path: `/api/v2/egr/getShortInfoByRegNum/${regNum}`,
        method: 'GET'
    };

    const request = https.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch (error) {
                console.error('Ошибка при обработке данных:', error);
                res.status(500).json({ error: 'Ошибка при обработке данных' });
            }
        });
    });

    request.on('error', (error) => {
        console.error('Ошибка при отправке запроса:', error);
        res.status(500).json({ error: 'Ошибка при отправке запроса' });
    });

    request.end();
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
