// 유기동물 조회
// bgnde : 유기날짜(시작)
// upkind : 축종코드
// upr_cd : 시도코드
// state : 보호상태
// kindCd : 품종
// colorCd : 색상
// age : 나이
// weight : 체중
const KEY = "rb7O7oSfVkWUcexLi2pn6VaPa82kTvaE3BtiP%2BBz21WfZGE4GVF%2BoCizRopEZjsi4vxBVpkGQa%2Fsx%2BT6PH3QyQ%3D%3D";
const upr_cd = "6110000";
const upkind = "417000";
let url = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?`
        + `KEY=${KEY}`
        + `upr_cd=${upr_cd}`
        + `upkind=${upkind}`;
console.log(url);