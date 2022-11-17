var Dheera_school_teacher_post_feedback_Schema = require('../models/dheera_school_teacher_post_feedback.js')
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
    Dheera_school_teacher_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(items)
            let postFeedbackAll = items

            Dheera_school_teacher_post_feedback_Schema.find({}, (err, items) => {
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
    Dheera_school_teacher_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            // matchQuestions(items)
            res.json({ items: items });
        }
    });
});

router.post('/', upload.single('dheera_school_teacher_post_test_feedback'), (req, res, next) => {
    // console.log('req :', req.body)
    csv({
    flatKeys:true,
    noheader: false,
    header:['Timestamp','Username',
    '1. What would you do if you were subjected to violence?',
    "2. What's the CHILDLINE number?",
    '3. Know your RIGHTS! Pick out the ones you think are applicable to women in India.',
    '4. If you like a girl you see in public is it appropriate to follow her and repeatedly try to strike a conversation as is depicted in Bollywood?',
    '5. What are the roles of an Active Bystander',
    '6. What are the various modes of CyberCrime ',
    '7. To avoid problems women should dress modestly and be submissive at work',
    '8. A couple have 2 children, a boy Raju and a girl Vidya. The father lost his job and decided to stop Vidya from going to school because of financial difficulties. This is an example of?',
    '9. A car in front of Rahul was driving slowly. Rahul joked with his wife, it must be a lady driver! Pick up the right statement .',
    '10. In the above example of driving, Rahul is indulging in',
    '11. Varun asked Varsha out for coffee in the college canteen. Varsha refused. What do you think Varun can do next?',
    '12. The above scenario is a perfect example to understand',
    '13. A husband under stress for months trying to complete a project just received news that he was fired and would not be compensated for his work over the phone. As his wife tries to find out who he is talking to he lashes out tossing the phone and hits his wife. Is the slap justified?',
    '14. Enter the date you attended the Training',
    '15. Name',
    '16. Surname',
    '17. School Name',
    '18. Contact No',
    '19. Are you teacher',
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
            
            
            obj.What_would_you_do_if_you_were_subjected_to_violence=jsonObj[i]['1. What would you do if you were subjected to violence?'];
            obj. Whats_the_CHILDLINE_number=jsonObj[i]["2. What's the CHILDLINE number?"];

            obj.Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India=jsonObj[i]['3. Know your RIGHTS! Pick out the ones you think are applicable to women in India.'];
            obj.If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood=jsonObj[i]['4. If you like a girl you see in public is it appropriate to follow her and repeatedly try to strike a conversation as is depicted in Bollywood?'];
            obj.What_are_the_roles_of_an_Active_Bystander=jsonObj[i]['5. What are the roles of an Active Bystander'];
            obj.What_are_the_various_modes_of_CyberCrime_List_Few=jsonObj[i]['6. What are the various modes of CyberCrime '];

            obj.To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work=jsonObj[i]['7. To avoid problems women should dress modestly and be submissive at work'];
            obj.A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of=jsonObj[i]['8. A couple have 2 children, a boy Raju and a girl Vidya. The father lost his job and decided to stop Vidya from going to school because of financial difficulties. This is an example of?'];
            obj.A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement=jsonObj[i]['9. A car in front of Rahul was driving slowly. Rahul joked with his wife, it must be a lady driver! Pick up the right statement .'];
            obj.In_the_above_example_of_driving_Rahul_is_indulging_in=jsonObj[i]['10. In the above example of driving, Rahul is indulging in'];

            obj.Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next=jsonObj[i]['11. Varun asked Varsha out for coffee in the college canteen. Varsha refused. What do you think Varun can do next?'];
            obj.The_above_scenario_is_a_perfect_example_to_understand_what=jsonObj[i]['12. The above scenario is a perfect example to understand'];
            obj.A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified=jsonObj[i]['13. A husband under stress for months trying to complete a project just received news that he was fired and would not be compensated for his work over the phone. As his wife tries to find out who he is talking to he lashes out tossing the phone and hits his wife. Is the slap justified?'];

            obj.Enter_the_date_you_actually_attended_the_Training=jsonObj[i]['14. Enter the date you attended the Training'];
            obj.Name=jsonObj[i]['15. Name'];
            obj.Surname=jsonObj[i]['16. Surname'];
            obj.School_name=jsonObj[i]['17. School Name'];
            obj.Contact_No=jsonObj[i]['18. Contact No'];
            obj.Are_you_teacher=jsonObj[i]['19. Are you teacher'];




            obj.The_training_progra_mwas_well_organized=jsonObj[i]['1. The training program was well organized'];
            obj.The_training_program_was_very_informative=jsonObj[i]['2. The training program was very informative'];
            obj.The_training_program_met_my_expectations=jsonObj[i]['3. The training program met my expectations'];
            obj.I_learned_something_new_at_the_training_program=jsonObj[i]['4. I learned something new at the training program'];
            obj.I_feel_confident_to_identify_cases_of_VAW=jsonObj[i]['5. I feel confident to identify cases of VAW'];

            obj.I_feel_confident_that_I_will_be_able_to_help_or_guide_a_VAW_case=jsonObj[i]['6. I feel confident that I will be able to help or guide a VAW case'];
            obj.The_materials_distributed_were_good=jsonObj[i]['7. The materials distributed were good'];

            obj.The_training_program_covered_the_main_issues_on_VAW=jsonObj[i]['8. The training program covered the main issues on VAW.'];

            obj.The_Trainer_was_skilled_with_knowledge_of_subject=jsonObj[i]['9. The Trainer was skilled with knowledge of subject'];

    






            army.push(obj);
        }
        Dheera_school_teacher_post_feedback_Schema.insertMany(army).then(function(){
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
    const userCount = await Dheera_school_teacher_post_feedback_Schema.countDocuments({})

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