const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const db = require('./config/db')

app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.get('/postlist', (req,res) => {
    db.query(`select * from post order by no desc`, (err,data) => {
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})
//select문으로 전체 조회

app.post('/postlist', (req,res) => {
    console.log(req.body)
    const no = req.body.no
    const title = req.body.title
    const postdate = req.body.postdate
    const detail = req.body.detail
    const writer = req.body.writer

    db.query(`insert into post values ('${no}', '${title}', '${postdate}', '${detail}', '${writer}')`, (err,data) => {
        if(!err){
            console.log("post 성공")
        }else{
            console.log(err)
        }
    })
})
//insert문 사용하여 값 삽입

app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})