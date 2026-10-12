// English / Simplified Chinese. UI strings live in UI; the Chinese versions of the
// eras, works, transitions and map labels are in ZH and are swapped into the data
// from guide.js when the language changes.
const UI = {
en: {
  docTitle: "An Art Illiterate’s Guide to Art History at the Met",
  eyebrow: "Unofficial walking guide · The Met Fifth Avenue",
  h1: "An Art Illiterate’s Guide to Art History at the Met",
  langAria: "Language",
  erasAria: "Eras", mapControls: "Map controls", moveMap: "Move the map",
  mapnote: "Drag to move · scroll or pinch to zoom · galleries traced from the Met’s official map",
  foot1: "Independent guide, not affiliated with The Metropolitan Museum of Art. Gallery footprints are traced from the Met’s interactive map, and gallery numbers come from the Met’s collection data (October 2026). Works move and galleries close: the modern wing is closed for construction of the Tang Wing (planned 2030), and the Ancient West Asian and Cypriot galleries reopen in 2027. Check the Met’s official map before you go.",
  foot2: "Images: The Metropolitan Museum of Art, Open Access (public domain). Works still in copyright, or without an open-access image, are shown without one.",
  floor1: "Floor 1", floor2: "Floor 2", follow: "Follow me", whole: "Whole floor",
  zoomIn: "Zoom in", zoomOut: "Zoom out", rotL: "Rotate left", rotR: "Rotate right",
  recenter: "Re-center on the route", centered: "Centered on the route",
  hudShow: "Show where you are", hudCollapse: "Collapse to the side", openCard: "Open the card",
  prevStep: "Previous step", previous: " Previous",
  aboutEra: "About this era", eraOf: "Era {0} of VIII · {1}", inOneLine: "In one line", whyLooks: "Why it looks this way",
  gettingThere: "Getting there.", keyWorks: "Key works", onRoute: "On the route · tap for the card",
  meanwhile: "Meanwhile, nearby · optional side trips from the same centuries", walkStop1: "Walk to stop 1 →",
  betweenEras: "Between eras", betweenKicker: "Between eras · {0} → {1}", howWhy: "How and why the style changed", walkOn: "Walk on.",
  routeComplete: "Route complete", endTitle: "You just walked through 5,000 years of art",
  endText: "From art that followed fixed rules so it could work forever, to a painting that records one body moving across one canvas. The whole story in eight lines:",
  endLeave: "To leave, take the Grand Staircase down to the Great Hall and the Fifth Avenue doors.", restart: "Start again",
  closeCard: "Close card", lookFor: "Look for · the idea", story: "The story", prevWork: "Previous work",
  finish: "Finish", nextStop: "Next: {0}", enterEra: "Enter Era {0}", whatChanged: "What changed next?", finishRoute: "Finish the route",
  galleryAria: "Gallery {0}, {1}", youAreHereParen: " (you are here)", youAreHere: "You are here", sideTrip: "Side trip", headHere: "Head here next",
  stopAria: "Stop {0}: {1}, {2}", sideAria: "Side trip: {0}, {1}", nextEraAria: "Next: Era {0}, {1}", aboutMin: "About {0} min",
  openCardAria: "Open card: {0}, {1}", openSideAria: "Open side-trip card: {0}, {1}", sideBadge: "Side trip · Floor {0}",
  sideKicker: "Side trip · Era {0} · Floor {1}", stopKicker: "Era {0} · {1} · Stop {2} of {3}", backToRoute: "Back to the route",
  endOfEra: "End of this era — what changed?", allDone: "All eight eras done", exitVia: "Exit via the Great Hall, Floor 1",
  endTrend: "From rules for eternity to a single gesture.", finished: "Finished", stopsOf: "{0} of {1} stops",
  followTo: "Follow the arrows to Era {0}", hereEra: "You are here · Era {0}", followEra: "Follow the arrows · Era {0}",
  eraStop: "Era {0} · Stop {1} of {2}", eraOverview: "Era {0} · Overview", stopOfTotal: "Stop {0} of {1}",
  workCount: "{0} key works · {1} side trips", done: "Done", eraTab: "Era {0}", stop: ".", sep: ", "
},
zh: {
  docTitle: "艺术小白的大都会艺术史漫游指南",
  eyebrow: "非官方参观路线 · 大都会艺术博物馆第五大道馆",
  h1: "艺术小白的\u200b大都会艺术史漫游指南",
  langAria: "语言",
  erasAria: "时期", mapControls: "地图控制", moveMap: "移动地图",
  mapnote: "拖动平移 · 滚轮或双指缩放 · 展厅轮廓取自大都会官方地图",
  foot1: "本指南为独立制作，与大都会艺术博物馆无关。展厅轮廓取自大都会的互动地图，展厅编号来自大都会馆藏数据（2026 年 10 月）。展品会调动，展厅也会关闭：现代艺术馆因建造唐氏新馆（Tang Wing，预计 2030 年落成）暂时关闭，古代西亚与塞浦路斯展厅将于 2027 年重新开放。出发前请查看大都会官方地图。",
  foot2: "图片：大都会艺术博物馆开放获取计划（公有领域）。仍受版权保护或没有开放图片的作品不显示图片。",
  floor1: "1 层", floor2: "2 层", follow: "跟随我", whole: "整层",
  zoomIn: "放大", zoomOut: "缩小", rotL: "向左旋转", rotR: "向右旋转",
  recenter: "回到路线中心", centered: "已在路线中心",
  hudShow: "显示当前位置", hudCollapse: "收起到侧边", openCard: "打开卡片",
  prevStep: "上一步", previous: " 上一步",
  aboutEra: "关于这个时期", eraOf: "时期 {0} / VIII · {1}", inOneLine: "一句话概括", whyLooks: "为什么会是这个样子",
  gettingThere: "怎么走：", keyWorks: "重点作品", onRoute: "路线上的作品 · 点击查看卡片",
  meanwhile: "与此同时，就在附近 · 同时代的顺路看看（可选）", walkStop1: "前往第 1 站 →",
  betweenEras: "时期之间", betweenKicker: "时期之间 · {0} → {1}", howWhy: "风格如何改变，又为何改变", walkOn: "继续前进：",
  routeComplete: "路线完成", endTitle: "你刚刚走完了 5000 年的艺术史",
  endText: "从遵循固定法则、为永恒而作的艺术，到记录一个人在一张画布上挥洒动作的画作。整个故事浓缩成八句话：",
  endLeave: "离开时，请走大楼梯下到大厅，从第五大道正门出馆。", restart: "重新开始",
  closeCard: "关闭卡片", lookFor: "看点 · 核心理念", story: "背后的故事", prevWork: "上一件作品",
  finish: "结束", nextStop: "下一站：{0}", enterEra: "进入时期 {0}", whatChanged: "接下来发生了什么变化？", finishRoute: "完成路线",
  galleryAria: "{0} 号展厅，{1}", youAreHereParen: "（你在这里）", youAreHere: "你在这里", sideTrip: "顺路看看", headHere: "下一站在这里",
  stopAria: "第 {0} 站：{1}，{2}", sideAria: "顺路看看：{0}，{1}", nextEraAria: "下一站：时期 {0}，{1}", aboutMin: "约 {0} 分钟",
  openCardAria: "打开卡片：{0}，{1}", openSideAria: "打开顺路看看卡片：{0}，{1}", sideBadge: "顺路看看 · {0} 层",
  sideKicker: "顺路看看 · 时期 {0} · {1} 层", stopKicker: "时期 {0} · {1} · 第 {2}/{3} 站", backToRoute: "回到路线",
  endOfEra: "本时期结束——发生了什么变化？", allDone: "八个时期全部完成", exitVia: "经 1 层大厅离开",
  endTrend: "从为永恒而定的法则，到一次挥洒的动作。", finished: "已完成", stopsOf: "{0}/{1} 站",
  followTo: "跟着箭头前往时期 {0}", hereEra: "你在这里 · 时期 {0}", followEra: "跟着箭头走 · 时期 {0}",
  eraStop: "时期 {0} · 第 {1}/{2} 站", eraOverview: "时期 {0} · 概览", stopOfTotal: "全程第 {0}/{1} 站",
  workCount: "{0} 件重点作品 · {1} 处顺路看看", done: "完成", eraTab: "时期 {0}", stop: "。", sep: "，"
}
};

