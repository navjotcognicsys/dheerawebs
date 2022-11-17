var Rac_pre_Schema = require('../models/rac_pre.js')
var Rac_post_feedback_Schema  = require("../models/rac_post.js")
var multer = require('multer')
var express  = require('express')
const router = express.Router()
var pkg = require('csvtojson')
const {csv} = pkg


var upload = multer({ dest: 'uploads/' });


function matchQuestions(items, postItems) {

    let count = {
        q1 : {
            t : 0,
            f : 0,
            d : 0
        },
        q2 : {
            t : 0,
            f : 0,
            d : 0
        },
        q3 : {
            t : 0,
            f : 0,
            d : 0
        },
        q4 : {
            t : 0,
            f : 0,
            d : 0
        },
        q5 : {
            t : 0,
            f : 0,
            d : 0
        },
        q6 : {
            t : 0,
            f : 0,
            d : 0
        },
        q7 : {
            t : 0,
            f : 0,
            d : 0
        },
        q8 : {
            t : 0,
            f : 0,
            d : 0
        },
        q9 : {
            t : 0,
            f : 0,
            d : 0
        },
        q10 : {
            t : 0,
            f : 0,
            d : 0
        },
        q11 : {
            t : 0,
            f : 0,
            d : 0
        },
        q12 : {
            t : 0,
            f : 0,
            d : 0
        },
        q13 : {
            t : 0,
            f : 0,
            d : 0
        },
        q14 : {
            t : 0,
            f : 0,
            d : 0
        }, 
        q15 : {
            t : 0,
            f : 0,
            d : 0
        },
    }

    let countPost = {
        q1 : {
            t : 0,
            f : 0,
            d : 0
        },
        q2 : {
            t : 0,
            f : 0,
            d : 0
        },
        q3 : {
            t : 0,
            f : 0,
            d : 0
        },
        q4 : {
            t : 0,
            f : 0,
            d : 0
        },
        q5 : {
            t : 0,
            f : 0,
            d : 0
        },
        q6 : {
            t : 0,
            f : 0,
            d : 0
        },
        q7 : {
            t : 0,
            f : 0,
            d : 0
        },
        q8 : {
            t : 0,
            f : 0,
            d : 0
        },
        q9 : {
            t : 0,
            f : 0,
            d : 0
        },
        q10 : {
            t : 0,
            f : 0,
            d : 0
        },
        q11 : {
            t : 0,
            f : 0,
            d : 0
        },
        q12 : {
            t : 0,
            f : 0,
            d : 0
        },
        q13 : {
            t : 0,
            f : 0,
            d : 0
        },
        q14 : {
            t : 0,
            f : 0,
            d : 0
        }, 
        q15 : {
            t : 0,
            f : 0,
            d : 0
        },
    }


    if(items.length>0){
        items.forEach(item => {

            switch (item.according_to_the_World_Health_Organization_WHO_legally_restricting_abortion_reduces_the_number_of_abortions_that_occur) {
                case 'True':
                    count.q1.t += 1
                    break;
                case 'False':
                    count.q1.f += 1
                    break;
                default:
                    count.q1.d += 1
            }
    
            switch (item.in_my_country_abortion_services_are_governed_by_the_law_namely_the_Medical_Termination_of_Pregnancy_MTP_Act) {
                case 'True':
                    count.q2.t += 1
                    break;
                case 'False':
                    count.q2.f += 1
                    break;
                default:
                    count.q2.d += 1
            }
            switch (item.in_my_country_the_law_was_amended_recently_expanding_access_to_abortion_services_on_therapeutic_eugenic_humanitarian_or_social_grounds) {
                case 'True':
                    count.q3.t += 1
                    break;
                case 'False':
                    count.q3.f += 1
                    break;
                default:
                    count.q3.d += 1
            }
            switch (item.in_my_country_only_registered_medical_practitioners_RMP_are_authorized_to_perform_abortions) {
                case 'True':
                    count.q4.t += 1
                    break;
                case 'False':
                    count.q4.f += 1
                    break;
                default:
                    count.q4.d += 1
            }
            switch (item.in_my_country_the_law_opinion_of_only_one_provider_is_required_for_MTP_up_to_20_weeks_of_gestation_and_requirement_of_opinion_of_two_providers_MTP_of_20_24_weeks_of_gestation) {
                case 'True':
                    count.q5.t += 1
                    break;
                case 'False':
                    count.q5.f += 1
                    break;
                default:
                    count.q5.d += 1
            }
            switch (item.in_my_country_in_cases_of_birth_defects_there_is_no_upper_gestation_limit_for_abortion_under_the_MTP_Act) {
                case 'True':
                    count.q6.t += 1
                    break;
                case 'False':
                    count.q6.f += 1
                    break;
                default:
                    count.q6.d += 1
            }
            switch (item.in_my_country_the_law_requires_a_married_woman_to_obtain_her_husbands_written_consent_before_she_can_undergo_a_termination_of_pregnancy) {
                case 'True':
                    count.q7.t += 1
                    break;
                case 'False':
                    count.q7.f += 1
                    break;
                default:
                    count.q7.d += 1
            }        
            switch (item.in_my_country_the_law_requires_an_adolescent_to_obtain_written_consent_from_both_parents_guardians_before_she_can_undergo_a_termination_of_pregnancy) {
                case 'True':
                    count.q8.t += 1
                    break;
                case 'False':
                    count.q8.f += 1
                    break;
                default:
                    count.q8.d += 1
            }        
            switch (item.in_my_country_the_law_requires_any_woman_seeking_an_abortion_resulting_from_rape_or_incest_to_provide_legal_evidence_of_the_sexual_assault_upto_24_weeks_of_gestation) {
                case 'True':
                    count.q9.t += 1
                    break;
                case 'False':
                    count.q9.f += 1
                    break;
                default:
                    count.q9.d += 1
            }        
            switch (item.in_my_country_safe_abortion_is_available_for_any_woman_married_or_unmarried_including_failure_of_contraception) {
                case 'True':
                    count.q10.t += 1
                    break;
                case 'False':
                    count.q10.f += 1
                    break;
                default:
                    count.q10.d += 1
            }        
            switch (item.where_the_law_permits_abortion_to_prevent_injury_to_the_woman_health_WHO_health_definition_in_the_constitution_can_be_used_a_state_of_complete_physical_mental_and_social_well_being_and_not_merely_the_absenceof_disease_or_infirmity) {
                case 'True':
                    count.q11.t += 1
                    break;
                case 'False':
                    count.q11.f += 1
                    break;
                default:
                    count.q11.d += 1
            }        
            switch (item.most_of_the_women_are_likely_to_have_at_least_one_abortion_by_the_time_they_are_45_years_old) {
                case 'True':
                    count.q12.t += 1
                    break;
                case 'False':
                    count.q12.f += 1
                    break;
                default:
                    count.q12.d += 1
            }        
            switch (item.abortion_is_one_of_the_safest_medical_procedures_when_performed_by_trained_health_care_providers_with_proper_equipment_correct_technique_and_sanitary_standards) {
                case 'True':
                    count.q13.t += 1
                    break;
                case 'False':
                    count.q13.f += 1
                    break;
                default:
                    count.q13.d += 1
            }        
            switch (item.where_effective_contraceptive_methods_are_available_and_widely_used_the_total_abortion_rate_decreases) {
                case 'True':
                    count.q14.t += 1
                    break;
                case 'False':
                    count.q14.f += 1
                    break;
                default:
                    count.q14.d += 1
            }        
            switch (item.if_all_contraceptive_users_become_aware_to_use_methods_perfectly_always_there_would_not_be_any_unintended_or_unwanted_pregnancies) {
                case 'True':
                    count.q15.t += 1
                    break;
                case 'False':
                    count.q15.f += 1
                    break;
                default:
                    count.q15.d += 1
            }
    
    
        })
    }

    
   if(postItems.length>0){
    postItems.forEach(item => {

        switch (item.according_to_the_World_Health_Organization_WHO_legally_restricting_abortion_reduces_the_number_of_abortions_that_occur) {
            case 'True':
                countPost.q1.t += 1
                break;
            case 'False':
                countPost.q1.f += 1
                break;
            default:
                countPost.q1.d += 1
        }

        switch (item.in_my_country_abortion_services_are_governed_by_the_law_namely_the_Medical_Termination_of_Pregnancy_MTP_Act) {
            case 'True':
                countPost.q2.t += 1
                break;
            case 'False':
                countPost.q2.f += 1
                break;
            default:
                countPost.q2.d += 1
        }
        switch (item.in_my_country_the_law_was_amended_recently_expanding_access_to_abortion_services_on_therapeutic_eugenic_humanitarian_or_social_grounds) {
            case 'True':
                countPost.q3.t += 1
                break;
            case 'False':
                countPost.q3.f += 1
                break;
            default:
                countPost.q3.d += 1
        }
        switch (item.in_my_country_only_registered_medical_practitioners_RMP_are_authorized_to_perform_abortions) {
            case 'True':
                countPost.q4.t += 1
                break;
            case 'False':
                countPost.q4.f += 1
                break;
            default:
                countPost.q4.d += 1
        }
        switch (item.in_my_country_the_law_opinion_of_only_one_provider_is_required_for_MTP_up_to_20_weeks_of_gestation_and_requirement_of_opinion_of_two_providers_MTP_of_20_24_weeks_of_gestation) {
            case 'True':
                countPost.q5.t += 1
                break;
            case 'False':
                countPost.q5.f += 1
                break;
            default:
                countPost.q5.d += 1
        }
        switch (item.in_my_country_in_cases_of_birth_defects_there_is_no_upper_gestation_limit_for_abortion_under_the_MTP_Act) {
            case 'True':
                countPost.q6.t += 1
                break;
            case 'False':
                countPost.q6.f += 1
                break;
            default:
                countPost.q6.d += 1
        }
        switch (item.in_my_country_the_law_requires_a_married_woman_to_obtain_her_husbands_written_consent_before_she_can_undergo_a_termination_of_pregnancy) {
            case 'True':
                countPost.q7.t += 1
                break;
            case 'False':
                countPost.q7.f += 1
                break;
            default:
                countPost.q7.d += 1
        }        
        switch (item.in_my_country_the_law_requires_an_adolescent_to_obtain_written_consent_from_both_parents_guardians_before_she_can_undergo_a_termination_of_pregnancy) {
            case 'True':
                countPost.q8.t += 1
                break;
            case 'False':
                countPost.q8.f += 1
                break;
            default:
                countPost.q8.d += 1
        }        
        switch (item.in_my_country_the_law_requires_any_woman_seeking_an_abortion_resulting_from_rape_or_incest_to_provide_legal_evidence_of_the_sexual_assault_upto_24_weeks_of_gestation) {
            case 'True':
                countPost.q9.t += 1
                break;
            case 'False':
                countPost.q9.f += 1
                break;
            default:
                countPost.q9.d += 1
        }        
        switch (item.in_my_country_safe_abortion_is_available_for_any_woman_married_or_unmarried_including_failure_of_contraception) {
            case 'True':
                countPost.q10.t += 1
                break;
            case 'False':
                countPost.q10.f += 1
                break;
            default:
                countPost.q10.d += 1
        }        
        switch (item.where_the_law_permits_abortion_to_prevent_injury_to_the_woman_health_WHO_health_definition_in_the_constitution_can_be_used_a_state_of_complete_physical_mental_and_social_well_being_and_not_merely_the_absenceof_disease_or_infirmity) {
            case 'True':
                countPost.q11.t += 1
                break;
            case 'False':
                countPost.q11.f += 1
                break;
            default:
                countPost.q11.d += 1
        }        
        switch (item.most_of_the_women_are_likely_to_have_at_least_one_abortion_by_the_time_they_are_45_years_old) {
            case 'True':
                countPost.q12.t += 1
                break;
            case 'False':
                countPost.q12.f += 1
                break;
            default:
                countPost.q12.d += 1
        }        
        switch (item.abortion_is_one_of_the_safest_medical_procedures_when_performed_by_trained_health_care_providers_with_proper_equipment_correct_technique_and_sanitary_standards) {
            case 'True':
                countPost.q13.t += 1
                break;
            case 'False':
                countPost.q13.f += 1
                break;
            default:
                countPost.q13.d += 1
        }        
        switch (item.where_effective_contraceptive_methods_are_available_and_widely_used_the_total_abortion_rate_decreases) {
            case 'True':
                countPost.q14.t += 1
                break;
            case 'False':
                countPost.q14.f += 1
                break;
            default:
                countPost.q14.d += 1
        }        
        switch (item.if_all_contraceptive_users_become_aware_to_use_methods_perfectly_always_there_would_not_be_any_unintended_or_unwanted_pregnancies) {
            case 'True':
                countPost.q15.t += 1
                break;
            case 'False':
                countPost.q15.f += 1
                break;
            default:
                countPost.q15.d += 1
        }


    })
   }


    return [count, countPost]
}

