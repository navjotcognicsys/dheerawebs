var Dheera_master_training_pre_Schema = require('../models/dheera_master_training_pre.js')
var Dheera_master_training_post_feedback_Schema = require('../models/dheera_master_training_post_feedback.js')
var multer = require('multer')
var express  = require('express')
const router = express.Router()
var pkg = require('csvtojson')
const {csv} = pkg

var upload = multer({ dest: 'uploads/' });

var startTime, preTime, postTime, endTime;

function matchQuestions(items, postItems) {

    var noOfPeople = 0;
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

    let count2 = {
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
        What_would_you_do_if_you_were_subjected_to_violence : "b. Seek out your friends or family",
        What_is_the_CHILDLINE_Helpline_number: "c. 1098",
        Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India : "c. All of the above",
        If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood : "No",
        What_are_the_roles_of_an_Active_Bystander : "e. a. b. and d. above",
        To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work : "a. Disagree",
        A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of : "a. Gender bias",
        A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement : "c. Driving is a skill which is not dependent on gender .",
        In_the_above_example_of_driving_Rahul_is_indulging_in : "c. All of the above",
        Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next : "d. He must understand her right to not accept his invitation and respect her choice",
        The_above_scenario_is_a_perfect_example_to_understand_what : "a. Consent",
        A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified : "b. No"
    }

    let correctAns2 = {
        What_would_you_do_if_you_were_subjected_to_violence : "Seek out your friends or family",
        Whats_the_CHILDLINE_number: "1098",
        Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India : "All of the above",
        If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood : "No",
        What_are_the_roles_of_an_Active_Bystander : "e. a. b. and d. above",
        To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work : "Disagree",
        A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of : "Gender bias",
        A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement : "Driving is a skill which is not dependent on gender .",
        In_the_above_example_of_driving_Rahul_is_indulging_in : "All of the above",
        Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next : "He must understand her right to not accept his invitation and respect her choice",
        The_above_scenario_is_a_perfect_example_to_understand_what : "Consent",
        A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified : "No"
    }
    if(items.length > 0){
        items.forEach(item => {

        if('What_would_you_do_if_you_were_subjected_to_violence' in item){
            noOfPeople += 1;
        }

        if(item.What_would_you_do_if_you_were_subjected_to_violence === correctAns.What_would_you_do_if_you_were_subjected_to_violence){
            count.q1 += 1;
        }
        
        if(item.What_is_the_CHILDLINE_Helpline_number === correctAns.What_is_the_CHILDLINE_Helpline_number){
            count.q2 += 1;
        }
    
    
        if(item.Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India === correctAns.Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India){
            count.q3 += 1;
        }
    
    
        if(item.If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood === correctAns.If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood){
            count.q4 += 1;
        }
    
    
        if(item.What_are_the_roles_of_an_Active_Bystander === correctAns.What_are_the_roles_of_an_Active_Bystander){
            count.q5 += 1;
        }
    
    
        if(item.To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work === correctAns.To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work){
            count.q6 += 1;
        }
    
    
        if(item.A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of === correctAns.A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of){
            count.q7 += 1;
        }
    
    
        if(item.A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement === correctAns.A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement){
            count.q8 += 1;
        }
    
    
        if(item.In_the_above_example_of_driving_Rahul_is_indulging_in === correctAns.In_the_above_example_of_driving_Rahul_is_indulging_in){
            count.q9 += 1;
        }
    
    
        if(item.Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next === correctAns.Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next){
            count.q10 += 1;
        }
    
    
        if(item.The_above_scenario_is_a_perfect_example_to_understand_what === correctAns.The_above_scenario_is_a_perfect_example_to_understand_what){
            count.q11 += 1;
        }
    
    
        if(item.A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified === correctAns.A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified){
            count.q12 += 1;
        }
    })
    }
   

    if(postItems.length > 0){
        postItems.forEach(item => {
           
            if(item.What_would_you_do_if_you_were_subjected_to_violence === correctAns2.What_would_you_do_if_you_were_subjected_to_violence){
               count2.q1 += 1;
           }
           if(item.Whats_the_CHILDLINE_number === correctAns2.Whats_the_CHILDLINE_number){
               count2.q2 += 1;
           }
           if(item.Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India === correctAns2.Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India){
               count2.q3 += 1;
           }
           if(item.If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood === correctAns2.If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood){
               count2.q4 += 1;
           }
           if(item.What_are_the_roles_of_an_Active_Bystander === correctAns2.What_are_the_roles_of_an_Active_Bystander){
               count2.q5 += 1;
           }
           if(item.To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work === correctAns2.To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work){
               count2.q6 += 1;
           }
           if(item.A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of === correctAns2.A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of){
               count2.q7 += 1;
           }
           if(item.A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement === correctAns2.A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement){
               count2.q8 += 1;
           }
           if(item.In_the_above_example_of_driving_Rahul_is_indulging_in === correctAns2.In_the_above_example_of_driving_Rahul_is_indulging_in){
               count2.q9 += 1;
           }
           if(item.Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next === correctAns2.Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next){
                count2.q10 += 1;
           }
           if(item.The_above_scenario_is_a_perfect_example_to_understand_what === correctAns2.The_above_scenario_is_a_perfect_example_to_understand_what){
               count2.q11 += 1;
           }
           if(item.A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified === correctAns2.A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified){
               count2.q12 += 1;
           }
       })
    }

  

    return [count, count2]
}

