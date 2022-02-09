function importExternalLibrary(){ // node-rsa import example
  const baseUrl = (file, version = '1.0.6') =>
    `https://unpkg.com/node-rsa@${version}/src/${file}.js`;

  const require = ((store) => (file) => {
    if (Array.isArray(file)) return file.forEach(require);
    if (store[file]) return;
    store[file] = true;
    eval(UrlFetchApp.fetch(baseUrl(file.slice(2))).getContentText());
  })({})

  const dependencies = [
    './NodeRSA',
  ];

  require(dependencies);
}
