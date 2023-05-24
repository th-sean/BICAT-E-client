import RecentTransaction from 'src/views/transaction/TransactionRecent'
import Pending from 'src/views/transaction/TransactionPending'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import Overview from 'src/views/transaction/Overview'
import Detail from 'src/views/transaction/TransactionDetail'

const transaction = () => {
  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Overview />
          </Grid>
          <Grid item xs={12} md={4}>
            <Pending />
          </Grid>

          <Grid item xs={12} md={4}>
            <RecentTransaction />
          </Grid>
          <Grid item xs={12} md={12}>
            <Detail />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    </>
  )
}

export default transaction
