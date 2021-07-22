import request from '@/utils/request'

export function getDog() {
  return request({
    method: 'GET',
    url: '/api/breeds/image/random',
  })
}
