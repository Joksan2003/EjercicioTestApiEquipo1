const axios = require ("axios")
var url = "https://apis-prodcutos.onrender.com/apiV1/categories"
axios.get(url)
.then (response => console.log(JSON.stringify(response.data,null,2)))