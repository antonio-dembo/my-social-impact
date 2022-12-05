import { IUser } from "../registro/user";

export interface IProject {
    projectId: number,
    projectName: string,
    projectAttendee: number,
    projectOwner: string,
    releaseDate: string,
    description: string,
    imageUrl: string
};