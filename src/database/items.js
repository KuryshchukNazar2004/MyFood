export const COLORS ={
    black: '#000',
    white: '#fff',
}

export const Categories = [
    {
        name: 'Burger',
        // image: require(''),
        items: [
            {
                name: 'Classic Burger',
                weight: 120,
                rating: '4.2',
                price: 199,
                isToOfTheWeek: true,
                image: require('../database/images/burger/classicburger.png'),
                size: 'Large 8"',
                crust: 'Thick Crust',
                delivery: 25,
                ingredients: [
                    require('../database/images/flour.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/tomato.png')
                ]
            },
            {
                name: 'Big Burger',
                weight: 150,
                rating: '5.0',
                price: 299,
                isToOfTheWeek: false,
                image: require('../database/images/burger/bigburger.png'),
                size: 'Large 12"',
                crust: 'Thick Crust',
                delivery: 25,
                ingredients: [
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                ]
            },
            {
                name: 'Biggie Cheese',
                weight: 250,
                rating: '4.5',
                price: 199,
                isToOfTheWeek: false,
                image: require('../database/images/burger/cheeseburger.png'),
                size: 'Large 10"',
                crust: 'Thick Crust',
                delivery: 25,
                ingredients: [
                    require('../database/images/tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                    require('../database/images/Sliced-Onion.png'),
                    
                ]
            },
        ]
    },
    {
        name: 'Pizza',
        // image: require('../database/images/pizaCartoon'),
        items:[
            {
                name: 'Pepperoni Pizza',
                weight: 250,
                rating: '5.0',
                price: 199,
                isToOfTheWeek: true,
                image: require('../database/images/pizza/saliami.png'),
                size: 'Large 14"',
                crust: 'Thin Crust',
                delivery: 30,
                ingredients: [
                    require('../database/images/tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                    require('../database/images/Sliced-Onion.png'),
                    
                ]
            },
            {
                name: 'Motsarela Pizza',
                weight: 300,
                rating: '4.5',
                price: 240,
                isToOfTheWeek: false,
                image: require('../database/images/pizza/motsarela.png'),
                size: 'Large 16"',
                crust: 'Thin Crust',
                delivery: 25,
                ingredients: [
                    require('../database/images/tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                    require('../database/images/Sliced-Onion.png'),
                    
                ]
            },
            {
                name: 'Mexican Pizza',
                weight: 350,
                rating: '5.0',
                price: 220,
                isToOfTheWeek: false,
                image: require('../database/images/pizza/mexicano.png'),
                size: 'Large 14"',
                crust: 'Thin Crust',
                delivery: 45,
                ingredients: [
                    require('../database/images/tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                    require('../database/images/Sliced-Onion.png'),
                    
                ]
            },
        ]
    },
    {
        name: 'Soft Drinks',
        image: require('../database/images/cocacola.png'),
        items:[
            {
                name: 'Coca Cola',
                weight: 200,
                rating: '5.0',
                price: 299,
                isToOfTheWeek: true,
                image: require('../database/images/softdrinks/cocacola.png'),
                size: 'Medium Glass',
                crust: 'Small Ice',
                delivery: 10,
                ingredients: [
                    require('../database/images/softdrinks/cocacola.png')
                    
                ]
            },
            {
                name: 'Orange Juice',
                weight: 500,
                rating: '4.5',
                price: 199,
                isToOfTheWeek: false,
                image: require('../database/images/softdrinks/orange.png'),
                size: 'Large Glass"',
                crust: 'Large Ice',
                delivery: 8,
                ingredients: [
                    require('../database/images/softdrinks/orange.png')
                ]
            },
            {
                name: 'Mango Juice',
                weight: 150,
                rating: '4.2',
                price: 99,
                isToOfTheWeek: false,
                image: require('../database/images/softdrinks/mango.png'),
                size: 'Large Glass"',
                crust: 'Small Ice',
                delivery: 5,
                ingredients: [
                    require('../database/images/softdrinks/mango.png')
                ]
            }
        ]
    }
]