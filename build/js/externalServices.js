var r = (t, s, o) =>
  new Promise((u, i) => {
    var c = (a) => {
        try {
          e(o.next(a));
        } catch (n) {
          i(n);
        }
      },
      f = (a) => {
        try {
          e(o.throw(a));
        } catch (n) {
          i(n);
        }
      },
      e = (a) => (a.done ? u(a.value) : Promise.resolve(a.value).then(c, f));
    e((o = o.apply(t, s)).next());
  });
import l from "../web_modules/node-fetch.js";
const w = "https://opensky-network.org/api";
export function getFlightDataByModeSCode(t) {
  return r(this, null, function* () {
    let s = yield l(w + "/states/all?icao24=" + t);
    if (s.status == 200) return yield s.json();
    throw new Error(s.status);
  });
}
export function getRandomListOfFlights() {
  return r(this, null, function* () {
    let t = yield l(w + "/states/all");
    if (t.status == 200) return yield t.json();
    throw new Error(t.status);
  });
}
