var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connString = "WhitehornConstruction://postgres:Deltmd01@localhost/assessbox";

// INITILIZE APP
// ============================================================
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

// MASSIVE CONNECTION
// ============================================================
var massiveServer = massive.connectSync({connectionString: connString});
app.set('db', massiveServer);
var db = app.get('db');

// CONTROLLERS
// ============================================================
var userAndVehicle = require('./userAndVehicle')

// USERS ENDPOINTS
// ============================================================
app.get('/api/users', userAndVehicle.getAllUsers);
app.get('/api/vehicles', userAndVehicle.getAllVehicles);
app.post('/api/users', userAndVehicle.createUser);
app.post('/api/vehicles', userAndVehicle.createVehicle);
app.get('/api/user/:userId/vehiclecount', userAndVehicle.getVehicleCountByUser);
app.get('/api/user/:userId/vehicle', userAndVehicle.getVehiclesByUser);
app.get('/api/vehicle', userAndVehicle.getVehiclesByVeriable);
app.get('/api/newervehiclesbyyear', userAndVehicle.getVehiclesByYear);
app.put('/api/vehicle/:vehicleId/user/:userId', userAndVehicle.updateOwnerOfVehicle);
app.delete('/api/user/:userId/vehicle/:vehicleId', userAndVehicle.removeVehicleOwner);
app.delete('/api/vehicle/:vehicleId', userAndVehicle.removeVehicle);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
