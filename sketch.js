var peopleCount = 0;

function setup() {
    canvas = createCanvas(1023,655);
    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();

}