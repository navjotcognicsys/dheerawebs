var Rac_post_feedback_Schema  = require('../models/rac_post.js')
var multer  = require('multer')
var express   = require('express')
const router = express.Router()
var pkg  = require('csvtojson')
const {csv} = pkg

var upload = multer({ dest: 'uploads/' });

function matchQuestions(items) {
    console.log(items.length)
    let count = {
        q1 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q2 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q3 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q4 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q5 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q6 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q7 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q8 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q9 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q10 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q11 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q12 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q13 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q14 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        q15 : {
            sd:0,
            d:0,
            n:0,
            a:0,
            fa:0
        },
        
    }
   if(items.length>0){
    items.forEach(item => {

        switch (item.The_issue_of_abortion_is_of_importance_to_me) {
            case 'Strongly Disagree':
                count.q1.sd += 1
                break;
            case 'Disagree':
                count.q1.d += 1
                break;
            case 'Neutral':
                count.q1.n += 1
                break;
            case 'Agree':
                    count.q1.a += 1
                    break;
            case 'Fully Agree':
                        count.q1.fa += 1
                        break;              
            default:
                count.q1.n += 1
        }

        switch (item.I_feel_very_conflicted_about_abortion_services) {
            case 'Strongly Disagree':
                count.q2.sd += 1
                break;
            case 'Disagree':
                count.q2.d += 1
                break;
            case 'Neutral':
                count.q2.n += 1
                break;
            case 'Agree':
                    count.q2.a += 1
                    break;
            case 'Fully Agree':
                        count.q2.fa += 1
                        break;              
            default:
                count.q2.n += 1
        }
        switch (item.I_donâte_feel_comfortable_talking_about_abortion_and_family_planning_contraceptive_services_with_my_patientsclients) {
            case 'Strongly Disagree':
                count.q3.sd += 1
                break;
            case 'Disagree':
                count.q3.d += 1
                break;
            case 'Neutral':
                count.q3.n += 1
                break;
            case 'Agree':
                    count.q3.a += 1
                    break;
            case 'Fully Agree':
                        count.q3.fa += 1
                        break;              
            default:
                count.q3.n += 1
        }
        switch (item.I_understand_the_laws_and_regulations_for_the_provision_of_abortion_in_my_country_clearly) {
            case 'Strongly Disagree':
                count.q4.sd += 1
                break;
            case 'Disagree':
                count.q4.d += 1
                break;
            case 'Neutral':
                count.q4.n += 1
                break;
            case 'Agree':
                    count.q4.a += 1
                    break;
            case 'Fully Agree':
                        count.q4.fa += 1
                        break;              
            default:
                count.q4.n += 1
        }
        switch (item.I_am_clear_about_my_personal_values_concerning_abortion) {
            case 'Strongly Disagree':
                count.q5.sd += 1
                break;
            case 'Disagree':
                count.q5.d += 1
                break;
            case 'Neutral':
                count.q5.n += 1
                break;
            case 'Agree':
                    count.q5.a += 1
                    break;
            case 'Fully Agree':
                        count.q5.fa += 1
                        break;              
            default:
                count.q5.n += 1
        }
        switch (item.I_donâte_feel_comfortable_performing_and_or_assisting_an_abortion_procedure_as_per_law) {
            case 'Strongly Disagree':
                count.q6.sd += 1
                break;
            case 'Disagree':
                count.q6.d += 1
                break;
            case 'Neutral':
                count.q6.n += 1
                break;
            case 'Agree':
                    count.q6.a += 1
                    break;
            case 'Fully Agree':
                        count.q6.fa += 1
                        break;              
            default:
                count.q6.n += 1
        }
        switch (item.I_support_the_provision_of_family_planning_and_contraceptive_services) {
            case 'Strongly Disagree':
                count.q7.sd += 1
                break;
            case 'Disagree':
                count.q7.d += 1
                break;
            case 'Neutral':
                count.q7.n += 1
                break;
            case 'Agree':
                    count.q7.a += 1
                    break;
            case 'Fully Agree':
                        count.q7.fa += 1
                        break;              
            default:
                count.q7.n += 1
        }        
        switch (item.I_feel_comfortable_talking_with_my_closest_family_members_about_my_involvement_with_abortion) {
            case 'Strongly Disagree':
                count.q8.sd += 1
                break;
            case 'Disagree':
                count.q8.d += 1
                break;
            case 'Neutral':
                count.q8.n += 1
                break;
            case 'Agree':
                    count.q8.a += 1
                    break;
            case 'Fully Agree':
                        count.q8.fa += 1
                        break;              
            default:
                count.q8.n += 1
        }        
        switch (item.I_feel_I_can_discuss_stigmatized_issues_including_abortion_comfortably) {
            case 'Strongly Disagree':
                count.q9.sd += 1
                break;
            case 'Disagree':
                count.q9.d += 1
                break;
            case 'Neutral':
                count.q9.n += 1
                break;
            case 'Agree':
                    count.q9.a += 1
                    break;
            case 'Fully Agree':
                        count.q9.fa += 1
                        break;              
            default:
                count.q9.n += 1
        }    
        switch (item.I_believe_all_women_should_have_the_choice_to_have_decide_when_they_have_a_baby) {
            case 'Strongly Disagree':
                count.q10.sd += 1
                break;
            case 'Disagree':
                count.q10.d += 1
                break;
            case 'Neutral':
                count.q10.n += 1
                break;
            case 'Agree':
                    count.q10.a += 1
                    break;
            case 'Fully Agree':
                        count.q10.fa += 1
                        break;              
            default:
                count.q10.n += 1
        }  
        switch (item.I_can_respectfully_explain_about_abortion_even_if_it_conflicts_with_my_views) {
            case 'Strongly Disagree':
                count.q11.sd += 1
                break;
            case 'Disagree':
                count.q11.d += 1
                break;
            case 'Neutral':
                count.q11.n += 1
                break;
            case 'Agree':
                    count.q11.a += 1
                    break;
            case 'Fully Agree':
                        count.q11.fa += 1
                        break;              
            default:
                count.q11.n += 1
        }  
        switch (item.I_know_which_sources_to_turn_to_for_reliable_guidance_on_Sexual_Reproductive_Health_Rights_SRSH_specifically_abortion_and_contraception) {
            case 'Strongly Disagree':
                count.q12.sd += 1
                break;
            case 'Disagree':
                count.q12.d += 1
                break;
            case 'Neutral':
                count.q12.n += 1
                break;
            case 'Agree':
                    count.q12.a += 1
                    break;
            case 'Fully Agree':
                        count.q12.fa += 1
                        break;              
            default:
                count.q12.n += 1
        }      
        switch (item.I_am_well_informed_about_national_and_global_goals_and_policies_on_safe_abortion_and_family_planning) {
            case 'Strongly Disagree':
                count.q13.sd += 1
                break;
            case 'Disagree':
                count.q13.d += 1
                break;
            case 'Neutral':
                count.q13.n += 1
                break;
            case 'Agree':
                    count.q13.a += 1
                    break;
            case 'Fully Agree':
                        count.q13.fa += 1
                        break;              
            default:
                count.q13.n += 1
        }  
        switch (item.Safe_abortion_services_should_be_given_to_any_women_of_any_age_if_she_chooses_it) {
            case 'Strongly Disagree':
                count.q14.sd += 1
                break;
            case 'Disagree':
                count.q14.d += 1
                break;
            case 'Neutral':
                count.q14.n += 1
                break;
            case 'Agree':
                    count.q14.a += 1
                    break;
            case 'Fully Agree':
                        count.q14.fa += 1
                        break;              
            default:
                count.q14.n += 1
        }  
        switch (item.All_women_should_have_access_to_safe_comprehensive_abortion_care) {
            case 'Strongly Disagree':
                count.q15.sd += 1
                break;
            case 'Disagree':
                count.q15.d += 1
                break;
            case 'Neutral':
                count.q15.n += 1
                break;
            case 'Agree':
                    count.q15.a += 1
                    break;
            case 'Fully Agree':
                        count.q15.fa += 1
                        break;              
            default:
                count.q15.n += 1
        }  
       
              
            
       


    })

   }
    
    console.log(count)
    return count
}

