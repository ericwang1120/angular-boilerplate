export interface User {
    id: string;
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
}

export function generateMockUser(): User {
    return {
        id: '',
        avatar_url: '',
        name: '',
        company: '',
        blog: '',
        location: '',
        followers: 0,
        following: 0,
        public_repos: 0,
    };
}
