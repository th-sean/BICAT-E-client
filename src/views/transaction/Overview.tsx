import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

const Overview = () => {
  return (
    <>
      <Card>
        <Card sx={{ position: 'relative' }}>
          <CardContent>
            <Typography variant='h6'>Current Balance</Typography>
            
            <Typography variant='h4' sx={{ my: 4, color: 'primary.main' }}>
                $855,263
            </Typography>
            <Button size='small' variant='contained'>
              View Detail
            </Button>
            
          </CardContent>
        </Card>
      </Card>
    </>
  )
}

export default Overview
