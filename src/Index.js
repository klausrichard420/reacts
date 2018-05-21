import React from 'react'
import {
  Provider as KitProvider,
  Library,
  Example
} from '@compositor/kit'
import Page from './Page'
import Box from './Box'
import ExampleBox from './ExampleBox'
import UtilityBox from './UtilityBox'
import Flex from './Flex'
import Heading from './Heading'
import Link from './Link'
import Button from './Button'
import ButtonLink from './ButtonLink'
import theme from './theme'
import Text from './Text'
import Flash from './Flash'
import CounterLabel from './CounterLabel'

const Index = props => (
  <Page>
    <KitProvider>
      <Library>
        <Library.Nav />
        <Example name="CounterLabel">
          <CounterLabel>
            12
          </CounterLabel>
          <CounterLabel theme={'gray'}>
            13
          </CounterLabel>
          <CounterLabel theme={'gray-light'}>
            13
          </CounterLabel>
        </Example>
        <Example name='Heading'>
          <Heading>
            Heading
          </Heading>
        </Example>
        <Example name='Link'>
          <Link href="https://github.com">
            Link
          </Link>
        </Example>
        <Example name='Box'>
          <Box p={3} bg='gray.1'> Box </Box>
        </Example>
        <Example name='Box maxWidths'>
          <Box p={3} bg='gray.1' maxWidth='small'> Box small </Box>
          <Box p={3} bg='gray.2' maxWidth='medium'> Box medium </Box>
          <Box p={3} bg='gray.1' maxWidth='large'> Box large </Box>
          <Box p={3} bg='gray.2' maxWidth='xlarge'> Box xlarge </Box>
        </Example>
        <Example name='UtilityBox'>
          <UtilityBox bg='green-light' my={4} p={4}>
            UtilityBox with Primer utilities as props
          </UtilityBox>
        </Example>
        <Example name='Button'>
          <Button onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='Button - small'>
          <Button size="small" onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='Button - large'>
          <Button size="large" onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='Button - danger'>
          <Button type="danger" onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='Button - primary'>
          <Button type="primary" onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='Button - outline'>
          <Button type="outline" onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='Button - full width'>
          <Button block onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='Button - styled as link'>
          <Button linkStyle onClick={() => window.alert('Clicked!')}> Button </Button>
        </Example>
        <Example name='ButtonLink'>
          <ButtonLink href="https://www.goatslive.com/">This is an {"<a>"} styled as a button</ButtonLink>
        </Example>
        <Example name='Flash themes'>
          <ExampleBox>
            <Flash>
              Flash
            </Flash>
            <Flash yellow>
              Flash yellow
            </Flash>
            <Flash red>
              Flash red
            </Flash>
            <Flash green>
              Flash green
            </Flash>
          </ExampleBox>
        </Example>
        <Example name='Flash full'>
          <Flash full>
            Flash full
          </Flash>
        </Example>
        <Example name='Font Sizes'>
          <Text fontSize={7}>
          fontSize 7
          </Text>
          <Text fontSize={6}>
          fontSize 6
          </Text>
          <Text fontSize={5}>
            fontSize 5
          </Text>
          <Text fontSize={4}>
            fontSize 4
          </Text>
          <Text fontSize={3}>
          fontSize 3
          </Text>
          <Text fontSize={2}>
          fontSize 2
          </Text>
          <Text fontSize={1}>
          fontSize 1
          </Text>
          <Text fontSize={0}>
          fontSize 0
          </Text>
        </Example>
        <Example name='Text'>
          <Text>
            Text
          </Text>
          <Text fontWeight='bold'>
            Text bold
          </Text>
          <Text color='green.5'>
            Text green
          </Text>
          <Text lineHeight={1.25}>
            Text lineHeight 1.25
          </Text>
          <Text fontSize={4}>
            Text fontSize 4
          </Text>
          <Text p={4}>
            Text padding 4
          </Text>
        </Example>
        <Example name='Colors'>
          <Flex>
            {theme.colors.gray.map((val, i) => (
              <div key={val}>
                <Box mt={3} p={6} m={1} bg={`gray.${i}`} />
                <Heading.h3 fontSize={2} px={1}>
                gray {i}
                </Heading.h3>
                <Text px={1}>
                  {val}
                </Text>
              </div>
            ))}
          </Flex>
          <Flex>
            {theme.colors.blue.map((val, i) => (
              <div key={val}>
                <Box mt={3} p={6} m={1} bg={`blue.${i}`} />
                <Heading.h3 fontSize={2} px={1}>
                blue {i}
                </Heading.h3>
                <Text px={1}>
                  {val}
                </Text>
              </div>
            ))}
          </Flex>
          <Flex>
            {theme.colors.green.map((val, i) => (
              <div key={val}>
                <Box mt={3} p={6} m={1} bg={`green.${i}`} />
                <Heading.h3 fontSize={2} px={1}>
                green {i}
                </Heading.h3>
                <Text px={1}>
                  {val}
                </Text>
              </div>
            ))}
          </Flex>
          <Flex>
            {theme.colors.purple.map((val, i) => (
              <div key={val}>
                <Box mt={3} p={6} m={1} bg={`purple.${i}`} />
                <Heading.h3 fontSize={2} px={1}>
                purple {i}
                </Heading.h3>
                <Text px={1}>
                  {val}
                </Text>
              </div>
            ))}
          </Flex>
          <Flex>
            {theme.colors.yellow.map((val, i) => (
              <div key={val}>
                <Box mt={3} p={6} m={1} bg={`yellow.${i}`} />
                <Heading.h3 fontSize={2} px={1}>
                yellow {i}
                </Heading.h3>
                <Text px={1}>
                  {val}
                </Text>
              </div>
            ))}
          </Flex>
          <Flex>
            {theme.colors.orange.map((val, i) => (
              <div key={val}>
                <Box mt={3} p={6} m={1} bg={`orange.${i}`} />
                <Heading.h3 fontSize={2} px={1}>
                orange {i}
                </Heading.h3>
                <Text px={1}>
                  {val}
                </Text>
              </div>
            ))}
          </Flex>
          <Flex>
            {theme.colors.red.map((val, i) => (
              <div key={val}>
                <Box mt={3} p={6} m={1} bg={`red.${i}`} />
                <Heading.h3 fontSize={2} px={1}>
                red {i}
                </Heading.h3>
                <Text px={1}>
                  {val}
                </Text>
              </div>
            ))}
          </Flex>
        </Example>
      </Library>
    </KitProvider>
  </Page>
)
export default Index
