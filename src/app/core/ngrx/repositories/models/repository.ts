export interface Repository {
    id: number;
    name: string;
    url: string;
}

export function generateMockRepository(): Repository {
    return {
        id: 1,
        name: '',
        url: '',
    };
}
