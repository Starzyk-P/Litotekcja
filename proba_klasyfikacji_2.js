var sent2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED"),
    geometry = 
    /* color: #ffffff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-68.06340185712685, -20.4642382766613],
          [-68.05396048139443, -20.499616342263604],
          [-67.99044577192177, -20.48257156562095],
          [-68.00812689374794, -20.45764418998529]]]),
    geometry2 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-68.37982461142742, -19.65372182453713],
          [-68.39630410361492, -20.66954824975222],
          [-67.66022011923992, -21.269679088445756],
          [-66.67694375205242, -20.4638263333581],
          [-67.17132851767742, -19.560578206653563]]]),
    geometry3 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-65.23142026493244, -24.63733390191692],
          [-65.20601438114338, -24.755239944540115],
          [-65.02130673954181, -24.808230056256182],
          [-64.90663693973713, -24.65168821668833],
          [-65.02130673954181, -24.58177341044202],
          [-65.15863584110431, -24.56928451219601]]]),
    geometry4 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-66.73287795321063, -24.130235916295156],
          [-66.7487566305788, -24.145509486701748],
          [-66.73455975411706, -24.159352045546807],
          [-66.70640728829675, -24.151207250674844],
          [-66.69954083321862, -24.13084299232943],
          [-66.71705029366784, -24.120189626825027]]]),
    geometry5 = /* color: #00ff00 */ee.Geometry.Polygon(
        [[[-66.93361207797602, -23.450379928186553],
          [-66.96107789828852, -23.82025854362073],
          [-66.63148805453852, -23.83784568971131],
          [-66.58479616000727, -23.440300630665018]]]),
    geometry6 = 
    /* color: #0000ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.75940165049892, -23.553265224709925],
                  [-66.75528177745204, -23.558930065951387],
                  [-66.75509888500095, -23.565247283657015],
                  [-66.756729668082, -23.57154096262282],
                  [-66.75973374217868, -23.575867691956937],
                  [-66.76462609142185, -23.58011561477119],
                  [-66.75750214427829, -23.60103856125465],
                  [-66.7472024616611, -23.595690155564785],
                  [-66.73964936107517, -23.588453730160396],
                  [-66.73398453563571, -23.578542326051757],
                  [-66.73140961498142, -23.56800080531305],
                  [-66.73209626048923, -23.55730108329476],
                  [-66.73484284252048, -23.54848889330523],
                  [-66.73776108592868, -23.544239947770595],
                  [-66.74273926586032, -23.538259717754936],
                  [-66.74806076854587, -23.53416782475607],
                  [-66.75578553050876, -23.544554689185617],
                  [-66.76179367870212, -23.541879363145018],
                  [-66.76351029247165, -23.54471205961062],
                  [-66.75904709667087, -23.547072593383792],
                  [-66.75990540355563, -23.54896098988848],
                  [-66.75836045116306, -23.550691996189045]]]),
            {
              "Landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.73107241444124, -23.640515844328945],
                  [-66.72832583241, -23.63123744391424],
                  [-66.72849749378695, -23.626833905185123],
                  [-66.7477235680057, -23.619599198726032]]]),
            {
              "Landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.74892519764437, -23.633910948757713],
                  [-66.75390337757601, -23.632181040092004],
                  [-66.76935290150179, -23.666932093211763],
                  [-66.74995516590609, -23.67384975285941],
                  [-66.74429034046663, -23.66614597235961],
                  [-66.74017046741976, -23.65655491737286],
                  [-66.73639391712679, -23.64916460836194],
                  [-66.7345056419803, -23.64947909810129],
                  [-66.73193072132601, -23.639886821012915],
                  [-66.7477235680057, -23.620228319496125]]]),
            {
              "Landcover": 1,
              "system:index": "2"
            })]),
    otherAreas = 
    /* color: #999900 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.84287111331301, -23.493686716776406],
                  [-66.8476776318677, -23.610763523919246],
                  [-66.81540529300051, -23.612021847276573],
                  [-66.81197206546145, -23.493686716776406]]]),
            {
              "Landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.87445680667238, -23.464086303692113],
                  [-66.85454408694582, -23.482980951217233],
                  [-66.82089845706301, -23.470384820176502]]]),
            {
              "Landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.61902467776613, -23.48487026712818],
                  [-66.61765138675051, -23.526428365820504],
                  [-66.59567873050051, -23.500613513553347]]]),
            {
              "Landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.93488161135988, -23.63089524772676],
                  [-66.93213502932863, -23.70636163576979],
                  [-66.86209718753176, -23.71767783422008]]]),
            {
              "Landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.91565553714113, -23.574266893837358],
                  [-66.91016237307863, -23.666118317188193],
                  [-66.87445680667238, -23.663602698163633]]]),
            {
              "Landcover": 0,
              "system:index": "4"
            })]),
    geometry7 = 
    /* color: #ff00ff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[18.46317825123962, 50.53403267734118],
          [18.55930862233337, 50.0356222827284],
          [19.09763870045837, 50.13783458953489],
          [18.78727493092712, 50.54625156752079]]]),
    geometry8 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([-68.66016564244558, -21.216080133945017]),
    geometry9 = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-68.59424767369558, -21.272398726047317],
          [-68.59424767369558, -22.02802633915866],
          [-67.87464318150808, -22.02802633915866],
          [-67.87464318150808, -21.272398726047317]]], null, false),
    geometry10 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-66.87878614495766, -23.24782014189837],
          [-66.93371778558266, -24.208305884787652],
          [-65.59338575433266, -24.163207020774173],
          [-65.59338575433266, -23.343681544389604]]]),
    geometry11 = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-71.71214413008832, -26.062228151538353],
          [-71.71214413008832, -28.618780489767968],
          [-67.99876522383832, -28.618780489767968],
          [-67.99876522383832, -26.062228151538353]]], null, false),
    geometry12 = 
    /* color: #00ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-69.32457258444643, -18.650580100966863],
          [-69.32457258444643, -20.132450986841796],
          [-67.33055402975893, -20.132450986841796],
          [-67.33055402975893, -18.650580100966863]]], null, false),
    geometry13 = 
    /* color: #bf04c2 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.MultiPolygon(
        [[[[31.323655285264337, -17.560093711570705],
           [31.323655285264337, -18.053020391273304],
           [31.945756115342462, -18.053020391273304],
           [31.945756115342462, -17.560093711570705]]],
         [[[24.27706573172787, -20.242140929071653],
           [24.27706573172787, -21.343660756384107],
           [26.60067413016537, -21.343660756384107],
           [26.60067413016537, -20.242140929071653]]]], null, false);
Map.centerObject(geometry13, 10);
/*var images = sent2
  .filterDate("2021-05-03", "2022-09-03")
  .filterBounds(geometry)
  .sort("CLOUD_COVERAGE_ASSESSMENT");

print("Filtered Images:", images); 

/*var image = ee.Image(sent2
  .filterDate("2023-01-12", "20243-04-12")
  .filterBounds(geometry5)
  .sort("CLOUD_COVERAGE_ASSESSMENT")
  .first());

var medianComposite = sent2.median();

var clippedComposite = medianComposite.clip(geometry5);

var visParams = {bands: ['B12', 'B11', 'B8'], min: 0, max: 3000};

Map.addLayer(clippedComposite, visParams, 'Mineral Analysis SWIR');

Map.addLayer(ee.Image().paint(geometry5, 1, 2), {}, 'Geometry Boundary');*/



