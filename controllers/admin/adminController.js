const express = require('express');
const mongojs = require('mongojs');

const db = mongojs('fullapp', ["users"]);

const adminController = (req, res) => {
    res.render('admin/adminDashboard');
}

module.exports = adminController;