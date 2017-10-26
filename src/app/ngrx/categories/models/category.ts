export interface Category {
    Name: string;
    Number: string;
    Path: string;
    Subcategories?: Category[];
    AreaOfBusiness?: number;
    HasClassifieds?: boolean;
    CanHaveSecondCategory?: boolean;
    CanBeSecondCategory?: boolean;
    IsLeaf: boolean;
}

export function generateMockCategory(): Category {
    return {
        Name: '',
        Number: '',
        Path: '',
        IsLeaf: true,
    };
}
