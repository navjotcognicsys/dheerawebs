var mongoose = require("mongoose");    
var dheera_obgyn_post = new mongoose.Schema({  
    Timestamp:Date,
    Username:{type:String,unique: true},

    Under_Domestic_violence_act_to_whom_can_you_complain:String,
    Do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence:String,
    according_to_WHO_and_UNICEF_VAW_should_be_universally_screened:String,
    the_Domestic_Violence_act_came_into_effect_in:String,
    which_of_the_following_is_not_a_mental_health_effect_due_to_VAW:String,
    which_is_an_approved_therapeutic_strategy_for_the_management_of_survivors_of_VAW:String,
    which_of_the_following_is_NOT_a_Danger_signal_to_immediately_hospitalise_a_survivor_of_VAW:String,
    forced_Sex_within_marriage_doesnt_constitute_sexual_violence_as_marriage_itself_implies_consent:String,
    Informed_written_consent_is_advised_but_not_mandatory_before_examining_a_sexual_assault_survivor:String,
    a_29_years_woman_with_11_12_weeks_pregnancy_was_forced_to_do_a_sex_determination_and_termination_of_pregnancy_Do_you_agree_it_is_VAW:String,
    the_national_helpline_number_for_women_is:String,
    as_health_care_providers_it_is_also_our_responsibility_to_act_as_mediators_between_both_the_survivor_and_abuser:String,


    Enter_the_date_you_actually_attended_the_Training:String,
    Name:String,
    Surname:String,
    Contact_No:String,
 
    // agree/not agree
    The_training_progra_mwas_well_organized:String,
    The_training_program_was_very_informative:String,
    The_training_program_met_my_expectations:String,
    I_learned_something_new_at_the_training_program:String,
    I_feel_confident_to_identify_cases_of_DV_VAW:String,
    I_feel_confident_that_I_will_be_able_to_help_or_guide_a_DV_VAW_case:String,
    The_materials_distributed_were_good:String,
    The_training_program_covered_the_main_issues_on_DV_VAW:String,
    The_Trainer_was_skilled_with_knowledge_of_subject:String



    
});  
   
const Dheera_obgyn_post_feedback_Schema =mongoose.model('Obgyn_training_post',dheera_obgyn_post); 
module.exports = Dheera_obgyn_post_feedback_Schema
