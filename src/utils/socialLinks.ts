export type SvgLinkProps = "email" | "github" | "gitlab" | "linkedin";

export type SvgLinksObj = {
    type: SvgLinkProps
    value: string
    icon: string
    desc: string
}[]


export const socialLinks: SvgLinksObj = [
    {
        type: 'email',
        value: 'mailto:contact@ojail.se',
        icon: '/svg/social/email.svg#email',
        desc: 'Send me an email'
    },
    {
        type: 'github',
        value: 'https://github.com/alpha-mo',
        icon: '/svg/social/github.svg#github',
        desc: 'Visit my Gitbub profile'
    },
    {
        type: 'gitlab',
        value: 'https://gitlab.com/alpha-mo',
        icon: '/svg/social/gitlab.svg#gitlab',
        desc: 'Visit my Gitlab profile'
    },
    {
        type: 'linkedin',
        value: 'https://www.linkedin.com/in/ojail/',
        icon: '/svg/social/LinkedIn.svg#linkedin',
        desc: 'Visit my LinkedIn profile'
    }
]