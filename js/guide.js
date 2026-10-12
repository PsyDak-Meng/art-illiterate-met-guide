// Data, floor-plan geometry and view logic for the guide.
const U = 0.25;
const IVORY = "#F5F0E7";
const HUES = ["#2F7F8F", "#B5603F", "#5E4A86", "#B88A3E", "#7E2A2A", "#2E4F86", "#6F9150", "#2B2B2E"];
const TIMES = [30, 35, 20, 35, 35, 25, 40, 20];
const SLAB_H = 1.5, PIN_Z = 24, ARROW_Z = 10.5;
const NO_IMG_COPYRIGHT = "Image not shown — this work is still in copyright. See it in person.";
const NO_IMG_OA = "The Met doesn’t offer an open-access image of this — you’ll have to see it in person.";
const IMG = {
perneb: "1f486b50247733cb83e52ad3f860c2da", hippo: "d14e06692a28814ca293689230463b44", dendur: "1ceb488d6122258390f873fdbcc11730", sphinx: "a5c7ca3e8ee9eff6f2accb0d5ccd964a",
krater: "307ed07f235fcb985c13fb19200b2e24", kouros: "dd8a41baac6928780ce7c3d5f8119b3b", amphora: "7a950ea199c3b55c34404f1df8c3f709", boscoreale: "a589104c55ffc2dfa89cac6d578bc53f", sarcophagus: "1bb0fc9cf7c902d17f33139adcd250d6",
chalice: "e81903cc32be58ac01cade71ae87f675", virgin: "e5918f2e4cafc2a0082023f8cf017466", shiva: "43ee87ec4f11c6c7577f9f437a397dff", buddha: "c57d370d489f103a5d307856e8fdaa61", mihrab: "b8121caebbe7f092bec9979694ccae45",
duccio: "6dfd9d9a46eb2c7d45a12f4b4ea2760d", giotto: "a3d11e24486cb0632ff0a56b86ec2f90", vaneyck: "da7b58e7c0d5b08e6ba2c8eaa9229db8", raphael: "fb6842d264a42f2b616a5017a8b7d4df", bronzino: "edec47886a15b3948985a9cc8d48eeb0", titian: "85941e8d49fd85dc659186745570879a", bruegel: "140c2ec3899328489de9c2f027a3927c",
studiolo: "a32d5050e16b9b0e989bafa810a182f8", adam: "bfabc1fbadae86579c515b3745d54099", velez: "4172644460a81d2bd512042a78061943", henry: "828fb17e4ef78730a55a346fb1acef99", benin: "cc027047763818522a1186fe74c5023f",
caravaggio: "b5a05378993e6a5bbf536021730aabed", aristotle: "cf27bdda594c9eb2dde0eaad08a089aa", rembrandtsp: "03b81250e15c862c4dc6a13ad486dda8", vermeer: "5d8656ad3d39234e60126a6db70a59d0", pareja: "b339d0a2fff417813080599551d6ff1e",
fragonard: "2b794613411b479aa8987e2fa9ce22b5", goya: "dcc33f9453491d2d0fb7394845777d3a", socrates: "9f617c982122e29c8950f440d7079038", villers: "daa684af37c616ff8adcddbca47bdb4a", delacroix: "08cc169a011aa45074c106fff1b29f00",
damascus: "be9645eac1dc4140501fcbd824d5774f", perseus: "5f1ac2f6343b1c7274ba3577df010792",
courbet: "bd18d7becb6d34295c5d328dc1149876", degas: "8e92c8908bf0a3923482170862dbf344", dancer: "ebfe16e8992ea9260d16748e35502e25", renoir: "eead5dbaa0a1a7f42dc83003d801c852", vgsp: "cfba56b97456b78ad825a214c5e93576", seurat: "fe513f1b4acb779a49f8845afb0089f8", vangogh: "cc8f7510a26b15679fce1cdb5f0801b0", cardplayers: "3a8e37d65272ff159d0aec4f2c6b18ca",
washington: "418713a058ad4fd8ccd0c5c31f75d9ff", madamex: "4a0fdb65f3bbb8d56d6007ceda99b3e6", ingres: "d6700165caeb052a5720eb1653b5202b", ugolino: "7df9e39f06e2a5f3cefb1898ce2031f4", kongo: "3f95b949366fb01986dabc586ec0b4d4"
};
function imgUrl(k) { return k && IMG[k] ? "images/" + k + ".jpg" : ""; }