router.get('/questions', (req, res) => {
    Rac_post_feedback_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            // matchQuestions(items)
            let postFeedbackAll = items

            Rac_pre_Schema.find({}, (err, items) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let countArr = matchQuestions(items, postFeedbackAll)
                    res.json({
                        pre : countArr[0],
                        preCount : items.length,
                        post : countArr[1],
                        postCount : postFeedbackAll.length
                    });
                }
            });
        }
    })

});


router.get('/', (req, res) => {
    Rac_pre_Schema.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ items: items });
            //matchQuestions(items)
        }
    });
});

router.get('/dateFilter/:startDate/:endDate', (req, res) => {
    
    Rac_pre_Schema.find({"registration_time":{"$gte": (req.params.startDate), "$lt": (req.params.endDate)}}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ items: items.length });
            //matchQuestions(items)
        }
    });
});


router.get('/filter/:key/:key1/:key2/:key3/:key4', async (req, res) => {
    console.log(req.params.key1)
    Rac_pre_Schema.find({
        "$and" : [
            {"age" : {$regex:req.params.key}},
            {"state" : {$regex:req.params.key1}},
            {"area_of_employment" : {$regex:req.params.key2}},
            {"gender" : {$regex:req.params.key3}},
            {"type_of_Institution_where_you_are_currently_working" : {$regex:req.params.key4}},
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
            let found = await Rac_post_feedback_Schema.findOne({"Username" : item.email })
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
        '7. Are you aware of the recent MTP Amendment and the Rules that have changed?' : "",
        '8. Are you aware of any WHO guidelines on safe abortion?' : "",
        '9. Have you participated or conducted any awareness program for women on safe abortion?' : "",
        '10. Have you participated or conducted recent trainings or continued medical education on safe abortion?' : "",
        '11. According to the World Health Organization (WHO), legally restricting abortion reduces the number of abortions that occur.' : "",
        '12. In my country, abortion services are governed by the law, namely the Medical Termination of Pregnancy (MTP) Act.' : "",
        '13. In my country, the law was amended recently expanding access to abortion services on therapeutic, eugenic, humanitarian, or social grounds.' : "",
        '14. In my country, only registered medical practitioners (RMP) are authorized to perform abortions.' : "",
        '15. In my country, the law opinion of only one provider is required for MTP up to 20 weeks of gestation and requirement of opinion of two providers MTP of 20-24 weeks of gestation.' : "",
        '16. In my country, in cases of birth defects, there is no upper gestation limit for abortion under the MTP Act.' : "",
        '17. In my country, the law requires a married woman to obtain her husband’s written consent before she can undergo a termination of pregnancy.' : "",
        '18. In my country, the law requires an adolescent to obtain written consent from both parents/guardians before she can undergo a termination of pregnancy.' : "",
        '19. In my country, the law requires any woman seeking an abortion resulting from rape or incest to provide legal evidence of the sexual assault upto 24 weeks of gestation.' : "",
        '20. In my country, safe abortion is available for any woman married or unmarried including failure of contraception.' : "",
        '21. Where the law permits abortion to prevent injury to the woman health, WHO health definition in the constitution can be used, “a state of complete physical, mental and social well-being and not merely the absenceof disease or infirmity' : "",
        '22. Most of the women are likely to have at least one abortion by the time they are 45 years old.' : "",
        '23. Abortion is one of the safest medical procedures when performed by trained health-care providers with proper equipment, correct technique and sanitary standards.' : "",
        '24. Where effective contraceptive methods are available and widely used, the total abortion rate decreases.' : "",
        '25. If all contraceptive users become aware to use methods perfectly always, there would not be any unintended or unwanted pregnancies.' : "",
        '26. Please briefly describe your greatest issue/conflict about abortion, if any in 50 words or less. (This is a conflict between two or more different values concerning abortion.)' : "",
        '27. I will be attending the training on (put your date in dd/mm/yyyy) eg 27/12/2021' : "",
        'I hereby give explicit consent to FOGSI team to process my personal data and/or information for the purposes of improving the program and sharing implementation success. Write to dheera [dot] vaw [at the rate]gmail [dot] com if you need more information.' : ""
    };

    var aKeys = Object.keys(obj).sort();
    var bKeys = Object.keys(uploadObj[0]).sort();


    // console.log("is it true",JSON.stringify(aKeys) === JSON.stringify(bKeys))

    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  }



router.post('/', upload.single('rac_registration_pre'), (req, res, next) => {
    // console.log('req :', req.body)
    csv({ flatKeys:true,
        noheader: false,
        headers: ['First Name','Last Name','Email','Registration Time','Approval Status','Phone',
        '1. State',
        '2. City',
        '3. Gender',
        '4. Age (Year)',
        '5. Area of employment (select)',
        '6. Type of Institution (where you are currently working)',
        '7. Are you aware of the recent MTP Amendment and the Rules that have changed?',
        '8. Are you aware of any WHO guidelines on safe abortion?',
        '9. Have you participated or conducted any awareness program for women on safe abortion?',
        '10. Have you participated or conducted recent trainings or continued medical education on safe abortion?',
        '11. According to the World Health Organization (WHO), legally restricting abortion reduces the number of abortions that occur.',
        '12. In my country, abortion services are governed by the law, namely the Medical Termination of Pregnancy (MTP) Act.',
        '13. In my country, the law was amended recently expanding access to abortion services on therapeutic, eugenic, humanitarian, or social grounds.',
        '14. In my country, only registered medical practitioners (RMP) are authorized to perform abortions.',
        '15. In my country, the law opinion of only one provider is required for MTP up to 20 weeks of gestation and requirement of opinion of two providers MTP of 20-24 weeks of gestation.',
        '16. In my country, in cases of birth defects, there is no upper gestation limit for abortion under the MTP Act.',
        '17. In my country, the law requires a married woman to obtain her husband’s written consent before she can undergo a termination of pregnancy.',
        '18. In my country, the law requires an adolescent to obtain written consent from both parents/guardians before she can undergo a termination of pregnancy.',
        '19. In my country, the law requires any woman seeking an abortion resulting from rape or incest to provide legal evidence of the sexual assault upto 24 weeks of gestation.',
        '20. In my country, safe abortion is available for any woman married or unmarried including failure of contraception.',
        '21. Where the law permits abortion to prevent injury to the woman health, WHO health definition in the constitution can be used, “a state of complete physical, mental and social well-being and not merely the absenceof disease or infirmity',
        '22. Most of the women are likely to have at least one abortion by the time they are 45 years old.',
        '23. Abortion is one of the safest medical procedures when performed by trained health-care providers with proper equipment, correct technique and sanitary standards.',
        '24. Where effective contraceptive methods are available and widely used, the total abortion rate decreases.',
        '25. If all contraceptive users become aware to use methods perfectly always, there would not be any unintended or unwanted pregnancies.',
        '26. Please briefly describe your greatest issue/conflict about abortion, if any in 50 words or less. (This is a conflict between two or more different values concerning abortion.)',
        '27. I will be attending the training on (put your date in dd/mm/yyyy) eg 27/12/2021',
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

                obj.are_you_aware_of_the_recent_MTP_Amendment_and_the_Rules_that_have_changed=jsonObj[i]['7. Are you aware of the recent MTP Amendment and the Rules that have changed?']
                obj.are_you_aware_of_any_WHO_guidelines_on_safe_abortion=jsonObj[i]['8. Are you aware of any WHO guidelines on safe abortion?']
                obj.have_you_participated_or_conducted_any_awareness_program_for_women_on_safe_abortion=jsonObj[i]['9. Have you participated or conducted any awareness program for women on safe abortion?']
                obj.have_you_participated_or_conducted_recent_trainings_or_continued_medical_education_on_safe_abortion=jsonObj[i]['10. Have you participated or conducted recent trainings or continued medical education on safe abortion?']
                obj.according_to_the_World_Health_Organization_WHO_legally_restricting_abortion_reduces_the_number_of_abortions_that_occur=jsonObj[i]['11. According to the World Health Organization (WHO), legally restricting abortion reduces the number of abortions that occur.']
                obj.in_my_country_abortion_services_are_governed_by_the_law_namely_the_Medical_Termination_of_Pregnancy_MTP_Act=jsonObj[i]['12. In my country, abortion services are governed by the law, namely the Medical Termination of Pregnancy (MTP) Act.']
                obj.in_my_country_the_law_was_amended_recently_expanding_access_to_abortion_services_on_therapeutic_eugenic_humanitarian_or_social_grounds=jsonObj[i]['13. In my country, the law was amended recently expanding access to abortion services on therapeutic, eugenic, humanitarian, or social grounds.']

                obj.in_my_country_only_registered_medical_practitioners_RMP_are_authorized_to_perform_abortions=jsonObj[i]['14. In my country, only registered medical practitioners (RMP) are authorized to perform abortions.']
                obj.in_my_country_the_law_opinion_of_only_one_provider_is_required_for_MTP_up_to_20_weeks_of_gestation_and_requirement_of_opinion_of_two_providers_MTP_of_20_24_weeks_of_gestation=jsonObj[i]['15. In my country, the law opinion of only one provider is required for MTP up to 20 weeks of gestation and requirement of opinion of two providers MTP of 20-24 weeks of gestation.']
                obj.in_my_country_in_cases_of_birth_defects_there_is_no_upper_gestation_limit_for_abortion_under_the_MTP_Act=jsonObj[i]['16. In my country, in cases of birth defects, there is no upper gestation limit for abortion under the MTP Act.']
                obj.in_my_country_the_law_requires_a_married_woman_to_obtain_her_husbands_written_consent_before_she_can_undergo_a_termination_of_pregnancy=jsonObj[i]['17. In my country, the law requires a married woman to obtain her husband’s written consent before she can undergo a termination of pregnancy.']
                obj.in_my_country_the_law_requires_an_adolescent_to_obtain_written_consent_from_both_parents_guardians_before_she_can_undergo_a_termination_of_pregnancy=jsonObj[i]['18. In my country, the law requires an adolescent to obtain written consent from both parents/guardians before she can undergo a termination of pregnancy.']
                obj.in_my_country_the_law_requires_any_woman_seeking_an_abortion_resulting_from_rape_or_incest_to_provide_legal_evidence_of_the_sexual_assault_upto_24_weeks_of_gestation=jsonObj[i]['19. In my country, the law requires any woman seeking an abortion resulting from rape or incest to provide legal evidence of the sexual assault upto 24 weeks of gestation.']
                obj.in_my_country_safe_abortion_is_available_for_any_woman_married_or_unmarried_including_failure_of_contraception=jsonObj[i]['20. In my country, safe abortion is available for any woman married or unmarried including failure of contraception.']
                obj.where_the_law_permits_abortion_to_prevent_injury_to_the_woman_health_WHO_health_definition_in_the_constitution_can_be_used_a_state_of_complete_physical_mental_and_social_well_being_and_not_merely_the_absenceof_disease_or_infirmity=jsonObj[i]['21. Where the law permits abortion to prevent injury to the woman health, WHO health definition in the constitution can be used, “a state of complete physical, mental and social well-being and not merely the absenceof disease or infirmity']

                obj.most_of_the_women_are_likely_to_have_at_least_one_abortion_by_the_time_they_are_45_years_old=jsonObj[i]['22. Most of the women are likely to have at least one abortion by the time they are 45 years old.']

                obj.abortion_is_one_of_the_safest_medical_procedures_when_performed_by_trained_health_care_providers_with_proper_equipment_correct_technique_and_sanitary_standards=jsonObj[i]['23. Abortion is one of the safest medical procedures when performed by trained health-care providers with proper equipment, correct technique and sanitary standards.']

                obj.where_effective_contraceptive_methods_are_available_and_widely_used_the_total_abortion_rate_decreases=jsonObj[i]['24. Where effective contraceptive methods are available and widely used, the total abortion rate decreases.']

                obj.if_all_contraceptive_users_become_aware_to_use_methods_perfectly_always_there_would_not_be_any_unintended_or_unwanted_pregnancies=jsonObj[i]['25. If all contraceptive users become aware to use methods perfectly always, there would not be any unintended or unwanted pregnancies.']


                obj.please_briefly_describe_your_greatest_issue_conflict_about_abortion_if_any_in_50_words_or_less_This_is_a_conflict_between_two_or_more_different_values_concerning_abortion=jsonObj[i]['26. Please briefly describe your greatest issue/conflict about abortion, if any in 50 words or less. (This is a conflict between two or more different values concerning abortion.)']

                obj.i_will_be_attending_the_training_on=jsonObj[i]['27. I will be attending the training on (put your date in dd/mm/yyyy) eg 27/12/2021']
                obj.I_hereby_give_explicit_consent_to_FOGSI_team_to_process_my_personal_data_and_or_information_for_the_purposes_of_improving_the_program_and_sharing_implementation_success=jsonObj[i]['I hereby give explicit consent to FOGSI team to process my personal data and/or information for the purposes of improving the program and sharing implementation success. Write to dheera [dot] vaw [at the rate]gmail [dot] com if you need more information.']



                
                army.push(obj);
            }

            Rac_pre_Schema.insertMany(army).then(function(){
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
    const userCount = await Rac_pre_Schema.countDocuments({})

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
