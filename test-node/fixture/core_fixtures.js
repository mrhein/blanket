fs = require("fs");

exports.simple_test_file_js = fs.readFileSync(__dirname+"/simple_test_file.js","utf-8");

exports.simple_test_file_instrumented_js = fs.readFileSync(__dirname+"/simple_test_file_instrumented.js","utf-8");

exports.simple_test_file_instrumented_full_js = fs.readFileSync(__dirname+"/simple_test_file_instrumented_full.js","utf-8");

