function getSOTD() {
    return { name: "song1", url: "https://soundcloud.com/linkin_park/numb" }
}
export const SOTD = getSOTD();
// function T() {
//     let scWid = SC.Widget("soundcloud" + h.id);
//     scWid.bind(SC.Widget.Events.READY, function () {
//         y.getCurrentSound(function (e) {
//             "BLOCK" === e.policy && n(9, (g = !0)), c("updateSong", { currentSong: e });
//         }),
//             y.bind(SC.Widget.Events.PAUSE, function () {
//                 $(!1);
//             }),
//             y.bind(SC.Widget.Events.PLAY, function () {
//                 b || (pe("startGame", { name: "startGame" }), pe("startGame#" + h.id, { name: "startGame" }), (b = !0)), $(!0), n(12, (x = !0));
//             }),
//             y.bind(SC.Widget.Events.PLAY_PROGRESS, function (e) {
//                 n(11, (w = e.currentPosition)),
//                     1 == s ? (p.isPrime ? (n(10, (v = (w / u) * 100)), w > u && M()) : (n(10, (v = (w / (d * f.attemptInterval)) * 100)), w > d * f.attemptInterval && M())) : (n(10, (v = (w / m) * 100)), w > m && M());
//             });
//     });
// }

// P(() => {
//     const e = document.createElement("iframe");
//     (e.name = h.id),
//         (e.id = "soundcloud" + h.id),
//         (e.allow = "autoplay"),
//         (e.height = 0),
//         (e.src = "https://w.soundcloud.com/player/?url=" + h.url + "&cache=" + h.id),
//         D.appendChild(e),
//         (_ = !0),
//         k &&
//             (setTimeout(() => {
//                 n(13, (S = !0));
//             }, 6e3),
//             T());
// });

// y.toggle()
// y.seekTo(0), y.play();