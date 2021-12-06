//mongodb+srv://reyc:admin@comp3123.srh0d.mongodb.net/101257302_assignment2?retryWrites=true&w=majority

let express = require('express');
let mongoose = require("mongoose");
let employeeRouter = require("./routes/EmployeeRoutes");

let app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://reyc:admin@comp3123.srh0d.mongodb.net/101257302_assignment2?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(employeeRouter);

let server = app.listen(9090, () => {
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s"%s', host, port)
});

