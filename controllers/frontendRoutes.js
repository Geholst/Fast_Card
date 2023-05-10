const express = require('express')
const router = require("express").Router()
const app = express()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.render('main', {layout: 'index'})
})


router.get("/login", async (req,res) => {
      res.render("login", {layout: 'index'})
})


router.get("/signup", async (req,res) => {
  res.render("signup", {layout: 'index'})
})
  module.exports = router