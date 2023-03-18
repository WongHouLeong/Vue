import axios from 'axios';
import router from '@/router.js'
// 创建一个 axios 实例
const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,//取变量定义
});

//拦截器
apiClient.interceptors.response.use(
    (response) => {
        // 如果请求成功，直接返回响应数据
        return response;
    },
    (error) => {
        // 如果返回错误码为 401，提示会话过期并返回登录页面
        if (error.response && error.response.status === 401) {
            alert('会话过期，请重新登录');
            router.push({ name: 'LoginPage' });
        }
        // 返回一个拒绝的 Promise，使得调用者可以处理错误，相当于抛出异常
        return Promise.reject(error);
    }
);

//HttpGet Demo
export async function HttpGetDemo(param1) {
    try {
        const response = await apiClient.get("/api/Survey/GetMemberByOrgaId", {
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
        const response = await apiClient.post("/api/Survey/GetReviewList", {
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