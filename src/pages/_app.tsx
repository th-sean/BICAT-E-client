// ** React
import React, { useEffect } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

//** Next-Auth
import { SessionProvider } from 'next-auth/react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

// import { AnyARecord } from 'dns'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const ProtectedRoutes = ({ children }: any) => {
  //Get session
  const { data: session, status } = useSession()
  const isUserSignedIn = !!session
  const isPageLoading = status === 'loading'

  const router = useRouter()

  useEffect(() => {
    // If data is still loading, return
    if (isPageLoading) {
      return
    }

    // If not signed in and not on the login page, redirect to the login page
    if (!isUserSignedIn && router.pathname !== '/login') {
      signIn()
    }
  }, [isUserSignedIn, isPageLoading, router])

  if (isPageLoading) {
    return null
  }
  
  return children
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <SessionProvider session={pageProps.session} basePath='/pages/login'>
      <CacheProvider value={emotionCache}>
        <ProtectedRoutes>
          <Head>
            <title>{`${themeConfig.templateName} - AI-Powered Bookkeeping, Tax Filing `}</title>
            <meta
              name='description'
              content={`${themeConfig.templateName} – Streamline Your Finances with Cutting-Edge AI: The Ultimate App for High Net Worth Individuals, Automating Bookkeeping and Tax Filing`}
            />
            <meta name='keywords' content='AI-Powered Bookkeeping, Tax Filing' />
            <meta name='viewport' content='initial-scale=1, width=device-width' />
          </Head>

          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </ProtectedRoutes>
      </CacheProvider>
    </SessionProvider>
  )
}

export default App
