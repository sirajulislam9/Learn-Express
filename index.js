const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());  
const port = 3000;



const cars = [
  {
    id:'1',
    name : 'Rolls-Royce',
    model : 'La Rose Noire Droptail',
    origin : 'England',
    price : '30 Million',
    details: 'The Rolls-Royce La Rose Noire Droptail is a one-off creation by the British luxury carmaker. The car is based on the Rolls-Royce Sweptail, which was the most expensive car in the world when it was unveiled in 2017. The La Rose Noire Droptail is a convertible version of the Sweptail, and it features a unique design that is inspired by the golden age of motoring. The car is powered by a 6.75-liter V12 engine that produces 563 hp and 664 lb-ft of torque. The engine is mated to an 8-speed automatic transmission that sends power to the rear wheels. The La Rose Noire Droptail has a top speed of 150 mph and can accelerate from 0-60 mph in 5.1 seconds.',
    image: 'https://i.dailymail.co.uk/1s/2023/08/19/12/74441893-0-image-m-4_1692445264298.jpg',
    specifications: {
      EngineConfiguration: '6.75-liter V12',
      Transmission: '8-speed automatic',
      Power : '563 hp',
      topSpeed : '150 mph',
      acceleration : '0-60 mph in 5.1 seconds'
    },
    features: {
      Exterior: 'The exterior of the La Rose Noire Droptail is finished in a deep black color that is accented by rose gold trim. The car features a long hood, a sloping roofline, and a short rear deck. The front end of the car is dominated by a large grille and slim LED headlights. The rear of the car features a pair of round taillights and a retractable rear spoiler. The car rides on a set of custom-made alloy wheels that are finished in rose gold.',
      Interior: 'The interior of the La Rose Noire Droptail is finished in black leather and rose gold trim. The car features a pair of bucket seats, a leather-wrapped steering wheel, and a digital instrument cluster. The car also features a premium sound system, a navigation system, and a climate control system. The car has a retractable roof that can be opened or closed at the touch of a button.'
    }
  },
  {
    id:'2',
    name : 'Rolls-Royce',
    model : 'Boat Tail',
    origin : 'England',
    price : '28 Million',
    details: 'The Rolls-Royce Boat Tail is a one-off creation by the British luxury carmaker. The car is based on the Rolls-Royce Sweptail, which was the most expensive car in the world when it was unveiled in 2017. The Boat Tail is a convertible version of the Sweptail, and it features a unique design that is inspired by the golden age of motoring. The car is powered by a 6.75-liter V12 engine that produces 563 hp and 664 lb-ft of torque. The engine is mated to an 8-speed automatic transmission that sends power to the rear wheels. The Boat Tail has a top speed of 150 mph and can accelerate from 0-60 mph in 5.1 seconds.',
    image: 'https://cdn.cars24.com/prod/auto-news24-cms/CARS24-Blog-Images/2025/01/31/f01d4b24-341a-42de-a855-a86e5129b79e-Rolls-Royce-Boat-Tail-min.jpg',
    specifications: {
      EngineConfiguration: '6.75-liter V12',
      Transmission: '8-speed automatic',
      Power : '563 hp',
      topSpeed : '150 mph',
      acceleration : '0-60 mph in 5.1 seconds'
    },
    features: {
      Exterior: 'The exterior of the Boat Tail is finished in a deep black color that is accented by rose gold trim. The car features a long hood, a sloping roofline, and a short rear deck. The front end of the car is dominated by a large grille and slim LED headlights. The rear of the car features a pair of round taillights and a retractable rear spoiler. The car rides on a set of custom-made alloy wheels that are finished in rose gold.',
      Interior: 'The interior of the Boat Tail is finished in black leather and rose gold trim. The car features a pair of bucket seats, a leather-wrapped steering wheel, and a digital instrument cluster. The car also features a premium sound system, a navigation system, and a climate control system. The car has a retractable roof that can be opened or closed at the touch of a button.'
    }
  },
  {
    id:'3',
    name : 'Bugatti',
    model : 'La Voiture Noire',
    origin : 'France',
    price : '18.7 Million',
    details: 'The Bugatti La Voiture Noire is a one-off creation by the French luxury carmaker. The car is based on the Bugatti Chiron, which is one of the fastest cars in the world. The La Voiture Noire is powered by an 8.0-liter quad-turbocharged W16 engine that produces 1500 hp and 1180 lb-ft of torque. The engine is mated to a 7-speed automatic transmission that sends power to all four wheels. The La Voiture Noire has a top speed of 261 mph and can accelerate from 0-60 mph in 2.5 seconds.',
    image: 'https://cdn.cars24.com/prod/auto-news24-cms/CARS24-Blog-Images/2025/01/31/d8c85c60-9edf-4fda-bf57-8ed70fc2b2e1-BUGATTI-La-Voiture-Noire-min.jpg',
    specifications: {
      EngineConfiguration: '8.0-liter quad-turbocharged W16',
      Transmission: '7-speed automatic',
      Power : '1500 hp',
      topSpeed : '261 mph',
      acceleration : '0-60 mph in 2.5 seconds'
    },
    features: {
      Exterior: 'The exterior of the La Voiture Noire is finished in a deep black color that is accented by rose gold trim. The car features a long hood, a sloping roofline, and a short rear deck. The front end of the car is dominated by a large grille and slim LED headlights. The rear of the car features a pair of round taillights and a retractable rear spoiler. The car rides on a set of custom-made alloy wheels that are finished in rose gold.',
      Interior: 'The interior of the La Voiture Noire is finished in black leather and rose gold trim. The car features a pair of bucket seats, a leather-wrapped steering wheel, and a digital instrument cluster. The car also features a premium sound system, a navigation system, and a climate control system. The car has a retractable roof that can be opened or closed at the touch of a button.'
    }
  },
  {
    id:'4',
    name : 'Pagani',
    model : 'Zonda HP Barchetta',
    origin : 'Italy',
    price : '17 Million',
    details: 'The Pagani Zonda HP Barchetta is a one-off creation by the Italian luxury carmaker. The car is based on the Pagani Zonda, which is one of the most exclusive supercars in the world. The Zonda HP Barchetta is powered by a 7.3-liter V12 engine that produces 789 hp and 730 lb-ft of torque. The engine is mated to a 6-speed manual transmission that sends power to the rear wheels. The Zonda HP Barchetta has a top speed of 221 mph and can accelerate from 0-60 mph in 3.3 seconds.',
    image: 'https://cdn.cars24.com/prod/auto-news24-cms/CARS24-Blog-Images/2025/01/31/f7f5d1a9-dded-42ca-b391-b08660aae39f-PAGANI-Zonda-Barchetta-min.jpg',
    specifications: {
      EngineConfiguration: '7.3-liter V12',
      Transmission: '6-speed manual',
      Power : '789 hp',
      topSpeed : '221 mph',
      acceleration : '0-60 mph in 3.3 seconds'
    },
    features: {
      Exterior: 'The exterior of the Zonda HP Barchetta is finished in a deep black color that is accented by rose gold trim. The car features a long hood, a sloping roofline, and a short rear deck. The front end of the car is dominated by a large grille and slim LED headlights. The rear of the car features a pair of round taillights and a retractable rear spoiler. The car rides on a set of custom-made alloy wheels that are finished in rose gold.',
      Interior: 'The interior of the Zonda HP Barchetta is finished in black leather and rose gold trim. The car features a pair of bucket seats, a leather-wrapped steering wheel, and a digital instrument cluster. The car also features a premium sound system, a navigation system, and a climate control system. The car has a retractable roof that can be opened or closed at the touch of a button.'
    }
  },
  {
    id:'5',
    name : 'Lamborghini',
    model : 'Veneno',
    origin : 'Italy',
    price : '8.3 Million',
    details: 'The Lamborghini Veneno is a limited-edition supercar that was unveiled in 2013 to celebrate the 50th anniversary of Lamborghini. The car is based on the Lamborghini Aventador, which is one of the fastest cars in the world. The Veneno is powered by a 6.5-liter V12 engine that produces 740 hp and 507 lb-ft of torque. The engine is mated to a 7-speed automatic transmission that sends power to all four wheels. The Veneno has a top speed of 221 mph and can accelerate from 0-60 mph in 2.9 seconds.',
    image: 'https://i.ytimg.com/vi/396_2NAmlUg/hq720.jpg',
    specifications: {
      EngineConfiguration: '6.5-liter V12',
      Transmission: '7-speed automatic',
      Power : '740 hp',
      topSpeed : '221 mph',
      acceleration : '0-60 mph in 2.9 seconds'
    },
    features: {
      Exterior: 'The exterior of the Veneno is finished in a deep black color that is accented by rose gold trim. The car features a long hood, a sloping roofline, and a short rear deck. The front end of the car is dominated by a large grille and slim LED headlights. The rear of the car features a pair of round taillights and a retractable rear spoiler. The car rides on a set of custom-made alloy wheels that are finished in rose gold.',
      Interior: 'The interior of the Veneno is finished in black leather and rose gold trim. The car features a pair of bucket seats, a leather-wrapped steering wheel, and a digital instrument cluster. The car also features a premium sound system, a navigation system, and a climate control system. The car has a retractable roof that can be opened or closed at the touch of a button.'
    },
  },
  {
    id:'6',
    name : 'Maybach',
    model : 'Exelero',
    origin : 'Germany',
    price : '8 Million',
    details: 'The Maybach Exelero is a one-off creation by the German luxury carmaker. The car was unveiled in 2005 and was designed as a high-performance sports car. The Exelero is powered by a 5.9-liter twin-turbocharged V12 engine that produces 690 hp and 752 lb-ft of torque. The engine is mated to a 5-speed automatic transmission that sends power to the rear wheels. The Exelero has a top speed of 218 mph and can accelerate from 0-60 mph in 4.4 seconds.',
    image: 'https://cdn.cars24.com/prod/auto-news24-cms/CARS24-Blog-Images/2025/01/31/b87826bb-dca1-4242-a8a0-2f07d5d420f7-Mercedes-Maybach-Exelero-min.jpg',
    specifications: {
      EngineConfiguration: '5.9-liter twin-turbocharged V12',
      Transmission: '5-speed automatic',
      Power : '690 hp',
      topSpeed : '218 mph',
      acceleration : '0-60 mph in 4.4 seconds'
    },
    features: {
      Exterior: 'The exterior of the Exelero is finished in a deep black color that is accented by rose gold trim. The car features a long hood, a sloping roofline, and a short rear deck. The front end of the car is dominated by a large grille and slim LED headlights. The rear of the car features a pair of round taillights and a retractable rear spoiler. The car rides on a set of custom-made alloy wheels that are finished in rose gold.',
      Interior: 'The interior of the Exelero is finished in black leather and rose gold trim. The car features a pair of bucket seats, a leather-wrapped steering wheel, and a digital instrument cluster. The car also features a premium sound system, a navigation system, and a climate control system. The car has a retractable roof that can be opened or closed at the touch of a button.'
    }
  },
  {
    id:'7',
    name : 'Bugatti',
    model : 'Divo',
    origin : 'France',
    price : '5.7 Million',
    details: 'The Bugatti Divo is a limited-edition supercar that was unveiled in 2018. The car is based on the Bugatti Chiron, which is one of the fastest cars in the world. The Divo is powered by an 8.0-liter quad-turbocharged W16 engine that produces 1500 hp and 1180 lb-ft of torque. The engine is mated to a 7-speed automatic transmission that sends power to all four wheels. The Divo has a top speed of 236 mph and can accelerate from 0-60 mph in 2.4 seconds.',
    image: 'https://cdn.cars24.com/prod/auto-news24-cms/CARS24-Blog-Images/2025/01/31/a2f03de5-7db1-450d-aa90-5aed562c9a64-Bugatti-Divo-min.jpg',
    specifications: {
      EngineConfiguration: '8.0-liter quad-turbocharged W16',
      Transmission: '7-speed automatic',
      Power : '1500 hp',
      topSpeed : '236 mph',
      acceleration : '0-60 mph in 2.4 seconds'
    },
    features: {
      Exterior: 'The exterior of the Divo is finished in a deep black color that is accented by rose gold trim. The car features a long hood, a sloping roofline, and a short rear deck. The front end of the car is dominated by a large grille and slim LED headlights. The rear of the car features a pair of round taillights and a retractable rear spoiler. The car rides on a set of custom-made alloy wheels that are finished in rose gold.',
      Interior: 'The interior of the Divo is finished in black leather and rose gold trim. The car features a pair of bucket seats, a leather-wrapped steering wheel, and a digital instrument cluster. The car also features a premium sound system, a navigation system, and a climate control system. The car has a retractable roof that can be opened or closed at the touch of a button.'
    }
 }
]

app.get('/', (req, res) => {
  res.send(`<div> <h2> TOP 7: The most expensive cars in the world </h2>
    <a href="http://localhost:${port}/cars"> Check Expensive Cars </a></div>
    `);
});
app.get('/cars', (req, res) => {
  res.send(cars);
});

app.post('/addCars', (req, res) => {
  const car = req.body;
  cars.push(car);
  res.send(car);
});


app.get('/cars/:id', (req,res) =>{
  const id = req.params.id;
  const car = cars[id];
  res.send(car)
})

app.listen(port, () => {
  console.log(`Server loading at  http://localhost:${port}`);
});