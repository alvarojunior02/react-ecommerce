export default interface IUser {
    name: string,
    email: string,
    role: Role[]
}

interface Role {
    name: string,
}