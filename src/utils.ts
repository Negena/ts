export class ID{
    static _id: number = 1 

    static getnewId(): number {
        return this._id++
    }
}