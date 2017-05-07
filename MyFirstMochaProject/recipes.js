/**
 * Created by jesse on 07/05/17.
 */
// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var recipes = [
    {
        name: 'Lasagne',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Calzone',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)'
    },
    {
        name: 'Tuna Salad',
        category: 'Salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ]
    },
    {
        name: 'Bacon Cheese Omelet',
        category: 'Meats',
        procedure: [
            'Cut or break bacon into one-inch pieces.',
            'Cut or break slices of cheese into one-inch-wide strips',
            'Melt the butter in a pan over a high heat. Make sure the pan is evenly covered in butter.',
            'When half the butter is melted, turn the heat to medium',
            'Beat or whisk eggs until evenly colored.',
            'Pour in the eggs, and rotate the pan so that the egg covers the entire surface of the pan.',
            'Continue rotating until the edges become thick, then use a spatula to lift side of now cooked egg, allowing the remaining liquid egg from the centre to flow underneath on to the pan and start cooking. Continue to rotate the pan and move the spatula to adjacent areas until most of the liquid egg is cooked.',
            'Lay the cheese down one side of the centre of the omelette.',
            'Place the bacon on top of the cheese.',
            'Carefully, flip the side with no ingredients over the top of the bacon and cheese side, so you now have a semi-circle omelette.',
            'Turn to low heat until cheese has melted. Makes two servings; great with vegetables or salad.'
        ]
    }
];
module.exports = recipes;
