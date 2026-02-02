import { ca } from "zod/v4/locales";
import { card_images } from "../constants/images";

export const cardsData = [
  {
    id: 1,
    title: "Diabetes",
    tag: "Chronic",
    image: card_images.diabetes,
    shortDescription: "A chronic disease causing high blood sugar levels.",
    overview:
      "Diabetes is a chronic community disease in which the level of sugar (glucose) in the blood becomes abnormally high. Glucose provides energy to the body, and insulin helps glucose enter the cells. When insulin is insufficient or ineffective, glucose accumulates in the blood, leading to diabetes.",
    history:
      "Diabetes occurs due to unhealthy lifestyle habits such as excessive consumption of sugary and fatty foods, lack of physical activity, obesity, stress, and genetic factors. Common symptoms include frequent urination, excessive thirst, increased hunger, tiredness, blurred vision, slow healing of wounds, and unexplained weight loss.",
    facts: [
      "Increases healthcare burden in the community",
      "May cause heart disease, kidney failure, nerve damage, and vision problems",
      "Can be prevented and controlled with healthy lifestyle and early diagnosis",
    ],
  },
  {
    id: 2,
    title: "Hypertension",
    tag: "Chronic",
    image: card_images.hypertension,
    shortDescription:
      "A condition in which blood pressure remains consistently high.",
    overview:
      "Hypertension, also known as high blood pressure, is a chronic condition in which the force of blood against the artery walls is persistently high. Over time, this increased pressure can damage blood vessels and vital organs such as the heart, brain, and kidneys.",
    history:
      "Hypertension is commonly caused by unhealthy lifestyle habits including high salt intake, lack of physical activity, obesity, stress, smoking, and excessive alcohol consumption. It often develops gradually and may not show noticeable symptoms in the early stages, which is why it is known as a silent disease.",
    facts: [
      "Often has no early symptoms and is called the silent killer",
      "Increases the risk of heart disease, stroke, and kidney failure",
      "Can be controlled through healthy diet, regular exercise, and medication",
    ],
  },
  {
    id: 3,
    title: "Tuberculosis",
    tag: "Bacterial",
    image: card_images.tuberculosis,
    shortDescription:
      "A contagious bacterial infection mainly affecting the lungs.",
    overview:
      "Tuberculosis is an infectious disease caused by the bacterium Mycobacterium tuberculosis. It primarily affects the lungs but can also spread to other parts of the body such as the brain, spine, and kidneys. The disease spreads through the air when an infected person coughs or sneezes.",
    history:
      "Tuberculosis is caused by prolonged exposure to infected individuals, poor ventilation, weak immune system, malnutrition, and overcrowded living conditions. Common symptoms include persistent cough, chest pain, fever, night sweats, fatigue, and weight loss.",
    facts: [
      "Spreads through airborne droplets from infected individuals",
      "Can be cured completely with proper and timely treatment",
      "Early diagnosis and full course of medication are essential to prevent spread",
    ],
  },
  {
    id: 4,
    title: "Malaria",
    tag: "Vector-Borne",
    image: card_images.malaria,
    shortDescription: "A mosquito-borne disease caused by parasites.",
    overview:
      "Malaria is a life-threatening disease caused by Plasmodium parasites and transmitted to humans through the bite of infected female Anopheles mosquitoes. It affects red blood cells and is common in tropical and subtropical regions.",
    history:
      "Malaria occurs due to mosquito bites, poor sanitation, stagnant water, and lack of preventive measures. Symptoms usually include high fever, chills, sweating, headache, nausea, vomiting, and fatigue. If untreated, it can lead to severe complications and death.",
    facts: [
      "Transmitted through the bite of infected mosquitoes",
      "Preventable by mosquito control and use of bed nets",
      "Treatable with antimalarial medicines if diagnosed early",
    ],
  },
  {
    id: 5,
    title: "Dengue Fever",
    tag: "Vector-Borne",
    image: card_images.dengue,
    shortDescription: "A viral disease transmitted by mosquitoes.",
    overview:
      "Dengue fever is a mosquito-borne viral infection caused by the dengue virus and transmitted by Aedes mosquitoes. It is common in tropical and subtropical regions and can affect people of all age groups.",
    history:
      "Dengue fever spreads through mosquito bites, especially in areas with stagnant water and poor sanitation. Symptoms include high fever, severe headache, pain behind the eyes, joint and muscle pain, skin rash, nausea, and vomiting. In severe cases, it may lead to dengue hemorrhagic fever.",
    facts: [
      "Transmitted by Aedes mosquitoes",
      "Severe cases can cause bleeding and low platelet count",
      "Prevention includes mosquito control and avoiding mosquito bites",
    ],
  },
  {
    id: 6,
    title: "Chikungunya",
    tag: "Vector-Borne",
    image: card_images.chikungunya,
    shortDescription: "A viral infection causing fever and joint pain.",
    overview:
      "Chikungunya is a viral disease transmitted to humans by infected Aedes mosquitoes. It is characterized by sudden onset of fever and severe joint pain, which can sometimes last for months.",
    history:
      "Chikungunya occurs due to mosquito bites and is more common in areas with poor mosquito control. Symptoms include high fever, joint swelling, muscle pain, headache, fatigue, and skin rash. Although rarely fatal, it can cause long-term joint problems.",
    facts: [
      "Spread by the same mosquitoes that transmit dengue",
      "Joint pain can persist for long periods",
      "Prevented by controlling mosquito breeding and bites",
    ],
  },
  {
    id: 7,
    title: "Typhoid",
    tag: "Bacterial",
    image: card_images.typhoid,
    shortDescription:
      "A bacterial infection spread through contaminated food and water.",
    overview:
      "Typhoid is a serious bacterial infection caused by Salmonella typhi. It spreads through consumption of contaminated food or water and is more common in areas with poor sanitation and hygiene.",
    history:
      "Typhoid fever occurs due to intake of contaminated food or water and poor personal hygiene. Symptoms include prolonged high fever, weakness, abdominal pain, headache, loss of appetite, and diarrhea or constipation. If untreated, it can lead to serious complications.",
    facts: [
      "Spreads through contaminated food and drinking water",
      "Can be prevented by safe drinking water and proper sanitation",
      "Treatable with antibiotics if diagnosed early",
    ],
  },
  {
    id: 8,
    title: "Asthma",
    tag: "Chronic",
    image: card_images.asthma,
    shortDescription: "A chronic respiratory condition affecting breathing.",
    overview:
      "Asthma is a chronic lung disease that causes inflammation and narrowing of the airways, making breathing difficult. It affects people of all ages and often begins in childhood.",
    history:
      "Asthma is triggered by allergens, air pollution, dust, smoke, respiratory infections, physical exertion, and stress. Common symptoms include wheezing, coughing, shortness of breath, and chest tightness. Symptoms can vary in severity and frequency.",
    facts: [
      "Affects the airways and makes breathing difficult",
      "Triggers include allergens, pollution, and infections",
      "Can be controlled with proper medication and lifestyle management",
    ],
  },
  {
    id: 9,
    title: "Anemia",
    tag: "Chronic",
    image: card_images.anemia,
    shortDescription:
      "A condition caused by low levels of healthy red blood cells.",
    overview:
      "Anemia is a condition in which the body does not have enough healthy red blood cells or hemoglobin to carry adequate oxygen to body tissues. This results in weakness, fatigue, and reduced physical capacity.",
    history:
      "Anemia commonly occurs due to iron deficiency, poor nutrition, blood loss, chronic diseases, or genetic conditions. Symptoms include tiredness, pale skin, dizziness, shortness of breath, and weakness. Women and children are more commonly affected.",
    facts: [
      "Often caused by iron and vitamin deficiency",
      "Leads to fatigue and reduced immunity",
      "Can be prevented with proper nutrition and supplements",
    ],
  },
  {
    id: 10,
    title: "Diarrheal Diseases",
    tag: "Bacterial",
    image: card_images.diarrheal,
    shortDescription: "Diseases causing frequent loose or watery stools.",
    overview:
      "Diarrheal diseases refer to infections of the digestive system that cause frequent passage of loose or watery stools. They are a major cause of illness, especially among children in developing regions.",
    history:
      "These diseases occur due to consumption of contaminated food or water, poor hygiene, and lack of sanitation. Symptoms include diarrhea, dehydration, abdominal pain, fever, and vomiting. Severe dehydration can be life-threatening if not treated.",
    facts: [
      "Caused by bacteria, viruses, or parasites",
      "Dehydration is the most serious complication",
      "Preventable through clean water, hygiene, and sanitation",
    ],
  },

  {
    id: 11,
    title: "Hepatitis",
    tag: "Viral",
    image: card_images.hepatitis,
    shortDescription: "Inflammation of the liver caused by viral infection.",
    overview:
      "Hepatitis is a disease characterized by inflammation of the liver and is commonly caused by hepatitis viruses A, B, and C. These viruses affect liver function and can range from mild illness to severe, long-term liver damage.",
    history:
      "Hepatitis A spreads through contaminated food and water, while Hepatitis B and C spread through infected blood and body fluids. Symptoms include jaundice, fatigue, nausea, abdominal pain, dark urine, and loss of appetite.",
    facts: [
      "Hepatitis A is preventable through safe food and water",
      "Hepatitis B and C can cause chronic liver disease",
      "Vaccines are available for Hepatitis A and B",
    ],
  },
  {
    id: 12,
    title: "Common Cold",
    tag: "Viral",
    image: card_images.cold,
    shortDescription: "A mild viral infection of the upper respiratory tract.",
    overview:
      "The common cold is a viral infection affecting the nose, throat, and upper respiratory tract. It is one of the most common illnesses and usually resolves on its own within a few days.",
    history:
      "The common cold spreads through airborne droplets and direct contact with infected individuals. Symptoms include runny or blocked nose, sneezing, sore throat, cough, mild fever, and headache. It is usually not serious but highly contagious.",
    facts: [
      "Caused by viruses such as rhinovirus",
      "Spreads easily through contact and droplets",
      "Rest, fluids, and basic care help recovery",
    ],
  },
  {
    id: 13,
    title: "Influenza",
    tag: "Viral",
    image: card_images.influenza,
    shortDescription:
      "A contagious viral infection affecting the respiratory system.",
    overview:
      "Influenza, commonly known as flu, is a contagious viral infection that affects the nose, throat, and lungs. It spreads easily during seasonal outbreaks and can affect people of all age groups.",
    history:
      "Influenza spreads through respiratory droplets when an infected person coughs, sneezes, or talks. Symptoms include sudden fever, cough, sore throat, body aches, headache, fatigue, and weakness. In some cases, it can lead to serious complications.",
    facts: [
      "Spreads easily through coughs and sneezes",
      "Can cause severe illness in elderly and children",
      "Annual vaccination helps prevent infection",
    ],
  },
  {
    id: 14,
    title: "COVID-19",
    tag: "Viral",
    image: card_images.covid19,
    shortDescription: "A viral respiratory disease caused by the coronavirus.",
    overview:
      "COVID-19 is an infectious disease caused by the SARS-CoV-2 virus. It mainly affects the respiratory system and can range from mild illness to severe disease and death.",
    history:
      "COVID-19 spreads through respiratory droplets, close contact, and contaminated surfaces. Common symptoms include fever, cough, shortness of breath, fatigue, loss of taste or smell, and sore throat. Severe cases may require hospitalization.",
    facts: [
      "Spreads through close contact and respiratory droplets",
      "Vaccination reduces severity and risk of complications",
      "Prevented by masks, hygiene, and physical distancing",
    ],
  },
  {
    id: 15,
    title: "Pneumonia",
    tag: "Bacterial",
    image: card_images.pneumonia,
    shortDescription: "A lung infection causing inflammation of air sacs.",
    overview:
      "Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus. It can be caused by bacteria, viruses, or fungi and affects breathing.",
    history:
      "Pneumonia occurs due to infections, weak immunity, smoking, or chronic illness. Symptoms include cough with phlegm, fever, chest pain, shortness of breath, and fatigue. It can be serious in infants and elderly individuals.",
    facts: [
      "Caused by bacteria, viruses, or fungi",
      "Can be life-threatening if untreated",
      "Vaccines are available for some types of pneumonia",
    ],
  },
  {
    id: 16,
    title: "Skin Infections",
    tag: "Bacterial",
    image: card_images.skin,
    shortDescription: "Infections affecting the skin caused by microbes.",
    overview:
      "Skin infections are conditions in which bacteria, viruses, fungi, or parasites invade the skin, leading to redness, swelling, pain, or discharge. They can range from mild to severe.",
    history:
      "Skin infections occur due to poor hygiene, cuts or wounds, contaminated surfaces, or weakened immunity. Common symptoms include itching, rashes, redness, swelling, pus formation, and pain.",
    facts: [
      "Can be bacterial, fungal, viral, or parasitic",
      "Proper hygiene helps prevent infections",
      "Most skin infections are treatable with medication",
    ],
  },

  {
    id: 17,
    title: "Urinary Tract Infection",
    tag: "Bacterial",
    image: card_images.urine,
    shortDescription: "An infection affecting the urinary system.",
    overview:
      "Urinary tract infection is a condition in which bacteria infect any part of the urinary system, including the kidneys, bladder, ureters, or urethra. It is more common in women and can cause discomfort and pain.",
    history:
      "UTIs usually occur due to bacterial entry into the urinary tract, poor hygiene, holding urine for long periods, dehydration, or weakened immunity. Symptoms include burning sensation during urination, frequent urge to urinate, cloudy urine, and lower abdominal pain.",
    facts: [
      "More common in women than men",
      "Caused mainly by bacterial infection",
      "Preventable with good hygiene and adequate fluid intake",
    ],
  },
  {
    id: 18,
    title: "Malnutrition",
    tag: "Chronic",
    image: card_images.malnutrition,
    shortDescription:
      "A condition caused by inadequate or imbalanced nutrition.",
    overview:
      "Malnutrition is a condition that occurs when the body does not receive adequate nutrients required for proper growth and health. It includes undernutrition as well as deficiencies of essential vitamins and minerals.",
    history:
      "Malnutrition occurs due to poverty, lack of access to nutritious food, poor dietary habits, illness, and poor absorption of nutrients. Symptoms include weight loss, weakness, stunted growth in children, poor immunity, and delayed recovery from illness.",
    facts: [
      "Common among children and elderly populations",
      "Leads to weak immunity and poor growth",
      "Preventable through balanced diet and nutrition programs",
    ],
  },
  {
    id: 19,
    title: "Obesity",
    tag: "Chronic",
    image: card_images.obesity,
    shortDescription: "A condition characterized by excessive body fat.",
    overview:
      "Obesity is a medical condition in which excess body fat accumulates to an extent that it negatively affects health. It increases the risk of many chronic diseases and reduces overall quality of life.",
    history:
      "Obesity is caused by excessive calorie intake, lack of physical activity, sedentary lifestyle, unhealthy eating habits, and genetic factors. It may lead to conditions such as diabetes, heart disease, joint problems, and high blood pressure.",
    facts: [
      "Increases risk of several chronic diseases",
      "Caused by unhealthy diet and inactive lifestyle",
      "Preventable through exercise and balanced nutrition",
    ],
  },
  {
    id: 20,
    title: "Mental Health Disorders",
    tag: "Mental",
    image: card_images.mental,
    shortDescription:
      "Conditions affecting emotional and psychological well-being.",
    overview:
      "Mental health disorders include conditions such as stress, anxiety, and depression that affect a person’s thinking, emotions, and behavior. These disorders can interfere with daily life and overall well-being.",
    history:
      "Mental health disorders occur due to prolonged stress, emotional trauma, social pressure, genetic factors, and chemical imbalance in the brain. Symptoms include persistent sadness, fear, mood changes, sleep problems, lack of concentration, and loss of interest in activities.",
    facts: [
      "Affects emotional, mental, and social well-being",
      "Can impact daily functioning and relationships",
      "Manageable with counseling, support, and treatment",
    ],
  },
  {
    id: 21,
    title: "Arthritis",
    tag: "Chronic",
    image: card_images.arthritis,
    shortDescription:
      "A condition causing inflammation and pain in the joints.",
    overview:
      "Arthritis is a condition characterized by inflammation of one or more joints, leading to pain, stiffness, swelling, and reduced movement. It commonly affects older adults but can occur at any age.",
    history:
      "Arthritis develops due to aging, wear and tear of joints, autoimmune disorders, infections, or genetic factors. Common symptoms include joint pain, stiffness (especially in the morning), swelling, and difficulty in movement.",
    facts: [
      "Causes pain and stiffness in joints",
      "Common in elderly but can affect younger people",
      "Managed through exercise, medication, and lifestyle changes",
    ],
  },
  {
    id: 22,
    title: "Migraine",
    tag: "Chronic",
    image: card_images.migraine,
    shortDescription: "A neurological condition causing severe headaches.",
    overview:
      "Migraine is a neurological disorder characterized by recurring episodes of severe headache, often on one side of the head. It may be accompanied by nausea, vomiting, and sensitivity to light and sound.",
    history:
      "Migraine can be triggered by stress, lack of sleep, hormonal changes, loud noises, bright lights, or certain foods. Symptoms include throbbing headache, visual disturbances, nausea, and dizziness.",
    facts: [
      "Causes intense and recurring headaches",
      "Triggers include stress and lifestyle factors",
      "Manageable with medication and trigger avoidance",
    ],
  },
  {
    id: 23,
    title: "Gastritis",
    tag: "Bacterial",
    image: card_images.gastritis,
    shortDescription: "Inflammation of the stomach lining.",
    overview:
      "Gastritis is a condition in which the lining of the stomach becomes inflamed, leading to discomfort and digestive problems. It can be acute or chronic in nature.",
    history:
      "Gastritis occurs due to excessive consumption of spicy food, alcohol, smoking, infections, stress, or prolonged use of painkillers. Symptoms include stomach pain, nausea, vomiting, bloating, and indigestion.",
    facts: [
      "Affects the stomach lining",
      "Often linked to diet and lifestyle habits",
      "Treatable with medication and dietary changes",
    ],
  },
  {
    id: 24,
    title: "Sinusitis",
    tag: "Bacterial",
    image: card_images.sinusitis,
    shortDescription: "Inflammation of the sinus cavities.",
    overview:
      "Sinusitis is a condition in which the sinus cavities become inflamed or swollen, usually due to infection or allergy. This inflammation blocks normal mucus drainage and causes pressure in the face.",
    history:
      "Sinusitis develops due to viral or bacterial infections, allergies, pollution, or nasal blockage. Symptoms include facial pain, headache, nasal congestion, thick nasal discharge, and reduced sense of smell.",
    facts: [
      "Causes facial pain and nasal congestion",
      "Often follows cold or allergies",
      "Preventable with proper hygiene and allergy control",
    ],
  },

  {
    id: 25,
    title: "Conjunctivitis",
    tag: "Bacterial",
    image: card_images.conjunctivitis,
    shortDescription: "An infection or inflammation of the eye membrane.",
    overview:
      "Conjunctivitis is an inflammation or infection of the conjunctiva, the transparent membrane that covers the white part of the eye and inner eyelids. It causes redness and irritation of the eyes.",
    history:
      "Conjunctivitis occurs due to bacterial or viral infections, allergies, or exposure to irritants such as dust and smoke. Symptoms include red eyes, itching, watery or sticky discharge, and swelling of the eyelids.",
    facts: [
      "Highly contagious in bacterial and viral forms",
      "Causes redness and discharge from eyes",
      "Preventable through good hygiene and avoiding eye contact",
    ],
  },
  {
    id: 26,
    title: "Leprosy",
    tag: "Chronic",
    image: card_images.leprosy,
    shortDescription: "A chronic infectious disease affecting skin and nerves.",
    overview:
      "Leprosy is a chronic infectious disease caused by the bacterium Mycobacterium leprae. It mainly affects the skin, peripheral nerves, and mucous membranes of the upper respiratory tract.",
    history:
      "Leprosy spreads through prolonged close contact with untreated individuals. Symptoms include light-colored skin patches, numbness, muscle weakness, and nerve damage. Early diagnosis is essential to prevent disability.",
    facts: [
      "Curable with multi-drug therapy",
      "Early treatment prevents disability",
      "Not highly contagious with brief contact",
    ],
  },
  {
    id: 27,
    title: "Measles",
    tag: "Viral",
    image: card_images.measles,
    shortDescription: "A highly contagious viral disease.",
    overview:
      "Measles is a highly contagious viral disease caused by the measles virus. It primarily affects children and spreads rapidly in unvaccinated populations.",
    history:
      "Measles spreads through respiratory droplets when an infected person coughs or sneezes. Symptoms include high fever, cough, runny nose, red eyes, and a characteristic skin rash. Complications can be severe in young children.",
    facts: [
      "Highly contagious viral disease",
      "Can cause serious complications in children",
      "Preventable through vaccination",
    ],
  },
  {
    id: 28,
    title: "Cholera",
    tag: "Bacterial",
    image: card_images.cholera,
    shortDescription:
      "A water-borne bacterial disease causing severe diarrhea.",
    overview:
      "Cholera is an acute diarrheal disease caused by the bacterium Vibrio cholerae. It spreads through contaminated water and food and can cause rapid dehydration.",
    history:
      "Cholera occurs in areas with poor sanitation and unsafe drinking water. Symptoms include sudden onset of watery diarrhea, vomiting, leg cramps, and dehydration. If untreated, it can be fatal.",
    facts: [
      "Spreads through contaminated water and food",
      "Causes severe dehydration",
      "Preventable with clean water and proper sanitation",
    ],
  },
  {
    id: 29,
    title: "Goiter",
    tag: "Chronic",
    image: card_images.goiter,
    shortDescription: "Abnormal enlargement of the thyroid gland.",
    overview:
      "Goiter is a condition characterized by the enlargement of the thyroid gland, which is located in the neck. The thyroid gland plays an important role in regulating metabolism through hormone production.",
    history:
      "Goiter commonly occurs due to iodine deficiency in the diet. Other causes include thyroid disorders and hormonal imbalance. Symptoms include swelling in the neck, difficulty in swallowing or breathing, and hoarseness of voice.",
    facts: [
      "Caused mainly by iodine deficiency",
      "Leads to visible swelling in the neck",
      "Preventable by using iodized salt",
    ],
  },
  {
    id: 30,
    title: "Rabies",
    tag: "Viral",
    image: card_images.rabies,
    shortDescription:
      "A deadly viral disease transmitted through animal bites.",
    overview:
      "Rabies is a fatal viral disease that affects the central nervous system. It is transmitted to humans through the bite or scratch of infected animals, most commonly dogs.",
    history:
      "Rabies spreads through saliva of infected animals entering the body through wounds. Symptoms include fever, headache, fear of water, confusion, paralysis, and eventually death if untreated. Immediate medical attention after an animal bite is crucial.",
    facts: [
      "Transmitted through bites of infected animals",
      "Almost always fatal once symptoms appear",
      "Preventable through timely vaccination after exposure",
    ],
  },
  {
    id: 31,
    title: "Polio",
    tag: "Viral",
    image: card_images.polio,
    shortDescription: "A viral disease that can cause paralysis.",
    overview:
      "Polio is a highly infectious viral disease caused by the poliovirus. It mainly affects children under five years of age and can lead to permanent paralysis.",
    history:
      "Polio spreads through contaminated food and water or direct contact with infected individuals. Symptoms include fever, fatigue, headache, muscle pain, and in severe cases, paralysis. Global vaccination programs have greatly reduced polio cases.",
    facts: [
      "Primarily affects young children",
      "Can cause permanent paralysis",
      "Preventable through polio vaccination",
    ],
  },
  {
    id: 32,
    title: "Chicken Pox",
    tag: "Viral",
    image: card_images.chickenpox,
    shortDescription: "A contagious viral disease causing itchy skin rash.",
    overview:
      "Chicken pox is a highly contagious viral disease caused by the varicella-zoster virus. It is common in children and is characterized by an itchy skin rash with red spots and blisters.",
    history:
      "Chicken pox spreads through direct contact and airborne droplets. Symptoms include fever, fatigue, headache, and an itchy rash that turns into fluid-filled blisters. The disease usually resolves on its own but can be severe in adults.",
    facts: [
      "Highly contagious viral infection",
      "Causes itchy rash and blisters",
      "Preventable through vaccination",
    ],
  },
];
