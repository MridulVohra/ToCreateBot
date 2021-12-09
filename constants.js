// Options the user could type in
const prompts = [
  ["help","HELP","Help","HeLp"],
  ["Flood","FLOOD","flood"],
  ["Earthquake","EARTHQUAKE","earthquake"],
  ["Tsunami","TSUNAMI","tsunami"],
  ["Hurricane","HURRICANE","hurricane"],
  ["Cyclone","CYCLONE","cyclone"],
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["Who made you ?","WHO MADE YOU ?","who made you?","who made you ?","who made you"],
  [""," ","  "],
  ["bye", "good bye", "goodbye", "see you later"],
  ["THANKYOU","thankyou","THANK YOU","thank you","ThankYou"]
]

// Possible responses, in corresponding order

const replies = [
  ["Which Natural Disaster are you under ?\n" +
  "( Flood , Earthquake , Tsunami , Cyclone , Hurricane )"],


  ["Flood Precautions\n" +
  "In any flooding or potential flooding event, the following actions should be taken:\n" +
  "\n" +
  "Protecting your home\n" +
  "Elevate the furnace, water heater, and electric panel if susceptible to flooding\n" +
  "Install check valves in sewer traps to prevent floodwater from backing up into your home.\n" +
  "Seal walls in basements with waterproofing compounds to avoid seepage.\n" +
  "Keep an adequate supply of food, candles and drinking water in case you are trapped inside your home.\n" +
  "When a flood is imminent\n" +
  "Listen to designated radio/TV emergency alert systems for emergency instructions.\n" +
  "Secure/bring in outdoor furniture or other items that might float away and become a potential hazard.\n" +
  "Move valuable items and papers/documents to upper floors.\n" +
  "During a flood\n" +
  "Seek higher ground. Do not wait for instructions.\n" +
  "Be aware of flash flood areas such as canals, streams, drainage channels.\n" +
  "Be ready to evacuate.\n" +
  "If instructed, turn off utilities at main switches and unplug appliances - do not touch electrical equipment if wet.\n" +
  "If you must leave your home, do not walk through moving water. Six inches of moving water can knock you off your feet.\n" +
  "Use a stick to test depth.\n" +
  "Do not try to drive over a flooded road. If your car stalls, abandon it immediately and seek an alternate route.\n" +
  "After a flood\n" +
  "Stay away from flood water - do not attempt to swim, walk or drive through the area\n" +
  "Be aware of areas where water has receded. Roadways may have weakened and could collapse.\n" +
  "Avoid downed power lines and muddy waters where power lines may have fallen.\n" +
  "Do not drink tap water until advised by the Health Unit that the water is safe to drink.\n" +
  "Once flood waters have receded you must not live in your home until the water supply has been declared safe for use,\n" +
  "all flood-contaminated rooms have been thoroughly cleaned and disinfected,\n" +
  "adequate toilet facilities are available,\n" +
  "all electrical appliances and heating/cooling systems have been inspected,\n" +
  "food,\n" +
  "utensils and dishes have been examined,\n" +
  "cleaned or disposed of,\n" +
  "and floor drains and sumps have been cleaned and disinfected."],


  ["What to Do Before an Earthquake\n" +
  "\n" +
  "Make sure you have a fire extinguisher,\n" +
  "first aid kit,\n" +
  "a battery-powered radio,\n" +
  "a flashlight,\n" +
  "and extra batteries at home.\n" +
  "Learn first aid.\n" +
  "Learn how to turn off the gas, water, and electricity.\n" +
  "Make up a plan of where to meet your family after an earthquake.\n" +
  "Don't leave heavy objects on shelves (they'll fall during a quake).\n" +
  "Anchor heavy furniture, cupboards, and appliances to the walls or floor.\n" +
  "Learn the earthquake plan at your school or workplace.\n" +
  "What to Do During an Earthquake\n" +
  "\n" +
  "Stay calm! If you're indoors, stay inside. If you're outside, stay outside.\n" +
  "If you're indoors,\n" +
  "stand against a wall near the center of the building,\n" +
  "stand in a doorway,\n" +
  "or crawl under heavy furniture (a desk or table).\n" +
  "Stay away from windows and outside doors.\n" +
  "If you're outdoors, stay in the open away from power lines or anything that might fall.\n" +
  "Stay away from buildings (stuff might fall off the building or the building could fall on you).\n" +
  "Don't use matches, candles, or any flame. Broken gas lines and fire don't mix.\n" +
  "If you're in a car, stop the car and stay inside the car until the earthquake stops.\n" +
  "Don't use elevators (they'll probably get stuck anyway).\n" +
  "What to Do After an Earthquake\n" +
  "\n" +
  "Check yourself and others for injuries. Provide first aid for anyone who needs it.\n" +
  "Check water, gas, and electric lines for damage.\n" +
  "If any are damaged, shut off the valves.\n"  +
  "Check for the smell of gas.\n" +
  "If you smell it, open all the windows and doors, leave immediately,\n" +
  "and report it to the authorities (use someone else's phone).\n" +
  "Turn on the radio. Don't use the phone unless it's an emergency.\n" +
  "Stay out of damaged buildings.\n" +
  "Be careful around broken glass and debris. Wear boots or sturdy shoes to keep from cutting your feet.\n" +
  "Be careful of chimneys (they may fall on you).\n" +
  "Stay away from beaches. Tsunamis and seiches sometimes hit after the ground has stopped shaking.\n" +
  "Stay away from damaged areas.\n" +
  "If you're at school or work, follow the emergency plan or the instructions of the person in charge.\n" +
  "Expect aftershocks."],


  ["Tsunami: Do’s & Don’ts\n" +
  "You should find out if your home, school, workplace, or other frequently visited locations are in tsunami hazard areas along sea-shore.\n" +
  "Know the height of your street above sea level and the distance of your street from the coast or other high-risk waters. (Local administration may put sign boards).\n" +
  "Plan evacuation routes from your home, school, workplace, or any other place you could be where tsunamis present a risk.\n" +
  "If your children's school is in an identified inundation zone, find out what the school evacuation plan is.\n" +
  "Practice your evacuation routes.\n" +
  "Use a Weather Radio or stay tuned to a local radio or television station to keep informed of local watches and warnings.\n" +
  "Talk to your insurance agent.Homeowners' policies may not cover flooding from a tsunami. Ask the Insurance Agent about the benefits from Multi-Hazard Insurance Schemes.\n" +
  "Discuss tsunamis with your family.Everyone should know what to do in a tsunami situation. Discussing tsunamis ahead of time will help reduce fear and save precious time in an emergency. Review flood safety and preparedness measures with your family.\n" +
  "If you are in an area at risk from tsunamis\n" +
  "\n" +
  "You should find out if your home, school, workplace, or other frequently visited locations are in tsunami hazard areas.\n" +
  "Know the height of your street above sea level and the distance of your street from the coast or other high-risk waters. (Local administration may put sign boards). Also find out the height above sea level and the distance from the coast of outbuildings that house animals, as well as pastures or corrals.\n" +
  "Plan evacuation routes from your home, school, workplace, or any other place you could be where tsunamis present a risk. If possible, pick areas (30 meters) above sea level or go as far as 3 kilometres inland, away from the coastline. If you cannot get this high or far, go as high or far as you can. Every meter inland or upward may make a difference. You should be able to reach your safe location on foot within 15 minutes. After a disaster, roads may become blocked or unusable. Be prepared to evacuate by foot if necessary. Footpaths normally lead uphill and inland, while many roads parallel coastlines. Follow posted tsunami evacuation routes; these will lead to safety. Local emergency management officials can advise you on the best route to safety and likely shelter locations.\n" +
  "If your children's school is in an identified inundation zone, find out what the school evacuation plan is. Find out if the plan requires you to pick your children up from school or from another location. Telephone lines during a tsunami watch or warning may be overloaded and routes to and from schools may be jammed.\n" +
  "Practice your evacuation routes. Familiarity may save your life. Be able to follow your escape route at night and during inclement weather. Practicing your plan makes the appropriate response more of a reaction, requiring less thinking during an actual emergency situation.\n" +
  "Use a Weather Radio or stay tuned to a local radio or television station to keep informed of local watches and warnings.\n" +
  "Talk to your insurance agent.Homeowners' policies may not cover flooding from a tsunami. Ask the Insurance Agent about the benefits from Multi-Hazard Insurance Schemes.\n" +
  "Discuss tsunamis with your family. Everyone should know what to do in a tsunami situation. Discussing tsunamis ahead of time will help reduce fear and save precious time in an emergency. Review flood safety and preparedness measures with your family.\n" +
  "If you are visiting an area at risk from tsunamis\n" +
  "\n" +
  "Check with the hotel or campground operators for tsunami evacuation information and find out what the warning system is for tsunamis. It is important to know designated escape routes before a warning is issued.\n" +
  "One of the early warning signals of a tsunami is that the sea water recedes several metres, exposing fish on shallow waters or on the beaches. If you see the sea water receding, you must immediately leave the beach and go to higher ground far away from the beach.\n" +
  "Protect Your Property\n" +
  "You should avoid building or living in buildings within 200 meters of the high tide coastline.\n" +
  "These areas are more likely to experience damage from tsunamis, strong winds, or coastal storms.\n" +
  "Make a list of items to bring inside in the event of a tsunami.\n" +
  "A list will help you remember anything that can be swept away by tsunami water.\n" +
  "Elevate coastal homes.\n" +
  "Most tsunami waves are less than 3 meters. Elevating your house will help reduce damage to your property from most tsunamis.\n" +
  "Take precautions to prevent flooding.\n" +
  "Have an engineer check your home and advise about ways to make it more resistant to tsunami water.\n" +
  "There may be ways to divert waves away from your property. Improperly built walls could make your situation worse. Consult with a professional for advice.\n" +
  "Ensure that any outbuildings, pastures, or corrals are protected in the same way as your home. When installing or changing fence lines, consider placing them in such a way that your animals are able to move to higher ground in the event of a tsunami.\n" +
  "What to Do if You Feel a Strong Coastal Earthquake\n" +
  "If you feel an earthquake that lasts 20 seconds or longer when you are in a coastal area, you should:\n" +
  "\n" +
  "Drop, cover, and hold on. You should first protect yourself from the earthquake damages.\n" +
  "When the shaking stops:\n" +
  "\n" +
  "Gather members of your household and move quickly to higher ground away from the coast. A tsunami may be coming within minutes.\n" +
  "Avoid downed power lines and stay away from damaged buildings and bridges from which Heavy objects might fall during an aftershock.\n" +
  "\n" +
  "If you are on land\n" +
  "\n" +
  "Be aware of tsunami facts. This knowledge could save your life! Share this knowledge with your relatives and friends. It could save their lives!\n" +
  "If you are in school and you hear there is a tsunami warning:\n" +
  "\n" +
  "You should follow the advice of teachers and other school personnel.\n" +
  "If you are at home and hear there is a tsunami warning:\n" +
  "\n" +
  "You should make sure your entire family is aware of the warning. Your family should evacuate your house if you live in a tsunami evacuation zone. Move in an orderly, calm and safe manner to the evacuation site or to any safe place outside your evacuation zone. Follow the advice of local emergency and law enforcement authorities.\n" +
  "If you are at the beach or near the ocean and you feel the earth shake:\n" +
  "\n" +
  "Move immediately to higher ground, DO NOT wait for a tsunami warning to be announced. Stay away from rivers and streams that lead to the ocean as you would stay away from the beach and ocean if there is a tsunami. A regional tsunami from a local earthquake could strike some areas before a tsunami warning could be announced.\n" +
  "Tsunamis generated in distant locations will generally give people enough time to move to higher ground. For locally-generated tsunamis, where you might feel the ground shake, you may only have a few minutes to move to higher ground.\n" +
  "High, multi-storied, reinforced concrete hotels are located in many low-lying coastal areas. The upper floors of these hotels can provide a safe place to find refuge should there be a tsunami warning and you cannot move quickly inland to higher ground.\n" +
  "Homes and small buildings located in low-lying coastal areas are not designed to withstand tsunami impacts. Do not stay in these structures should there be a tsunami warning.\n" +
  "Offshore reefs and shallow areas may help break the force of tsunami waves, but large and dangerous wave can still be a threat to coastal residents in these areas.\n" +
  "Staying away from all low-lying areas is the safest advice when there is a tsunami warning.\n" +
  "If you are on a boat:\n" +
  "\n" +
  "Since tsunami wave activity is imperceptible in the open ocean, do not return to port if you are at sea and a tsunami warning has been issued for your area. Tsunamis can cause rapid changes in water level and unpredictable dangerous currents in harbours and ports.\n" +
  "If there is time to move your boat or ship from port to deep water (after a tsunami warning has been issued), you should weigh the following considerations:\n" +
  "\n" +
  "Most large harbours and ports are under the control of a harbor authority and/or a vessel traffic system. These authorities direct operations during periods of increased readiness (should a tsunami be expected), including the forced movement of vessels if deemed necessary. Keep in contact with the authorities should a forced movement of vessel be directed.\n" +
  "Smaller ports may not be under the control of a harbor authority. If you are aware there is a tsunami warning and you have time to move your vessel to deep water, then you may want to do so in an orderly manner, in consideration of other vessels.\n" +
  "Owners of small boats may find it safest to leave their boat at the pier and physically move to higher ground, particularly in the event of a locally-generated tsunami.\n" +
  "Concurrent severe weather conditions (rough seas outside of safe harbor) could present a greater hazardous situation to small boats, so physically moving yourself to higher ground may be the only option.\n" +
  "Damaging wave activity and unpredictable currents can affect harbours for a period of time following the initial tsunami impact on the coast. Contact the harbor authority before returning to port making sure to verify that conditions in the harbor are safe for navigation and berthing.\n" +
  "What to do after a Tsunami\n" +
  "\n" +
  "You should continue using a Weather Radio or staying tuned to a Coast Guard emergency frequency station or a local radio or television station for updated emergency information.\n" +
  "The Tsunami may have damaged roads, bridges, or other places that may be unsafe.\n" +
  "Check yourself for injuries and get first aid if necessary before helping injured or trapped persons.\n" +
  "If someone needs to be rescued, call professionals with the right equipment to help.\n" +
  "Help people who require special assistance— Infants, elderly people, those without transportation, large families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.\n" +
  "Avoid disaster areas.\n" +
  "Your presence might hamper rescue and other emergency operations and put you at further risk from the residual effects of floods, such as contaminated water, crumbled roads, landslides, mudflows, and other hazards.\n" +
  "Use the telephone only for emergency calls.Telephone lines are frequently overwhelmed in disaster situations. They need to be clear for emergency calls to get through.\n" +
  "Stay out of a building if water remains around it.Tsunami water, like floodwater, can undermine foundations, causing buildings to sink, floors to crack, or walls to collapse.\n" +
  "When re-entering buildings or homes, use extreme caution.Tsunami-driven floodwater may have damaged buildings where you least expect it. Carefully watch every step you take.\n" +
  "Wear long pants, a long-sleeved shirt, and sturdy shoes.The most common injury following a disaster is cut feet.\n" +
  "Use battery-powered lanterns or flashlights when examining buildings.Battery-powered lighting is the safest and easiest to use, and it does not present a fire hazard for the user, occupants, or building. DO NOT USE CANDLES.\n" +
  "Examine walls, floors, doors, staircases, and windows to make sure that the building is not in danger of collapsing. Inspect foundations for cracks or other damage. Cracks and damage to a foundation can render a building uninhabitable.\n" +
  "Look for fire hazards.Under the earthquake action there may be broken or leaking gas lines, and under the tsunami flooded electrical circuits, or submerged furnaces or electrical appliances. Flammable or explosive materials may have come from upstream. Fire is the most frequent hazard following floods.\n" +
  "Check for gas leaks.If you smell gas or hear a blowing or hissing noise, open a window and get everyone outside quickly. Turn off the gas using the outside main valve if you can, and call the gas company from a neighbour’s home. If you turn off the gas for any reason, it must be turned back on by a professional.\n" +
  "Look for electrical system damage. If you see sparks or broken or frayed wires, or if you smell burning insulation, turn off the electricity at the main fuse box or circuit breaker. If you have to step in water to get to the fuse box or circuit breaker, call an electrician first for advice. Electrical equipment should be checked and dried before being returned to service.\\CCheck for damage to sewage and water lines. If you suspect sewage lines are damaged under the quake, avoid using the toilets and call a plumber. If water pipes are damaged, contact the water company and avoid using water from the tap. You can obtain safe water from undamaged water heaters or by melting ice cubes that were made before the tsunami hit. Turn off the main water valve before draining water from these sources. Use tap water only if local health officials advise it is safe.\n" +
  "Watch out for wild animals, especially poisonous snakes that may have come into buildings with the water. Use a stick to poke through debris. Tsunami floodwater flushes snakes and animals out of their homes.\n" +
  "Watch for loose plaster, drywall, and ceilings that could fall.\n" +
  "Take pictures of the damage, both of the building and its contents, for insurance claims. Open the windows and doors to help dry the building.\n" +
  "Shovel mud before it solidifies.\n" +
  "Check food supplies.\n" +
  "Any food that has come in contact with floodwater may be contaminated and should be thrown out.\n" +
  "Expect aftershocks. If the earthquake is of large magnitude (magnitude 8 to 9+ on the Richter scale) and located nearby, some aftershocks could be as large as magnitude 7+ and capable of generating another tsunami. The number of aftershocks will decrease over the course of several days, weeks, or months depending on how large the main shock was.\n" +
  "Watch your animals closely. Keep all your animals under your direct control. Hazardous materials abound in flooded areas. Your pets may be able to escape from your home or through a broken fence. Pets may become disoriented, particularly because flooding usually affects scent markers that normally allow them to find their homes. The behaviour of pets may change dramatically after any disruption, becoming aggressive or defensive, so be aware of their well-being and take measures to protect them from hazards, including displaced wild animals, and to ensure the safety of other people and animals."],


   ["During a Hurricane Watch\n" +
   "\n" +
   "Go over your Hurricane Property Preparation Checklist to make sure you have time to complete all necessary preparations. Even in high hurricane winds, preparation can mean the difference between minor damage and devastation.\n" +
   "\n" +
   "During a Hurricane Warning or During Severe Weather\n" +
   "\n" +
   "If you are advised to evacuate, don't wait; the longer you do the more snarled traffic becomes and the greater the risk spending hour after unpleasant hour stuck in a miles long line of cars inching up the interstate. Avoid flooded roads; six inches of water is all it takes to float a car. Keep an eye out for flood compromised or washed out bridges. Make sure someone outside the storm area knows where you will be and how to reach you.\n" +
   "If you do not evacuate, stay in doors and off the roads. Stay away from windows and doors. If power is lost, unplug all electrical appliances to prevent damage from power surge when service resumes. Keep emergency supplies at hand. Listen to local radio for changes in the weather situation and instructions.\n" +
   "If flooding occurs, move valuable property to higher locations in your home, if time permits. Move yourself and your pets to higher ground or shelter. Be sure to lock your home and take emergency supplies, clothing and bedding with you.\n" +
   "After a Storm\n" +
   "\n" +
   "Continue to monitor local radio for information. Return home only after authorities have announced it is safe to do so. When you reenter your home, do so cautiously. Check for displaced wildlife such as snakes. If necessary, open doors and windows to ventilate and help dry your home.\n" +
   "Give first aid where necessary. Do not move a seriously injured person unless they are in imminent danger. Call for emergency help.\n" +
   "Watch for and avoid downed power lines.\n" +
   "Avoid using the phone except in emergency. This will keep the phones free for authorities and those in more dire straits.\n" +
   "Check for damaged electrical wiring. Look for sparks or frayed wires. Hot or melting wiring insulation cause an acrid smell. If you notice any damage, cut off the power at the fuse or circuit breaker box but do not touch the box if you have to stand in water. In the latter case you should check with an electrician.\n" +
   "Avoid using candles, kerosene lamps or other open flame sources for heat or light. Candles cause more fires after a disaster than any other source. If you must use a candle or open flame lamp take extreme care to keep pets, children and combustibles away from the flame.\n" +
   "If you smell or hear the hiss of leaking gas, leave the house. If you can, turn off the gas line at the cut off valve outside your home. Call the utility company from your cell or from another location.\n" +
   "Inspect your water lines and other plumbing. If you think there has been any damage, avoid using toilets and do not drink the tap water.\n" +
   "Check your freezer and refrigerator for spoiled food.\n" +
   "Take photos of the house and contents for insurance purposes.\n" +
   "Don't burn charcoal in an enclosed area. Doing so can cause the build up of deadly carbon monoxide.\n" +
   "Take photos of any damaged items. Place them outside if they cannot be salvaged but try to avoid discarding them until they have been looked at by an insurance adjuster."],


   ["BEFORE THE CYCLONE SEASON\n" +
   "Check with your local council or your building control authority to see if your home has been built to cyclone standards.\n" +
   "\n" +
   "Check that the walls, roof and eaves of your home are secure.\n" +
   "\n" +
   "Trim treetops and branches well clear of your home (get council permission).\n" +
   "\n" +
   "Preferably fit shutters, or at least metal screens, to all glass areas.\n" +
   "\n" +
   "Clear your property of loose material that could blow about and possibly cause injury or damage during extreme winds.\n" +
   "\n" +
   "In case of a storm surge/tide warning, or other flooding, know your nearest safe high ground and the safest access route to it.\n" +
   "\n" +
   "Prepare an emergency kit containing:\n" +
   "\n" +
   "a portable battery radio, torch and spare batteries;\n" +
   "\n" +
   "water containers, dried or canned food and a can opener;\n" +
   "\n" +
   "matches, fuel lamp, portable stove, cooking gear, eating utensils; and\n" +
   "\n" +
   "a first aid kit and manual, masking tape for windows and waterproof bags.\n" +
   "\n" +
   "Keep a list of emergency phone numbers on display.\n" +
   "\n" +
   "Check neighbours, especially if recent arrivals, to make sure they are prepared.\n" +
   "\n" +
   "WHEN A CYCLONE WATCH IS ISSUED\n" +
   "Re-check your property for any loose material and tie down (or fill with water) all large, relatively light items such as boats and rubbish bins.\n" +
   "\n" +
   "Fill vehicles' fuel tanks. Check your emergency kit and fill water containers.\n" +
   "\n" +
   "Ensure household members know which is the strongest part of the house and what to do in the event of a cyclone warning or an evacuation.\n" +
   "\n" +
   "Tune to your local radio/TV for further information and warnings.\n" +
   "\n" +
   "Check that neighbours are aware of the situation and are preparing.\n" +
   "\n" +
   "WHEN A CYCLONE WARNING IS ISSUED\n" +
   "\n" +
   "Depending on official advice provided by your local authorities as the event evolves; the following actions may be warranted.\n" +
   "\n" +
   "If requested by local authorities, collect children from school or childcare centre and go home.\n" +
   "\n" +
   "Park vehicles under solid shelter (hand brake on and in gear).\n" +
   "\n" +
   "Put wooden or plastic outdoor furniture in your pool or inside with other loose items.\n" +
   "\n" +
   "Close shutters or board-up or heavily tape all windows. Draw curtains and lock doors.\n" +
   "\n" +
   "Pack an evacuation kit of warm clothes, essential medications, baby formula, nappies,\n" +
   "valuables, important papers, photos and mementos in waterproof bags to be taken with\n" +
   "your emergency kit. Large/heavy valuables could be protected in a strong cupboard.\n" +
   "\n" +
   "Remain indoors (with your pets). Stay tuned to your local radio/TV for further information.\n" +
   "\n" +
   "ON WARNING OF LOCAL EVACUATION\n" +
   "Based on predicted wind speeds and storm surge heights, evacuation may be necessary.\n" +
   "Official advice will be given on local radio/TV regarding safe routes and when to move.\n" +
   "\n" +
   "Wear strong shoes (not thongs) and tough clothing for protection.\n" +
   "\n" +
   "Lock doors; turn off power, gas, and water; take your evacuation and emergency kits.\n" +
   "\n" +
   "If evacuating inland (out of town), take pets and leave early to avoid heavy traffic, flooding and wind hazards.\n" +
   "\n" +
   "If evacuating to a public shelter or higher location, follow police and State/Territory Emergency Services directions.\n" +
   "\n" +
   "If going to a public shelter, take bedding needs and books or games for children.\n" +
   "\n" +
   "Leave pets protected and with food and water.\n" +
   "\n" +
   "WHEN THE CYCLONE STRIKES\n" +
   "Disconnect all electrical appliances. Listen to your battery radio for updates.\n" +
   "\n" +
   "Stay inside and shelter (well clear of windows) in the strongest part of the building,\n" +
   "i.e. cellar, internal hallway or bathroom. Keep evacuation and emergency kits with you.\n" +
   "\n" +
   "If the building starts to break up, protect yourself with mattresses, rugs or blankets under a\n" +
   "strong table or bench or hold onto a solid fixture, e.g. a water pipe.\n" +
   "\n" +
   "Beware the calm 'eye'. If the wind drops, don't assume the cyclone is over; violent winds\n" +
   "will soon resume from another direction. Wait for the official 'all clear'.\n" +
   "\n" +
   "If driving, stop (handbrake on and in gear) — but well away from the sea and clear of trees,\n" +
   "power lines and streams. Stay in the vehicle.\n" +
   "\n" +
   "AFTER THE CYCLONE\n" +
   "Don't go outside until officially advised it is safe.\n" +
   "\n" +
   "Check for gas leaks. Don't use electric appliances if wet.\n" +
   "\n" +
   "Listen to local radio for official warnings and advice.\n" +
   "\n" +
   "If you have to evacuate, or did so earlier, don't return until advised. Use a recommended route and don't rush.\n" +
   "\n" +
   "Beware of damaged power lines, bridges, buildings, trees, and don't enter floodwaters.\n" +
   "\n" +
   "Heed all warnings and don't go sightseeing. Check/help neighbours instead.\n" +
   "\n" +
   "Don't make unnecessary telephone calls."],

    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],

    ["Mridul Vohra & Sagar Chhabra made me."],

    ["Please type some TEXT !"],

    ["Bye", "Goodbye", "See you later"],

    ["You're Welcome"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]