var Dheera_obgyn_post_feedback_Schema = require('../models/obgyn_training_post.js')
var multer = require('multer')
var express  = require('express')
const router = express.Router()
var pkg = require('csvtojson')
const {csv} = pkg

var upload = multer({ dest: 'uploads/' });

function matchQuestions(items) {
    console.log(items.length)
    let count = {
        q1 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q2 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q3 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q4 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q5 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q6 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q7 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q8 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        q9 : {
            sa:0,
            a:0,
            d:0,
            sd:0,
            no:0
        },
        
    }
    if(items.length>0){
         items.forEach(item => {

        switch (item.The_training_progra_mwas_well_organized) {
            case 'Strongly Agree':
                count.q1.sa += 1
                break;
            case 'Agree':
                count.q1.a += 1
                break;
            case 'Disagree':
                count.q1.d += 1
                break;
            case 'Strongly Disagree':
                count.q1.sd += 1
                break;
            case 'No opinion':
                    count.q1.no += 1
                    break;    
            default:
                count.q1.no += 1
        }

        switch (item.The_training_program_was_very_informative) {
            case 'Strongly Agree':
                count.q2.sa += 1
                break;
            case 'Agree':
                count.q2.a += 1
                break;
            case 'Disagree':
                count.q2.d += 1
                break;
            case 'Strongly Disagree':
                count.q2.sd += 1
                break;
            case 'No opinion':
                    count.q2.no += 1
                    break;    
            default:
                count.q2.no += 1
        }
        switch (item.The_training_program_met_my_expectations) {
            case 'Strongly Agree':
                count.q3.sa += 1
                break;
            case 'Agree':
                count.q3.a += 1
                break;
            case 'Disagree':
                count.q3.d += 1
                break;
            case 'Strongly Disagree':
                count.q3.sd += 1
                break;
            case 'No opinion':
                    count.q3.no += 1
                    break;    
            default:
                count.q3.no += 1
        }
        switch (item.I_learned_something_new_at_the_training_program) {
            case 'Strongly Agree':
                count.q4.sa += 1
                break;
            case 'Agree':
                count.q4.a += 1
                break;
            case 'Disagree':
                count.q4.d += 1
                break;
            case 'Strongly Disagree':
                count.q4.sd += 1
                break;
            case 'No opinion':
                    count.q4.no += 1
                    break;    
            default:
                count.q4.no += 1
        }
        switch (item.I_feel_confident_to_identify_cases_of_VAW) {
            case 'Strongly Agree':
                count.q5.sa += 1
                break;
            case 'Agree':
                count.q5.a += 1
                break;
            case 'Disagree':
                count.q5.d += 1
                break;
            case 'Strongly Disagree':
                count.q5.sd += 1
                break;
            case 'No opinion':
                    count.q5.no += 1
                    break;    
            default:
                count.q5.no += 1
        }
        switch (item.I_feel_confident_that_I_will_be_able_to_help_or_guide_a_VAW_case) {
            case 'Strongly Agree':
                count.q6.sa += 1
                break;
            case 'Agree':
                count.q6.a += 1
                break;
            case 'Disagree':
                count.q6.d += 1
                break;
            case 'Strongly Disagree':
                count.q6.sd += 1
                break;
            case 'No opinion':
                    count.q6.no += 1
                    break;    
            default:
                count.q6.no += 1
        }
        switch (item.The_materials_distributed_were_good) {
            case 'Strongly Agree':
                count.q7.sa += 1
                break;
            case 'Agree':
                count.q7.a += 1
                break;
            case 'Disagree':
                count.q7.d += 1
                break;
            case 'Strongly Disagree':
                count.q7.sd += 1
                break;
            case 'No opinion':
                    count.q7.no += 1
                    break;    
            default:
                count.q7.no += 1
        }        
        switch (item.The_training_program_covered_the_main_issues_on_VAW) {
            case 'Strongly Agree':
                count.q8.sa += 1
                break;
            case 'Agree':
                count.q8.a += 1
                break;
            case 'Disagree':
                count.q8.d += 1
                break;
            case 'Strongly Disagree':
                count.q8.sd += 1
                break;
            case 'No opinion':
                    count.q8.no += 1
                    break;    
            default:
                count.q8.no += 1
        }        
        switch (item.The_Trainer_was_skilled_with_knowledge_of_subject) {
            case 'Strongly Agree':
                count.q9.sa += 1
                break;
            case 'Agree':
                count.q9.a += 1
                break;
            case 'Disagree':
                count.q9.d += 1
                break;
            case 'Strongly Disagree':
                count.q9.sd += 1
                break;
            case 'No opinion':
                    count.q9.no += 1
                    break;    
            default:
                count.q9.no += 1
        }        
              
            
       


    })
    }
   
    console.log(count)
    return count
}

router.get('/feedback', (req, res) => {
    Dheera_obgyn_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(items)
            let postFeedbackAll = items

            Dheera_obgyn_post_feedback_Schema.find({}, (err, items) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let count = matchQuestions(items)
                    res.json({
                    
                        post : count,
                        postCount : postFeedbackAll.length
                    });
                }
            });
        }
    });
});

router.get('/', (req, res) => {
    Dheera_obgyn_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            // matchQuestions(items)
            res.json({ items: items });
        }
    });
});

