import { createHmac } from 'crypto'
const secret = 'woshinibaba'

export default {
  md5(val: string) {
    return createHmac('sha256', secret).update(val).digest('hex')
  },
}