// Gallery footprints traced from the Met's official map (metres, Fifth Ave on the east/right, north up): number:x,y,w,d
const RAW = {
1: "100:156,103,14,19 101:169,109,8,14 102:164,102,5,7 103:169,65,8,44 104:169,54,8,11 105:177,47,12,17 106:181,53,8,11 107:169,46,8,8 108:169,38,8,8 109:166,18,3,27 110:177,36,12,11 111:177,19,12,17 112:169,31,8,7 113:169,24,8,7 114:169,18,8,5 115:177,2,12,17 116:166,2,11,12 117:166,14,11,4 118:160,2,7,12 119:146,2,13,12 120:146,6,3,9 121:148,14,14,8 122:162,14,4,8 123:148,22,5,24 124:153,22,6,9 125:153,32,6,4 126:159,22,8,23 127:153,36,6,10 128:148,46,8,8 129:136,48,3,3 130:129,40,16,11 131:85,5,54,31 132:156,46,13,8 133:148,54,8,11 134:148,64,8,10 135:148,75,6,24 136:154,79,15,16 137:148,99,8,10 138:148,109,8,14 150:159,186,8,14 151:148,186,10,14 152:167,186,11,14 153:158,200,9,44 154:167,200,10,14 155:148,200,10,14 156:168,214,10,16 157:148,214,10,16 158:168,230,10,14 159:149,230,10,14 160:158,244,17,10 161:149,244,10,10 162:149,254,30,40 163:182,244,8,10 164:178,254,11,20 165:181,272,6,4 166:178,274,11,16 167:181,287,6,5 168:178,290,11,15 169:145,294,33,11 300:114,158,34,5 301:114,146,34,5 302:124,151,9,7 303:114,151,13,7 304:97,140,17,29 305:63,140,34,28 306:75,117,9,23 307:76,104,6,13 340:142,247,6,10 341:107,238,36,22 342:113,260,6,9 343:118,260,12,17 344:130,260,18,27 345:124,273,6,9 350:83,244,23,17 351:95,260,12,17 352:107,260,6,17 353:113,269,18,19 354:112,288,31,17 359:83,261,11,7 360:83,288,29,17 361:101,278,12,10 362:83,278,17,10 363:83,268,13,10 370:94,97,13,6 371:94,62,13,36 372:94,54,26,8 373:87,86,7,17 374:87,73,7,13 375:87,61,7,11 376:87,54,7,8 377:108,86,8,17 378:107,73,8,13 379:107,62,8,11 380:120,56,6,5 399:77,244,5,51 500:97,131,11,8 501:109,131,5,8 502:105,121,8,10 503:97,104,8,27 504:105,114,8,7 505:105,108,6,6 506:90,104,7,4 507:90,108,7,8 508:84,104,7,12 509:62,115,12,23 510:56,131,10,9 511:45,130,11,9 512:53,104,8,27 513:45,127,8,3 514:45,119,8,8 515:45,104,8,16 516:62,104,14,12 520:53,139,8,30 521:45,139,8,30 522:52,169,10,9 523:45,169,7,9 524:53,178,8,17 525:45,178,8,13 526:45,191,8,15 527:53,195,8,10 528:62,191,14,15 529:76,191,8,15 530:76,187,8,4 531:83,191,7,15 532:90,193,7,13 533:97,187,17,19 534:123,164,20,19 536:115,164,8,13 537:106,170,9,8 538:106,177,8,10 539:97,177,8,10 540:97,173,8,4 541:97,170,8,4 542:90,170,7,9 543:85,170,6,10 544:74,170,10,17 545:62,170,13,4 546:69,173,6,6 547:62,173,7,6 548:44,206,72,10 549:54,216,62,5 550:106,221,8,22 551:85,221,21,9 552:74,220,10,9 553:54,220,20,9 554:54,229,15,7 555:69,229,16,13 556:85,229,21,13 700:53,60,24,35 701:53,95,24,5 723:53,49,17,11 724:53,49,7,7 725:53,42,9,7 726:62,42,6,7 727:68,42,3,7 728:70,42,6,7 729:69,49,7,7 730:69,56,7,4 731:58,29,17,12 732:62,15,4,15 733:66,20,6,9 734:66,15,8,6 735:43,15,19,16 736:35,15,9,19 737:35,34,9,6 738:29,15,6,8 739:29,26,6,7 740:20,19,6,8 741:20,29,7,6 742:29,33,6,6 743:21,38,9,28 744:44,52,7,8 745:29,52,15,14 746:29,40,22,12 746:44,31,14,9 900:63,277,9,17 901:53,277,10,17 902:42,277,10,17 903:33,283,10,11 904:22,283,11,6 905:22,272,11,12 906:22,260,11,12 907:22,248,11,12 908:63,248,9,13 909:63,261,9,17 910:53,248,10,13 911:42,248,10,13 912:33,244,10,8 913:33,252,10,32 950:27,126,6,7 951:19,126,7,10 952:14,131,10,10 953:11,137,9,9 954:6,140,10,10 955:2,145,9,18 956:6,158,9,9 957:10,162,10,9 958:14,166,10,10 959:19,171,7,10 960:26,175,8,7 961:11,154,34,19 962:11,136,34,19",
2: "173:148,214,10,9 174:148,223,10,21 175:149,244,10,10 176:158,244,9,10 200:121,158,28,6 201:121,146,28,5 202:148,124,5,61 203:153,182,19,3 204:172,124,5,61 205:153,124,19,3 206:148,108,29,15 207:148,54,8,55 208:154,79,15,16 209:148,46,29,8 210:148,14,8,32 211:150,2,6,12 212:146,2,4,6 213:156,2,16,12 214:169,14,8,9 215:169,23,8,7 216:169,30,8,16 217:156,23,14,19 218:156,14,14,9 223:135,44,9,11 224:124,44,11,11 225:111,43,13,10 226:99,43,12,10 227:86,36,6,12 228:92,36,14,16 229:106,36,5,7 230:111,36,13,7 231:124,36,13,8 232:137,36,7,11 233:156,95,14,14 234:169,101,8,8 235:169,90,8,11 236:169,79,8,11 237:169,72,8,7 238:169,62,8,10 239:169,54,8,8 240:177,56,12,8 241:177,45,8,12 242:185,52,4,4 243:185,48,4,5 244:177,39,6,6 245:177,31,6,8 246:177,24,6,8 247:183,24,6,21 248:180,21,6,3 249:177,8,12,13 250:177,2,12,6 400:148,186,6,14 401:155,186,16,10 402:171,186,6,14 403:168,201,10,12 404:168,214,10,16 405:168,230,10,13 406:148,200,10,13 450:165,254,13,7 451:155,254,10,7 452:151,254,4,4 453:149,254,6,26 454:149,280,11,14 455:159,276,19,18 456:171,271,7,5 457:171,261,7,10 458:148,294,8,11 459:156,294,11,11 460:167,294,11,11 461:178,296,11,9 462:178,275,11,21 463:178,254,11,20 464:182,244,7,11 535:125,164,18,21 600:105,139,9,30 601:97,139,8,30 602:97,169,8,9 603:105,169,8,9 604:105,178,8,13 605:97,178,8,10 606:97,188,8,10 607:105,191,8,7 608:97,197,17,8 609:84,191,13,15 610:75,197,10,8 611:75,191,10,7 612:62,191,13,15 613:54,197,8,8 614:45,197,8,8 615:45,186,8,11 616:53,178,8,20 617:45,178,8,9 618:45,169,16,9 619:45,139,8,30 620:53,139,8,30 621:45,131,16,9 622:45,116,8,15 623:53,116,8,15 624:45,104,8,12 625:53,104,8,12 626:62,104,12,12 627:74,104,11,12 628:85,104,12,12 629:97,104,8,12 630:105,104,8,12 631:97,116,8,14 632:105,116,8,14 633:105,131,8,9 634:97,131,8,9 635:87,161,10,8 636:72,161,16,8 637:62,161,10,9 638:85,139,12,9 639:74,139,11,9 640:62,139,12,8 641:85,131,12,9 642:74,131,11,8 643:74,124,11,7 644:74,116,11,8 680:94,97,13,6 681:108,62,8,41 682:107,54,8,8 683:94,54,13,8 684:87,54,7,49 690:115,164,9,30 691:122,215,9,10 692:125,225,12,7 693:122,232,9,7 703:77,48,9,12 704:77,60,8,40 705:53,95,24,5 706:44,60,9,40 717:58,49,19,11 718:53,49,7,7 719:53,42,15,7 720:68,42,7,6 721:68,42,9,8 722:69,50,7,6 747:78,38,7,10 748:78,30,5,8 749:78,21,7,9 750:78,15,7,7 751:61,15,16,7 752:62,21,16,8 753:61,29,16,6 754:62,36,5,6 755:51,29,10,7 756:51,21,10,8 757:51,15,10,7 758:44,28,7,12 759:44,15,7,14 760:29,28,15,12 761:36,15,8,14 762:29,17,7,12 763:22,17,7,12 764:22,28,7,12 765:22,40,7,12 766:22,52,7,11 767:29,40,7,12 768:29,52,7,11 769:36,52,8,14 770:36,40,8,12 771:44,40,7,12 772:44,52,7,8 800:83,248,59,7 801:131,255,11,11 802:131,265,11,12 803:131,277,13,9 804:137,286,7,10 805:130,293,7,6 806:130,286,7,7 807:123,286,7,7 808:123,293,7,6 809:113,255,9,6 810:113,260,9,17 811:113,277,9,9 812:113,286,10,13 813:122,277,9,9 814:122,272,9,5 815:122,265,9,7 816:122,260,9,5 817:122,255,9,6 818:104,255,9,9 819:93,255,11,9 820:83,255,10,9 821:104,264,9,10 822:93,264,11,10 823:83,264,10,10 824:104,274,9,13 825:93,274,11,13 826:83,274,10,13 827:103,286,10,13 828:93,293,9,6 829:93,286,9,7 830:83,286,10,13 850:115,195,4,11 851:106,217,10,26 852:132,233,10,9 917:77,284,5,11 918:63,284,11,11 919:47,284,16,11 920:33,286,15,8 921:33,277,15,9 922:33,269,15,9 923:33,260,15,9 924:33,252,15,9 925:33,244,15,8"
};
const EXTRA = {
1: [{ num: "hall", x: 144, y: 123, w: 35, d: 63, dept: "hall" }, { num: "entry", x: 179, y: 125, w: 22, d: 58, dept: "entry" }, { num: "099", x: 115, y: 110, w: 40, d: 36, dept: "exhib" }, { num: "199", x: 117, y: 215, w: 30, d: 23, dept: "exhib" }],
2: [{ num: "balcony", x: 155, y: 128, w: 16, d: 52, dept: "hall" }, { num: "899", x: 44, y: 217, w: 61, d: 26, dept: "ex899" }, { num: "999", x: 48, y: 244, w: 25, d: 38, dept: "exhib" }]
};
const DEPTS = [
{ id: "egypt", name: "Egyptian Art", nums: "100–138", r: [[100, 138]], eras: [0] },
{ id: "greek", name: "Greek & Roman Art", nums: "150–169", r: [[150, 169]], eras: [1] },
{ id: "cyprus", name: "Cypriot Art · closed until 2027", nums: "", r: [[170, 176]], closed: true },
{ id: "asian", name: "Asian Art", nums: "200–253", r: [[200, 253]] },
{ id: "medieval", name: "Medieval Art", nums: "300–307", r: [[300, 307]], eras: [2] },
{ id: "rock", name: "Africa, Oceania & the Americas", nums: "340–363", r: [[340, 363]] },
{ id: "arms", name: "Arms & Armor", nums: "370–380", r: [[370, 380]] },
{ id: "westasia", name: "Ancient West Asia · closed until 2027", nums: "", r: [[400, 406]], closed: true },
{ id: "islamic", name: "Islamic Art", nums: "450–464", r: [[450, 464]] },
{ id: "eursc", name: "European Sculpture & Decorative Arts", nums: "500–556", r: [[500, 556]] },
{ id: "eurp", name: "European Paintings 1250–1800", nums: "600–644", r: [[600, 644]], eras: [3, 4, 5] },
{ id: "music", name: "Musical Instruments", nums: "680s", r: [[680, 684]] },
{ id: "draw", name: "Drawings & Prints", nums: "690s", r: [[690, 693]] },
{ id: "american", name: "The American Wing", nums: "700s", r: [[700, 772]] },
{ id: "c19", name: "19th-century European Paintings", nums: "800–830", r: [[800, 830]], eras: [5, 6] },
{ id: "photo", name: "Photographs", nums: "850s", r: [[850, 852]] },
{ id: "modern", name: "Modern wing · closed (Tang Wing construction)", nums: "", r: [[399, 399], [900, 925]], closed: true },
{ id: "lehman", name: "Robert Lehman Wing", nums: "950–965", r: [[950, 965]], eras: [7] },
{ id: "ex899", name: "Exhibition Galleries 899", nums: "", r: [], eras: [7] },
{ id: "exhib", name: "Exhibitions", nums: "", r: [] },
{ id: "hall", name: "Great Hall", nums: "", r: [], hall: true },
{ id: "entry", name: "", nums: "", r: [], hall: true }
];
const DEPT = {}; DEPTS.forEach(function (d) { DEPT[d.id] = d; d.eras = d.eras || []; });
function deptOf(n) { const v = parseInt(n, 10); for (const d of DEPTS) { for (const rg of d.r) { if (v >= rg[0] && v <= rg[1]) return d.id; } } return "exhib"; }
const GAL = { 1: [], 2: [] };
[1, 2].forEach(function (f) {
  RAW[f].split(" ").forEach(function (s) { const p = s.split(":"); const v = p[1].split(",").map(Number); GAL[f].push({ num: p[0], x: v[0], y: v[1], w: v[2], d: v[3], dept: deptOf(p[0]) }); });
  EXTRA[f].forEach(function (g) { GAL[f].push(g); });
});
const CENT = { 1: {}, 2: {} };
[1, 2].forEach(function (f) {
  const acc = {};
  GAL[f].forEach(function (g) { const a = g.w * g.d; const o = acc[g.dept] || (acc[g.dept] = { sx: 0, sy: 0, a: 0, maxy: -1e9 }); o.sx += (g.x + g.w / 2) * a; o.sy += (g.y + g.d / 2) * a; o.a += a; o.maxy = Math.max(o.maxy, g.y + g.d); });
  for (const k in acc) CENT[f][k] = { x: acc[k].sx / acc[k].a, y: acc[k].sy / acc[k].a };
});
const PROPS = {
1: [["131", 118, 10, 10, 9, 7, 0, "i"], ["131", 104, 13, 3, 4, 9, 0, "i"], ["131", 88, 27, 48, 6, 0.3, 0, "#8FC3CF"], ["hall", 147, 126, 2, 2, 11, 0, "i"], ["hall", 147, 181, 2, 2, 11, 0, "i"], ["hall", 174, 126, 2, 2, 11, 0, "i"], ["hall", 174, 181, 2, 2, 11, 0, "i"], ["371", 97, 70, 8, 2.5, 4, 0, "#A3A9AF"], ["371", 99, 70.5, 2, 1.5, 3, 4, "#A3A9AF"], ["371", 97, 84, 8, 2.5, 4, 0, "#A3A9AF"], ["371", 99, 84.5, 2, 1.5, 3, 4, "#A3A9AF"], ["162", 151, 256, 1.6, 1.6, 10, 0, "i"], ["162", 176, 256, 1.6, 1.6, 10, 0, "i"], ["162", 151, 291, 1.6, 1.6, 10, 0, "i"], ["162", 176, 291, 1.6, 1.6, 10, 0, "i"], ["548", 44, 206, 72, 10, 0.4, 9, "#CFE3E8"], ["700", 53, 92, 24, 2, 10, 0, "i"], ["913", 40, 262, 1.8, 1.8, 26, 0, "#E0B12E"], ["913", 40, 262, 26, 1.4, 1.4, 26, "#E0B12E"]],
2: [["217", 158, 26, 10, 8, 1, 4, "#3C5E57"], ["217", 160, 28, 6, 4, 4, 0, "i"], ["919", 52, 286, 1.8, 1.8, 24, 0, "#E0B12E"], ["919", 30, 286, 24, 1.4, 1.4, 24, "#E0B12E"]]
};
const STAIR = { 1: { x: 139, y: 154.5 }, 2: { x: 109.5, y: 154 } };
const MARKERS = {
1: [{ label: "Fifth Ave entrance", x: 196, y: 154, z: 4 }, { label: "Grand Staircase ↑", x: 139, y: 154.5, z: 6 }, { label: "Stairs ↓ to Lehman Floor G", x: 24, y: 149, z: 8 }],
2: [{ label: "Grand Staircase ↓", x: 109.5, y: 154, z: 6 }]
};

