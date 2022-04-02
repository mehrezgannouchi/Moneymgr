const express = require('express')

const app = express();
app.use(express.json())

const admin = require('./routes/api/admin-api')
const emp = require('./routes/api/emp-api')
const rh = require('./routes/api/rh-api')
const auth = require('./routes/api/auth-api')
const comptebanc = require('./routes/api/comptebanc-api')
app.use('/api/admin',admin)
app.use('/api/emp',emp)
app.use('/api/rh',rh)
app.use('/api/rh',auth)
app.use('/api/comptebanc',comptebanc)

const PORT = process.env.PORT || 3003;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))