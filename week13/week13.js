function setup() {
    initializeFields();
    createCanvas(300, 300);
    // color(0xF5, 0x52, 0x7D)
    fill(color(0x97, 0xC4, 0xFA));
    textSize(50);
    textAlign(CENTER, CENTER);
}

var choice;

function draw() {
    background(color(0xD6, 0xF5, 0x52));
    text("Dinner1", 150, 50);
    text("Dinner2", 150, 150);
    text("Dinner3", 150, 250);
    // int choice = mouseX % 3;
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
}

function mousePressed() {
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