const VIEW0 = { dx: 0, dy: 0, zoom: 1, rot: 0 };
const BASE_ROT = 40, TILT = 55;
// Camera = base framing (follows the route) + the visitor's own pan / zoom / rotation.
function cameraCss(b, v) {
  const Z = b.Z * v.zoom;
  return "transform: scale(" + Z.toFixed(3) + ") rotateX(" + TILT + "deg) rotateZ(" + (BASE_ROT + v.rot).toFixed(1) + "deg) translate3d(" + L(-(b.cx + v.dx)) + ", " + L(-(b.cy + v.dy)) + ", " + L(-b.cz) + ");";
}
function L(v) { return (Math.round(v * U * 1000) / 1000) + "cqw"; }
function rgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function hex(a) { return "#" + a.map(function (v) { const s = Math.max(0, Math.min(255, Math.round(v))).toString(16); return s.length < 2 ? "0" + s : s; }).join(""); }
function mix(a, b, t) { const x = rgb(a), y = rgb(b); return hex([0, 1, 2].map(function (i) { return x[i] + (y[i] - x[i]) * t; })); }
function shade(h, f) { return mix(h, "#2A2117", 1 - f); }
function ink(h) { return shade(h, 0.8); }
const HATCH = " background-image: repeating-linear-gradient(45deg, rgba(60,50,30,.13) 0 4px, transparent 4px 10px);";
function box(x, y, w, d, h, z, c, extra) {
  return {
    wrap: "left: " + L(x) + "; top: " + L(y) + "; width: " + L(w) + "; height: " + L(d) + "; transform: translateZ(" + L(z) + ");",
    top: "background-color: " + c + "; transform: translateZ(" + L(h) + ");" + (extra || ""),
    south: "height: " + L(h) + "; background: " + shade(c, 0.86) + ";",
    east: "width: " + L(h) + "; background: " + shade(c, 0.72) + ";"
  };
}

