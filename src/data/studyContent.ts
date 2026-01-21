export interface StudySection {
  id: string;
  title: string;
  icon: string;
  content: string[];
  keyPoints: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

// Content based on Peel Public Health Food Handler Certification Study Guide
// July 2023 - Peel Region, Ontario, Canada
export const studySections: StudySection[] = [
  {
    id: 'introduction',
    title: 'Introduction to Food Safety',
    icon: '📋',
    content: [
      'The food service industry is a big part of the Canadian economy. The first goal of any food premise should be to produce the safest and highest quality food possible.',
      'The responsibility for handling food safely belongs to everyone in a food premises, from the owner to the chef to the server to the dishwasher.',
      'Food premises in Ontario are regulated by the Health Protection and Promotion Act (HPPA) and Ontario Food Premises Regulation 493/17.',
      'Certified Public Health Inspectors (PHIs) enforce regulations through routine compliance inspections and have powers of entry, seizure, destruction, and to make orders including closure.',
      'There are over 6,500 food premises in Peel Region (Mississauga, Brampton, and Caledon).',
      'During all operating hours, operators must ensure there is at least one food handler or supervisor on site who has completed food handler training.'
    ],
    keyPoints: [
      'Responsibility for safe food belongs to everyone',
      'HPPA and Ontario Reg. 493/17 govern food premises',
      'PHIs conduct risk-based inspections (high, moderate, low)',
      'Trained food handler must be on site during all hours',
      'PHIs have power of entry, seizure, and closure',
      'Peel Inspections Disclosure website shows inspection results'
    ]
  },
  {
    id: 'foodborne-illness',
    title: 'Foodborne Illness',
    icon: '🦠',
    content: [
      'Foodborne illness is when something you eat or drink makes you sick. Every year, about 4 million (1 in 8) Canadians are affected by foodborne illness.',
      'Common symptoms include stomach cramps, diarrhea, vomiting, nausea, and fever. Symptoms can start soon after eating contaminated food or up to a month or more later.',
      'Groups at higher risk include young children, the elderly, pregnant women, and people with weakened immune systems.',
      'The four causes of foodborne illness are: Chemical Contamination, Physical Contamination, Allergens, and Microbiological Contamination.',
      'Foodborne illness caused by chemicals is called food poisoning. Symptoms usually happen fast, from 20 minutes to a few hours.',
      'The average cost of foodborne illness outbreaks to Canadian taxpayers is estimated between $12 and 14 billion every year.'
    ],
    keyPoints: [
      'Four causes: chemical, physical, allergens, microbiological',
      '1 in 8 Canadians affected annually',
      'Symptoms: cramps, diarrhea, vomiting, nausea, fever',
      'High-risk groups: young, elderly, pregnant, immunocompromised',
      'Chemical contamination = food poisoning',
      'Report outbreaks to public health unit immediately'
    ]
  },
  {
    id: 'allergens',
    title: 'Food Allergens',
    icon: '🥜',
    content: [
      'Over 2.6 million Canadians (7.5% of population) are affected by food allergy. For every 13 people, one likely has a food allergy.',
      'Anaphylaxis is a serious allergic reaction that can occur quickly and be life-threatening. If a customer has an allergic reaction, call 911 immediately.',
      'Priority allergens in Canada: Eggs, Peanuts, Sesame seeds, Sulphites, Wheat and triticale, Milk, Fish, Crustaceans and Molluscs, Soybeans, Mustard, Tree nuts.',
      'Even a very small amount of an allergen can cause an allergic reaction when ingested.',
      'Allergen contamination happens when food is not properly separated, similar to cross-contamination.',
      'Employees should talk directly to their manager or chef when a customer notifies them about food allergies.'
    ],
    keyPoints: [
      '11 priority allergens in Canada (includes mustard, sesame, sulphites)',
      'Anaphylaxis can be life-threatening - call 911',
      '1 in 13 Canadians has food allergy',
      'Even trace amounts can cause reactions',
      'Prevent cross-contact with separate equipment',
      'Know all menu ingredients and communicate accurately'
    ]
  },
  {
    id: 'microorganisms',
    title: 'Microorganisms',
    icon: '🔬',
    content: [
      'Microorganisms are germs that cannot be seen without a microscope. The most common cause of foodborne illness is microbiological contamination.',
      'Food contaminated with microorganisms may look, smell, and taste normal, even when it is not safe.',
      'Six types of microorganisms: viruses, protozoa, parasites, yeasts, mold, and bacteria. Bacteria illnesses are the most common type of foodborne illness.',
      'Pathogens are microorganisms that make us sick. The best way to control viruses is handwashing. The best way to control parasites is thorough cooking.',
      'Bacteria can multiply very quickly - doubling every 10-20 minutes in perfect conditions. Bacterial spores are NOT destroyed by cooking temperatures or most disinfectants.',
      'Carriers are people or things carrying microorganisms which can end up in food. People can transfer germs even without showing symptoms.'
    ],
    keyPoints: [
      'Six types: viruses, protozoa, parasites, yeasts, mold, bacteria',
      'Contaminated food looks, smells, tastes normal',
      'Bacteria multiply rapidly: double every 10-20 minutes',
      'Handwashing controls viruses; cooking controls parasites',
      'Spores survive cooking and most disinfectants',
      'Carriers can spread germs without symptoms'
    ]
  },
  {
    id: 'bacterial-growth',
    title: 'Conditions for Bacterial Growth',
    icon: '🌡️',
    content: [
      'Bacteria need specific conditions to grow: Time and Temperature, Oxygen, pH, Moisture, and Protein.',
      'The danger zone is between 4°C (40°F) and 60°C (140°F). Bacteria grow fastest in this range.',
      'Pathogenic bacteria need a pH that is slightly acidic or higher. Most bacteria do not grow well in acidic conditions (pH below 4.5).',
      'Bacteria need water to grow. Low moisture will not kill bacteria, but it will keep bacteria from growing.',
      'Potentially hazardous foods support bacterial growth because they are rich in protein and have high moisture content.',
      'Potentially hazardous foods include: dairy products, meat, fish, poultry, eggs, some raw vegetables and fruit (bean sprouts, garlic in oil, cut melon).'
    ],
    keyPoints: [
      'Danger Zone: 4°C to 60°C (40°F to 140°F)',
      'Growth factors: time, temperature, oxygen, pH, moisture, protein',
      'Bacteria grow best in high protein, high moisture foods',
      'Potentially hazardous foods need careful time/temperature control',
      'Acidic foods (pH below 4.5) inhibit bacterial growth',
      'Freezing/dehydrating stops growth but does not kill bacteria'
    ]
  },
  {
    id: 'time-temperature',
    title: 'Time and Temperature Control',
    icon: '⏱️',
    content: [
      'Keep food in the danger zone for as short a time as possible. Temperature control is the most effective way to slow bacterial growth.',
      'Hot holding: Food must be held at 60°C (140°F) or higher at all times.',
      'Cold holding: Food must be held at 4°C (40°F) or lower at all times.',
      'NEVER thaw foods at room temperature. Use: refrigerator at 4°C, cold running water, continuous cooking, or microwave (if cooking immediately).',
      'Refrigerated foods must be kept at 4°C (40°F) or lower. Freezers should maintain -18°C (0°F) or below.',
      'Use a probe thermometer to verify temperatures. Insert probe in thickest part, wait 15 seconds, record reading. Clean and sanitize after each use.'
    ],
    keyPoints: [
      'Hot holding: 60°C (140°F) or higher',
      'Cold holding: 4°C (40°F) or lower',
      'Never thaw at room temperature',
      'Use probe thermometer for all temperature checks',
      'Recalibrate thermometers regularly using ice point method',
      'Keep food out of danger zone (4°C-60°C) as much as possible'
    ]
  },
  {
    id: 'cooking-temperatures',
    title: 'Cooking Temperatures',
    icon: '🍳',
    content: [
      'Proper cooking temperatures kill harmful bacteria. Always verify with a probe thermometer for at least 15 seconds.',
      'Pork: 71°C (160°F) for at least 15 seconds',
      'Poultry whole: 82°C (180°F) for at least 15 seconds',
      'Poultry pieces or ground: 74°C (165°F) for at least 15 seconds',
      'Ground meat (other than poultry): 71°C (160°F) for at least 15 seconds',
      'Fish: 70°C (158°F) for at least 15 seconds',
      'Food mixtures containing poultry, eggs, meat, fish or other potentially hazardous foods: 74°C (165°F) for at least 15 seconds'
    ],
    keyPoints: [
      'Poultry (whole): 82°C (180°F)',
      'Poultry (pieces/ground): 74°C (165°F)',
      'Pork and ground meat: 71°C (160°F)',
      'Fish: 70°C (158°F)',
      'Food mixtures: 74°C (165°F)',
      'Always verify with probe thermometer for 15 seconds'
    ]
  },
  {
    id: 'cooling-reheating',
    title: 'Cooling and Reheating',
    icon: '❄️',
    content: [
      'Cooling foods too slowly is one of the leading causes of foodborne illness. Improper cooling accounts for 30% of improper food handling practices.',
      'Cooling requirement: Within 2 hours, food should drop from 60°C (140°F) to 20°C (68°F). Within the next 4 hours, drop from 20°C (68°F) to 4°C (40°F) or less.',
      'Methods to cool quickly: shallow pans (2-3 inches deep), place in refrigerator, stir frequently, ice water bath, ice wand, add ice directly, divide into small quantities.',
      'When hazardous foods are reheated, they must reach minimum cooking temperature for at least 15 seconds. Food must reach that temperature within 2 hours.',
      'Foods like soups, stews or gravies should be brought to a boil when reheating.',
      'Food cannot be reheated in hot-holding units. Be careful with leftovers - throw out leftovers after reheating (do not use leftovers of leftovers).'
    ],
    keyPoints: [
      'Cool from 60°C to 20°C within 2 hours',
      'Cool from 20°C to 4°C within next 4 hours',
      'Use shallow pans, ice baths, stir frequently',
      'Reheat to minimum cooking temp within 2 hours',
      'Improper cooling = #1 cause of foodborne illness (30%)',
      'Never reheat in hot-holding units'
    ]
  },
  {
    id: 'receiving-storage',
    title: 'Receiving and Storage',
    icon: '📦',
    content: [
      'Food must come from approved sources and be stored properly. Inspect all deliveries before accepting them.',
      'Refrigerated foods must be shipped at 4°C (40°F) or lower. Frozen foods must be frozen solid with no signs of thawing.',
      'Only government inspected meat, poultry and fish/shellfish are allowed. Look for government stamps or tags.',
      'Cracked eggs and Grade C eggs cannot be used in food premises. Eggs must be from registered egg station and graded.',
      'Buy only pasteurized milk. All dairy products must be made using only pasteurized milk.',
      'Food premises cannot use or accept home-canned foods. Never taste can contents to test them - botulism risk.',
      'Practice FIFO (First In, First Out): use older products before newer ones. Store food at least 15 cm (6 inches) off the floor.'
    ],
    keyPoints: [
      'Refrigerated deliveries: 4°C (40°F) or lower',
      'Only approved sources: inspected meat/poultry/fish',
      'No cracked eggs or Grade C eggs',
      'Pasteurized milk and dairy products only',
      'No home-canned foods - botulism risk',
      'FIFO rotation and 6 inches off floor'
    ]
  },
  {
    id: 'cross-contamination',
    title: 'Preventing Cross-Contamination',
    icon: '⚠️',
    content: [
      'Cross-contamination happens in three ways: Food to Food, Equipment to Food, and People to Food.',
      'Refrigerator storage: Raw meat, poultry and seafood on BOTTOM shelves. Cooked and ready-to-eat foods on UPPER shelves. Foods to be reheated in CENTRE.',
      'Old food should never be mixed with new food. Always use new utensils and food pans when replacing food on display.',
      'Any food that has been served but not eaten must be thrown out. Single service items must be discarded even if they look unused.',
      'Keep sanitizing solution on hand. Replace cutting surfaces if they have cracks or crevices.',
      'Meat slicers must be taken apart and thoroughly cleaned and sanitized after use. Can opener blades must be cleaned regularly.'
    ],
    keyPoints: [
      'Three types: Food-to-Food, Equipment-to-Food, People-to-Food',
      'Bottom shelf: raw meat/poultry/seafood',
      'Upper shelves: cooked and ready-to-eat foods',
      'Never mix old and new food on display',
      'Clean and sanitize equipment between uses',
      'Discard all served food and single-use items'
    ]
  },
  {
    id: 'personal-hygiene',
    title: 'Personal Hygiene',
    icon: '🧼',
    content: [
      'People are a major source of microorganisms that cause foodborne illness. Microorganisms are on hands, face, hair, and clothes at all times.',
      'Hand washing, when done correctly, is the single most effective way to prevent foodborne illness.',
      'Six steps to wash hands: 1) Wet hands with warm water. 2) Apply liquid soap. 3) Lather for 15-20 seconds including wrists, palms, back of hands, between fingers. 4) Rinse with warm water. 5) Dry with paper towel or air dryer. 6) Use paper towel to turn off water.',
      'Wash hands: before starting work, before handling food, after washroom, after touching nose/mouth, after coughing/sneezing, after handling raw foods, after clearing tables, handling dirty dishes, garbage, cleaning, handling money.',
      'Wear clean outer clothing. Human hair can be physical and microbial contamination - use headgear like hats or hairnets.',
      'Keep nails well-trimmed and clean. Avoid nail polish. Use disposable gloves or utensils to avoid touching food directly. Remember: glove use does not eliminate need for handwashing.'
    ],
    keyPoints: [
      'Handwashing is most effective prevention method',
      'Wash for 15-20 seconds with soap and warm water',
      'Wash before work, after washroom, between tasks',
      'Wear clean clothing and confine hair with headgear',
      'Keep nails trimmed; avoid nail polish',
      'Gloves do not replace handwashing'
    ]
  },
  {
    id: 'illness-reporting',
    title: 'When You\'re Sick',
    icon: '🤒',
    content: [
      'If you are sick, your body is producing more germs than when you are healthy.',
      'You must not prepare or serve food if you have: Diarrhea, Vomiting, Fever, Sore throat, or Persistent coughing or sneezing.',
      'If you have any of these symptoms or a communicable disease, you must let your manager or supervisor know.',
      'You should not return to work until 24 hours after the symptoms have stopped.',
      'If you have a cut or infection on your hand, a bandage should be worn to cover it AND a glove should be worn over the bandaged hand. A bandage alone is not enough.',
      'A person who has diarrhea cannot handle food even if they practice proper handwashing.'
    ],
    keyPoints: [
      'Report illness immediately to supervisor',
      'Do not work with: diarrhea, vomiting, fever, sore throat, persistent cough/sneeze',
      'Stay home 24 hours after symptoms stop',
      'Cover cuts with bandage AND glove',
      'Infected person handling food = 13% of foodborne illness',
      'Bandage alone is not sufficient protection'
    ]
  },
  {
    id: 'cleaning-sanitizing',
    title: 'Cleaning and Sanitizing',
    icon: '✨',
    content: [
      'Cleaning removes dirt or soil using chemicals and friction. Sanitizing reduces microorganisms to safe levels.',
      'Always clean before sanitizing. A surface can look clean but still have unsafe levels of microorganisms.',
      'Three-compartment sink: 1) Scrape/pre-rinse. 2) Wash with warm water and detergent. 3) Rinse with clean water at least 43°C (110°F). 4) Sanitize by submerging in hot water at least 77°C (170°F) OR chemical solution at least 24°C (75°F) for at least 45 seconds. 5) Air dry on non-porous sloped draining board. Never towel dry.',
      'Chemical sanitizers: Chlorine (100 ppm - 2ml of 5% bleach per litre), Quaternary ammonium/Quats (200 ppm), Iodine (25 ppm).',
      'Use test strips to ensure proper sanitizer concentration. Multi-service articles require three sinks.',
      'Handwash sink requirements: hot and cold water, soap in dispenser, single-use towels. Handwash sinks can ONLY be used for handwashing - not for food prep, dishes, or cleaning.'
    ],
    keyPoints: [
      'Cleaning removes dirt; sanitizing kills microorganisms',
      'Always clean before sanitizing',
      '3-sink method: Wash, Rinse (43°C), Sanitize (77°C or chemical), Air dry',
      'Sanitizers: Chlorine 100ppm, Quat 200ppm, Iodine 25ppm',
      'Use test strips to verify sanitizer strength',
      'Handwash sinks for handwashing ONLY'
    ]
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    icon: '🐀',
    content: [
      'Insects and rodents spread diseases by contaminating food. They can damage buildings and create electrical or fire hazards.',
      'The #1 reason for closure of food premises is pest infestation.',
      'Cockroaches can survive on very little food and water, living up to 2 years. If you see roaches in lit areas, you have serious infestation.',
      'Flies breed in garbage and feces. A female can lay 375-750 eggs that hatch in 7 days. Flies spread filth on their hair-covered bodies and suction-cup feet.',
      'Rodents eat and ruin food, damage buildings by chewing holes in walls, and cause fires by chewing electrical wires. Seeing them in daylight means heavy infestation.',
      'Integrated Pest Management (IPM): 1) Deny pests food, water and shelter through good sanitation. 2) Pest-proof the building. 3) Work with licensed pest control company. NEVER spray while food preparation is going on.'
    ],
    keyPoints: [
      'Pest infestation = #1 closure reason',
      'Roaches in lit areas = serious infestation',
      'Rodents in daylight = heavy infestation',
      'IPM: Sanitation, pest-proofing, licensed control',
      'Never spray during food preparation',
      'Maintain records of all pest control measures'
    ]
  },
  {
    id: 'haccp',
    title: 'Food Safety Management (HACCP)',
    icon: '📊',
    content: [
      'HACCP stands for Hazard Analysis Critical Control Point. It is a self-inspection system to control physical, chemical, biological and allergen contamination.',
      'Goal: eliminate or reduce incidence of foodborne illness and prevent food adulteration.',
      'Seven Principles: 1) Conduct hazard analysis. 2) Determine Critical Control Points (CCPs). 3) Establish critical limits. 4) Monitor CCPs. 5) Establish corrective actions. 6) Verify system works. 7) Document procedures and records.',
      'A Critical Control Point (CCP) is any point during food preparation where food safety could be at risk.',
      'HACCP does not take the place of cleaning and sanitizing, nor does it guarantee safe food.',
      'HACCP documentation includes policies, procedures, and records created when procedures are followed.'
    ],
    keyPoints: [
      '7 HACCP principles for food safety management',
      'CCP = point where food safety could be at risk',
      'Set critical limits for each CCP (e.g., cooking temp)',
      'Monitor, take corrective action, verify, document',
      'HACCP does not replace cleaning/sanitizing',
      'HACCP does not guarantee safe food - reduces risk'
    ]
  }
];

// Quiz questions based on Peel Public Health Food Handler Study Guide
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Who is responsible for handling food safely in a food premises?',
    options: [
      'Only the public health inspector',
      'Only the owner or manager',
      'Only the chef and cooks',
      'Everyone in the food premises'
    ],
    correctAnswer: 3,
    explanation: 'The responsibility for safe food belongs to everyone in a food premises, from the owner to the chef to the server to the dishwasher.',
    category: 'introduction'
  },
  {
    id: 2,
    question: 'What is the temperature danger zone for food?',
    options: [
      '0°C to 4°C (32°F to 40°F)',
      '4°C to 60°C (40°F to 140°F)',
      '60°C to 100°C (140°F to 212°F)',
      '-18°C to 4°C (0°F to 40°F)'
    ],
    correctAnswer: 1,
    explanation: 'The danger zone is between 4°C (40°F) and 60°C (140°F). Bacteria grow fastest in this temperature range.',
    category: 'bacterial-growth'
  },
  {
    id: 3,
    question: 'What is the minimum hot holding temperature for potentially hazardous foods?',
    options: [
      '50°C (122°F)',
      '55°C (131°F)',
      '60°C (140°F)',
      '65°C (149°F)'
    ],
    correctAnswer: 2,
    explanation: 'Food being held hot for service or display must be held at 60°C (140°F) or higher at all times.',
    category: 'time-temperature'
  },
  {
    id: 4,
    question: 'What is the maximum cold holding temperature for potentially hazardous foods?',
    options: [
      '0°C (32°F)',
      '2°C (36°F)',
      '4°C (40°F)',
      '6°C (43°F)'
    ],
    correctAnswer: 2,
    explanation: 'All foods being held cold for service or display must be held at 4°C (40°F) or lower at all times.',
    category: 'time-temperature'
  },
  {
    id: 5,
    question: 'How long should you lather your hands when washing?',
    options: [
      '5-10 seconds',
      '10-12 seconds',
      '15-20 seconds',
      '30-40 seconds'
    ],
    correctAnswer: 2,
    explanation: 'When washing hands, you should lather for 15-20 seconds, cleaning wrists, palms, back of hands and between fingers.',
    category: 'personal-hygiene'
  },
  {
    id: 6,
    question: 'Can you tell if food is contaminated with harmful microorganisms by looking at it, smelling it, or tasting it?',
    options: [
      'Yes, contaminated food always looks different',
      'Yes, contaminated food always smells bad',
      'No, contaminated food may look, smell and taste normal',
      'Yes, but only if you taste it carefully'
    ],
    correctAnswer: 2,
    explanation: 'Food contaminated with microorganisms may look, smell and taste normal, even when it is not safe. This is why proper food handling is critical.',
    category: 'microorganisms'
  },
  {
    id: 7,
    question: 'What is the internal cooking temperature for ground poultry?',
    options: [
      '70°C (158°F)',
      '71°C (160°F)',
      '74°C (165°F)',
      '82°C (180°F)'
    ],
    correctAnswer: 2,
    explanation: 'Poultry pieces or ground poultry must be cooked to an internal temperature of 74°C (165°F) for at least 15 seconds.',
    category: 'cooking-temperatures'
  },
  {
    id: 8,
    question: 'What is the internal cooking temperature for a whole turkey?',
    options: [
      '71°C (160°F)',
      '74°C (165°F)',
      '77°C (170°F)',
      '82°C (180°F)'
    ],
    correctAnswer: 3,
    explanation: 'Whole poultry must be cooked to an internal temperature of 82°C (180°F) for at least 15 seconds.',
    category: 'cooking-temperatures'
  },
  {
    id: 9,
    question: 'How many priority allergens are there in Canada?',
    options: [
      '8',
      '9',
      '10',
      '11'
    ],
    correctAnswer: 3,
    explanation: 'Canada has 11 priority allergens: Eggs, Peanuts, Sesame seeds, Sulphites, Wheat and triticale, Milk, Fish, Crustaceans and Molluscs, Soybeans, Mustard, and Tree nuts.',
    category: 'allergens'
  },
  {
    id: 10,
    question: 'If you have diarrhea, when can you return to work in a food premises?',
    options: [
      'Immediately if you take medicine',
      'After 12 hours',
      '24 hours after symptoms have stopped',
      'As soon as you feel better'
    ],
    correctAnswer: 2,
    explanation: 'You should not return to work until 24 hours after symptoms have stopped. You must notify your manager if you have diarrhea, vomiting, fever, sore throat, or persistent cough/sneeze.',
    category: 'illness-reporting'
  },
  {
    id: 11,
    question: 'What should food handlers do when tasting food during preparation?',
    options: [
      'Dip fingers into the food then into mouth',
      'Use a spoon, taste, and put the spoon back in the food',
      'Use a disposable spoon and throw it out after tasting',
      'Taste directly from the pot with a clean spoon multiple times'
    ],
    correctAnswer: 2,
    explanation: 'Use a disposable spoon and throw it out right after tasting, OR use a clean regular spoon and place it with dirty dishes immediately, OR ladle food into a cup and use a second spoon to taste.',
    category: 'cross-contamination'
  },
  {
    id: 12,
    question: 'Where should raw meat be stored in a refrigerator?',
    options: [
      'On the top shelf',
      'On the middle/centre shelves',
      'On the bottom shelves',
      'Anywhere as long as it is covered'
    ],
    correctAnswer: 2,
    explanation: 'Keep raw meat, poultry and seafood on the BOTTOM shelves to prevent dripping onto other foods. Cooked and ready-to-eat foods go on UPPER shelves.',
    category: 'cross-contamination'
  },
  {
    id: 13,
    question: 'What does FIFO stand for?',
    options: [
      'Food In, Food Out',
      'First In, First Out',
      'Fast In, Fast Out',
      'Find It, Fix Out'
    ],
    correctAnswer: 1,
    explanation: 'FIFO means First In, First Out. Use older products before newer ones by dating products when received and arranging them so older items are used first.',
    category: 'receiving-storage'
  },
  {
    id: 14,
    question: 'How high off the floor should food be stored?',
    options: [
      '5 cm (2 inches)',
      '10 cm (4 inches)',
      '15 cm (6 inches)',
      '30 cm (12 inches)'
    ],
    correctAnswer: 2,
    explanation: 'All food products should be kept at least 15 cm (six inches) off the floor to prevent contamination and allow for cleaning.',
    category: 'receiving-storage'
  },
  {
    id: 15,
    question: 'Within what time frame should hot food be cooled from 60°C to 20°C?',
    options: [
      'Within 1 hour',
      'Within 2 hours',
      'Within 4 hours',
      'Within 6 hours'
    ],
    correctAnswer: 1,
    explanation: 'Within 2 hours, the temperature should drop from 60°C (140°F) to 20°C (68°F). Then within the next 4 hours, it should drop from 20°C to 4°C or less.',
    category: 'cooling-reheating'
  },
  {
    id: 16,
    question: 'What is the leading cause of foodborne illness?',
    options: [
      'Inadequate cooking',
      'Improper cooling',
      'Cross-contamination',
      'Infected person'
    ],
    correctAnswer: 1,
    explanation: 'Improper cooling accounts for 30% of improper food handling practices that cause foodborne illness - making it the #1 cause.',
    category: 'cooling-reheating'
  },
  {
    id: 17,
    question: 'Can cracked eggs be used in a food premises?',
    options: [
      'Yes, if they are cooked thoroughly',
      'Yes, if they are used immediately',
      'No, cracked eggs and Grade C eggs cannot be used',
      'Yes, but only for baking'
    ],
    correctAnswer: 2,
    explanation: 'Cracked eggs and Grade C eggs cannot be used in food premises. They may carry a risk of Salmonella contamination. All eggs must be from a registered egg station and graded.',
    category: 'receiving-storage'
  },
  {
    id: 18,
    question: 'Which is NOT an approved method for thawing frozen food?',
    options: [
      'In a refrigerator at 4°C',
      'At room temperature on the counter',
      'Under cold running water',
      'In the microwave if cooking immediately'
    ],
    correctAnswer: 1,
    explanation: 'NEVER thaw foods at room temperature. The outside reaches danger zone temperatures while inside is still frozen, allowing bacteria to grow rapidly.',
    category: 'time-temperature'
  },
  {
    id: 19,
    question: 'What is the difference between cleaning and sanitizing?',
    options: [
      'They are the same thing',
      'Cleaning kills germs, sanitizing removes dirt',
      'Cleaning removes dirt, sanitizing reduces microorganisms to safe levels',
      'Cleaning is for equipment, sanitizing is for hands'
    ],
    correctAnswer: 2,
    explanation: 'Cleaning removes dirt or soil using chemicals and friction. Sanitizing reduces the number of microorganisms to safe levels. Both steps are needed.',
    category: 'cleaning-sanitizing'
  },
  {
    id: 20,
    question: 'What is the proper order for washing dishes in a three-compartment sink?',
    options: [
      'Sanitize, wash, rinse, air dry',
      'Wash, sanitize, rinse, air dry',
      'Scrape/rinse, wash, rinse, sanitize, air dry',
      'Rinse, sanitize, wash, towel dry'
    ],
    correctAnswer: 2,
    explanation: 'The proper order is: 1) Scrape or pre-rinse, 2) Wash with warm water and detergent, 3) Rinse with clean water at least 43°C, 4) Sanitize at 77°C or with chemical solution, 5) Air dry.',
    category: 'cleaning-sanitizing'
  },
  {
    id: 21,
    question: 'What concentration of chlorine bleach (5% strength) is needed for sanitizing?',
    options: [
      '50 parts per million (ppm)',
      '100 parts per million (ppm)',
      '200 parts per million (ppm)',
      '300 parts per million (ppm)'
    ],
    correctAnswer: 1,
    explanation: 'Chlorine-based sanitizers need 100 ppm. Mix 2 ml of 5% strength bleach per litre of water to achieve this.',
    category: 'cleaning-sanitizing'
  },
  {
    id: 22,
    question: 'Can a handwash sink be used to wash dishes when not being used for handwashing?',
    options: [
      'Yes, as long as you clean it after',
      'Yes, but only small amounts of dishes',
      'No, handwash sinks can ONLY be used for handwashing',
      'Yes, during slow periods'
    ],
    correctAnswer: 2,
    explanation: 'Handwash sinks can ONLY be used for handwashing. They cannot be used for food preparation, washing dishes, emptying water, or cleaning.',
    category: 'cleaning-sanitizing'
  },
  {
    id: 23,
    question: 'What is the #1 reason for closure of food premises?',
    options: [
      'Improper cooling',
      'Pest infestation',
      'Equipment failure',
      'Lack of trained staff'
    ],
    correctAnswer: 1,
    explanation: 'The #1 reason for closure of food premises is pest infestation. Keeping pests out is much easier and less expensive than getting rid of them once they are there.',
    category: 'pest-control'
  },
  {
    id: 24,
    question: 'If you see cockroaches in a lit up area, what does this usually mean?',
    options: [
      'They are just passing through',
      'It is normal and not concerning',
      'You have a serious cockroach infestation',
      'They are attracted to the light'
    ],
    correctAnswer: 2,
    explanation: 'Cockroaches are normally active in dark areas. If you see them in lit areas, it usually means you have a serious infestation.',
    category: 'pest-control'
  },
  {
    id: 25,
    question: 'What does HACCP stand for?',
    options: [
      'Health and Cleanliness Control Program',
      'Hazard Analysis Critical Control Point',
      'Health Authority Certification and Control Process',
      'Hygiene Assessment and Cleaning Control Protocol'
    ],
    correctAnswer: 1,
    explanation: 'HACCP stands for Hazard Analysis Critical Control Point. It is a self-inspection system designed to control physical, chemical, biological and allergen contamination.',
    category: 'haccp'
  },
  {
    id: 26,
    question: 'How many Canadians are affected by foodborne illness each year?',
    options: [
      'About 1 million (1 in 35)',
      'About 2 million (1 in 17)',
      'About 4 million (1 in 8)',
      'About 6 million (1 in 5)'
    ],
    correctAnswer: 2,
    explanation: 'Every year, about 4 million (1 in 8) Canadians are affected by a foodborne illness.',
    category: 'foodborne-illness'
  },
  {
    id: 27,
    question: 'What should you do if a customer has an allergic reaction at your premises?',
    options: [
      'Give them water and wait',
      'Offer them an antihistamine',
      'Call 911 or local emergency service immediately',
      'Ask them to leave and see their doctor'
    ],
    correctAnswer: 2,
    explanation: 'If a customer has an allergic reaction, call 911 or your local emergency service immediately. Anaphylaxis can be life-threatening and must be treated immediately.',
    category: 'allergens'
  },
  {
    id: 28,
    question: 'Approximately what percentage of Canadians are affected by food allergies?',
    options: [
      '2.5% (1 in 40)',
      '5% (1 in 20)',
      '7.5% (1 in 13)',
      '10% (1 in 10)'
    ],
    correctAnswer: 2,
    explanation: 'Over 2.6 million Canadians (7.5% of the population) are affected by food allergy. This means for every 13 people, one likely has a food allergy.',
    category: 'allergens'
  },
  {
    id: 29,
    question: 'Can bacterial spores be destroyed by normal cooking temperatures?',
    options: [
      'Yes, all spores are destroyed by cooking',
      'No, bacterial spores are NOT destroyed by cooking temperatures or most disinfectants',
      'Yes, if you cook at high temperature for long enough',
      'Only if you use a pressure cooker'
    ],
    correctAnswer: 1,
    explanation: 'Bacterial spores are NOT destroyed by cooking temperatures or most disinfectants. This is why temperature control and proper handling are so important.',
    category: 'microorganisms'
  },
  {
    id: 30,
    question: 'How quickly can bacteria double under perfect conditions?',
    options: [
      'Every 5 minutes',
      'Every 10-20 minutes',
      'Every 30-40 minutes',
      'Every hour'
    ],
    correctAnswer: 1,
    explanation: 'The number of bacteria will double every 10-20 minutes if conditions are perfect, meaning they have the right temperature, moisture and food source.',
    category: 'microorganisms'
  }
];

export const flashcards = studySections.map(section => ({
  category: section.title,
  cards: section.keyPoints.map((point, index) => ({
    id: `${section.id}-${index}`,
    front: point,
    back: section.content[index] || `Key concept related to ${section.title}`,
    category: section.id
  }))
})).flat();
