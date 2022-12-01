// 서울시 유기동물 조회api -> //https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?upr_cd=6110000&numOfRows=1000&pageNo=1&serviceKey=yBfIqoxQlERKqS%2BInfyI0%2BFFwfTBCLykO5xVDHRa5bH6Y4oklhcJxRlVfphIDcONn%2FuVbbEBRNorIdzVfSLWtg%3D%3D&_type=json
// 시도코드 upr_cd -> 6110000
// 페이지당 보여줄 개수 numOfRows=1000
// 페이지 번호 pageNo=1
// 서비스키 serviceKey=yBfIqoxQlERKqS%2BInfyI0%2BFFwfTBCLykO5xVDHRa5bH6Y4oklhcJxRlVfphIDcONn%2FuVbbEBRNorIdzVfSLWtg%3D%3D
// 보여줄 타입 _type=json

const link = "https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?upr_cd=6110000&numOfRows=1000&pageNo=1&serviceKey=yBfIqoxQlERKqS%2BInfyI0%2BFFwfTBCLykO5xVDHRa5bH6Y4oklhcJxRlVfphIDcONn%2FuVbbEBRNorIdzVfSLWtg%3D%3D&_type=json";

// 비동기로 호출하자
fetch(link).then((response) => response.json()).then((json) => console.log(json));

let getMenuByAPI = (link)=>{
    // XMLHttpRequest 만들자
    let xhr = new XMLHttpRequest();
    
    // callback
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            //리퀘스트가 다 끝나서 응답이 왔다면
            console.log("성공!");
            // console.log(xhr.response);
            show(xhr.response); // json 파싱함수 호출
        }else{
            //실패
        }
    }

    // 요청을 보낼 방식, link, 비동기여부 설정하자
    xhr.open("GET", link, true);

    // 요청 전송
    xhr.send();
}

getMenuByAPI(link);

const show = (jsonString) => {
    let json = JSON.parse(jsonString);
    let totalCount = json["response"]["body"]["totalCount"];
    let kinds = [];
    let sexs = [];
    let imgs = [];
    
    let finalCount = 0;
    
    for(let i = 0; i < totalCount; i++){
        let parse = json["response"]["body"]["items"]["item"][i];
        if (parse["processState"] == "보호중") {
            kinds[finalCount] = parse["kindCd"];
            sexs[finalCount] = parse["sexCd"];
            imgs[finalCount] = parse["popfile"];

            finalCount++;
        }
    }

    console.log(kinds)
    console.log(sexs)
    console.log(imgs)

     
    //totakCount 반복 index 반복
    //div 생성, class
    //imgbox
    //imgboxDiv.innerHTML = a태그 src=kinkds[index]
    //kindbox
    //genderbox

    

    for(let i = 0; i < finalCount; i++){
        let newElem = document.createElement("div");
        let newImg = newElem.createElement("img");
        let newSex = newElem.createElement("p");

    }

    // for(0~160){
    //     div추가
    //     class주고
    //     kinds[i]
    //     sexs[0]

    // }

    console.log(kinds[0])
    
}