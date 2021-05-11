import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import Icon from '../lib/icon/dist/filled/arrows-and-symbols/information'
import { Grid, Column } from '../lib/grid/dist/index'
import { H1 } from '../lib/text/dist/index'

import Button from './index'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default button', () => (
    <>
      <H1>Theme test</H1>
      <Grid>
        <Column xs={12} md={4}>
          <Button fullWidth size="extra-small">
            Extra-small button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            size="extra-small"
            icon={<Icon />}>
            Extra-small button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="extra-small" disabled>
            Extra-small disabled button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="small">
            Small button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            size="small"
            icon={<Icon />}>
            Small button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="small" disabled>
            Small disabled button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="medium">
            Medium / default button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            size="medium"
            icon={<Icon />}
            iconPlacement="right">
            Medium / default button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="medium" disabled>
            Medium / default disabled button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="large">
            Large button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            size="large"
            icon={<Icon />}
            iconPlacement="right">
            Large button with prop icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="large" disabled>
            Large disabled button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth appearance="action">
            An action button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth appearance="action">
            <Icon /> An action button
            with child icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth disabled appearance="action">
            A disabled action button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth appearance="destructive">
            A destructive button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            appearance="destructive"
            icon={<Icon />}
            iconPlacement="left">
            A destructive button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth disabled appearance="destructive">
            A disabled destructive button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth appearance="peripheral">
            A peripheral button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            appearance="peripheral"
            icon={<Icon />}>
            A peripheral button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth disabled appearance="peripheral">
            A disabled peripheral button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth importance="secondary">
            A secondary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            importance="secondary"
            icon={<Icon />}>
            A secondary button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth disabled importance="secondary">
            A disabled secondary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth importance="secondary" size="large">
            A large secondary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            importance="secondary"
            size="large"
            icon={<Icon />}>
            Large secondary with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth disabled importance="secondary" size="large">
            A large disabled secondary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth appearance="action" size="large">
            A large action button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            appearance="action"
            size="large"
            icon={<Icon />}>
            A large action with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth disabled appearance="action" size="large">
            A large disabled action button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth appearance="destructive" size="large">
            A large destructive button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            appearance="destructive"
            size="large"
            icon={<Icon />}>
            Large destructive with icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth disabled appearance="destructive" size="large">
            Large disabled destructive
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button importance="tertiary">A tertiary button</Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            importance="tertiary"
            icon={<Icon />}>
            A tertiary button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button importance="tertiary" disabled>
            A disabled tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="action" importance="tertiary">
            A tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            appearance="action"
            importance="tertiary"
            icon={<Icon />}>
            A tertiary button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="action" importance="tertiary" disabled>
            A disabled tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="destructive" importance="tertiary">
            A tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            appearance="destructive"
            importance="tertiary"
            icon={<Icon />}>
            A tertiary button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="destructive" importance="tertiary" disabled>
            A disabled tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="peripheral" importance="tertiary">
            A tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            appearance="peripheral"
            importance="tertiary"
            icon={<Icon />}>
            A tertiary button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="peripheral" importance="tertiary" disabled>
            A disabled tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button>An auto width button</Button>
        </Column>
        <Column xs={12} md={4}>
          <Button importance="secondary">
            An auto width secondary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button importance="tertiary">
            An auto width tertiary button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="action">An auto width action button</Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="action" importance="secondary">
            An auto width action secondary
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="action" importance="tertiary">
            An auto width action tertiary
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="destructive">
            An auto width destructive button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="destructive" importance="secondary">
            An auto width destructive secondary
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="destructive" importance="tertiary">
            An auto width destructive tertiary
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="peripheral">
            An auto width peripheral button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="peripheral" importance="secondary">
            An auto width peripheral secondary
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button appearance="peripheral" importance="tertiary">
            An auto width peripheral tertiary
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="medium" alignment="justify">
            Medium / default button
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button fullWidth size="medium" alignment="center">
            Medium Centered
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            size="medium"
            icon={<Icon />}
            iconPlacement="right"
            alignment="justify">
            Default button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            size="medium"
            icon={<Icon />}
            iconPlacement="left"
            alignment="justify">
            Default button with an icon
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            animateStateChange
            size="medium"
            icon={<Icon />}
            iconPlacement="left"
            alignment="justify">
            Default button animate
          </Button>
        </Column>
        <Column xs={12} md={4}>
          <Button
            fullWidth
            disabled
            animateStateChange
            size="medium"
            icon={<Icon />}
            iconPlacement="left"
            alignment="justify">
            Default button disabled animate
          </Button>
        </Column>
      </Grid>
    </>
  ))
  .add('Button with info', () => (
    <Grid>
      <Column xs={12}>
        <Button
          appearance={select(
            'Type',
            ['primary', 'action', 'destructive', 'peripheral'],
            'primary'
          )}
          size={select(
            'Size',
            ['extra-small', 'small', 'medium', 'large'],
            'medium'
          )}
          disabled={boolean('Disabled', false)}
          animateStateChange={boolean('Animate State change', false)}
          fullWidth={boolean('Full width', false)}
          icon={
            select('Icon', ['none', 'lotus'], '') === 'lotus' ? (
              <Icon />
            ) : undefined
          }
          iconPlacement={select('Icon placement', ['left', 'right'], 'left')}
          importance={select(
            'Importance',
            ['primary', 'secondary', 'tertiary'],
            'primary'
          )}>
          {text('Label', 'This is a button')}
        </Button>
      </Column>
    </Grid>
  ))
