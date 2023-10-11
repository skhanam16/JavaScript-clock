const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const numColor = document.getElementById('num-color');
const largeHColor = document.getElementById('largeH-color');
const secondHColor = document.getElementById('secondH-color');
// console.log(face);
// face.addEventListener('click', faceColorChange);


function clock(){
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    // set default canvas
    ctx.save(); // save the default state
    ctx.clearRect(0,0,500,500);
    ctx.translate(250,250); // make the clock at the middle of the canvas. put 0,0 at the middle
    ctx.rotate(-Math.PI/2); // rotate clock -90 degree

    // set default style
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#f4f4f4';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
  
    // draw clock face/border

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = faceColor.value;
    ctx.fillStyle = borderColor.value;
    ctx.lineWidth = 12;
    ctx.arc(0,0,142,0,Math.PI*2, true);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Drew hour lines
    // first of all save our state
    ctx.save();
    ctx.strokeStyle = numColor.value;
    for(let i=0; i<12; i++){
    ctx.beginPath();
    ctx.rotate(Math.PI /6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
    }
    ctx.restore();
 // Drew hour lines

    // Drew minute lines

    ctx.save();
    ctx.strokeStyle = numColor.value;
    ctx.lineWidth = 4;
    for(let i=0; i<60; i++){
        if(i % 5 !==0){
        ctx.beginPath();
        ctx.moveTo(117,0);
        ctx.lineTo(120,0);
        ctx.stroke();
        }
   ctx.rotate(Math.PI /30);
    }
    ctx.restore();
 // Drew minute lines

// Get currect time

    const hour = now.getHours() % 12;
    const min = now.getMinutes();
    const sec = now.getSeconds();
    console.log(`${hour} : ${min}  :${sec}`);

    // Get currect time

    // draw hour hands
    ctx.save();
    ctx.rotate((Math.PI / 6) * hour + (Math.PI / 360) * min + (Math.PI /21600 ) * sec);
    ctx.strokeStyle = largeHColor.value;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // draw min hands
    ctx.save();
    ctx.rotate((Math.PI / 30) *  min + (Math.PI /1800 ) * sec);
    ctx.strokeStyle = secondHColor.value;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
    ctx.restore();

    // draw sec hands
    ctx.save();
    ctx.rotate((sec * Math.PI / 30));
    ctx.strokeStyle = '#FF7F50';
    ctx.fillStyle = '#FF7F50';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0 , Math.PI *2 , true);
    ctx.fill()
    ctx.restore();


    ctx.restore(); // restore the default state
    requestAnimationFrame(clock);
}
requestAnimationFrame(clock);


// function faceColorChange(e){
//     console.log(e.target);

// }
