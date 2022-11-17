var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
const CONNECTION_STRING = process.env.CONNECTION_STRING || "mongodb+srv://DheeraDatabse:1234@serverlessinstance0.zrvzc.mongodb.net/?retryWrites=true&w=majority";
var cors = require('cors');

//router import for dheera pre 
// var dheeraPre = require('./routes/dheeraPres.js'); // for testing purposes
var registration = require("./routes/registrations.js");
var dheera_school_student_pre = require('./routes/dheera_school_student_pres.js');
var dheera_master_training_pre = require('./routes/dheera_master_training_pres.js');
var dheera_school_teacher_pre = require('./routes/dheera_school_teacher_pres.js');
var dheera_obgyn_pre = require('./routes/dheera_obgyn_training_pres.js');
var rac_pre = require('./routes/rac_pres.js');

//router var for dheera post
var dheera_master_training_post = require('./routes/dheera_master_training_post_and_feedbacks.js');
var dheera_school_teacher_post = require('./routes/dheera_school_teacher_post_and_feedback.js');
var dheera_school_student_post = require('./routes/dheera_school_student_post_and_feedback.js');
var dheera_obgyn_post = require('./routes/dheera_obgyn_training_posts.js');
var rac_post = require('./routes/rac_posts.js');

var app = express();

app.use(cors());
app.options("*", cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//api for dheera pre
// app.use(`/api/v1/dheerapre`, dheeraPre );
app.use(`/api/v1/dheeraSchoolStudentPre`, dheera_school_student_pre );
app.use(`/api/v1/dheeraMasterTrainingPre`, dheera_master_training_pre );
app.use(`/api/v1/dheeraSchoolTeacherPre`, dheera_school_teacher_pre );
app.use(`/api/v1/racPre`, rac_pre );  
app.use(`/api/v1/dheeraObgynPre`, dheera_obgyn_pre );
app.use(`/api/v1/registration`, registration );


//api for dheera post
app.use(`/api/v1/dheeraMasterTrainingPost`, dheera_master_training_post );
app.use(`/api/v1/dheeraSchoolTeacherPost`, dheera_school_teacher_post );
app.use(`/api/v1/dheeraSchoolStudentPost`, dheera_school_student_post );
app.use(`/api/v1/dheeraObgynPost`, dheera_obgyn_post );
app.use(`/api/v1/racPost`, rac_post );


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Database
mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "dheera-database",
  })
  .then(() => {
    console.log("Database Connection is ready...");
    
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;