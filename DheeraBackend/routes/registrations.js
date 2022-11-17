var RegistrationSchema =  require("../models/registration.js");
var express  = require('express')
const router = express.Router()
var bcrypt = require('bcryptjs')


//get all users
router.get(`/`, async (req, res) =>{
    const userList = await RegistrationSchema.find().select('-password');

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
})


//get single user
router.get('/:id', async(req,res)=>{
    const user = await RegistrationSchema.findById(req.params.id).select('-password');

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
})


//register a user
router.post('/', async (req,res)=>{
    const Hash = await bcrypt.hash(req.body.password,10)
    let user = new RegistrationSchema({
        name: req.body.name,
        program: req.body.program,
        password: Hash ,
        email: req.body.email,
        approve:req.body.approve,
        created_at:req.body.created_at,
        updated_at:req.body.updated_at,
        email_verified_at:req.body.email_verified_at,
        permission_dheera_master:req.body.permission_dheera_master,
        permission_dheera_school_teacher:req.body.permission_dheera_school_teacher,
        permission_dheera_school_student:req.body.permission_dheera_school_student,
        permission_rac:req.body.permission_rac,
        permission_obygn:req.body.permission_obygn,
        permission_manage_user:req.body.permission_manage_user,
        permission_approve_user:req.body.permission_approve_user
        
       
    })
    user = await user.save();

    if(!user)
        {   
             return res.status(400).send('the user cannot be created!')
        }
    res.send(user);
})

//approve(update the user access) the user
router.put('/:id',async (req, res)=> {
    const order = await RegistrationSchema.findByIdAndUpdate(
        req.params.id,
        {
            approve: req.body.approve,
            updated_at:req.body.updated_at,
            email_verified_at:req.body.email_verified_at

        },
        { new: true}
    )

    if(!order)
    return res.status(400).send('the user cannot be approved!')

    res.send(order);
})
// user permissions
router.put('/permissions/:id',async (req, res)=> {
    const order = await RegistrationSchema.findByIdAndUpdate(
        req.params.id,
        {
            permission_dheera_master:req.body.permission_dheera_master,
            permission_dheera_school_teacher:req.body.permission_dheera_school_teacher,
            permission_dheera_school_student:req.body.permission_dheera_school_student,
            permission_rac:req.body.permission_rac,
            permission_obygn:req.body.permission_obygn,
            permission_manage_user:req.body.permission_manage_user,
            permission_approve_user:req.body.permission_approve_user

        },
        { new: true}
    )

    if(!order)
    return res.status(400).send('this user cannot have updatetd permissions!')

    res.send(order);
})

//delete user
router.delete('/:id', (req, res)=>{
    RegistrationSchema.findByIdAndRemove(req.params.id).then(user =>{
        if(user) {
            return res.status(200).json({success: true, message: 'the user is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "user not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

 //login user
router.post('/login', async (req,res) => {
    const user = await RegistrationSchema.findOne({email:req.body.email});
    
   if(!user){
    return res.status(400).send('User not found')
   } 

   if(user && bcrypt.compareSync(req.body.password,user.password )) {
    if(user.approve ===true ){
        
        return res.status(200).send(user);
   }else{
    return res.status(400).send('User not approved')
   }

   }
   else{
    return res.status(400).send('password is wrong')
   }
   

    
})


//user count
router.get('/get/count', async (req, res) =>{
    const userCount = await RegistrationSchema.estimatedDocumentCount({approve:true})

    if(!userCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        userCount: userCount
    });
})


module.exports = router;