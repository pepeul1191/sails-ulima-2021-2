/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index(req, res) {
    // data
    console.log('+++++++++++++++++++++++++++++++');
    var locals = {};
    // console.log(req.session);
    return res.view('login/index', locals);
  }, 
  reset(req, res) {
    // data
    console.log('reset +++++++++++++++++++++++++++++++');
    var locals = {};
    // console.log(req.session);
    return res.view('login/reset', locals);
  }, 
  create(req, res) {
    // data
    console.log('reset +++++++++++++++++++++++++++++++');
    var locals = {};
    // console.log(req.session);
    return res.view('login/create', locals);
  }, 
};

