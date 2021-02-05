import React from 'react';
import './App.css';
// import intersect from '@turf/intersect'
// import polygonize from '@turf/polygonize'
// import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
// import polygon from '@turf/helpers';
// import point from '@turf/helpers';
// import booleanOverlap from "@turf/boolean-overlap"
const polyline = require('@mapbox/polyline');
//let inside = require('point-in-polygon');

const map = {
  polyline : "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH",
  summary_polyline: "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH"
}

const poly1 = polyline.decode(map.polyline);
//const poly1Map = poly1.map((item) => item.reverse()) // turf works in lon lat

const poly2 = [
  [44.525099, -73.095087],
  [44.525535, -73.093864],
  [44.525007, -73.093660],
  [44.524869, -73.095269],
  [44.525099, -73.095087]
];

const poly3 = [
  [44.531812, -73.096387],
  [44.531831, -73.095106],
  [44.531134, -73.095198],
  [44.530927, -73.096559],
  [44.5318122 -73.096387]
]

const checkInside = (point, vs) => {  
  let x = point[0], y = point[1];
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      let xi = vs[i][0], yi = vs[i][1];
      let xj = vs[j][0], yj = vs[j][1];
      let intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }

  return inside;
};

poly1.map((x) => {
  return checkInside(x, poly2) ? console.log("intersects poly2") : null
})

export const App = () => {
  return (
    <h1></h1>  
  )
}

export default App;
