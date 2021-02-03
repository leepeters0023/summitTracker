import React from 'react';
import './App.css';
import intersect from '@turf/intersect'
import polygonize from '@turf/polygonize'
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
import polygon from '@turf/helpers';
import point from '@turf/helpers';
import booleanOverlap from "@turf/boolean-overlap"
const polyline = require('@mapbox/polyline');
let inside = require('point-in-polygon');

const map = {
  polyline : "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH",
  summary_polyline: "counGdw`}LAICIMEIDSpAwApEg@tB]`Am@nBy@|CcBrFa@xAmAxDgAtDc@bBs@zBmBzGyArEWj@U^a@XgAf@qH|Bk@Ne@HeA\\yDdAoBb@oAPg@LmA`@sBf@kAVmAJe@JeA`@c@LoCfAaFnAYb@SbCIh@Yb@i@d@S`@T\\DLBR{@jAm@`@[Z]`@g@z@Sl@Gp@[^c@NmAEi@Hg@LaCbAc@Z{@hA]Zc@V{@Xe@Fc@Lg@Fe@PaAv@Yd@_@d@_@VYLaA{@a@a@_B]c@Ig@?YLe@@gAi@e@Og@Ga@Ve@JkAQ[c@Gu@@s@Mq@Qq@[a@g@Kg@@e@Je@Bc@SSi@_@K_@WWa@Om@Bs@Ro@Jo@DGf@FRJTBb@LVNf@HnBl@d@@VQTAb@WNq@Rg@@m@No@DEf@Id@Sb@Ld@EXIf@Bd@?bAk@f@B^]G_@?gAIo@@w@^_@d@Cb@RXAh@e@rAMlB_@h@Bd@C^[Xi@`@[hAa@d@GdA?h@Jj@d@zAh@lBVf@@b@FdD`Ab@?nBWz@QnCu@`GmBlAWd@ElAWrHqBb@GtBe@rCi@hAc@rGmBlDqA`@S`@c@Xg@j@uA~AuFr@sCh@_BNm@p@_ClDcLdBkF^gBv@wCfByGt@gCd@yAD?LH"
}

// everything must in long lat
// strava pts are only a few meters apart, point in polygon may work

const poly1 = [[-73.08163, 44.51586],
[-73.08158, 44.51587],
[-73.08153, 44.51589],
[-73.0815, 44.51596],
[-73.08153, 44.51601],
[-73.08194, 44.51611],
[-73.08299, 44.51655],
[-73.08358, 44.51675],
[-73.08391, 44.5169],
[-73.08447, 44.51713],
[-73.08526, 44.51742],
[-73.08648, 44.51792],
[-73.08693, 44.51809],
[-73.08786, 44.51848],
[-73.08877, 44.51884],
[-73.08927, 44.51902],
[-73.08989, 44.51928],
[-73.09131, 44.51983],
[-73.09237, 44.52028],
[-73.09259, 44.5204],
[-73.09275, 44.52051],
[-73.09288, 44.52068],
[-73.09308, 44.52104],
[-73.09371, 44.52257],
[-73.09379, 44.52279],
[-73.09384, 44.52298],
[-73.09399, 44.52333],
[-73.09434, 44.52426],
[-73.09452, 44.52482],
[-73.09461, 44.52522],
[-73.09468, 44.52542],
[-73.09485, 44.52581],
[-73.09505, 44.52639],
[-73.09517, 44.52677],
[-73.09523, 44.52716],
[-73.09529, 44.52735],
[-73.09546, 44.5277],
[-73.09553, 44.52788],
[-73.09589, 44.5286],
[-73.09629, 44.52973],
[-73.09647, 44.52986],
[-73.09713, 44.52996],
[-73.09734, 44.53001],
[-73.09752, 44.53014],
[-73.09771, 44.53035],
[-73.09788, 44.53045],
[-73.09803, 44.53034],
[-73.0981, 44.53031],
[-73.0982, 44.53029],
[-73.09858, 44.53059],
[-73.09875, 44.53082],
[-73.09889, 44.53096],
[-73.09906, 44.53111],
[-73.09936, 44.53131],
[-73.09959, 44.53141],
[-73.09984, 44.53145],
[-73.1, 44.53159],
[-73.10008, 44.53177],
[-73.10005, 44.53216],
[-73.1001, 44.53237],
[-73.10017, 44.53257],
[-73.10051, 44.53322],
[-73.10065, 44.5334],
[-73.10102, 44.5337],
[-73.10116, 44.53385],
[-73.10128, 44.53403],
[-73.10141, 44.53433],
[-73.10145, 44.53452],
[-73.10152, 44.5347],
[-73.10156, 44.5349],
[-73.10165, 44.53509],
[-73.10193, 44.53542],
[-73.10212, 44.53555],
[-73.10231, 44.53571],
[-73.10243, 44.53587],
[-73.1025, 44.536],
[-73.1022, 44.53633],
[-73.10203, 44.5365],
[-73.10188, 44.53698],
[-73.10183, 44.53716],
[-73.10183, 44.53736],
[-73.1019, 44.53749],
[-73.10191, 44.53768],
[-73.1017, 44.53804],
[-73.10162, 44.53823],
[-73.10158, 44.53843],
[-73.1017, 44.5386],
[-73.10176, 44.53879],
[-73.10167, 44.53917],
[-73.10149, 44.53931],
[-73.10122, 44.53935],
[-73.10096, 44.53934],
[-73.10071, 44.53941],
[-73.10046, 44.5395],
[-73.10029, 44.53964],
[-73.10023, 44.53984],
[-73.10024, 44.54004],
[-73.1003, 44.54023],
[-73.10032, 44.54042],
[-73.10022, 44.5406],]//polyline.decode(map.polyline);
const poly1Map = poly1.map((item) => item.reverse())
console.log(poly1Map)
//decode(map.polyline)
const poly2 = [
  [-73.095087, 44.525099],
  [-73.093864, 44.525535],
  [-73.093660, 44.525007],
  [-73.095269, 44.524869],
  [-73.095087, 44.525099]
];

// point in polygon [-73.094722, 45.525068];
console.log(booleanOverlap(poly1, poly2))
// console.log(poly1)

export const App = () => {
  
  return (
    <h1>stuff</h1>
    
  )
}

export default App;
