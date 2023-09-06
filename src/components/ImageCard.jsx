import { Image, Card, Text, Group } from '@mantine/core'

export const ImageCard = ({ character }) => {
  return (
    <Card
      radius='md'
      withBorder
      padding='xs'
      style={{ width: '20rem', margin: '1rem' }}
    >
      <Card.Section>
        <Image src={character?.url} height={220} />
      </Card.Section>
      <Group position='apart' mt='lg'>
        <Text fw={500} fz='lg'>
          {character?.name}
        </Text>
        <Text fw={200} fz='md'>
          {character?.comment}
        </Text>
      </Group>
    </Card>
  )
}