let LANG = "en";
function t(k) {
  const s = (UI[LANG] && UI[LANG][k] != null) ? UI[LANG][k] : (UI.en[k] != null ? UI.en[k] : k);
  const a = arguments;
  return s.replace(/\{(\d)\}/g, function (m, i) { return a[+i + 1] == null ? "" : a[+i + 1]; });
}

const ZH = {
imgNote: {
  "Image not shown — this work is still in copyright. See it in person.": "此作品仍受版权保护，不显示图片。请到现场欣赏。",
  "The Met doesn’t offer an open-access image of this — you’ll have to see it in person.": "大都会没有提供这件作品的开放图片，只能到现场看了。"
},
depts: {
  egypt: "埃及艺术", greek: "希腊与罗马艺术", cyprus: "塞浦路斯艺术 · 2027 年前关闭", asian: "亚洲艺术", medieval: "中世纪艺术",
  rock: "非洲、大洋洲与美洲艺术", arms: "武器与盔甲", westasia: "古代西亚 · 2027 年前关闭", islamic: "伊斯兰艺术",
  eursc: "欧洲雕塑与装饰艺术", eurp: "欧洲绘画 1250–1800", music: "乐器", draw: "素描与版画", american: "美国馆",
  c19: "19 世纪欧洲绘画", photo: "摄影", modern: "现代艺术馆 · 关闭中（唐氏新馆施工）", lehman: "罗伯特·莱曼馆",
  ex899: "899 号展览厅", exhib: "特展", hall: "大厅", entry: ""
},
markers: {
  "Fifth Ave entrance": "第五大道入口", "Grand Staircase ↑": "大楼梯 ↑",
  "Stairs ↓ to Lehman Floor G": "楼梯 ↓ 至莱曼馆 G 层", "Grand Staircase ↓": "大楼梯 ↓"
},
eras: [
{ name: "古埃及", dates: "约公元前 3100–前 30 年",
where: "1 层 · 大厅北侧 · 100–138 号展厅",
trend: "为永恒而作，而不是给人看的艺术。",
why: "埃及的图像是有“任务”的：一尊雕像或一幅浮雕可以容纳灵魂，让它永远活下去。所以艺术家遵循严格的法则——头部画侧面，眼睛和肩膀画正面，重要人物画得更大——这些法则 3000 年几乎没变，因为一改就可能破坏“法力”。",
walk: "从大厅向右（北）转。100 号展厅的佩尔内布墓就是第一间。沿展厅一路向北，走到玻璃馆中的丹铎神庙（131 号展厅）。",
stops: [
{ title: "佩尔内布的马斯塔巴墓", short: "佩尔内布墓", artist: "古王国时期，第五王朝", date: "约公元前 2381–前 2323 年", medium: "彩绘石灰岩",
look: "走进一座真正的墓葬祭堂。“假门”是生者与死者之间的门槛；仆人献上面包、禽鸟和牛的浮雕，让佩尔内布的灵魂永远有吃的。找找那些法则：肩膀朝前，头部侧面，墓主比其他人都大。",
context: "佩尔内布是一位宫廷官员，葬于首都孟菲斯附近的萨卡拉。大都会于 1913 年购得这座祭堂，一块石头一块石头地重建起来。这是你的起点：艺术是服务来世的实用工具。" },
{ title: "河马“威廉”", short: "河马“威廉”", artist: "中王国时期，第十二王朝", date: "约公元前 1961–前 1878 年", medium: "彩陶",
look: "蓝色釉面上画着莲花和沼泽植物，这只河马身上自带一条尼罗河。小巧可爱，却满载寓意。",
context: "河马是尼罗河上最危险的动物之一。这只出自梅尔的一座墓中；它有三条腿曾被折断（现已修复），很可能是故意的，免得它在来世伤害墓主。如今它已成为博物馆的非官方吉祥物。" },
{ title: "哈特谢普苏特狮身人面像", short: "哈特谢普苏特狮身像", artist: "新王国时期，第十八王朝", date: "约公元前 1479–前 1458 年", medium: "花岗岩，颜料",
look: "狮子的身体配上哈特谢普苏特的脸——她是以法老身份统治埃及的女性——戴着国王的头巾和假胡须。",
context: "哈特谢普苏特用尽男性国王的所有传统象征，统治了大约二十年。她死后，许多雕像被砸毁；大都会在她位于代尔埃尔巴哈里的神庙附近自行发掘，找回了这些碎块。" },
{ title: "丹铎神庙", short: "丹铎神庙", artist: "罗马时期，奥古斯都在位时", date: "约公元前 10 年", medium: "风积砂岩",
look: "找找墙上的罗马皇帝奥古斯都：他打扮成法老，向埃及众神献祭。风格纯属埃及，老板却是罗马。",
context: "神庙原本矗立在努比亚的尼罗河畔。阿斯旺高坝将要淹没它时，埃及把它赠给美国，感谢美国帮助抢救努比亚古迹；1978 年在这里开放。那时埃及风格已是古风——而希腊罗马世界已经在借用它了。" }
], side: [] },
{ name: "希腊与罗马", dates: "约公元前 800 年–公元 400 年",
where: "1 层 · 大厅南侧 · 150–169 号展厅",
trend: "人体成为万物的尺度。",
why: "希腊艺术从几何图案走向看起来经过观察、继而理想化的身体——这正是希腊人相信理性与人的潜能的写照。罗马继承了这些理想，又加上了毫不留情的写实肖像和营造纵深错觉的壁画，并把这种风格传遍整个帝国。",
walk: "穿过大厅往回走，一直向南，进入希腊罗马展厅。尽头高大的罗马中庭就是 162 号展厅。",
stops: [
{ title: "几何风格双耳喷口杯", short: "几何风格陶杯", artist: "雅典，希施菲尔德作坊", date: "约公元前 750–前 735 年", medium: "赤陶",
look: "一圈圈锯齿纹框起一场葬礼：死者躺在灵床上，哀悼者举起双臂，下方是战车和战士。人物由三角形和圆形拼成——图案在先，身体在后。",
context: "这样的大瓶立在雅典迪皮隆墓地的墓上。它是希腊故事的起跑线：大约三个世纪后，这些火柴人会变成当时世上最逼真的人体。" },
{ title: "大理石青年立像（库罗斯）", short: "库罗斯像", artist: "阿提卡，希腊", date: "约公元前 590–前 580 年", medium: "纳克索斯大理石",
look: "和你刚离开的埃及雕像比一比：左脚向前、双拳紧握、目视前方。但他独自站立——身后没有石柱——而且是裸体。希腊在用自己的方式尝试埃及的公式。",
context: "雅典附近最早雕刻的青年男子大理石像之一，很可能是墓碑。大约一百年内，雕塑家就把这种僵硬放松成重心落在一条腿上的自然站姿——仿佛会呼吸的身体。" },
{ title: "泛雅典娜节奖品双耳瓶", short: "奖品双耳瓶", artist: "传为欧菲勒托斯画师作品", date: "约公元前 530 年", medium: "赤陶，黑绘",
look: "五名跑者在瓶身上冲刺，双臂摆动，双腿大跨步。黑色剪影，细节用刻线刮出：这就是“黑绘”技法。",
context: "这种瓶子装满雅典娜圣树结出的橄榄油，是雅典泛雅典娜运动会的奖品。比一比：这些身体比大约 200 年前陶杯上的火柴人生动多了。" },
{ title: "博斯科雷亚莱别墅卧室", short: "博斯科雷亚莱卧室", artist: "罗马，P. 法尼乌斯·西尼斯托尔的别墅", date: "约公元前 50–前 40 年", medium: "湿壁画",
look: "站进一间罗马卧室，四壁画满柱子、屋顶和花园岩洞。借助汇聚的线条和阴影，墙面仿佛向远处打开——欧洲此后大约一千年几乎忘了这种技巧。",
context: "公元 79 年维苏威火山喷发将它掩埋，反而保住了颜料。富有的罗马人花钱请人画这些“风景”，炫耀自己对希腊文化和奢华生活的品味。" },
{ title: "酒神狄俄尼索斯凯旋石棺", short: "罗马石棺", artist: "罗马", date: "约公元 260–270 年", medium: "大理石",
look: "酒神狄俄尼索斯骑着豹子居中，两侧四名青年代表四季。每一寸都雕满了，有些人物几乎脱离石面。",
context: "富有的罗马人葬在这样的雕花石棺里；寓意是生命像四季一样循环更新。这是罗马艺术最拥挤、最富戏剧性的样子——就在基督教改变艺术用途之前。" }
], side: [] },
{ name: "中世纪", dates: "约 300–1400 年",
where: "1 层 · 大楼梯后方 · 300–307 号展厅",
trend: "艺术是通往天堂的门。",
why: "大多数人不识字，所以图像用来讲圣经故事、帮助人专心祈祷。黄金、白银、象牙这些贵重材料本身就是献给上帝的礼物。逼真的空间和解剖不如清楚的含义重要。到了后期，哥特艺术变得更优雅、更有人情味，为文艺复兴做好了铺垫。",
walk: "回到大厅，从大楼梯下方穿过，进入中世纪展厅。",
stops: [
{ title: "安提阿“圣杯”", short: "安提阿圣杯", artist: "拜占庭", date: "约 500–550 年", medium: "银，镀金银",
look: "一只朴素的内杯，外面包着镂空的葡萄藤、鸟和坐着的人物，其中有基督。古罗马的装饰如今承载起基督教的含义。",
context: "20 世纪初在叙利亚被发现，一度被宣传为“圣杯”。学者现在认为它更可能是早期教堂里的一盏灯。罗马的风格，基督教的用途——一件过渡之物。" },
{ title: "宝座上的圣母子", short: "宝座圣母", artist: "法国，奥弗涅", date: "约 1175–1200 年", medium: "胡桃木，彩绘",
look: "玛利亚坐得笔直僵硬，膝上的婴儿耶稣像个小大人。她被表现成他的宝座。对称与静止传达的是“永恒”，而不是“母亲与婴儿”。",
context: "这样的雕像会在游行中被抬出，在教堂里受人敬奉。记住这份僵硬：楼上，大约 150 年后，乔托画的同一家人有了真实的重量与温情。" }
], side: [
{ title: "舞王湿婆（那吒罗阇）", artist: "印度（泰米尔纳德邦），朱罗王朝", date: "约 11 世纪晚期", medium: "铜合金",
look: "湿婆在火焰环中起舞，一只脚踩着代表无知的小人；一只手里的鼓象征创造，另一只手里的火焰象征毁灭。",
context: "这样的铜像会被穿上衣服，在神庙游行中抬出。当欧洲还在做僵硬、正面的神像时，朱罗雕塑家已经在歌颂动态与身体。在楼上亚洲艺术区北侧。" },
{ title: "药师佛", artist: "中国，元代", date: "约 1319 年", medium: "泥地水性颜料",
look: "一幅房子那么大的壁画：药师佛端坐于众侍者之间，衣袍和背光是柔和的红与绿。",
context: "原为山西一座佛寺所绘，20 世纪被整体迁移。可以和同一时期欧洲金底的圣像比一比。在 2 层，大厅回廊北侧尽头。" },
{ title: "伊斯法罕的米哈拉布（祈祷壁龛）", artist: "伊朗", date: "1354–55 年", medium: "釉面瓷砖马赛克",
look: "成千上万块手工切割的瓷砖拼成一个指向麦加的壁龛，四周环绕着古兰经铭文带。",
context: "伊斯兰宗教艺术避免描绘神圣人物，于是把才华倾注在几何、植物纹样和书法上。它来自伊斯法罕的一所宗教学校。在 2 层南侧的伊斯兰展厅。" }
] },
{ name: "文艺复兴", dates: "约 1300–1600 年",
where: "2 层 · 大楼梯顶端 · 600–644 号展厅",
trend: "画面成为一扇通向可信世界的窗。",
why: "艺术家把细致的观察、数学和古希腊罗马的理想结合起来，画出令人信服的空间和厚实、有情感的人物。题材大多仍是宗教，但周围的世界——以及其中的人——终于看起来是真实的了。",
walk: "从大厅爬上大楼梯，正好到达 600 号展厅，也就是欧洲绘画的入口。（上楼前，下方的顺路看看可以在 1 层看到立体的文艺复兴。）",
stops: [
{ title: "圣母子", short: "杜乔", artist: "杜乔·迪·博尼塞尼亚", date: "约 1290–1300 年", medium: "木板蛋彩，金箔",
look: "小巧而温柔：婴儿拉扯着母亲的头纱。底部画了一道窗台，隔在你和他们之间——这是西方绘画中最早出现真实空间的迹象之一。",
context: "大都会在 2004 年花了约 4500 万美元买下它。它正处在从中世纪圣像到文艺复兴绘画的转折点上。" },
{ title: "三王来朝", short: "乔托", artist: "乔托·迪·邦多纳", date: "约 1320 年", medium: "木板蛋彩，金底",
look: "天空仍是一片金色，但人物有了重量，跪着的国王捧着婴儿的脚，满是真实的温柔。体积与情感是新的配方。",
context: "乔托在佛罗伦萨和帕多瓦打破了扁平的中世纪程式；后世作家称赞他让绘画重获生命。" },
{ title: "耶稣受难；最后的审判", short: "凡·艾克", artist: "扬·凡·艾克及其工作室", date: "约 1440–41 年", medium: "布面油画，由木板转移",
look: "凑近看：数百个小人、闪亮的盔甲、远处的城市，以及下方恐怖的地狱。一层层薄油彩让光仿佛从画面内部发出。",
context: "凡·艾克在布鲁日工作，把油画颜料推进到前所未有的程度。北方画家通过细节追求真实；意大利人则通过几何。" },
{ title: "宝座上的圣母子与圣徒", short: "拉斐尔", artist: "拉斐尔", date: "约 1504 年", medium: "木板油画，金箔",
look: "完美的对称，平静的面容，人物堆叠成稳定的三角形——盛期文艺复兴的和谐。",
context: "这是拉斐尔约 21 岁时为佩鲁贾一座修道院所画，不久后他就前往佛罗伦萨，向达·芬奇和米开朗基罗学习。" },
{ title: "青年男子肖像", short: "布龙齐诺", artist: "布龙齐诺", date: "1530 年代", medium: "木板油画",
look: "冷淡、疏离、优雅得不可思议：一根手指夹在书里，一只手肘向外撑着。背后那奇怪被拉长的建筑也是风格的一部分。",
context: "这就是“风格主义”，拉斐尔平静的和谐之后，佛罗伦萨晚期文艺复兴对精致与矫饰的追求。" },
{ title: "维纳斯与阿多尼斯", short: "提香", artist: "提香", date: "1550 年代", medium: "布面油画",
look: "维纳斯紧紧拉住阿多尼斯，他正要去打猎，而那场狩猎将要了他的命。松动发光的笔触，温暖的肌肤。",
context: "威尼斯画家用色彩而非轮廓来构建画面。提香为想要感官神话题材的藏家画了好几个版本。" },
{ title: "收割者", short: "勃鲁盖尔", artist: "老彼得·勃鲁盖尔", date: "1565 年", medium: "木板油画",
look: "没有圣徒，没有故事——只有在梨树下午休的农人、金色的麦田，以及一直延伸到地平线的风景。",
context: "这是为安特卫普一位商人家中所作的六幅四季画之一（现存五幅）。日常生活与自然正在成为值得入画的题材。" }
], side: [
{ title: "古比奥公爵宫书房", artist: "弗朗切斯科·迪·乔治·马尔蒂尼设计", date: "约 1478–82 年", medium: "木镶嵌（胡桃木、山毛榉、黄檀、橡木、果木）",
look: "每一个“打开的柜子”、每一本书、每一件乐器都是平的——由数千块镶嵌木片拼成，用的是当时最新的透视科学。",
context: "这是费德里科·达·蒙特费尔特罗公爵的私人小书房，他是一位希望被视为学者的统治者。文艺复兴的透视法，被用成了一场魔术。就在中世纪展厅旁边。" },
{ title: "亚当", artist: "图利奥·隆巴尔多", date: "约 1490–95 年", medium: "大理石",
look: "一尊以古代雕像为范本、平静而理想化的裸像——古典时代之后雕刻的第一尊纪念性裸像。",
context: "原为一位威尼斯总督的陵墓而作。2002 年它倒地摔成数百块；修复师花了十多年才把它重新拼好。" },
{ title: "韦莱斯布兰科城堡庭院", artist: "西班牙", date: "1506–15 年", medium: "大理石",
look: "一座两层的文艺复兴庭院，有雕花拱门和立柱——你可以直接走进去。",
context: "原建于西班牙南部一位贵族的城堡中，20 世纪初被拆下，在这里重建。就在大楼梯旁边。" },
{ title: "法国国王亨利二世的盔甲", artist: "传为老让·库赞设计", date: "约 1555 年", medium: "钢、金、银、皮革",
look: "从头到脚压花鎏金——与其说是战甲，不如说是雕塑。",
context: "游行盔甲关乎形象，而非作战。武器与盔甲展厅就在中世纪展厅北边，隔壁就是骑士中庭（371 号展厅）里的骑马武士。" },
{ title: "太后挂饰面具（伊约巴）", artist: "埃多人，贝宁王国宫廷（尼日利亚）", date: "16 世纪", medium: "象牙、铁、铜",
look: "伊迪亚太后的象牙肖像，头冠由一圈小人头组成，额头上有纹饰。",
context: "为她的儿子奥巴·埃西吉在纪念她的仪式上佩戴而作。头冠上的小人头是葡萄牙商人，他们正是在这些年抵达贝宁。在洛克菲勒馆，1 层南端。" }
] },
{ name: "巴洛克", dates: "约 1600–1700 年",
where: "2 层 · 欧洲绘画 · 614–625 号展厅",
trend: "光、情感与戏剧性。",
why: "无论是为教会、国王还是商人工作，巴洛克画家都想直击你的内心——用聚光灯般的照明、触手可及的质感，以及普通面孔在非凡时刻的样子。",
walk: "留在欧洲绘画展区，按照每张卡片上的展厅编号走；箭头会带你走最短的环线。",
stops: [
{ title: "乐师们", short: "卡拉瓦乔", artist: "卡拉瓦乔", date: "1597 年", medium: "布面油画",
look: "四个年轻人挤满画面，有鲁特琴、乐谱，还有一把指向你的小提琴。卡拉瓦乔用真人模特作画——号手后面那张脸很可能就是他自己。",
context: "这是他为罗马一位枢机主教画的早期作品。卡拉瓦乔粗粝的写实和黑暗中刺眼的光线，在一代人之内传遍了欧洲。" },
{ title: "亚里士多德与荷马半身像", short: "伦勃朗《亚里士多德》", artist: "伦勃朗·凡·莱因", date: "1653 年", medium: "布面油画",
look: "亚里士多德把手搭在荷马的头上，肩上挂着金链。袖子上厚厚的颜料捕捉着光，而他的脸沉入沉思。",
context: "为一位西西里藏家所画。大都会在 1961 年以 230 万美元买下它——当时是所有画作的最高纪录。" },
{ title: "自画像", short: "伦勃朗自画像", artist: "伦勃朗·凡·莱因", date: "1660 年", medium: "布面油画",
look: "毫不美化：浮肿的眼睛，布满皱纹的脸，一顶画家贝雷帽。脸上的颜料又厚又粗，几乎像是雕出来的。",
context: "伦勃朗画了大约四十幅自画像。到 1660 年他已经破产；这是一位艺术家在审视自己，而不是推销自己。" },
{ title: "手持水壶的年轻女子", short: "维米尔", artist: "约翰内斯·维米尔", date: "约 1662 年", medium: "布面油画",
look: "清冷的日光透过窗户，蓝色映在银盆里——一个安静的私密时刻，被定格了。",
context: "在荷兰共和国，普通的中产阶级也买画，所以画家卖的是居家生活的场景。维米尔把这种日常题材变成了关于光的诗。" },
{ title: "胡安·德·帕雷哈", short: "委拉斯开兹", artist: "迭戈·委拉斯开兹", date: "1650 年", medium: "布面油画",
look: "松散、快速的笔触，退后一步才变成一张鲜活的脸。帕雷哈以十足的自信与你对视。",
context: "帕雷哈曾在委拉斯开兹的画室里为奴；同一年，画家签署文件给了他自由，帕雷哈后来自己也成了画家。这幅肖像 1650 年在罗马展出时，被誉为“真实本身”。" }
], side: [
{ title: "阿斯特中国庭院（明轩）", artist: "中国，仿明代风格", date: "17 世纪风格，建于 1980–81 年", medium: "木、石、瓦、植物、水",
look: "一座完整的文人园林：月洞门、山石、花木、廊道和水池——博物馆里最安静的角落。",
context: "以苏州一座 17 世纪园林为蓝本，由中国工匠用传统工具建造。它展现了 17 世纪中国艺术对自然与沉思的推崇。在亚洲艺术区，2 层北侧。" }
] },
{ name: "革命的时代", dates: "约 1700–1850 年",
where: "2 层 · 631–641 号展厅，然后是 801 号展厅",
trend: "风格成了一种立场——享乐、美德与情感之争。",
why: "风格第一次有了政治立场。洛可可代表贵族的享乐；新古典主义代表严肃的公民美德（美国和法国革命的样子）；浪漫主义则用激情、色彩和想象同时反抗这两者。",
walk: "前往大楼梯顶端附近的 631–641 号展厅，然后向南走进 19 世纪展厅，到 801 号展厅看德拉克洛瓦。",
stops: [
{ title: "情书", short: "弗拉戈纳尔", artist: "让-奥诺雷·弗拉戈纳尔", date: "1770 年代初", medium: "布面油画",
look: "羽毛般的笔触，丝绸、鲜花和一个狡黠的侧目——洛可可对华丽表面和调情的热爱。",
context: "为大革命前法国的贵族而作。不到二十年，他们的世界就被一扫而空。" },
{ title: "曼努埃尔·奥索里奥·曼里克·德·苏尼加", short: "戈雅《红衣男孩》", artist: "弗朗西斯科·德·戈雅", date: "1787–88 年", medium: "布面油画",
look: "一个红衣小男孩用绳子牵着一只喜鹊，三只猫饥渴地盯着那只鸟。天真之中，带着一丝危险的寒意。",
context: "戈雅是马德里的宫廷画家。他的作品表面甜美，却始终带着黑暗的一面，后来在战争版画和“黑色绘画”中彻底爆发。" },
{ title: "苏格拉底之死", short: "大卫", artist: "雅克-路易·大卫", date: "1787 年", medium: "布面油画",
look: "苏格拉底一边伸手去拿毒药，一边仍在讲学。清晰的边缘，人物像古代浮雕一样排开，空荡如舞台的房间：新古典主义的明晰。",
context: "法国大革命前两年在巴黎展出，它的信息——宁可为原则而死也不放弃原则——引起强烈共鸣。大卫后来成了大革命的头号艺术家。" },
{ title: "玛丽·约瑟芬·夏洛特·杜瓦尔·东涅", short: "维莱尔", artist: "玛丽-丹妮丝·维莱尔", date: "1801 年", medium: "布面油画",
look: "背对一扇破窗，一位年轻的女画家从画板上抬起头来。新古典主义的光线与清晰轮廓，转向了某种更个人的东西。",
context: "几十年来，它一直被奉为大卫本人的杰作。从 1951 年开始的研究推翻了这个归属；如今它被归于维莱尔，她是当时在巴黎工作的众多女性艺术家之一。" },
{ title: "劫持瑞贝卡", short: "德拉克洛瓦", artist: "欧仁·德拉克洛瓦", date: "1846 年", medium: "布面油画",
look: "翻卷的身体，燃烧的城堡，扬蹄的战马——动态与色彩压过了清晰的线条。把这松动的笔触和大卫的光洁比一比。",
context: "取材于沃尔特·司各特的小说《艾凡赫》。德拉克洛瓦是法国浪漫主义的领袖，他关于色彩的观念直接影响了印象派。" }
], side: [
{ title: "珀尔修斯与美杜莎之首", artist: "安东尼奥·卡诺瓦", date: "1804–6 年", medium: "大理石",
look: "光滑无瑕的大理石：英雄像举起战利品一样举着美杜莎的头。冷静、平衡、古风十足——立体的新古典主义。",
context: "卡诺瓦是当时欧洲最有名的雕塑家。他的第一版送进了梵蒂冈，填补被拿破仑掠走的一尊古代雕像的位置；这是第二版。在 1 层玻璃顶的佩特里中庭。" },
{ title: "大马士革厅", artist: "奥斯曼叙利亚", date: "1707 年", medium: "彩绘鎏金木、大理石、玻璃",
look: "一整间会客厅：彩绘鎏金的护墙板、诗句题刻，还有一级大理石喷泉台阶。",
context: "大马士革的富裕人家在这样的房间里接待客人。法国有洛可可沙龙，叙利亚也有自己的炫目室内装饰。在 2 层东南的伊斯兰展厅。" }
] },
{ name: "现代生活", dates: "约 1848–1905 年",
where: "2 层 · 南区 · 800–830 号展厅",
trend: "画你所见，照你所见去画——然后画你所感。",
why: "现实主义者把普通人画得像英雄一样大；印象派捕捉闪烁的光线和都市休闲；后印象派则推向坚实的结构（塞尚）和情绪化的色彩（梵高）。他们一起为现代艺术铺好了路。",
walk: "继续穿过 19 世纪展厅，跟着编号走。",
stops: [
{ title: "女人与鹦鹉", short: "库尔贝", artist: "古斯塔夫·库尔贝", date: "1866 年", medium: "布面油画",
look: "一个真实、未经美化的裸女躺在凌乱的床单上——没有女神，也没有神话当借口。",
context: "库尔贝倡导现实主义，说自己画不了天使，因为从没见过。这幅画在 1866 年沙龙展出，激怒了评论家，也打动了年轻画家。" },
{ title: "圣阿德雷斯的花园", short: "莫奈的花园", artist: "克劳德·莫奈", date: "1867 年", medium: "布面油画",
look: "露台、大海和天空平铺成一条条色带；明亮的纯色；旗帜在风中猎猎作响。这种层叠的构图借鉴了莫奈收藏的日本版画。",
context: "画于海滨度假地，那时“印象派”这个名字还不存在。七年后，莫奈和朋友们办了他们自己的第一次展览。" },
{ title: "舞蹈课", short: "德加《舞蹈课》", artist: "埃德加·德加", date: "1874 年", medium: "布面油画",
look: "偏离中心的房间，舞者在画面边缘被截断，有的挠痒、有的打哈欠、有的在等——像一张抓拍。",
context: "德加自称现实主义者，却和印象派一起展出。摄影偶然的取景和日本版画都影响了他的构图。" },
{ title: "十四岁的小舞者", short: "德加《小舞者》", artist: "埃德加·德加", date: "约 1880 年塑造，1922 年铸造", medium: "青铜、棉质芭蕾舞裙、丝带",
look: "青铜女孩穿着真正的布舞裙、系着发带，下巴微抬，双手背在身后。",
context: "德加 1881 年展出了蜡制原作，评论家被它的写实震惊。这些青铜像是在他去世后铸造的。" },
{ title: "夏庞蒂埃夫人和她的孩子们", short: "雷诺阿", artist: "奥古斯特·雷诺阿", date: "1878 年", medium: "布面油画",
look: "一间时髦的巴黎客厅：一身黑衣的母亲，两个穿同款蓝衣的孩子，还有一只兼作座椅的家犬。",
context: "它在 1879 年沙龙上的成功成就了雷诺阿的事业。沙发上的孩子其实是男孩保罗，穿的是当时流行的装扮。" },
{ title: "戴草帽的自画像", short: "梵高自画像", artist: "文森特·梵高", date: "1887 年", medium: "布面油画",
look: "互补色的短促笔触——黄对蓝紫——在他的脸和帽子上颤动。",
context: "画于巴黎，梵高在那里结识了印象派，从荷兰的暗色调转向明亮的色彩。画布背面是一幅更早的画《削土豆的人》。" },
{ title: "马戏团杂耍", short: "修拉", artist: "乔治·修拉", date: "1887–88 年", medium: "布面油画",
look: "成千上万个小色点在你眼中混合；煤气灯下僵直的人物显得诡异而静止。",
context: "修拉把色彩科学变成了一种方法——点彩派。这是他第一幅描绘夜间娱乐的画。" },
{ title: "麦田与柏树", short: "梵高《麦田》", artist: "文森特·梵高", date: "1889 年", medium: "布面油画",
look: "火焰般的树，卷曲的云，厚重而有节奏的笔触。色彩和笔触如今承载的是情绪，而不只是描述。",
context: "画于圣雷米，梵高当时住在那里的一家疗养院。他认为这是自己最好的夏日画作之一。" },
{ title: "睡莲池上的桥", short: "莫奈的桥", artist: "克劳德·莫奈", date: "1899 年", medium: "布面油画",
look: "莫奈自家吉维尼花园里的日本小桥，被绿色倒影包围。",
context: "晚年的莫奈一遍又一遍地画他的花园，追逐一天中光线的变化——这些作品通向了抽象。" },
{ title: "玩纸牌的人", short: "塞尚", artist: "保罗·塞尚", date: "1890–92 年", medium: "布面油画", status: "目前未列为展出",
look: "敦实、块状的男人俯身玩牌；空间由一块块色彩搭建，而不是靠消失的透视线。",
context: "塞尚想让印象派变得“像博物馆里的艺术那样坚实而持久”。把自然化为几何，直接通向了毕加索和立体主义。大都会的数据目前没有列出它的展厅，出发前请先确认。" }
], side: [
{ title: "华盛顿横渡特拉华河", artist: "埃玛纽埃尔·洛伊茨", date: "1851 年", medium: "布面油画",
look: "宽二十一英尺（约 6.4 米），充满戏剧性：华盛顿英勇地站在浮冰间的一条小船上。",
context: "在杜塞尔多夫画成，用来激发爱国热情；它更多是神话而非史实——画中那面旗帜在 1776 年还不存在。在美国馆，2 层西北。" },
{ title: "X 夫人", artist: "约翰·辛格·萨金特", date: "1883–84 年", medium: "布面油画",
look: "苍白的肌肤，黑色的长裙，转向一侧的侧脸——十足的自信。",
context: "在 1884 年巴黎沙龙上，一条镶钻肩带被画成从肩上滑落；引发的丑闻让萨金特改画了肩带，并搬到伦敦。美国馆，2 层。" },
{ title: "布罗格利公主", artist: "让-奥古斯特-多米尼克·安格尔", date: "1851–53 年", medium: "布面油画",
look: "瓷器般的肌肤和闪亮的蓝色缎子，笔触几乎看不见。",
context: "安格尔推崇线条与光洁——正好与德拉克洛瓦松动的色彩相反。在罗伯特·莱曼馆，1 层西端。" },
{ title: "乌哥利诺和他的儿子们", artist: "让-巴蒂斯特·卡尔波", date: "1865–67 年", medium: "大理石",
look: "一位父亲和饥饿的儿子们一起被囚，他绝望地咬着手指，孩子们紧紧抓着他。",
context: "取材于但丁的《地狱篇》。它赤裸的情感和扭转的身体直接指向了罗丹。佩特里中庭，1 层。" },
{ title: "力量雕像（恩基西·恩孔迪：曼加卡）", artist: "刚果人", date: "19 世纪晚期", medium: "木、铁、玻璃、树脂及其他材料",
look: "一尊扎满钉子和刀片的木雕；每一根都是为了立誓或召唤它的力量而钉进去的。",
context: "在欧洲殖民压力带来的动荡时期，用来主持公道。洛克菲勒馆，1 层南端。" }
] },
{ name: "现代艺术", dates: "约 1900–1970 年",
where: "G 层（莱曼馆，963–965 号展厅）· 2 层（899 号展厅）",
trend: "关于艺术本身的艺术——以及艺术家的内心世界。",
why: "不再需要临摹现实，艺术家把画当作一件有自身规则的物品：色彩、形状、表面、动作。风格迅速繁衍，你一路追随的那条线分出了许多支。",
walk: "现代艺术馆因建造新的唐氏新馆（预计 2030 年）暂时关闭。走大楼梯下楼，向西穿过中世纪雕塑大厅到罗伯特·莱曼馆，再下到 G 层看“生命的面孔：现代肖像”（963–965 号展厅）。最后回到楼上 899 号展厅看波洛克。",
stops: [
{ title: "格特鲁德·斯泰因", short: "毕加索", artist: "巴勃罗·毕加索", date: "1905–06 年", medium: "布面油画",
look: "沉重、雕塑般的身体，脸却像一张面具——扁平、杏仁眼、毫无表情。",
context: "据说毕加索让斯泰因摆了几十次姿势，看过古代伊比利亚雕塑后，又把脸涂掉凭记忆重画。有人说画得不像她，据说他回答：“会像的。”这是走向立体主义的一步。" },
{ title: "即兴 27 号（爱的花园 II）", short: "康定斯基", artist: "瓦西里·康定斯基", date: "1912 年", medium: "布面油画",
look: "迸发的色彩和线条，只隐约能看出人物和花园。像音乐一样，意义由色彩和节奏承载。",
context: "康定斯基相信色彩能像声音一样打动灵魂。这幅画在 1913 年纽约军械库展上展出，被阿尔弗雷德·斯蒂格利茨买下。" },
{ title: "秋天的节奏（第 30 号）", short: "波洛克", artist: "杰克逊·波洛克", date: "1950 年", medium: "布面瓷漆",
look: "退后看节奏；凑近看黑、白、棕、青层层缠绕。没有中心，没有焦点。",
context: "波洛克把画布铺在地上，绕着它走，一边倾倒、甩洒颜料。动作本身成了主题。从佩尔内布墓走到这里，艺术从为永恒而定的固定法则，变成了一个人在一瞬间移动的记录。" }
], side: [
{ title: "牛头骨：红、白、蓝", artist: "乔治亚·欧姬芙", date: "1931 年", medium: "布面油画",
look: "一具漂白的头骨悬浮在红、白、蓝条纹之前。",
context: "这是欧姬芙对“伟大的美国绘画”之说半开玩笑的回应，头骨是她在新墨西哥沙漠里捡到的。在美国馆，2 层。" },
{ title: "比斯杰祖先柱", artist: "阿斯马特人，巴布亚", date: "约 1960 年", medium: "木、颜料、纤维",
look: "高耸的雕刻祖先柱，层层叠叠刻满人物，顶端是镂空的“翅膀”。",
context: "为纪念新近亡者的宴会而作，之后任其回归森林。1961 年收集，后来成为洛克菲勒馆的藏品——提醒我们，“现代”艺术同时在世界各地发生。" }
] }
],
trans: [
{ headline: "从遵循法则到用眼睛看", walk: "穿过大厅往回走，一直走到南侧，进入希腊罗马展厅。", points: [
"早期希腊雕塑家向埃及学习：最早的希腊雕像借用了埃及的站姿、紧握的双拳和迈步的姿态。",
"但希腊城邦看重辩论、运动和公民个人。哲学家追问世界究竟是什么样子，艺术家也开始拿真实的身体去检验旧法则。",
"大约公元前 600 到前 400 年间，僵硬的姿势放松成重心落在一条腿上的自然站姿。目标从“你知道的”转向“你看到的”。"] },
{ headline: "从身体到灵魂", walk: "回到大厅，从大楼梯下方穿过，进入中世纪展厅。", points: [
"基督教——313 年合法化，不久成为帝国国教——改变了图像的用途。",
"西罗马帝国在 5 世纪瓦解。修道院和后来的大教堂成了艺术的大买家；在东方（拜占庭），罗马传统延续了下去。",
"艺术的任务变成指向这个世界之外：金色取代风景，人物变得扁平，大小表示神圣程度。这不是技艺的退步，而是目标的改变。"] },
{ headline: "重生：重新审视自然与古人", walk: "从大厅爬上大楼梯，到达 2 层的 600 号展厅。", points: [
"贸易让佛罗伦萨等意大利城市富裕起来。美第奇这样的银行家族出钱订制艺术，既彰显信仰也彰显权力。",
"学者重新发现了古希腊罗马的著作。这种“人文主义”把人的经验重新放回中心。",
"新工具登场：线性透视（1420 年代）让空间可以测量，尼德兰画家完善了油画颜料，画出发光的细节。"] },
{ headline: "从平静的和谐到戏剧性", walk: "留在欧洲绘画展区；17 世纪的作品挂在 614–625 号展厅。", points: [
"新教改革让欧洲分裂。天主教会展开反击，要求宗教图像清晰易懂、扣人心弦。",
"国王们想要震撼人心的艺术。与此同时，在信奉新教的荷兰共和国，中产阶级买家想要肖像、风景和日常生活场景。",
"结果就是：深暗中的聚光灯照明、对角线的动作、在瞬间被捕捉的真实人物。"] },
{ headline: "从宏伟到理性——再回到情感", walk: "前往大楼梯顶端附近的 631–641 号展厅。", points: [
"18 世纪，洛可可把巴洛克的戏剧性变成了献给法国贵族的粉彩嬉戏。",
"启蒙运动予以反击。赫库兰尼姆（1738 年）和庞贝（1748 年）的发掘点燃了新古典主义——简洁的线条、公民美德、古代英雄——这是美国和法国革命的样子。",
"当理性、革命和工厂都令人失望时，浪漫主义转而颂扬情感、狂野的自然和想象力。"] },
{ headline: "绘画不必再临摹现实", walk: "继续穿过 19 世纪展厅（800 号段）。", points: [
"摄影（1839 年）能更快更便宜地留下肖像，于是画家开始问：什么是只有绘画才能做到的？",
"工业化的巴黎——火车、新建的林荫大道、咖啡馆、周末休闲——提供了新题材，管装颜料让户外写生变得轻松。",
"官方沙龙一再拒绝新观念，艺术家便自己办展：1863 年的落选者沙龙，然后是 1874 年第一届印象派展。日本版画教会了他们平涂色彩和大胆裁切。"] },
{ headline: "把画面拆开", walk: "现代艺术馆因施工关闭。走大楼梯下楼，向西穿过中世纪雕塑大厅到莱曼馆，再下到 G 层（963–965 号展厅）。", points: [
"塞尚的几何，加上非洲和古代伊比利亚雕塑，推动毕加索和布拉克走向立体主义（约 1907–14 年）：同时呈现多个视角。",
"爱因斯坦、弗洛伊德和第一次世界大战动摇了人们对现实的确信。康定斯基等艺术家开始问：仅凭色彩和线条能否承载意义？",
"第二次世界大战后，艺术世界的中心从巴黎移到纽约，画家把作画这一行为本身变成了主题。"] }
]
};

