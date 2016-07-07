const PythonShell = require('python-shell');

// const data = '[{"User_facebook_id":2,"rating":3,"Product_upc":1},{"User_facebook_id":2,"rating":3,"Product_upc":15},{"User_facebook_id":2,"rating":3,"Product_upc":85},{"User_facebook_id":2,"rating":3,"Product_upc":128},{"User_facebook_id":2,"rating":5,"Product_upc":37},{"User_facebook_id":1,"rating":2,"Product_upc":53},{"User_facebook_id":1,"rating":3,"Product_upc":35},{"User_facebook_id":1,"rating":4,"Product_upc":43},{"User_facebook_id":1,"rating":5,"Product_upc":110},{"User_facebook_id":39,"rating":1,"Product_upc":26},{"User_facebook_id":124,"rating":5,"Product_upc":82},{"User_facebook_id":31,"rating":5,"Product_upc":157},{"User_facebook_id":29,"rating":5,"Product_upc":175},{"User_facebook_id":105,"rating":5,"Product_upc":66},{"User_facebook_id":53,"rating":3,"Product_upc":133},{"User_facebook_id":130,"rating":3,"Product_upc":139},{"User_facebook_id":139,"rating":2,"Product_upc":74},{"User_facebook_id":168,"rating":2,"Product_upc":181},{"User_facebook_id":45,"rating":5,"Product_upc":129},{"User_facebook_id":189,"rating":4,"Product_upc":196},{"User_facebook_id":135,"rating":1,"Product_upc":9},{"User_facebook_id":60,"rating":4,"Product_upc":69},{"User_facebook_id":103,"rating":2,"Product_upc":17},{"User_facebook_id":119,"rating":5,"Product_upc":66},{"User_facebook_id":11,"rating":4,"Product_upc":110},{"User_facebook_id":94,"rating":2,"Product_upc":157},{"User_facebook_id":180,"rating":2,"Product_upc":107},{"User_facebook_id":113,"rating":3,"Product_upc":135},{"User_facebook_id":131,"rating":1,"Product_upc":170},{"User_facebook_id":114,"rating":1,"Product_upc":79},{"User_facebook_id":97,"rating":3,"Product_upc":193},{"User_facebook_id":144,"rating":1,"Product_upc":194},{"User_facebook_id":83,"rating":5,"Product_upc":42},{"User_facebook_id":66,"rating":4,"Product_upc":95},{"User_facebook_id":143,"rating":3,"Product_upc":90},{"User_facebook_id":95,"rating":3,"Product_upc":173},{"User_facebook_id":93,"rating":4,"Product_upc":183},{"User_facebook_id":51,"rating":3,"Product_upc":112},{"User_facebook_id":48,"rating":5,"Product_upc":184},{"User_facebook_id":33,"rating":2,"Product_upc":198},{"User_facebook_id":117,"rating":3,"Product_upc":3},{"User_facebook_id":54,"rating":2,"Product_upc":151},{"User_facebook_id":133,"rating":4,"Product_upc":124},{"User_facebook_id":107,"rating":2,"Product_upc":156},{"User_facebook_id":107,"rating":2,"Product_upc":149},{"User_facebook_id":26,"rating":1,"Product_upc":191},{"User_facebook_id":73,"rating":5,"Product_upc":196},{"User_facebook_id":23,"rating":4,"Product_upc":18},{"User_facebook_id":105,"rating":1,"Product_upc":103},{"User_facebook_id":12,"rating":2,"Product_upc":91},{"User_facebook_id":146,"rating":3,"Product_upc":68},{"User_facebook_id":59,"rating":3,"Product_upc":66},{"User_facebook_id":72,"rating":5,"Product_upc":86},{"User_facebook_id":98,"rating":3,"Product_upc":36},{"User_facebook_id":97,"rating":4,"Product_upc":94},{"User_facebook_id":188,"rating":1,"Product_upc":143},{"User_facebook_id":8,"rating":4,"Product_upc":35},{"User_facebook_id":153,"rating":1,"Product_upc":150},{"User_facebook_id":83,"rating":2,"Product_upc":9},{"User_facebook_id":153,"rating":1,"Product_upc":189},{"User_facebook_id":198,"rating":2,"Product_upc":35},{"User_facebook_id":95,"rating":2,"Product_upc":93},{"User_facebook_id":183,"rating":4,"Product_upc":140},{"User_facebook_id":156,"rating":1,"Product_upc":174},{"User_facebook_id":97,"rating":5,"Product_upc":168},{"User_facebook_id":67,"rating":3,"Product_upc":44},{"User_facebook_id":114,"rating":4,"Product_upc":3},{"User_facebook_id":41,"rating":4,"Product_upc":161},{"User_facebook_id":149,"rating":4,"Product_upc":66},{"User_facebook_id":121,"rating":3,"Product_upc":102},{"User_facebook_id":102,"rating":4,"Product_upc":36},{"User_facebook_id":190,"rating":5,"Product_upc":55},{"User_facebook_id":107,"rating":1,"Product_upc":137},{"User_facebook_id":75,"rating":1,"Product_upc":33},{"User_facebook_id":2,"rating":5,"Product_upc":100},{"User_facebook_id":176,"rating":1,"Product_upc":134},{"User_facebook_id":14,"rating":1,"Product_upc":64},{"User_facebook_id":91,"rating":4,"Product_upc":153},{"User_facebook_id":194,"rating":1,"Product_upc":159},{"User_facebook_id":136,"rating":4,"Product_upc":116},{"User_facebook_id":86,"rating":4,"Product_upc":105},{"User_facebook_id":53,"rating":3,"Product_upc":1},{"User_facebook_id":103,"rating":3,"Product_upc":89},{"User_facebook_id":81,"rating":4,"Product_upc":153},{"User_facebook_id":142,"rating":3,"Product_upc":194},{"User_facebook_id":112,"rating":5,"Product_upc":187},{"User_facebook_id":192,"rating":5,"Product_upc":48},{"User_facebook_id":81,"rating":3,"Product_upc":59},{"User_facebook_id":51,"rating":1,"Product_upc":142},{"User_facebook_id":102,"rating":4,"Product_upc":130},{"User_facebook_id":34,"rating":1,"Product_upc":142},{"User_facebook_id":196,"rating":1,"Product_upc":69},{"User_facebook_id":80,"rating":3,"Product_upc":166},{"User_facebook_id":93,"rating":5,"Product_upc":38},{"User_facebook_id":91,"rating":2,"Product_upc":105},{"User_facebook_id":155,"rating":1,"Product_upc":167},{"User_facebook_id":77,"rating":3,"Product_upc":23},{"User_facebook_id":113,"rating":3,"Product_upc":18},{"User_facebook_id":65,"rating":5,"Product_upc":27},{"User_facebook_id":35,"rating":5,"Product_upc":139},{"User_facebook_id":182,"rating":4,"Product_upc":199},{"User_facebook_id":199,"rating":5,"Product_upc":73},{"User_facebook_id":97,"rating":4,"Product_upc":16},{"User_facebook_id":20,"rating":2,"Product_upc":169},{"User_facebook_id":62,"rating":4,"Product_upc":170},{"User_facebook_id":197,"rating":5,"Product_upc":156},{"User_facebook_id":11,"rating":1,"Product_upc":32},{"User_facebook_id":62,"rating":4,"Product_upc":178},{"User_facebook_id":38,"rating":4,"Product_upc":173},{"User_facebook_id":69,"rating":3,"Product_upc":4},{"User_facebook_id":14,"rating":5,"Product_upc":122},{"User_facebook_id":16,"rating":3,"Product_upc":54},{"User_facebook_id":57,"rating":2,"Product_upc":61},{"User_facebook_id":48,"rating":2,"Product_upc":32},{"User_facebook_id":92,"rating":5,"Product_upc":30},{"User_facebook_id":48,"rating":5,"Product_upc":128},{"User_facebook_id":127,"rating":1,"Product_upc":155},{"User_facebook_id":43,"rating":3,"Product_upc":69},{"User_facebook_id":80,"rating":5,"Product_upc":143},{"User_facebook_id":33,"rating":3,"Product_upc":189},{"User_facebook_id":106,"rating":4,"Product_upc":123},{"User_facebook_id":32,"rating":1,"Product_upc":124},{"User_facebook_id":32,"rating":4,"Product_upc":66},{"User_facebook_id":134,"rating":2,"Product_upc":56},{"User_facebook_id":125,"rating":4,"Product_upc":183},{"User_facebook_id":159,"rating":3,"Product_upc":16},{"User_facebook_id":137,"rating":4,"Product_upc":4},{"User_facebook_id":109,"rating":2,"Product_upc":101},{"User_facebook_id":45,"rating":5,"Product_upc":95},{"User_facebook_id":63,"rating":4,"Product_upc":94},{"User_facebook_id":22,"rating":2,"Product_upc":148},{"User_facebook_id":178,"rating":4,"Product_upc":17},{"User_facebook_id":99,"rating":5,"Product_upc":188},{"User_facebook_id":182,"rating":3,"Product_upc":188},{"User_facebook_id":128,"rating":4,"Product_upc":82},{"User_facebook_id":161,"rating":2,"Product_upc":62},{"User_facebook_id":135,"rating":1,"Product_upc":109},{"User_facebook_id":141,"rating":5,"Product_upc":121},{"User_facebook_id":45,"rating":3,"Product_upc":158},{"User_facebook_id":151,"rating":5,"Product_upc":16},{"User_facebook_id":31,"rating":2,"Product_upc":138},{"User_facebook_id":56,"rating":3,"Product_upc":143},{"User_facebook_id":28,"rating":5,"Product_upc":54},{"User_facebook_id":127,"rating":1,"Product_upc":154},{"User_facebook_id":7,"rating":2,"Product_upc":176},{"User_facebook_id":25,"rating":3,"Product_upc":198},{"User_facebook_id":103,"rating":2,"Product_upc":133},{"User_facebook_id":20,"rating":3,"Product_upc":168},{"User_facebook_id":197,"rating":1,"Product_upc":44},{"User_facebook_id":80,"rating":3,"Product_upc":181},{"User_facebook_id":135,"rating":2,"Product_upc":190},{"User_facebook_id":7,"rating":5,"Product_upc":190},{"User_facebook_id":72,"rating":5,"Product_upc":27},{"User_facebook_id":160,"rating":2,"Product_upc":55},{"User_facebook_id":65,"rating":3,"Product_upc":99},{"User_facebook_id":111,"rating":2,"Product_upc":114},{"User_facebook_id":79,"rating":1,"Product_upc":190},{"User_facebook_id":101,"rating":1,"Product_upc":193},{"User_facebook_id":150,"rating":5,"Product_upc":155},{"User_facebook_id":80,"rating":3,"Product_upc":136},{"User_facebook_id":117,"rating":1,"Product_upc":75},{"User_facebook_id":15,"rating":2,"Product_upc":45},{"User_facebook_id":24,"rating":3,"Product_upc":41},{"User_facebook_id":29,"rating":1,"Product_upc":53},{"User_facebook_id":65,"rating":1,"Product_upc":8},{"User_facebook_id":3,"rating":5,"Product_upc":126},{"User_facebook_id":126,"rating":4,"Product_upc":128},{"User_facebook_id":158,"rating":2,"Product_upc":101},{"User_facebook_id":173,"rating":4,"Product_upc":186},{"User_facebook_id":29,"rating":3,"Product_upc":26},{"User_facebook_id":160,"rating":5,"Product_upc":28},{"User_facebook_id":13,"rating":3,"Product_upc":81},{"User_facebook_id":173,"rating":1,"Product_upc":55},{"User_facebook_id":31,"rating":3,"Product_upc":132},{"User_facebook_id":94,"rating":5,"Product_upc":8},{"User_facebook_id":6,"rating":1,"Product_upc":106},{"User_facebook_id":147,"rating":5,"Product_upc":123},{"User_facebook_id":193,"rating":2,"Product_upc":107},{"User_facebook_id":171,"rating":3,"Product_upc":89},{"User_facebook_id":79,"rating":2,"Product_upc":177},{"User_facebook_id":87,"rating":4,"Product_upc":177},{"User_facebook_id":144,"rating":3,"Product_upc":172},{"User_facebook_id":17,"rating":4,"Product_upc":165},{"User_facebook_id":19,"rating":4,"Product_upc":96},{"User_facebook_id":138,"rating":2,"Product_upc":114},{"User_facebook_id":139,"rating":2,"Product_upc":165},{"User_facebook_id":28,"rating":4,"Product_upc":136},{"User_facebook_id":139,"rating":3,"Product_upc":158},{"User_facebook_id":197,"rating":1,"Product_upc":57},{"User_facebook_id":149,"rating":1,"Product_upc":39},{"User_facebook_id":31,"rating":4,"Product_upc":26},{"User_facebook_id":52,"rating":2,"Product_upc":21},{"User_facebook_id":55,"rating":2,"Product_upc":50},{"User_facebook_id":109,"rating":3,"Product_upc":34},{"User_facebook_id":197,"rating":2,"Product_upc":38},{"User_facebook_id":1,"rating":5,"Product_upc":5},{"User_facebook_id":10153855879659926,"rating":5,"Product_upc":21908509372},{"User_facebook_id":10153855879659926,"rating":5,"Product_upc":21908509372},{"User_facebook_id":10153855879659926,"rating":5,"Product_upc":21908509372},{"User_facebook_id":10153855879659926,"rating":5,"Product_upc":21908509372},{"User_facebook_id":10153855879659926,"rating":5,"Product_upc":21908509372},{"User_facebook_id":10153855879659926,"rating":5,"Product_upc":22000011879},{"User_facebook_id":10153855879659926,"rating":5,"Product_upc":22000011879}]'

const pyConnect = function(json) {
  const pythonConfig = {
    mode: 'text',
    scriptPath: `${__dirname}/../pyRec/`,
    args: [JSON.stringify(json)],
    pythonPath: '/Library/Frameworks/Python.framework/Versions/3.5/bin/python3',
  };
  const pyConnection = new PythonShell('hub.py', pythonConfig);
  pyConnection.on('message', message => console.log(message));
};

// pyConnect(data)

module.exports = pyConnect;
