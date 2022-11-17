var Obgyn_training_pre_Schema = require('../models/obgyn_training_pre.js')
var Dheera_obgyn_post_feedback_Schema = require("../models/obgyn_training_post.js")
var multer = require('multer')
var express  = require('express')
const router = express.Router()
var pkg = require('csvtojson')
const {csv} = pkg

// var storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null, './uploads' );
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname);
//     }
// });


// var upload =  multer({storage:storage});

var upload = multer({ dest: 'uploads/' });




function matchQuestions(items, postItems) {

    let count = {
        q1 : 0,
        q2 : 0,
        q3 : 0,
        q4 : 0,
        q5 : 0,
        q6 : 0,
        q7 : 0,
        q8 : 0,
        q9 : 0,
        q10 : 0,
        q11 : 0,
        q12 : 0,
    }

    let countPost = {
        q1 : 0,
        q2 : 0,
        q3 : 0,
        q4 : 0,
        q5 : 0,
        q6 : 0,
        q7 : 0,
        q8 : 0,
        q9 : 0,
        q10 : 0,
        q11 : 0,
        q12 : 0,
    }


    let correctAns = {
        under_Domestic_violence_act_to_whom_can_you_complain : "All above",
        do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence: "Yes",
        according_to_WHO_and_UNICEF_VAW_should_be_universally_screened : "No",
        the_Domestic_Violence_act_came_into_effect_in : "2005",
        which_of_the_following_is_not_a_mental_health_effect_due_to_VAW : "Euphoria",
        which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW : "All the above",
        which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW : "Social withdrawal",
        forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent : "False",
        Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor : "Mandatory",
        a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW : "Agree",
        the_national_helpline_number_for_women_is : "181",
        as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser : "Yes"
    }



   if(items.length > 0){
    items.forEach(item => {
        // console.log(item.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence === correctAns.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence)
        // console.log('user ans ' , item.What_would_you_do_if_you_were_subjected_to_violence[0])
        if(item.under_Domestic_violence_act_to_whom_can_you_complain === correctAns.under_Domestic_violence_act_to_whom_can_you_complain){
            count.q1 += 1;
        }
        if(item.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence === correctAns.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence){
            count.q2 += 1;
        }
        if(item.according_to_WHO_and_UNICEF_VAW_should_be_universally_screened === correctAns.according_to_WHO_and_UNICEF_VAW_should_be_universally_screened){
            count.q3 += 1;
        }
        if(item.the_Domestic_Violence_act_came_into_effect_in === correctAns.the_Domestic_Violence_act_came_into_effect_in){
            count.q4 += 1;
        }
        if(item.which_of_the_following_is_not_a_mental_health_effect_due_to_VAW === correctAns.which_of_the_following_is_not_a_mental_health_effect_due_to_VAW){
            count.q5 += 1;
        }
        if(item.which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW === correctAns.which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW){
            count.q6 += 1;
        }
        if(item.which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW === correctAns.which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW){
            count.q7 += 1;
        }
        if(item.forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent === correctAns.forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent){
            count.q8 += 1;
        }
        if(item.Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor === correctAns.Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor){
            count.q9 += 1;
        }
        if(item.a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW === correctAns.a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW){
             count.q10 += 1;
        }
        if(item.the_national_helpline_number_for_women_is === correctAns.the_national_helpline_number_for_women_is){
            count.q11 += 1;
        }
        if(item.as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser === correctAns.as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser){
            count.q12 += 1;
        }
    })
   }


    if(postItems.length > 0){
        postItems.forEach(item => {
            // console.log(item.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence === correctAns.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence)
            // console.log('user ans ' , item.What_would_you_do_if_you_were_subjected_to_violence[0])
            if(item.under_Domestic_violence_act_to_whom_can_you_complain === correctAns.under_Domestic_violence_act_to_whom_can_you_complain){
                countPost.q1 += 1;
            }
            if(item.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence === correctAns.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence){
                countPost.q2 += 1;
            }
            if(item.according_to_WHO_and_UNICEF_VAW_should_be_universally_screened === correctAns.according_to_WHO_and_UNICEF_VAW_should_be_universally_screened){
                countPost.q3 += 1;
            }
            if(item.the_Domestic_Violence_act_came_into_effect_in === correctAns.the_Domestic_Violence_act_came_into_effect_in){
                countPost.q4 += 1;
            }
            if(item.which_of_the_following_is_not_a_mental_health_effect_due_to_VAW === correctAns.which_of_the_following_is_not_a_mental_health_effect_due_to_VAW){
                countPost.q5 += 1;
            }
            if(item.which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW === correctAns.which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW){
                countPost.q6 += 1;
            }
            if(item.which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW === correctAns.which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW){
                countPost.q7 += 1;
            }
            if(item.forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent === correctAns.forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent){
                countPost.q8 += 1;
            }
            if(item.Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor === correctAns.Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor){
                countPost.q9 += 1;
            }
            if(item.a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW === correctAns.a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW){
                countPost.q10 += 1;
            }
            if(item.the_national_helpline_number_for_women_is === correctAns.the_national_helpline_number_for_women_is){
                countPost.q11 += 1;
            }
            if(item.as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser === correctAns.as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser){
                countPost.q12 += 1;
            }
        })
    }

    


    return [count, countPost]
}

