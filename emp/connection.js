const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://fidha_db_user:aysha7736@cluster0.d0dp6xe.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Connected!'))
    .catch((err)=> console.log(err))