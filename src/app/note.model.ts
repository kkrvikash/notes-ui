export class Note {
    public id: Number;
    public title: string;
    public content: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id: number, title: string, content: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}