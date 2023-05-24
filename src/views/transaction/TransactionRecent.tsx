// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider, { DividerProps } from '@mui/material/Divider'


interface DataType {
  logo: string
  title: string
  amount: string
  subtitle: string
  logoWidth: number
  logoHeight: number
}

const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: '+$4,650',
    subtitle: 'Sell UI Kit',
    title: 'Gumroad Account',
    logo: '/images/logos/gumroad.png'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$92,705',
    title: 'Mastercard',
    subtitle: 'Wallet deposit',
    logo: '/images/logos/mastercard-label.png'
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: '+$957',
    title: 'Stripe Account',
    subtitle: 'iOS Application',
    logo: '/images/logos/stripe.png'
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: '+$6,837',
    title: 'American Bank',
    subtitle: 'Bank Transfer',
    logo: '/images/logos/american-bank.png'
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    amount: '+$446',
    title: 'Bank Account',
    subtitle: 'Wallet deposit',
    logo: '/images/logos/citi-bank.png'
  }
]

const RecentTransaction = () => {
  return (
    <>
   
      {/* Transaction by Month */}
      <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
        <Box sx={{ width: '100%' }}>
          <CardHeader
            title='February 2023'
            sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
            action={<Typography variant='caption'>View All</Typography>}
            titleTypographyProps={{
              variant: 'h6',
              sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
            }}
          />
          <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
            {depositData.map((item: DataType, index: number) => {
              return (
                <Box
                  key={item.title}
                  sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
                >
                  <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                    <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                  </Box>
                  <Box
                    sx={{
                      ml: 4,
                      width: '100%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                      <Typography variant='caption'>{item.subtitle}</Typography>
                    </Box>
                    <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                      {item.amount}
                    </Typography>
                  </Box>
                </Box>
              )
            })}
          </CardContent>
        </Box>
      </Card>
      
    </>
  )
}

export default RecentTransaction
