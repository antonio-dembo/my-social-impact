import { IUser } from "../registro/user";

export interface IProject {
    projectId: string,
    projectName: string,
    projectAttendee: IUser[],
    projectOwner: string,
    releaseDate: string,
    description: string,
    imageUrl: string
};