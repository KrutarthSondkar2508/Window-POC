import { MapLocation } from "./project-information";

export class Owner {
    OwnerId: number;
    ProjectId: number;
    BuildingOwner: string;
    BusinessContact: string;
    BusinessName: string;
    PhoneNumber: string;
    PhoneNumberExt: string;
    Address: MapLocation; // not mapped
    CopyFlag: boolean;
}
