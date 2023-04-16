const express = require('express');
const fs = require('fs');
const app = express();
// 查询字节数量 用于分片
app.get('/length',(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('' + fs.statSync('./public/ImgShardByRange/zhjhahaah.jpg').size);
})

app.options('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Range')
    res.end('');
});

app.get('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.download('./public/ImgShardByRange/zhjhahaah.jpg', {
        acceptRanges: true
    })
})

app.listen(3000, () => {
    console.log(`server is running at port 3000`)
})