router.get('/questions', (req, res) => {

    Dheera_master_training_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            
            let postFeedbackAll = items

            Dheera_master_training_pre_Schema.find({}, (err, preItems) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(preItems)
                    let countArr = matchQuestions(preItems, postFeedbackAll)
                    
                    res.json({
                        pre : countArr[0],
                        preCount : preItems.length,
                        post : countArr[1],
                        postCount : postFeedbackAll.length,
                    });
                }
            });
        }
    });


    
});


router.get('/', (req, res) => {
    
    Dheera_master_training_pre_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ 
                items: items
             });
        }
    });
});

router.get('/dateFilter/:startDate/:endDate', (req, res) => {
    
    Dheera_master_training_pre_Schema.find({"registration_time":{"$gte": (req.params.startDate), "$lt": (req.params.endDate)}}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ items: items.length });
            //matchQuestions(items)
        }
    });
});


router.get('/filter/:key/:key1', async (req, res) => {
    preTime = new Date();
    Dheera_master_training_pre_Schema.find({
        "$and" : [
            {"state" : {$regex:req.params.key}},
            {"are_you_Master_Trainer_or_Trainee" : {$regex:req.params.key1}},
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
    postTime = new Date();
    var filteredUsers = []
    for (const item of preItems) {
        try {
            let found = await Dheera_master_training_post_feedback_Schema.findOne({"Username" : item.email })
            if(found){
                filteredUsers.push(found)
            }
        } catch (error) {
            console.log(error)
        }
    }
    endTime = new Date();
    let timeDiffpr = endTime - preTime ;
    let timeDiffpp = endTime - postTime ;
    timeDiffpr /= 1000
    timeDiffpp /= 1000
    
    console.log('Time Diff pre:', timeDiffpr)
    console.log('Time Diff post:', timeDiffpp)

    let matchT = new Date();
    let countArr = matchQuestions(preItems, filteredUsers)
    endTime = new Date();
    let matcht = endTime - matchT;
    matcht /= 1000
    
    console.log('Time Diff Match:', matcht)

    return [countArr, filteredUsers];
}

function compareKeys(uploadObj) {
    var obj={
        'First Name' : "",
        'Last Name' : "",
        'Email' : "",
        'Registration Time' : "",
        'Approval Status' : "",
        'Phone' : "",
        '1. I have registered to attend the training on (put date dd/mm/yy on the date you will attend) eg 27/12/21' : "",
        '2. Select One': "",
        '3. Are you Master Trainer or Trainee?': "",
        '4. Select': "",
        '5. Total number of years in service': "",
        '6. Are you willing to be program champion master trainer?': "",
        '7. Age': "",
        '8. Class (To be filled by Students Only)': "",
        '9. State': "",
        '10. City': "",
        '11. Name of School (To be Filled by Only for Students and Teachers). Rest Write NA': "",
        '12. School Type': "",
        '13. What would you do if you were subjected to violence?': "",
        "14. What's the CHILDLINE Helpline number?": "",
        '15. Know your RIGHTS! Pick out the ones you think are applicable to women in India.': "",
        '16. If you like a girl you see in public is it appropriate to follow her and repeatedly try to strike a conversation as is depicted in Bollywood?' : "",
        '17. What are the roles of an Active Bystander?' : "",
        '18. What are the various modes of CyberCrime? List  Few.' : "",
        '19. To avoid problems women should dress modestly and be submissive at work' : "",
        '20. A couple have 2 children, a boy Raju and a girl Vidya. The father lost his job and decided to stop Vidya from going to school because of financial difficulties. This is an example of?' : "",
        '21. A car in front of Rahul was driving slowly. Rahul joked with his wife, it must be a lady driver! Pick up the right statement .' : "",
        '22. In the above example of driving, Rahul is indulging in?' : "",
        '23. Varun asked Varsha out for coffee in the college canteen. Varsha refused. What do you think Varun can do next?' : "",
        '24. The above scenario is a perfect example to understand what?' : "",
        '25. A husband spends months completing a project, is stressed as he is fired over a phone call. Not compensated. His wife tries to find out who he is talking to and he lashes out tossing the phone and hits his wife. Is the action justified?' : "",
        'I hereby give explicit consent to FOGSI team to process my personal data and/or information for the purposes of improving the program and sharing implementation success. Write to dheera [dot] vaw [at the rate]gmail [dot] com if you need more information.' : ""
    
    };

    var aKeys = Object.keys(obj).sort();
    var bKeys = Object.keys(uploadObj[0]).sort();


    // console.log("is it true",JSON.stringify(aKeys) === JSON.stringify(bKeys))

    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  }



router.post('/', upload.single('dheera_master_training_registration_pre'), (req, res, next) => {
    // console.log('req :', req.body)
    csv({ flatKeys:true,
        noheader: false,
        headers: ['First Name','Last Name','Email','Registration Time','Approval Status','Phone',
        '1. I have registered to attend the training on (put date dd/mm/yy on the date you will attend) eg 27/12/21',
        '2. Select One',
        '3. Are you Master Trainer or Trainee?',
        '4. Select',
        '5. Total number of years in service',
        '6. Are you willing to be program champion master trainer?',
        '7. Age',
        '8. Class (To be filled by Students Only)',
        '9. State',
        '10. City',
        '11. Name of School (To be Filled by Only for Students and Teachers). Rest Write NA',
        '12. School Type',
        '13. What would you do if you were subjected to violence?',
        "14. What's the CHILDLINE Helpline number?",
        '15. Know your RIGHTS! Pick out the ones you think are applicable to women in India.',
        '16. If you like a girl you see in public is it appropriate to follow her and repeatedly try to strike a conversation as is depicted in Bollywood?',
        '17. What are the roles of an Active Bystander?',
        '18. What are the various modes of CyberCrime? List  Few.',
        '19. To avoid problems women should dress modestly and be submissive at work',
        '20. A couple have 2 children, a boy Raju and a girl Vidya. The father lost his job and decided to stop Vidya from going to school because of financial difficulties. This is an example of?',
        '21. A car in front of Rahul was driving slowly. Rahul joked with his wife, it must be a lady driver! Pick up the right statement .',
        '22. In the above example of driving, Rahul is indulging in?',
        '23. Varun asked Varsha out for coffee in the college canteen. Varsha refused. What do you think Varun can do next?',
        '24. The above scenario is a perfect example to understand what?',
        '25. A husband spends months completing a project, is stressed as he is fired over a phone call. Not compensated. His wife tries to find out who he is talking to and he lashes out tossing the phone and hits his wife. Is the action justified?',
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
                obj.i_have_registered_to_attend_the_training_on=jsonObj[i]['1. I have registered to attend the training on (put date dd/mm/yy on the date you will attend) eg 27/12/21'];
                obj.select_One=jsonObj[i]['2. Select One'];
                obj.are_you_Master_Trainer_or_Trainee=jsonObj[i]['3. Are you Master Trainer or Trainee?'];
                obj.select=jsonObj[i]['4. Select'];
                obj.total_number_of_years_in_service=jsonObj[i]['5. Total number of years in service'];
                obj.are_you_willing_to_be_program_champion_master_trainer=jsonObj[i]['6. Are you willing to be program champion master trainer?'];
                obj.age=jsonObj[i]['7. Age'];
                obj.class=jsonObj[i]['8. Class (To be filled by Students Only)'];
                obj.state=jsonObj[i]['9. State'];
                obj.city=jsonObj[i]['10. City'];
                obj.name_of_school=jsonObj[i]['11. Name of School (To be Filled by Only for Students and Teachers). Rest Write NA'];
                obj.school_type=jsonObj[i]['12. School Type'];
                obj.What_would_you_do_if_you_were_subjected_to_violence=jsonObj[i]['13. What would you do if you were subjected to violence?'];
                obj. What_is_the_CHILDLINE_Helpline_number=jsonObj[i]["14. What's the CHILDLINE Helpline number?"];
    
                obj.Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India=jsonObj[i]['15. Know your RIGHTS! Pick out the ones you think are applicable to women in India.'];
                obj.If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood=jsonObj[i]['16. If you like a girl you see in public is it appropriate to follow her and repeatedly try to strike a conversation as is depicted in Bollywood?'];
                obj.What_are_the_roles_of_an_Active_Bystander=jsonObj[i]['17. What are the roles of an Active Bystander?'];
                obj.What_are_the_various_modes_of_CyberCrime_List_Few=jsonObj[i]['18. What are the various modes of CyberCrime? List  Few.'];
    
                obj.To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work=jsonObj[i]['19. To avoid problems women should dress modestly and be submissive at work'];
                obj.A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of=jsonObj[i]['20. A couple have 2 children, a boy Raju and a girl Vidya. The father lost his job and decided to stop Vidya from going to school because of financial difficulties. This is an example of?'];
                obj.A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement=jsonObj[i]['21. A car in front of Rahul was driving slowly. Rahul joked with his wife, it must be a lady driver! Pick up the right statement .'];
                obj.In_the_above_example_of_driving_Rahul_is_indulging_in=jsonObj[i]['22. In the above example of driving, Rahul is indulging in?'];
    
                obj.Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next=jsonObj[i]['23. Varun asked Varsha out for coffee in the college canteen. Varsha refused. What do you think Varun can do next?'];
                obj.The_above_scenario_is_a_perfect_example_to_understand_what=jsonObj[i]['24. The above scenario is a perfect example to understand what?'];
                obj.A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified=jsonObj[i]['25. A husband spends months completing a project, is stressed as he is fired over a phone call. Not compensated. His wife tries to find out who he is talking to and he lashes out tossing the phone and hits his wife. Is the action justified?'];
                obj.I_hereby_give_explicit_consent_to_FOGSI_team_to_process_my_personal_data_and_or_information_for_the_purposes_of_improving_the_program_and_sharing_implementation_success=jsonObj[i]['I hereby give explicit consent to FOGSI team to process my personal data and/or information for the purposes of improving the program and sharing implementation success. Write to dheera [dot] vaw [at the rate]gmail [dot] com if you need more information.'];
    
                
                army.push(obj);
            }

            Dheera_master_training_pre_Schema.insertMany(army).then(function(){
                console.log(army)
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
    const userCount = await Dheera_master_training_pre_Schema.estimatedDocumentCount()

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