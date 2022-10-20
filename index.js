const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT|| 5000

// get all data
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/categories', (req, res) => {
    res.send(categories)
  })

  app.get('/category/:id',(req,res)=>{
    const id = req.params.id

    if (id=='08') {
      res.send(news)
    }else{
      const selectedCategory = news.filter(n=>n.category_id=== id)
      res.send(selectedCategory)
      
    }

    
  })

app.get('/news/:id', (req, res) => {
  const newsId = req.params.id
  const selectedNews = news.find(n=>n._id=== newsId)
    res.send(selectedNews)
  })

  app.listen(port,()=>{
    console.log('listening to port',port)
  })

