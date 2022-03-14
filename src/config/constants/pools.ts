import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 137,
    stakingToken: tokens.bdz,
    earningToken: tokens.usdt,
    contractAddress: {
      97: '',
      56: '0x0032ceb978fe5fc8a5d5d6f5adfc005e76397e29',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '2.8935',
    isFinished: false,
  },
  {
    sousId: 19,
    stakingToken: tokens.bdz,
    earningToken: tokens.bnb,
    contractAddress: {
      97: '',
      56: '0x326D754c64329aD7cb35744770D56D0E1f3B3124',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0041',
    sortOrder: 999,
    isFinished: false,
  }
]

export default pools
