class Form {

    constructor() {
        this.button = createButton('Submit');
        this.name = createInput("Name :");
        this.email = createInput("email :")
        
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.Q1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.Q2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.Q3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('100');
        this.radio2.option('1000');
    }


    display() {
        
        this.name.position(570, 165)
        this.email.position(570, 235)

        this.button.position(625, 600)
        
      
        this.greeting.position(300, 105)
        this.text.position(400, 5)
        this.Q1.position(300, 260)
        this.radio.position(600, 320)
        this.Q2.position(300, 350)
        this.radio1.position(600,410)
        this.Q3.position(300, 440)
        this.radio2.position(600, 500)

          
        this.button.mousePressed(() => {
            this.button.hide();
            this.name.hide();
            this.email.hide();
            
            this.greeting.hide();
            this.text.hide();
            this.Q1.hide();
            this.radio.hide();
            
            this.Q2.hide();

            this.radio1.hide();
            this.Q3.hide();
            this.radio2.hide();
            //__________________________________________________________
            fill("red")
            rect(0,0,1023,655);
            stroke("white");
            strokeWeight(58);
            text(" THANKS FOR VOTING :)",400,322)
       
            user.input = this.name.value();
            user.email = this.email.value();
            peopleCount += 1;
            user.answer1 = this.radio.value();
            user.answer2 = this.radio1.value();
            user.answer3 = this.radio2.value();
            user.index = peopleCount;
            user.update();
            user.updateCount(peopleCount);
        });
            

        
    }
}