import { IUser } from "../registro/user";
import { IProject } from "./project";

export const projects: IProject[] =
    [
        {
            projectId: 1,
            projectName: "Leaf Lake",
            projectAttendee: 2,
            projectOwner: "1",
            releaseDate: "March 18, 2021",
            description: "Leaf rake with 48-inch wooden handle.",
            imageUrl: "assets/images/como-criar-ongs.png"
        },
        {
            projectId: 2,
            projectName: "Garden Cart",
            projectAttendee: 0,
            projectOwner: '1',
            releaseDate: "March 18, 2021",
            description: "Leaf rake with 48-inch wooden handle.",
            imageUrl: "assets/images/hammer.png"
        }
    ];

export const users: IUser[] = [
    {
        "userId": "1",
        "firstName": "FirstAdmin",
        "lastName": "LastAdmin",
        "email": "admin@test.com",
        "senha": "123",
        "role": "admin"
    },
    {
        "userId": "2",
        "firstName": "FirstAna",
        "lastName": "LastAna",
        "email": "user@test.com",
        "senha": "111",
        "role": "user"
    }
];