router.get('/questions', (req, res) => {
    Dheera_obgyn_post_feedback_Schema.find({}, (err, items) => {
        if(err){
            console.log(err)
        }else{
            let postFeedbackAll = items

            Obgyn_training_pre_Schema.find({}, (err, items) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let dataArr = matchQuestions(items, postFeedbackAll)
                    res.json({
                        pre : dataArr[0],
                        preCount : items.length,
                        post : dataArr[1],
                        postCount : postFeedbackAll.length
                    });
                }
            });

        }
    })
    
});


router.get('/', (req, res) => {
    Obgyn_training_pre_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ items: items });
        }
    });
});

router.get('/dateFilter/:startDate/:endDate', (req, res) => {
    
    Obgyn_training_pre_Schema.find({"registration_time":{"$gte": (req.params.startDate), "$lt": (req.params.endDate)}}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ items: items.length });
            //matchQuestions(items)
        }
    });
});



router.get('/filter/:key/:key1/:key2/:key3/:key4/:key5', async (req, res) => {
    console.log(req.params.key1)
    Obgyn_training_pre_Schema.find({
        "$and" : [
            {"age" : {$regex:req.params.key}},
            {"are_you_Master_Trainer_or_Trainee" : {$regex:req.params.key1}},
            {"state" : {$regex:req.params.key2}},
            {"area_of_employment" : {$regex:req.params.key3}},
            {"gender" : {$regex:req.params.key4}},
            {"type_of_Institution_where_you_are_currently_working" : {$regex:req.params.key5}},
        ]
    }, async (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            let [countArr, filteredData] = await findUsersInPostFeedback(items)

            res.json({
                pre : countArr[0],
                preData : items,
                post : countArr[1],
                postData : filteredData
            });
        }
    });
})


