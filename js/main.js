mapboxgl.accessToken = 
            'pk.eyJ1IjoibWF0aGZhMDMiLCJhIjoiY21reXBpcWs1MDlncDNkb283NjkzemRjdyJ9.1z-iTe7Q_gIPYRqaFojIlw';
    
// MAP 1 — Choropleth
const map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-98.5, 39.8],
    zoom: 3.5,
    projection: { name: 'albers', parallels: [29.5, 45.5] }
});

async function loadChoropleth() {
    const response = await fetch('assets/us-covid-2020-rates.geojson');
    const data = await response.json();

    map1.on('load', () => {
        map1.addSource('covidRates', { type: 'geojson', data });
        map1.addLayer({ /* choropleth layer & paint properties */ });
        // hover interaction & legend
    });
}
loadChoropleth();

// MAP 2 — Proportional symbols
const map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.5, 39.8],
    zoom: 3.5
});

async function loadProportionalSymbols() {
    const response = await fetch('assets/us-covid-2020-counts.geojson');
    const data = await response.json();

    map2.on('load', () => {
        map2.addSource('Cases', { type: 'geojson', data });
        map2.addLayer({ /* circle layer & paint properties */ });
        // popups & legend
    });
}
loadProportionalSymbols();