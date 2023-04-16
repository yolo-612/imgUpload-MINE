const express = require('express');
const app = express();
// 功能版本1：如何设置文件下载：配合文件FileShardByRange/configFileDownload.html使用
// app.get('/aaa',(req, res, next) => {
//   res.setHeader('Content-Disposition','attachment; filename="guang.txt"')
//   res.end('guangguang');
// })

// 功能版本2：如何做到分片下载：配合文件FileShardByRange/index.html使用
// res.download 是读取文件内容返回，acceptRanges 选项为 true 就是会处理 range 请求（其实默认就是 true）。
app.get('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.download('./public/FileShardByRange/index.txt', {
      acceptRanges: true
  })
})

// 3. 组合多个range时访问 : 发送预检（preflight）请求：
app.options('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Range')
  res.end('');
});

app.listen(3000, () => {
    console.log(`server is running at port 3000`)
})