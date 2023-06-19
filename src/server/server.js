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

    db.query(`insert into post values (${no}, '${title}', '${postdate}', '${detail}', '${writer}')`, (err,data) => {
        if(!err){
            console.log("post 성공")
        }else{
            console.log(err)
        }
    });
})
//insert문 사용하여 값 삽입

app.put('/postlist', (req,res) => {
    console.log(req.body)
    const no = req.body.no
    const title = req.body.title
    const postdate = req.body.postdate
    const detail = req.body.detail
    const writer = req.body.writer

    db.query(`update post set title='${title}', postdate='${postdate}', detail='${detail}', writer='${writer}' where no = ${no}`, (err,data) => {
        if(!err){
            console.log("update 성공")
        }else{
            console.log(err)
        }
    })
})
// update문으로 값 변경

app.delete('/postlist', (req,res) => {
    console.log(req.body)
    const no = req.body.no

    db.query(`delete from post where no=${no}`, (data, err) => {
        if(!err){
            console.log("delete 성공")
        }else{
            console.log(err)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})