  
class User {
    constructor() {
        this.index = null;
        this.email = null
        this.input = null;
        this.answer1 = null;
        this.answer2 = null;
        this.answer3 = null;
    }

    updateCount(count) {
        database.ref('/').update({
            PeopleCount: count
        });
    }

    update() {
        var playerIndex = "VOTER" + this.index;
        database.ref(playerIndex).set({
            Name: this.input,
            email: this.email,
            Answer1: this.answer1,
            Answer2: this.answer2,
            Answer3: this.answer3
        });
    }
}