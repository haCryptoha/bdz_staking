import React from 'react'
import styled from 'styled-components'
import {

  
  Button,
  HelpIcon,

  Text,
  Flex,

  Link as UiKitLink,
} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const ButtonText = styled(Text)`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

const StyledLink = styled(UiKitLink)`
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`


const HelpButton = ()=>{

  const { t } = useTranslation()
  return(
    <Flex ml="24px" alignItems="center" justifyContent="flex-end">
        <StyledLink external href="/">
          <Button px={['14px', null, null, null, '20px']} variant="subtle">
            <ButtonText color="backgroundAlt" bold fontSize="16px">
              {t('Help')}
            </ButtonText>
            <HelpIcon color="backgroundAlt" ml={[null, null, null, 0, '6px']} />
          </Button>
        </StyledLink>
      </Flex>
  )
}
export default HelpButton