/*
 * Quiz content for Farah's Quiz Quest.
 *
 * Each category holds 14 questions: 12 regular (1 star each) plus 2 bonus
 * questions (2 stars each) that are always asked last. Regular questions are
 * shuffled at the start of every round so a replay feels new.
 *
 * Question shape:
 *   q       - the question text
 *   options - 3 or 4 answer choices
 *   answer  - index into options of the correct choice
 *   explain - a fun fact shown after answering, correct or not
 *   bonus   - true for the harder end-of-round challenge questions
 */
const QUIZ_DATA = [
  {
    id: 'animals',
    name: 'Animal Kingdom',
    emoji: '🐾',
    blurb: 'Creatures big, small and very strange',
    color: '#ff8a3d',
    questions: [
      {
        q: 'Which is the biggest animal on Earth?',
        options: ['African elephant', 'Blue whale', 'Great white shark', 'Giraffe'],
        answer: 1,
        explain: 'A blue whale can grow to 30 metres long. Its tongue alone weighs as much as an elephant!'
      },
      {
        q: 'How many legs does a spider have?',
        options: ['6', '8', '10'],
        answer: 1,
        explain: 'Spiders have 8 legs. Insects, like ants and bees, have only 6 — that is one way to tell them apart.'
      },
      {
        q: 'What is a baby kangaroo called?',
        options: ['A cub', 'A kit', 'A joey', 'A calf'],
        answer: 2,
        explain: 'A newborn joey is about the size of a jellybean and rides in its mum\'s pouch for months.'
      },
      {
        q: 'Which of these birds cannot fly?',
        options: ['Penguin', 'Eagle', 'Parrot', 'Owl'],
        answer: 0,
        explain: 'Penguins gave up flying in the air — instead they "fly" underwater, zooming along at up to 35 km/h.'
      },
      {
        q: 'What do you call a group of lions?',
        options: ['A pack', 'A pride', 'A herd', 'A flock'],
        answer: 1,
        explain: 'A pride can have up to 30 lions. The lionesses do most of the hunting, usually as a team.'
      },
      {
        q: 'How many hearts does an octopus have?',
        options: ['1', '2', '3', '8'],
        answer: 2,
        explain: 'Three! Two pump blood to the gills and one to the rest of the body. Octopus blood is blue, not red.'
      },
      {
        q: 'What is the fastest animal on land?',
        options: ['Cheetah', 'Horse', 'Ostrich', 'Kangaroo'],
        answer: 0,
        explain: 'A cheetah can hit 110 km/h — but only for about 30 seconds before it has to stop and rest.'
      },
      {
        q: 'Which of these animals is an amphibian?',
        options: ['Lizard', 'Frog', 'Snake', 'Turtle'],
        answer: 1,
        explain: 'Amphibians live both in water and on land. Frogs begin life as tadpoles with tails and gills!'
      },
      {
        q: 'Which animal is famous for storing fat in its hump?',
        options: ['Camel', 'Buffalo', 'Rhino', 'Bison'],
        answer: 0,
        explain: 'A camel\'s hump is fat, not water. It lets the camel go for over a week in the desert without eating.'
      },
      {
        q: 'A zebra\'s stripes are special because...',
        options: [
          'they glow in the dark',
          'no two zebras have the same pattern',
          'they change colour in summer'
        ],
        answer: 1,
        explain: 'Every zebra\'s stripes are unique, a bit like human fingerprints. Mums recognise their foals by them.'
      },
      {
        q: 'Which is the largest big cat in the world?',
        options: ['Lion', 'Leopard', 'Tiger', 'Jaguar'],
        answer: 2,
        explain: 'The Siberian tiger can weigh over 300 kg — heavier than four ten-year-olds put together!'
      },
      {
        q: 'What is a group of wolves called?',
        options: ['A pack', 'A swarm', 'A school', 'A pride'],
        answer: 0,
        explain: 'A wolf pack is really a family: a mum, a dad and their pups, all hunting and howling together.'
      },
      {
        q: 'Which is the only mammal that can truly fly?',
        options: ['Flying squirrel', 'Bat', 'Sugar glider', 'Flying fish'],
        answer: 1,
        explain: 'Bats really fly. Flying squirrels only glide — they cannot flap their way upwards.',
        bonus: true
      },
      {
        q: 'What is a group of crows called?',
        options: ['A giggle', 'A murder', 'A rumble', 'A shadow'],
        answer: 1,
        explain: 'A group of crows really is called a murder! Crows are clever enough to recognise human faces.',
        bonus: true
      }
    ]
  },

  {
    id: 'science',
    name: 'Science Lab',
    emoji: '🔬',
    blurb: 'Space, bodies and how things work',
    color: '#4ec3f7',
    questions: [
      {
        q: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
        answer: 1,
        explain: 'Mars looks red because its dust is full of iron oxide — the same stuff as rust on an old bike.'
      },
      {
        q: 'Which gas do plants take in to make their food?',
        options: ['Oxygen', 'Carbon dioxide', 'Helium', 'Nitrogen'],
        answer: 1,
        explain: 'Plants breathe in carbon dioxide and give out oxygen. That swap is called photosynthesis.'
      },
      {
        q: 'H₂O is the scientific name for what?',
        options: ['Salt', 'Sugar', 'Water', 'Air'],
        answer: 2,
        explain: 'Two hydrogen atoms holding hands with one oxygen atom make a single drop-sized piece of water.'
      },
      {
        q: 'What force pulls a dropped ball down to the ground?',
        options: ['Magnetism', 'Friction', 'Gravity', 'Electricity'],
        answer: 2,
        explain: 'Gravity! It also keeps the Moon circling Earth and Earth circling the Sun.'
      },
      {
        q: 'How many planets are in our solar system?',
        options: ['7', '8', '9', '12'],
        answer: 1,
        explain: 'Eight. Pluto was counted as the ninth until 2006, when scientists renamed it a dwarf planet.'
      },
      {
        q: 'Which star is closest to Earth?',
        options: ['The North Star', 'The Sun', 'Sirius', 'Alpha Centauri'],
        answer: 1,
        explain: 'The Sun is a star, and it is our nearest one — a "close" 150 million kilometres away.'
      },
      {
        q: 'An animal that eats only plants is called a...',
        options: ['carnivore', 'herbivore', 'omnivore'],
        answer: 1,
        explain: 'Herbivore. Carnivores eat meat, and omnivores (like us) happily eat both.'
      },
      {
        q: 'Which part of your body pumps blood around you?',
        options: ['Lungs', 'Brain', 'Heart', 'Liver'],
        answer: 2,
        explain: 'Your heart beats about 100,000 times a day without you ever asking it to.'
      },
      {
        q: 'Ice is water in which state of matter?',
        options: ['Solid', 'Liquid', 'Gas'],
        answer: 0,
        explain: 'Solid. Cool a liquid enough and its tiny particles slow down and lock into place.'
      },
      {
        q: 'Which planet has the most spectacular rings?',
        options: ['Neptune', 'Saturn', 'Mars', 'Earth'],
        answer: 1,
        explain: 'Saturn\'s rings are made of billions of chunks of ice and rock, some as small as a grain of sugar.'
      },
      {
        q: 'What causes day and night on Earth?',
        options: [
          'The Earth spinning around',
          'The Sun switching off',
          'Clouds covering the Sun',
          'The Moon blocking the Sun'
        ],
        answer: 0,
        explain: 'Earth spins once every 24 hours. The side facing the Sun gets day, the other side gets night.'
      },
      {
        q: 'What is the middle of an atom called?',
        options: ['The core', 'The nucleus', 'The centre point', 'The cell'],
        answer: 1,
        explain: 'The nucleus. Tiny electrons whizz around it, a bit like planets orbiting a very small sun.'
      },
      {
        q: 'What is the hardest natural material on Earth?',
        options: ['Iron', 'Granite', 'Diamond', 'Gold'],
        answer: 2,
        explain: 'Diamond — and it is just carbon, the same element as pencil lead, squeezed unbelievably hard.',
        bonus: true
      },
      {
        q: 'How long does sunlight take to travel to Earth?',
        options: ['Instantly', 'About 8 minutes', 'About 8 hours', 'About 8 days'],
        answer: 1,
        explain: 'About 8 minutes. So the sunshine on your face actually left the Sun before you sat down!',
        bonus: true
      }
    ]
  },

  {
    id: 'geography',
    name: 'Around the World',
    emoji: '🌍',
    blurb: 'Countries, oceans and giant mountains',
    color: '#3ecf8e',
    questions: [
      {
        q: 'Which is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
        answer: 2,
        explain: 'The Pacific is so big that every piece of land on Earth could fit inside it with room to spare.'
      },
      {
        q: 'The Sahara Desert is on which continent?',
        options: ['Asia', 'Africa', 'Australia', 'South America'],
        answer: 1,
        explain: 'Africa. The Sahara is roughly the size of the whole United States — and it is still growing.'
      },
      {
        q: 'What is the capital city of France?',
        options: ['Rome', 'Madrid', 'Paris', 'Berlin'],
        answer: 2,
        explain: 'Paris, home of the Eiffel Tower — which grows about 15 cm taller on hot summer days.'
      },
      {
        q: 'How many continents are there?',
        options: ['5', '6', '7', '8'],
        answer: 2,
        explain: 'Seven: Africa, Antarctica, Asia, Australia, Europe, North America and South America.'
      },
      {
        q: 'Which country is shaped like a boot?',
        options: ['Greece', 'Italy', 'Portugal', 'Turkey'],
        answer: 1,
        explain: 'Italy! Look at a map and you can spot the heel, the toe and even Sicily like a football.'
      },
      {
        q: 'What is the tallest mountain in the world?',
        options: ['Mount Kilimanjaro', 'Mount Fuji', 'Mount Everest', 'Mont Blanc'],
        answer: 2,
        explain: 'Everest reaches 8,849 metres — that is higher than passenger planes usually fly.'
      },
      {
        q: 'Which is the coldest continent?',
        options: ['Antarctica', 'Europe', 'Asia', 'North America'],
        answer: 0,
        explain: 'Antarctica once hit −89°C. No country owns it, and its only permanent residents are penguins and seals.'
      },
      {
        q: 'Which is the largest country in the world by area?',
        options: ['Canada', 'China', 'Russia', 'Brazil'],
        answer: 2,
        explain: 'Russia is so wide it spreads across 11 time zones. It can be breakfast at one end and bedtime at the other!'
      },
      {
        q: 'The Great Wall is in which country?',
        options: ['Japan', 'India', 'China', 'Mongolia'],
        answer: 2,
        explain: 'China. All its branches together stretch more than 21,000 km — you could walk it for years.'
      },
      {
        q: 'Which ocean lies between Africa and South America?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean'],
        answer: 1,
        explain: 'The Atlantic. Long ago those two continents were joined, and they are still drifting apart today.'
      },
      {
        q: 'Kangaroos live wild in which country?',
        options: ['Australia', 'South Africa', 'Mexico', 'India'],
        answer: 0,
        explain: 'Australia — where kangaroos actually outnumber people.'
      },
      {
        q: 'What is the capital of Japan?',
        options: ['Kyoto', 'Osaka', 'Tokyo', 'Seoul'],
        answer: 2,
        explain: 'Tokyo is one of the busiest cities on Earth, with over 13 million people living in it.'
      },
      {
        q: 'Which is the smallest country in the world?',
        options: ['Monaco', 'Vatican City', 'Malta', 'Iceland'],
        answer: 1,
        explain: 'Vatican City is smaller than many farms — you can walk right around the whole country in an hour.',
        bonus: true
      },
      {
        q: 'Which river flows through Egypt?',
        options: ['The Amazon', 'The Nile', 'The Danube', 'The Ganges'],
        answer: 1,
        explain: 'The Nile. Ancient Egyptians built their whole civilisation along it because it flooded and fed their crops.',
        bonus: true
      }
    ]
  },

  {
    id: 'maths',
    name: 'Number Ninja',
    emoji: '🔢',
    blurb: 'Sums, shapes and sneaky patterns',
    color: '#a78bfa',
    questions: [
      {
        q: 'What is 7 × 8?',
        options: ['54', '56', '58', '64'],
        answer: 1,
        explain: '7 × 8 = 56. A handy trick: the answer and the question use 5, 6, 7, 8 in order — 56 = 7 × 8.'
      },
      {
        q: 'What is half of 84?',
        options: ['32', '38', '42', '48'],
        answer: 2,
        explain: 'Half of 80 is 40, and half of 4 is 2. Add them together: 42.'
      },
      {
        q: 'How many sides does a hexagon have?',
        options: ['5', '6', '7', '8'],
        answer: 1,
        explain: 'Six. Bees build their honeycomb out of hexagons because they fit together with no gaps.'
      },
      {
        q: 'What is 100 − 37?',
        options: ['63', '67', '73', '77'],
        answer: 0,
        explain: '63. Jump from 37 up to 40 (that is 3), then 40 up to 100 (that is 60). 3 + 60 = 63.'
      },
      {
        q: 'Which one of these is a prime number?',
        options: ['9', '15', '17', '21'],
        answer: 2,
        explain: '17 is prime — it can only be divided by 1 and itself. The others all split into smaller whole numbers.'
      },
      {
        q: 'What is 12 × 12?',
        options: ['124', '132', '144', '156'],
        answer: 2,
        explain: '144. It is 12 squared — picture a 12 by 12 grid of dots.'
      },
      {
        q: 'How many minutes are in 2½ hours?',
        options: ['120', '150', '180', '210'],
        answer: 1,
        explain: '60 + 60 + 30 = 150 minutes.'
      },
      {
        q: 'What is ¾ written as a percentage?',
        options: ['25%', '34%', '50%', '75%'],
        answer: 3,
        explain: '¾ = 75%. Think of a pizza cut into 4 slices — taking 3 of them gives you 75% of the pizza.'
      },
      {
        q: 'A square has sides of 5 cm. What is the distance all the way around it?',
        options: ['10 cm', '15 cm', '20 cm', '25 cm'],
        answer: 2,
        explain: '20 cm — four equal sides: 5 + 5 + 5 + 5. That distance around a shape is called the perimeter.'
      },
      {
        q: 'What number comes next: 2, 4, 8, 16, ...?',
        options: ['18', '24', '32', '64'],
        answer: 2,
        explain: '32 — each number is double the one before it.'
      },
      {
        q: 'How many degrees are in a right angle?',
        options: ['45', '90', '180', '360'],
        answer: 1,
        explain: '90 degrees — the neat square corner you see on a book or a door.'
      },
      {
        q: 'What is ½ + ¼?',
        options: ['¼', '⅓', '¾', '1'],
        answer: 2,
        explain: '½ is the same as 2 quarters. 2 quarters + 1 quarter = 3 quarters, or ¾.'
      },
      {
        q: 'What is 15% of 200?',
        options: ['15', '25', '30', '45'],
        answer: 2,
        explain: '10% of 200 is 20, and 5% is half of that, which is 10. So 20 + 10 = 30.',
        bonus: true
      },
      {
        q: 'What is the area of a rectangle that is 7 cm long and 6 cm wide?',
        options: ['13 cm²', '26 cm²', '42 cm²', '49 cm²'],
        answer: 2,
        explain: 'Area = length × width, so 7 × 6 = 42 cm². That is how many 1 cm squares fit inside it.',
        bonus: true
      }
    ]
  },

  {
    id: 'mixed',
    name: 'Mega Mix',
    emoji: '🧠',
    blurb: 'A bit of everything — the ultimate round',
    color: '#ff5fa2',
    questions: [
      {
        q: 'How many days are there in a leap year?',
        options: ['364', '365', '366', '367'],
        answer: 2,
        explain: '366. Every 4 years February gets a 29th day to keep our calendar lined up with the Sun.'
      },
      {
        q: 'Mixing blue and yellow paint makes which colour?',
        options: ['Purple', 'Green', 'Orange', 'Brown'],
        answer: 1,
        explain: 'Green! Blue and yellow are two of the three primary colours of paint, along with red.'
      },
      {
        q: 'How many colours are in a rainbow?',
        options: ['5', '6', '7', '9'],
        answer: 2,
        explain: 'Seven: red, orange, yellow, green, blue, indigo and violet — always in that order.'
      },
      {
        q: 'Who wrote the Harry Potter books?',
        options: ['Roald Dahl', 'J.K. Rowling', 'C.S. Lewis', 'Enid Blyton'],
        answer: 1,
        explain: 'J.K. Rowling wrote much of the first book in cafés, and it was turned down by 12 publishers first!'
      },
      {
        q: 'How many players from one team are on a football pitch at kick-off?',
        options: ['9', '10', '11', '12'],
        answer: 2,
        explain: 'Eleven, including the goalkeeper.'
      },
      {
        q: 'What is the largest organ of the human body?',
        options: ['The brain', 'The skin', 'The lungs', 'The stomach'],
        answer: 1,
        explain: 'Your skin! Spread out flat, an adult\'s skin would cover about two square metres.'
      },
      {
        q: 'How many letters are in the English alphabet?',
        options: ['24', '25', '26', '28'],
        answer: 2,
        explain: '26 letters make every single word in English — millions of them.'
      },
      {
        q: 'A shape with three sides is called a...',
        options: ['square', 'triangle', 'pentagon'],
        answer: 1,
        explain: 'A triangle. It is the strongest shape in building — that is why you see them in bridges and cranes.'
      },
      {
        q: 'Which instrument has black and white keys?',
        options: ['Violin', 'Piano', 'Trumpet', 'Drum'],
        answer: 1,
        explain: 'The piano — 88 keys in total, 52 white and 36 black.'
      },
      {
        q: 'What language do most people speak in Brazil?',
        options: ['Spanish', 'Portuguese', 'French', 'Italian'],
        answer: 1,
        explain: 'Portuguese, which makes Brazil unusual — most other South American countries speak Spanish.'
      },
      {
        q: 'What is the name of the cowboy toy in Toy Story?',
        options: ['Buzz', 'Rex', 'Woody', 'Hamm'],
        answer: 2,
        explain: 'Woody! Toy Story was the first ever full-length film made completely on computers.'
      },
      {
        q: 'Which of these is a vegetable, not a fruit?',
        options: ['Tomato', 'Cucumber', 'Carrot', 'Pepper'],
        answer: 2,
        explain: 'A carrot is a root, so it is a true vegetable. Tomatoes, cucumbers and peppers all hold seeds, which makes them fruits!'
      },
      {
        q: 'How many bones are in a grown-up human body?',
        options: ['106', '156', '206', '306'],
        answer: 2,
        explain: '206 — but babies are born with about 300! Some of them join together as you grow.',
        bonus: true
      },
      {
        q: 'How many squares are on a chessboard?',
        options: ['36', '49', '64', '81'],
        answer: 2,
        explain: '64 — an 8 by 8 grid, and 8 × 8 = 64.',
        bonus: true
      }
    ]
  }
];
