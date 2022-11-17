var mongoose = require("mongoose");   
var dheera_master_training_post = new mongoose.Schema({  
    Timestamp:{type:Date,unique: true},
    Username:{type:String,unique: true},
    What_would_you_do_if_you_were_subjected_to_violence:String,
    Whats_the_CHILDLINE_number:String,
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
   

    Enter_the_date_you_actually_attended_the_Training:String,
    Name:String,
    Surname:String,
    Contact_No:String,
 
    // agree/not agree
    The_training_progra_mwas_well_organized:String,
    The_training_program_was_very_informative:String,
    The_training_program_met_my_expectations:String,
    I_learned_something_new_at_the_training_program:String,
    I_feel_confident_to_identify_cases_of_VAW:String,
    I_feel_confident_that_I_will_be_able_to_help_or_guide_a_VAW_case:String,
    The_materials_distributed_were_good:String,
    The_training_program_covered_the_main_issues_on_VAW:String,
    The_Trainer_was_skilled_with_knowledge_of_subject:String



    
});  
   
const Dheera_master_training_post_feedback_Schema =mongoose.model('Dheera_master_training_post_and_feedback',dheera_master_training_post); 
module.exports = Dheera_master_training_post_feedback_Schema
