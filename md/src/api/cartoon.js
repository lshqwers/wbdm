// 专门处理 漫画相关的接口请求
// 在接口中引用封装好的二次axios的实列
// 暴露的实列
import request from '@/untils/request'
// 获取轮播图  不是默认暴露,所以可以暴露多个
export const getBanner = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
  // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
  // http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5
    url: '/api/wbcomic/home/page_recommend_list',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      mca: 'h5_recommend_male',
      _type: 'h5'
    }
  })
}
// 因为不是默认暴露,可以暴露多个
// 获取首页推荐的数据
export const getIndexRecommend = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
    // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
    // https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
    url: '/api/comic_v2/customerview',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      viewtype: 1
    }
  })
}
// export const getIndexRecommend = (apptype,appversion,channel,viewtype) => {
//   // return的是接口调用之后,axios返回的Promise的对象
//   return request({
//     // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
//     // https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
//       url: '/rec/comic_v2/customerview',
//       method: 'GET',
//       // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
//       params: {
//         apptype: apptype, // 这种参数不是写死的
//         appversion: appversion,
//         channel: channel,
//         viewtype: viewtype
//       }
//     })
// }
// 因为不是默认暴露,可以暴露多个
// 获取首页推荐的数据
// export const getIndexRecommend = () => {
//   // return的是接口调用之后,axios返回的Promise的对象
//   return request({
//     // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
//     //http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5
//     url: '/api/comic_v2/customerview',
//     method: 'GET',
//     // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
//     params: {
//       apptype: 8,
//       appversion: '1.0',
//       channel: 'web-app',
//       viewtype: 1
//     }
//   })
// }
// wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5
// 因为不是默认暴露,可以暴露多个
// 获取首页推荐的数据
export const getIndexweek = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
    // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
    //  http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5
    url: '/weibo/wbcomic/comic/daypub_list',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      pub_day: '',
      page_num: 1,
      rows_num: 20,
      _type: 'h5'
    }
  })
}
export const getIndexmain = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
    // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
    // Request URL: http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5
    // http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5
    url: '/weibo/wbcomic/home/page_recommend_list',
    method: 'GET',
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    params: {
      mca: 'h5_recommend_male',
      _type: 'h5'
    }
  })
}
export const getIndexend = () => {
  // return的是接口调用之后,axios返回的Promise的对象
  return request({
    // ?直接写在了url的地址上面/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
    // Request URL: http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5
    // http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5
    // http://localhost:8080/weibo/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5
    url: '/weibo/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5',
    method: 'GET'
    // 需要请求的参数提供data,如果需要的是查询字符串参数, 就提供params 问号接受的是字符串
    // params: {
    //   location_en: 'ending_works_list',
    //   _type: 'h5'
    // }
  })
}
