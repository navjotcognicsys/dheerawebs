var mongoose = require("mongoose");   
var dheera_school_teacher_pre = new mongoose.Schema({  
    firstName: String,
    lastName: String,
    email: {type:String,unique: true},
    registration_time:Date,
    approval_status:String,
    phone:String,
    i_have_registered_to_attend_the_training_on:String,
    select_One:String,
    are_you_Master_Trainer_or_Trainee:String,
    select:String,
    total_number_of_years_in_service:String,
    are_you_willing_to_be_program_champion_master_trainer:String,
    age:String,
    class:String,
    state:String,
    city:String,
    name_of_school:String,
    school_type:String,
    What_would_you_do_if_you_were_subjected_to_violence:String,
    What_is_the_CHILDLINE_Helpline_number:String,
    Know_your_RIGHTS_Pick_out_the_ones_you_think_are_applicable_to_women_in_India:String,
    If_you_like_a_girl_you_see_in_public_is_it_appropriate_to_follow_her_and_repeatedly_try_to_strike_a_conversation_as_is_depicted_in_Bollywood:String,
    What_are_the_roles_of_an_Active_Bystander:String,
    What_are_the_various_modes_of_CyberCrime_List_Few:String,
    To_avoid_problems_women_should_dress_modestly_and_be_submissive_at_work:String,
    A_couple_have_2_children_a_boy_Raju_and_a_girl_Vidya_The_father_lost_his_job_and_decided_to_stop_Vidya_from_going_to_school_because_of_financial_difficulties_This_is_an_example_of:String,
    A_car_in_front_of_Rahul_was_driving_slowly_Rahul_joked_with_his_wife_it_must_be_a_lady_driver_Pick_up_the_right_statement:String,
    In_the_above_example_of_driving_Rahul_is_indulging_in:String,
    Varun_asked_Varsha_out_for_coffee_in_the_college_canteen_Varsha_refused_What_do_you_think_Varun_can_do_next:String,
    The_above_scenario_is_a_perfect_example_to_understand_what:String,
    A_husband_spends_months_completing_a_project_is_stressed_as_he_is_fired_over_a_phone_call_Not_compensated_His_wife_tries_to_find_out_who_he_is_talking_to_and_he_lashes_out_tossing_the_phone_and_hits_his_wife_Is_the_action_justified:String,
    I_hereby_give_explicit_consent_to_FOGSI_team_to_process_my_personal_data_and_or_information_for_the_purposes_of_improving_the_program_and_sharing_implementation_success:String



    
});  
   
const Dheera_school_teacher_pre_Schema =mongoose.model('Dheera_school_teacher_pre',dheera_school_teacher_pre); 
module.exports = Dheera_school_teacher_pre_Schema
