import { AppUrl } from "@/utils/types"

export type CardContent = {
    title: string
    body: string
    url: AppUrl
}

export const content: CardContent[] = [
    {
        title: "Full-Stack Developer and hobbyist farmer",
        body: "Call me Max, I am a newly graduate Software Developer living in Sweden and absolutely open to relocate to any country with a chance for a career start.\nI'm a lifelong learner and a Code Geek!",
        url: '/'
    },
    {
        title: "About me page",
        body: "Max as a person, you get to know a bit about my background and who I am in life.",
        url: '/about'
    },
    {
        title: "Education page",
        body: 'This page lists in details all info about what kind of education, Certificates and courses that I completed / on-progress.',
        url: '/edu'
    },
    {
        title: "My Work page",
        body: "Since I'm a newly graduate this page will list some of the projects that worked on during my study period.\nIncluding my trainee period.",
        url: '/work'
    },
    {
        title: "Skills page",
        body: "Here you can see almost all the programming-languages, frameworks and various tools that I have worked with.",
        url: '/skills'
    },
    {
        title: "Contact page",
        body: "Send me a message with portfolio contact-form or use any of the listed ways to contact me.\nSay hello and make my day 👋",
        url: '/contact'
    },
]

export function getCardInfo(key: AppUrl) {
    return content.find(item => item.url === key) || content[0]
}