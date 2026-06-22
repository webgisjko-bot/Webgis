var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Blok_Edited__1 = new ol.format.GeoJSON();
var features_Batas_Blok_Edited__1 = format_Batas_Blok_Edited__1.readFeatures(json_Batas_Blok_Edited__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Blok_Edited__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Blok_Edited__1.addFeatures(features_Batas_Blok_Edited__1);
var lyr_Batas_Blok_Edited__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Blok_Edited__1, 
                style: style_Batas_Blok_Edited__1,
                popuplayertitle: 'Batas_Blok_Edited_',
                interactive: true,
    title: 'Batas_Blok_Edited_<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_0.png" /> BUM 1<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_1.png" /> BUM 2<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_2.png" /> BUM 3<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_3.png" /> BUM 4<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_4.png" /> BUM 5<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_5.png" /> BUM 6<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_6.png" /> BUM 7<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_7.png" /> BUM 8<br />\
    <img src="styles/legend/Batas_Blok_Edited__1_8.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Batas_Blok_Edited__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Batas_Blok_Edited__1];
lyr_Batas_Blok_Edited__1.set('fieldAliases', {'Region': 'Region', 'Estate': 'Estate', 'Afdeling': 'Afdeling', 'Blok': 'Blok', 'TahunTanam': 'TahunTanam', 'Luas': 'Luas', 'TM_Pokok': 'TM_Pokok', 'JSPV_1': 'JSPV_1', 'JSPV_2': 'JSPV_2', 'SPV': 'SPV', 'KASIE': 'KASIE', 'KOOR_KASIE': 'KOOR_KASIE', 'AFD': 'AFD', 'EXT_MIN_X': 'EXT_MIN_X', 'EXT_MIN_Y': 'EXT_MIN_Y', 'EXT_MAX_X': 'EXT_MAX_X', 'EXT_MAX_Y': 'EXT_MAX_Y', 'Kelerengan': 'Kelerengan', });
lyr_Batas_Blok_Edited__1.set('fieldImages', {'Region': 'TextEdit', 'Estate': 'TextEdit', 'Afdeling': 'TextEdit', 'Blok': 'TextEdit', 'TahunTanam': 'Range', 'Luas': 'TextEdit', 'TM_Pokok': 'Range', 'JSPV_1': 'TextEdit', 'JSPV_2': 'TextEdit', 'SPV': 'TextEdit', 'KASIE': 'TextEdit', 'KOOR_KASIE': 'TextEdit', 'AFD': 'TextEdit', 'EXT_MIN_X': 'TextEdit', 'EXT_MIN_Y': 'TextEdit', 'EXT_MAX_X': 'TextEdit', 'EXT_MAX_Y': 'TextEdit', 'Kelerengan': 'TextEdit', });
lyr_Batas_Blok_Edited__1.set('fieldLabels', {'Region': 'inline label - always visible', 'Estate': 'inline label - always visible', 'Afdeling': 'inline label - always visible', 'Blok': 'inline label - always visible', 'TahunTanam': 'inline label - always visible', 'Luas': 'inline label - always visible', 'TM_Pokok': 'no label', 'JSPV_1': 'no label', 'JSPV_2': 'no label', 'SPV': 'no label', 'KASIE': 'no label', 'KOOR_KASIE': 'no label', 'AFD': 'no label', 'EXT_MIN_X': 'no label', 'EXT_MIN_Y': 'no label', 'EXT_MAX_X': 'no label', 'EXT_MAX_Y': 'no label', 'Kelerengan': 'no label', });
lyr_Batas_Blok_Edited__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});