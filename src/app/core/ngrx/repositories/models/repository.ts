export interface Repository {
    id: string;
    name: string;
    url: string;
}

export function generateMockRepository(): Repository {
    return {
        id: '111',
        name: '',
        url: '',
    };
}