var image = ee.Image(sent2
  .filterDate("2023-01-12", "2023-04-12")
  .filterBounds(geometry13)
  .sort("CLOUD_COVERAGE_ASSESSMENT")
  .first());


var medianComposite = sent2.median();

var clippedComposite = medianComposite.clip(geometry13);

var visParams = {bands: ['B12', 'B11', 'B8'], min: 0, max: 3000};

Map.addLayer(clippedComposite, visParams, 'Mineral Analysis SWIR');

Map.addLayer(ee.Image().paint(geometry13, 1, 2), {}, 'Geometry Boundary')


/*/ 

var bands = ['B12', 'B11', 'B8']; 
var classNames = geometry6

print (classNames);

var trainingData = geometry6.merge(otherAreas);

print("Training Data:", trainingData);

var bands = ['B12', 'B11', 'B8'];
var training = clippedComposite.select(bands).sampleRegions({
  collection: trainingData,
  properties: ['Landcover'],
  scale: 10
});

print("Training Size:", training.size());
print("Training Samples:", training);

var classifier = ee.Classifier.smileCart().train({
  features: training,
  classProperty: 'Landcover',
  inputProperties: bands
});

var classified = clippedComposite.select(bands).classify(classifier);

Map.addLayer(classified, {min: 0, max: 1, palette: ['red', 'green']}, 'Classification');


/*var training = clippedComposite.select(bands).sampleRegions({
  collection: classNames,
    properties: ['Landcover'],
});

print(training.size());

var Classifier = ee.Classifier.smileCart().train({
  features: training,
  classProperty: 'Landcover',
  inputProperties: bands
});

var classified = clippedComposite.select(bands).classify(Classifier);

Map.addLayer(classified, 
{min:0, max:3, palette: ['red','blue','green','yellow']},'classification');*/

/*
var classNames = ee.FeatureCollection([
  ee.Feature(geometry6, {Landcover: 1}),
]);

var training = clippedComposite.select(bands).sampleRegions({
  collection: classNames,
  properties: ['Landcover'],
  scale: 10 
});

print("Training Size:", training.size());

var classifier = ee.Classifier.smileCart().train({
  features: training,
  classProperty: 'Landcover',
  inputProperties: bands
});

var classified = clippedComposite.select(bands).classify(classifier);

Map.addLayer(classified, {min: 0, max: 1, palette: ['red', 'green']}, 'Classified Map');*/