const ERAS = [
{ num: "I", name: "Ancient Egypt", dates: "c. 3100–30 BCE",
where: "Floor 1 · North of the Great Hall · Galleries 100–138",
trend: "Art made for eternity, not for viewers.",
why: "Egyptian images had a job: a statue or relief could house a spirit and keep it alive forever. So artists followed strict rules — heads in profile, eyes and shoulders from the front, important people drawn bigger — and those rules barely changed for 3,000 years, because changing them risked breaking the magic.",
walk: "From the Great Hall, turn right (north). Perneb’s tomb, Gallery 100, is the first room. Follow the galleries north to the Temple of Dendur, Gallery 131, in its glass pavilion.",
stops: [
{ title: "Mastaba Tomb of Perneb", short: "Tomb of Perneb", artist: "Old Kingdom, Dynasty 5", date: "c. 2381–2323 BCE", medium: "Painted limestone", gallery: "Gallery 100", img: "perneb", fl: 1, px: 163, py: 112,
look: "Walk into a real tomb chapel. The false door was the threshold between the living and the dead; reliefs of servants bringing bread, birds and cattle kept Perneb’s spirit fed forever. Spot the rules: shoulders from the front, heads in profile, the owner bigger than everyone else.",
context: "Perneb was a court official buried at Saqqara, near the capital Memphis. The Met acquired the chapel in 1913 and rebuilt it stone by stone. This is your baseline: art as a working tool for the afterlife." },
{ title: "“William,” the Hippopotamus", short: "“William” the hippo", artist: "Middle Kingdom, Dynasty 12", date: "c. 1961–1878 BCE", medium: "Faience", gallery: "Gallery 111", img: "hippo", fl: 1, px: 183, py: 27,
look: "The blue glaze is painted with lotus flowers and marsh plants, so the hippo carries its own river with it. Small and charming — and loaded with meaning.",
context: "Hippos were among the most dangerous animals on the Nile. This one came from a tomb at Meir; three of its legs were broken (now restored), probably on purpose so it couldn’t hurt the dead person in the afterlife. It has become the museum’s unofficial mascot." },
{ title: "Sphinx of Hatshepsut", short: "Hatshepsut’s sphinx", artist: "New Kingdom, Dynasty 18", date: "c. 1479–1458 BCE", medium: "Granite, paint", gallery: "Gallery 131", img: "sphinx", fl: 1, px: 98, py: 22,
look: "A lion’s body with the face of Hatshepsut — a woman who ruled Egypt as pharaoh — wearing the king’s headdress and false beard.",
context: "Hatshepsut took on every traditional symbol of a male king to rule for about twenty years. After her death many of her statues were smashed; the Met’s own excavations near her temple at Deir el-Bahri recovered pieces like these." },
{ title: "The Temple of Dendur", short: "Temple of Dendur", artist: "Roman Period, reign of Augustus", date: "c. 10 BCE", medium: "Aeolian sandstone", gallery: "Gallery 131", img: "dendur", fl: 1, px: 124, py: 17,
look: "Find the Roman emperor Augustus carved on the walls dressed as a pharaoh, making offerings to Egyptian gods. The style is pure Egypt; the boss is Rome.",
context: "The temple stood beside the Nile in Nubia. When the Aswan High Dam threatened to flood it, Egypt gave it to the United States in thanks for help saving Nubian monuments; it opened here in 1978. By then Egypt’s style was ancient — and the Greco-Roman world was already borrowing it." }
], side: [] },
{ num: "II", name: "Greece & Rome", dates: "c. 800 BCE–400 CE",
where: "Floor 1 · South of the Great Hall · Galleries 150–169",
trend: "The human body becomes the measure of all things.",
why: "Greek art moved from geometric patterns toward bodies that look observed, then idealized — a picture of the Greek belief in reason and human potential. Rome inherited those ideals, added brutally honest portraits and wall paintings that fake depth, and spread the look across an empire.",
walk: "Walk back through the Great Hall and straight on, south, into the Greek and Roman galleries. The tall Roman court at the far end is Gallery 162.",
stops: [
{ title: "Geometric Krater", short: "Geometric krater", artist: "Hirschfeld Workshop, Athens", date: "c. 750–735 BCE", medium: "Terracotta", gallery: "Gallery 151", img: "krater", fl: 1, px: 153, py: 193,
look: "Bands of zigzags frame a funeral: the dead man on a bier, mourners raising their arms, chariots and warriors below. The people are built from triangles and circles — pattern first, body second.",
context: "Huge vases like this stood over graves in Athens’ Dipylon cemetery. It’s the starting line for the Greek story: in about three centuries, these stick figures become the most lifelike bodies anyone had made." },
{ title: "Marble Statue of a Kouros", short: "Kouros", artist: "Attic, Greek", date: "c. 590–580 BCE", medium: "Naxian marble", gallery: "Gallery 154", img: "kouros", fl: 1, px: 172, py: 207,
look: "Compare him to the Egyptian figures you just left: left foot forward, clenched fists, straight-ahead stare. But he stands free — no stone pillar behind him — and nude. Greece is trying Egypt’s formula its own way.",
context: "One of the earliest marble statues of a young man carved near Athens, probably a grave marker. Within about a century, sculptors loosened this stiffness into a relaxed stance with weight on one leg — a body that seems to breathe." },
{ title: "Panathenaic Prize Amphora", short: "Prize amphora", artist: "Attributed to the Euphiletos Painter", date: "c. 530 BCE", medium: "Terracotta, black-figure", gallery: "Gallery 153", img: "amphora", fl: 1, px: 162, py: 222,
look: "Five runners sprint across the jar, arms pumping and legs stretched. Black silhouettes with details scratched in: the ‘black-figure’ technique.",
context: "Jars like this, filled with olive oil from Athena’s sacred trees, were the prizes at the Panathenaic Games in Athens. Notice how much more alive these bodies are than the krater’s stick figures, about 200 years earlier." },
{ title: "Bedroom from the Villa at Boscoreale", short: "Boscoreale bedroom", artist: "Roman, villa of P. Fannius Synistor", date: "c. 50–40 BCE", medium: "Fresco", gallery: "Gallery 165", img: "boscoreale", fl: 1, px: 184, py: 274,
look: "Stand inside a Roman bedroom painted with columns, rooftops and a garden grotto. The walls seem to open into space using converging lines and shadows — a trick Europe would mostly forget for a thousand years.",
context: "Buried by the eruption of Vesuvius in 79 CE, which preserved the paint. Rich Romans paid for these painted ‘views’ to show off their taste for Greek culture and luxury." },
{ title: "Sarcophagus with the Triumph of Dionysos", short: "Roman sarcophagus", artist: "Roman", date: "c. 260–270 CE", medium: "Marble", gallery: "Gallery 162", img: "sarcophagus", fl: 1, px: 164, py: 272,
look: "The wine god Dionysos rides a panther in the middle, flanked by four young men who stand for the seasons. Every inch is carved, some figures almost free of the stone.",
context: "Wealthy Romans were buried in carved coffins like this; the message is life renewing itself like the seasons. It’s Roman art at its most crowded and dramatic — just before Christianity changes what art is for." }
], side: [] },
{ num: "III", name: "Middle Ages", dates: "c. 300–1400",
where: "Floor 1 · Behind the Grand Staircase · Galleries 300–307",
trend: "Art as a doorway to heaven.",
why: "Most people couldn’t read, so images taught Bible stories and focused prayer. Precious materials — gold, silver, ivory — were gifts to God in themselves. Realistic space and anatomy mattered less than clear meaning. Late in the period, Gothic art grew more graceful and human, setting up the Renaissance.",
walk: "Return to the Great Hall and walk under the Grand Staircase into the Medieval galleries.",
stops: [
{ title: "The Antioch “Chalice”", short: "Antioch Chalice", artist: "Byzantine", date: "c. 500–550", medium: "Silver, silver-gilt", gallery: "Gallery 300", img: "chalice", fl: 1, px: 131, py: 160,
look: "A plain inner cup inside a lacy shell of grapevines, birds and seated figures, including Christ. Old Roman decoration now carries Christian meaning.",
context: "Found in Syria in the early 1900s, it was once promoted as the Holy Grail. Scholars now think it’s more likely a lamp from an early church. Roman in style, Christian in purpose — a bridge object." },
{ title: "Virgin and Child in Majesty", short: "Virgin in Majesty", artist: "French, Auvergne", date: "c. 1175–1200", medium: "Walnut with paint", gallery: "Gallery 304", img: "virgin", fl: 1, px: 105, py: 154,
look: "Mary sits stiff and straight, the baby Jesus on her lap like a tiny adult. She’s presented as his throne. Symmetry and stillness say ‘eternal,’ not ‘mother and baby.’",
context: "Statues like this were carried in processions and honored in churches. Remember this stiffness: upstairs, Giotto paints the same family with real weight and tenderness about 150 years later." }
], side: [
{ title: "Shiva as Lord of Dance (Nataraja)", artist: "India (Tamil Nadu), Chola period", date: "c. late 11th century", medium: "Copper alloy", gallery: "Gallery 240", img: "shiva", fl: 2, px: 183, py: 60,
look: "Shiva dances inside a ring of fire, one foot on a small figure of ignorance; a drum in one hand stands for creation, a flame in another for destruction.",
context: "Bronzes like this were dressed and carried in temple processions. While Europe made stiff, frontal holy figures, Chola sculptors were celebrating movement and the body. Upstairs in Asian Art, north side." },
{ title: "Buddha of Medicine Bhaishajyaguru", artist: "China, Yuan dynasty", date: "c. 1319", medium: "Water-based pigments over clay", gallery: "Gallery 206", img: "buddha", fl: 2, px: 162, py: 115,
look: "A wall painting the size of a house: the Buddha of Medicine sits among attendants, robes and halos in soft reds and greens.",
context: "Painted for a Buddhist temple in Shanxi province and moved whole in the 20th century. Compare it with Europe’s gold-ground holy images from the same years. Floor 2, at the top of the Great Hall balcony’s north side." },
{ title: "Mihrab (Prayer Niche) from Isfahan", artist: "Iran", date: "1354–55", medium: "Glazed ceramic tile mosaic", gallery: "Gallery 455", img: "mihrab", fl: 2, px: 168, py: 285,
look: "Thousands of hand-cut tiles form a niche that points the way to Mecca, framed by bands of Qur’anic inscription.",
context: "Islamic religious art avoids images of holy figures, so it pours its genius into geometry, plants and writing. It came from a religious school in Isfahan. Floor 2, Islamic galleries on the south side." }
] },
{ num: "IV", name: "Renaissance", dates: "c. 1300–1600",
where: "Floor 2 · Top of the Grand Staircase · Galleries 600–644",
trend: "A painting becomes a window onto a believable world.",
why: "Artists combined careful looking, math and ancient Greek and Roman ideals to paint convincing space and solid, emotional people. The subjects are still mostly religious, but the world around them — and the people in it — finally look real.",
walk: "Climb the Grand Staircase from the Great Hall. It lands in Gallery 600, the doorway to European Paintings. (Before you climb, the side trips below show the Renaissance in 3D on Floor 1.)",
stops: [
{ title: "Madonna and Child", short: "Duccio", artist: "Duccio di Buoninsegna", date: "c. 1290–1300", medium: "Tempera and gold on wood", gallery: "Gallery 635", img: "duccio", fl: 2, px: 92, py: 165,
look: "Tiny and tender: the baby tugs at his mother’s veil. At the bottom, a painted ledge sits between you and them — one of the first hints of real space in Western painting.",
context: "The Met paid about $45 million for it in 2004. It sits right on the turning point from medieval icon to Renaissance picture." },
{ title: "The Adoration of the Magi", short: "Giotto", artist: "Giotto di Bondone", date: "c. 1320", medium: "Tempera on wood, gold ground", gallery: "Gallery 601", img: "giotto", fl: 2, px: 101, py: 152,
look: "Gold still fills the sky, but the figures have weight, and the kneeling king holds the baby’s foot with real tenderness. Volume and feeling are the new ingredients.",
context: "Giotto broke with flat medieval conventions in Florence and Padua; later writers credited him with bringing painting back to life." },
{ title: "The Crucifixion; The Last Judgment", short: "Van Eyck", artist: "Jan van Eyck and workshop", date: "c. 1440–41", medium: "Oil on canvas, transferred from wood", gallery: "Gallery 605", img: "vaneyck", fl: 2, px: 101, py: 183,
look: "Get close: hundreds of tiny figures, shining armor, a distant city, a terrifying hell below. Thin layers of oil paint make light seem to glow from inside.",
context: "Van Eyck worked in Bruges and pushed oil paint further than anyone before. Northern painters chased truth through detail; Italians chased it through geometry." },
{ title: "Madonna and Child Enthroned with Saints", short: "Raphael", artist: "Raphael", date: "c. 1504", medium: "Oil and gold on wood", gallery: "Gallery 609", img: "raphael", fl: 2, px: 90, py: 198,
look: "Perfect symmetry, calm faces, figures stacked in a stable triangle — High Renaissance harmony.",
context: "Painted for a convent in Perugia when Raphael was about 21, just before he moved to Florence and learned from Leonardo and Michelangelo." },
{ title: "Portrait of a Young Man", short: "Bronzino", artist: "Bronzino", date: "1530s", medium: "Oil on wood", gallery: "Gallery 612", img: "bronzino", fl: 2, px: 68, py: 198,
look: "Cool, aloof and impossibly elegant: one finger in a book, one elbow out. The strangely stretched architecture behind him is part of the style.",
context: "This is Mannerism, the late-Renaissance fashion in Florence for refinement and artifice after Raphael’s calm harmony." },
{ title: "Venus and Adonis", short: "Titian", artist: "Titian", date: "1550s", medium: "Oil on canvas", gallery: "Gallery 608", img: "titian", fl: 2, px: 106, py: 201,
look: "Venus clings to Adonis as he leaves for the hunt that will kill him. Loose, glowing brushwork and warm flesh.",
context: "Venetian painters built pictures from color rather than outline. Titian painted several versions of this scene for collectors who wanted sensual mythology." },
{ title: "The Harvesters", short: "Bruegel", artist: "Pieter Bruegel the Elder", date: "1565", medium: "Oil on wood", gallery: "Gallery 638", img: "bruegel", fl: 2, px: 91, py: 143,
look: "No saints, no story — just farmworkers on lunch break under a pear tree, golden wheat, and a landscape that runs to the horizon.",
context: "One of six paintings of the times of the year (five survive) made for a merchant’s house in Antwerp. Everyday life and nature are becoming subjects worth painting." }
], side: [
{ title: "Studiolo from the Ducal Palace in Gubbio", artist: "Designed by Francesco di Giorgio Martini", date: "c. 1478–82", medium: "Wood inlay (walnut, beech, rosewood, oak, fruitwoods)", gallery: "Gallery 501 · Floor 1", img: "studiolo", fl: 1, px: 111, py: 135,
look: "Every ‘open cabinet’, book and instrument is flat — made of thousands of pieces of inlaid wood, using the new science of perspective.",
context: "A tiny private study for Duke Federico da Montefeltro, a ruler who wanted to be seen as a scholar. Renaissance perspective, used as a magic trick. Just off the Medieval galleries." },
{ title: "Adam", artist: "Tullio Lombardo", date: "c. 1490–95", medium: "Marble", gallery: "Gallery 504 · Floor 1", img: "adam", fl: 1, px: 109, py: 117,
look: "A calm, idealized nude modeled on ancient statues — the first monumental nude carved since antiquity.",
context: "Made for a Venetian doge’s tomb. In 2002 it fell and shattered into hundreds of pieces; conservators spent over a decade putting it back together." },
{ title: "Patio from the Castle of Vélez Blanco", artist: "Spanish", date: "1506–15", medium: "Marble", gallery: "Gallery 534 · Floor 1", img: "velez", fl: 1, px: 133, py: 173,
look: "A two-story Renaissance courtyard with carved arches and columns — you can walk right into it.",
context: "Built for a nobleman’s castle in southern Spain, taken apart in the early 1900s and rebuilt here. It’s right beside the Grand Staircase." },
{ title: "Armor of Henry II, King of France", artist: "Design attributed to Jean Cousin the Elder", date: "c. 1555", medium: "Steel, gold, silver, leather", gallery: "Gallery 374 · Floor 1", img: "henry", fl: 1, px: 90, py: 79,
look: "Embossed and gilded from head to toe — more sculpture than battle gear.",
context: "Parade armor was about image, not combat. Arms & Armor sits just north of the Medieval galleries, and the mounted knights of the Equestrian Court (Gallery 371) are next door." },
{ title: "Queen Mother Pendant Mask (Iyoba)", artist: "Edo peoples, Court of Benin (Nigeria)", date: "16th century", medium: "Ivory, iron, copper", gallery: "Gallery 342 · Floor 1", img: "benin", fl: 1, px: 116, py: 264,
look: "An ivory portrait of Queen Mother Idia, with a crown of tiny heads and marks on her forehead.",
context: "Made for her son, the Oba Esigie, to wear in ceremonies honoring her. The tiny heads in the crown show Portuguese traders, who reached Benin in these years. In the Rockefeller Wing, south end of Floor 1." }
] },
{ num: "V", name: "Baroque", dates: "c. 1600–1700",
where: "Floor 2 · European Paintings · Galleries 614–625",
trend: "Light, emotion and drama.",
why: "Whether working for the Church, a king or a merchant, Baroque painters wanted to hit you in the gut — with spotlight lighting, touchable textures and ordinary faces in extraordinary moments.",
walk: "Stay in the European Paintings suite and follow the gallery number on each card; the arrows take the shortest loop.",
stops: [
{ title: "The Musicians", short: "Caravaggio", artist: "Caravaggio", date: "1597", medium: "Oil on canvas", gallery: "Gallery 620", img: "caravaggio", fl: 2, px: 57, py: 154,
look: "Four young men crowd the frame with a lute, sheet music and a violin pointing at you. Caravaggio painted from real models — the face behind the horn player is probably his own.",
context: "An early work for a cardinal in Rome. Caravaggio’s gritty realism and harsh light against darkness spread across Europe within a generation." },
{ title: "Aristotle with a Bust of Homer", short: "Rembrandt’s Aristotle", artist: "Rembrandt van Rijn", date: "1653", medium: "Oil on canvas", gallery: "Gallery 616", img: "aristotle", fl: 2, px: 57, py: 181,
look: "Aristotle rests a hand on Homer’s head, a gold chain on his shoulder. Thick paint on the sleeves catches the light while his face sinks into thought.",
context: "Painted for a Sicilian collector. The Met bought it in 1961 for $2.3 million — then a record for any painting." },
{ title: "Self-Portrait", short: "Rembrandt self-portrait", artist: "Rembrandt van Rijn", date: "1660", medium: "Oil on canvas", gallery: "Gallery 616", img: "rembrandtsp", fl: 2, px: 57, py: 193,
look: "No flattery: puffy eyes, a lined face, a painter’s beret. The paint on the face is thick and rough, almost sculpted.",
context: "Rembrandt painted around forty self-portraits. By 1660 he had gone bankrupt; this is an artist studying himself, not selling himself." },
{ title: "Young Woman with a Water Pitcher", short: "Vermeer", artist: "Johannes Vermeer", date: "c. 1662", medium: "Oil on canvas", gallery: "Gallery 614", img: "vermeer", fl: 2, px: 49, py: 201,
look: "Cool daylight through a window, blue reflected in a silver basin — a quiet private moment, frozen.",
context: "In the Dutch Republic, ordinary middle-class people bought art, so painters sold scenes of home life. Vermeer turned that everyday subject into poetry about light." },
{ title: "Juan de Pareja", short: "Velázquez", artist: "Diego Velázquez", date: "1650", medium: "Oil on canvas", gallery: "Gallery 625", img: "pareja", fl: 2, px: 57, py: 110,
look: "Loose, quick brushstrokes that only become a living face when you step back. Pareja meets your gaze with total confidence.",
context: "Pareja was enslaved in Velázquez’s workshop; the painter signed papers to free him the same year, and Pareja became a painter himself. Shown in Rome in 1650, the portrait was praised as truth itself." }
], side: [
{ title: "Astor Chinese Garden Court", artist: "Chinese, in the style of the Ming dynasty", date: "17th-century style, built 1980–81", medium: "Wood, stone, tile, plants, water", gallery: "Gallery 217 · Floor 2", img: "", imgNote: NO_IMG_OA, fl: 2, px: 163, py: 32,
look: "A complete scholar’s garden: moon gate, rocks, plants, a covered walkway and a pool — the quietest spot in the museum.",
context: "Modeled on a 17th-century garden in Suzhou and built by Chinese craftsmen with traditional tools. It shows how Chinese art of the 1600s prized nature and contemplation. In Asian Art, north side of Floor 2." }
] },
{ num: "VI", name: "Age of Revolution", dates: "c. 1700–1850",
where: "Floor 2 · Galleries 631–641, then 801",
trend: "Style becomes an argument — pleasure vs. virtue vs. feeling.",
why: "For the first time, styles took political sides. Rococo meant aristocratic fun; Neoclassicism meant serious civic virtue (the look of the American and French revolutions); Romanticism rebelled against both with passion, color and imagination.",
walk: "Head to Galleries 631–641 near the top of the staircase, then walk south into the 19th-century galleries for Delacroix in Gallery 801.",
stops: [
{ title: "The Love Letter", short: "Fragonard", artist: "Jean Honoré Fragonard", date: "early 1770s", medium: "Oil on canvas", gallery: "Gallery 631", img: "fragonard", fl: 2, px: 101, py: 123,
look: "Feathery brushwork, silk, flowers and a sly sideways glance — Rococo’s love of surfaces and flirting.",
context: "Made for the aristocrats of pre-revolutionary France. Within twenty years, their world would be swept away." },
{ title: "Manuel Osorio Manrique de Zuñiga", short: "Goya’s Red Boy", artist: "Francisco de Goya", date: "1787–88", medium: "Oil on canvas", gallery: "Gallery 641", img: "goya", fl: 2, px: 91, py: 135,
look: "A little boy in red holds a magpie on a string while three cats stare hungrily at the bird. Innocence, with a shiver of danger.",
context: "Goya was court painter in Madrid. Sweet on the surface, his work keeps a dark edge that later explodes in his war prints and ‘black paintings.’" },
{ title: "The Death of Socrates", short: "David", artist: "Jacques Louis David", date: "1787", medium: "Oil on canvas", gallery: "Gallery 634", img: "socrates", fl: 2, px: 99, py: 133,
look: "Socrates reaches for the poison while still teaching. Crisp edges, figures lined up like an ancient carving, a bare stage-like room: Neoclassical clarity.",
context: "Shown in Paris two years before the French Revolution, its message — die for your principles rather than give them up — hit home. David became the Revolution’s leading artist." },
{ title: "Marie Joséphine Charlotte du Val d’Ognes", short: "Villers", artist: "Marie Denise Villers", date: "1801", medium: "Oil on canvas", gallery: "Gallery 634", img: "villers", fl: 2, px: 103, py: 138,
look: "Backlit by a cracked window, a young artist looks up from her drawing board. Neoclassical light and crisp outlines, turned toward something personal.",
context: "For decades it was celebrated as a masterpiece by David himself. Research starting in 1951 removed that attribution; today it’s credited to Villers, one of many women artists working in Paris at the time." },
{ title: "The Abduction of Rebecca", short: "Delacroix", artist: "Eugène Delacroix", date: "1846", medium: "Oil on canvas", gallery: "Gallery 801", img: "delacroix", fl: 2, px: 136, py: 260,
look: "Swirling bodies, a burning castle, a rearing horse — movement and color over crisp lines. Compare the loose brushwork with David’s polish.",
context: "A scene from Walter Scott’s novel Ivanhoe. Delacroix led French Romanticism, and his ideas about color fed straight into Impressionism." }
], side: [
{ title: "Perseus with the Head of Medusa", artist: "Antonio Canova", date: "1804–6", medium: "Marble", gallery: "Gallery 548 · Floor 1", img: "perseus", fl: 1, px: 72, py: 211,
look: "Smooth, flawless marble: the hero lifts Medusa’s head like a trophy. Cool, balanced, ancient-looking — Neoclassicism in 3D.",
context: "Canova was the most famous sculptor in Europe. His first version went to the Vatican to fill the place of an ancient statue Napoleon had taken; this is the second. In the glass-roofed Petrie Court, Floor 1." },
{ title: "Damascus Room", artist: "Ottoman Syria", date: "1707", medium: "Painted and gilded wood, marble, glass", gallery: "Gallery 461 · Floor 2", img: "damascus", fl: 2, px: 183, py: 300,
look: "A whole reception room: painted and gilded panels, poetry inscriptions, a marble fountain step.",
context: "Wealthy families in Damascus received guests in rooms like this. While France had Rococo salons, Syria had its own dazzling interiors. In the Islamic galleries, south-east of Floor 2." }
] },
{ num: "VII", name: "Modern Life", dates: "c. 1848–1905",
where: "Floor 2 · South block · Galleries 800–830",
trend: "Paint what you see, as you see it — then paint what you feel.",
why: "Realists painted ordinary people at heroic size; Impressionists caught flickering light and city leisure; Post-Impressionists pushed toward solid structure (Cézanne) and emotional color (Van Gogh). Together they set up modern art.",
walk: "Continue through the 19th-century galleries, following the numbers.",
stops: [
{ title: "Woman with a Parrot", short: "Courbet", artist: "Gustave Courbet", date: "1866", medium: "Oil on canvas", gallery: "Gallery 811", img: "courbet", fl: 2, px: 117, py: 281,
look: "A real, un-prettified nude sprawled on a messy sheet — no goddess, no myth as an excuse.",
context: "Courbet championed Realism and said he couldn’t paint an angel because he’d never seen one. Shown at the 1866 Salon, it provoked critics and impressed younger painters." },
{ title: "Garden at Sainte-Adresse", short: "Monet’s garden", artist: "Claude Monet", date: "1867", medium: "Oil on canvas", gallery: "Gallery 818", img: "", imgNote: NO_IMG_OA, fl: 2, px: 108, py: 259,
look: "Flat bands of terrace, sea and sky; bright unmixed color; flags snapping in the wind. The stacked layout borrows from the Japanese prints Monet collected.",
context: "Painted at a seaside resort before ‘Impressionism’ had a name. Seven years later, Monet and friends held their own first exhibition." },
{ title: "The Dance Class", short: "Degas’ Dance Class", artist: "Edgar Degas", date: "1874", medium: "Oil on canvas", gallery: "Gallery 815", img: "degas", fl: 2, px: 124, py: 267,
look: "An off-center room, dancers cut off at the edges, scratching, yawning, waiting — like a snapshot.",
context: "Degas called himself a Realist but showed with the Impressionists. Photography’s accidental framing and Japanese prints both shaped his compositions." },
{ title: "The Little Fourteen-Year-Old Dancer", short: "Degas’ Little Dancer", artist: "Edgar Degas", date: "modeled c. 1880, cast 1922", medium: "Bronze, cotton tutu, silk ribbon", gallery: "Gallery 815", img: "dancer", fl: 2, px: 129, py: 270,
look: "A real fabric tutu and hair ribbon on a bronze girl, chin up, hands clasped behind her back.",
context: "Degas showed the wax original in 1881 and critics were shocked by its realism. The bronzes were cast after his death." },
{ title: "Madame Georges Charpentier and Her Children", short: "Renoir", artist: "Auguste Renoir", date: "1878", medium: "Oil on canvas", gallery: "Gallery 824", img: "renoir", fl: 2, px: 108, py: 280,
look: "A fashionable Paris parlor: mother in black, two children in matching blue, the family dog doubling as a seat.",
context: "Its success at the 1879 Salon made Renoir’s career. The child on the sofa is actually the boy, Paul, dressed in the fashion of the day." },
{ title: "Self-Portrait with a Straw Hat", short: "Van Gogh self-portrait", artist: "Vincent van Gogh", date: "1887", medium: "Oil on canvas", gallery: "Gallery 825", img: "vgsp", fl: 2, px: 96, py: 278,
look: "Short dashes of opposite colors — yellow against blue-violet — vibrate across his face and hat.",
context: "Painted in Paris, where Van Gogh met the Impressionists and switched from dark Dutch tones to bright color. On the back is an earlier painting, The Potato Peeler." },
{ title: "Circus Sideshow", short: "Seurat", artist: "Georges Seurat", date: "1887–88", medium: "Oil on canvas", gallery: "Gallery 825", img: "seurat", fl: 2, px: 101, py: 284,
look: "Thousands of tiny dots of color blend in your eye; stiff, gaslit figures look eerie and still.",
context: "Seurat turned color science into a method — pointillism. This was his first painting of nighttime entertainment." },
{ title: "Wheat Field with Cypresses", short: "Van Gogh’s Wheat Field", artist: "Vincent van Gogh", date: "1889", medium: "Oil on canvas", gallery: "Gallery 822", img: "vangogh", fl: 2, px: 98, py: 269,
look: "Flame-shaped trees and curling clouds in thick, rhythmic strokes. Color and brushwork now carry emotion, not just description.",
context: "Painted in Saint-Rémy, where Van Gogh was staying at an asylum. He counted it among his best summer paintings." },
{ title: "Bridge over a Pond of Water Lilies", short: "Monet’s bridge", artist: "Claude Monet", date: "1899", medium: "Oil on canvas", gallery: "Gallery 819", img: "", imgNote: NO_IMG_OA, fl: 2, px: 98, py: 259,
look: "The Japanese footbridge in Monet’s own garden at Giverny, wrapped in green reflections.",
context: "In later life Monet painted his garden again and again, chasing light through the day — work that leads toward abstraction." },
{ title: "The Card Players", short: "Cézanne", artist: "Paul Cézanne", date: "1890–92", medium: "Oil on canvas", gallery: "Gallery not listed", status: "Not listed on view right now", img: "cardplayers", fl: 2, px: null, py: null,
look: "Solid, block-like men bent over a game; space built from patches of color rather than vanishing lines.",
context: "Cézanne wanted Impressionism to be ‘solid and durable, like the art of museums.’ Turning nature into geometry led straight to Picasso and Cubism. The Met’s data doesn’t list a gallery for it at the moment, so check before you go." }
], side: [
{ title: "Washington Crossing the Delaware", artist: "Emanuel Leutze", date: "1851", medium: "Oil on canvas", gallery: "Gallery 760 · Floor 2", img: "washington", fl: 2, px: 36, py: 34,
look: "Twenty-one feet wide and theatrical: Washington stands heroically in a small boat among ice floes.",
context: "Painted in Düsseldorf as patriotic inspiration; it’s more myth than fact — the flag shown didn’t exist yet in 1776. In the American Wing, north-west of Floor 2." },
{ title: "Madame X", artist: "John Singer Sargent", date: "1883–84", medium: "Oil on canvas", gallery: "Gallery 771 · Floor 2", img: "madamex", fl: 2, px: 47, py: 46,
look: "Pale skin, black dress, a profile turned away — pure confidence.",
context: "At the 1884 Paris Salon one jeweled strap was painted slipping off her shoulder; the scandal made Sargent repaint it and move to London. American Wing, Floor 2." },
{ title: "Princesse de Broglie", artist: "J.-A.-D. Ingres", date: "1851–53", medium: "Oil on canvas", gallery: "Gallery 957 · Floor 1", img: "ingres", fl: 1, px: 15, py: 166,
look: "Porcelain skin and shimmering blue satin, painted with almost invisible brushstrokes.",
context: "Ingres championed line and polish — the opposite of Delacroix’s loose color. In the Robert Lehman Wing, west end of Floor 1." },
{ title: "Ugolino and His Sons", artist: "Jean-Baptiste Carpeaux", date: "1865–67", medium: "Marble", gallery: "Gallery 548 · Floor 1", img: "ugolino", fl: 1, px: 90, py: 211,
look: "A father imprisoned with his starving sons bites his fingers in despair while they cling to him.",
context: "From Dante’s Inferno. Its raw emotion and twisting bodies point straight toward Rodin. Petrie Court, Floor 1." },
{ title: "Power Figure (Nkisi N’Kondi: Mangaaka)", artist: "Kongo peoples", date: "late 19th century", medium: "Wood, iron, glass, resin and other materials", gallery: "Gallery 344 · Floor 1", img: "kongo", fl: 1, px: 139, py: 273,
look: "A wooden figure bristling with nails and blades; each one was driven in to seal an oath or call on its power.",
context: "Made to enforce justice at a time of upheaval under European colonial pressure. Rockefeller Wing, south end of Floor 1." }
] },
{ num: "VIII", name: "Modern Art", dates: "c. 1900–1970",
where: "Floor G (Lehman Wing, Galleries 963–965) · Floor 2 (Gallery 899)",
trend: "Art about art — and the artist’s inner world.",
why: "Freed from copying reality, artists treated a painting as an object with its own rules: color, shape, surface, gesture. Styles multiplied fast, and the single line you’ve followed splits into many branches.",
walk: "The modern wing is closed while the new Tang Wing is built (planned for 2030). Take the Grand Staircase down, walk west through the Medieval Sculpture Hall to the Robert Lehman Wing, and go down to Floor G for ‘The Face of Life: Modern Portraits’ (Galleries 963–965). Finish upstairs in Gallery 899 for Pollock.",
stops: [
{ title: "Gertrude Stein", short: "Picasso", artist: "Pablo Picasso", date: "1905–06", medium: "Oil on canvas", gallery: "Gallery 965 · Floor G", img: "", imgNote: NO_IMG_COPYRIGHT, fl: 1, px: 18, py: 150,
look: "A heavy, sculptural body under a face like a mask — flat, almond-eyed, impersonal.",
context: "Picasso reportedly had Stein pose dozens of times, then painted out the face and redid it from memory after seeing ancient Iberian sculpture. Told it didn’t look like her, he’s said to have replied, ‘She will.’ A step toward Cubism." },
{ title: "Improvisation 27 (Garden of Love II)", short: "Kandinsky", artist: "Vasily Kandinsky", date: "1912", medium: "Oil on canvas", gallery: "Gallery 965 · Floor G", img: "", imgNote: NO_IMG_COPYRIGHT, fl: 1, px: 32, py: 162,
look: "Bursts of color and line with only hints of figures and a garden. Color and rhythm carry the meaning, like music.",
context: "Kandinsky believed color could move the soul the way sound does. This canvas was shown at the 1913 Armory Show in New York, where Alfred Stieglitz bought it." },
{ title: "Autumn Rhythm (Number 30)", short: "Pollock", artist: "Jackson Pollock", date: "1950", medium: "Enamel on canvas", gallery: "Gallery 899 · Floor 2", img: "", imgNote: NO_IMG_COPYRIGHT, fl: 2, px: 74, py: 230,
look: "Step back for the rhythm; step close for the tangled layers of black, white, brown and teal. No center, no focal point.",
context: "Pollock laid the canvas on the floor and poured and flung paint while walking around it. The act became the subject. Since Perneb’s tomb, art has gone from fixed rules meant to last forever to the record of one body moving in one moment." }
], side: [
{ title: "Cow’s Skull: Red, White, and Blue", artist: "Georgia O’Keeffe", date: "1931", medium: "Oil on canvas", gallery: "Gallery 757 · Floor 2", img: "", imgNote: NO_IMG_COPYRIGHT, fl: 2, px: 56, py: 18,
look: "A bleached skull hovering against red, white and blue stripes.",
context: "O’Keeffe’s tongue-in-cheek answer to talk of ‘the Great American Painting,’ found in the New Mexico desert. In the American Wing, Floor 2." },
{ title: "Bisj Poles", artist: "Asmat people, Papua", date: "c. 1960", medium: "Wood, paint, fiber", gallery: "Gallery 350 · Floor 1", img: "", imgNote: NO_IMG_COPYRIGHT, fl: 1, px: 94, py: 252,
look: "Towering carved ancestor poles, stacked with figures and rising to an openwork ‘wing.’",
context: "Made for feasts honoring the recently dead, then left to return to the forest. Collected in 1961 for what became the Rockefeller Wing — a reminder that ‘modern’ art was happening everywhere at once." }
] }
];

