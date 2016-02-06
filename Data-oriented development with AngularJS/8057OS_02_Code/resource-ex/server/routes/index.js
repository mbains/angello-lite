/*jslint node: true */
'use strict';
var _ = require('underscore');

var employees = [];

var Employee = function (id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
};

var BuildEmployees = function () {
  if (_.isEmpty(employees)) {
    employees.push(new Employee(1, "First employee", 56));
    employees.push(new Employee(2, "Second employee", 44));
    employees.push(new Employee(3, "Last employee", 32));
  }
};

exports.get = function (req, res) {
  BuildEmployees();
  res.json(employees);
};

exports.getById = function (req, res) {
  BuildEmployees();

  var id = parseInt(req.params.id);
  var emp = _.findWhere(employees, {id: id});
  if (emp !== null && emp !== undefined) {
    return res.json(emp);
  }

  res.send('failed to find employee');
};

exports.post = function (req, res) {
  BuildEmployees();

  var id = employees.length + 1;
  var name = req.body.name;
  var age = parseInt(req.body.age);
  var emp = new Employee(id, name, age);
  employees.push(emp);
  res.redirect("/api/employees");
};

exports.put = function (req, res) {
  BuildEmployees();

  var id = parseInt(req.params.id);
  var emp = _.findWhere(employees, {id: id});
  if (emp !== null && emp !== undefined) {
    emp.name = req.body.name;
    emp.age = parseInt(req.body.age);
  }

  res.redirect("/api/employees");
};

exports.delete = function (req, res) {
  BuildEmployees();

  var id = parseInt(req.params.id);
  var emp = _.findWhere(employees, {id: id});
  if (emp !== null && emp !== undefined) {
    var index = _.indexOf(employees, emp);
    employees.splice(index, 1);
  }

  res.redirect("/api/employees");
};
