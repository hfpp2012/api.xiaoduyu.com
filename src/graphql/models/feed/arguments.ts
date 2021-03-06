import * as ParseParams from '../../common/parse-params';

// 查询
export const feed = {
  user_id: (data: string) => ({
    typename: 'query',
    name: 'user_id',
    value: ParseParams.id(data),
    type: 'ID',
    desc:'ID'
  }),
  posts_id: (data: string) => ({
    typename: 'query',
    name: 'posts_id',
    value: ParseParams.id(data),
    type: 'ID',
    desc:'帖子ID'
  }),
  comment_id: (data: string) => ({
    typename: 'query',
    name: 'comment_id',
    value: ParseParams.id(data),
    type: 'ID',
    desc:'评论ID'
  }),
  // 因为int类型长度大于11位，graphql 会认为格式不是int
  start_create_at: (data: string) => ({
    typename: 'query',
    name: 'create_at',
    value: { '$gte': data },
    type: 'String',
    desc:'开始日期'
  }),
  end_create_at: (data: string) => ({
    typename: 'query',
    name: 'create_at',
    value: { '$lte': data },
    type: 'String',
    desc:'结束日期'
  }),
  preference: (data: boolean) => ({
    typename: 'query',
    name: '',
    value: '',
    type: 'Boolean',
    desc:'偏好(登陆用户首页的信息流)'
  }),
  page_number: (data: number) => ({
    typename: 'option',
    name: 'skip',
    value: data - 1 >= 0 ? data - 1 : 0,
    type: 'Int',
    desc:'第几页'
  }),
  page_size: (data: number) => ({
    typename: 'option',
    name: 'limit',
    value: data,
    type: 'Int',
    desc:'每页数量'
  }),
  sort_by: (data: string) => ({
    typename: 'option',
    name: 'sort',
    value: ParseParams.sortBy(data),
    type: 'String',
    desc:'排序方式: create_at:1,comment_count:-1,like_count:1'
  })
}