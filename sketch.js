function setup() {
    createCanvas(800, 600);
    background(100,110,10);
    
}

function draw() {
    background(100,110,27);
    clonePato(70, 399, 355, 100)
    clonePato(40, 399, 500, 300)
    clonePato(80, 399, 200, 50)
    if (mouseIsPressed){
        clonePato(mouseX, mouseX, mouseY, mouseY)
        }
}

function clonePato(head_size, pato_location_x, pato_location_y,pato_color_R) {
    //create duck of variable head size
    fill(pato_color_R,pato_color_R+130,110);
    ellipse(pato_location_x, pato_location_y, 150, 80);
    ellipse(pato_location_x-49, pato_location_y-55, head_size)
    fill(100, 200, 55)
    ellipse(pato_location_x-89, pato_location_y-55, 40, 20)
    ellipse(pato_location_x-54, pato_location_y-65, 5)
    triangle(pato_location_x-49, pato_location_y+45, pato_location_x-9, pato_location_y+35, pato_location_x+1, pato_location_y+45)
    triangle(pato_location_x-29, pato_location_y+45, pato_location_x-9, pato_location_y+35, pato_location_x+1, pato_location_y+45) 
}