import { js } from '@/utils'

export default js(require.context('./map/', true, /\.js$/))

