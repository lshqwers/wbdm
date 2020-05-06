import request from '@/untils/request'
// Request URL: http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
export const getIndexrank = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
    // http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
    url: '/weibo/wbcomic/home/rank_readt',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      _type: 'h5'
    }
  })
}
