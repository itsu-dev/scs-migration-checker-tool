export interface RuleDefinitions {
    version: string,
    updatedAt: string,
    author: string,
    exclusions: Exclusion[],
    departments: Department[]
}

export const createRuleDefinitions = (): RuleDefinitions => {
    const date = new Date();
    return {
        version: "",
        updatedAt: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
        author: "",
        exclusions: [],
        departments: []
    };
}

export interface Exclusion {
    subjects: Subject[],
    season: string
}

export interface Subject {
    name: string,
    isContents: boolean,
    unit: number | null
}

export interface Department {
    departmentName: string,
    rules: Rule[]
}

export type RuleType = "required_subjects" | "import_subjects_limit" | "important_subjects";

export interface Rule {
    description: string,
    type: RuleType,
    isMain: boolean | null,
    minimum: number | null,
    maximum: number | null,
    subjects: Subject[]
}