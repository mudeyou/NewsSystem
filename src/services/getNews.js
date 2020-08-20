import axios from 'axios';
import {APPCODE} from './codeConfig';

//获取新闻种类
export async function getNewsType() {
    var a = await axios.get("http://ali-news.showapi.com/channelList", {
        headers: {
            Authorization:`APPCODE ${APPCODE}`
        }
    });

    return (a.data.showapi_res_body.channelList);
}

//获取新闻信息
// 参数：新闻ID、默认页数、每页最大请求数
export async function getNews(channelId, page, maxResult) {
    var b = await axios.get("http://ali-news.showapi.com/newsList", {
        headers: {
            Authorization:`APPCODE ${APPCODE}`
        },
        params: {
            channelId,
            page,
            maxResult,
            // needAllList:false,
            needContent: 1
        }
    });
    return b.data.showapi_res_body.pagebean;
}