const TRANS = [
{ headline: "From following rules to using your eyes", walk: "Return through the Great Hall and continue straight to the south side, into the Greek and Roman galleries.", points: [
"Early Greek sculptors learned from Egypt: the first Greek statues borrow its stance, clenched fists and stride.",
"But Greek city-states prized debate, sport and the individual citizen. Philosophers asked what the world is really like, and artists started checking the old rules against real bodies.",
"Between about 600 and 400 BCE, the stiff pose relaxes into a natural one with weight on one leg. The goal shifts from what you know to what you see."] },
{ headline: "From the body to the soul", walk: "Head back to the Great Hall and walk under the Grand Staircase into the Medieval galleries.", points: [
"Christianity — legal from 313 and soon the empire’s official religion — changed what pictures were for.",
"The Western Roman Empire broke apart in the 400s. Monasteries and later cathedrals became the big art buyers; in the East (Byzantium) the Roman tradition carried on.",
"Art’s job became pointing beyond this world: gold replaces landscapes, figures flatten, size shows holiness. Not a loss of skill — a change of goals."] },
{ headline: "Rebirth: looking again at nature and the ancients", walk: "Climb the Grand Staircase from the Great Hall. It lands in Gallery 600 on Floor 2.", points: [
"Trade made Italian cities like Florence rich. Banking families such as the Medici paid for art to show both faith and power.",
"Scholars rediscovered ancient Greek and Roman writing. This ‘humanism’ put human experience back at the center.",
"New tools arrived: linear perspective (1420s) made space measurable, and painters in the Netherlands perfected oil paint for glowing detail."] },
{ headline: "From calm harmony to drama", walk: "Stay in the European Paintings suite; the 1600s works hang in Galleries 614–625.", points: [
"The Protestant Reformation split Europe. The Catholic Church fought back and asked for religious images that were clear and emotionally gripping.",
"Kings wanted art that overwhelmed. Meanwhile in the Protestant Dutch Republic, middle-class buyers wanted portraits, landscapes and scenes of daily life.",
"The result: spotlight lighting against deep shadow, diagonal action, real-looking people caught mid-moment."] },
{ headline: "From grandeur to reason — and back to feeling", walk: "Head for Galleries 631–641, near the top of the Grand Staircase.", points: [
"In the 1700s, Rococo turned Baroque drama into pastel playfulness for French aristocrats.",
"The Enlightenment pushed back. Digs at Herculaneum (1738) and Pompeii (1748) sparked Neoclassicism — clean lines, civic virtue, ancient heroes — the look of the American and French revolutions.",
"When reason, revolution and factories disappointed, Romanticism celebrated emotion, wild nature and imagination."] },
{ headline: "Painting no longer has to copy reality", walk: "Continue through the 19th-century galleries (800s).", points: [
"Photography (1839) captured likeness faster and cheaper, so painters asked what only painting could do.",
"Industrial Paris — trains, new boulevards, cafés, weekends off — offered new subjects, and paint in portable tubes made painting outdoors easy.",
"The official Salon kept rejecting new ideas, so artists showed on their own: the Salon des Refusés (1863), then the first Impressionist show (1874). Japanese prints taught flat color and bold cropping."] },
{ headline: "Breaking the picture apart", walk: "The modern wing is closed for construction. Take the Grand Staircase down, walk west through the Medieval Sculpture Hall to the Lehman Wing, and go down to Floor G (Galleries 963–965).", points: [
"Cézanne’s geometry, plus African and ancient Iberian sculpture, pushed Picasso and Braque toward Cubism (around 1907–14): many viewpoints at once.",
"Einstein, Freud and World War I shook people’s certainty about reality. Artists like Kandinsky asked whether color and line alone could carry meaning.",
"After World War II, the art world’s center moved from Paris to New York, and painters made the act of painting itself the subject."] }
];

