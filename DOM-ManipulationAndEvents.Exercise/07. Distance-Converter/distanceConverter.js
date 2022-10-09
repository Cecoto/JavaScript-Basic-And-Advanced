function attachEventsListeners() {
  let butttonConvert = document.getElementById('convert');

  butttonConvert.addEventListener('click',onClick);

  let metricUnits = {
    km:1000,
    m:1,
    cm:0.01,
    mm:0.001,
    mi:1609.34,
    yrd:0.9144,
    ft:0.3048,
    in:0.0254


  }
  function onClick(e) {
    let fromValue = document.getElementById('inputUnits').value;
    let toValue = document.getElementById('outputUnits').value;

    let inputDistance = Number(document.getElementById('inputDistance').value);
    let outputDistanceEle  = document.getElementById('outputDistance').value;

    let valueInMeters = inputDistance*metricUnits[fromValue];
    let convertValue = valueInMeters/metricUnits[toValue];

    outputDistanceEle.value = convertValue;
  }
}