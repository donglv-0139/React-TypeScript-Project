import React, { useContext } from 'react'
import { Box } from '@material-ui/core'
import { AuthContext } from '../contexts/AuthContext'

interface WelcomeMessageProps {
    position: string
    country?: string
}

const WelcomeMessage = ({position, country = 'VietNam'}: WelcomeMessageProps) => {
  //useContext
  const {authInfo: {userName}} = useContext(AuthContext) 

  return (
    <Box mb={1}>
        Welcome {userName} {position} from {country}
    </Box>
  )
}

export default WelcomeMessage