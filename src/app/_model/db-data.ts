import { Course } from './Course';

export const COURSES: Course[] = [
    {
        id: 1,
        description: 'Angular Core Deep Dive',
        iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        longDescription: 'A detailed walk-through of the most important part of Angular',
        category: 'Advanced',
        lessonsCount: 10
    },
    {
        id: 2,
        description: 'RxJS In Practice',
        iconUrl: 'https://rxjs-dev.firebaseapp.com/assets/images/favicons/favicon-192x192.png',
        longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators',
        category: 'Beginner',
        lessonsCount: 10
    },
    {
        id: 3,
        description: 'NgRx in Depth',
        longDescription: 'Learn the modern NgRx Ecosystem, including Store, Effects, Router Store etc.',
        iconUrl: 'https://miro.medium.com/max/700/1*Rh5uK_EmfFwZyBTrq6AR5g.png',
        category: 'Advanced'
    },
    {
        id: 4,
        description: 'Angular for Beginners',
        iconUrl: 'https://malcoded.com/static/c14240e04554e0c20c9c95435cb5c1da/b6424/angular-beginners-guide.webp'
    }
];
