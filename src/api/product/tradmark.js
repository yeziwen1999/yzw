//品牌管理的接口 引入 axios
import request from '@/utils/request'

export const reqTradmarkList = (page, limit) => {
    return request({url:`/admin/product/baseTrademark/${page}/${limit}`,method:'get'})
}