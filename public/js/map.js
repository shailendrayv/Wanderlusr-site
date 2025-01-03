
  let mapToken = mapToken;
  console.log(mapToken);
  mapboxgl.accessToken = mapToken;
  //mapbox.accessToken ='pk.eyj1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KL0Q';
  const map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 9,
  });
