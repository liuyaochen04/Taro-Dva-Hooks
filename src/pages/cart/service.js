import Request from '../../utils/request';

export const demo = data => {
  console.info("传入参数:",data);
  return Request({
    url: 'http://jiangmanxiang.top/etone-admin/mobileApi/helper/list',
    method: 'POST',
    data,
  })
};
