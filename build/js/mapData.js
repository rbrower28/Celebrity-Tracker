export class MapRenderer {
  constructor(e, t, s, o) {
    (this.target = e),
      (this.long = t),
      (this.lat = s),
      (this.zoom = o),
      (this.iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: "images/jet-logo.png",
          scale: 0.0625,
        }),
      })),
      (this.map = new ol.Map({
        target: this.target,
        layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
        view: new ol.View({
          center: ol.proj.fromLonLat([this.long, this.lat]),
          zoom: this.zoom,
        }),
      }));
  }
  addJet(e) {
    var t = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.transform([e.longitude, e.latitude], "EPSG:4326", "EPSG:3857")
      ),
      name: "Null",
    });
    t.setStyle(this.iconStyle);
    var s = new ol.source.Vector({ features: [t] }),
      o = new ol.layer.Vector({ source: s });
    o.set("name", e.callsign), this.map.addLayer(o);
  }
  removeJet(e) {
    var t = null;
    this.map.getLayers().forEach(function (s) {
      s.get("name") === e.callsign && (t = s);
    }),
      this.map.removeLayer(t);
  }
}
export class BulkJet {
  constructor(e, t) {
    (this.modeSCode = e[0]),
      (this.callsign = e[1]),
      (this.country = e[2]),
      (this.longitude = e[5]),
      (this.latitude = e[6]),
      (this.altitude = e[13]),
      (this.velocity = e[9]),
      (this.heading = e[10]),
      (this.userTracked = t);
  }
}
export class Jet {
  constructor(e, t) {
    (this.modeSCode = e.states[0][0]),
      (this.callsign = e.states[0][1]),
      (this.country = e.states[0][2]),
      (this.longitude = e.states[0][5]),
      (this.latitude = e.states[0][6]),
      (this.altitude = e.states[0][13]),
      (this.velocity = e.states[0][9]),
      (this.heading = e.states[0][10]),
      (this.userTracked = t);
  }
}
