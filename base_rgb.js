

No accessible repositories. Click Refresh to check again.
No accessible repositories. Click Refresh to check again.
rgb *

var sent2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED"),
    geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[25.81382851259525, -20.37163257882301],
          [25.81382851259525, -20.705991300999653],
          [26.350785299704626, -20.705991300999653],
          [26.350785299704626, -20.37163257882301]]], null, false);


var image = ee.Image(sent2
  .filterDate("2023-01-12", "2023-04-12")
  .filterBounds(geometry)
  .sort("CLOUD_COVERAGE_ASSESSMENT")
  .first());

var medianComposite = sent2.median();

var clippedComposite = medianComposite.clip(geometry);

var trueColour = {bands: ["B4", "B3", "B2"], min: 0, max: 3000};

Map.addLayer(clippedComposite, trueColour, "True-colour image");