router.get('/feedback', (req, res) => {
    Rac_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(items)
            let postFeedbackAll = items

            Rac_post_feedback_Schema.find({}, (err, items) => {
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
    Rac_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            // matchQuestions(items)
            res.json({ items: items });
        }
    });
});

router.post('/', upload.single('rac_registration_post'), (req, res, next) => {
    
    csv({
        
    flatKeys:true,  
    noheader: false,
	headers: ['Timestamp','Username',
    '1. According to the World Health Organization (WHO) legally restricting abortion reduces the number of abortions that occur. ',
    '2. In my country, abortion services are governed by the law, namely the Medical Termination of Pregnancy (MTP) Act. ',
    "3. In my country, the law was amended recently expanding access to abortion services on therapeutic, eugenic, humanitarian, or social grounds.",
    '4. In my country, only registered medical practitioners (RMP) are authorized to perform abortions.',
    '5. In my country, the law opinion of only one provider is required for MTP up to 20 weeks of gestation and requirement of opinion of two providers MTP of 20-24 weeks of gestation.',
    '6. In my country, in cases of birth defects, there is no upper gestation limit for abortion under the MTP Act.',
    '7. In my country, the law requires a married woman to obtain her husband’s written consent before she can undergo a termination of pregnancy. ',
    '8. In my country, the law requires an adolescent to obtain written consent from both parents/guardians before she can undergo a termination of pregnancy. ',
    '9. In my country, the law requires any woman seeking an abortion resulting from rape or incest to provide legal evidence of the sexual assault upto 24 weeks of gestation. ',
    '10. In my country, safe abortion is available for any woman married or unmarried including failure of contraception',
    '11. Where the law permits abortion to prevent injury to the woman’s physical or mental health, the definition of health in the WHO constitution can be used, “a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.” ',
    '12. Most of the women are likely to have at least one abortion by the time they are 45 years old. ',
    '13. Abortion is one of the safest medical procedures when performed by trained health-care providers with proper equipment, correct technique and sanitary standards. ',
    '14. Where effective contraceptive methods are available and widely used, the total abortion rate decreases. ',
    '15. If all contraceptive users become aware to use methods perfectly always, there would not be any unintended or unwanted pregnancies.',
    '16. Enter the date you actually attended the Training',
    '17. Name',
    '18. Surname',
    '19. Contact No',
    '1. The issue of abortion is of importance to me',
    '2. I feel very conflicted about abortion services',
    '3. I don’t feel comfortable talking about abortion and family planning/contraceptive services with my patients/clients',
    '4. I understand the laws and regulations for the provision of abortion in my country clearly',
    '5. I am clear about my personal values concerning abortion',
    '6. I don’t feel comfortable performing and/or assisting an abortion procedure as per law',
    '7. I support the provision of family planning and contraceptive services',
    '8. I feel comfortable talking with my closest family members about my involvement with abortion',
    '9. I feel I can discuss stigmatized issues, including abortion comfortably',
    '10. I believe all women should have the choice to have decide when they have a baby',
    '11. I can respectfully explain about abortion even if it conflicts with my views',
    '12. Most of the women are likely to have at least one abortion by the time they are 45 years old. ',
    '13. Abortion is one of the safest medical procedures when performed by trained health-care providers with proper equipment, correct technique and sanitary standards. ',
    '14. Where effective contraceptive methods are available and widely used, the total abortion rate decreases. ',
    '15. If all contraceptive users become aware to use methods perfectly always, there would not be any unintended or unwanted pregnancies.',
],     

            })
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        var army = [];
        for(var i = 0;i<jsonObj.length;i++){
            var obj={};
            obj.Timestamp=jsonObj[i]['Timestamp'];
            obj.Username=jsonObj[i]['Username'];
            
            
            obj.according_to_the_World_Health_Organization_WHO_legally_restricting_abortion_reduces_the_number_of_abortions_that_occur=jsonObj[i]['1. According to the World Health Organization (WHO) legally restricting abortion reduces the number of abortions that occur. '];
            obj. in_my_country_abortion_services_are_governed_by_the_law_namely_the_Medical_Termination_of_Pregnancy_MTP_Act=jsonObj[i]['2. In my country, abortion services are governed by the law, namely the Medical Termination of Pregnancy (MTP) Act. '];

            obj.in_my_country_the_law_was_amended_recently_expanding_access_to_abortion_services_on_therapeutic_eugenic_humanitarian_or_social_grounds=jsonObj[i]['3. In my country, the law was amended recently expanding access to abortion services on therapeutic, eugenic, humanitarian, or social grounds.'];
           obj.in_my_country_only_registered_medical_practitioners_RMP_are_authorized_to_perform_abortions=jsonObj[i]['4. In my country, only registered medical practitioners (RMP) are authorized to perform abortions.'];
            obj.in_my_country_the_law_opinion_of_only_one_provider_is_required_for_MTP_up_to_20_weeks_of_gestation_and_requirement_of_opinion_of_two_providers_MTP_of_20_24_weeks_of_gestation=jsonObj[i]['5. In my country, the law opinion of only one provider is required for MTP up to 20 weeks of gestation and requirement of opinion of two providers MTP of 20-24 weeks of gestation.'];
            obj.in_my_country_in_cases_of_birth_defects_there_is_no_upper_gestation_limit_for_abortion_under_the_MTP_Act=jsonObj[i]['6. In my country, in cases of birth defects, there is no upper gestation limit for abortion under the MTP Act.'];

            obj.in_my_country_the_law_requires_a_married_woman_to_obtain_her_husbands_written_consent_before_she_can_undergo_a_termination_of_pregnancy=jsonObj[i]['7. In my country, the law requires a married woman to obtain her husband’s written consent before she can undergo a termination of pregnancy. '];
            obj.in_my_country_the_law_requires_an_adolescent_to_obtain_written_consent_from_both_parents_guardians_before_she_can_undergo_a_termination_of_pregnancy=jsonObj[i]['8. In my country, the law requires an adolescent to obtain written consent from both parents/guardians before she can undergo a termination of pregnancy. '];
            obj.in_my_country_the_law_requires_any_woman_seeking_an_abortion_resulting_from_rape_or_incest_to_provide_legal_evidence_of_the_sexual_assault_upto_24_weeks_of_gestation=jsonObj[i]['9. In my country, the law requires any woman seeking an abortion resulting from rape or incest to provide legal evidence of the sexual assault upto 24 weeks of gestation. '];
            obj.in_my_country_safe_abortion_is_available_for_any_woman_married_or_unmarried_including_failure_of_contraception=jsonObj[i]['10. In my country, safe abortion is available for any woman married or unmarried including failure of contraception'];

            obj.where_the_law_permits_abortion_to_prevent_injury_to_the_woman_health_WHO_health_definition_in_the_constitution_can_be_used_a_state_of_complete_physical_mental_and_social_well_being_and_not_merely_the_absenceof_disease_or_infirmity=jsonObj[i]['11. Where the law permits abortion to prevent injury to the woman’s physical or mental health, the definition of health in the WHO constitution can be used, “a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.” '];
            obj.most_of_the_women_are_likely_to_have_at_least_one_abortion_by_the_time_they_are_45_years_old=jsonObj[i]['12. Most of the women are likely to have at least one abortion by the time they are 45 years old. '];
            obj.abortion_is_one_of_the_safest_medical_procedures_when_performed_by_trained_health_care_providers_with_proper_equipment_correct_technique_and_sanitary_standards=jsonObj[i]['13. Abortion is one of the safest medical procedures when performed by trained health-care providers with proper equipment, correct technique and sanitary standards. '];

            obj.where_effective_contraceptive_methods_are_available_and_widely_used_the_total_abortion_rate_decreases=jsonObj[i]['14. Where effective contraceptive methods are available and widely used, the total abortion rate decreases. '];
            obj.if_all_contraceptive_users_become_aware_to_use_methods_perfectly_always_there_would_not_be_any_unintended_or_unwanted_pregnancies=jsonObj[i]['15. If all contraceptive users become aware to use methods perfectly always, there would not be any unintended or unwanted pregnancies.'];

            obj.Enter_the_date_you_actually_attended_the_Training=jsonObj[i]['16. Enter the date you actually attended the Training'];

            obj.Name=jsonObj[i]['17. Name'];
            obj.Surname=jsonObj[i]['18. Surname'];
            
            obj.Contact_No=jsonObj[i]['19. Contact No'];
           



            obj.The_issue_of_abortion_is_of_importance_to_me=jsonObj[i]['1. The issue of abortion is of importance to me'];
            obj.I_feel_very_conflicted_about_abortion_services=jsonObj[i]['2. I feel very conflicted about abortion services'];
            obj.I_donâte_feel_comfortable_talking_about_abortion_and_family_planning_contraceptive_services_with_my_patientsclients=jsonObj[i]['3. I don’t feel comfortable talking about abortion and family planning/contraceptive services with my patients/clients'];
            obj.I_understand_the_laws_and_regulations_for_the_provision_of_abortion_in_my_country_clearly=jsonObj[i]['4. I understand the laws and regulations for the provision of abortion in my country clearly'];
            obj.I_am_clear_about_my_personal_values_concerning_abortion=jsonObj[i]['5. I am clear about my personal values concerning abortion'];

            obj.I_donâte_feel_comfortable_performing_and_or_assisting_an_abortion_procedure_as_per_law=jsonObj[i]['6. I don’t feel comfortable performing and/or assisting an abortion procedure as per law'];
            obj.I_support_the_provision_of_family_planning_and_contraceptive_services=jsonObj[i]['7. I support the provision of family planning and contraceptive services'];

            obj.I_feel_comfortable_talking_with_my_closest_family_members_about_my_involvement_with_abortion=jsonObj[i]['8. I feel comfortable talking with my closest family members about my involvement with abortion'];

            obj.I_feel_I_can_discuss_stigmatized_issues_including_abortion_comfortably=jsonObj[i]['9. I feel I can discuss stigmatized issues, including abortion comfortably'];
            obj.I_believe_all_women_should_have_the_choice_to_have_decide_when_they_have_a_baby=jsonObj[i]['10. I believe all women should have the choice to have decide when they have a baby'];
            obj.I_can_respectfully_explain_about_abortion_even_if_it_conflicts_with_my_views=jsonObj[i]['11. I can respectfully explain about abortion even if it conflicts with my views'];
            obj.I_know_which_sources_to_turn_to_for_reliable_guidance_on_Sexual_Reproductive_Health_Rights_SRSH_specifically_abortion_and_contraception=jsonObj[i]['12. I know which sources to turn to for reliable guidance on Sexual Reproductive Health Rights (SRSH), specifically abortion and contraception'];
            obj.I_am_well_informed_about_national_and_global_goals_and_policies_on_safe_abortion_and_family_planning=jsonObj[i]['13. I am well-informed about national and global goals and policies on safe abortion and family planning'];
            obj.Safe_abortion_services_should_be_given_to_any_women_of_any_age_if_she_chooses_it=jsonObj[i]['14. Safe abortion services should be given to any women of any age if she chooses it'];
            obj.All_women_should_have_access_to_safe_comprehensive_abortion_care=jsonObj[i]['15. All women should have access to safe, comprehensive abortion care'];


    






            army.push(obj);
        }
        Rac_post_feedback_Schema.insertMany(army).then(function(){
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
    const userCount = await Rac_post_feedback_Schema.countDocuments({})

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