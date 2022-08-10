

class Specification {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Specification };