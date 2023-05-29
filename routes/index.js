var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, respond) =>{
  respond.render('homepage')
 });

router.get('/gch1102', (req, res) => {
  var class_name = 'gch1102';
  var module_name = 'cloud computing';
  var teach_name = 'longndt';
  res.render('gch1102', { lop_hoc : class_name, mon_hoc : module_name, giang_vien : teach_name});
})

router.get('/vietnam', (req, res) => {
  var vietname = {
    "name" : "Việt Name",
    "capital" : "Hà Nội",
    "population" : "90 billions people",
    "location" : "South East Asia",
    "introduction" : "A peaceful country",
    "image" : "https://ichef.bbci.co.uk/news/976/cpsprodpb/5E81/production/_128339142_bbcm_vietnam_country_profile_map_180123.png"
  };
  res.render("vietnam", {vietnam : vietnam});
})

router.get('employee' , (req, res) => {
  var employee = 
  [
    {
      "name" : "tuan",
      "age": 35,
      "gender" : "Male"
    },
    {
      "name" : "minh",
      "age" : 32,
      "gender" : "Male"
    },
    {
      "name" : "phuong",
      "age" : 30,
    }
  ]
})

module.exports = router;
