export interface User {
    name: string;
    organization: string;
    gymCheckinInformation: CheckinInformation[];
}

export interface CheckinInformation {
    timeIn: Date;
    timeOut: Date;
}
