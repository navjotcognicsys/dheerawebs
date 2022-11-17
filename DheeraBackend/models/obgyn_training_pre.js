var mongoose = require("mongoose");   
var obgyn_training_pre = new mongoose.Schema({  
    firstName: String,
    lastName: String,
    email: {type:String,unique: true},
    registration_time:Date,
    approval_status:String,
    phone:String,
    state:String,
    city:String,
    gender:String,
    age:String,
    area_of_employment:String,
    type_of_Institution_where_you_are_currently_working:String,
    
    name_of_your_society:String,
    are_you_Master_Trainer_or_Trainee:String,
    i_have_registered_to_attend_the_training_on:String,

    under_Domestic_violence_act_to_whom_can_you_complain:String,
    do_you_think_in_Pregnancy_a_woman_is_vulnerable_to_Violence:String,
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

    I_hereby_give_explicit_consent_to_FOGSI_team_to_process_my_personal_data_and_or_information_for_the_purposes_of_improving_the_program_and_sharing_implementation_success:String



    
});  
   
const Obgyn_training_pre_Schema =mongoose.model('Obgyn_training_pre',obgyn_training_pre); 
module.exports = Obgyn_training_pre_Schema