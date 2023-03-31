export interface About {
    _id:        string;
    name:       string;
    city:       string;
    instrument: string;
    date:       Date;
    image:      string;
    createdAt:  Date;
    updatedAt:  Date;
    __v:        number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAbout(json: string): About[] {
        return JSON.parse(json);
    }

    public static aboutToJson(value: About[]): string {
        return JSON.stringify(value);
    }
}
