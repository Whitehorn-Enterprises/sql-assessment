var app = require('./index')
var db = app.get('db')

module.exports = {
  getAllUsers: function (req,res) {
    db.get_all_users(function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('users.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  getAllVehicles: function (req,res) {
    db.get_all_vehicles(function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  createUser: function (req,res) {
    db.add_user([req.body.firstname, req.body.lastname, req.body.email], function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  createVehicle: function (req,res) {
    db.add_vehicle([req.body.make, req.body.model, req.body.year, req.body.ownerId], function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  getVehicleCountByUser: function (req,res) {
    db.vehicle_count_by_user([req.params.userId], function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  getVehiclesByUser: function (req,res) {
    db.vehicles_by_user([req.params.userId], function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  getVehiclesByVeriable: function (req,res) {
    if (req.query.userFirstStart) {
      db.vehicles_by_string([req.query.userFirstStart], function(err, response) {
        if (err) {
          res.status(500).send(err)
        }
        else if (response.length < 1) {
          res.status(400).send('vehicles.')
        }
        else(
          res.status(200).send(response)
        )
      });
    }
    else {
      db.vehicles_by_email([req.query.email], function(err, response) {
        if (err) {
            res.status(500).send(err)
        }
        else if (response.length < 1) {
            res.status(400).send('vehicles.')
        }
        else(
          res.status(200).send(response)
        )
      });
    }
  },
  getVehiclesByYear: function (req,res) {
    db.vehicles_by_year(function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  updateOwnerOfVehicle: function (req,res) {
    db.update_owner_of_vehicle([req.params.vehicleId, req.params.userId],function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  removeVehicleOwner: function (req,res) {
    db.remove_vehicle_owner([req.params.vehicleId], function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  },
  removeVehicle: function (req,res) {
    db.remove_vehicle([req.params.vehicleId], function(err, response) {
      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('vehicles.')
      }
      else(
        res.status(200).send(response)
      )
    });
  }
}
