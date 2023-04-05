export interface About {
    _id:        String;
    name:       String;
    city:       String;
    instrument: String;
    date:       Date;
    image:      String;
    createdAt:  Date;
    updatedAt:  Date;
    __v:        Number;
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