const STEPS = [], ERA_START = [], STOP_BASE = [];
let TOTAL = 0;
ERAS.forEach(function (er, e) {
  er.hue = HUES[e];
  ERA_START[e] = STEPS.length; STOP_BASE[e] = TOTAL; TOTAL += er.stops.length;
  STEPS.push({ t: "era", e: e });
  er.stops.forEach(function (s, i) { STEPS.push({ t: "stop", e: e, s: i }); });
  if (e < ERAS.length - 1) STEPS.push({ t: "trans", e: e });
});
STEPS.push({ t: "end", e: ERAS.length - 1 });
function eraFloor(e) { for (const s of ERAS[e].stops) { if (s.px != null) return s.fl; } return 1; }
function eraFirst(e) { for (const s of ERAS[e].stops) { if (s.px != null) return s; } return null; }

// Route nodes, built from the stops in order; floor changes go through the Grand Staircase
const NODES = [{ fl: 1, x: 198, y: 154, t: -2 }, { fl: 1, x: 162, y: 154, t: -1.5 }];
(function () {
  let prevFl = 1, g = 0;
  ERAS.forEach(function (er) {
    er.stops.forEach(function (s) {
      if (s.px != null) {
        if (s.fl !== prevFl) {
          NODES.push({ fl: prevFl, x: STAIR[prevFl].x, y: STAIR[prevFl].y, t: g - 0.6, brk: false });
          NODES.push({ fl: s.fl, x: STAIR[s.fl].x, y: STAIR[s.fl].y, t: g - 0.4, brk: true });
          prevFl = s.fl;
        }
        NODES.push({ fl: s.fl, x: s.px, y: s.py, t: g });
      }
      g++;
    });
  });
})();
const SEGS = { 1: [], 2: [] };
for (let i = 0; i < NODES.length - 1; i++) {
  const a = NODES[i], b = NODES[i + 1];
  if (a.fl !== b.fl) continue;
  const dx = b.x - a.x, dy = b.y - a.y;
  const elbow = Math.abs(dx) > Math.abs(dy) ? { x: b.x, y: a.y } : { x: a.x, y: b.y };
  const tm = (a.t + b.t) / 2;
  SEGS[a.fl].push([a.x, a.y, a.t, elbow.x, elbow.y, tm]);
  SEGS[a.fl].push([elbow.x, elbow.y, tm, b.x, b.y, b.t]);
}

