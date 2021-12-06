const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

// Home
app.get('/', (req,res) => {
    res.send("<h1>MongoDB mongoos Example</h1>")
});

//API
app.get('/api', (req,res) => {
    res.send("<h1>MongoDB API</h1>")
});

//V1
app.get('/api/v1', (req,res) => {
    res.send("<h1>MongoDB V1<h1>")
});

//Get All Employees
app.get('/api/v1/employees', async (req,res) => {
    const employees = await employeeModel.find({});

    try{
        res.send(employees);
        res.status(200).send('All Employees are fetched')
    }catch (err){
        res.status(500).send(err)
    }
});

//Add Employee
app.post('/api/v1/employees', async(req,res) => {

    let employee = new employeeModel(req.body);
  
    try {
      await employee.save();
      res.send(employee);
    
    } catch (err) {
      res.status(500).send(err);
    }
});

//Fetch One Employee
app.get('/api/v1/employees/:id', async(req,res) => {
    res.send(req.params.id)
});

//Update Employee
app.put('/api/v1/employees/:id', async(req,res) => {
    try{
        await employeeModel.findByIdAndUpdate(req.params.id, req.body)
        await employeeModel.save()
        res.send(employee)
        res.status(200).send('Employee is Fetched!')
    }catch (err) {
        res.status(500).send(err)

    }
});

//Delete Employee
app.delete('/api/v1/employees/:id', async(req,res) => {
    try{
        const employee = await employeeModel.findByIdAndDelete(req.params.id)

        if(!employee) res.status(204).send('Employee not found')
        res.status(200).send("Employee is Deleted")
    }catch(error){
        res.status(500).send(error)
    }
});

module.exports = app