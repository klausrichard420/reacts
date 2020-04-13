import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {GitMerge, GitPullRequest, IssueClosed, IssueOpened} from '@primer/octicons-react'
import {variant} from 'styled-system'
import theme, {colors} from './theme'
import {COMMON, get} from './constants'
import StyledOcticon from './StyledOcticon'

const statusMap = {
  issueClosed: get('colors.red.6'),
  pullClosed: get('colors.red.5'),
  pullMerged: get('colors.purple.5'),
  issueOpened: '#159739', // Custom green
  pullOpened: '#2cbe4e', // This was generated by a sass function in Primer, so using a hex here
  gray: get('colors.gray.5')
}

const octiconMap = {
  issueOpened: IssueOpened,
  pullOpened: GitPullRequest,
  issueClosed: IssueClosed,
  pullClosed: GitPullRequest,
  pullMerged: GitMerge
}

const sizeVariant = variant({
  variants: {
    small: {
      padding: `4px 8px`,
      fontSize: get('fontSizes.0')
    },
    large: {
      padding: `8px 12px`,
      fontSize: get('fontSizes.1')
    }
  }
})

function StateLabelBase({className, status, variant = 'large', children}) {
  const octiconProps = variant === 'small' ? {width: '1em'} : {}
  return (
    <span className={className}>
      {status && <StyledOcticon mr={1} {...octiconProps} icon={octiconMap[status]} />}
      {children}
    </span>
  )
}

const StateLabel = styled(StateLabelBase)`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  line-height: 16px;
  color: ${colors.white};
  text-align: center;
  background-color: ${props => (props.status ? statusMap[props.status] : statusMap.gray)};
  border-radius: ${get('radii.3')};
  ${sizeVariant}
  ${COMMON};
`

StateLabel.defaultProps = {
  theme,
  variant: 'large'
}

StateLabel.propTypes = {
  status: PropTypes.oneOf(['issueOpened', 'pullOpened', 'issueClosed', 'pullClosed', 'pullMerged']),
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['small', 'large']),
  ...COMMON.propTypes
}

export default StateLabel
