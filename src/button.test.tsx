import React from 'react'

import { render, configure } from '@testing-library/react'
import { axe } from 'jest-axe'

import Icon from '../lib/icon/dist/index'

import Button from './index'

// TEST CONFIG: START
configure({ testIdAttribute: 'data-test-id' }) // react-testing-library default is data-testid, which is different to the ANZ standard

describe('<Button />', () => {
  it('Component should be rendered without crashing', async () => {
    const { container } = render(<Button>Button</Button>)
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a secondary button (importance)', async () => {
    const { container } = render(
      <Button importance="secondary">Button</Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as an action button', async () => {
    const { container } = render(
      <Button appearance="action">Button</Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a destructive button', async () => {
    const { container } = render(
      <Button appearance="destructive">Button</Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as an action+secondary button', async () => {
    const { container } = render(
      <Button appearance="action" importance="secondary">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a destructive+secondary button', async () => {
    const { container } = render(
      <Button appearance="destructive" importance="secondary">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as an peripheral+secondary button', async () => {
    const { container } = render(
      <Button appearance="peripheral" importance="secondary">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a medium button', async () => {
    const { container } = render(<Button size="medium">Button</Button>)
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a large button', async () => {
    const { container } = render(<Button size="large">Button</Button>)
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a extra-small button', async () => {
    const { container } = render(
      <Button size="extra-small">Button</Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a small button', async () => {
    const { container } = render(<Button size="small">Button</Button>)
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a full width button', async () => {
    const { container } = render(<Button fullWidth>Button</Button>)
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a tertiary button', async () => {
    const { container } = render(
      <Button importance="tertiary" name="aButton" id="aButton">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a tertiary action button', async () => {
    const { container } = render(
      <Button
        appearance="action"
        importance="tertiary"
        name="aButton"
        id="aButton">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a tertiary destructive button', async () => {
    const { container } = render(
      <Button
        appearance="destructive"
        importance="tertiary"
        name="aButton"
        id="aButton">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Component should be rendered as a tertiary peripheral button', async () => {
    const { container } = render(
      <Button
        appearance="peripheral"
        importance="tertiary"
        name="aButton"
        id="aButton">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: icon defaulting to left placement', async () => {
    const { container } = render(<Button icon="anz_logo">Button</Button>)
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: icon left', async () => {
    const { container } = render(
      <Button icon="anz_logo" iconPlacement="left">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: icon right', async () => {
    const { container } = render(
      <Button icon="anz_logo" iconPlacement="right">
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: icon as prop', async () => {
    const { container } = render(
      <Button icon={<Icon icon="banking-and-processes/action-menu" />}>
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: icon as child', async () => {
    const { container } = render(
      <Button title="Action menu">
        <Icon icon="banking-and-processes/action-menu" />
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: disabled', async () => {
    const { container } = render(
      <Button
        type="button"
        disabled
        value="test value"
        autoFocus
        onClick={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}>
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: disabled and animate', async () => {
    const { container } = render(
      <Button
        type="button"
        disabled
        animateStateChange
        value="test value"
        autoFocus
        onClick={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}>
        Button
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: aria accessible', async () => {
    const { container } = render(<Button ariaExpanded>Button</Button>)
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should match snapshot: Justify Centered', async () => {
    const { container } = render(
      <Button fullWidth size="medium" alignment="center">
        Medium Centered
      </Button>
    )
    expect(container).toMatchSnapshot()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
