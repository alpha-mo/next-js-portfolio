export type Key =
    | 'typescript'
    | 'tailwind'
    | 'svelte'
    | 'spring'
    | 'react'
    | 'next js'
    | 'maven'
    | 'javascript'
    | 'java'
    | 'HTML'
    | 'hibernate'
    | 'gitlab'
    | 'github'
    | 'git'
    | 'directus'
    | 'databases'
    | 'CSS'
type ToolItem = { text: Key; path: string }

export const items: ToolItem[] = [
    {
        text: 'typescript',
        path: "/svg/tools/typescript.svg#ts"
    },
    {
        text: 'tailwind',
        path: "/svg/tools/tailwind.svg#tailwind"
    },
    {
        text: 'svelte',
        path: "/svg/tools/svelte.svg#svelte"
    },
    {
        text: 'spring',
        path: "/svg/tools/spring.svg#spring"
    },
    {
        text: 'react',
        path: "/svg/tools/react.svg#react"
    },
    {
        text: 'next js',
        path: "/svg/tools/nextjs.svg#next"
    },
    {
        text: 'maven',
        path: "/svg/tools/maven.svg#maven"
    },
    {
        text: 'javascript',
        path: "/svg/tools/javascript.svg#js"
    },
    {
        text: 'java',
        path: "/svg/tools/java.svg#java"
    },
    {
        text: 'HTML',
        path: "/svg/tools/html.svg#html"
    },
    {
        text: 'hibernate',
        path: "/svg/tools/hibernate.svg#hibernate"
    },
    {
        text: 'gitlab',
        path: "/svg/tools/gitlab.svg#gitlab"
    },
    {
        text: 'github',
        path: "/svg/tools/github.svg#github"
    },
    {
        text: 'git',
        path: "/svg/tools/git.svg#git"
    },
    {
        text: 'directus',
        path: "/svg/tools/directus.svg#directus"
    },
    {
        text: 'databases',
        path: "/svg/tools/database.svg#db"
    },
    {
        text: 'CSS',
        path: "/svg/tools/css.svg#css"
    }
]

export function getItem(key: Key): ToolItem {
    return items.find(item => item.text === key)!
}