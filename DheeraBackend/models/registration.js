var mongoose = require("mongoose");    
var registrationSchema = new mongoose.Schema({  
   
    name: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    approve:{
        type:Boolean,
        default:false
    },
    permission_dheera_master:{
        type:Boolean,
        default:false
    },
    permission_dheera_school_teacher:{
        type:Boolean,
        default:false
    },permission_dheera_school_student:{
        type:Boolean,
        default:false
    },permission_rac:{
        type:Boolean,
        default:false
    },permission_obygn:{
        type:Boolean,
        default:false
    },permission_approve_user:{
        type:Boolean,
        default:false
    },permission_manage_user:{
        type:Boolean,
        default:false
    },
    created_at:{
        type:Date,
        default: Date.now,
    },
    updated_at:{
        type:Date,
        default: Date.now,
    },
    email_verified_at:{
        type:Date,
        default: Date.now,
    },
    
});  


   
const RegistrationSchema = mongoose.model('Registration',registrationSchema); 
module.exports = RegistrationSchema
