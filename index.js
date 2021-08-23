//node.js 서버 구동에 필요한 코드
const express = require('express'); //express 모듈 노드
const app = express(); //express 객체 생성
const path = require("path"); //path 모듀 로그 파일 디렉토리 경로 사용

app.use(express.json()); //json 파일 파싱
app.use(express.urlencoded({extended: true}));//url 쿼리스트링 파싱
app.use(express.static(path.join(__dirname, "src"))); //현재 폴더로 경로 구분

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/index.html"));
})

app.get("/question", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/component/question.html"));
})

app.get("/result/[1-5]", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/component/result.html"));
})

//result에서 1-5에서 오게되면 응답해줘라

//서버구동을 위한 포트 열기 
app.listen(3000, () =>{
    console.log("Server run on 3000")
})