import React from 'react'
import PropTypes from 'prop-types'
import {join} from 'path'
import {Route, withRouter} from 'react-router-dom'
import {Box, FlexContainer, Heading} from '../../src'
import SideNav from './SideNav'

const Library = withRouter(props => {
  const {basename, examples: exampleMap, children, title, ...rest} = props

  const examples = Object.values(exampleMap).map(({name, element, path}) => ({
    name,
    element,
    path: path || join(basename, name)
  }))

  // this is a StaticRouter render prop; no need to pass it on
  delete rest.staticContext

  return (
    <FlexContainer {...rest}>
      <SideNav basename={basename} title={title} examples={examples} mr={4} />
      <Box>
        <Route
          exact
          path={basename}
          render={() => (
            <React.Fragment>
              <Heading is="h1" mb={3}>
                {title}
              </Heading>
              {children}
            </React.Fragment>
          )}
        />
        {examples.map(({name, element, path}) => (
          <Route
            key={name}
            path={path}
            render={() => (
              <React.Fragment>
                <Heading is="h1" mb={3}>
                  {name}
                </Heading>
                {element}
              </React.Fragment>
            )}
          />
        ))}
      </Box>
    </FlexContainer>
  )
})

const ExampleShape = PropTypes.shape({
  element: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string
})

Library.propTypes = {
  basename: PropTypes.string,
  children: PropTypes.node,
  examples: PropTypes.oneOfType([PropTypes.objectOf(ExampleShape), PropTypes.arrayOf(ExampleShape)]),
  title: PropTypes.node
}

export default Library
