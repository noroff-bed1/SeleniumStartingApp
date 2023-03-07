var express = require('express');
var router = express.Router();
var db = require("../models");
var UserService = require("../services/UserService")
var userService = new UserService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var { canSeeUserList, canSeeUserDetails, checkIfAuthorized, isAdmin } = require("./authMiddlewares")
var createError = require('http-errors');

router.get('/:userId', canSeeUserDetails, async function(req, res, next) {
  const user = await userService.getOne(req.params.userId);
  if(user === null) {
    next(createError(404));
    return;
  }
  res.render('userDetails', {user: user});
});

router.get('/', canSeeUserList, async function(req, res, next) {
  const users = await userService.getAll();
  res.render('users', {users: users});
});

router.delete('/', checkIfAuthorized, isAdmin, jsonParser, async function(req, res, next) {
  let id = req.body.id;
  await userService.deleteUser(id);
  res.end()
});

module.exports = router;
