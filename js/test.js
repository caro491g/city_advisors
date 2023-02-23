let orientationSensor;

function setup() {
  createCanvas(400, 400);

  orientationSensor = createSensor("orientation");
  orientationSensor.setDataRate(50);
}

function draw() {
  background(220);

  let alpha = orientationSensor.alpha;
  let beta = orientationSensor.beta;
  let gamma = orientationSensor.gamma;

  text(`Alpha: ${alpha.toFixed(2)}`, 20, 20);
  text(`Beta: ${beta.toFixed(2)}`, 20, 40);
  text(`Gamma: ${gamma.toFixed(2)}`, 20, 60);
}
