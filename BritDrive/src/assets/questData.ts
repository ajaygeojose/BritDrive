const questData = [
  {
    "number": 1,
    "question": "The main cause of skidding is:",
    "image": null,
    "options": {
      "A": "the vehicle",
      "B": "the driver",
      "C": "the road",
      "D": "the weather"
    },
    "answer": "B"
  },
  {
    "number": 2,
    "question": "You may remove your seat belt temporarily when carrying out a manoeuvre that involves:",
    "image": null,
    "options": {
      "A": "Reversing",
      "B": "An emergency stop",
      "C": "A hill start",
      "D": "Driving slowly"
    },
    "answer": "A"
  },
  {
    "number": 3,
    "question": "Your car hits a pedestrian at 60 kph. The pedestrian will:",
    "image": null,
    "options": {
      "A": "Certainly be killed",
      "B": "Probably be killed",
      "C": "Certainly survive",
      "D": "Probably survive"
    },
    "answer": "B"
  },
  {
    "number": 4,
    "question": "You are in very heavy downpour. Your overall stopping distance is likely to be:",
    "image": null,
    "options": {
      "A": "Doubled",
      "B": "No different",
      "C": "Up to ten times greater",
      "D": "Halved"
    },
    "answer": "A"
  },
  {
    "number": 5,
    "question": "What is the national speed limit for cars in the left-hand lane of a three-lane motorway?",
    "image": null,
    "options": {
      "A": "60 mph",
      "B": "50 mph",
      "C": "70 mph",
      "D": "80 mph"
    },
    "answer": "C"
  },
  {
    "number": 6,
    "question": "You are turning left into a side road. What hazards should you be especially aware of?",
    "image": null,
    "options": {
      "A": "One-way street",
      "B": "Parked vehicles",
      "C": "Pedestrians",
      "D": "Traffic congestion"
    },
    "answer": "C"
  },
  {
    "number": 7,
    "question": "The fluid level in your battery is low. What should you top it up with?",
    "image": null,
    "options": {
      "A": "Battery acid",
      "B": "Distilled water",
      "C": "Engine coolant",
      "D": "Engine oil"
    },
    "answer": "B"
  },
  {
    "number": 8,
    "question": "You are driving along a wet road. How can you tell if your vehicle is aquaplaning?",
    "image": null,
    "options": {
      "A": "The engine noise will increase",
      "B": "The engine will stall",
      "C": "The steering will feel very heavy",
      "D": "The steering will feel very light"
    },
    "answer": "D"
  },
  {
    "number": 9,
    "question": "When you approach a bus that is about to move off from a bus stop you should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa942a9118cc.jpg",
    "options": {
      "A": "Get past before it moves",
      "B": "Signal left and wave the bus on",
      "C": "Allow it to pull away, if it is safe to do so",
      "D": "Flash your headlights as you approach"
    },
    "answer": "C"
  },
  {
    "number": 10,
    "question": "The national speed limit for cars and motorcycles on a single carriageway road is",
    "image": null,
    "options": {
      "A": "40 mph",
      "B": "30 mph",
      "C": "60 mph",
      "D": "50 mph"
    },
    "answer": "C"
  },
  {
    "number": 11,
    "question": "You are dazzled by oncoming headlights when driving at night. What should you do?",
    "image": null,
    "options": {
      "A": "Drive faster past the oncoming car",
      "B": "Flash your lights",
      "C": "Brake hard",
      "D": "Slow down or stop"
    },
    "answer": "D"
  },
  {
    "number": 12,
    "question": "You should not use a mobile phone whilst driving",
    "image": null,
    "options": {
      "A": "Because it might distract your attention from the road ahead",
      "B": "Unless you are able to drive one handed",
      "C": "Because reception is poor when the engine is running",
      "D": "Until you are satisfied that no other traffic is near"
    },
    "answer": "A"
  },
  {
    "number": 13,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6e7ddeaba4.jpg",
    "options": {
      "A": "Roundabout",
      "B": "No entry",
      "C": "No stopping",
      "D": "Crossroads"
    },
    "answer": "C"
  },
  {
    "number": 14,
    "question": "You have stopped at a pedestrian (zebra) crossing to allow pedestrians to cross. You should:",
    "image": null,
    "options": {
      "A": "Wait until they have crossed",
      "B": "Wait, revving your engine",
      "C": "Edge your vehicle forward slowly",
      "D": "Signal to pedestrians to cross"
    },
    "answer": "A"
  },
  {
    "number": 15,
    "question": "A red traffic light means:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6e7c49b51f.jpg",
    "options": {
      "A": "You must stop behind the white stop line",
      "B": "You may drive straight on if there is no other traffic",
      "C": "You must slow down and prepare to stop",
      "D": "You may turn left if it is safe to do so"
    },
    "answer": "A"
  },
  {
    "number": 16,
    "question": "When emerging from a side road into a queue of traffic which cars can be especially difficult to see?",
    "image": null,
    "options": {
      "A": "Motorcycles",
      "B": "Milk floats",
      "C": "Tractors",
      "D": "Cars"
    },
    "answer": "A"
  },
  {
    "number": 17,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6e7ace7f1a.jpg",
    "options": {
      "A": "Side winds Quayside or river bank",
      "B": "Falling or fallen rocks",
      "C": "Cliff face ahead"
    },
    "answer": "B"
  },
  {
    "number": 18,
    "question": "What should you use the horn for?",
    "image": null,
    "options": {
      "A": "To alert others to your presence",
      "B": "To greet other road users",
      "C": "To allow you right of way",
      "D": "To signal you annoyance"
    },
    "answer": "A"
  },
  {
    "number": 19,
    "question": "Why should you always reduce your speed when driving in fog?",
    "image": null,
    "options": {
      "A": "Because it is more difficult to see events ahead",
      "B": "Because the engine!s colder",
      "C": "Because you could be dazzled by other people!s fog lights",
      "D": "Because the brakes do not work as well"
    },
    "answer": "A"
  },
  {
    "number": 20,
    "question": "A casualty is not breathing normally. At what rate should chest compressions should be given?",
    "image": null,
    "options": {
      "A": "50 per minute",
      "B": "100 per minute",
      "C": "200 per minute",
      "D": "250 per minute"
    },
    "answer": "B"
  },
  {
    "number": 21,
    "question": "As a driver, how can you help the environment?",
    "image": null,
    "options": {
      "A": "By driving faster",
      "B": "By using leaded fuel",
      "C": "By driving with your windows down",
      "D": "By reducing your speed"
    },
    "answer": "D"
  },
  {
    "number": 22,
    "question": "Whilst driving, the fog clears and you can see more clearly. You must remember to",
    "image": null,
    "options": {
      "A": "Switch off the demister",
      "B": "Reduce your speed",
      "C": "Switch off the fog lights",
      "D": "Close any open windows"
    },
    "answer": "C"
  },
  {
    "number": 23,
    "question": "Overloading your vehicle can seriously affect?",
    "image": null,
    "options": {
      "A": "The Handling",
      "B": "The steering",
      "C": "Your comfort",
      "D": "Your ability to change gears"
    },
    "answer": "B"
  },
  {
    "number": 24,
    "question": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
    "image": null,
    "options": {
      "A": "Traffic uses the middle lane for emergencies only",
      "B": "Traffic can travel faster in poor weather conditions",
      "C": "Traffic can overtake on the left",
      "D": "Traffic in both directions can use the middle lane to overtake"
    },
    "answer": "D"
  },
  {
    "number": 25,
    "question": "You are approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6ebd124dc4.jpg",
    "options": {
      "A": "It is quicker route for cyclist",
      "B": "The cyclist is going to turn left instead",
      "C": "The cyclist is slower and more vulnerable",
      "D": "The cyclist thinks The highway Code does not apply to bicycles"
    },
    "answer": "C"
  },
  {
    "number": 26,
    "question": "&#39;Red Routes &#39;in major cities have been introduced to",
    "image": null,
    "options": {
      "A": "Raise the speed limits",
      "B": "Help the traffic flow",
      "C": "Provide better parking",
      "D": "Allow lorries to load more freely"
    },
    "answer": "B"
  },
  {
    "number": 27,
    "question": "Motorcyclists are more at risk to be injured from other road users because they",
    "image": null,
    "options": {
      "A": "Are more likely to break down than other motorists",
      "B": "Are more difficult to see than other drivers",
      "C": "Are less experienced that other drivers",
      "D": "Are always faster than other drivers"
    },
    "answer": "B"
  },
  {
    "number": 28,
    "question": "The driver of this car is giving an arm signal. What is he about to do?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6ee38e12e4.jpg",
    "options": {
      "A": "Go straight ahead",
      "B": "Turn to the left",
      "C": "Let pedestrians cross",
      "D": "Turn to the right"
    },
    "answer": "B"
  },
  {
    "number": 29,
    "question": "Someone is waiting to cross at a zebra crossing. They are standing on the pavement. You should normally:",
    "image": null,
    "options": {
      "A": "Stop, let them cross, wait patiently",
      "B": "Go on quickly before they step onto the crossing",
      "C": "Ignore them as they are still on the pavement",
      "D": "Stop before you reach the zigzag lines and let them cross"
    },
    "answer": "A"
  },
  {
    "number": 30,
    "question": "&#39;Tailgating &#39;usually means",
    "image": null,
    "options": {
      "A": "Using the rear door of a hatchback car",
      "B": "Driving with rear fog lights on",
      "C": "Reversing into a parking space",
      "D": "Following another vehicle too closely"
    },
    "answer": "D"
  },
  {
    "number": 31,
    "question": "When being followed by an ambulance showing a flashing blue light you should:",
    "image": null,
    "options": {
      "A": "Accelerate fast to get away from it",
      "B": "Maintain your speed and course",
      "C": "Brake harshly and immediately stop in the road",
      "D": "Pull over as soon as safely possible to let it pass"
    },
    "answer": "D"
  },
  {
    "number": 32,
    "question": "A heavy load on your roof rack will:",
    "image": null,
    "options": {
      "A": "Reduce the stopping distance",
      "B": "Make the steering lighter",
      "C": "Reduce stability",
      "D": "Improve the road holding"
    },
    "answer": "C"
  },
  {
    "number": 33,
    "question": "What does this traffic sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6f05ce155c.jpg",
    "options": {
      "A": "Two way traffic",
      "B": "No overtaking allowed",
      "C": "One-way traffic only",
      "D": "Give priority to oncoming traffic"
    },
    "answer": "D"
  },
  {
    "number": 34,
    "question": "Which of the following types of glasses should NOT be worn when driving at night?",
    "image": null,
    "options": {
      "A": "Round",
      "B": "Tinted",
      "C": "Half-moon",
      "D": "Bi-focal"
    },
    "answer": "B"
  },
  {
    "number": 35,
    "question": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because",
    "image": null,
    "options": {
      "A": "They use diesel power",
      "B": "They use electric power",
      "C": "They use quieter roads",
      "D": "They do not operate during rush hour"
    },
    "answer": "B"
  },
  {
    "number": 36,
    "question": "What lights and why must you put them on when going through a tunnel?",
    "image": null,
    "options": {
      "A": "Dipped-beam and front and/or rear Fog lights to see and be seen clearly.",
      "B": "Main-beam to see clearly where you are going.",
      "C": "No lights are necessary as tunnels have their own lighting.",
      "D": "Hazard warning lights so nobody drives too near."
    },
    "answer": null
  },
  {
    "number": 37,
    "question": "You start to feel tired whilst driving, you should?",
    "image": null,
    "options": {
      "A": "Turn on the radio and listen to loud music",
      "B": "Stop at a safe place and rest",
      "C": "Decrease your speed",
      "D": "Increase your speed to reduce your journey time"
    },
    "answer": "B"
  },
  {
    "number": 38,
    "question": "You are driving past a lane of parked cars and you notice a ball bouncing out into the road ahead. What should you do?",
    "image": null,
    "options": {
      "A": "Stop and wave the children across to fetch their ball",
      "B": "Continue driving at the same speed and sound your horn",
      "C": "Slow down and be prepared to stop for children",
      "D": "Continue driving at the same speed and flash your headlights"
    },
    "answer": "C"
  },
  {
    "number": 39,
    "question": "In daylight, an approaching motorcyclist is using a dipped headlight. Why?",
    "image": null,
    "options": {
      "A": "To stop the battery overcharging",
      "B": "So that the rider can be seen more easily",
      "C": "The rider is inviting you to proceed",
      "D": "To improve the rider &rsquo;s vision"
    },
    "answer": "B"
  },
  {
    "number": 40,
    "question": "Who is responsible for ensuring that a vehicle is fully road worthy when driven on a public road?",
    "image": null,
    "options": {
      "A": "Nobody in particular",
      "B": "Your mechanic",
      "C": "You, the driver",
      "D": "The VRT tester"
    },
    "answer": "C"
  },
  {
    "number": 41,
    "question": "Using front/rear fog lights in good visibility will:",
    "image": null,
    "options": {
      "A": "Improve your visibility",
      "B": "Dazzle other drivers",
      "C": "Increase your awareness",
      "D": "Flatten the battery"
    },
    "answer": "B"
  },
  {
    "number": 42,
    "question": "A strong cross wind is least likely to affect which of these vehicles?",
    "image": null,
    "options": {
      "A": "Motorcycles",
      "B": "High-sided vehicles",
      "C": "Cars",
      "D": "Cyclists"
    },
    "answer": "C"
  },
  {
    "number": 43,
    "question": "Where may you overtake on a one-way Street?",
    "image": null,
    "options": {
      "A": "Only on the left-hand side",
      "B": "Only on the right-hand side",
      "C": "Overtaking is not allowed",
      "D": "Either on the right or the left"
    },
    "answer": "D"
  },
  {
    "number": 44,
    "question": "You are approaching a zebra crossing. &nbsp;Pedestrians are waiting to cross. You should:",
    "image": null,
    "options": {
      "A": "Slow down and prepare to stop",
      "B": "Wave at them to cross the road",
      "C": "Give way to elderly and infirm only",
      "D": "Use your headlights to indicate they can cross"
    },
    "answer": "A"
  },
  {
    "number": 45,
    "question": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?",
    "image": null,
    "options": {
      "A": "An adult seat belt",
      "B": "A child seat",
      "C": "An adult lap belt",
      "D": "An adult holding a child"
    },
    "answer": "B"
  },
  {
    "number": 46,
    "question": "If you are feeling tired it is best to stop as soon as you can. Until then you should:",
    "image": null,
    "options": {
      "A": "Ensure a supply of fresh air",
      "B": "Increase your speed to find a stopping place quickly",
      "C": "Keep changing speed to improve concentration",
      "D": "Gently tap the steering wheel"
    },
    "answer": "A"
  },
  {
    "number": 47,
    "question": "You think the driver in the vehicle in front has forgotten to cancel their right indicator. You should",
    "image": null,
    "options": {
      "A": "Overtake on the left if there is room",
      "B": "Flash your lights to alert the driver",
      "C": "Sound your horn before overtaking",
      "D": "Stay behind and not overtake"
    },
    "answer": "D"
  },
  {
    "number": 48,
    "question": "When following a large vehicle you should stay well back because",
    "image": null,
    "options": {
      "A": "It allows the driver to see you in the mirror",
      "B": "It helps the large vehicle to stop more easily",
      "C": "It allows you to corner more quickly",
      "D": "It helps you to keep out of the wind"
    },
    "answer": "A"
  },
  {
    "number": 49,
    "question": "Following a collision someone has suffered a burn. The burn needs to be cooled. What is the shortest time it should be cooled for?",
    "image": null,
    "options": {
      "A": "15 minutes",
      "B": "5 minutes",
      "C": "10 minutes",
      "D": "20 minutes"
    },
    "answer": "C"
  },
  {
    "number": 50,
    "question": "A pedestrian with a white stick and red band is",
    "image": null,
    "options": {
      "A": "Deaf and dumb",
      "B": "Blind only",
      "C": "Deaf and blind",
      "D": "Over 65 years old"
    },
    "answer": "C"
  },
  {
    "number": 51,
    "question": "There is a tractor ahead of you. You wish to overtake but you are NOT sure if it is safe to do so. You should:",
    "image": null,
    "options": {
      "A": "Follow another overtaking vehicle through",
      "B": "Not overtake if you are in doubt",
      "C": "Sound your horn to the slow vehicle to pull over",
      "D": "Speed through but flash your lights to oncoming traffic"
    },
    "answer": "B"
  },
  {
    "number": 52,
    "question": "You are driving behind three cyclists. They approach a roundabout in the lefthand lane. In which direction should you expect the cyclists to go?",
    "image": null,
    "options": {
      "A": "Left",
      "B": "Right",
      "C": "Straight ahead",
      "D": "Any direction"
    },
    "answer": "D"
  },
  {
    "number": 53,
    "question": "When overtaking which routine should you use?",
    "image": null,
    "options": {
      "A": "Mirrors, position, speed, look, mirrors, signal, manoeuvre",
      "B": "Look, mirrors, position, mirrors, signal, manoeuvre",
      "C": "Speed, mirrors, look, signal, manoeuvre",
      "D": "Mirrors, speed, position, look, mirrors, signal, manoeuvre"
    },
    "answer": "A"
  },
  {
    "number": 54,
    "question": "How can you help to prevent your car radio from being stolen?",
    "image": null,
    "options": {
      "A": "Hide the radio with a blanket",
      "B": "Install a security-coded radio",
      "C": "Park near a busy junction",
      "D": "Park in an unlit area"
    },
    "answer": "B"
  },
  {
    "number": 55,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6f69f4f8a8.jpg",
    "options": {
      "A": "Toll bridge ahead",
      "B": "Opening or swing bridge ahead",
      "C": "Road ahead closed",
      "D": "Humpback bridge ahead"
    },
    "answer": "B"
  },
  {
    "number": 56,
    "question": "Your overall stopping distance will be much longer when:",
    "image": null,
    "options": {
      "A": "Driving on a very hot day",
      "B": "Driving in strong winds",
      "C": "Driving in fog",
      "D": "Driving in rain"
    },
    "answer": "D"
  },
  {
    "number": 57,
    "question": "You are on a long, downhill slope. What should you do to help control the speed of your car?",
    "image": null,
    "options": {
      "A": "Grip the handbrake firmly",
      "B": "Apply the parking brake gently",
      "C": "Select a lower gear",
      "D": "Select neutral"
    },
    "answer": "C"
  },
  {
    "number": 58,
    "question": "Why could keeping the clutch down or selecting neutral for long periods of time be dangerous?",
    "image": null,
    "options": {
      "A": "Engine damage may be caused",
      "B": "Fuel spillage will occur",
      "C": "You will have less steering and braking control",
      "D": "It will wear tyres out more quickly"
    },
    "answer": "C"
  },
  {
    "number": 59,
    "question": "You have been convicted of driving whilst unfit through drink or drugs. You will find this is likely to cause the cost of one of the following to rise considerably. Which one?",
    "image": null,
    "options": {
      "A": "Insurance premiums",
      "B": "Vehicle test certificate",
      "C": "Road fund licence",
      "D": "Driving licence"
    },
    "answer": "A"
  },
  {
    "number": 60,
    "question": "Anti-lock brakes prevent wheels from locking. This means the tyres are less likely to",
    "image": null,
    "options": {
      "A": "Skid",
      "B": "Aquaplane",
      "C": "Wear",
      "D": "Puncture"
    },
    "answer": "A"
  },
  {
    "number": 61,
    "question": "Any load that is carried on a roof rack MUST be:",
    "image": null,
    "options": {
      "A": "As light as possible",
      "B": "Carried only when strictly necessary",
      "C": "Covered with plastic sheeting",
      "D": "Securely fastened when driving"
    },
    "answer": "D"
  },
  {
    "number": 62,
    "question": "What is the maximum number of penalty points that will automatically disqualify a driver who holds a provisional driving licence?",
    "image": null,
    "options": {
      "A": "10 points during any one year period",
      "B": "18 points over a two year period",
      "C": "15 points over a five 5 year period",
      "D": "4 points a year over a 3 year period"
    },
    "answer": null
  },
  {
    "number": 63,
    "question": "You can use the engine of your vehicle as a brake by",
    "image": null,
    "options": {
      "A": "By selecting fifth gear",
      "B": "By selecting a lower gear",
      "C": "By travelling with the clutch pressed down",
      "D": "By turning the engine off"
    },
    "answer": "B"
  },
  {
    "number": 64,
    "question": "When should you use front and rear fog lights?",
    "image": null,
    "options": {
      "A": "When it is raining and just in case the roads are slippery.",
      "B": "When going through tunnels.",
      "C": "When the road is unlit by street lamps or they are not working.",
      "D": "During any time of the day or night to make sure that other road users see me."
    },
    "answer": null
  },
  {
    "number": 65,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6fa5d05e36.jpg",
    "options": {
      "A": "No motor vehicles",
      "B": "You have priority",
      "C": "No overtaking",
      "D": "Two-way traffic"
    },
    "answer": "C"
  },
  {
    "number": 66,
    "question": "A driver has had a few alcoholic drinks, what advice should you give them?",
    "image": null,
    "options": {
      "A": "Take extra care when driving home",
      "B": "Drink several cups of coffee before driving home",
      "C": "Take a short sleep before driving home",
      "D": "Do not drive home"
    },
    "answer": "D"
  },
  {
    "number": 67,
    "question": "You may only enter a box junction when:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6fb5b8aa2f.jpg",
    "options": {
      "A": "Your exit road is clear",
      "B": "You need to turn left",
      "C": "There are less than two vehicles in front of you",
      "D": "The traffic lights show green"
    },
    "answer": "A"
  },
  {
    "number": 68,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6fce0aee63.jpg",
    "options": {
      "A": "Humps in the road",
      "B": "Humpback bridge",
      "C": "Entrance to tunnel",
      "D": "Soft verges"
    },
    "answer": "A"
  },
  {
    "number": 69,
    "question": "You go to a social event and need to drive a short time afterwards. What precaution should you take?",
    "image": null,
    "options": {
      "A": "Avoid drinking alcohol on an empty stomach",
      "B": "Avoid drinking alcohol completely",
      "C": "Drink plenty of milk before drinking alcohol",
      "D": "Drink plenty of coffee after drinking alcohol"
    },
    "answer": "B"
  },
  {
    "number": 70,
    "question": "Apart from suffering any punishment according to law, what will a disqualified driver has to do to obtain a driving licence?",
    "image": null,
    "options": {
      "A": "Simply re-sit and pass the test of skills and behaviour.",
      "B": "Re-apply as for a new driver after expiry of disqualification period and must re-sit and pass both the theory test and test of skills and behaviour.",
      "C": "Pay any outstanding fines, submit a new licence application and re-sit and pass the theory test at any time during disqualification period.",
      "D": "Wait for any disqualification period to pass and apply for a duplicate driving licence."
    },
    "answer": "B"
  },
  {
    "number": 71,
    "question": "You are on a narrow road at night. A slower-moving vehicle ahead has been signaling right for some time. What should you do?",
    "image": null,
    "options": {
      "A": "Overtake on the left",
      "B": "Signal right and sound your horn",
      "C": "Wait for the signal to be cancelled before overtaking",
      "D": "Flash your headlights before overtaking"
    },
    "answer": "C"
  },
  {
    "number": 72,
    "question": "You want to turn right from a main road into a side road. Just before you turn you should",
    "image": null,
    "options": {
      "A": "Cancel your right-turn signal",
      "B": "Stop and set the handbrake",
      "C": "Check for traffic overtaking on your right",
      "D": "Select first gear"
    },
    "answer": "C"
  },
  {
    "number": 73,
    "question": "The main purpose of a box junction is",
    "image": null,
    "options": {
      "A": "To prevent junctions becoming blocked by queuing traffic",
      "B": "To speed traffic up",
      "C": "To stop you turning right at a crossroads",
      "D": "To slow traffic down"
    },
    "answer": "A"
  },
  {
    "number": 74,
    "question": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:",
    "image": null,
    "options": {
      "A": "Wait because they will take longer to cross",
      "B": "Rev your engine to make them hurry",
      "C": "Flash your lights in case they have not heard you",
      "D": "Wave them to cross as quickly as they can"
    },
    "answer": "A"
  },
  {
    "number": 75,
    "question": "You are approaching a right-hand bend. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6ffbce5b8d.jpg",
    "options": {
      "A": "Keep well to the left for a better view around the bend",
      "B": "Keep well to the left as it makes the bend faster",
      "C": "Keep well to the right to avoid anything in the gutter",
      "D": "Keep well to the right to make the bend less sharp"
    },
    "answer": "A"
  },
  {
    "number": 76,
    "question": "When are passengers allowed to ride in a caravan that is being towed?",
    "image": null,
    "options": {
      "A": "When travelling on minor roads",
      "B": "When they are over 18 years old",
      "C": "When travelling on motorways",
      "D": "Never"
    },
    "answer": "D"
  },
  {
    "number": 77,
    "question": "Your car is fitted with power assisted steering. This will make the steering seem",
    "image": null,
    "options": {
      "A": "Noisier",
      "B": "Lighter",
      "C": "Heavier",
      "D": "Quieter"
    },
    "answer": "B"
  },
  {
    "number": 78,
    "question": "You are dazzled at night by the lights of the vehicle behind you. You should:",
    "image": null,
    "options": {
      "A": "Set your mirror to anti-dazzle",
      "B": "Brake sharply to a stop",
      "C": "Set your mirror to dazzle the other driver",
      "D": "Switch your rear lights on and off"
    },
    "answer": "A"
  },
  {
    "number": 79,
    "question": "A fundamental rule when driving on a dual carriageway is:",
    "image": null,
    "options": {
      "A": "Use the lane that has least traffic",
      "B": "Keep to the left lane unless overtaking",
      "C": "Try to keep above 50 kph to prevent congestion",
      "D": "Overtake on the side that is clearest"
    },
    "answer": "B"
  },
  {
    "number": 80,
    "question": "You are driving on an icy road. How can you avoid wheel spin?",
    "image": null,
    "options": {
      "A": "Drive at a slow speed in as high gear as possible",
      "B": "Use the handbrake if the wheels start to slip",
      "C": "Brake gently and repeatedly",
      "D": "Drive in a low gear at all times"
    },
    "answer": "A"
  },
  {
    "number": 81,
    "question": "This marking appears on the road just before a",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7020f94ff2.jpg",
    "options": {
      "A": "No entry sign",
      "B": "No through road sign",
      "C": "Give way sign",
      "D": "Stop sign"
    },
    "answer": "C"
  },
  {
    "number": 82,
    "question": "What does tailgating mean?",
    "image": null,
    "options": {
      "A": "When a vehicle is with its back doors open",
      "B": "When stationary vehicles are too close in a queue",
      "C": "When a vehicle delivering goods has its tailgate down",
      "D": "When a driver is following another vehicle too closely"
    },
    "answer": "D"
  },
  {
    "number": 83,
    "question": "You are driving a slow moving car on a narrow winding road. In order to let other vehicles overtake you should",
    "image": null,
    "options": {
      "A": "Wave to them to pass",
      "B": "Pull in safely when you can",
      "C": "Keep left and hold your speed",
      "D": "Show a left turn signal"
    },
    "answer": "B"
  },
  {
    "number": 84,
    "question": "On the dual carriageway the hard shoulder should be used",
    "image": null,
    "options": {
      "A": "For a short rest when tired",
      "B": "To answer a mobile phone",
      "C": "When an emergency arises",
      "D": "To check a road atlas"
    },
    "answer": "C"
  },
  {
    "number": 85,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7045180ba4.jpg",
    "options": {
      "A": "Crossroads",
      "B": "Level crossing without gate",
      "C": "Ahead only",
      "D": "Level crossing with gate"
    },
    "answer": "A"
  },
  {
    "number": 86,
    "question": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
    "image": null,
    "options": {
      "A": "30 meters (98 feet)",
      "B": "20.5 meters  (67 feet)",
      "C": "10 meters (33 feet)",
      "D": "15 meters (49 feet)"
    },
    "answer": "B"
  },
  {
    "number": 87,
    "question": "A learner driver you are following stalls at a junction. What should you do?",
    "image": null,
    "options": {
      "A": "Sound your horn and flash your lights",
      "B": "Steer around them and drive on",
      "C": "Shout instructions",
      "D": "Be patient and wait for them to move on"
    },
    "answer": "D"
  },
  {
    "number": 88,
    "question": "An MOT certificate is normally valid for",
    "image": null,
    "options": {
      "A": "Three years after the date it was issued",
      "B": "30,000 miles",
      "C": "10,000 miles",
      "D": "One year after the date it was issued"
    },
    "answer": "D"
  },
  {
    "number": 89,
    "question": "A cycle lane is marked by a solid white line. You must not drive or park in it",
    "image": null,
    "options": {
      "A": "At any time",
      "B": "During its period of operation",
      "C": "During the rush hour",
      "D": "If a cyclist is using it"
    },
    "answer": "B"
  },
  {
    "number": 90,
    "question": "At which pedestrian crossing are cyclists allowed to ride across?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa70d94481ca.jpg",
    "options": {
      "A": "Puffin",
      "B": "Toucan",
      "C": "Zebra",
      "D": "Pelican"
    },
    "answer": "B"
  },
  {
    "number": 91,
    "question": "A police officer orders you to stop and he finds you have a faulty tyre. Who is responsible for the tyre?",
    "image": null,
    "options": {
      "A": "Whoever issued the VRT certificate",
      "B": "The previous owner",
      "C": "Whoever services the car",
      "D": "You, the driver"
    },
    "answer": "D"
  },
  {
    "number": 92,
    "question": "You are driving in traffic at the speed limit for the road. The driver behind is going to overtake. You should:",
    "image": null,
    "options": {
      "A": "Keep a steady course and allow the driver behind to overtake",
      "B": "Accelerate to get away from the driver behind",
      "C": "Move closer to the car ahead, so the driver behind has no room to overtake",
      "D": "Wave the driver behind to overtake when it is safe"
    },
    "answer": "A"
  },
  {
    "number": 93,
    "question": "You are driving past a lane of parked cars and you notice a ball bouncing out into the road ahead. What should you do?",
    "image": null,
    "options": {
      "A": "Stop and wave the children across to fetch their ball",
      "B": "Slow down and be prepared to stop for children",
      "C": "Continue driving at the same speed and sound your horn",
      "D": "Continue driving at the same speed and flash your headlights"
    },
    "answer": "B"
  },
  {
    "number": 94,
    "question": "You are towing a caravan. Which is the safest type of rear-view mirror to use?",
    "image": null,
    "options": {
      "A": "Interior wide-angle mirror",
      "B": "Ordinary interior mirror",
      "C": "Ordinary door mirrors",
      "D": "Extended-arm side mirrors"
    },
    "answer": "D"
  },
  {
    "number": 95,
    "question": "You are trying to move off on snow. You should use",
    "image": null,
    "options": {
      "A": "The lowest gear you can",
      "B": "The highest gear you can",
      "C": "A high engine speed",
      "D": "The handbrake and footbrake together"
    },
    "answer": "B"
  },
  {
    "number": 96,
    "question": "When going straight ahead at a roundabout you should:",
    "image": null,
    "options": {
      "A": "Indicate right when approaching the roundabout",
      "B": "Indicate left when approaching the roundabout",
      "C": "Not indicate at any time",
      "D": "Indicate left before leaving the roundabout"
    },
    "answer": "D"
  },
  {
    "number": 97,
    "question": "You are driving in fog. Why should you keep well back from the vehicle in front?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa71195cfe4b.jpg",
    "options": {
      "A": "In case it stops suddenly",
      "B": "In case its brake lights dazzle you",
      "C": "In case its fog lights dazzle you",
      "D": "In case it changes direction suddenly"
    },
    "answer": "A"
  },
  {
    "number": 98,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa71259656af.jpg",
    "options": {
      "A": "No through road",
      "B": "Telephone box ahead",
      "C": "T-junction",
      "D": "Toilet ahead"
    },
    "answer": "A"
  },
  {
    "number": 99,
    "question": "Apart from suffering any punishment according to law, what will a disqualified driver has to do to obtain a driving licence?",
    "image": null,
    "options": {
      "A": "Re-apply as for a new driver after expiry of disqualification period and must re-sit and pass both the theory test and test of skills and behaviour.",
      "B": "Pay any outstanding fines, submit a new licence application and re-sit and pass the theory test at any time during disqualification period.",
      "C": "Simply re-sit and pass the test of skills and behaviour.",
      "D": "Wait for any disqualification period to pass and apply for a duplicate driving licence."
    },
    "answer": "A"
  },
  {
    "number": 100,
    "question": "You are taking drugs that are likely to affect you driving. What should you do?",
    "image": null,
    "options": {
      "A": "Drive only for short distances",
      "B": "Only drive if accompanied by a full licence holder",
      "C": "Limit your driving to essential journeys",
      "D": "Seek medical advice before driving"
    },
    "answer": "D"
  },
  {
    "number": 101,
    "question": "Motorcycles ride in day light with their headlights switched on because",
    "image": null,
    "options": {
      "A": "It is legal requirement",
      "B": "There is a speed trap ahead",
      "C": "They need to be seen",
      "D": "There are speed humps ahead"
    },
    "answer": "C"
  },
  {
    "number": 102,
    "question": "In daylight, an approaching motorcyclist is using a dipped headlight. Why?",
    "image": null,
    "options": {
      "A": "To stop the battery overcharging",
      "B": "The rider is inviting you to proceed",
      "C": "To improve the rider &rsquo;s vision",
      "D": "So that the rider can be seen more easily"
    },
    "answer": "D"
  },
  {
    "number": 103,
    "question": "You want to turn right from a main road into a side road. Just before you turn you should",
    "image": null,
    "options": {
      "A": "Select first gear",
      "B": "Stop and set the handbrake",
      "C": "Cancel your right-turn signal",
      "D": "Check for traffic overtaking on your right"
    },
    "answer": "D"
  },
  {
    "number": 104,
    "question": "Which of the following are at greatest risk from other road users?",
    "image": null,
    "options": {
      "A": "Lorry drivers",
      "B": "Busy bus drivers",
      "C": "Motorcycles",
      "D": "Learner car drivers"
    },
    "answer": "C"
  },
  {
    "number": 105,
    "question": "When MUST you use dipped lights during the day?",
    "image": null,
    "options": {
      "A": "When parking",
      "B": "Along narrow streets",
      "C": "All the time",
      "D": "In poor visibility"
    },
    "answer": "D"
  },
  {
    "number": 106,
    "question": "Before reversing you should always check:",
    "image": null,
    "options": {
      "A": "Your side mirrors",
      "B": "Your rear view mirror",
      "C": "The area behind you",
      "D": "All round"
    },
    "answer": "D"
  },
  {
    "number": null,
    "question": "&nbsp;\n                                    What do these road markings mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa71e768a921.jpg",
    "options": {
      "A": "No stopping or parking permitted.",
      "B": "Central limit of dual carriageway and may be crossed only when overtaking.",
      "C": "Lines on the road just to mark the lanes and guide traffic flows, which have no legal or safety implications.",
      "D": "Continuous solid double white line (Centre line) which vehicles must not drive over , across or astride except to enter a side road, unless prohibited from doing so by appropriate signage."
    },
    "answer": "D"
  },
  {
    "number": 108,
    "question": "When about to overtake a long vehicle or lorry you should:",
    "image": null,
    "options": {
      "A": "Drive close to the lorry in order to pass more quickly",
      "B": "Sound the horn to warn the driver that you are there",
      "C": "Stay well back from the lorry to obtain a better view",
      "D": "Flash your lights and wait for the driver to signal when it is safe"
    },
    "answer": "C"
  },
  {
    "number": 109,
    "question": "You are travelling along the left-hand lane of a three-lane motorway. Traffic is joining from a slip road. You should",
    "image": null,
    "options": {
      "A": "Move to another lane",
      "B": "Race the other vehicles",
      "C": "Switch on your hazard lights",
      "D": "Maintain a steady speed"
    },
    "answer": "A"
  },
  {
    "number": 110,
    "question": "Another driver does something that upsets you. You should:",
    "image": null,
    "options": {
      "A": "Let them know how you feel",
      "B": "Sound your horn",
      "C": "Try not to react",
      "D": "Flash your headlights several times"
    },
    "answer": "C"
  },
  {
    "number": 111,
    "question": "You are driving and ahead of you there is a vehicle with a flashing amber beacon. This means it is:",
    "image": null,
    "options": {
      "A": "Slow moving",
      "B": "A school crossing patrol",
      "C": "A doctor &rsquo;s car",
      "D": "Broken down"
    },
    "answer": "A"
  },
  {
    "number": 112,
    "question": "What does the term &#39;blind spot &#39;mean for a driver?",
    "image": null,
    "options": {
      "A": "An area not covered by your mirrors",
      "B": "An area not covered by your headlights",
      "C": "An area covered by your right-hand mirror",
      "D": "An area covered by your left-hand mirror"
    },
    "answer": "A"
  },
  {
    "number": 113,
    "question": "You enter a road where there are road humps. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7217c711d7.jpg",
    "options": {
      "A": "Always keep to the maximum legal speed",
      "B": "Accelerate quickly between each one",
      "C": "Drive slowly at school times only",
      "D": "Maintain a reduced speed throughout"
    },
    "answer": "D"
  },
  {
    "number": 114,
    "question": "You see a pedestrian with a white stick and red band. This means that the person is",
    "image": null,
    "options": {
      "A": "Physically disabled",
      "B": "Deaf and blind",
      "C": "Deaf only",
      "D": "Blind only"
    },
    "answer": "B"
  },
  {
    "number": 115,
    "question": "When should you give signals?",
    "image": null,
    "options": {
      "A": "In traffic only during the hours of darkness or in bad weather.",
      "B": "To give you priority over other traffic when changing lanes or before pulling out.",
      "C": "Only when joining a dual carriageway from a slip road so you don &#39;t have to give way",
      "D": "At all times in order to alert other road users of your intended actions."
    },
    "answer": "D"
  },
  {
    "number": 116,
    "question": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:",
    "image": null,
    "options": {
      "A": "Rev your engine to make them hurry",
      "B": "Wave them to cross as quickly as they can",
      "C": "Wait because they will take longer to cross",
      "D": "Flash your lights in case they have not heard you"
    },
    "answer": "C"
  },
  {
    "number": 117,
    "question": "At traffic lights, amber on its own means:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7227690e9f.png",
    "options": {
      "A": "Go if the way is clear",
      "B": "Go if no pedestrians are crossing",
      "C": "Prepare to go",
      "D": "Stop at the stop line"
    },
    "answer": "D"
  },
  {
    "number": 118,
    "question": "You meet an obstruction on your side of the road. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72598be3e4.jpg",
    "options": {
      "A": "Give way to oncoming traffic",
      "B": "Wave oncoming vehicles through",
      "C": "Drive on; it is your right of way",
      "D": "Accelerate to get past first"
    },
    "answer": "A"
  },
  {
    "number": 119,
    "question": "You will use more fuel if your tyres are",
    "image": null,
    "options": {
      "A": "Of different makes",
      "B": "New and hardly used",
      "C": "Under -inflated",
      "D": "Over-inflated"
    },
    "answer": "C"
  },
  {
    "number": 120,
    "question": "To correct a rear-wheel skid you should",
    "image": null,
    "options": {
      "A": "Apply your handbrake",
      "B": "Steer away from it",
      "C": "Not steer at all",
      "D": "Steer into it"
    },
    "answer": "D"
  },
  {
    "number": 121,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa726ee4e18e.jpg",
    "options": {
      "A": "No vehicles over 30 tonnes",
      "B": "End of 30 kph zone",
      "C": "New speed limit 20 kph",
      "D": "Minimum speed limit 30kph"
    },
    "answer": "B"
  },
  {
    "number": 122,
    "question": "You stopped for pedestrians waiting to cross at a zebra crossing. They did not start to cross. What should you do?",
    "image": null,
    "options": {
      "A": "Wave them to cross",
      "B": "Be patient and wait",
      "C": "Sound your horn",
      "D": "Drive on"
    },
    "answer": "B"
  },
  {
    "number": 123,
    "question": "A driver has had a few alcoholic drinks, what advice should you give them?",
    "image": null,
    "options": {
      "A": "Drink several cups of coffee before driving home",
      "B": "Take extra care when driving home",
      "C": "Take a short sleep before driving home",
      "D": "Do not drive home"
    },
    "answer": "D"
  },
  {
    "number": 124,
    "question": "You are driving in town. There is a bus at the bus stop on the other side of the road. Why should you be careful?",
    "image": null,
    "options": {
      "A": "Pedestrians may come from behind the bus",
      "B": "The bus may have broken down",
      "C": "The bus may remain stationary",
      "D": "The bus may move off suddenly"
    },
    "answer": "A"
  },
  {
    "number": 125,
    "question": "You are travelling at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should",
    "image": null,
    "options": {
      "A": "Accelerate to make a gap behind you",
      "B": "Maintain your speed to prevent the vehicle from overtaking",
      "C": "Touch the brakes sharply to show your brake lights",
      "D": "Allow the vehicle to overtake"
    },
    "answer": "D"
  },
  {
    "number": 126,
    "question": "When you apply to renew your vehicle Excise Duty (tax disc) you must have",
    "image": null,
    "options": {
      "A": "A valid driving licence",
      "B": "The old tax disc",
      "C": "Valid insurance",
      "D": "The handbook"
    },
    "answer": "C"
  },
  {
    "number": 127,
    "question": "A toucan crossing is different from other crossings because",
    "image": null,
    "options": {
      "A": "A traffic warden controls it",
      "B": "Two flashing lights control it",
      "C": "Moped riders can use it",
      "D": "Cyclists can use it"
    },
    "answer": "D"
  },
  {
    "number": 128,
    "question": "The vehicle you are driving pulls to one side when you brake. What is the most likely cause of the problem?",
    "image": null,
    "options": {
      "A": "Low levels of power steering fluid",
      "B": "Poorly adjusted brakes",
      "C": "A faulty handbrake",
      "D": "Incorrect tyre pressure"
    },
    "answer": "B"
  },
  {
    "number": 129,
    "question": "You are driving in very wet weather. Your vehicle begins to slide. This affect is called:",
    "image": null,
    "options": {
      "A": "Weaving",
      "B": "Fading",
      "C": "Hosing",
      "D": "Aquaplaning"
    },
    "answer": "D"
  },
  {
    "number": 130,
    "question": "You are driving at night on an dark, unlit road following a slower moving vehicle. You should:",
    "image": null,
    "options": {
      "A": "Use dipped beam headlights",
      "B": "Use full beam headlights",
      "C": "Switch off you headlights",
      "D": "Flash your headlights"
    },
    "answer": "A"
  },
  {
    "number": 131,
    "question": "Driving with under-inflated (low) tyres can affect",
    "image": null,
    "options": {
      "A": "Engine temperatures",
      "B": "Oil pressure",
      "C": "Fuel consumption",
      "D": "Judgment of the driver"
    },
    "answer": "C"
  },
  {
    "number": 132,
    "question": "The aim of an Active Traffic Management scheme on a motorway is to",
    "image": null,
    "options": {
      "A": "Prevent overtaking",
      "B": "Reduce congestion",
      "C": "Prevent tailgating",
      "D": "Reduce rest stops"
    },
    "answer": "B"
  },
  {
    "number": 133,
    "question": "What should a driver do at a pelican crossing when the red and amber lights are on?",
    "image": null,
    "options": {
      "A": "Always wait for the green light before proceeding",
      "B": "Give way to any pedestrians on the crossing",
      "C": "Wait for the red-and amber light before proceeding",
      "D": "Signal the pedestrian to cross"
    },
    "answer": "A"
  },
  {
    "number": 134,
    "question": "An elderly person &rsquo;s driving ability could be affected because they may be unable to:",
    "image": null,
    "options": {
      "A": "Understand road signs",
      "B": "React very quickly",
      "C": "Obtain car insurance",
      "D": "Give signals correctly"
    },
    "answer": "B"
  },
  {
    "number": 135,
    "question": "Motorcars must first have an MOT certificate when they are",
    "image": null,
    "options": {
      "A": "Seven (7) years old",
      "B": "One (1) year old",
      "C": "Five (5) years old",
      "D": "Three (3) years old"
    },
    "answer": "D"
  },
  {
    "number": 136,
    "question": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
    "image": null,
    "options": {
      "A": "30 meters (98 feet)",
      "B": "15 meters (49 feet)",
      "C": "10 meters (33 feet)",
      "D": "20.5 meters  (67 feet)"
    },
    "answer": "D"
  },
  {
    "number": 137,
    "question": "&nbsp;You MUST obey signs giving \n                                    \n                                        orders\n                                    \n                                    . These signs are mostly in:",
    "image": null,
    "options": {
      "A": "Red triangles",
      "B": "Green rectangles",
      "C": "Blue rectangles",
      "D": "Red   circles"
    },
    "answer": "D"
  },
  {
    "number": 138,
    "question": "You are parking your car. You have some valuables, which you are unable to take with you. What should you do?",
    "image": null,
    "options": {
      "A": "Lock then out of sight",
      "B": "Park in an unlit side road",
      "C": "Put them under the driver &#39;s seat",
      "D": "Park near a police station"
    },
    "answer": "A"
  },
  {
    "number": 139,
    "question": "&#39;Red Routes &#39;in major cities have been introduced to",
    "image": null,
    "options": {
      "A": "Help the traffic flow",
      "B": "Allow lorries to load more freely",
      "C": "Provide better parking",
      "D": "Raise the speed limits"
    },
    "answer": "A"
  },
  {
    "number": 140,
    "question": "In freezing conditions you should expect stopping distances to increase by up to",
    "image": null,
    "options": {
      "A": "Four (4) times",
      "B": "Ten (10)  times",
      "C": "Five (5) times",
      "D": "Seven (7) times"
    },
    "answer": "B"
  },
  {
    "number": 141,
    "question": "You should avoid &#39;coasting &#39;your car because it could:",
    "image": null,
    "options": {
      "A": "Damage the suspension",
      "B": "Flatten the battery",
      "C": "Increase tyre wear",
      "D": "Reduce steering control"
    },
    "answer": "D"
  },
  {
    "number": 142,
    "question": "Front fog lights may be used ONLY if:",
    "image": null,
    "options": {
      "A": "They are fitted above the bumper",
      "B": "An audible warning device is used",
      "C": "They are not as bright as the headlights",
      "D": "Visibility is seriously reduced"
    },
    "answer": "D"
  },
  {
    "number": 143,
    "question": "It is essential that tyre pressures be checked regularly. When should this be done?",
    "image": null,
    "options": {
      "A": "When the tyres are hot",
      "B": "After filling the vehicle with fuel",
      "C": "After a long journey",
      "D": "When the tyres are cold"
    },
    "answer": "D"
  },
  {
    "number": 144,
    "question": "You are approaching a small roundabout. The long vehicle in front is signaling left but is positioned over to the right. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72ba346b96.png",
    "options": {
      "A": "Sound your horn",
      "B": "Keep well back",
      "C": "Overtake on the left",
      "D": "Follow the same course as the lorry"
    },
    "answer": "B"
  },
  {
    "number": 145,
    "question": "You take some cough medicine given to you by a friend. What should you do before driving?",
    "image": null,
    "options": {
      "A": "Check the label to see if the medicine will affect your driving",
      "B": "Drink some strong coffee one hour before driving",
      "C": "Ask your friend if taking the medicine affected their driving",
      "D": "Drive a short distance to see if the medicine is affecting your driving"
    },
    "answer": "A"
  },
  {
    "number": 146,
    "question": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
    "image": null,
    "options": {
      "A": "Any direction",
      "B": "Right",
      "C": "Left",
      "D": "Straight ahead"
    },
    "answer": "A"
  },
  {
    "number": 147,
    "question": "Front fog lights may be used ONLY if :",
    "image": null,
    "options": {
      "A": "You wish to overtake in bad weather",
      "B": "Visibility is seriously reduced",
      "C": "They prevent headlights glare on a wet road",
      "D": "Fitted by manufacturer"
    },
    "answer": "B"
  },
  {
    "number": 148,
    "question": "As a driver, how can you help the environment?",
    "image": null,
    "options": {
      "A": "By reducing your speed",
      "B": "By using leaded fuel",
      "C": "By driving faster",
      "D": "By driving with your windows down"
    },
    "answer": "A"
  },
  {
    "number": 149,
    "question": "Excessive or uneven wear in one or more tyres can be caused by faults in the:",
    "image": null,
    "options": {
      "A": "Steering Wheel",
      "B": "Exhaust system",
      "C": "Gearbox",
      "D": "Braking system"
    },
    "answer": "D"
  },
  {
    "number": 150,
    "question": "You will help your environment if you:",
    "image": null,
    "options": {
      "A": "Drive continually using full choke",
      "B": "Walk or cycle when you can",
      "C": "Accelerate and brake sharply",
      "D": "Reduce the tyre pressure"
    },
    "answer": "B"
  },
  {
    "number": 151,
    "question": "When driving through a tunnel you should",
    "image": null,
    "options": {
      "A": "Look out for variable message signs",
      "B": "Always use your windscreen wipers",
      "C": "Use your air conditioning system",
      "D": "Switch on your rear fog lights"
    },
    "answer": "A"
  },
  {
    "number": 152,
    "question": "You may drive over a footpath:",
    "image": null,
    "options": {
      "A": "If no pedestrians are near",
      "B": "To gain lawful access into a property",
      "C": "When the pavement is very wide",
      "D": "To overtake slow-moving traffic"
    },
    "answer": "B"
  },
  {
    "number": 153,
    "question": "What is the meaning of this traffic sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72e2144913.jpg",
    "options": {
      "A": "Bus lane ahead",
      "B": "End of two-way road",
      "C": "Give priority to vehicles coming towards you",
      "D": "You have priority over vehicles coming towards you"
    },
    "answer": "D"
  },
  {
    "number": 154,
    "question": "You must not reverse:",
    "image": null,
    "options": {
      "A": "In a built-up area",
      "B": "Into a side road",
      "C": "For longer than necessary",
      "D": "For more than a car &rsquo;s length"
    },
    "answer": "C"
  },
  {
    "number": 155,
    "question": "You are approaching traffic lights. Red and amber are showing. This means:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72f9adcc89.jpg",
    "options": {
      "A": "Pass the lights if the road is clear",
      "B": "There is a fault with the lights &ndash;take care",
      "C": "The lights are about are about to change to red",
      "D": "Wait for the green light before you pass the lights"
    },
    "answer": "D"
  },
  {
    "number": 156,
    "question": "Braking hard at a high speed on a sharp bend can make your vehicle",
    "image": null,
    "options": {
      "A": "More stable",
      "B": "Stall",
      "C": "Corner safely",
      "D": "Unstable"
    },
    "answer": "D"
  },
  {
    "number": 157,
    "question": "You must NOT sound your horn",
    "image": null,
    "options": {
      "A": "Between 10 pm and 6 am in a built-up area",
      "B": "Between 11.30 pm and 7 am in a built-up area",
      "C": "Between 11.30 pm and 6 am on any road",
      "D": "At any time in a built-up area"
    },
    "answer": "B"
  },
  {
    "number": 158,
    "question": "You are following a large lorry on a wet road. Spray makes it difficult to see. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7322d123ea.jpg",
    "options": {
      "A": "Drop back until you can see better",
      "B": "Speed up and overtake quickly",
      "C": "Put your headlights on full beam",
      "D": "Keep close to the lorry, away from the spray"
    },
    "answer": "A"
  },
  {
    "number": 159,
    "question": "What does the sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7b8d6ce565.jpg",
    "options": {
      "A": "No pedestrians allowed",
      "B": "Pedestrian crossing ahead",
      "C": "School crossing patrol",
      "D": "Pedestrian zone &ndash;no vehicles"
    },
    "answer": "B"
  },
  {
    "number": 160,
    "question": "There has been a collision. A motorcyclist is lying injured and unconscious. Unless it &#39;s essentially why should you usually NOT attempt to remove their helmet?",
    "image": null,
    "options": {
      "A": "This could result in more serious injury",
      "B": "Because you could scratch the helmet",
      "C": "They will get too cold if you do this",
      "D": "Because they may not want you to"
    },
    "answer": "A"
  },
  {
    "number": 161,
    "question": "A driver does something that upsets you. You should",
    "image": null,
    "options": {
      "A": "Let them know how you feel",
      "B": "Try not to react",
      "C": "Flash your headlights several times",
      "D": "Sound your horn"
    },
    "answer": "B"
  },
  {
    "number": 162,
    "question": "Your overall stopping distance will be longer when driving:",
    "image": null,
    "options": {
      "A": "In fog",
      "B": "At night",
      "C": "In strong winds",
      "D": "In the rain"
    },
    "answer": "D"
  },
  {
    "number": 163,
    "question": "You are driving past parked cars. You notice a bicycle wheel sticking out between them. What should you do?",
    "image": null,
    "options": {
      "A": "Slow down and be prepared to stop for a cyclist",
      "B": "Brake sharply and flash your headlights",
      "C": "Slow down and wave the cyclist across",
      "D": "Accelerate past quickly and sound your horn"
    },
    "answer": "A"
  },
  {
    "number": 164,
    "question": "Which of the following cars will use blue flashing beacons?",
    "image": null,
    "options": {
      "A": "Doctor on call",
      "B": "Motorway maintenance",
      "C": "Police patrol",
      "D": "Breakdown recovery"
    },
    "answer": "C"
  },
  {
    "number": 165,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7babbed5ff.jpg",
    "options": {
      "A": "Approaching traffic passes you on both sides",
      "B": "Pass either side to get to the same destination",
      "C": "Turn off at the next available junction",
      "D": "Give way to oncoming vehicles"
    },
    "answer": "B"
  },
  {
    "number": 166,
    "question": "As a driver what do you understand by the term &#39;Blind Spot &#39;?",
    "image": null,
    "options": {
      "A": "An area covered by your right hand mirror",
      "B": "An area not seen in your mirrors",
      "C": "An area covered by your left hand mirror",
      "D": "An area not covered by your headlights"
    },
    "answer": "B"
  },
  {
    "number": 167,
    "question": "After a breakdown you need to rejoin the main carriageway of a multilane- carriageway from the hard shoulder. You should:",
    "image": null,
    "options": {
      "A": "Move out onto the carriageway then build up your speed",
      "B": "Wait on the hard shoulder until someone flashes their headlights at you",
      "C": "Gain speed on the harder shoulder before moving out onto the carriageway",
      "D": "Move out onto the carriageway using your hazard lights"
    },
    "answer": "C"
  },
  {
    "number": 168,
    "question": "Why should you always reduce your speed when driving in fog?",
    "image": null,
    "options": {
      "A": "Because it is more difficult to see events ahead",
      "B": "Because the brakes do not work as well",
      "C": "Because the engine!s colder",
      "D": "Because you could be dazzled by other people!s fog lights"
    },
    "answer": "A"
  },
  {
    "number": 169,
    "question": "You lose your way on a busy road. What is the best action to take?",
    "image": null,
    "options": {
      "A": "Check a map, and keep going with the traffic flow",
      "B": "Shout to other drivers to ask them the way",
      "C": "Stop at traffic lights and ask pedestrians",
      "D": "Turn into a side road, stop and check a map"
    },
    "answer": "D"
  },
  {
    "number": 170,
    "question": "To supervise a learner driver you must:",
    "image": null,
    "options": {
      "A": "Be at least 23",
      "B": "Be an approved driving instructor",
      "C": "Hold an advanced driving certificate",
      "D": "Have held a full licence for at least 5 years"
    },
    "answer": "D"
  },
  {
    "number": 171,
    "question": "Why should you be parked before using a mobile phone?",
    "image": null,
    "options": {
      "A": "Because reception is better when stopped",
      "B": "Because the car electrics will be affected",
      "C": "So control of your vehicle is not affected",
      "D": "So a proper conversation can be held"
    },
    "answer": "C"
  },
  {
    "number": 172,
    "question": "You are about to go down a steep hill. To control the speed of your car you should:",
    "image": null,
    "options": {
      "A": "Select a low gear and use the brakes carefully",
      "B": "Select a high gear and use the brakes carefully",
      "C": "Select a low gear and avoid using the brakes",
      "D": "Select a high gear and use the brakes firmly"
    },
    "answer": "A"
  },
  {
    "number": 173,
    "question": "You should ONLY flash your headlights to other road users",
    "image": null,
    "options": {
      "A": "To show that you are giving way",
      "B": "To show that you are about to reverse",
      "C": "To let them know that you are there",
      "D": "To tell the that you have right of way"
    },
    "answer": "C"
  },
  {
    "number": 174,
    "question": "You arrive at the scene of a motorcycle accident. No other vehicle is involved. The rider is unconscious, lying in the middle of the road. The first thing you should do is:",
    "image": null,
    "options": {
      "A": "Move the rider out of the road",
      "B": "Warn other traffic",
      "C": "Clear the road of debris",
      "D": "Give the rider reassurance"
    },
    "answer": "B"
  },
  {
    "number": 175,
    "question": "An MOT certificate is normally valid for",
    "image": null,
    "options": {
      "A": "30,000 miles",
      "B": "One year after the date it was issued",
      "C": "10,000 miles",
      "D": "Three years after the date it was issued"
    },
    "answer": "B"
  },
  {
    "number": 176,
    "question": "In what situation are other drivers allowed to flash their headlights at you?",
    "image": null,
    "options": {
      "A": "To warn you danger is ahead",
      "B": "To tell you that they are giving way to you",
      "C": "To warn you of their presence",
      "D": "To warn you when you &#39;re breaking the speed limit"
    },
    "answer": "C"
  },
  {
    "number": 177,
    "question": "New petrol-engined cars have to be fitted with catalytic converters. The reason for this is to",
    "image": null,
    "options": {
      "A": "Reduce harmful exhaust emissions",
      "B": "Allow the exhaust system to be recycled",
      "C": "Control exhaust noise levels",
      "D": "Prolong the life of the exhaust system"
    },
    "answer": "A"
  },
  {
    "number": 178,
    "question": "When should you switch on your hazard warning lights?",
    "image": null,
    "options": {
      "A": "When you are towing a broken down vehicle",
      "B": "When you cannot avoid causing an obstruction",
      "C": "When you are parked on double yellow lines",
      "D": "When you are driving slowly due to bad weather"
    },
    "answer": "B"
  },
  {
    "number": 179,
    "question": "You are following other vehicles in fog with your lights on. How else can you reduce the chances of being involved in an accident?",
    "image": null,
    "options": {
      "A": "Keep close to the vehicle in front",
      "B": "Keep together with the faster vehicles",
      "C": "Reduce your speed and increase the gap",
      "D": "Use your main beam instead of dipped headlights"
    },
    "answer": "C"
  },
  {
    "number": 180,
    "question": "You are in a line of traffic. The driver behind you is following very closely. What action should you take?",
    "image": null,
    "options": {
      "A": "Slow down, gradually increasing the gap between you and the vehicle in front",
      "B": "Ignore the following driver and continue to travel within the speed limit",
      "C": "Signal left and wave the following driver past",
      "D": "Move over to a position just left of the centre line of the road"
    },
    "answer": "A"
  },
  {
    "number": 181,
    "question": "Before driving anyone else &rsquo;s motor vehicle you should make sure that:",
    "image": null,
    "options": {
      "A": "Your own vehicle has insurance cover",
      "B": "The vehicle is insured for your use",
      "C": "The vehicle owner has third party insurance cover",
      "D": "The owner has left the insurance documents in the vehicle"
    },
    "answer": "B"
  },
  {
    "number": 182,
    "question": "You are approaching a small roundabout. The long vehicle in front is signaling left but is positioned over to the right. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7c8a611e1e.jpg",
    "options": {
      "A": "Keep well back",
      "B": "Sound your horn",
      "C": "Overtake on the left",
      "D": "Follow the same course as the lorry"
    },
    "answer": "A"
  },
  {
    "number": 183,
    "question": "When going straight ahead at a roundabout you should:",
    "image": null,
    "options": {
      "A": "Indicate right when approaching the roundabout",
      "B": "Indicate left before leaving the roundabout",
      "C": "Indicate left when approaching the roundabout",
      "D": "Not indicate at any time"
    },
    "answer": "B"
  },
  {
    "number": 184,
    "question": "Your indicators may be difficult to see in bright sunlight. What should you do?",
    "image": null,
    "options": {
      "A": "Touch the brake several times to show the stop lamp(s)",
      "B": "Give an arm signal as well as using your indicator",
      "C": "Turn as quickly as you can"
    },
    "answer": "B"
  },
  {
    "number": 185,
    "question": "You must NOT sound your horn",
    "image": null,
    "options": {
      "A": "Between 11.30 pm and 7 am in a built-up area",
      "B": "Between 10 pm and 6 am in a built-up area",
      "C": "At any time in a built-up area",
      "D": "Between 11.30 pm and 6 am on any road"
    },
    "answer": "A"
  },
  {
    "number": 186,
    "question": "You must not reverse",
    "image": null,
    "options": {
      "A": "For more than a car &#39;s length",
      "B": "In built-up areas",
      "C": "For longer than necessary",
      "D": "Into a side road"
    },
    "answer": "C"
  },
  {
    "number": 187,
    "question": "Why are place names printed on the road surface?",
    "image": null,
    "options": {
      "A": "To enable you to change lanes early",
      "B": "To prevent you changing lanes",
      "C": "To warn you of oncoming traffic",
      "D": "To restrict the flow of traffic"
    },
    "answer": "A"
  },
  {
    "number": 188,
    "question": "Whilst driving on the motorway you have to slow down quickly due to a hazard. What should you do?",
    "image": null,
    "options": {
      "A": "Sound your horn",
      "B": "Switch on the headlights to full beam",
      "C": "Switch on your fog light",
      "D": "Switch on your hazard lights"
    },
    "answer": "D"
  },
  {
    "number": 189,
    "question": "Which of the following statements relates to Tailgating",
    "image": null,
    "options": {
      "A": "Park too close to the tail lift platform of a truck.",
      "B": "Driving so close and in such a way that you bully and intimidate the vehicle in front to force it to speed up or get out of your way",
      "C": "Driving too close to the vehicle in front creating a hazardous situation in that if it had to stop suddenly, you will be unable to avoid a collision.",
      "D": "Swerving from lane to lane and getting as close to the vehicle in front so you get to your destination faster."
    },
    "answer": "C"
  },
  {
    "number": 190,
    "question": "After driving out of fog and when visibility has returned to normal, you must",
    "image": null,
    "options": {
      "A": "Use your headlights on dipped beam",
      "B": "Switch off your fog lights",
      "C": "Use your windscreen wipers",
      "D": "Keep your rear fog light on"
    },
    "answer": "B"
  },
  {
    "number": 191,
    "question": "You are driving towards a pedestrian(zebra) crossing. Waiting to cross is a person in a wheelchair. You should:",
    "image": null,
    "options": {
      "A": "Wave to the person to wait",
      "B": "Wave to the person to cross",
      "C": "Be prepared to stop",
      "D": "Continue on your way"
    },
    "answer": "C"
  },
  {
    "number": 192,
    "question": "Why could keeping the clutch down or selecting neutral for long periods of time be dangerous?",
    "image": null,
    "options": {
      "A": "You will have less steering and braking control",
      "B": "Fuel spillage will occur",
      "C": "Engine damage may be caused",
      "D": "It will wear tyres out more quickly"
    },
    "answer": "A"
  },
  {
    "number": 193,
    "question": "A driver has had a few alcoholic drinks, what advice should you give them?",
    "image": null,
    "options": {
      "A": "Take a short sleep before driving home",
      "B": "Drink several cups of coffee before driving home",
      "C": "Take extra care when driving home",
      "D": "Do not drive home"
    },
    "answer": "D"
  },
  {
    "number": 194,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7cbd633165.jpg",
    "options": {
      "A": "Turn left for ferry terminal",
      "B": "No through road on the left",
      "C": "No entry for traffic turning left",
      "D": "Turn left for parking area"
    },
    "answer": "B"
  },
  {
    "number": 195,
    "question": "Your car is fitted with power assisted steering. This will make the steering seem",
    "image": null,
    "options": {
      "A": "Heavier",
      "B": "Noisier",
      "C": "Quieter",
      "D": "Lighter"
    },
    "answer": "D"
  },
  {
    "number": 196,
    "question": "Catalytic converters are fitted to make the",
    "image": null,
    "options": {
      "A": "Engines produce more power",
      "B": "Exhaust fumes cleaner",
      "C": "Engines run quietly",
      "D": "Exhaust systems easier to replace"
    },
    "answer": "B"
  },
  {
    "number": 197,
    "question": "&#39;Tailgating &#39;usually means",
    "image": null,
    "options": {
      "A": "Driving with rear fog lights on",
      "B": "Following another vehicle too closely",
      "C": "Reversing into a parking space",
      "D": "Using the rear door of a hatchback car"
    },
    "answer": "B"
  },
  {
    "number": 198,
    "question": "Which of these vehicles is LEAST likely to be affected by strong crosswinds?",
    "image": null,
    "options": {
      "A": "Motorcyclists",
      "B": "High-sided vehicles",
      "C": "Cars",
      "D": "Cyclists"
    },
    "answer": "C"
  },
  {
    "number": 199,
    "question": "A toucan crossing is different from other crossings because",
    "image": null,
    "options": {
      "A": "Cyclists can use it",
      "B": "A traffic warden controls it",
      "C": "Two flashing lights control it",
      "D": "Moped riders can use it"
    },
    "answer": "A"
  },
  {
    "number": 200,
    "question": "What is the national speed limit, unless otherwise indicated, on dual carriageways for cars and motorcycles?",
    "image": null,
    "options": {
      "A": "50 mph",
      "B": "70 mph",
      "C": "80 mph",
      "D": "100 mph"
    },
    "answer": "B"
  },
  {
    "number": 201,
    "question": "The main cause of brake pedal fade is:",
    "image": null,
    "options": {
      "A": "The brakes out of adjustment",
      "B": "The brakes overheating",
      "C": "Oil in the brakes",
      "D": "Air in brake fluid"
    },
    "answer": "B"
  },
  {
    "number": 202,
    "question": "A strong cross wind is least likely to affect which of these vehicles?",
    "image": null,
    "options": {
      "A": "High-sided vehicles",
      "B": "Motorcycles",
      "C": "Cyclists",
      "D": "Cars"
    },
    "answer": "D"
  },
  {
    "number": 203,
    "question": "You are following a vehicle on a wet and slippery road. You should leave a time gap of at least",
    "image": null,
    "options": {
      "A": "Two (2) seconds",
      "B": "Three (3) seconds",
      "C": "Four (4) seconds",
      "D": "One (1) second"
    },
    "answer": "C"
  },
  {
    "number": 204,
    "question": "If you see a pedestrian carrying a white stick, this shows that the person is: &nbsp;This shows that the person is:",
    "image": null,
    "options": {
      "A": "Elderly",
      "B": "Deaf",
      "C": "Disabled",
      "D": "Blind"
    },
    "answer": "D"
  },
  {
    "number": 205,
    "question": "When driving through a tunnel you should",
    "image": null,
    "options": {
      "A": "Look out for variable message signs",
      "B": "Use your air conditioning system",
      "C": "Always use your windscreen wipers",
      "D": "Switch on your rear fog lights"
    },
    "answer": "A"
  },
  {
    "number": 206,
    "question": "When driving through a Ford or flood water, what gear should you use?",
    "image": null,
    "options": {
      "A": "Reverse",
      "B": "First or second",
      "C": "Fifth",
      "D": "Third"
    },
    "answer": "B"
  },
  {
    "number": 207,
    "question": "What is the national speed limit for cars and motorcycles when travelling in the right-hand lane of a motorway?",
    "image": null,
    "options": {
      "A": "70 mph",
      "B": "50 mph",
      "C": "80 mph",
      "D": "60 mph"
    },
    "answer": "A"
  },
  {
    "number": 208,
    "question": "If you are at a junction with limited visibility, you should:",
    "image": null,
    "options": {
      "A": "Creep forward, looking to the left",
      "B": "Be ready to move off quickly",
      "C": "Creep forward, looking to the right",
      "D": "Creep forward, looking both ways"
    },
    "answer": "D"
  },
  {
    "number": 209,
    "question": "You are driving past parked cars. You notice a wheel of a bicycle sticking out between them. What should you do?",
    "image": null,
    "options": {
      "A": "Slow down and be prepared to stop for a cyclist",
      "B": "Accelerate past quickly and sound your horn",
      "C": "Slow down and wave the cyclist across",
      "D": "Brake sharply and flash your headlights"
    },
    "answer": "A"
  },
  {
    "number": 210,
    "question": "Whilst driving, the fog clears and you can see more clearly. You must remember to",
    "image": null,
    "options": {
      "A": "Switch off the demister",
      "B": "Close any open windows",
      "C": "Switch off the fog lights",
      "D": "Reduce your speed"
    },
    "answer": "C"
  },
  {
    "number": 211,
    "question": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because",
    "image": null,
    "options": {
      "A": "They use diesel power",
      "B": "They use electric power",
      "C": "They do not operate during rush hour",
      "D": "They use quieter roads"
    },
    "answer": "B"
  },
  {
    "number": 212,
    "question": "When should you give signals?",
    "image": null,
    "options": {
      "A": "To give you priority over other traffic when changing lanes or before pulling out.",
      "B": "In traffic only during the hours of darkness or in bad weather.",
      "C": "At all times in order to alert other road users of your intended actions.",
      "D": "Only when joining a dual carriageway from a slip road so you don &#39;t have to give way"
    },
    "answer": "C"
  },
  {
    "number": 213,
    "question": "What shape is a STOP sign?",
    "image": null,
    "options": {
      "A": "Octagonal",
      "B": "Square",
      "C": "Circular",
      "D": "Triangular"
    },
    "answer": "A"
  },
  {
    "number": 214,
    "question": "You are invited to a pub lunch. You know that you will have to drive in the evening. What is your best course of action?",
    "image": null,
    "options": {
      "A": "Eat a hot meal with your alcohol drinks",
      "B": "Have some milk before drinking alcohol",
      "C": "Avoid mixing your alcoholic drinks",
      "D": "Not drink any alcohol at all"
    },
    "answer": "D"
  },
  {
    "number": 215,
    "question": "You are driving at night on an dark, unlit road following a slower moving vehicle. You should:",
    "image": null,
    "options": {
      "A": "Flash your headlights",
      "B": "Use dipped beam headlights",
      "C": "Use full beam headlights",
      "D": "Switch off you headlights"
    },
    "answer": "B"
  },
  {
    "number": 216,
    "question": "When a roof rack is not in use it should be removed. Why?",
    "image": null,
    "options": {
      "A": "It is illegal",
      "B": "It will waste fuel",
      "C": "It will affect your braking",
      "D": "It will affect the suspension"
    },
    "answer": "B"
  },
  {
    "number": 217,
    "question": "At a puffin crossing, which colour follows the green signal?",
    "image": null,
    "options": {
      "A": "Flashing green",
      "B": "Flashing amber",
      "C": "Steady red",
      "D": "Steady amber"
    },
    "answer": "D"
  },
  {
    "number": 218,
    "question": "You are driving a slow moving car on a narrow winding road. &nbsp;You should",
    "image": null,
    "options": {
      "A": "Pull in safely when you can, to let following vehicles overtake",
      "B": "Wave following vehicles past you if you think they can overtake quickly",
      "C": "Keep well out to stop vehicles overtaking dangerously",
      "D": "Give a left signal when it is safe for vehicles to overtake you"
    },
    "answer": "A"
  },
  {
    "number": 219,
    "question": "Who has priority at an unmarked crossroads?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d372a25d4.jpg",
    "options": {
      "A": "The driver who is going faster",
      "B": "The driver on the wider road",
      "C": "No one",
      "D": "The driver of the larger vehicle"
    },
    "answer": "C"
  },
  {
    "number": 220,
    "question": "You are driving downhill. There is a car parked on the other side of the road partly blocking the road. Large, slow lorries are coming towards you. You should:",
    "image": null,
    "options": {
      "A": "Pull over on the right behind the parked car",
      "B": "Speed up and get past quickly",
      "C": "Slow down and give way",
      "D": "Keep going because you have the right of way"
    },
    "answer": "C"
  },
  {
    "number": 221,
    "question": "You MUST obey signs giving orders. These signs are mostly in",
    "image": null,
    "options": {
      "A": "Red circles",
      "B": "Blue rectangles",
      "C": "Red Triangles",
      "D": "Green rectangles"
    },
    "answer": "A"
  },
  {
    "number": 222,
    "question": "You keep well back while waiting to overtake a large lorry. Another car fills the gap. You should:",
    "image": null,
    "options": {
      "A": "Flash your headlights",
      "B": "Sound your horn",
      "C": "Start to overtake",
      "D": "Drop back further"
    },
    "answer": "D"
  },
  {
    "number": 223,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d43d0ffca.jpg",
    "options": {
      "A": "No footpath ahead",
      "B": "Pedestrian crossing ahead",
      "C": "School crossing ahead",
      "D": "Pedestrians only ahead"
    },
    "answer": "B"
  },
  {
    "number": 224,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d5a566811.jpg",
    "options": {
      "A": "Trams only",
      "B": "Level crossing without barrier or gate",
      "C": "Level crossing with barrier or gate",
      "D": "Trams crossing ahead"
    },
    "answer": "B"
  },
  {
    "number": 225,
    "question": "Where should you take particular care to look out for motorcyclists and cyclists?",
    "image": null,
    "options": {
      "A": "At junctions",
      "B": "On one-way streets",
      "C": "At zebra crossings",
      "D": "On dual carriageways"
    },
    "answer": "A"
  },
  {
    "number": 226,
    "question": "Whilst driving you have an accident in which someone is injured. You must report this to the police within",
    "image": null,
    "options": {
      "A": "7 days",
      "B": "36 hours",
      "C": "12 hours",
      "D": "24 hours"
    },
    "answer": "D"
  },
  {
    "number": 227,
    "question": "When you approach a bus that is about to move off from a bus stop you should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d80e4b852.jpg",
    "options": {
      "A": "Allow it to pull away, if it is safe to do so",
      "B": "Get past before it moves",
      "C": "Flash your headlights as you approach",
      "D": "Signal left and wave the bus on"
    },
    "answer": "A"
  },
  {
    "number": 228,
    "question": "If you are feeling tired it is best to stop as soon as you can. Until then you should:",
    "image": null,
    "options": {
      "A": "Gently tap the steering wheel",
      "B": "Increase your speed to find a stopping place quickly",
      "C": "Keep changing speed to improve concentration",
      "D": "Ensure a supply of fresh air"
    },
    "answer": "D"
  },
  {
    "number": 229,
    "question": "You are on a dual carriageway. Ahead you see a vehicle with an amber flashing light. What could this be?",
    "image": null,
    "options": {
      "A": "An ambulance",
      "B": "A fire engine",
      "C": "A disabled person!s vehicle",
      "D": "A doctor on call"
    },
    "answer": "C"
  },
  {
    "number": 230,
    "question": "Where are you most likely to be affected by a side wind?",
    "image": null,
    "options": {
      "A": "On a narrow country lane",
      "B": "On an open stretch of road",
      "C": "On a long, straight road",
      "D": "On a busy stretch of road"
    },
    "answer": "B"
  },
  {
    "number": 231,
    "question": "When travelling in very heavy rain your overall stopping distance is likely to be",
    "image": null,
    "options": {
      "A": "Quadrupled",
      "B": "Doubled",
      "C": "The same as normal",
      "D": "Trebled"
    },
    "answer": "B"
  },
  {
    "number": 232,
    "question": "A VRT certificate is normally valid for:",
    "image": null,
    "options": {
      "A": "Two (2) years after the date it was issued",
      "B": "10,000 miles",
      "C": "One year after the date it was issued",
      "D": "30,000 miles"
    },
    "answer": "A"
  },
  {
    "number": 233,
    "question": "A horse rider is in the left-hand lane approaching a roundabout. The driver behind should expect the rider to:",
    "image": null,
    "options": {
      "A": "Go in any direction",
      "B": "Go ahead",
      "C": "Turn left",
      "D": "Turn right"
    },
    "answer": "A"
  },
  {
    "number": 234,
    "question": "When should you use front and rear fog lights?",
    "image": null,
    "options": {
      "A": "When visibility is considerably reduced because of fog.",
      "B": "When the road is unlit by street lamps or they are not working.",
      "C": "When it is raining and just in case the roads are slippery.",
      "D": "During any time of the day or night to make sure that other road users see me."
    },
    "answer": "A"
  },
  {
    "number": 235,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dae124bda.jpg",
    "options": {
      "A": "Ring road",
      "B": "Mini-roundabout",
      "C": "No vehicles",
      "D": "Roundabout"
    },
    "answer": "D"
  },
  {
    "number": 236,
    "question": "You are coming up to a roundabout and a cyclist is signaling to turn right. What should you do",
    "image": null,
    "options": {
      "A": "Give the cyclist plenty of room",
      "B": "Give a horn warning",
      "C": "Signal the cyclist to move across",
      "D": "Overtake on the right"
    },
    "answer": "A"
  },
  {
    "number": 237,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dc19dde75.jpg",
    "options": {
      "A": "Traffic queues likely",
      "B": "Pedestrian crossing ahead",
      "C": "Light signals ahead at a level crossing",
      "D": "Accident black spot ahead"
    },
    "answer": "C"
  },
  {
    "number": 238,
    "question": "To drive on the road learners MUST",
    "image": null,
    "options": {
      "A": "Have taken professional instruction",
      "B": "Have no penalty points on their licence",
      "C": "Apply for a driving test within 12 months",
      "D": "Have a signed, valid provisional licence"
    },
    "answer": "D"
  },
  {
    "number": 239,
    "question": "What do these zigzag lines at pedestrian crossings mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dd5b8d901.jpg",
    "options": {
      "A": "No parking at any time",
      "B": "Parking allowed only for a short time",
      "C": "Sounding horns is not allowed",
      "D": "Slow down to 20kph"
    },
    "answer": "A"
  },
  {
    "number": 240,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dec0633dc.jpg",
    "options": {
      "A": "Holiday route ahead",
      "B": "Low bridge ahead",
      "C": "Tunnel ahead",
      "D": "Tourist route ahead"
    },
    "answer": "C"
  },
  {
    "number": 241,
    "question": "What does tailgating mean?",
    "image": null,
    "options": {
      "A": "Following another vehicle too closely",
      "B": "Driving with rear fog lights on",
      "C": "Reversing into a parking space",
      "D": "Using the rear door of a hatchback car"
    },
    "answer": "A"
  },
  {
    "number": 242,
    "question": "You wish to make a right turn ahead. Why should you take up the correct position in good time?",
    "image": null,
    "options": {
      "A": "To allow other drivers to pull out in front of you",
      "B": "To help other road users know what you intend to do",
      "C": "To give a better view into the road that you are joining",
      "D": "To allow other drivers to pass you on the right"
    },
    "answer": "B"
  },
  {
    "number": 243,
    "question": "Why would a pedestrian dress their dog in a yellow or burgundy coat; what are they warning you about?",
    "image": null,
    "options": {
      "A": "Elderly",
      "B": "Dog training",
      "C": "Colour blind",
      "D": "Deaf"
    },
    "answer": "D"
  },
  {
    "number": 244,
    "question": "You should never reverse",
    "image": null,
    "options": {
      "A": "For longer than necessary",
      "B": "At night",
      "C": "Into a side road",
      "D": "On a main road"
    },
    "answer": "A"
  },
  {
    "number": 245,
    "question": "You are driving on a clear night. There is a steady stream of oncoming cars. The national speed limit applies. Which lights should you use?",
    "image": null,
    "options": {
      "A": "Dipped headlights",
      "B": "Full beam headlight",
      "C": "Fog lights",
      "D": "Sidelights"
    },
    "answer": "A"
  },
  {
    "number": 246,
    "question": "How should you react to drivers who appear to be inexperienced?",
    "image": null,
    "options": {
      "A": "Flash your headlights to indicate that it is safe for them to proceed",
      "B": "Overtake them as soon as possible",
      "C": "Be patient and prepare for them to react more slowly",
      "D": "Sound your horn and warn them of your presence"
    },
    "answer": "C"
  },
  {
    "number": 247,
    "question": "When being followed by an ambulance showing a flashing blue light you should:",
    "image": null,
    "options": {
      "A": "Pull over as soon as safely possible to let it pass",
      "B": "Brake harshly and immediately stop in the road",
      "C": "Accelerate fast to get away from it",
      "D": "Maintain your speed and course"
    },
    "answer": "A"
  },
  {
    "number": 248,
    "question": "You are driving at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should:",
    "image": null,
    "options": {
      "A": "Allow the vehicle to overtake",
      "B": "Touch the brakes to show your brake lights",
      "C": "Accelerate to make a gap behind you",
      "D": "Maintain your speed to prevent the vehicle from overtaking"
    },
    "answer": "A"
  },
  {
    "number": 249,
    "question": "What do child locks in a vehicle do?",
    "image": null,
    "options": {
      "A": "Lock the seat belt buckles in place",
      "B": "Stop children from opening rear doors",
      "C": "Stop the rear seats from tipping forward",
      "D": "Lock the rear windows in the up position"
    },
    "answer": "B"
  },
  {
    "number": 250,
    "question": "Which of the following should you do before stopping?",
    "image": null,
    "options": {
      "A": "Sound the horn",
      "B": "Flash your headlights",
      "C": "Use the mirrors",
      "D": "Select a higher gear"
    },
    "answer": "C"
  },
  {
    "number": 251,
    "question": "A provisional licence holder must not drive a motorcar",
    "image": null,
    "options": {
      "A": "Alone",
      "B": "With passengers in the back",
      "C": "At night",
      "D": "On a dual carriageway"
    },
    "answer": "A"
  },
  {
    "number": 252,
    "question": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should",
    "image": null,
    "options": {
      "A": "Brake firmly and steer to the left",
      "B": "Brake firmly and not turn the steering wheel",
      "C": "Steer carefully to the right",
      "D": "Steer carefully to the left"
    },
    "answer": "C"
  },
  {
    "number": 253,
    "question": "Who is especially in danger of not being seen as you reverse your car?",
    "image": null,
    "options": {
      "A": "Children",
      "B": "Car drivers",
      "C": "Motorcyclists",
      "D": "Cyclists"
    },
    "answer": "A"
  },
  {
    "number": 254,
    "question": "Rapid acceleration and heavy braking can lead to",
    "image": null,
    "options": {
      "A": "Increased fuel consumption",
      "B": "Reduced pollution",
      "C": "Reduced exhaust emissions",
      "D": "Increased road safety"
    },
    "answer": "A"
  },
  {
    "number": 255,
    "question": "When correcting a rear-wheel skid you should",
    "image": null,
    "options": {
      "A": "Brake sharply",
      "B": "roll with it",
      "C": "Steer into the skid",
      "D": "Steer away from the skid"
    },
    "answer": "C"
  },
  {
    "number": 256,
    "question": "A cycle lane is marked by a solid white line. You must not drive or park in it",
    "image": null,
    "options": {
      "A": "During its period of operation",
      "B": "At any time",
      "C": "During the rush hour",
      "D": "If a cyclist is using it"
    },
    "answer": "A"
  },
  {
    "number": 257,
    "question": "You MUST wear glasses or contact lenses when driving on public roads if:",
    "image": null,
    "options": {
      "A": "You cannot read a vehicle number plate from distance of 20.5 meters (67 feet) without them",
      "B": "You cannot read a vehicle number plate from a distance of 36 meters (120 feet) without them",
      "C": "There is an eyesight problem in your family",
      "D": "You are the holder of an orange badge"
    },
    "answer": "A"
  },
  {
    "number": 258,
    "question": "You are waiting to emerge left from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?",
    "image": null,
    "options": {
      "A": "The large vehicle can easily hide an overtaking vehicle",
      "B": "The large vehicle can turn suddenly",
      "C": "The large vehicle is difficult to steer in a straight line",
      "D": "The large vehicle can easily hide vehicles from the left"
    },
    "answer": "A"
  },
  {
    "number": 259,
    "question": "To correct a rear-wheel skid you should",
    "image": null,
    "options": {
      "A": "Steer into it",
      "B": "Apply your handbrake",
      "C": "Not steer at all",
      "D": "Steer away from it"
    },
    "answer": "A"
  },
  {
    "number": 260,
    "question": "The road is wet and slippery. Why might a motorcyclist steer round drain covers on a bend?",
    "image": null,
    "options": {
      "A": "To avoid splashing pedestrians on the pavements",
      "B": "To prevent the motorcycle sliding on the metal drain covers",
      "C": "To avoid puncturing the tyres on the edge of the drain covers",
      "D": "To help judge the bend using the drain covers as marker points"
    },
    "answer": "B"
  },
  {
    "number": 261,
    "question": "After how many years does a car first need a MOT certificate?",
    "image": null,
    "options": {
      "A": "One year",
      "B": "Four years",
      "C": "Three years",
      "D": "Two years"
    },
    "answer": "C"
  },
  {
    "number": 262,
    "question": "You are parking on a two-way road at night. The speed limit is 40 mph. You should park on the",
    "image": null,
    "options": {
      "A": "Left with no lights on",
      "B": "Left with parking lights on",
      "C": "Right with dipped headlights on",
      "D": "Right with parking lights on"
    },
    "answer": "B"
  },
  {
    "number": 263,
    "question": "Motorcyclists often look round over their right shoulder just before turning right. This is because",
    "image": null,
    "options": {
      "A": "Motorcycles do not have mirrors",
      "B": "They need to check for traffic in their blind area",
      "C": "They need to listen for following traffic",
      "D": "Looking around helps them balance as they turn"
    },
    "answer": "B"
  },
  {
    "number": 264,
    "question": "What is the most common reason a car skids?",
    "image": null,
    "options": {
      "A": "Driver error",
      "B": "Pedestrians",
      "C": "Worn tyres",
      "D": "Other vehicles"
    },
    "answer": "A"
  },
  {
    "number": 265,
    "question": "What is the legal minimum insurance cover you must have to drive on public roads?",
    "image": null,
    "options": {
      "A": "Third party, fire and theft",
      "B": "Personal injury cover",
      "C": "Third party only",
      "D": "Fully comprehensive"
    },
    "answer": "C"
  },
  {
    "number": 266,
    "question": "When must you stop at this junction?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7eb1597a5e.jpg",
    "options": {
      "A": "Only when the area is busy",
      "B": "At all times",
      "C": "During rush hours only",
      "D": "When turning right only"
    },
    "answer": "B"
  },
  {
    "number": 267,
    "question": "When about to overtake a long vehicle or lorry you should:",
    "image": null,
    "options": {
      "A": "Drive close to the lorry in order to pass more quickly",
      "B": "Sound the horn to warn the driver that you are there",
      "C": "Stay well back from the lorry to obtain a better view",
      "D": "Flash your lights and wait for the driver to signal when it is safe"
    },
    "answer": "C"
  },
  {
    "number": 268,
    "question": "How can you use the engine of your vehicle to control your speed?",
    "image": null,
    "options": {
      "A": "By selecting neutral",
      "B": "By selecting reverse gear",
      "C": "By changing to a higher gear",
      "D": "By changing to a lower gear"
    },
    "answer": "D"
  },
  {
    "number": 269,
    "question": "You should never wave or urge people across at pedestrian crossing because",
    "image": null,
    "options": {
      "A": "It is safer for you to carry on",
      "B": "They may not be ready to cross",
      "C": "They may not be looking",
      "D": "There may be another vehicle coming"
    },
    "answer": "D"
  },
  {
    "number": 270,
    "question": "Why should you make sure that you have cancelled your indicators after turning?",
    "image": null,
    "options": {
      "A": "To avoid flattening the battery",
      "B": "To avoid misleading other road users",
      "C": "To avoid dazzling other road users",
      "D": "To avoid damage to the indicator relay"
    },
    "answer": "B"
  },
  {
    "number": 271,
    "question": "You need to top up your battery. What level should you fill to?",
    "image": null,
    "options": {
      "A": "Just below the cell plates",
      "B": "Half-way up the battery",
      "C": "Just above the cell plates",
      "D": "The top of the battery"
    },
    "answer": "C"
  },
  {
    "number": 272,
    "question": "You are driving a slow moving car on a narrow road. When traffic wishes to overtake you should",
    "image": null,
    "options": {
      "A": "Put your hazard warning lights on",
      "B": "Pull in safely as soon as you can do so",
      "C": "Stop immediately and wave it on",
      "D": "Take no action"
    },
    "answer": "B"
  },
  {
    "number": 273,
    "question": "What does tailgating mean?",
    "image": null,
    "options": {
      "A": "When stationary vehicles are too close in a queue",
      "B": "When a vehicle delivering goods has its tailgate down",
      "C": "When a driver is following another vehicle too closely",
      "D": "When a vehicle is with its back doors open"
    },
    "answer": "C"
  },
  {
    "number": 274,
    "question": "A car pulls out in front of you at a junction. What should you do?",
    "image": null,
    "options": {
      "A": "Swerve past it and blow your horn",
      "B": "Accelerate past it immediately",
      "C": "Flash your headlights and drive up close behind",
      "D": "Slow down and be ready to stop"
    },
    "answer": "D"
  },
  {
    "number": 275,
    "question": "If you are on good, dry road surface and your vehicle has good brakes and tyres, what is the overall stopping distance at 48 kph?",
    "image": null,
    "options": {
      "A": "36 meters (118 feet)",
      "B": "23 meters  (75 feet)",
      "C": "96 meters (315 feet)",
      "D": "53 meters (174 feet)"
    },
    "answer": "B"
  },
  {
    "number": 276,
    "question": "You see this line across the road at the entrance to a roundabout. What does it mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7ee235c49d.jpg",
    "options": {
      "A": "Traffic from the left has right of way",
      "B": "You have right of way",
      "C": "Give way to traffic from the right",
      "D": "Stop at the line"
    },
    "answer": "C"
  },
  {
    "number": 277,
    "question": "The purpose of a catalytic converter is to",
    "image": null,
    "options": {
      "A": "Increase acceleration",
      "B": "Reduce toxic exhaust gases",
      "C": "Reduce oil consumption",
      "D": "Reduce fuel consumption"
    },
    "answer": "B"
  },
  {
    "number": 278,
    "question": "Anti-lock brakes reduce the chances of a skid occurring particularly when:",
    "image": null,
    "options": {
      "A": "Breaking in an emergency",
      "B": "Driving on good road surfaces",
      "C": "Driving down steep hills",
      "D": "Breaking during normal driving"
    },
    "answer": "A"
  },
  {
    "number": 279,
    "question": "You are testing the suspension of your car. You notice that your vehicle keeps bouncing when you press down on the front wing. What does this mean?",
    "image": null,
    "options": {
      "A": "Steering wheel not located centrally",
      "B": "Worn shock absorbers",
      "C": "Tyres under-inflated",
      "D": "Worn tyres"
    },
    "answer": "B"
  },
  {
    "number": 280,
    "question": "An injured motorcyclist is lying unconscious in the road. You should",
    "image": null,
    "options": {
      "A": "Move the person off the road",
      "B": "Remove the leather jacket",
      "C": "Remove the safety helmet",
      "D": "Seek medical assistance"
    },
    "answer": "D"
  },
  {
    "number": 281,
    "question": "Following a collision someone has suffered a burn. The burn needs to be cooled. What is the shortest time it should be cooled for?",
    "image": null,
    "options": {
      "A": "5 minutes",
      "B": "15 minutes",
      "C": "20 minutes",
      "D": "10 minutes"
    },
    "answer": "D"
  },
  {
    "number": 282,
    "question": "How can you help to prevent your car radio from being stolen?",
    "image": null,
    "options": {
      "A": "Park in an unlit area",
      "B": "Install a security-coded radio",
      "C": "Park near a busy junction",
      "D": "Hide the radio with a blanket"
    },
    "answer": "B"
  },
  {
    "number": 283,
    "question": "If you start to feel tired whilst driving you should",
    "image": null,
    "options": {
      "A": "Decrease your speed",
      "B": "Increase your speed to reduce your journey time",
      "C": "Stop at a safe place and rest",
      "D": "Turn on the radio and listen to loud music"
    },
    "answer": "C"
  },
  {
    "number": 284,
    "question": "At the scene of an accident you should:",
    "image": null,
    "options": {
      "A": "Go to those casualties who are screaming",
      "B": "Not put yourself at risk",
      "C": "Leave vehicle engines switched on",
      "D": "Pull everybody out of their vehicles"
    },
    "answer": "B"
  },
  {
    "number": 285,
    "question": "You are following a motorcyclist on an uneven road. You should:",
    "image": null,
    "options": {
      "A": "Allow extra room in case they swerve to avoid pot-holes",
      "B": "Allow the same room as normal because motorcyclists are not affected by road surfaces",
      "C": "Allow less room to ensure that you can be seen in their mirrors",
      "D": "Overtake immediately"
    },
    "answer": "A"
  },
  {
    "number": 286,
    "question": "You are driving at night with full-beam headlights on. A vehicle is overtaking you. You should dip your lights",
    "image": null,
    "options": {
      "A": "Some time after the vehicles has passed you",
      "B": "Before the vehicles starts to pass you",
      "C": "As soon as the vehicle passes you",
      "D": "Only if the other driver dips his headlights"
    },
    "answer": "C"
  },
  {
    "number": 287,
    "question": "Which vehicle may have to use a different course to normal at roundabouts?",
    "image": null,
    "options": {
      "A": "Estate car",
      "B": "Long vehicle",
      "C": "Sports car",
      "D": "Van"
    },
    "answer": "B"
  },
  {
    "number": 288,
    "question": "You stop for pedestrians waiting to cross at a zebra crossing. They do not start to cross. What should you do?",
    "image": null,
    "options": {
      "A": "Carry on",
      "B": "Be patient and wait",
      "C": "Wave then to cross",
      "D": "Sound your horn"
    },
    "answer": "B"
  },
  {
    "number": 289,
    "question": "When following a vehicle on a wet road you should leave a time gap of at least?",
    "image": null,
    "options": {
      "A": "3 seconds",
      "B": "4 seconds",
      "C": "2 seconds",
      "D": "1 second"
    },
    "answer": "B"
  },
  {
    "number": 290,
    "question": "Motorcycles ride in day light with their headlights switched on because",
    "image": null,
    "options": {
      "A": "There are speed humps ahead",
      "B": "It is legal requirement",
      "C": "They need to be seen",
      "D": "There is a speed trap ahead"
    },
    "answer": "C"
  },
  {
    "number": 291,
    "question": "You are driving in town. There is a bus at the bus stop on the other side of the road. Why should you be careful?",
    "image": null,
    "options": {
      "A": "The bus may remain stationary",
      "B": "The bus may move off suddenly",
      "C": "Pedestrians may come from behind the bus",
      "D": "The bus may have broken down"
    },
    "answer": "C"
  },
  {
    "number": 292,
    "question": "In which of these following situations should you avoid overtaking?",
    "image": null,
    "options": {
      "A": "Just after a bend",
      "B": "In a one-way street",
      "C": "On a 30 mph road",
      "D": "Approaching a dip in the road"
    },
    "answer": "D"
  },
  {
    "number": 293,
    "question": "Where may you overtake on a one-way Street?",
    "image": null,
    "options": {
      "A": "Either on the right or the left",
      "B": "Overtaking is not allowed",
      "C": "Only on the left-hand side",
      "D": "Only on the right-hand side"
    },
    "answer": "A"
  },
  {
    "number": 294,
    "question": "Using rear fog lights in clear daylight or tunnels will:",
    "image": null,
    "options": {
      "A": "Make following drivers keep back",
      "B": "Dazzle others drivers",
      "C": "Give extra protection",
      "D": "Be useful when towing a trailer"
    },
    "answer": "B"
  },
  {
    "number": 295,
    "question": "You are about to drive home. You cannot find the glasses you need to wear when driving. You should:",
    "image": null,
    "options": {
      "A": "Drive home slowly, keeping to quite roads",
      "B": "Find a way of getting home without driving",
      "C": "Drive home at night",
      "D": "Borrow a friend &rsquo;s glasses and drive home"
    },
    "answer": "B"
  },
  {
    "number": 296,
    "question": "In freezing conditions you should expect stopping distances to increase by up to",
    "image": null,
    "options": {
      "A": "Four (4) times",
      "B": "Ten (10) times",
      "C": "Seven (7) times",
      "D": "Five (5) times"
    },
    "answer": "B"
  },
  {
    "number": 297,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7f3867637c.jpg",
    "options": {
      "A": "End of narrow bridge",
      "B": "Road narrows",
      "C": "End of dual carriageway",
      "D": "Tall bridge"
    },
    "answer": "C"
  },
  {
    "number": 298,
    "question": "When being followed by an ambulance showing a flashing blue beacon you should",
    "image": null,
    "options": {
      "A": "Pull over as soon as safely possible to let it pass",
      "B": "Maintain your speed and course",
      "C": "Accelerate hard to get away from it",
      "D": "Brake harshly and immediately stop in the road"
    },
    "answer": "A"
  },
  {
    "number": 299,
    "question": "You are travelling at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should",
    "image": null,
    "options": {
      "A": "Accelerate to make a gap behind you",
      "B": "Touch the brakes sharply to show your brake lights",
      "C": "Maintain your speed to prevent the vehicle from overtaking",
      "D": "Allow the vehicle to overtake"
    },
    "answer": "D"
  },
  {
    "number": 300,
    "question": "What lights and why must you put them on when going through a tunnel?",
    "image": null,
    "options": {
      "A": "No lights are necessary as tunnels have their own lighting.",
      "B": "Dipped-beam to help you see and also be clearly seen by others.",
      "C": "Main-beam to see clearly where you are going.",
      "D": "Hazard warning lights so nobody drives too near."
    },
    "answer": "B"
  },
  {
    "number": 301,
    "question": "What is the national speed limit for towing a trailer on a motorway?",
    "image": null,
    "options": {
      "A": "40 mph",
      "B": "50 mph",
      "C": "60 mph",
      "D": "70 mph"
    },
    "answer": "C"
  },
  {
    "number": 302,
    "question": "In windy conditions you need to take extra care when",
    "image": null,
    "options": {
      "A": "Using the brakes",
      "B": "Making a hill start",
      "C": "Passing pedal cyclists",
      "D": "Turning into a narrow road"
    },
    "answer": "C"
  },
  {
    "number": 303,
    "question": "You are about to drive home but you can &#39;t find the glasses you need to wear. You should:",
    "image": null,
    "options": {
      "A": "Only drive on minor roads",
      "B": "Drive home at night so that the lights will help you",
      "C": "Drive home without going faster than 30 mph",
      "D": "Find a way of getting home without driving"
    },
    "answer": "D"
  },
  {
    "number": 304,
    "question": "Immediately after joining a motorway you should:",
    "image": null,
    "options": {
      "A": "Move to the centre lane",
      "B": "Move to the right hand lane",
      "C": "Try to overtake",
      "D": "Keep in the left lane to get used to the speed"
    },
    "answer": "D"
  },
  {
    "number": 305,
    "question": "You should only use a mobile phone when",
    "image": null,
    "options": {
      "A": "Driving an automatic vehicle",
      "B": "Driving at less than 30 mph",
      "C": "Receiving a call",
      "D": "Suitably parked"
    },
    "answer": "D"
  },
  {
    "number": 306,
    "question": "Anti-lock brakes are most useful when you are",
    "image": null,
    "options": {
      "A": "Driving on worn tyres",
      "B": "Braking gently",
      "C": "Braking excessively",
      "D": "Driving normally"
    },
    "answer": "C"
  },
  {
    "number": 307,
    "question": "Why are mirrors often slightly curved (convex)?",
    "image": null,
    "options": {
      "A": "They make it easier to judge the speed of following traffic",
      "B": "They totally cover blind spots",
      "C": "They make following traffic look bigger",
      "D": "They give a wider field of vision"
    },
    "answer": "D"
  },
  {
    "number": 308,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7f64c68ee8.jpg",
    "options": {
      "A": "Ancient monument ahead",
      "B": "Tunnel ahead",
      "C": "Low bridge ahead",
      "D": "Accident black spot ahead"
    },
    "answer": "B"
  },
  {
    "number": 309,
    "question": "You are entering an area of road works. There is a temporary speed limit displayed. You must",
    "image": null,
    "options": {
      "A": "Accept the speed limit as advisable",
      "B": "Not exceed the speed limit",
      "C": "Obey the limit except for overnight",
      "D": "Obey the limit only during rush hour"
    },
    "answer": "B"
  },
  {
    "number": 310,
    "question": "Objects or articles hanging from your interior mirror may",
    "image": null,
    "options": {
      "A": "Help your concentration",
      "B": "Distract your attention",
      "C": "improve your view",
      "D": "Improve your driving"
    },
    "answer": "B"
  },
  {
    "number": 311,
    "question": "What is the main cause of skidding?",
    "image": null,
    "options": {
      "A": "The weather",
      "B": "Damaged brakes",
      "C": "Driving too fast",
      "D": "The driver"
    },
    "answer": "D"
  },
  {
    "number": 312,
    "question": "At a crossroads there are no signs or road markings. Two vehicles approach. Which has priority?",
    "image": null,
    "options": {
      "A": "The vehicle on the widest road",
      "B": "The vehicle the fastest",
      "C": "Neither vehicle",
      "D": "Vehicles approaching from the right"
    },
    "answer": "C"
  },
  {
    "number": 313,
    "question": "You should never wave people across at pedestrian crossings because",
    "image": null,
    "options": {
      "A": "There may be another vehicle coming",
      "B": "They may not be looking",
      "C": "They may not be ready to cross",
      "D": "It is safer for you to carry on"
    },
    "answer": "A"
  },
  {
    "number": 314,
    "question": "You are driving down a long steep hill. You suddenly notice that your brakes are not working as well as normal. What is the usual cause of this?",
    "image": null,
    "options": {
      "A": "The brakes overheating",
      "B": "Badly adjusted",
      "C": "Air in the brake fluid",
      "D": "Oil on the brakes"
    },
    "answer": "A"
  },
  {
    "number": 315,
    "question": "Which of the following are at greatest risk from other road users?",
    "image": null,
    "options": {
      "A": "Motorcycles",
      "B": "Lorry drivers",
      "C": "Busy bus drivers",
      "D": "Learner car drivers"
    },
    "answer": "A"
  },
  {
    "number": 316,
    "question": "What are the maximum national speed limits for cars and motorcycles in built-up areas and elsewhere?",
    "image": null,
    "options": {
      "A": "50kph and 80kph",
      "B": "30mph and 70mph",
      "C": "40kph and 70kph",
      "D": "45mph and 100mph"
    },
    "answer": "B"
  },
  {
    "number": 317,
    "question": "You can use the engine of your vehicle as a brake by",
    "image": null,
    "options": {
      "A": "By travelling with the clutch pressed down",
      "B": "By selecting fifth gear",
      "C": "By turning the engine off",
      "D": "By selecting a lower gear"
    },
    "answer": "D"
  },
  {
    "number": 318,
    "question": "For which of these must you show on your motor insurance certificate?",
    "image": null,
    "options": {
      "A": "When having an MOT inspection",
      "B": "When buying or selling a vehicle",
      "C": "When you are taking your driving test",
      "D": "When a police office asks for it"
    },
    "answer": "D"
  },
  {
    "number": 319,
    "question": "You wish to overtake a long, slow moving vehicle or lorry on a busy road with oncoming traffic. You should:",
    "image": null,
    "options": {
      "A": "Follow it closely and keep moving out to see the road ahead",
      "B": "Stay behind until the driver waves you past",
      "C": "Keep well back until you can see that it is clear",
      "D": "Flash your headlights for the oncoming traffic to give way"
    },
    "answer": "D"
  },
  {
    "number": 320,
    "question": "Any load that is carried on a roof rack should be",
    "image": null,
    "options": {
      "A": "Visible in your exterior mirror",
      "B": "Loaded towards the rear of the vehicle",
      "C": "Securely fastened when driving",
      "D": "Covered with plastic sheeting"
    },
    "answer": "C"
  },
  {
    "number": 321,
    "question": "At the scene of an accident you have to treat someone for shock. What should you do?",
    "image": null,
    "options": {
      "A": "Keep reassuring them until qualified help arrives",
      "B": "Give them liquids to drink",
      "C": "Try and cool them down",
      "D": "Sing to them"
    },
    "answer": "A"
  },
  {
    "number": 322,
    "question": "This marking appears on the road just before a",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7f92e634d2.jpg",
    "options": {
      "A": "No through road sign",
      "B": "Stop sign",
      "C": "Give way sign",
      "D": "No entry sign"
    },
    "answer": "C"
  },
  {
    "number": 323,
    "question": "For a driver, what doe the term Blind Spot mean?",
    "image": null,
    "options": {
      "A": "An area immediately behind the car",
      "B": "The area covered by your left mirror",
      "C": "The area covered by the rear view mirror",
      "D": "An area not seen in your mirrors"
    },
    "answer": "D"
  },
  {
    "number": 324,
    "question": "At toucan crossings, apart from pedestrians you should be aware of",
    "image": null,
    "options": {
      "A": "Buses pulling out",
      "B": "Emergency vehicles emerging",
      "C": "Cyclists riding across",
      "D": "Trams crossing in front"
    },
    "answer": "C"
  },
  {
    "number": 325,
    "question": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should:",
    "image": null,
    "options": {
      "A": "Brake firmly and not turn the steering wheel",
      "B": "Steer carefully to the left",
      "C": "Brake firmly and steer to the left",
      "D": "Steer carefully to the right"
    },
    "answer": "D"
  },
  {
    "number": 326,
    "question": "You are approaching a zebra crossing. &nbsp;Pedestrians are waiting to cross. You should:",
    "image": null,
    "options": {
      "A": "Wave at them to cross the road",
      "B": "Give way to elderly and infirm only",
      "C": "Slow down and prepare to stop",
      "D": "Use your headlights to indicate they can cross"
    },
    "answer": "C"
  },
  {
    "number": 327,
    "question": "You should ONLY use a mobile or cellular phone when:",
    "image": null,
    "options": {
      "A": "Driving an automatic vehicle",
      "B": "Suitably parked",
      "C": "Receiving a call",
      "D": "Driving at less than 30 mph"
    },
    "answer": "B"
  },
  {
    "number": 328,
    "question": "You will use more fuel if your tyres are",
    "image": null,
    "options": {
      "A": "Of different makes",
      "B": "New and hardly used",
      "C": "Under-inflated",
      "D": "Over-inflated"
    },
    "answer": "C"
  },
  {
    "number": 329,
    "question": "What do these solid double white centre line road markings mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7fbb0d1cda.jpg",
    "options": {
      "A": "Lines on the road just to mark the lanes and guide traffic flows, which have no legal or safety implications.",
      "B": "Continuous solid double white line (Centre line) which vehicles must not drive over, across or astride except to enter a side road, unless prohibited from doing so by appropriate signage.",
      "C": "Central limit of dual carriageway and may be crossed only when overtaking.",
      "D": "No stopping or parking permitted."
    },
    "answer": "B"
  },
  {
    "number": 330,
    "question": "A roof rack that is fitted to your car will:",
    "image": null,
    "options": {
      "A": "Improve the road handling",
      "B": "Make your car go faster",
      "C": "Reduce fuel consumption",
      "D": "Increase fuel consumption"
    },
    "answer": "D"
  },
  {
    "number": 331,
    "question": "The road is icy. You should drive slowly",
    "image": null,
    "options": {
      "A": "With your left foot on the brake",
      "B": "In the lowest gear possible",
      "C": "With the handbrake partly on",
      "D": "In the highest gear possible"
    },
    "answer": "D"
  },
  {
    "number": 332,
    "question": "You see this sign ahead of you. It means:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80314913bc.jpg",
    "options": {
      "A": "Start to slow down to 30 kph after passing it",
      "B": "You are leaving the 30 kph speed limit area",
      "C": "The minimum speed limit ahead is 30 kph",
      "D": "Do not exceed 30 kph after passing it"
    },
    "answer": "D"
  },
  {
    "number": 333,
    "question": "On a road where trams operate, which of these vehicles will be most at risk from tram rails?",
    "image": null,
    "options": {
      "A": "Buses",
      "B": "Cycles",
      "C": "Lorries",
      "D": "Cars"
    },
    "answer": "B"
  },
  {
    "number": 334,
    "question": "Which type of crossing can detect when people are on them?",
    "image": null,
    "options": {
      "A": "Puffin",
      "B": "Zebra",
      "C": "Pelican",
      "D": "Toucan"
    },
    "answer": "A"
  },
  {
    "number": 335,
    "question": "Signals are normally given by direction indicators and",
    "image": null,
    "options": {
      "A": "Interior lights",
      "B": "Sidelights",
      "C": "Brake lights",
      "D": "Fog lights"
    },
    "answer": "C"
  },
  {
    "number": 336,
    "question": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?",
    "image": null,
    "options": {
      "A": "An adult lap belt",
      "B": "A child seat",
      "C": "An adult seat belt",
      "D": "An adult holding a child"
    },
    "answer": "B"
  },
  {
    "number": 337,
    "question": "What is the maximum number of penalty points that will automatically disqualify a driver who holds a provisional driving licence?",
    "image": null,
    "options": {
      "A": "12 points at any time during a 3 year period",
      "B": "10 points during any one year period",
      "C": "4 points a year over a 3 year period",
      "D": "18 points over a two year period"
    },
    "answer": "A"
  },
  {
    "number": 338,
    "question": "You take the wrong route and find you are on a one-way street. You should:",
    "image": null,
    "options": {
      "A": "Reverse into a driveway",
      "B": "Turn round in a side road",
      "C": "Continue to the end of the road",
      "D": "Reverse out of the road"
    },
    "answer": "C"
  },
  {
    "number": 339,
    "question": "Coasting your vehicle whilst driving will:",
    "image": null,
    "options": {
      "A": "Increase the control you have over the vehicle",
      "B": "Reduce the vehicle &#39;s braking distance",
      "C": "Make the car use more fuel",
      "D": "De crease the control you have over the vehicle"
    },
    "answer": "D"
  },
  {
    "number": 340,
    "question": "Using a hands-free phone is likely to",
    "image": null,
    "options": {
      "A": "Increase your concentration",
      "B": "Divert your attention",
      "C": "Improve your safety",
      "D": "Reduce your view"
    },
    "answer": "B"
  },
  {
    "number": 341,
    "question": "Using rear fog lights in clear daylight will",
    "image": null,
    "options": {
      "A": "Dazzle other drivers",
      "B": "Give extra protection",
      "C": "Make following drivers keep back",
      "D": "Be useful when towing a trailer"
    },
    "answer": "A"
  },
  {
    "number": 342,
    "question": "Why should you always reduce your speed when travelling in fog?",
    "image": null,
    "options": {
      "A": "It is more difficult to see events ahead",
      "B": "The brakes do not work as well",
      "C": "You will be dazzled by oncoming headlights",
      "D": "The engine will take longer to warm up"
    },
    "answer": "A"
  },
  {
    "number": 343,
    "question": "When MUST you use dipped headlights during the day?",
    "image": null,
    "options": {
      "A": "When parking",
      "B": "Along narrow streets",
      "C": "In poor visibility",
      "D": "All the time"
    },
    "answer": "C"
  },
  {
    "number": 344,
    "question": "You are on a well-lit motorway at night. You must",
    "image": null,
    "options": {
      "A": "Use your headlights only in bad weather",
      "B": "Use only your sidelights",
      "C": "Always use your headlights",
      "D": "Always use your rear fog lights"
    },
    "answer": "C"
  },
  {
    "number": 345,
    "question": "A driver &#39;s behaviour has upset you. It may help if you",
    "image": null,
    "options": {
      "A": "Shout abusive language",
      "B": "Gesture to them with your hand",
      "C": "Stop and take a break",
      "D": "Follow their car, flashing your headlights"
    },
    "answer": "C"
  },
  {
    "number": 346,
    "question": "If you cannot see clearly behind when reversing, what should you do?",
    "image": null,
    "options": {
      "A": "Ask someone to guide you",
      "B": "Open the door and look behind",
      "C": "Open your window to look behind",
      "D": "Look in the nearside mirror"
    },
    "answer": "A"
  },
  {
    "number": 347,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa807c09d2da.jpg",
    "options": {
      "A": "Crossroads",
      "B": "Roundabout",
      "C": "No entry",
      "D": "No stopping"
    },
    "answer": "D"
  },
  {
    "number": 348,
    "question": "When emerging from junctions, which is most likely to obstruct your view?",
    "image": null,
    "options": {
      "A": "Interior mirror",
      "B": "Steering wheel",
      "C": "Windscreen pillars",
      "D": "Windscreen wipers"
    },
    "answer": "C"
  },
  {
    "number": 349,
    "question": "An elderly person &#39;s driving ability could be affected because they may be unable to",
    "image": null,
    "options": {
      "A": "Give signals correctly",
      "B": "Understand road signs",
      "C": "Obtain car insurance",
      "D": "React very quickly"
    },
    "answer": "D"
  },
  {
    "number": 350,
    "question": "You are in a line of traffic. The driver behind you is following very closely. What action should you take?",
    "image": null,
    "options": {
      "A": "Move over to a position just left of the centre line of the road",
      "B": "Signal left and wave the following driver past",
      "C": "Slow down, gradually increasing the gap between you and the vehicle in front",
      "D": "Ignore the following driver and continue to drive within the speed limit"
    },
    "answer": "C"
  },
  {
    "number": 351,
    "question": "You wish to turn right ahead. Why should you take up the proper position in good time?",
    "image": null,
    "options": {
      "A": "To allow other drivers to pull out in front of you",
      "B": "To allow drivers to pass you on the right",
      "C": "To give a better view into the road that you are joining",
      "D": "To help other road users know what you intend to do"
    },
    "answer": "D"
  },
  {
    "number": 352,
    "question": "To help the environment you should NOT:",
    "image": null,
    "options": {
      "A": "Walk, cycle, or use public transport",
      "B": "Remove your roof rack when unloaded",
      "C": "Use your car for very short journeys",
      "D": "Empty the boot of unnecessary weight"
    },
    "answer": "C"
  },
  {
    "number": 353,
    "question": "As soon as you join a dual carriageway you should normally:",
    "image": null,
    "options": {
      "A": "Position your vehicle in the centre lane",
      "B": "Keep in the left lane",
      "C": "Readjust your mirrors",
      "D": "Try to overtake"
    },
    "answer": "B"
  },
  {
    "number": 354,
    "question": "Which of the following is the main cause of rear-end collisions?",
    "image": null,
    "options": {
      "A": "A wet road surface",
      "B": "Pedestrians crossing the road unexpectedly",
      "C": "Traffic lights",
      "D": "Driving too close to the vehicle in front"
    },
    "answer": "D"
  },
  {
    "number": 355,
    "question": "At an incident it is important to look after any casualties. When the area is safe you should",
    "image": null,
    "options": {
      "A": "Keep them in the vehicle",
      "B": "Give them a drink",
      "C": "Give them something to eat",
      "D": "Get them out of the vehicle"
    },
    "answer": "A"
  },
  {
    "number": 356,
    "question": "You are at a junction controlled by traffic lights. When should you NOT proceed at green?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80af0346f6.jpg",
    "options": {
      "A": "When your exit from the junction is blocked",
      "B": "When pedestrians are waiting to cross",
      "C": "When you think the lights may be about to change",
      "D": "When you intend to turn right"
    },
    "answer": "A"
  },
  {
    "number": 357,
    "question": "In good conditions, what is the typical stopping distance at 70 mph?",
    "image": null,
    "options": {
      "A": "53 meters (175 feet)",
      "B": "96 meters  (315 feet)",
      "C": "73 meters (240 feet)",
      "D": "60 meters (197 feet)"
    },
    "answer": "B"
  },
  {
    "number": 358,
    "question": "Vehicles fitted with an anti-lock brake system",
    "image": null,
    "options": {
      "A": "Can be steered while you are braking",
      "B": "Are impossible to skid",
      "C": "Accelerate much faster",
      "D": "Are not fitted with a handbrake"
    },
    "answer": "A"
  },
  {
    "number": 359,
    "question": "A newly qualified driver must",
    "image": null,
    "options": {
      "A": "Display green L-Plates",
      "B": "Have valid motor insurance",
      "C": "Not exceed 40 mph for 12 months",
      "D": "Be accompanied on a motorway"
    },
    "answer": "B"
  },
  {
    "number": 360,
    "question": "When turning your car in the road, you must:",
    "image": null,
    "options": {
      "A": "Overhang the kerb",
      "B": "Check all around for other road users",
      "C": "Keep your hand on the handbrake",
      "D": "Use an available driveway"
    },
    "answer": "B"
  },
  {
    "number": 361,
    "question": "Which type of vehicle is most affected by strong winds?",
    "image": null,
    "options": {
      "A": "Tanker",
      "B": "Motorcycle",
      "C": "Car",
      "D": "Tractor"
    },
    "answer": "B"
  },
  {
    "number": 362,
    "question": "Motorcars must first have an MOT certificate when they are",
    "image": null,
    "options": {
      "A": "Five (5) years old",
      "B": "One (1) year old",
      "C": "Three (3) years old",
      "D": "Seven (7) years old"
    },
    "answer": "C"
  },
  {
    "number": 363,
    "question": "You have driven through a flood. What is the first thing you should do?",
    "image": null,
    "options": {
      "A": "Check your exhaust",
      "B": "Stop and dry the brakes",
      "C": "Stop and check the tyres",
      "D": "Test your brakes"
    },
    "answer": "D"
  },
  {
    "number": 364,
    "question": "You are approaching an unmarked crossroads. How should you deal with this type of junction?",
    "image": null,
    "options": {
      "A": "Accelerate looking to the left",
      "B": "Slow down and look both ways",
      "C": "Slow down and keep to the right",
      "D": "Accelerate and keep to the middle"
    },
    "answer": "B"
  },
  {
    "number": 365,
    "question": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
    "image": null,
    "options": {
      "A": "Traffic can travel faster in poor weather conditions",
      "B": "Traffic uses the middle lane for emergencies only",
      "C": "Traffic can overtake on the left",
      "D": "Traffic in both directions can use the middle lane to overtake"
    },
    "answer": "D"
  },
  {
    "number": 366,
    "question": "You are following a large lorry on a wet road. Spray makes it difficult to see. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80d3f81318.jpg",
    "options": {
      "A": "Put your headlights on full beam",
      "B": "Drop back until you can see better",
      "C": "Keep close to the lorry, away from the spray",
      "D": "Speed up and overtake quickly"
    },
    "answer": "B"
  },
  {
    "number": 367,
    "question": "Front and rear fog lights MUST be:",
    "image": null,
    "options": {
      "A": "Switched of if visibility is not seriously reduced",
      "B": "Used outside built up areas only",
      "C": "Switched off in night-time fog",
      "D": "Connected to an audible warning signal"
    },
    "answer": "A"
  },
  {
    "number": 368,
    "question": "You want to turn from a junction but your view is partly restricted by parked vehicles. What should you do?",
    "image": null,
    "options": {
      "A": "Move out quickly, but be prepared to stop",
      "B": "Stop, get out and look along the main road to check",
      "C": "Stop, then move slowly forward until you have a clear view",
      "D": "Sound your horn and pull out if there is no reply"
    },
    "answer": "C"
  },
  {
    "number": 369,
    "question": "On a three-lane motorway which lane should you normally use?",
    "image": null,
    "options": {
      "A": "Centre",
      "B": "Left",
      "C": "Either the right or centre",
      "D": "Right"
    },
    "answer": "B"
  },
  {
    "number": 370,
    "question": "You are dazzled at night by the lights of the vehicle behind you. You should:",
    "image": null,
    "options": {
      "A": "Set your mirror to dazzle the other driver",
      "B": "Set your mirror to anti-dazzle",
      "C": "Brake sharply to a stop",
      "D": "Switch your rear lights on and off"
    },
    "answer": "B"
  },
  {
    "number": 371,
    "question": "At night, you are dazzled by headlights coming towards you. You should:",
    "image": null,
    "options": {
      "A": "Slow down or stop",
      "B": "Switch on your main beam headlights",
      "C": "Put your hand over your eyes",
      "D": "Pull down your sun visor"
    },
    "answer": "A"
  },
  {
    "number": 372,
    "question": "Fog lights should be used ONLY when",
    "image": null,
    "options": {
      "A": "Visibility is seriously reduced",
      "B": "Driving after midnight",
      "C": "In very light rain",
      "D": "Daylight is fading"
    },
    "answer": "A"
  },
  {
    "number": 373,
    "question": "You are about to reverse into a side road and a pedestrian wishes to cross behind you. You should:",
    "image": null,
    "options": {
      "A": "Give way to the pedestrian",
      "B": "Wave to the pedestrian to stop",
      "C": "Wave to the pedestrian to cross",
      "D": "Reverse before the pedestrian starts to cross"
    },
    "answer": "A"
  },
  {
    "number": 374,
    "question": "What is the maximum speed limit in a built up area unless indicated otherwise?",
    "image": null,
    "options": {
      "A": "60mph",
      "B": "50mph",
      "C": "40mph",
      "D": "30mph"
    },
    "answer": "D"
  },
  {
    "number": 375,
    "question": "Motorcyclists are particularly vulnerable",
    "image": null,
    "options": {
      "A": "When moving off",
      "B": "On dual carriageways",
      "C": "When approaching junctions",
      "D": "On motorways"
    },
    "answer": "C"
  },
  {
    "number": 376,
    "question": "Motorcyclists are more at risk to be injured from other road users because they",
    "image": null,
    "options": {
      "A": "Are less experienced that other drivers",
      "B": "Are more difficult to see than other drivers",
      "C": "Are always faster than other drivers",
      "D": "Are more likely to break down than other motorists"
    },
    "answer": "B"
  },
  {
    "number": 377,
    "question": "You are approaching a right-hand bend. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80fd951c36.jpg",
    "options": {
      "A": "Keep well to the right to avoid anything in the gutter",
      "B": "Keep well to the left as it makes the bend faster",
      "C": "Keep well to the left for a better view around the bend",
      "D": "Keep well to the right to make the bend less sharp"
    },
    "answer": "C"
  },
  {
    "number": 378,
    "question": "How should you overtake horse riders?",
    "image": null,
    "options": {
      "A": "Drive slowly and leave plenty of room",
      "B": "Speed is not important but allow plenty of room",
      "C": "Use your horn just once to warn them"
    },
    "answer": "A"
  },
  {
    "number": 379,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa810d9262c4.jpg",
    "options": {
      "A": "Humpback bridge ahead",
      "B": "Toll bridge ahead",
      "C": "Road ahead closed",
      "D": "Opening or swing bridge ahead"
    },
    "answer": "D"
  },
  {
    "number": 380,
    "question": "A learner driver you are following stalls at a junction. What should you do?",
    "image": null,
    "options": {
      "A": "Shout instructions",
      "B": "Sound your horn and flash your lights",
      "C": "Steer around them and drive on",
      "D": "Be patient and wait for them to move on"
    },
    "answer": "D"
  },
  {
    "number": 381,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa8124ecad08.jpg",
    "options": {
      "A": "Minimum speed 20 mph",
      "B": "Entry into a 20 mph zone",
      "C": "End of a 20 mph zone"
    },
    "answer": "B"
  },
  {
    "number": 382,
    "question": "You may only enter a box junction when:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa81297e4825.jpg",
    "options": {
      "A": "There are less than two vehicles in front of you",
      "B": "The traffic lights show green",
      "C": "You need to turn left",
      "D": "Your exit road is clear"
    },
    "answer": "D"
  },
  {
    "number": 383,
    "question": "To answer your mobile phone when driving, you should:",
    "image": null,
    "options": {
      "A": "Stop in a proper and convenient place",
      "B": "Slow down and allow others to overtake",
      "C": "Reduce your speed wherever you are",
      "D": "Keep the call time to a minimum"
    },
    "answer": "A"
  },
  {
    "number": 384,
    "question": "What is the most likely cause of high fuel consumption?",
    "image": null,
    "options": {
      "A": "Harsh braking and accelerating",
      "B": "Poor steering control",
      "C": "Accelerating around bends",
      "D": "Staying in high gears"
    },
    "answer": "A"
  },
  {
    "number": 385,
    "question": "Why should you particularly look for motorcyclists and cyclists at any junction?",
    "image": null,
    "options": {
      "A": "They are harder to see",
      "B": "They might not see you turn",
      "C": "They nay want to turn into the side road",
      "D": "They may slow down to let you turn"
    },
    "answer": "A"
  },
  {
    "number": 386,
    "question": "Unbalanced wheels on a car may cause",
    "image": null,
    "options": {
      "A": "Poor acceleration",
      "B": "Poor braking",
      "C": "The tyres to wear out",
      "D": "The steering to vibrate"
    },
    "answer": "D"
  },
  {
    "number": 387,
    "question": "Which one is adversely affected if the tyres are under-inflated?",
    "image": null,
    "options": {
      "A": "Accelerating",
      "B": "Braking",
      "C": "Changing gear",
      "D": "Parking"
    },
    "answer": "B"
  },
  {
    "number": 388,
    "question": "A provisional licence holder must not drive a motor car",
    "image": null,
    "options": {
      "A": "With passengers",
      "B": "At night",
      "C": "Alone",
      "D": "On a dual carriageway"
    },
    "answer": "C"
  },
  {
    "number": 389,
    "question": "At a crossroads there are no signs or road markings. Two vehicles approach. Which has priority?",
    "image": null,
    "options": {
      "A": "Oncoming vehicles turning right",
      "B": "The vehicle travelling the fastest",
      "C": "Vehicles approaching from the right",
      "D": "Neither of the vehicles"
    },
    "answer": "D"
  },
  {
    "number": 390,
    "question": "It is very windy. You are behind a motorcyclist who is overtaking a high-sided vehicle. What should you do?",
    "image": null,
    "options": {
      "A": "Overtake the motorcyclist immediately",
      "B": "Keep well back",
      "C": "Keep close to the motorcyclist",
      "D": "Stay level with the motorcyclist"
    },
    "answer": "B"
  },
  {
    "number": 391,
    "question": "At an accident you suspect a casualty has back injuries. The area is safe. You should:",
    "image": null,
    "options": {
      "A": "Offer them a drink",
      "B": "Raise their legs",
      "C": "Offer them a cigarette",
      "D": "Not move them"
    },
    "answer": "D"
  },
  {
    "number": 392,
    "question": "You should NEVER attempt to overtake a cyclist",
    "image": null,
    "options": {
      "A": "Just before you turn left",
      "B": "On a one-way street",
      "C": "Just before you turn right",
      "D": "On a dual carriageway"
    },
    "answer": "A"
  },
  {
    "number": 393,
    "question": "You are parked in a busy high street. What is the safest way to turn your vehicle around so you can go the opposite way?",
    "image": null,
    "options": {
      "A": "Do a U-turn",
      "B": "Get someone to stop the traffic",
      "C": "Drive into a side road and reverse into the main road",
      "D": "Find a quiet side road to turn around in"
    },
    "answer": "D"
  },
  {
    "number": 394,
    "question": "You are driving on a multi-lane carriageway. By mistake, you go past the exit that you wanted to take. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa817048ee9c.jpg",
    "options": {
      "A": "Carefully reverse on the hard shoulder",
      "B": "Carefully reverse in the left-hand lane",
      "C": "Carry on to the next exit",
      "D": "Make a U-turn at the next gap in the central reservation"
    },
    "answer": "C"
  },
  {
    "number": 395,
    "question": "You are driving in fog. Why should you keep well back from the vehicle in front?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa817542f379.jpg",
    "options": {
      "A": "In case its brake lights dazzle you",
      "B": "In case its fog lights dazzle you",
      "C": "In case it changes direction suddenly",
      "D": "In case it stops suddenly"
    },
    "answer": "D"
  },
  {
    "number": 396,
    "question": "When driving through a ford or floodwater, what gear should you be in?",
    "image": null,
    "options": {
      "A": "Third",
      "B": "First or second",
      "C": "Fourth",
      "D": "Fifth"
    },
    "answer": "B"
  },
  {
    "number": 397,
    "question": "You are waiting to emerge from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?",
    "image": null,
    "options": {
      "A": "The large vehicle can easily hide an overtaking vehicle",
      "B": "The large vehicle can easily hide vehicles from the left",
      "C": "The large vehicle is difficult to steer in a straight line",
      "D": "The large vehicle can turn suddenly"
    },
    "answer": "A"
  },
  {
    "number": 398,
    "question": "How can you use the engine of your vehicle as a brake?",
    "image": null,
    "options": {
      "A": "By changing to a higher gear",
      "B": "By changing to a lower gear",
      "C": "By selecting reverse gear",
      "D": "By selecting neutral gear"
    },
    "answer": "B"
  },
  {
    "number": 399,
    "question": "What does a sign with a brown background show?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa818f18f4c2.jpg",
    "options": {
      "A": "Minor routes",
      "B": "Tourist directions",
      "C": "Primary roads",
      "D": "Motorway routes"
    },
    "answer": "B"
  },
  {
    "number": 400,
    "question": "You are driving in very wet weather. Your vehicle begins to slide. This affect is called:",
    "image": null,
    "options": {
      "A": "Aquaplaning",
      "B": "Weaving",
      "C": "Hosing",
      "D": "Fading"
    },
    "answer": "A"
  },
  {
    "number": 401,
    "question": "A long, heavily laden lorry is taking a long time to overtake you. What should you do?",
    "image": null,
    "options": {
      "A": "Slow down",
      "B": "Hold you speed",
      "C": "Change direction",
      "D": "Speed up"
    },
    "answer": "A"
  },
  {
    "number": 402,
    "question": "You are driving on a dual carriageway and the car ahead shows its hazard lights for a short time. This tells you that:",
    "image": null,
    "options": {
      "A": "The other car is going to change lanes",
      "B": "Traffic ahead is slowing or stopping suddenly",
      "C": "There is a police speed check up ahead",
      "D": "The driver wants you to overtake"
    },
    "answer": "B"
  },
  {
    "number": 403,
    "question": "You see this sign ahead. You should expect the road to:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa867e7b6301.jpg",
    "options": {
      "A": "Bend sharply to the right",
      "B": "Bend sharply to the left",
      "C": "Go steeply downhill",
      "D": "Go steeply downhill"
    },
    "answer": "B"
  },
  {
    "number": 404,
    "question": "Freezing conditions will affect the distance it takes you to come to a stop. You should expect stopping distances to increase by up to",
    "image": null,
    "options": {
      "A": "Ten (10) times",
      "B": "Three (3) times",
      "C": "Two (2) times",
      "D": "Five (5) times"
    },
    "answer": "A"
  },
  {
    "number": 405,
    "question": "At a pelican crossing the flashing amber light means you MUST",
    "image": null,
    "options": {
      "A": "Give way to pedestrians waiting to cross",
      "B": "Stop and wait for the red light",
      "C": "Stop and wait for the green light",
      "D": "Give way to pedestrians already on the crossing"
    },
    "answer": "D"
  },
  {
    "number": 406,
    "question": "The most important reason for having a properly adjusted head restraint is to",
    "image": null,
    "options": {
      "A": "Make you more comfortable",
      "B": "Help you to relax",
      "C": "Help you to maintain your driving position",
      "D": "Help you to avoid neck injury"
    },
    "answer": "D"
  },
  {
    "number": 407,
    "question": "What is the nearest you can park your vehicle to a junction?",
    "image": null,
    "options": {
      "A": "20 meters",
      "B": "22 meters",
      "C": "15 meters",
      "D": "10    meters "
    },
    "answer": "D"
  },
  {
    "number": 408,
    "question": "When may you use hazard warning lights?",
    "image": null,
    "options": {
      "A": "To park alongside another car",
      "B": "When you are being towed",
      "C": "To park on double yellow lines",
      "D": "When you have broken down"
    },
    "answer": "D"
  },
  {
    "number": 409,
    "question": "Road humps, chicanes, and road narrowing &#39;s are",
    "image": null,
    "options": {
      "A": "At toll-bridge approaches only",
      "B": "Used to increase traffic speed",
      "C": "Always at major road works",
      "D": "Traffic calming measures"
    },
    "answer": "D"
  },
  {
    "number": 410,
    "question": "The driver of the car in front is giving this signal. What does it mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa869333d237.jpg",
    "options": {
      "A": "The drivers intends to turn left",
      "B": "The driver is slowing down",
      "C": "The driver intends to turn right",
      "D": "The driver wishes to overtake"
    },
    "answer": "A"
  },
  {
    "number": 411,
    "question": "You are driving in heavy rain. Your steering suddenly becomes very light. You should",
    "image": null,
    "options": {
      "A": "Ease off the accelerator",
      "B": "Steer towards the side of the road",
      "C": "Brake firmly to reduce speed",
      "D": "Apply gentle acceleration"
    },
    "answer": "A"
  },
  {
    "number": 412,
    "question": "What does the sign mean?",
    "image": null,
    "options": {
      "A": "No pedestrians",
      "B": "Route for pedestrians",
      "C": "Pedestrians in the road ahead",
      "D": "Pedestrian crossing"
    },
    "answer": "A"
  },
  {
    "number": 413,
    "question": "You see this sign ahead. It means:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa869d1bc795.jpg",
    "options": {
      "A": "Waiting restrictions apply",
      "B": "No stopping",
      "C": "No entry",
      "D": "National speed limit applies"
    },
    "answer": "B"
  },
  {
    "number": 414,
    "question": "Coasting the car:",
    "image": null,
    "options": {
      "A": "Reduces the driver &rsquo;s control",
      "B": "Makes steering easier",
      "C": "Improves the driver &rsquo;s control",
      "D": "Uses more fuel"
    },
    "answer": "A"
  },
  {
    "number": 415,
    "question": "You are driving behind a long vehicle. It approaches a crossroads and signals left, but moves out to the right. You should:-",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa86d643e914.jpg",
    "options": {
      "A": "Assume the signal is wrong and it is really turning right",
      "B": "Overtake as it starts to slow down",
      "C": "Get closer in order to pass it quickly",
      "D": "Stay well back and give it room"
    },
    "answer": "D"
  },
  {
    "number": 416,
    "question": "You are driving in traffic at the speed limit for the road. The driver behind is going to overtake. You should:",
    "image": null,
    "options": {
      "A": "Move closer to the car ahead, so the driver behind has no room to overtake",
      "B": "Keep a steady course and allow the driver behind to overtake",
      "C": "Accelerate to get away from the driver behind",
      "D": "Wave the driver behind to overtake when it is safe"
    },
    "answer": "B"
  },
  {
    "number": 417,
    "question": "You are waiting in a traffic queue at night. &nbsp;To avoid dazzling the drivers behind, you should:",
    "image": null,
    "options": {
      "A": "Apply the footbrake only",
      "B": "Switch off your headlights",
      "C": "Use both the handbrake and footbrake",
      "D": "Apply the handbrake only"
    },
    "answer": "D"
  },
  {
    "number": 418,
    "question": "A pedestrian with a white stick and red band is",
    "image": null,
    "options": {
      "A": "Deaf and dumb",
      "B": "Over 65 years old",
      "C": "Blind only",
      "D": "Deaf and blind"
    },
    "answer": "D"
  },
  {
    "number": 419,
    "question": "You arrive at the scene of a motorcycle accident and the rider is injured. When should the helmet be removed?",
    "image": null,
    "options": {
      "A": "Always straight away.",
      "B": "Only when it is essential.",
      "C": "Always, unless they are in shock.",
      "D": "Only when the motorcyclist asks"
    },
    "answer": "B"
  },
  {
    "number": 420,
    "question": "You are on a busy main road and find that you are in a wrong direction. What should you do?",
    "image": null,
    "options": {
      "A": "Turn round in a side road",
      "B": "Turn into a side road on the road on the right and reverse into the main road.",
      "C": "Make a &lsquo;three point &rsquo;turn in the main road",
      "D": "Make a U-turn in the main road"
    },
    "answer": "A"
  },
  {
    "number": 421,
    "question": "What is the safest way to use a mobile phone in a car?",
    "image": null,
    "options": {
      "A": "Drive slowly on a quiet road",
      "B": "Direct your call thought the operator",
      "C": "Find a suitable place to stop",
      "D": "Use hands-free equipment"
    },
    "answer": "C"
  },
  {
    "number": 422,
    "question": "Planning your journey to avoid busy times has a number of advantages. One of these is",
    "image": null,
    "options": {
      "A": "Your journey will take longer",
      "B": "Your stress levels will be greater",
      "C": "You will cause more pollution",
      "D": "You will have a more pleasant journey"
    },
    "answer": null
  },
  {
    "number": 423,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa86ff8065b7.jpg",
    "options": {
      "A": "Two-way traffic ahead",
      "B": "You have priority over vehicles from the opposite direction",
      "C": "No overtaking",
      "D": "You are entering a one way street"
    },
    "answer": "B"
  },
  {
    "number": 424,
    "question": "How does alcohol affect your driving?",
    "image": null,
    "options": {
      "A": "It improves your coordination",
      "B": "It reduces your concentration",
      "C": "It speeds up your reactions",
      "D": "It increases your awareness"
    },
    "answer": "B"
  },
  {
    "number": 425,
    "question": "You are driving on an icy road. How can you avoid wheel spin?",
    "image": null,
    "options": {
      "A": "Use the handbrake if the wheels start to slip",
      "B": "Drive in a low gear at all times",
      "C": "Drive at a slow speed in as high gear as possible",
      "D": "Brake gently and repeatedly"
    },
    "answer": "C"
  },
  {
    "number": 426,
    "question": "You want to turn right from a main road into a side road. Just before you turn you should",
    "image": null,
    "options": {
      "A": "Select first gear",
      "B": "Stop and set the handbrake",
      "C": "Cancel your right-turn signal",
      "D": "Check for traffic overtaking on your right"
    },
    "answer": "D"
  },
  {
    "number": 427,
    "question": "What is the nearest you may park to a junction?",
    "image": null,
    "options": {
      "A": "12 meters (39 feet)",
      "B": "10 meters  (32 feet)",
      "C": "15 meters (49 feet)",
      "D": "20 meters (66 feet)"
    },
    "answer": "B"
  },
  {
    "number": 428,
    "question": "A flashing green beacon on a vehicle means",
    "image": null,
    "options": {
      "A": "Police on non-urgent duties",
      "B": "Doctor on an emergency call",
      "C": "Road safety patrol operating",
      "D": "Gritting in progress"
    },
    "answer": "B"
  },
  {
    "number": 429,
    "question": "You have driven your car through a flood. What is the first thing you should do?",
    "image": null,
    "options": {
      "A": "Stop and check the tyres",
      "B": "Stop and dry the brakes",
      "C": "Test your brakes",
      "D": "Switch on your windscreen wipers"
    },
    "answer": "C"
  },
  {
    "number": 430,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa8726b58dc5.jpg",
    "options": {
      "A": "Two-way traffic",
      "B": "You have priority",
      "C": "No overtaking",
      "D": "No motor vehicles"
    },
    "answer": "C"
  },
  {
    "number": 431,
    "question": "What is the safest way to us a mobile phone in you vehicle?",
    "image": null,
    "options": {
      "A": "Direct your call through the operator",
      "B": "Drive slowly on a quiet road",
      "C": "Use hands-free equipment",
      "D": "Find a suitable place to stop"
    },
    "answer": "D"
  },
  {
    "number": 432,
    "question": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
    "image": null,
    "options": {
      "A": "Right",
      "B": "Any direction",
      "C": "Left",
      "D": "Straight ahead"
    },
    "answer": "B"
  },
  {
    "number": 433,
    "question": "Why are vehicles fitted with rear fog lights?",
    "image": null,
    "options": {
      "A": "To be seen when driving at high speed",
      "B": "To warn drivers following closely to drop back",
      "C": "To make them more visible in thick fog",
      "D": "To use if broken down in a dangerous position"
    },
    "answer": "C"
  },
  {
    "number": 434,
    "question": "You intend to turn right into a side road. Just before turning you should check for motorcyclists who may be:",
    "image": null,
    "options": {
      "A": "Emerging from the side road",
      "B": "Overtaking on your left",
      "C": "Overtaking on your right",
      "D": "Following you closely"
    },
    "answer": "C"
  },
  {
    "number": 435,
    "question": "You intend to turn right into a side road. Just before turning you should check for motorcyclists who might be",
    "image": null,
    "options": {
      "A": "Emerging from the side road",
      "B": "Following you closely",
      "C": "Overtaking on your right",
      "D": "Overtaking you on the left"
    },
    "answer": "C"
  },
  {
    "number": 436,
    "question": "Someone is waiting to cross at a zebra crossing. They are standing on the pavement. You should normally:",
    "image": null,
    "options": {
      "A": "Go on quickly before they step onto the crossing",
      "B": "Stop, let them cross, wait patiently",
      "C": "Ignore them as they are still on the pavement",
      "D": "Stop before you reach the zigzag lines and let them cross"
    },
    "answer": "B"
  },
  {
    "number": 437,
    "question": "When are you permitted to exceed the maximum speed limit?",
    "image": null,
    "options": {
      "A": "Between midnight and 6 am",
      "B": "At no time",
      "C": "When overtaking",
      "D": "When the road is clear"
    },
    "answer": "B"
  },
  {
    "number": 438,
    "question": "You must not reverse:",
    "image": null,
    "options": {
      "A": "Into a side road",
      "B": "In a built-up area",
      "C": "For longer than necessary",
      "D": "For more than a car &rsquo;s length"
    },
    "answer": "C"
  },
  {
    "number": 439,
    "question": "What does this sign means?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa874b216d4d.jpg",
    "options": {
      "A": "Turn left ahead",
      "B": "Give way",
      "C": "T-junction",
      "D": "No through road"
    },
    "answer": "C"
  },
  {
    "number": 440,
    "question": "You are driving on a wet road and you have to stop your vehicle in an emergency. You should:",
    "image": null,
    "options": {
      "A": "Keep both hands on the wheel",
      "B": "Apply the handbrake and footbrake together",
      "C": "Select reverse gear",
      "D": "Give an arm signal in an emergency, you will brake hard on the footbrake, which most likely will cause skidding on a wet road. To have a better control of your vehicle, you should keep both of your hands on the steering wheel."
    },
    "answer": "A"
  },
  {
    "number": 441,
    "question": "You are driving along a narrow country road. &nbsp;When passing the cyclist you should drive",
    "image": null,
    "options": {
      "A": "Slowly, leaving plenty of room",
      "B": "Quickly, leaving plenty of room",
      "C": "Quickly, sounding the horn as you pass",
      "D": "Slowly, sounding the horn as you pass"
    },
    "answer": "A"
  },
  {
    "number": 442,
    "question": "You are driving behind a large vehicle. It signals left but steers to the right. You should:",
    "image": null,
    "options": {
      "A": "Drive on, keeping to the left",
      "B": "Hold your speed and sound your horn",
      "C": "Overtake on the right of it",
      "D": "Slow down and let the vehicle turn"
    },
    "answer": "D"
  },
  {
    "number": 443,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa875c2f27f9.png",
    "options": {
      "A": "Keep in one lane",
      "B": "Do not overtake",
      "C": "Give way to oncoming traffic",
      "D": "Form two lanes"
    },
    "answer": "B"
  },
  {
    "number": 444,
    "question": "It is very windy. You are behind a motorcyclist who is overtaking a high vehicle. What should you do?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa87695398b6.jpg",
    "options": {
      "A": "Keep close to the motorcyclist",
      "B": "Stay level with the motorcycle",
      "C": "Overtake the motorcyclist immediately",
      "D": "Keep well back"
    },
    "answer": "D"
  },
  {
    "number": 445,
    "question": "You see a group of horse riders as you approach a roundabout. They are indicating right but keeping well to the left. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa878843f626.jpg",
    "options": {
      "A": "Keep close of them",
      "B": "Cut in front of them",
      "C": "Proceed as normal",
      "D": "Stay well back"
    },
    "answer": "D"
  },
  {
    "number": 446,
    "question": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
    "image": null,
    "options": {
      "A": "10 meters (33 feet)",
      "B": "30 meters (98 feet)",
      "C": "20.5 meters  (67 feet)",
      "D": "15 meters (49 feet)"
    },
    "answer": "C"
  },
  {
    "number": 447,
    "question": "You should never attempt to overtake cyclists",
    "image": null,
    "options": {
      "A": "When approaching a roundabout",
      "B": "On a right hand bend",
      "C": "Just before you turn left",
      "D": "On narrow road"
    },
    "answer": "C"
  },
  {
    "number": 448,
    "question": "You are approaching a bend at a high speed. You should begin to brake.",
    "image": null,
    "options": {
      "A": "Before the bend",
      "B": "After the bend",
      "C": "On the bend",
      "D": "After changing gears"
    },
    "answer": "A"
  },
  {
    "number": 449,
    "question": "At an accident a casualty is unconscious but still breathing. You should only move them if",
    "image": null,
    "options": {
      "A": "There is further danger",
      "B": "Bystanders will help you to",
      "C": "An ambulance is on its way",
      "D": "Bystanders advise you to"
    },
    "answer": "A"
  },
  {
    "number": 450,
    "question": "Your overall stopping distance will be much longer when:",
    "image": null,
    "options": {
      "A": "Driving on a very hot day",
      "B": "Driving in strong winds",
      "C": "Driving in fog",
      "D": "Driving in rain"
    },
    "answer": "D"
  },
  {
    "number": 451,
    "question": "Why should you make sure your indicators are cancelled after turning?",
    "image": null,
    "options": {
      "A": "To avoid dazzling other road users",
      "B": "To avoid damage to the indicator relay",
      "C": "To avoid misleading other road users",
      "D": "To avoid flattening the battery"
    },
    "answer": "C"
  },
  {
    "number": 452,
    "question": "Which of these, if allowed to get low, is dangerous?",
    "image": null,
    "options": {
      "A": "Antifreeze level",
      "B": "Battery water level",
      "C": "Brake fluid level",
      "D": "Radiator coolant level"
    },
    "answer": "C"
  },
  {
    "number": 453,
    "question": "A police officer asks to see your documents. You do not have them with you. You may be asked to take them to the police station with",
    "image": null,
    "options": {
      "A": "5 days",
      "B": "7 days",
      "C": "14 days",
      "D": "21 days"
    },
    "answer": "B"
  },
  {
    "number": 454,
    "question": "The age group most likely to be involved in road accidents is",
    "image": null,
    "options": {
      "A": "46 to 55-year-olds",
      "B": "30 to 45-year-olds",
      "C": "55 to 66-year olds",
      "D": "17 to 25-year-olds"
    },
    "answer": "D"
  },
  {
    "number": 455,
    "question": "You go to a social event and need to drive a short time after. What precautions should you take?",
    "image": null,
    "options": {
      "A": "Avoid drinking alcohol on an empty stomach",
      "B": "Avoid drinking alcohol completely",
      "C": "Drink plenty of coffee after drinking alcohol",
      "D": "Drink plenty of milk before drinking alcohol"
    },
    "answer": "B"
  },
  {
    "number": 456,
    "question": "In normal conditions the braking distance when travelling at 50 mph is",
    "image": null,
    "options": {
      "A": "25 meters",
      "B": "38    meters ",
      "C": "14 meters",
      "D": "16 meters"
    },
    "answer": "B"
  },
  {
    "number": 457,
    "question": "If you notice a strong smell of petrol as you are driving along you should",
    "image": null,
    "options": {
      "A": "Expect it to stop in a few miles",
      "B": "Stop at a suitable place and investigate the problem",
      "C": "Not worry, as it is only exhaust fumes",
      "D": "Carry on at a reduced speed"
    },
    "answer": "B"
  },
  {
    "number": 458,
    "question": "Which statement represents being in safe control of your vehicle?",
    "image": null,
    "options": {
      "A": "One hand on the steering wheel and the other simply hanging out of the window to catch the breeze and look cool or wave to friends.",
      "B": "One hand on the steering wheel and the other grasping the gear lever for the most part to facilitate instant gear changes.",
      "C": "One hand on the steering wheel and the other being used to hold a mobile phone.",
      "D": "Both hands on the steering wheel at all times , and only when a change of gear or operation of controls is necessary that one hand is taken off the steering wheel."
    },
    "answer": "D"
  },
  {
    "number": 459,
    "question": "When emerging from a side road into a queue of traffic which cars can be especially difficult to see?",
    "image": null,
    "options": {
      "A": "Motorcycles",
      "B": "Cars",
      "C": "Milk floats",
      "D": "Tractors"
    },
    "answer": "A"
  },
  {
    "number": 460,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa87caa86ae3.jpg",
    "options": {
      "A": "No motor vehicles",
      "B": "Clearway (no stopping)",
      "C": "No overtaking",
      "D": "Cars and motorcycles only"
    },
    "answer": "A"
  },
  {
    "number": 461,
    "question": "When going straight ahead at a roundabout you should",
    "image": null,
    "options": {
      "A": "Indicate left before leaving the roundabout",
      "B": "Not indicate at any time",
      "C": "Indicate left when approaching the roundabout",
      "D": "Indicate right when approaching the roundabout"
    },
    "answer": "A"
  },
  {
    "number": 462,
    "question": "What is most likely to cause high fuel consumption?",
    "image": null,
    "options": {
      "A": "Poor steering control",
      "B": "Staying in high gears",
      "C": "Aggressive braking",
      "D": "Driving above 50 mph"
    },
    "answer": "D"
  },
  {
    "number": 463,
    "question": "A heavy load on your roof rack will:",
    "image": null,
    "options": {
      "A": "Make the steering lighter",
      "B": "Reduce the stopping distance",
      "C": "Reduce stability",
      "D": "Improve the road holding"
    },
    "answer": "C"
  },
  {
    "number": 464,
    "question": "You are following a vehicle at a safe distance on a wet and slippery road. Another driver overtakes you and pulls into the gap you have left. What should you do?",
    "image": null,
    "options": {
      "A": "Stay close to the other vehicle until it moves on",
      "B": "Try to overtake safely as soon as you can",
      "C": "Drop back to regain a safe distance",
      "D": "Flash your headlights as a warning"
    },
    "answer": "C"
  },
  {
    "number": 465,
    "question": "If you are turning left into a side road what hazards should you be especially aware of?",
    "image": null,
    "options": {
      "A": "Traffic congestion",
      "B": "Pedestrians",
      "C": "One way street",
      "D": "Parked vehicles."
    },
    "answer": "B"
  },
  {
    "number": 466,
    "question": "At a puffin crossing which light won &#39;t you see?",
    "image": null,
    "options": {
      "A": "Steady amber",
      "B": "Red",
      "C": "Flashing amber",
      "D": "Green"
    },
    "answer": "C"
  },
  {
    "number": 467,
    "question": "To avoid spilling after refueling, you should make sure that:",
    "image": null,
    "options": {
      "A": "You have used a locking filler cap",
      "B": "Your filler cap is securely fastened",
      "C": "Your tank is only 3/4 full",
      "D": "You check your fuel gauge is working"
    },
    "answer": "A"
  },
  {
    "number": 468,
    "question": "If you are following a car driven by an elderly driver, you should:",
    "image": null,
    "options": {
      "A": "Stay close behind and drive carefully",
      "B": "Expect the driver to drive badly",
      "C": "Be aware that the driver &rsquo;s reactions may not be as fast as yours",
      "D": "Flash your lights and overtake"
    },
    "answer": "C"
  },
  {
    "number": 469,
    "question": "In fast moving traffic a two (2) second gap may be enough only when conditions are:",
    "image": null,
    "options": {
      "A": "Foggy",
      "B": "Dry",
      "C": "Damp",
      "D": "Wet"
    },
    "answer": "B"
  },
  {
    "number": 470,
    "question": "Overloading your vehicle can seriously affect?",
    "image": null,
    "options": {
      "A": "Your comfort",
      "B": "Your ability to change gears",
      "C": "The steering",
      "D": "The Handling"
    },
    "answer": "C"
  },
  {
    "number": 471,
    "question": "You are going straight ahead at a roundabout. How should you signal?",
    "image": null,
    "options": {
      "A": "Signal right on the approach and then left to leave the roundabout",
      "B": "Signal left just after you pass the exit before the one you will take",
      "C": "Signal left on the approach to the roundabout and keep the signal on until you leave",
      "D": "Signal left as you leave the roundabouts"
    },
    "answer": "B"
  },
  {
    "number": 472,
    "question": "You are dazzled by oncoming headlights when driving at night. What should you do?",
    "image": null,
    "options": {
      "A": "Slow down or stop",
      "B": "Flash your lights",
      "C": "Brake hard",
      "D": "Drive faster past the oncoming car"
    },
    "answer": "A"
  },
  {
    "number": 473,
    "question": "It is essential that tyre pressures be checked regularly. When should this be done?",
    "image": null,
    "options": {
      "A": "When tyres are hot",
      "B": "After any length journey",
      "C": "After travelling at high speed",
      "D": "When tyres are cold"
    },
    "answer": "D"
  },
  {
    "number": 474,
    "question": "You are turning right onto a dual carriageway. What should you do before emerging?",
    "image": null,
    "options": {
      "A": "Position your vehicle well to the left of the side of the road",
      "B": "Make sure that you leave enough room for a vehicle behind",
      "C": "Stop, apply the handbrake then select a low gear",
      "D": "Check that the central reservation is wide enough for your vehicle"
    },
    "answer": "D"
  },
  {
    "number": 475,
    "question": "You enter a road where there are road humps. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa880c99c5be.jpg",
    "options": {
      "A": "Accelerate quickly between each one",
      "B": "Maintain a reduced speed throughout",
      "C": "Drive slowly at school times only",
      "D": "Always keep to the maximum legal speed"
    },
    "answer": "B"
  },
  {
    "number": 476,
    "question": "You are following a slow-moving vehicle on a narrow country road. There is a junction just ahead on the right. What should you do?",
    "image": null,
    "options": {
      "A": "Overtake after checking your mirrors and signaling",
      "B": "Stay behind until you are past the junction",
      "C": "Slow down and prepare to overtake on the left",
      "D": "Accelerate quickly to pass before the junction"
    },
    "answer": "B"
  },
  {
    "number": 477,
    "question": "Who is responsible for ensuring that a vehicle is fully road worthy when driven on a public road?",
    "image": null,
    "options": {
      "A": "Nobody in particular",
      "B": "The VRT tester",
      "C": "You, the driver",
      "D": "Your mechanic"
    },
    "answer": "C"
  },
  {
    "number": 478,
    "question": "You see a pedestrian with a white stick and red band. This means that the person is",
    "image": null,
    "options": {
      "A": "Blind only",
      "B": "Deaf only",
      "C": "Physically disabled",
      "D": "Deaf and blind"
    },
    "answer": "D"
  },
  {
    "number": 479,
    "question": "You are following a vehicle on a wet road. You should leave a time gap of at least",
    "image": null,
    "options": {
      "A": "Four (4) seconds",
      "B": "One (1)  second",
      "C": "Two (2) seconds",
      "D": "Three (3) seconds"
    },
    "answer": "A"
  },
  {
    "number": 480,
    "question": "The safest place to park your vehicle at night is",
    "image": null,
    "options": {
      "A": "On a driveway",
      "B": "On a quiet side street",
      "C": "In a garage",
      "D": "In a car park"
    },
    "answer": "C"
  },
  {
    "number": 481,
    "question": "When the fluid level in your battery is low you should top it up with",
    "image": null,
    "options": {
      "A": "Water that has been boiled",
      "B": "Distilled water",
      "C": "Battery acid",
      "D": "Tap water"
    },
    "answer": "B"
  },
  {
    "number": 482,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa94676ce2f9.jpg",
    "options": {
      "A": "School crossing patrol",
      "B": "National speed limit",
      "C": "Waiting restrictions",
      "D": "No entry"
    },
    "answer": "C"
  },
  {
    "number": 483,
    "question": "You are on a road that has no traffic signs. There are streetlights. What is the speed limit?",
    "image": null,
    "options": {
      "A": "30 mph",
      "B": "50 mph",
      "C": "40 mph",
      "D": "20 mph"
    },
    "answer": "A"
  },
  {
    "number": 484,
    "question": "While driving, you intend to turn left into a minor road. On the approach you should:",
    "image": null,
    "options": {
      "A": "Keep in the middle of the road",
      "B": "Keep well to the left of the road",
      "C": "Keep just left of the middle of the road",
      "D": "Swing out wide just before turning"
    },
    "answer": "B"
  },
  {
    "number": 485,
    "question": "Front fog lights may be used ONLY",
    "image": null,
    "options": {
      "A": "During &lsquo;lighting up &rsquo;times only",
      "B": "Between dusk and dawn",
      "C": "When visibility is seriously reduced",
      "D": "If they are not as bright as the headlights"
    },
    "answer": "C"
  },
  {
    "number": 486,
    "question": "Motorcyclists should wear bright clothing mainly so that",
    "image": null,
    "options": {
      "A": "The colours are popular",
      "B": "It helps keep them cool in summer",
      "C": "They must do so by law",
      "D": "Other road users can see them more easily"
    },
    "answer": "D"
  },
  {
    "number": 487,
    "question": "What does this traffic sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa94802ae617.jpg",
    "options": {
      "A": "Give priority to oncoming traffic",
      "B": "No overtaking allowed",
      "C": "Two way traffic",
      "D": "One-way traffic only"
    },
    "answer": "A"
  },
  {
    "number": 488,
    "question": "When are passengers allowed to ride in a caravan that is being towed?",
    "image": null,
    "options": {
      "A": "When travelling on minor roads",
      "B": "When they are over 18 years old",
      "C": "When travelling on motorways",
      "D": "Never"
    },
    "answer": "D"
  },
  {
    "number": 489,
    "question": "When driving in snow it is best to keep in as high a gear as possible. Why is this?",
    "image": null,
    "options": {
      "A": "So that wheel spin does not cause your engine to run too fast",
      "B": "To leave a lower gear available in case of wheel spin",
      "C": "To help prevent wheel spin",
      "D": "To help you slow down quickly when you brake"
    },
    "answer": "C"
  },
  {
    "number": 490,
    "question": "Travelling on a wet motorway with road spray you should",
    "image": null,
    "options": {
      "A": "Turn on your hazard lights",
      "B": "Turn on your front fog lights",
      "C": "Turn on your rear fog lights",
      "D": "Turn your headlights to dipped mode"
    },
    "answer": "D"
  },
  {
    "number": 491,
    "question": "Why is coasting wrong or dangerous?",
    "image": null,
    "options": {
      "A": "There is no engine braking",
      "B": "It will cause the car to skid",
      "C": "The engine will run faster",
      "D": "It will make the engine stall"
    },
    "answer": "A"
  },
  {
    "number": 492,
    "question": "You are to turn right in busy traffic. How would you confirm your intention safely?",
    "image": null,
    "options": {
      "A": "Flash your headlamp",
      "B": "Position over the centre line at an angle",
      "C": "Sound the horn",
      "D": "Give an arm signal also"
    },
    "answer": "D"
  },
  {
    "number": 493,
    "question": "You are driving on a quiet country road. What should you expect to see coming towards you on YOUR side of the road?",
    "image": null,
    "options": {
      "A": "Motorcycles",
      "B": "Bicycles",
      "C": "Pedestrians",
      "D": "Horse riders"
    },
    "answer": "C"
  },
  {
    "number": 494,
    "question": "A properly adjusted head rest will:",
    "image": null,
    "options": {
      "A": "Help you to maintain your driving position",
      "B": "Help you to avoid neck injury",
      "C": "Make you more comfortable",
      "D": "Help you to relax"
    },
    "answer": "B"
  },
  {
    "number": 495,
    "question": "To help prevent your vehicle &#39;s radio from being stolen you can",
    "image": null,
    "options": {
      "A": "Install a cheap, no frills radio",
      "B": "Install a security coded radio",
      "C": "Park in a busy area",
      "D": "Park in a quiet area"
    },
    "answer": null
  },
  {
    "number": 496,
    "question": "Excessive or uneven wear in one or more tyres can be caused by faults in the:",
    "image": null,
    "options": {
      "A": "Braking system",
      "B": "Gearbox",
      "C": "Steering Wheel",
      "D": "Exhaust system"
    },
    "answer": "A"
  },
  {
    "number": 497,
    "question": "A driver pulls out of a side road in front of you. You have to brake hard. You should",
    "image": null,
    "options": {
      "A": "Overtake as soon as possible",
      "B": "Ignore the error and stay calm",
      "C": "Sound your horn to show your annoyance",
      "D": "Flash your lights to show your annoyance"
    },
    "answer": "B"
  },
  {
    "number": 498,
    "question": "Using front/rear fog lights in good visibility will:",
    "image": null,
    "options": {
      "A": "Dazzle other drivers",
      "B": "Flatten the battery",
      "C": "Improve your visibility",
      "D": "Increase your awareness"
    },
    "answer": "A"
  },
  {
    "number": 499,
    "question": "You are travelling along the left-hand lane of a three-lane motorway. Traffic is joining from a slip road. You should",
    "image": null,
    "options": {
      "A": "Race the other vehicles",
      "B": "Switch on your hazard lights",
      "C": "Move to another lane",
      "D": "Maintain a steady speed"
    },
    "answer": "C"
  },
  {
    "number": 500,
    "question": "The right hand lane on a three-lane motorway is used for",
    "image": null,
    "options": {
      "A": "Cruising at low speeds",
      "B": "Cruising at high speeds",
      "C": "High-sided vehicles",
      "D": "Overtaking"
    },
    "answer": "D"
  },
  {
    "number": 501,
    "question": "You are driving behind a large vehicle. It signals left but steers to the right. You should:",
    "image": null,
    "options": {
      "A": "Slow down and let the vehicle turn",
      "B": "Overtake on the right of it",
      "C": "Hold your speed and sound your horn",
      "D": "Drive on, keeping to the left"
    },
    "answer": "A"
  },
  {
    "number": 502,
    "question": "Car passengers MUST wear a seat belt if one is available, unless they are",
    "image": null,
    "options": {
      "A": "Travelling within a congestion charging zone",
      "B": "In a vehicle fitted with airbags",
      "C": "Sitting in the rear seat",
      "D": "Exempt for medical reasons"
    },
    "answer": "D"
  },
  {
    "number": 503,
    "question": "It is very blustery and windy. You are about to overtake a motorcyclist. You should:",
    "image": null,
    "options": {
      "A": "Overtake slowly",
      "B": "Keep close as you pass",
      "C": "Sound your horn",
      "D": "Allow extra room"
    },
    "answer": "D"
  },
  {
    "number": 504,
    "question": "You wish to overtake a long, slow moving vehicle or lorry on a busy road with oncoming traffic. You should:",
    "image": null,
    "options": {
      "A": "Keep well back until you can see that it is clear",
      "B": "Stay behind until the driver waves you past",
      "C": "Follow it closely and keep moving out to see the road ahead",
      "D": "Flash your headlights for the oncoming traffic to give way"
    },
    "answer": "A"
  },
  {
    "number": 505,
    "question": "What does a sign with a brown background show?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9105d951dd.jpg",
    "options": {
      "A": "Tourist directions",
      "B": "Primary roads",
      "C": "Minor routes",
      "D": "Motorway routes"
    },
    "answer": "A"
  },
  {
    "number": 506,
    "question": "When should you especially check the engine oil level?",
    "image": null,
    "options": {
      "A": "On a cold morning",
      "B": "Before starting a long journey",
      "C": "Before an MOT test",
      "D": "Every 5000 miles"
    },
    "answer": "B"
  },
  {
    "number": 507,
    "question": "You are driving on a dual-carriageway with surface spray. You should:",
    "image": null,
    "options": {
      "A": "Your dipped headlights",
      "B": "Your hazard flashers",
      "C": "Your sidelights",
      "D": "Your rear fog lights"
    },
    "answer": null
  },
  {
    "number": 508,
    "question": "You are approaching a busy junction. There are several lanes with road markings. At the last moment you realise that you are in the wrong lane. You should:",
    "image": null,
    "options": {
      "A": "Use clear arm signals to cut across",
      "B": "Force your way across",
      "C": "Continue in that lane",
      "D": "Stop until the area has cleared"
    },
    "answer": "C"
  },
  {
    "number": 509,
    "question": "A learner driver you are following stalls at a junction. What should you do?",
    "image": null,
    "options": {
      "A": "Shout instructions",
      "B": "Be patient and wait for them to move on",
      "C": "Steer around them and drive on",
      "D": "Sound your horn and flash your lights"
    },
    "answer": "B"
  },
  {
    "number": 510,
    "question": "An elderly person &rsquo;s driving ability could be affected because they may be unable to:",
    "image": null,
    "options": {
      "A": "React very quickly",
      "B": "Understand road signs",
      "C": "Give signals correctly",
      "D": "Obtain car insurance"
    },
    "answer": "A"
  },
  {
    "number": 511,
    "question": "What action should you take when elderly people are crossing the road?",
    "image": null,
    "options": {
      "A": "Wave them across so they know that you have seen them",
      "B": "Rev the engine to let them know that you are waiting",
      "C": "Tap the horn in case they are hard of hearing",
      "D": "Be patient and allow them to cross in their own time"
    },
    "answer": "D"
  },
  {
    "number": 512,
    "question": "Triangular road signs give:",
    "image": null,
    "options": {
      "A": "Warnings",
      "B": "Instructions",
      "C": "Information",
      "D": "Directions"
    },
    "answer": "A"
  },
  {
    "number": 513,
    "question": "You see this traffic light ahead. Which light(s) will come on next?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa911fbb7c80.jpg",
    "options": {
      "A": "Red and amber together",
      "B": "Green alone",
      "C": "Red alone",
      "D": "Green and amber together"
    },
    "answer": "C"
  },
  {
    "number": 514,
    "question": "How should you correct a rear wheel skid?",
    "image": null,
    "options": {
      "A": "Steer away from it",
      "B": "Remove your hand &#39;s from the steering wheel and let the vehicle steer itself",
      "C": "Brake hard and not steer at all",
      "D": "Steer into it"
    },
    "answer": "D"
  },
  {
    "number": 515,
    "question": "You are looking for somewhere to park your vehicle. The area is full EXCEPT for spaces marked &lsquo;disabled use &rsquo;. You can:",
    "image": null,
    "options": {
      "A": "Not park there unless permitted",
      "B": "Use these spaces, disabled or not",
      "C": "Park if you stay with your vehicle",
      "D": "Use these spaces when elsewhere is full"
    },
    "answer": "A"
  },
  {
    "number": 516,
    "question": "You are taking drugs that are likely to affect you driving. What should you do?",
    "image": null,
    "options": {
      "A": "Only drive if accompanied by a full licence holder",
      "B": "Limit your driving to essential journeys",
      "C": "Seek medical advice before driving",
      "D": "Drive only for short distances"
    },
    "answer": "C"
  },
  {
    "number": 516,
    "question": "You are taking drugs that are likely to affect you driving. What should you do?",
    "image": null,
    "options": {
      "A": "Drive only for short distances",
      "B": "Only drive if accompanied by a full licence holder",
      "C": "Limit your driving to essential journeys",
      "D": "Seek medical advice before driving"
    },
    "answer": "D"
  },
  {
    "number": 517,
    "question": "Motorcyclists often look round over their right shoulder just before turning right. This is because",
    "image": null,
    "options": {
      "A": "They need to check for traffic in their blind area",
      "B": "Motorcycles do not have mirrors",
      "C": "They need to listen for following traffic",
      "D": "Looking around helps them balance as they turn"
    },
    "answer": "A"
  },
  {
    "number": 518,
    "question": "To help keep your vehicle secure at night where should you park?",
    "image": null,
    "options": {
      "A": "On a red route",
      "B": "In a well-lit area",
      "C": "In a quiet road",
      "D": "Near a police station"
    },
    "answer": "B"
  },
  {
    "number": 519,
    "question": "Where may you overtake on a one-way Street?",
    "image": null,
    "options": {
      "A": "Only on the right-hand side",
      "B": "Overtaking is not allowed",
      "C": "Only on the left-hand side",
      "D": "Either on the right or the left"
    },
    "answer": "D"
  },
  {
    "number": 520,
    "question": "Why should you particularly look for motorcyclists and cyclists at any junction?",
    "image": null,
    "options": {
      "A": "They are harder to see",
      "B": "They may slow down to let you turn",
      "C": "They might not see you turn",
      "D": "They nay want to turn into the side road"
    },
    "answer": "A"
  },
  {
    "number": 521,
    "question": "You want to turn right from a main road into a side road. Just before you turn you should",
    "image": null,
    "options": {
      "A": "Stop and set the handbrake",
      "B": "Cancel your right-turn signal",
      "C": "Check for traffic overtaking on your right",
      "D": "Select first gear"
    },
    "answer": "C"
  },
  {
    "number": 522,
    "question": "Your doctor has given you a course of medicine. Why should you ask if it is OK to drive?",
    "image": null,
    "options": {
      "A": "You will have to let your insurance company know about the medicine",
      "B": "Some types of medicine can cause your reactions to slow down",
      "C": "The medicine you take may affect your hearing",
      "D": "Drugs make you a better driver by quickening your reactions"
    },
    "answer": "B"
  },
  {
    "number": 523,
    "question": "You arrive at an accident where someone is suffering from severe burns. You should:",
    "image": null,
    "options": {
      "A": "Burst any blisters",
      "B": "Remove anything stuck to the burns",
      "C": "Apply lotions to the injury",
      "D": "Douse the burns with cool liquid"
    },
    "answer": "D"
  },
  {
    "number": 524,
    "question": "You are approaching a bend at a high speed. You should begin to brake.",
    "image": null,
    "options": {
      "A": "Before the bend",
      "B": "After changing gears",
      "C": "On the bend",
      "D": "After the bend"
    },
    "answer": "A"
  },
  {
    "number": 525,
    "question": "In some residential roads you will find a speed limit of:",
    "image": null,
    "options": {
      "A": "40 mph",
      "B": "60 mph",
      "C": "50 mph",
      "D": "25 mph"
    },
    "answer": "D"
  },
  {
    "number": 526,
    "question": "You are driving on a multi-lane carriageway. By mistake, you go past the exit that you wanted to take. You should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9158de37aa.jpg",
    "options": {
      "A": "Carefully reverse on the hard shoulder",
      "B": "Carefully reverse in the left-hand lane",
      "C": "Make a U-turn at the next gap in the central reservation",
      "D": "Carry on to the next exit"
    },
    "answer": "D"
  },
  {
    "number": 527,
    "question": "You are driving and ahead of you there is a vehicle with a flashing amber beacon. This means it is:",
    "image": null,
    "options": {
      "A": "Slow moving",
      "B": "A school crossing patrol",
      "C": "Broken down",
      "D": "A doctor &rsquo;s car"
    },
    "answer": "A"
  },
  {
    "number": 528,
    "question": "Why should you make sure that you have cancelled your indicators after turning?",
    "image": null,
    "options": {
      "A": "To avoid flattening the battery",
      "B": "To avoid dazzling other road users",
      "C": "To avoid damage to the indicator relay",
      "D": "To avoid misleading other road users"
    },
    "answer": "D"
  },
  {
    "number": 529,
    "question": "&#39;Tailgating &#39;usually means",
    "image": null,
    "options": {
      "A": "Reversing into a parking space",
      "B": "Following another vehicle too closely",
      "C": "Using the rear door of a hatchback car",
      "D": "Driving with rear fog lights on"
    },
    "answer": "B"
  },
  {
    "number": 530,
    "question": "Where are you most likely to be affected by a side wind?",
    "image": null,
    "options": {
      "A": "On a narrow country lane",
      "B": "On a long, straight road",
      "C": "On an open stretch of road",
      "D": "On a busy stretch of road"
    },
    "answer": "C"
  },
  {
    "number": 531,
    "question": "A horse rider is in the left-hand lane approaching a roundabout. The driver behind should expect the rider to:",
    "image": null,
    "options": {
      "A": "Go ahead",
      "B": "Turn left",
      "C": "Go in any direction",
      "D": "Turn right"
    },
    "answer": "C"
  },
  {
    "number": 532,
    "question": "There is vibration on your steering wheel as you drive at certain speeds. You should check that the:",
    "image": null,
    "options": {
      "A": "Wheels are balanced",
      "B": "Doors are closed",
      "C": "Exhaust is not loose",
      "D": "Engine oil level is correct"
    },
    "answer": "A"
  },
  {
    "number": 533,
    "question": "You are parking on a two-way road at night. The speed limit is 40 mph. You should park on the",
    "image": null,
    "options": {
      "A": "Left with parking lights on",
      "B": "Right with parking lights on",
      "C": "Right with dipped headlights on",
      "D": "Left with no lights on"
    },
    "answer": "A"
  },
  {
    "number": 534,
    "question": "You arrive at the scene of a motorcycle accident and the rider is injured. When should the helmet be removed?",
    "image": null,
    "options": {
      "A": "Always, unless they are in shock",
      "B": "Only when the motorcyclist asks",
      "C": "Only when it is essential",
      "D": "Always straight away"
    },
    "answer": "C"
  },
  {
    "number": 535,
    "question": "You stopped for pedestrians waiting to cross at a zebra crossing. They did not start to cross. What should you do?",
    "image": null,
    "options": {
      "A": "Be patient and wait",
      "B": "Drive on",
      "C": "Sound your horn",
      "D": "Wave them to cross"
    },
    "answer": "A"
  },
  {
    "number": 536,
    "question": "&#39;Red Routes &#39;in major cities have been introduced to",
    "image": null,
    "options": {
      "A": "Provide better parking",
      "B": "Help the traffic flow",
      "C": "Raise the speed limits",
      "D": "Allow lorries to load more freely"
    },
    "answer": "B"
  },
  {
    "number": 537,
    "question": "You are trying to move off on snow. You should use",
    "image": null,
    "options": {
      "A": "A high engine speed",
      "B": "The lowest gear you can",
      "C": "The handbrake and footbrake together",
      "D": "The highest gear you can"
    },
    "answer": "D"
  },
  {
    "number": 538,
    "question": "When you approach a bus that is about to move off from a bus stop you should:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9182b3d652.jpg",
    "options": {
      "A": "Get past before it moves",
      "B": "Signal left and wave the bus on",
      "C": "Allow it to pull away, if it is safe to do so",
      "D": "Flash your headlights as you approach"
    },
    "answer": "C"
  },
  {
    "number": 539,
    "question": "There is a tractor ahead of you. You wish to overtake but you are NOT sure if it is safe to do so. You should:",
    "image": null,
    "options": {
      "A": "Follow another overtaking vehicle through",
      "B": "Speed through but flash your lights to oncoming traffic",
      "C": "Not overtake if you are in doubt",
      "D": "Sound your horn to the slow vehicle to pull over"
    },
    "answer": "C"
  },
  {
    "number": 540,
    "question": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should:",
    "image": null,
    "options": {
      "A": "Brake firmly and not turn the steering wheel",
      "B": "Brake firmly and steer to the left",
      "C": "Steer carefully to the right",
      "D": "Steer carefully to the left"
    },
    "answer": "C"
  },
  {
    "number": 541,
    "question": "Motorcars must first have an MOT certificate when they are",
    "image": null,
    "options": {
      "A": "Five (5) years old",
      "B": "One (1) year old",
      "C": "Three (3) years old",
      "D": "Seven (7) years old"
    },
    "answer": "C"
  },
  {
    "number": 542,
    "question": "For a driver, what doe the term Blind Spot mean?",
    "image": null,
    "options": {
      "A": "An area not seen in your mirrors",
      "B": "The area covered by your left mirror",
      "C": "An area immediately behind the car",
      "D": "The area covered by the rear view mirror"
    },
    "answer": "A"
  },
  {
    "number": 543,
    "question": "It is illegal to drive with tyres that -",
    "image": null,
    "options": {
      "A": "Were bought second-hand",
      "B": "Are more than three years old",
      "C": "Are of different makes",
      "D": "Have a large, deep cut in the sidewall"
    },
    "answer": "D"
  },
  {
    "number": 544,
    "question": "What does the sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa919d46c90d.jpg",
    "options": {
      "A": "Pedestrian crossing ahead",
      "B": "School crossing patrol",
      "C": "Pedestrian zone &ndash;no vehicles",
      "D": "No pedestrians allowed"
    },
    "answer": "A"
  },
  {
    "number": 545,
    "question": "You are towing a caravan. Which is the safest type of rear-view mirror to use?",
    "image": null,
    "options": {
      "A": "Interior wide-angle mirror",
      "B": "Extended-arm side mirrors",
      "C": "Ordinary interior mirror",
      "D": "Ordinary door mirrors"
    },
    "answer": "B"
  },
  {
    "number": 546,
    "question": "At an incident it is important to look after any casualties. When the area is safe you should",
    "image": null,
    "options": {
      "A": "Give them a drink",
      "B": "Get them out of the vehicle",
      "C": "Give them something to eat",
      "D": "Keep them in the vehicle"
    },
    "answer": "D"
  },
  {
    "number": 547,
    "question": "You engine catches fire what should you do first?",
    "image": null,
    "options": {
      "A": "Lift the bonnet and disconnect the battery",
      "B": "Call a breakdown service",
      "C": "Call the fire brigade",
      "D": "Lift the bonnet and warn other traffic"
    },
    "answer": "C"
  },
  {
    "number": 548,
    "question": "Unbalanced wheels on a car may cause",
    "image": null,
    "options": {
      "A": "Poor braking",
      "B": "The tyres to wear out",
      "C": "Poor acceleration",
      "D": "The steering to vibrate"
    },
    "answer": "D"
  },
  {
    "number": 549,
    "question": "You are at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?",
    "image": null,
    "options": {
      "A": "To look for pedestrians about to cross",
      "B": "To make sure the side road is clear",
      "C": "To check for emerging traffic",
      "D": "To check for overtaking vehicles"
    },
    "answer": "D"
  },
  {
    "number": 550,
    "question": "Before you make a U-turn in the road, you should",
    "image": null,
    "options": {
      "A": "Signal so that other drivers can slow down for you",
      "B": "Give an arm signal as well as using your indicators",
      "C": "Look over your shoulder for a final check",
      "D": "Select a higher gear than normal"
    },
    "answer": "C"
  },
  {
    "number": 551,
    "question": "What does this sign mean?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa91c43467ac.jpg",
    "options": {
      "A": "Cars and motorcycles only",
      "B": "No motor vehicles",
      "C": "Clearway (no stopping)",
      "D": "No overtaking"
    },
    "answer": "B"
  },
  {
    "number": 552,
    "question": "A driver can only read a number plate at the required distance with glasses on. The glasses should be worn:",
    "image": null,
    "options": {
      "A": "Only when reversing",
      "B": "Only when driving long distances",
      "C": "Only in poor visibility",
      "D": "All the time when driving"
    },
    "answer": "D"
  },
  {
    "number": 553,
    "question": "You are following a vehicle on a wet road. You should leave a time gap of at least",
    "image": null,
    "options": {
      "A": "Two (2) seconds",
      "B": "One (1) second",
      "C": "Four (4) seconds",
      "D": "Three (3) seconds"
    },
    "answer": "C"
  },
  {
    "number": 554,
    "question": "A newly qualified driver must",
    "image": null,
    "options": {
      "A": "Be accompanied on a motorway",
      "B": "Have valid motor insurance",
      "C": "Display green L-Plates",
      "D": "Not exceed 40 mph for 12 months"
    },
    "answer": "B"
  },
  {
    "number": 555,
    "question": "You have too much oil in your engine. What could this cause?",
    "image": null,
    "options": {
      "A": "Chain wear",
      "B": "Engine overheating",
      "C": "Low oil pressure",
      "D": "Oil leaks"
    },
    "answer": "D"
  },
  {
    "number": 556,
    "question": "You should avoid &#39;coasting &#39;your car because it could:",
    "image": null,
    "options": {
      "A": "Increase tyre wear",
      "B": "Damage the suspension",
      "C": "Flatten the battery",
      "D": "Reduce steering control"
    },
    "answer": "D"
  },
  {
    "number": 557,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa91dc8a5af9.jpg",
    "options": {
      "A": "Traffic queues likely",
      "B": "Light signals ahead at a level crossing",
      "C": "Accident black spot ahead",
      "D": "Pedestrian crossing ahead"
    },
    "answer": "B"
  },
  {
    "number": 558,
    "question": "When going straight ahead at a roundabout you should:",
    "image": null,
    "options": {
      "A": "Not indicate at any time",
      "B": "Indicate left when approaching the roundabout",
      "C": "Indicate right when approaching the roundabout",
      "D": "Indicate left before leaving the roundabout"
    },
    "answer": "D"
  },
  {
    "number": 559,
    "question": "At which pedestrian crossing are cyclists allowed to ride across?",
    "image": null,
    "options": {
      "A": "Zebra",
      "B": "Toucan",
      "C": "Puffin",
      "D": "Pelican"
    },
    "answer": "B"
  },
  {
    "number": 560,
    "question": "You are waiting in a traffic queue at night. &nbsp;To avoid dazzling the drivers behind, you should:",
    "image": null,
    "options": {
      "A": "Apply the footbrake only",
      "B": "Use both the handbrake and footbrake",
      "C": "Switch off your headlights",
      "D": "Apply the handbrake only"
    },
    "answer": "D"
  },
  {
    "number": 561,
    "question": "When driving through a Ford or flood water, what gear should you use?",
    "image": null,
    "options": {
      "A": "Reverse",
      "B": "Fifth",
      "C": "First or second",
      "D": "Fourth"
    },
    "answer": "C"
  },
  {
    "number": 562,
    "question": "You are driving behind three cyclists. They approach a roundabout in the left hand lane. In which direction should you expect the cyclists to go?",
    "image": null,
    "options": {
      "A": "Any direction",
      "B": "Left",
      "C": "Right",
      "D": "Straight ahead"
    },
    "answer": "A"
  },
  {
    "number": 563,
    "question": "What is the national speed limit on motorways, unless otherwise indicated, for cars and motorcycles?",
    "image": null,
    "options": {
      "A": "60mph",
      "B": "70mph",
      "C": "50mph",
      "D": "80mph"
    },
    "answer": "B"
  },
  {
    "number": 564,
    "question": "An elderly person &#39;s driving ability could be affected because they may be unable to",
    "image": null,
    "options": {
      "A": "Give signals correctly",
      "B": "Obtain car insurance",
      "C": "React very quickly",
      "D": "Understand road signs"
    },
    "answer": "C"
  },
  {
    "number": 565,
    "question": "Where should you take particular care to look out for motorcyclists and cyclists?",
    "image": null,
    "options": {
      "A": "On dual carriageways",
      "B": "At junctions",
      "C": "At zebra crossings",
      "D": "On one-way streets"
    },
    "answer": "B"
  },
  {
    "number": 566,
    "question": "When following a vehicle on a wet road you should leave a time gap of at least:",
    "image": null,
    "options": {
      "A": "1 second",
      "B": "4 seconds",
      "C": "2 seconds",
      "D": "5 seconds"
    },
    "answer": "B"
  },
  {
    "number": 567,
    "question": "This marking appears on the road just before a",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa92077b741f.jpg",
    "options": {
      "A": "Stop sign",
      "B": "No through road sign",
      "C": "No entry sign",
      "D": "Give way sign"
    },
    "answer": "D"
  },
  {
    "number": 568,
    "question": "What MUST you do when you see this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9216376551.jpg",
    "options": {
      "A": "Stop, ONLY if children are waiting to cross",
      "B": "Stop, even if the road is clear",
      "C": "Stop, ONLY if traffic is approaching",
      "D": "Stop, ONLY if a red light is showing"
    },
    "answer": "B"
  },
  {
    "number": 569,
    "question": "You are following a slow-moving vehicle on a narrow country road. &nbsp;There is a junction just ahead on the right. What should you do?",
    "image": null,
    "options": {
      "A": "Overtake after checking your mirrors and signaling",
      "B": "Stay behind until you are past the junction",
      "C": "Slow down and prepare to overtake on the left",
      "D": "Accelerate quickly to pass before the junction"
    },
    "answer": "B"
  },
  {
    "number": 570,
    "question": "As a driver what do you understand by the term &#39;Blind Spot &#39;?",
    "image": null,
    "options": {
      "A": "An area not covered by your headlights",
      "B": "An area covered by your right hand mirror",
      "C": "An area covered by your left hand mirror",
      "D": "An area not seen in your mirrors"
    },
    "answer": "D"
  },
  {
    "number": 571,
    "question": "You are on a narrow road at night. A slower-moving vehicle ahead has been signaling right for some time. What should you do?",
    "image": null,
    "options": {
      "A": "Wait for the signal to be cancelled before overtaking",
      "B": "Signal right and sound your horn",
      "C": "Flash your headlights before overtaking",
      "D": "Overtake on the left"
    },
    "answer": "A"
  },
  {
    "number": 572,
    "question": "You may only enter a box junction when:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa925833fb4a.jpg",
    "options": {
      "A": "The traffic lights show green",
      "B": "You need to turn left",
      "C": "There are less than two vehicles in front of you",
      "D": "Your exit road is clear"
    },
    "answer": "D"
  },
  {
    "number": 573,
    "question": "You turn into a side road. Pedestrians have started to cross the road. You should",
    "image": null,
    "options": {
      "A": "Give way to them",
      "B": "Drive around them",
      "C": "Proceed regardless",
      "D": "Flash your lights and wave them across"
    },
    "answer": "A"
  },
  {
    "number": 574,
    "question": "What does tailgating mean?",
    "image": null,
    "options": {
      "A": "Driving with your headlights on full beam",
      "B": "Bumping another car whilst parking",
      "C": "Following another vehicle too closely",
      "D": "Skidding on a dry road"
    },
    "answer": "C"
  },
  {
    "number": 575,
    "question": "When are passengers allowed to ride in a caravan that is being towed?",
    "image": null,
    "options": {
      "A": "Never",
      "B": "When travelling on motorways",
      "C": "When they are over 18 years old",
      "D": "When travelling on minor roads"
    },
    "answer": "A"
  },
  {
    "number": 576,
    "question": "You are about to go down a steep hill. To control the speed of your car you should:",
    "image": null,
    "options": {
      "A": "Select a high gear and use the brakes firmly",
      "B": "Select a low gear and avoid using the brakes",
      "C": "Select a low gear and use the brakes carefully",
      "D": "Select a high gear and use the brakes carefully"
    },
    "answer": "C"
  },
  {
    "number": 577,
    "question": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because",
    "image": null,
    "options": {
      "A": "They use electric power",
      "B": "They use quieter roads",
      "C": "They use diesel power",
      "D": "They do not operate during rush hour"
    },
    "answer": "A"
  },
  {
    "number": 578,
    "question": "You are driving behind a moped or small motorcycle. You want to turn left just ahead. You should:",
    "image": null,
    "options": {
      "A": "Stay behind until the moped has passed the junction",
      "B": "Pull alongside the moped and stay level until just before the junction",
      "C": "Sound your horn as a warning and pull in front of the moped",
      "D": "Overtake the moped before the junction"
    },
    "answer": "A"
  },
  {
    "number": 579,
    "question": "Which of the following is the main cause of rear-end collisions?",
    "image": null,
    "options": {
      "A": "Pedestrians crossing the road unexpectedly",
      "B": "Driving too close to the vehicle in front",
      "C": "A wet road surface",
      "D": "Traffic lights"
    },
    "answer": "B"
  },
  {
    "number": 580,
    "question": "When you are overtaking a horse and rider you should:",
    "image": null,
    "options": {
      "A": "Flash your headlights as a warning",
      "B": "Go past as quickly as possible",
      "C": "Go past slowly and carefully",
      "D": "Sound your horn as a warning"
    },
    "answer": "C"
  },
  {
    "number": 581,
    "question": "A red traffic light means:",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa92afb4d95b.jpg",
    "options": {
      "A": "You must slow down and prepare to stop if traffic has started to cross",
      "B": "You must stop behind the white stop line",
      "C": "You may drive straight on if there is no other traffic",
      "D": "You may turn left if it is safe to do so"
    },
    "answer": "B"
  },
  {
    "number": 582,
    "question": "You are driving a slow moving car on a narrow winding road. In order to let other vehicles overtake you should",
    "image": null,
    "options": {
      "A": "Show a left turn signal",
      "B": "Keep left and hold your speed",
      "C": "Pull in safely when you can",
      "D": "Wave to them to pass"
    },
    "answer": "C"
  },
  {
    "number": 583,
    "question": "You are about to drive home. You cannot find the glasses you need to wear when driving. You should:",
    "image": null,
    "options": {
      "A": "Drive home slowly, keeping to quite roads",
      "B": "Borrow a friend &rsquo;s glasses and drive home",
      "C": "Find a way of getting home without driving",
      "D": "Drive home at night"
    },
    "answer": "C"
  },
  {
    "number": 584,
    "question": "When turning your car in the road, you must:",
    "image": null,
    "options": {
      "A": "Keep your hand on the handbrake",
      "B": "Overhang the kerb",
      "C": "Use an available driveway",
      "D": "Check all around for other road users"
    },
    "answer": "D"
  },
  {
    "number": 585,
    "question": "Road humps, chicanes, and road narrowing &#39;s are",
    "image": null,
    "options": {
      "A": "Always at major road works",
      "B": "Used to increase traffic speed",
      "C": "At toll-bridge approaches only",
      "D": "Traffic calming measures"
    },
    "answer": "D"
  },
  {
    "number": 586,
    "question": "When travelling on ice braking distances can be",
    "image": null,
    "options": {
      "A": "Three (3) times the normal distance",
      "B": "Ten (10) times the normal distance",
      "C": "Six (6) times the normal distance",
      "D": "fifteen (15) times the normal distance"
    },
    "answer": "B"
  },
  {
    "number": 587,
    "question": "You stop for pedestrians waiting to cross at a zebra crossing. They do not start to cross. What should you do?",
    "image": null,
    "options": {
      "A": "Wave then to cross",
      "B": "Be patient and wait",
      "C": "Carry on",
      "D": "Sound your horn"
    },
    "answer": "B"
  },
  {
    "number": 588,
    "question": "A strong cross wind is least likely to affect which of these vehicles?",
    "image": null,
    "options": {
      "A": "Cyclists",
      "B": "Motorcycles",
      "C": "Cars",
      "D": "High-sided vehicles"
    },
    "answer": "C"
  },
  {
    "number": 589,
    "question": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
    "image": null,
    "options": {
      "A": "30 meters (98 feet)",
      "B": "20.5 meters  (67 feet)",
      "C": "15 meters (49 feet)",
      "D": "10 meters (33 feet)"
    },
    "answer": "B"
  },
  {
    "number": 590,
    "question": "What is the most common cause of road accidents?",
    "image": null,
    "options": {
      "A": "Driver error",
      "B": "Mechanical failure",
      "C": "Road conditions",
      "D": "Weather conditions"
    },
    "answer": "A"
  },
  {
    "number": 591,
    "question": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:",
    "image": null,
    "options": {
      "A": "Flash your lights in case they have not heard you",
      "B": "Wave them to cross as quickly as they can",
      "C": "Rev your engine to make them hurry",
      "D": "Wait because they will take longer to cross"
    },
    "answer": "D"
  },
  {
    "number": 592,
    "question": "You are following a learner driver who stalls at a junction. You should",
    "image": null,
    "options": {
      "A": "Start to rev your engine if they take too long to restart",
      "B": "Immediately steer around them and drive on",
      "C": "Stay very close behind and flash your headlights",
      "D": "Be patient as you expect them to make mistakes"
    },
    "answer": "D"
  },
  {
    "number": 593,
    "question": "Which vehicle may have to use a different course to normal at roundabouts?",
    "image": null,
    "options": {
      "A": "Van",
      "B": "Long vehicle",
      "C": "Estate car",
      "D": "Sports car"
    },
    "answer": "B"
  },
  {
    "number": 594,
    "question": "You are overtaking a car at night. You must be sure that:",
    "image": null,
    "options": {
      "A": "You flash your headlamps before overtaking",
      "B": "You do not dazzle other road users",
      "C": "You have switched your lights to full beam before overtaking",
      "D": "Your rear fog lights are switched on"
    },
    "answer": "B"
  },
  {
    "number": 595,
    "question": "When may you sound the horn on your vehicle?",
    "image": null,
    "options": {
      "A": "To warn others of your presence",
      "B": "To make slower drivers move over",
      "C": "To attract a friend &rsquo;s attention",
      "D": "To give you right of way"
    },
    "answer": "A"
  },
  {
    "number": 596,
    "question": "On a motorway what is used to reduce traffic bunching?",
    "image": null,
    "options": {
      "A": "Variable speed limits",
      "B": "National speed limits",
      "C": "Contraflow systems",
      "D": "Lane closures"
    },
    "answer": "A"
  },
  {
    "number": 597,
    "question": "You are driving in busy traffic. You want to pull up on the left just after a junction on the left. When should you signal?",
    "image": null,
    "options": {
      "A": "It would be better not to signal at all",
      "B": "As you are passing or just after the junction",
      "C": "Just before you reach the junction",
      "D": "Well before you reach the junction"
    },
    "answer": "B"
  },
  {
    "number": 598,
    "question": "Whilst driving you have an accident in which someone is injured. You must report this to the police within",
    "image": null,
    "options": {
      "A": "7 days",
      "B": "24 hours",
      "C": "36 hours",
      "D": "12 hours"
    },
    "answer": "B"
  },
  {
    "number": 599,
    "question": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?",
    "image": null,
    "options": {
      "A": "An adult seat belt",
      "B": "A child seat",
      "C": "An adult lap belt",
      "D": "An adult holding a child"
    },
    "answer": "B"
  },
  {
    "number": 600,
    "question": "What is the maximum speed limit in a built up area unless indicated otherwise?",
    "image": null,
    "options": {
      "A": "60mph",
      "B": "30mph",
      "C": "50mph",
      "D": "40mph"
    },
    "answer": "B"
  },
  {
    "number": 601,
    "question": "You are travelling in heavy rain. Your overall stopping distance is likely to be",
    "image": null,
    "options": {
      "A": "Quadrupled",
      "B": "Up to 15 times greater",
      "C": "Doubled",
      "D": "Tripled"
    },
    "answer": "C"
  },
  {
    "number": 602,
    "question": "You are driving on a dual carriageway. You have to slow down quickly due to a hazard. You should:",
    "image": null,
    "options": {
      "A": "Sound your horn",
      "B": "Switch on your hazard lights",
      "C": "Switch on your headlights",
      "D": "Flash your headlights"
    },
    "answer": "B"
  },
  {
    "number": 603,
    "question": "Your car hits a pedestrian at 60 kph. The pedestrian will:",
    "image": null,
    "options": {
      "A": "Certainly survive",
      "B": "Probably be killed",
      "C": "Probably survive",
      "D": "Certainly be killed"
    },
    "answer": "B"
  },
  {
    "number": 604,
    "question": "When must you stop at this junction?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa933f71df99.jpg",
    "options": {
      "A": "Only when the area is busy",
      "B": "At all times",
      "C": "When turning right only",
      "D": "During rush hours only"
    },
    "answer": "B"
  },
  {
    "number": 605,
    "question": "Who is especially in danger of not being seen as you reverse your car?",
    "image": null,
    "options": {
      "A": "Cyclists",
      "B": "Children",
      "C": "Motorcyclists",
      "D": "Car drivers"
    },
    "answer": "B"
  },
  {
    "number": 606,
    "question": "A driver pulls out of a side road in front of you. You have to brake hard. You should",
    "image": null,
    "options": {
      "A": "Ignore the error and stay calm",
      "B": "Flash your lights to show your annoyance",
      "C": "Sound your horn to show your annoyance",
      "D": "Overtake as soon as possible"
    },
    "answer": "A"
  },
  {
    "number": 607,
    "question": "You think the driver in the vehicle in front has forgotten to cancel their right indicator. You should",
    "image": null,
    "options": {
      "A": "Flash your lights to alert the driver",
      "B": "Stay behind and not overtake",
      "C": "Overtake on the left if there is room",
      "D": "Sound your horn before overtaking"
    },
    "answer": "B"
  },
  {
    "number": 608,
    "question": "Vehicles fitted with an anti-lock brake system",
    "image": null,
    "options": {
      "A": "Can be steered while you are braking",
      "B": "Are impossible to skid",
      "C": "Are not fitted with a handbrake",
      "D": "Accelerate much faster"
    },
    "answer": "A"
  },
  {
    "number": 609,
    "question": "You are approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9352c0dc25.jpg",
    "options": {
      "A": "The cyclist is going to turn left instead",
      "B": "The cyclist thinks The highway Code does not apply to bicycles",
      "C": "It is quicker route for cyclist",
      "D": "The cyclist is slower and more vulnerable"
    },
    "answer": "D"
  },
  {
    "number": 610,
    "question": "At an accident a small child is not breathing. When giving a mouth to mouth you should breathe",
    "image": null,
    "options": {
      "A": "Heavily",
      "B": "Rapidly",
      "C": "Gently",
      "D": "Sharply"
    },
    "answer": "C"
  },
  {
    "number": 611,
    "question": "When you are overtaking a cyclist in the road, you should leave as much room as you would give to a car. What is the main reason for this?",
    "image": null,
    "options": {
      "A": "The cyclist might have to make a right turn",
      "B": "The cyclist might swerve",
      "C": "The cyclist might get off the bike",
      "D": "The cyclist might change lanes"
    },
    "answer": "B"
  },
  {
    "number": 612,
    "question": "You are signaling to turn right in busy traffic. How would you confirm your intention safely?",
    "image": null,
    "options": {
      "A": "Give an arm signal",
      "B": "Position over the centre line",
      "C": "Flash your headlights",
      "D": "Sound the horn"
    },
    "answer": "A"
  },
  {
    "number": 613,
    "question": "When may you use hazard warning lights?",
    "image": null,
    "options": {
      "A": "When you are being towed",
      "B": "To park on double yellow lines",
      "C": "When you have broken down",
      "D": "To park alongside another car"
    },
    "answer": "C"
  },
  {
    "number": 614,
    "question": "You are driving on a narrow country road. Where would you find it most difficult to see horses and riders ahead of you?",
    "image": null,
    "options": {
      "A": "On right-hand bends",
      "B": "On left-hand bends",
      "C": "When uphill",
      "D": "When downhill"
    },
    "answer": "B"
  },
  {
    "number": 615,
    "question": "A police officer asks to see your documents. You do not have them with you. You may be asked to take them to the police station with",
    "image": null,
    "options": {
      "A": "14 days",
      "B": "5 days",
      "C": "7 days",
      "D": "21 days"
    },
    "answer": "C"
  },
  {
    "number": 616,
    "question": "Front fog lights may be used ONLY if:",
    "image": null,
    "options": {
      "A": "They are not as bright as the headlights",
      "B": "Visibility is seriously reduced",
      "C": "An audible warning device is used",
      "D": "They are fitted above the bumper"
    },
    "answer": "B"
  },
  {
    "number": 617,
    "question": "You are on a dual carriageway. Ahead you see a vehicle with an amber flashing light. What could this be?",
    "image": null,
    "options": {
      "A": "A disabled person!s vehicle",
      "B": "A doctor on call",
      "C": "A fire engine",
      "D": "An ambulance"
    },
    "answer": "A"
  },
  {
    "number": 618,
    "question": "The driver of this car is giving an arm signal. What is he about to do?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9372a1a910.jpg",
    "options": {
      "A": "Go straight ahead",
      "B": "Let pedestrians cross",
      "C": "Turn to the right",
      "D": "Turn to the left"
    },
    "answer": "D"
  },
  {
    "number": 619,
    "question": "What should you do if a driver pulls out of a side road in front of you and you have to brake hard?",
    "image": null,
    "options": {
      "A": "Overtake as soon as possible",
      "B": "Flash your lights to show your annoyance",
      "C": "Sound your horn to show your annoyance",
      "D": "Ignore the error and stay calm"
    },
    "answer": "D"
  },
  {
    "number": 620,
    "question": "Catalytic converters are fitted to make the",
    "image": null,
    "options": {
      "A": "Exhaust systems easier to replace",
      "B": "Engines run quietly",
      "C": "Engines produce more power",
      "D": "Exhaust fumes cleaner"
    },
    "answer": "D"
  },
  {
    "number": 621,
    "question": "Before overtaking a large vehicle or lorry you should keep well back. Why is this?",
    "image": null,
    "options": {
      "A": "To leave a gap in case stops and rolls back",
      "B": "To get the best view of the road ahead",
      "C": "To offer other drivers a safe gap if they want to overtake you",
      "D": "To give acceleration space to overtake quickly on blind bends"
    },
    "answer": "B"
  },
  {
    "number": 622,
    "question": "A roof rack that is fitted to your car will:",
    "image": null,
    "options": {
      "A": "Make your car go faster",
      "B": "Improve the road handling",
      "C": "Reduce fuel consumption",
      "D": "Increase fuel consumption"
    },
    "answer": "D"
  },
  {
    "number": 623,
    "question": "When driving in falling snow you should",
    "image": null,
    "options": {
      "A": "Brake firmly and quickly",
      "B": "Use sidelights only",
      "C": "Be ready to steer sharply",
      "D": "Brake gently in plenty of time"
    },
    "answer": "D"
  },
  {
    "number": 624,
    "question": "What is the meaning of this sign?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9393e6b9d0.jpg",
    "options": {
      "A": "Uneven road surface",
      "B": "Humpback bridge",
      "C": "Humps on the road",
      "D": "Risk of grounding"
    },
    "answer": "D"
  },
  {
    "number": 625,
    "question": "When you are NOT sure it is safe to reverse your vehicle you should",
    "image": null,
    "options": {
      "A": "Rev your engine",
      "B": "Use your horn",
      "C": "Get out and check",
      "D": "Reverse slowly"
    },
    "answer": "C"
  },
  {
    "number": 626,
    "question": "You are to turn right in busy traffic. How would you confirm your intention safely?",
    "image": null,
    "options": {
      "A": "Position over the centre line at an angle",
      "B": "Flash your headlamp",
      "C": "Sound the horn",
      "D": "Give an arm signal also"
    },
    "answer": "D"
  },
  {
    "number": 627,
    "question": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
    "image": null,
    "options": {
      "A": "Any direction",
      "B": "Right",
      "C": "Straight ahead",
      "D": "Left"
    },
    "answer": "A"
  },
  {
    "number": 628,
    "question": "Your overall stopping distance will be much longer when:",
    "image": null,
    "options": {
      "A": "Driving in fog",
      "B": "Driving on a very hot day",
      "C": "Driving in rain",
      "D": "Driving in strong winds"
    },
    "answer": "C"
  },
  {
    "number": 629,
    "question": "Front fog lights may be used ONLY",
    "image": null,
    "options": {
      "A": "When visibility is seriously reduced",
      "B": "Between dusk and dawn",
      "C": "During &lsquo;lighting up &rsquo;times only",
      "D": "If they are not as bright as the headlights"
    },
    "answer": "A"
  },
  {
    "number": 630,
    "question": "If a friend wants to teach you to drive a car, they must:",
    "image": null,
    "options": {
      "A": "Be over 18 and hold an advanced driver &rsquo;s certificate",
      "B": "Be over 21 and have had a full license for at least three years.",
      "C": "Be over 18 and have fully comprehensive insurance",
      "D": "Be over 23   and have held a full licence for at least 5   years"
    },
    "answer": "D"
  },
  {
    "number": 631,
    "question": "You are driving in the left-hand lane of a dual carriageway. Another car overtakes and pulls in front of you leaving you without enough separation distance. You should:",
    "image": null,
    "options": {
      "A": "Continue as you are",
      "B": "Sound your horn",
      "C": "Drop back",
      "D": "Move to the right-hand lane"
    },
    "answer": "C"
  },
  {
    "number": 632,
    "question": "You are approaching a crossroads. The traffic lights have failed. What should you do?",
    "image": null,
    "options": {
      "A": "Be prepared to brake sharply to a stop",
      "B": "Be prepared to stop for any traffic",
      "C": "Brake sharply to a stop before looking",
      "D": "Brake and stop only for large vehicles"
    },
    "answer": "B"
  },
  {
    "number": 633,
    "question": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
    "image": null,
    "options": {
      "A": "Traffic can travel faster in poor weather conditions",
      "B": "Traffic in both directions can use the middle lane to overtake",
      "C": "Traffic can overtake on the left",
      "D": "Traffic uses the middle lane for emergencies only"
    },
    "answer": "B"
  },
  {
    "number": 634,
    "question": "A provisional licence holder must not drive a motorcar",
    "image": null,
    "options": {
      "A": "On a dual carriageway",
      "B": "Alone",
      "C": "With passengers in the back",
      "D": "At night"
    },
    "answer": "B"
  },
  {
    "number": 635,
    "question": "What should you do when overtaking a motorcyclist in strong winds?",
    "image": null,
    "options": {
      "A": "Pass immediately",
      "B": "Pass quickly",
      "C": "Pass wide",
      "D": "Pass close"
    },
    "answer": "C"
  },
  {
    "number": 636,
    "question": "A strong crosswind is least likely to affect which of these vehicles?",
    "image": null,
    "options": {
      "A": "Motorcycles",
      "B": "Cars",
      "C": "Cyclists",
      "D": "High-sided vehicles"
    },
    "answer": "B"
  },
  {
    "number": 637,
    "question": "When driving at 60mph on a dry road what would be the shortest overall stopping distance?",
    "image": null,
    "options": {
      "A": "53 meters",
      "B": "73    meters ",
      "C": "96 meters",
      "D": "58 meters"
    },
    "answer": "B"
  },
  {
    "number": 638,
    "question": "When may you reverse from a side-road into a main road?",
    "image": null,
    "options": {
      "A": "Only if both roads are clear of traffic",
      "B": "Not at any time",
      "C": "At any time",
      "D": "Only if the main road is clear of traffic"
    },
    "answer": "B"
  },
  {
    "number": 639,
    "question": "You are driving down a long steep hill. You suddenly notice that your brakes are not working as well as normal. What is the usual cause of this?",
    "image": null,
    "options": {
      "A": "Oil on the brakes",
      "B": "Badly adjusted",
      "C": "The brakes overheating",
      "D": "Air in the brake fluid"
    },
    "answer": "C"
  },
  {
    "number": 640,
    "question": "If a trailer swerves or snakes when you are towing it you should",
    "image": null,
    "options": {
      "A": "Ease off the accelerator and reduce your speed",
      "B": "Brake hard and hold the pedal down",
      "C": "Increase your speed as quickly as possible",
      "D": "Let go of the steering wheel and let it correct itself"
    },
    "answer": "A"
  },
  {
    "number": 641,
    "question": "You are driving a slow moving car on a narrow road. When traffic wishes to overtake you should",
    "image": null,
    "options": {
      "A": "Pull in safely as soon as you can do so",
      "B": "Stop immediately and wave it on",
      "C": "Put your hazard warning lights on",
      "D": "Take no action"
    },
    "answer": "A"
  },
  {
    "number": 642,
    "question": "You are at a junction controlled by traffic lights. When should you NOT proceed at green?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa93e3c7a9ed.jpg",
    "options": {
      "A": "When pedestrians are waiting to cross",
      "B": "When you think the lights may be about to change",
      "C": "When you intend to turn right",
      "D": "When your exit from the junction is blocked"
    },
    "answer": "D"
  },
  {
    "number": 643,
    "question": "It is very windy. You are behind a motorcyclist who is overtaking a high-sided vehicle. What should you do?",
    "image": null,
    "options": {
      "A": "Keep close to the motorcyclist",
      "B": "Stay level with the motorcyclist",
      "C": "Keep well back",
      "D": "Overtake the motorcyclist immediately"
    },
    "answer": "C"
  },
  {
    "number": 644,
    "question": "When following a vehicle on a wet road you should leave a time gap of at least?",
    "image": null,
    "options": {
      "A": "4 seconds",
      "B": "3 seconds",
      "C": "2 seconds",
      "D": "1 second"
    },
    "answer": "A"
  },
  {
    "number": 645,
    "question": "When approaching a right-hand bend you should keep well to the left. Why this?",
    "image": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa93ed8e7348.jpg",
    "options": {
      "A": "To improve your view of the road",
      "B": "To let faster traffic from behind overtake",
      "C": "To overcome the effect of the road &rsquo;s slope",
      "D": "To be positioned safely if the vehicle skids"
    },
    "answer": "A"
  },
  {
    "number": 646,
    "question": "Which of these, if allowed to get low, is dangerous?",
    "image": null,
    "options": {
      "A": "Antifreeze level",
      "B": "Battery water level",
      "C": "Radiator coolant level",
      "D": "Brake fluid level"
    },
    "answer": "D"
  },
  {
    "number": 647,
    "question": "You are driving at the legal speed limit. A vehicle behind tries to overtake. Should you try to prevent the driver overtaking?",
    "image": null,
    "options": {
      "A": "No, unless it is safe to do so",
      "B": "Yes, because the other driver is acting dangerously",
      "C": "No, not at any time",
      "D": "Yes, because the other driver is breaking the law"
    },
    "answer": "C"
  }
];

export default questData;