router.post('/', upload.single('dheera_obgyn_post_test_feedback'), (req, res, next) => {
    // console.log('req :', req.body)
    csv({
        flatKeys:true,
        noheader: false,
        header:['Timestamp','Username',
        '1. Under Domestic violence act to whom can you complain',
        "2. Do you think, in Pregnancy, a woman is vulnerable to Violence?",
        '3. According to WHO & UNICEF VAW should be universally screened',
        '4. The Domestic Violence act came into effect in',
        '5. Which of the following is not a  mental health effect due to VAW?',
        '6. Which is an approved therapeutic strategy for the management of survivors of VAW?',
        '7. Which of the following is NOT a Danger signal to immediately hospitalise a survivor of VAW ?',
        '8. Forced Sex within marriage doesn’t constitute sexual violence as marriage itself implies consent',
        '9. Informed written consent is advised but not mandatory before examining a sexual assault survivor',
        '10. A 29 years woman with 11-12 weeks pregnancy, was forced to do a sex determination and termination of pregnancy. Do you agree it is  VAW ?',
        '11. The national helpline number for women is',
        '12. As health care providers it is also our responsibility to act as mediators between both the survivor and abuser',
        '14. Enter the date you actually attended the Training',
        '15. Name',
        '16. Surname',
        '17. Contact No',
        '1. The training program was well organized',
        '2. The training program was very informative',
        '3. The training program met my expectations',
        '4. I learned something new at the training program',
        '5. I feel confident to identify cases of VAW',
        '6. I feel confident that I will be able to help or guide a VAW case',
        '7. The materials distributed were good',
        '8. The training program covered the main issues on VAW.',
        '9. The Trainer was skilled with knowledge of subject',
    
    ]  
            })
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        var army = [];
        for(var i = 0;i<jsonObj.length;i++){
            var obj={};
            obj.Timestamp=jsonObj[i]['Timestamp'];
            obj.Username=jsonObj[i]['Username'];
            
            
            obj.Under_Domestic_violence_act_to_whom_can_you_complain=jsonObj[i]['1. Under Domestic violence act to whom can you complain'];
            obj. Do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence=jsonObj[i]["2. Do you think, in Pregnancy, a woman is vulnerable to Violence?"];

            obj.according_to_WHO_and_UNICEF_VAW_should_be_universally_screened=jsonObj[i]['3. According to WHO & UNICEF VAW should be universally screened'];
            obj.the_Domestic_Violence_act_came_into_effect_in=jsonObj[i]['4. The Domestic Violence act came into effect in'];
            obj.which_of_the_following_is_not_a_mental_health_effect_due_to_VAW=jsonObj[i]['5. Which of the following is not a  mental health effect due to VAW?'];
            obj.which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW=jsonObj[i]['6. Which is an approved therapeutic strategy for the management of survivors of VAW?'];

            obj.which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW=jsonObj[i]['7. Which of the following is NOT a Danger signal to immediately hospitalise a survivor of VAW ?'];
            obj.forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent=jsonObj[i]['8. Forced Sex within marriage doesn’t constitute sexual violence as marriage itself implies consent'];
            obj.Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor=jsonObj[i]['9. Informed written consent is advised but not mandatory before examining a sexual assault survivor'];
            obj.a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW=jsonObj[i]['10. A 29 years woman with 11-12 weeks pregnancy, was forced to do a sex determination and termination of pregnancy. Do you agree it is  VAW ?'];

            obj.the_national_helpline_number_for_women_is=jsonObj[i]['11. The national helpline number for women is'];
            obj.as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser=jsonObj[i]['12. As health care providers it is also our responsibility to act as mediators between both the survivor and abuser'];

            obj.Enter_the_date_you_actually_attended_the_Training=jsonObj[i]['14. Enter the date you actually attended the Training'];
            obj.Name=jsonObj[i]['15. Name'];
            obj.Surname=jsonObj[i]['16. Surname'];
            
            obj.Contact_No=jsonObj[i]['17. Contact No'];
         




            obj.The_training_progra_mwas_well_organized=jsonObj[i]['1. The training program was well organized'];
            obj.The_training_program_was_very_informative=jsonObj[i]['2. The training program was very informative'];
            obj.The_training_program_met_my_expectations=jsonObj[i]['3. The training program met my expectations'];
            obj.I_learned_something_new_at_the_training_program=jsonObj[i]['4. I learned something new at the training program'];
            obj.I_feel_confident_to_identify_cases_of_DV_VAW=jsonObj[i]['5. I feel confident to identify cases of DV/VAW'];

            obj.I_feel_confident_that_I_will_be_able_to_help_or_guide_a_DV_VAW_case=jsonObj[i]['6. I feel confident that I will be able to help or guide a DV/VAW case'];
            obj.The_materials_distributed_were_good=jsonObj[i]['7. The materials distributed were good'];

            obj.The_training_program_covered_the_main_issues_on_DV_VAW=jsonObj[i]['8. The training program covered the main issues on DV/VAW.'];

            obj.The_Trainer_was_skilled_with_knowledge_of_subject=jsonObj[i]['9. The Trainer was skilled with knowledge of subject'];
            army.push(obj);
        }
        Dheera_obgyn_post_feedback_Schema.insertMany(army).then(function(){
            res.status(200).send({
                message: "Successfully Uploaded!"
            });
        }).catch(function(error){
            res.status(500).send({
                message: "failure",
                error,
                sendErr : "error from .catch of schema"
            });
        });
    }).catch((error) => {
        res.status(500).send({
            message: "failure",
            error,
            sendErr : "error from .catch of csv from file"
        });
    })
});



router.get('/get/count', async (req, res) =>{
    const userCount = await Dheera_obgyn_post_feedback_Schema.countDocuments({})

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