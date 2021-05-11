const express = require('express');
const moment = require('moment-timezone');
const gm = require('gm');
const fetch = require('node-fetch');
const guessFormat = require('moment-guess');
const abbreviations = require('../assets/abbreviations.json');
const path = require('path')
const app = express();

const fontSize = 50;
const fontName = 'Helvetica';

const ipTimezones = {};

// function drawTextWidth(fontName = 'Helvetica', fontSize = 50, text = '') {
//     return new Promise((resolve, reject) => {
//         console.log(fontName, fontSize, text);
//         const imgStream = gm(1000, 1000, 'transparent')
//             // .fill('#000000')
//             .font(fontName)
//             .fontSize(fontSize)
//             .drawText(0, 0, text)
//             .trim()
//             .write('tmp.png', (e));
//
//             // gm(imgStream).size( function (err, size) {
//             //     console.log('ERRORRRR', err)
//             //     if (err) return reject(err);
//             //     return resolve(size.width);
//             // });
//
//     })
//
// }

app.get('/:time/*', async (req, res, next) => {

    const {time} = req.params;


    const ip = req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress ||
        null;
    let setIpTimezone = false;
    let timezone;
    if (ip && !req.query.timezone) {
        timezone = ipTimezones[ip] || (await (await fetch(`http://ip-api.com/json/${ip}`)).json()).timezone || null;
        setIpTimezone = !!timezone;
        timezone = timezone || 'UTC'
    } else if (req.query.timezone) {
        timezone = req.query.timezone;
    } else {
        timezone = 'UTC';
    }

    if (setIpTimezone)
        ipTimezones[ip] = timezone;


    const [, , ...zonesRaw] = decodeURI(req.originalUrl).split('/')
    const zones = zonesRaw.join('/').split('|');

    let format = guessFormat(time);
    const sourceTime = moment.tz(time, format, timezone);
    const times = {};

    times[timezone] = sourceTime.format(format);
    zones.forEach(zone => {
        const conversionTimezone = abbreviations[zone] || zone;
        if (!moment.tz.zone(conversionTimezone)) {
            times[zone] = false
        } else {
            times[zone] = sourceTime.clone().tz(conversionTimezone).format(format)
        }
    });
    let timeNames = Object.keys(times);
    const imageHeight = (timeNames.length * fontSize) + fontSize;
    const imageWidth = 1200;
    const image = gm(imageWidth, imageHeight, 'white');
    image.font(fontName, fontSize)
    let inc = (fontSize / 2);
    let maxSize = 0;

    for (let i in timeNames) {
        const timeName = timeNames[i];
        let timeValue = times[timeName];
        image.fill('#000000');
        if (timeValue === false) {
            image.fill('#ff0000');
            timeValue = 'Invalid Timezone'
        }
        const text = `${timeName} - ${timeValue}`;
        image.drawText(10, fontSize + inc, text);
        // const textWidth = await drawTextWidth(fontName, fontSize, text);

        // maxSize = textWidth > maxSize ? textWidth : maxSize;
        inc += fontSize;
    }
    image.in('-draw', `image over ${imageWidth - 110},10 100,33 ${path.resolve(__dirname, '../assets/logo.png')}`)

    // image.crop(maxSize + 10, imageHeight );


    image.write('./test.png', (err) => {
        if (err) return next(err);
        res.sendFile(require('path').resolve('./test.png'));
    })


});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
