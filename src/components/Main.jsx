import { HeaderMegaMenu } from './NavigationMenu'
import { Image } from '@mantine/core'

const Main = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '30rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{
            width: '30rem',
            height: '15rem',
          }}
          src={
            'https://1000logos.net/wp-content/uploads/2023/01/My-Little-Pony-logo.png'
          }
        />
      </div>
      <div style={{ flex: 1, marginTop: '10rem' }}>
        <HeaderMegaMenu />
      </div>
    </div>
  )
}

export default Main
