import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Image } from '@pancakeswap/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import { useTranslation } from 'contexts/Localization'

import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
import PoolCard from './components/PoolCard'
import HelpButton from './components/HelpButton'


const Pools: React.FC = () => {

  const { t } = useTranslation()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { currentBlock } = useBlock()
  

  const [openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || currentBlock > pool.endBlock),
    [currentBlock, pools],
  )


const path = '/token.png'
  return (
    <>
  
      <PageHeader background='linear-gradient(90deg, #b90404, #3c0202)'>
        <Flex justifyContent="space-between" flexDirection={['column', null, 'row']}>
          <Flex flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
            <Flex alignItems="center" >
              <Image src={path} width={64} height={64} />
              {t('Pools')}              
            </Flex>  
            </Heading>
            <Heading scale="md" color="text">
              {t('Just stake some tokens to earn.')}
            </Heading>
            <Heading scale="md" color="text">
              {t('High APR, low risk.')}
            </Heading>
          </Flex>
          <Flex height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
            < HelpButton/>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
    
        <FlexLayout>
          
            <>
              
              {                
               orderBy(openPools, ['sortOrder']).map((pool) => (
                    <PoolCard key={pool.sousId} pool={pool} account={account} />
              ))}
            </>
          
          
        </FlexLayout>
      
      </Page>
    </>
  )
}

export default Pools
