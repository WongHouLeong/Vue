import axios from 'axios';
//取变量定义
const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;
//HttpGet Demo
export async function HttpGetDemo(param1) {
    try {
        const response = await axios.get(`${apiBaseUrl}/api/Survey/GetMemberByOrgaId`, {
            params: {
                orgaid: param1
            }
        });
        return response;
    } catch (error) {
        console.error(error);//打印API错误原因
        throw error;//抛出异常，让外层try catch捕捉
    }
}

//HttpPost + Token Demo
export async function HttpPostDemo() {
    try {
        const response = await axios.post(`${apiBaseUrl}/api/Survey/GetReviewList`, {
            "name": "string",
            "school": "string",
            "fromDate": "2023-03-17T18:53:41.895Z",
            "endDate": "2023-03-17T18:53:41.895Z",
            "idCard": "string"
        },
            {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjoid21sIiwiVHJ1ZU5hbWUiOiLkvI3nvo7pvpkiLCJPcmdhSWQiOiIxMCIsIm5iZiI6MTY3OTA3OTY3MSwiZXhwIjoxNjc5MDgwODcxLCJpc3MiOiJWT1QiLCJhdWQiOiJWb3RgcyBVc2VyIn0.xVrZP9WSUxEWRuZTSyr1f_KOTaqFL8vrwjFRb2pskRI`
                }
            }
        );
        return response;
    } catch (error) {
        console.error(error);//打印API错误原因
        throw error;//抛出异常，让外层try catch捕捉
    }
}