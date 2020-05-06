import request from '@/untils/request'
// Request URL: http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
export const getIndexrank = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
    // http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
    url: '/weibo/wbcomic/home/rank_read',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      _type: 'h5'
    }
  })
}
export const getIndexend = () => {
  return request({
    url: '/weibo/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5',
    method: 'GET'
  })
}
// Request URL: http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
export const getIndexnew = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
  // http://manhua.weibo.cn/wbcomic/home/rank_share?_type=h5
    url: '/weibo/wbcomic/home/rank_share',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      _type: 'h5'
    }
  })
}
export const getIndexzh = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
  // http://manhua.weibo.cn/wbcomic/home/rank?_type=h5
    url: '/weibo/wbcomic/home/rank',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      _type: 'h5'
    }
  })
}
// 分类的接口
export const getIndexclassify = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
  // http://manhua.weibo.cn/wbcomic/comic/filter_list?_type=h5
    url: '/weibo/wbcomic/comic/filter_list',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      _type: 'h5'
    }
  })
}
// 分类的列表页数据的接口
// http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
// get请求
export const getIndexliebao = (cartId, endId, playId) => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
    url: '/weibo/wbcomic/comic/filter_result',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      cate_id: cartId,
      end_status: endId,
      comic_pay_status: playId,
      page_num: 1,
      rows_num: '20',
      order: '',
      _type: 'h5'
    }
  })
}
