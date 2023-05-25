const magazines = [
    {
        id: '2',

        title: 'Forbse',

        author: 'Danw Jhone',

        year: 2023,

        country: 'GERMAN',
        collection: null


    },

    {
        id: '3',

        title: 'Hai Club',

        author: 'Bai Ivan',

        year: 2022,

        country: 'SPAIN',
        collection: null



    },


    {
        id: '4',

        title: 'Amazon',

        author: 'Bai Ivan 2',

        year: 2022,

        country: 'BRAZIL',
        collection: null


    }

]

const books = [
    {

        title: 'Shogun',

        author: 'James Clavel',

    },

    {

        title: 'The Awakening',

        author: 'Kate Chopin',

    },

    {

        title: 'City of Glass',

        author: 'Paul Auster',

    },

];

const customers = [

    {
        name: 'Pesho',
        year: '1990',
        gender: 'MALE',
        collection: [
            {
                id: '3',

                title: 'Hai Club',

                author: 'Bai Ivan',

                year: 2022,

                country: 'SPAIN',
                collection: null



            },
            {
                id: '2',

                title: 'Forbse',

                author: 'Danw Jhone',

                year: 2023,

                country: 'GERMAN'

            },


        ]
    },
    {
        name: 'Ivan',
        year: '1993',
        gender: 'MALE',
        collection: [{
            id: '4',

            title: 'Amazon',

            author: 'Bai Ivan 2',

            year: 2022,

            country: 'BRAZIL'


        },
        {
            id: '2',

            title: 'Forbse',

            author: 'Danw Jhone',

            year: 2023,

            country: 'GERMAN'

        },


        ]
    }



]

module.exports = {
    books,
    magazines,
    customers,
}