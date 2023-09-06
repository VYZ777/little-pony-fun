import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { IconStar } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}))

export const CarouselCard = ({ character }) => {
  const { classes } = useStyles()
  return (
    <Card
      radius='md'
      withBorder
      padding='xs'
      style={{ width: '20rem', margin: '1rem' }}
    >
      <Card.Section>
        <Carousel
          width='100%'
          height={'200px'}
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {character?.image?.map((el, index) => (
            <Carousel.Slide key={el + index} height={'400px'}>
              <Image src={el} height={220} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Card.Section>
      <Group position='apart' mt='lg'>
        <Text fw={500} fz='lg'>
          {character?.name}
        </Text>
        <Group spacing={5}>
          <IconStar size='1rem' />
          <Text fz='xs' fw={500}>
            {character?.sex}
          </Text>
        </Group>
      </Group>

      <Text fz='sm' c='dimmed' mt='sm'>
        {character?.occupation?.length > 100
          ? character?.occupation.slice(0, 100) + '...'
          : character?.occupation}{' '}
      </Text>

      <Group position='apart' mt='md'>
        <div>
          <Text fz='xl' span fw={500} className={classes.price}>
            {character?.kind.toString()}
          </Text>
          <Text span fz='sm' c='dimmed'>
            {' '}
            / kind
          </Text>
        </div>
        <Link to={character?.url}>
          <Button radius='md'>Go to Wiki</Button>
        </Link>
      </Group>
    </Card>
  )
}
