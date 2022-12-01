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
    let parse = json["response"]["body"]["items"]["item"][0];
    let address = parse["happenPlace"];
    let kind = parse["kindCd"];
    let gender = parse["sexCd"];
    let neuter = parse["neuterYn"];
    console.log(gender);
    console.log(address);
    console.log(kind);
    console.log(neuter);
    
}