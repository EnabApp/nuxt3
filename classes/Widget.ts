export default class Widget {
    id: number;
    title: string;
    state: boolean;

    constructor(args) {
        this.id = args?.id;
        this.title = args?.title
        this.state = args?.state ?? false
    }
}