// ---------- swapping ----------
const I18N = (function () {
  const FIELDS = ["title", "short", "artist", "date", "medium", "gallery", "status", "look", "context", "imgNote"];
  function pick(o, keys) { const r = {}; keys.forEach(function (k) { if (o[k] != null) r[k] = o[k]; }); return r; }
  const EN = {
    eras: ERAS.map(function (er) {
      return { f: pick(er, ["name", "dates", "where", "trend", "why", "walk"]),
        stops: er.stops.map(function (s) { return pick(s, FIELDS); }),
        side: er.side.map(function (s) { return pick(s, FIELDS); }) };
    }),
    trans: TRANS.map(function (x) { return { headline: x.headline, walk: x.walk, points: x.points.slice() }; }),
    depts: DEPTS.map(function (d) { return { name: d.name, nums: d.nums }; }),
    markers: { 1: MARKERS[1].map(function (m) { return m.label; }), 2: MARKERS[2].map(function (m) { return m.label; }) }
  };
  function zhGallery(g) {
    if (!g) return g;
    if (g === "Gallery not listed") return "暂无展厅信息";
    const m = g.match(/^Gallery (\d+)(?: · Floor (\w))?$/);
    return m ? (m[2] ? m[2] + " 层 · " : "") + m[1] + " 号展厅" : g;
  }
  function zhNums(n) { return n.replace(/^(\d+)s$/, "$1 号段"); }
  function zhStop(en, zh) {
    const o = Object.assign({}, en, zh || {});
    o.gallery = zhGallery(en.gallery);
    if (en.imgNote) o.imgNote = ZH.imgNote[en.imgNote] || en.imgNote;
    return o;
  }
  function apply(lang) {
    const zh = lang === "zh";
    ERAS.forEach(function (er, e) {
      const en = EN.eras[e], z = ZH.eras[e];
      Object.assign(er, zh ? Object.assign({}, en.f, pick(z, ["name", "dates", "where", "trend", "why", "walk"])) : en.f);
      er.stops.forEach(function (s, i) { Object.assign(s, zh ? zhStop(en.stops[i], z.stops[i]) : en.stops[i]); });
      er.side.forEach(function (s, i) { Object.assign(s, zh ? zhStop(en.side[i], z.side[i]) : en.side[i]); });
    });
    TRANS.forEach(function (x, i) { const src = zh ? ZH.trans[i] : EN.trans[i]; x.headline = src.headline; x.walk = src.walk; x.points = src.points.slice(); });
    DEPTS.forEach(function (d, i) {
      const en = EN.depts[i];
      d.name = zh && ZH.depts[d.id] != null ? ZH.depts[d.id] : en.name;
      d.nums = zh ? zhNums(en.nums) : en.nums;
    });
    [1, 2].forEach(function (f) { MARKERS[f].forEach(function (m, i) { const en = EN.markers[f][i]; m.label = zh ? (ZH.markers[en] || en) : en; }); });
  }
  function staticText() {
    document.documentElement.lang = LANG === "zh" ? "zh-CN" : "en";
    document.title = t("docTitle");
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === LANG ? "true" : "false"); });
  }
  function set(lang) {
    LANG = lang === "zh" ? "zh" : "en";
    try { localStorage.setItem("lang", LANG); } catch (e) {}
    apply(LANG);
    staticText();
    if (window.__rerender) window.__rerender();
  }
  let initial = "en";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem("lang");
    if (q === "zh" || q === "en") initial = q;
    else if (saved === "zh" || saved === "en") initial = saved;
    else if (/^zh/i.test(navigator.language || "")) initial = "zh";
  } catch (e) {}
  LANG = initial;
  apply(LANG);
  document.addEventListener("click", function (ev) {
    const b = ev.target.closest("[data-lang]");
    if (b) set(b.getAttribute("data-lang"));
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", staticText); else staticText();
  return { set: set };
})();
