import { Taco } from "../models/taco.js";


function index(req, res) {
  Taco.find({})
  .then (tacos => {
    res.render('tacos/index', {
      tacos: tacos,
      title: "🎊 Tacos",
    })
    .catch(err => {
      console.log(err)
      res.redirect('/tacos')
  })
})
}

export {
  index
};