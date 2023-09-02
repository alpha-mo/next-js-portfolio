export type AboutMeArticle =
    | {
        variant: 'geek';
        title: 'Geek!';
        image: {
            path: '/pix/about/geek.jpg';
            width: 3072
            height: 4000
        }
        text: string[];
    }
    | {
        variant: 'handy';
        title: 'Handyman!';
        image: {
            lamp: {
                path: '/pix/about/lamp.jpeg'
                width: 1536
                height: 2048
            }
            roof: {
                path: '/pix/about/roof.jpg'
                width: 2160
                height: 2160
            }
            garden: {
                path: '/pix/about/garden.jpg'
                width: 3024
                height: 4032
            }
            train: {
                path: '/pix/about/train.jpeg'
                width: 1368
                height: 1824
            }
        }
        text: string[];
    }
    | {
        variant: 'farming';
        title: 'What about Farming?';
        image: {
            flower: {
                path: '/pix/about/plant-1.jpg';
                width: 3072
                height: 4000
            }
            grape: {
                path: '/pix/about/plant-2.jpg';
                width: 3072
                height: 4000
            }
            zucini: {
                path: '/pix/about/plant-3.jpg';
                width: 3072
                height: 4000
            }
        }
        text: string[];
    }
    | {
        variant: 'grad';
        title: 'Can you spot me?!';
        image: {
            path: '/pix/about/graduation.jpeg';
            width: 2048
            height: 1536
        }
        text: string;
    }
    | {
        variant: 'family';
        title: 'Most importantly';
        image: {
            path: '/pix/about/family.jpg';
            width: 3024
            height: 4032
        }
        text: string;
    };
