import { AboutMeArticle } from "./types";

export const articles: AboutMeArticle[] = [
    {
        variant: 'geek',
        title: 'Geek!',
        image: {
            path: '/pix/about/geek.jpg',
            width: 3072,
            height: 4000
        },
        text: ["I cant remember a period of my life where I wasn't learning a new computer skill.\nfrom working as self-taught CAD draftsman in Saudi to a free-time trouble-shooter for friends and family.", "So when I came to Sweden fleeing war in Syria it was only a matter of time before I realized I love coding and so the journey began to become a full-stack developer."]
    },
    {
        variant: 'handy',
        title: 'Handyman!',
        image: {
            garden: {
                path: '/pix/about/garden.jpg',
                height: 4032,
                width: 3024
            },
            lamp: {
                path: '/pix/about/lamp.jpeg',
                height: 2048,
                width: 1536
            },
            roof: {
                path: '/pix/about/roof.jpg',
                height: 2160,
                width: 2160
            },
            train: {
                path: '/pix/about/train.jpeg',
                height: 1824,
                width: 1368
            }
        },
        text: ["You're probably thinking “what a professional bulb- changer 😁” and you would be right!", "Working with tools and fixing stuff around the house is only a natural skill for a guy who loves to learn as much as he can.", "And yes that is me driving a train in Sweden just so you would understand how much I am willing to learn."]
    },
    {
        variant: 'farming',
        title: 'What about Farming?',
        image: {
            flower: {
                path: '/pix/about/plant-1.jpg',
                height: 4000,
                width: 3072
            },
            grape: {
                path: '/pix/about/plant-2.jpg',
                height: 4000,
                width: 3072
            },
            zucini: {
                path: '/pix/about/plant-3.jpg',
                height: 4000,
                width: 3072
            }
        },
        text: ["Having a small garden and planting your own veggies/fruits is absolutely amazing!\nI can't think of any medicine for the soul better than connecting with nature.", "I grow tomatos, peas, grapes, zuccini, strawberries, broccoli, onion ..., and I even have some fruit trees.", "It is fascinating to see how a small seed can grow and become a plant that produces fruits and vegetables."]
    },
    {
        variant: 'grad',
        title: 'Can you spot me?!',
        image: {
            path: '/pix/about/graduation.jpeg',
            height: 1536,
            width: 2048
        },
        text: 'See if you can find me in my graduation photo!'
    },
    {
        variant: 'family',
        title: 'Most importantly',
        image: {
            path: '/pix/about/family.jpg',
            height: 4032,
            width: 3024
        },
        text: "I'm a family man."
    }
]