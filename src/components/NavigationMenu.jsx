import { Button, Menu, Avatar, useMantineTheme } from '@mantine/core'
import { IconStar, IconChevronDown, IconPhoto } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export function HeaderMegaMenu() {
  const theme = useMantineTheme()
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu
        transitionProps={{ transition: 'pop-top-right' }}
        position='top-end'
        width={220}
        withinPortal
      >
        <Link to={'/'}>
          <Button
            pr={25}
            color='pink'
            style={{
              marginRight: '5rem',
              marginLeft: '5rem',
              marginTop: '1rem',
            }}
          >
            Home
          </Button>
        </Link>
        <Menu.Target>
          <Button
            rightIcon={<IconChevronDown size='1.05rem' stroke={1.5} />}
            pr={12}
            color='pink'
            style={{
              marginRight: '5rem',
              marginLeft: '5rem',
              marginTop: '1rem',
            }}
          >
            Ponies
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Link to={'/alicorn'}>
            <Menu.Item icon={<IconStar size='1rem' color='violet' />}>
              Alicorn
            </Menu.Item>
          </Link>
          <Link to={'/unicorn'}>
            <Menu.Item icon={<IconStar size='1rem' color='cyan' />}>
              Unicorn
            </Menu.Item>
          </Link>
          <Link to={'/characters'}>
            <Menu.Item icon={<IconStar size='1rem' color='pink' />}>
              All Ponies
            </Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>
      <Link to={'/gallery'}>
        <Button
          style={{ marginRight: '5rem', marginLeft: '5rem', marginTop: '1rem' }}
          leftIcon={<IconPhoto size='0.7rem' />}
          pr={25}
          color='pink'
        >
          Gallery
        </Button>
      </Link>
    </div>
  )
}
