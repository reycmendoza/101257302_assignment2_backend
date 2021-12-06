let mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    Id:{
       type: Number,
       required: [true, 'Employee ID is required']
    },
    firstname: {
       type: String,
       required: [true, 'First name is required'],
       trim: true,
       lowercase: true
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        lowercase: true
     },
   emailid: {
       type: String,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
})

const Employee = mongoose.model("employee", employeeSchema )
module.exports = Employee;