function nextText(st) {
  if (!st) return "Finish";
  if (st.t === "stop") return "Next: " + ERAS[st.e].stops[st.s].short;
  if (st.t === "era") return "Enter Era " + ERAS[st.e].num;
  if (st.t === "trans") return "What changed next?";
  return "Finish the route";
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { pos: 0, floor: null, overview: false, narrow: false, drawer: false, side: null, hudCollapsed: false };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() { this.onResize(); try { window.addEventListener("resize", this.onResize); } catch (e) {} }
  componentWillUnmount() { try { window.removeEventListener("resize", this.onResize); } catch (e) {} }
  onResize() { let n = false; try { n = window.innerWidth < 700; } catch (e) {} if (n !== this.state.narrow) this.setState({ narrow: n }); }
  go(p, openCard) {
    const n = Math.max(0, Math.min(STEPS.length - 1, p));
    this.setState({ pos: n, floor: null, side: null, overview: false, view: null, drawer: !!openCard && STEPS[n].t === "stop" });
  }
  openSide(e, i) { const s = ERAS[e].side[i]; this.setState({ side: { e: e, i: i }, drawer: true, floor: s.fl, overview: false }); }

  renderVals() {
    const self = this;
    const pos = this.state.pos;
    const st = STEPS[pos];
    const e = st.t === "trans" ? st.e + 1 : st.e;
    const era = ERAS[e];
    const hue = era.hue, eraInk = ink(hue);
    const ended = st.t === "end";
    const curStop = st.t === "stop" ? st.s : -1;
    const cur = curStop >= 0 ? era.stops[curStop] : null;
    const sideSel = this.state.side && this.state.side.e === e ? ERAS[e].side[this.state.side.i] : null;
    const autoFloor = ended ? 1 : (cur && cur.px != null ? cur.fl : eraFloor(e));
    const floor = this.state.floor ?? autoFloor;
    const small = this.state.narrow;

    // Departments: state per era
    const dstate = {};
    DEPTS.forEach(function (d) {
      const route = d.eras.length > 0;
      const isCur = route && !ended && d.eras.indexOf(e) >= 0;
      const visited = route && !isCur && (ended || d.eras.every(function (x) { return x < e; }));
      const dh = isCur ? 7 : (route ? 4.5 : 3);
      const dHue = route ? (isCur ? hue : HUES[d.eras[visited ? d.eras.length - 1 : 0]]) : null;
      let c;
      if (d.hall) c = "#F7F3EC";
      else if (d.closed) c = "#D8D0C1";
      else if (!route) c = "#E3DACB";
      else if (isCur) c = mix(dHue, IVORY, 0.12);
      else if (visited) c = mix(mix(dHue, "#9A9286", 0.65), IVORY, 0.45);
      else c = mix(dHue, IVORY, 0.6);
      dstate[d.id] = { route: route, isCur: isCur, visited: visited, h: d.id === "entry" ? 0.6 : dh, c: c, hue: dHue };
    });

    const rooms = GAL[floor].map(function (g) {
      const s = dstate[g.dept]; const d = DEPT[g.dept];
      const b = box(g.x + 0.5, g.y + 0.5, Math.max(1, g.w - 1), Math.max(1, g.d - 1), s.h, SLAB_H, s.c, d.closed ? HATCH : "");
      const target = d.eras.indexOf(e) >= 0 ? e : d.eras[0];
      return { wrap: b.wrap, top: b.top, south: b.south, east: b.east, route: s.route, idle: !s.route,
        aria: "Gallery " + g.num + ", " + d.name + (s.isCur ? " (you are here)" : ""),
        pick: function () { if (s.route) self.go(ERA_START[target]); } };
    });

    const props = PROPS[floor].map(function (p) {
      const g = GAL[floor].find(function (q) { return q.num === p[0]; });
      const base = SLAB_H + (g ? dstate[g.dept].h : 3);
      let c = p[7]; if (c === "i") c = IVORY;
      return box(p[1], p[2], p[3], p[4], p[5], base + p[6], c);
    });

    const labels = [];
    DEPTS.forEach(function (d) {
      const c = CENT[floor][d.id]; if (!c || !d.name) return;
      const s = dstate[d.id];
      let look;
      if (d.closed) look = "background: #E0B12E; color: #1C1A17;";
      else if (s.isCur) look = "background: " + ink(hue) + "; color: #FFFFFF;";
      else if (s.route) look = "background: #FBF8F2; color: #1C1A17; border: 1px solid " + ink(s.hue) + ";";
      else look = "background: rgba(251,248,242,.9); color: #5E574D;";
      labels.push({ text: d.name + (d.nums ? " · " + d.nums : ""), look: look, cls: (s.route || d.hall || d.closed) ? "" : "zl-idle",
        anchor: "left: " + L(c.x) + "; top: " + L(c.y) + "; transform: translateZ(" + L(SLAB_H + s.h + 1) + ");" });
    });

    let t0, t1;
    if (st.t === "stop") { t0 = STOP_BASE[e] + curStop; t1 = t0 + 1; }
    else if (ended) { t0 = 999; t1 = 999; }
    else { t1 = STOP_BASE[e]; t0 = t1 - 1; if (e === 0) t0 = -3; }
    const arrows = [];
    SEGS[floor].forEach(function (sg) {
      const ax = sg[0], ay = sg[1], at = sg[2], bx = sg[3], by = sg[4], bt = sg[5];
      const dx = bx - ax, dy = by - ay; const len = Math.sqrt(dx * dx + dy * dy); if (len < 0.5) return;
      const n = Math.max(1, Math.round(len / 6));
      const ang = Math.atan2(dy, dx) * 180 / Math.PI;
      const active = at >= t0 && bt <= t1 + 0.001;
      if (!active) return;
      for (let k = 0; k < n; k++) {
        const f = (k + 0.5) / n; const x = ax + dx * f, y = ay + dy * f;
        const sz = 6;
        const look = "color: " + eraInk + "; animation-delay: " + (arrows.length * 0.18).toFixed(2) + "s;";
        const cls = "flow";
        arrows.push({ cls: cls, style: "left: " + L(x) + "; top: " + L(y) + "; width: " + L(sz) + "; height: " + L(sz) + "; transform: translateZ(" + L(ARROW_Z) + ") translate(-50%, -50%) rotate(" + ang.toFixed(1) + "deg); " + look });
      }
    });

    const pins = [];
    if (st.t === "era" || st.t === "stop") {
      era.stops.forEach(function (s, i) {
        if (s.px == null || s.fl !== floor) return;
        const active = i === curStop && !sideSel, seen = curStop >= 0 && i < curStop;
        const sz = active ? 40 : 30;
        let dot;
        if (active) dot = "width: " + sz + "px; height: " + sz + "px; background: " + eraInk + "; color: #FFFFFF; border: 2px solid #FFFFFF;";
        else if (seen) dot = "width: " + sz + "px; height: " + sz + "px; background: #D8CEBB; color: #1C1A17; border: 1.5px solid #8C8070;";
        else dot = "width: " + sz + "px; height: " + sz + "px; background: #FFFFFF; color: #1C1A17; border: 2px solid " + eraInk + ";";
        pins.push({ n: i + 1, here: active, hereText: "You are here", bob: active ? "bob" : "", cls: active ? "pulse" : "",
          anchor: "left: " + L(s.px) + "; top: " + L(s.py) + "; transform: translateZ(" + L(active ? PIN_Z + 4 : PIN_Z) + ");",
          dot: dot, stem: "background: " + (active ? eraInk : "rgba(28,26,23,.55)") + ";",
          aria: "Stop " + (i + 1) + ": " + s.title + ", " + s.gallery, pick: function () { self.go(ERA_START[e] + 1 + i, true); } });
      });
      era.side.forEach(function (s, i) {
        if (s.fl !== floor) return;
        const active = sideSel === s;
        pins.push({ n: "+", here: active, hereText: "Side trip", bob: active ? "bob" : "", cls: active ? "pulse" : "",
          anchor: "left: " + L(s.px) + "; top: " + L(s.py) + "; transform: translateZ(" + L(PIN_Z - 4) + ");",
          dot: "width: 26px; height: 26px; background: rgba(255,255,255,.92); color: #1C1A17; border: 2px dashed #1C1A17; font-size: 15px;",
          stem: "background: rgba(28,26,23,.35);", aria: "Side trip: " + s.title + ", " + s.gallery, pick: function () { self.openSide(e, i); } });
      });
    }
    const first = eraFirst(e);
    if (st.t === "trans" && first && first.fl === floor) {
      pins.push({ n: era.num, here: true, hereText: "Head here next", bob: "bob", cls: "pulse",
        anchor: "left: " + L(first.px) + "; top: " + L(first.py) + "; transform: translateZ(" + L(PIN_Z) + ");",
        dot: "width: 44px; height: 44px; background: " + eraInk + "; color: #FFFFFF; border: 2px solid #FFFFFF; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 18px;",
        stem: "background: " + eraInk + ";", aria: "Next: Era " + era.num + ", " + era.name, pick: function () { self.go(ERA_START[e]); } });
    }

    // Camera: follow centers the current piece (or side trip); overview shows the whole floor
    const zoomF = (this.props.followZoom ?? 2.6) * (small ? 1.5 : 1);
    let cx = 101, cy = 153, cz = 0, Z = small ? 1.05 : 1;
    const focus = sideSel ? sideSel : (cur && cur.px != null ? cur : (st.t !== "end" ? first : null));
    if (!this.state.overview && !ended && focus && focus.fl === floor) {
      cx = focus.px; cy = focus.py; cz = PIN_Z * 0.45;
      Z = (cur || sideSel) ? zoomF : zoomF * 0.65;
    }
    const camBase = { Z: Z, cx: cx, cy: cy, cz: cz };
    const vw = this.state.view || VIEW0;
    Z = Z * vw.zoom; cx = cx + vw.dx; cy = cy + vw.dy;
    const rotZ = BASE_ROT + vw.rot;
    const camera = cameraCss(camBase, vw);
    const labelScale = "scale(" + (Z > 1.2 ? 0.85 / Z : 1 / Z).toFixed(3) + ")";
    const pinScale = "scale(" + (1 / Z * (Z > 1.2 ? 1.1 : 1)).toFixed(3) + ")";

    const markers = MARKERS[floor].map(function (m) { return { label: m.label, anchor: "left: " + L(m.x) + "; top: " + L(m.y) + "; transform: translateZ(" + L(m.z) + ");" }; });

    const eras = ERAS.map(function (er, i) {
      const isC = i === e && !ended, visited = i < e || ended;
      let style;
      if (isC) style = "background: " + ink(er.hue) + "; color: #FFFFFF; border: 1px solid " + ink(er.hue) + ";";
      else if (visited) style = "background: #E8E0D2; color: #1C1A17; border: 1px solid #CDBFA6;";
      else style = "background: #FBF8F2; color: #1C1A17; border: 1px solid #CDBFA6;";
      return { num: er.num, name: er.name, dates: er.dates, time: "About " + TIMES[i] + " min", timeLine: "border-top: 1px solid " + (isC ? "rgba(255,255,255,.35)" : "#D9D1C1") + ";",
        style: style, dot: "background: " + (isC ? "#FFFFFF" : er.hue) + ";", ariaCur: isC ? "step" : "false", pick: function () { self.go(ERA_START[i]); } };
    });

    const works = era.stops.map(function (s, i) {
      const isC = i === curStop, seen = curStop >= 0 && i < curStop;
      return { n: i + 1, title: s.title, byline: s.artist + " · " + s.date, gallery: s.gallery + (s.status ? " · " + s.status : ""),
        img: imgUrl(s.img), hasImg: !!s.img, noImg: !s.img, phBg: "background: " + mix(hue, IVORY, 0.78) + ";",
        border: isC ? "border: 2px solid " + eraInk + ";" : "border: 1px solid #D9D1C1;",
        numStyle: isC ? "background: " + eraInk + "; color: #FFFFFF;" : (seen ? "background: #D8CEBB; color: #1C1A17;" : "background: #FFFFFF; color: #1C1A17; border: 1.5px solid " + eraInk + ";"),
        aria: "Open card: " + s.title + ", " + s.gallery, open: function () { self.go(ERA_START[e] + 1 + i, true); } };
    });
    const sides = era.side.map(function (s, i) {
      return { title: s.title, byline: s.artist + " · " + s.date, gallery: s.gallery, badge: "Side trip · Floor " + s.fl,
        img: imgUrl(s.img), hasImg: !!s.img, noImg: !s.img, phBg: "background: " + mix(hue, IVORY, 0.85) + ";",
        aria: "Open side-trip card: " + s.title + ", " + s.gallery, open: function () { self.openSide(e, i); } };
    });

    let card = { title: "", kicker: "", byline: "", medium: "", gallery: "", status: "", hasStatus: false, look: "", context: "", img: "", hasImg: false, noImg: true, imgNote: "", alt: "", ink: eraInk, isFirst: true, onRoute: true, nextLabel: "", next: function () {}, prev: function () {} };
    const shown = sideSel || cur;
    if (shown) {
      const nxt = STEPS[pos + 1];
      card = { title: shown.title, byline: shown.artist + " · " + shown.date, medium: shown.medium, gallery: shown.gallery,
        status: shown.status || "", hasStatus: !!shown.status, look: shown.look, context: shown.context,
        img: imgUrl(shown.img), hasImg: !!shown.img, noImg: !shown.img, imgNote: shown.imgNote || "", alt: shown.title + ", " + shown.artist, ink: eraInk,
        kicker: sideSel ? "Side trip · Era " + era.num + " · Floor " + sideSel.fl : "Era " + era.num + " · " + era.name + " · Stop " + (curStop + 1) + " of " + era.stops.length,
        onRoute: !sideSel, isFirst: curStop === 0,
        nextLabel: sideSel ? "Back to the route" : (nxt && nxt.t === "stop" ? "Next: " + ERAS[nxt.e].stops[nxt.s].short : (nxt && nxt.t === "trans" ? "End of this era — what changed?" : "Finish")),
        next: sideSel ? function () { self.setState({ side: null, drawer: false, floor: null }); } : function () { const n2 = STEPS[pos + 1]; self.go(pos + 1, n2 && n2.t === "stop"); },
        prev: function () { self.go(pos - 1, true); } };
    }

    let tr = { fromNum: "", toNum: "", fromName: "", toName: "", headline: "", walk: "", points: [] };
    if (st.t === "trans") {
      const T = TRANS[st.e];
      tr = { fromNum: ERAS[st.e].num, toNum: era.num, fromName: ERAS[st.e].name, toName: era.name, headline: T.headline, walk: T.walk,
        points: T.points.map(function (p, i) { return { n: i + 1, text: p }; }) };
    }

    let hereKicker, hereTitle, hereSub, hereTrend, progressA, progressB, hereImg = "";
    if (ended) {
      hereKicker = "Route complete"; hereTitle = "All eight eras done"; hereSub = "Exit via the Great Hall, Floor 1"; hereTrend = "From rules for eternity to a single gesture.";
      progressA = "Finished"; progressB = TOTAL + " of " + TOTAL + " stops";
    } else if (st.t === "trans") {
      hereKicker = "Follow the arrows to Era " + era.num; hereTitle = era.name; hereSub = era.where; hereTrend = TRANS[st.e].headline + ".";
      progressA = "Between eras"; progressB = ERAS[st.e].num + " → " + era.num;
    } else {
      hereKicker = curStop >= 0 ? "You are here · Era " + era.num : "Follow the arrows · Era " + era.num;
      hereTitle = cur ? cur.title : era.name;
      hereSub = cur ? (cur.gallery + (cur.status ? " · " + cur.status : "")) : era.where;
      hereImg = cur ? imgUrl(cur.img) : "";
      hereTrend = era.trend;
      progressA = "Era " + era.num + (curStop >= 0 ? " · Stop " + (curStop + 1) + " of " + era.stops.length : " · Overview");
      progressB = curStop >= 0 ? ("Stop " + (STOP_BASE[e] + curStop + 1) + " of " + TOTAL) : (era.stops.length + " key works · " + era.side.length + " side trips");
    }

    const slab = box(0, 0, 203, 307, SLAB_H, 0, "#ECE4D6");

    return {
      scene: { camera: camera, camBase: camBase, view: vw, bb: "rotateZ(" + (-rotZ).toFixed(1) + "deg) rotateX(-" + TILT + "deg)", labelScale: labelScale, pinScale: pinScale, planeSize: "width: " + L(203) + "; height: " + L(307) + ";", slab: slab,
        rooms: rooms, props: props, labels: labels, pins: pins, markers: markers, arrows: arrows },
      eras: eras,
      era: { num: era.num, name: era.name, dates: era.dates, where: era.where, trend: era.trend, why: era.why, walk: era.walk },
      eraInk: eraInk, works: works, sides: sides, hasSide: sides.length > 0, card: card, tr: tr,
      drawerOpen: this.state.drawer && !!shown,
      closeDrawer: function () { self.setState({ drawer: false, side: null, floor: null }); },
      openCurrent: function () { self.setState({ drawer: true }); },
      hudOpen: !this.state.hudCollapsed, hudClosed: !!this.state.hudCollapsed,
      hudWrap: this.state.hudCollapsed ? "right: 0px; display: flex; justify-content: flex-end;" : "",
      hereTab: ended ? "Done" : "Era " + era.num,
      toggleHud: function () { self.setState({ hudCollapsed: !self.state.hudCollapsed }); },
      recap: ERAS.map(function (er) { return { num: er.num, name: er.name, trend: er.trend, dot: "background: " + er.hue + ";" }; }),
      showEra: st.t === "era" || st.t === "stop", isOverview: st.t === "era", showTrans: st.t === "trans", showEnd: ended,
      hereKicker: hereKicker, hereTitle: hereTitle, hereSub: hereSub, hereTrend: hereTrend, hereColor: hue,
      hereImg: hereImg, hereHasImg: !!hereImg, hereCanOpen: curStop >= 0,
      progressA: progressA, progressB: progressB,
      atStart: pos === 0, atEnd: pos === STEPS.length - 1,
      nextLabel: nextText(STEPS[pos + 1]),
      f1Pressed: floor === 1 ? "true" : "false", f2Pressed: floor === 2 ? "true" : "false",
      f1Style: floor === 1 ? "background: #1C1A17; color: #FFFFFF;" : "background: transparent; color: #1C1A17;",
      f2Style: floor === 2 ? "background: #1C1A17; color: #FFFFFF;" : "background: transparent; color: #1C1A17;",
      overviewPressed: this.state.overview ? "true" : "false",
      viewLabel: this.state.overview ? "Follow me" : "Whole floor",
      toggleView: function () { self.setState({ overview: !self.state.overview, view: null }); },
      showF1: function () { self.setState({ floor: 1, view: null }); },
      showF2: function () { self.setState({ floor: 2, view: null }); },
      next: function () { self.go(pos + 1); },
      prev: function () { self.go(pos - 1); },
      restart: function () { self.go(0); }
    };
  }
}
