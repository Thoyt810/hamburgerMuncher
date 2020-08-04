var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.all("hamburger", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("hamburger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("hamburger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;
