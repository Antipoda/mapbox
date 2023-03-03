
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMapde_0": {
            "type": "raster",
            "tiles": ["https://a.tile.openstreetmap.de/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "AntiguaLagunadeLermaXIX_1": {
            "type": "geojson",
            "data": json_AntiguaLagunadeLermaXIX_1
        }
                    ,
        "Cinegas_deLerma2023_2": {
            "type": "geojson",
            "data": json_Cinegas_deLerma2023_2
        }
                    ,
        "AntiguoRodeLermaXIX_3": {
            "type": "geojson",
            "data": json_AntiguoRodeLermaXIX_3
        }
                    ,
        "CiudaddeLerma1927_4": {
            "type": "geojson",
            "data": json_CiudaddeLerma1927_4
        }
                    ,
        "CaminosdelaCiudaddeLerma1927_5": {
            "type": "geojson",
            "data": json_CaminosdelaCiudaddeLerma1927_5
        }
                    ,
        "RedFerroviaria_6": {
            "type": "geojson",
            "data": json_RedFerroviaria_6
        }
                    ,
        "DesagedelRoLerma1857_7": {
            "type": "geojson",
            "data": json_DesagedelRoLerma1857_7
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMapde_0_0",
            "type": "raster",
            "source": "OpenStreetMapde_0"
        },
        {
            "id": "lyr_AntiguaLagunadeLermaXIX_1_0",
            "type": "fill",
            "source": "AntiguaLagunadeLermaXIX_1",
            "layout": {},
            "paint": {'fill-opacity': 0.404, 'fill-color': '#a5bfdd'}
        }
,
        {
            "id": "lyr_Cinegas_deLerma2023_2_0",
            "type": "fill",
            "source": "Cinegas_deLerma2023_2",
            "layout": {},
            "paint": {'fill-opacity': 0.404, 'fill-color': '#1f78b4'}
        }
,
        {
            "id": "lyr_AntiguoRodeLermaXIX_3_0",
            "type": "line",
            "source": "AntiguoRodeLermaXIX_3",
            "layout": {},
            "paint": {'line-width': 1.0, 'line-opacity': 1.0, 'line-color': '#1f78b4'}
        }
,
        {
            "id": "lyr_CiudaddeLerma1927_4_0",
            "type": "fill",
            "source": "CiudaddeLerma1927_4",
            "layout": {},
            "paint": {'fill-opacity': 0.501, 'fill-color': '#000000'}
        }
,
        {
            "id": "lyr_CaminosdelaCiudaddeLerma1927_5_0",
            "type": "line",
            "source": "CaminosdelaCiudaddeLerma1927_5",
            "layout": {},
            "paint": {'line-width': 3.7857142857142856, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_RedFerroviaria_6_0",
            "type": "line",
            "source": "RedFerroviaria_6",
            "layout": {},
            "paint": {'line-width': 0.32778571428571424, 'line-opacity': 1.0, 'line-color': '#868686'}
        }
,
        {
            "id": "lyr_DesagedelRoLerma1857_7_0",
            "type": "line",
            "source": "DesagedelRoLerma1857_7",
            "layout": {},
            "paint": {'line-width': 2.521428571428571, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
],
}