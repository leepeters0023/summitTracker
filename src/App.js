import React from 'react';
import './App.css';
const polyline = require('@mapbox/polyline');

const map = {
  polyline : "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH",
  summary_polyline: "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH"
}
const decode = (line) => {
  return polyline.decode(line);
}

console.log(decode(map.polyline))

// let encoded = "udknGdmz}LGu@c@EsBJmA@oAHe@Ae@@gA?c@D_@Ai@Dg@?oALoA@g@JQX?PBx@LnABzAHp@FNd@Hb@AtC]|BM~KK`@MBw@EeGMyEGWCCc@?cCJqA@gAHkBDmAAi@DcA?ECUi@Cu@C{ByAWkAIO_@Ew@Ka@ODO[CA_@TaAv@_@T_A|@["
// let line1 = L.polyline.fromEncoded(encoded).getLatLngs();
// console.log(line1)
// let line2 = turf.lineString([[44.465332, -73.214800],[44.4653014,-73.2153133],[44.4650257,-73.2151658],[44.4648946,-73.2148868]])

// let intersects = turf.lineIntersect(line1, line2); 
// if (intersects) {
//   console.log('true')
// }

export const App = () => {
  return (
    <h1>stuff</h1>
  )
}

export default App;