async function findUsersInPostFeedback(preItems) {
    var filteredUsers = []
    for (const item of preItems) {
        // console.log(item.email)
        try {
            let found = await Dheera_obgyn_post_feedback_Schema.findOne({"Username" : item.email })
            if(found){
                filteredUsers.push(found)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    let countArr = matchQuestions(preItems, filteredUsers)

    return [countArr, filteredUsers];
}

function compareKeys(uploadObj) {
    var obj={
    'First Name' : "",'Last Name' : "",'Email' : "",'Registration Time' : "",'Approval Status' : "",'Phone' : "",
    '1. State' : "",
    '2. City' : "",
    '3. Gender' : "",
    '4. Age (Year)' : "",
    '5. Area of employment (select)' : "",
    '6. Type of Institution (where you are currently working)' : "",
    '7. Name of your society' : "",
    '8. Are you Master Trainer or Trainee?' : "",
    '9. I have registered to attend the training on - (put your date in dd/mm/yy on the date you will attend) eg 24/02/22' : "",
    '10. Under Domestic violence act to whom can you complain' : "",
    '11. Do you think, in Pregnancy, a woman is vulnerable to Violence?' : "",
    '12. According to WHO & UNICEF VAW should be universally screened' : "",
    '13. The Domestic Violence act came into effect in' : "",
    '14. Which of the following is not a  mental health effect due to VAW?' : "",
    '15. Which is an approved therapeutic strategy for the management of survivors of VAW?' : "",
    '16. Which of the following is NOT a Danger signal to immediately hospitalise a survivor of VAW ?' : "",
    '17. Forced Sex within marriage doesn’t constitute sexual violence as marriage itself implies consent' : "",
    '18. Informed written consent is advised but not mandatory before examining a sexual assault survivor' : "",
    '19, A 29 years woman with 11-12 weeks pregnancy, was forced to do a sex determination and termination of pregnancy. Do you agree it is  VAW ?' : "",
    '20. The national helpline number for women is' : "",
    '21. As health care providers it is also our responsibility to act as mediators between both the survivor and abuser' : "",
    'I hereby give explicit consent to FOGSI team to process my personal data and/or information for the purposes of improving the program and sharing implementation success. Write to dheera [dot] vaw [at the rate]gmail [dot] com if you need more information.' : ""
 };

    var aKeys = Object.keys(obj).sort();
    var bKeys = Object.keys(uploadObj[0]).sort();


    // console.log("is it true",JSON.stringify(aKeys) === JSON.stringify(bKeys))

    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  }



router.post('/', upload.single('obgyn_registration_pre'), (req, res, next) => {
    // console.log('req :', req.body)
    csv({
        
    flatKeys:true ,
    noheader: false,
    headers:['First Name','Last Name','Email','Registration Time','Approval Status','Phone',
    '1. State',
    '2. City',
    '3. Gender',
    '4. Age (Year)',
    '5. Area of employment (select)',
    '6. Type of Institution (where you are currently working)',
    '7. Name of your society',
    '8. Are you Master Trainer or Trainee?',
    '9. I have registered to attend the training on - (put your date in dd/mm/yy on the date you will attend) eg 24/02/22',
    '10. Under Domestic violence act to whom can you complain',
    '11. Do you think, in Pregnancy, a woman is vulnerable to Violence?',
    '12. According to WHO & UNICEF VAW should be universally screened',
    '13. The Domestic Violence act came into effect in',
    '14. Which of the following is not a  mental health effect due to VAW?',
    '15. Which is an approved therapeutic strategy for the management of survivors of VAW?',
    '16. Which of the following is NOT a Danger signal to immediately hospitalise a survivor of VAW ?',
    '17. Forced Sex within marriage doesn’t constitute sexual violence as marriage itself implies consent',
    '18. Informed written consent is advised but not mandatory before examining a sexual assault survivor',
    '19, A 29 years woman with 11-12 weeks pregnancy, was forced to do a sex determination and termination of pregnancy. Do you agree it is  VAW ?',
    '20. The national helpline number for women is',
    '21. As health care providers it is also our responsibility to act as mediators between both the survivor and abuser',
    'I hereby give explicit consent to FOGSI team to process my personal data and/or information for the purposes of improving the program and sharing implementation success. Write to dheera [dot] vaw [at the rate]gmail [dot] com if you need more information.'

] 
    })
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        if(compareKeys(jsonObj)){
            var army = [];
        for(var i = 0;i<jsonObj.length;i++){
            var obj={};
            obj.firstName=jsonObj[i]['First Name'];
            obj.lastName=jsonObj[i]['Last Name'];
            obj.email=jsonObj[i]['Email'];
            obj.registration_time=jsonObj[i]['Registration Time'];
            obj.approval_status=jsonObj[i]['Approval Status'];
            obj.phone=jsonObj[i]['Phone'];
            obj.state=jsonObj[i]['1. State']
            obj.city=jsonObj[i]['2. City']
            obj.gender=jsonObj[i]['3. Gender']
            obj.age=jsonObj[i]['4. Age (Year)']
            obj.area_of_employment=jsonObj[i]['5. Area of employment (select)']
            obj.type_of_Institution_where_you_are_currently_working=jsonObj[i]['6. Type of Institution (where you are currently working)']
            obj.name_of_your_society=jsonObj[i]['7. Name of your society'];
            obj.are_you_Master_Trainer_or_Trainee=jsonObj[i]['8. Are you Master Trainer or Trainee?'];
            obj.i_have_registered_to_attend_the_training_on=jsonObj[i]['9. I have registered to attend the training on - (put your date in dd/mm/yy on the date you will attend) eg 24/02/22'];
            obj.under_Domestic_violence_act_to_whom_can_you_complain=jsonObj[i]['10. Under Domestic violence act to whom can you complain'];
            obj.do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence=jsonObj[i]['11. Do you think, in Pregnancy, a woman is vulnerable to Violence?'];
            obj.according_to_WHO_and_UNICEF_VAW_should_be_universally_screened=jsonObj[i]['12. According to WHO & UNICEF VAW should be universally screened'];
            obj.the_Domestic_Violence_act_came_into_effect_in=jsonObj[i]['13. The Domestic Violence act came into effect in'];
            obj.which_of_the_following_is_not_a_mental_health_effect_due_to_VAW=jsonObj[i]['14. Which of the following is not a  mental health effect due to VAW?'];
            obj.which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW=jsonObj[i]['15. Which is an approved therapeutic strategy for the management of survivors of VAW?'];
            obj.which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW=jsonObj[i]['16. Which of the following is NOT a Danger signal to immediately hospitalise a survivor of VAW ?'];
            obj.forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent=jsonObj[i]['17. Forced Sex within marriage doesn’t constitute sexual violence as marriage itself implies consent'];
            obj.Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor=jsonObj[i]['18. Informed written consent is advised but not mandatory before examining a sexual assault survivor'];
            obj.a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW=jsonObj[i]['19, A 29 years woman with 11-12 weeks pregnancy, was forced to do a sex determination and termination of pregnancy. Do you agree it is  VAW ?'];
            obj.the_national_helpline_number_for_women_is=jsonObj[i]['20. The national helpline number for women is'];
            obj.as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser=jsonObj[i]['21. As health care providers it is also our responsibility to act as mediators between both the survivor and abuser'];
            obj.I_hereby_give_explicit_consent_to_FOGSI_team_to_process_my_personal_data_and_or_information_for_the_purposes_of_improving_the_program_and_sharing_implementation_success=jsonObj[i]['I hereby give explicit consent to FOGSI team to process my personal data and/or information for the purposes of improving the program and sharing implementation success. Write to dheera [dot] vaw [at the rate]gmail [dot] com if you need more information.'];

        
            army.push(obj);
        }
        Obgyn_training_pre_Schema.insertMany(army).then(function(){
            res.status(200).send({
                message: "Successfully Uploaded!"
            });
        }).catch(function(error){
            if(error.code === 11000){
                res.status(500).send({
                    message : "Content of file is already there!",
                    error
                })
            }else{
                res.status(500).send({
                    message: "failure",
                    error,
                    sendErr : "error from .catch of schema"
                });
            }
        });
        }else{
            res.status(500).send({
                message: "Files did not match",
            });
        }


    }).catch((error) => {
        res.status(500).send({
            message: "failure",
            error,
            sendErr : "error from .catch of csv from file"
        });
    })
});

//registration count
router.get('/get/count', async (req, res) =>{
    const userCount = await Obgyn_training_pre_Schema.estimatedDocumentCount()

    if(userCount === 0){
        res.send({userCount: userCount})
    }else if(!userCount){
        res.status(500).json({success: false})
    }else{
        res.send({
            userCount: userCount
        });
    }
})


module.exports = router;
