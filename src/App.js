import React from 'react';
import './App.css';
import intersect from '@turf/intersect'
import polygonize from '@turf/polygonize'
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
const polyline = require('@mapbox/polyline');

const map = {
  polyline : "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH",
  summary_polyline: "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH"
}

const decode = (line) => {
  return polyline.decode(line); // can add a precision param here too, line, 6 for example
}
// everything must in long lat
const poly1 = [-73.094722, 44.525068]
//decode(map.polyline)
const poly2 = ([[
  [-73.095087, 44.525099],
  [-73.093864, 44.525535],
  [-73.093660, 44.525007],
  [-73.095269, 44.524869],
]])

console.log(poly1)

export const App = () => {
  return (
    <h1>stuff</h1>
  )
}

export default App;
