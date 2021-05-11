import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../lib/design-tokens/build/js/design-tokens.css'

export const button = style({
  fontFamily: vars.components.button.fontfamily,
  fontWeight: vars.components.button.fontweight,
  borderRadius: vars.components.button.radius,
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: vars.components.button.fontsize,
  letterSpacing: '-0.3px',
  lineHeight: vars.components.button.lineheight,
  padding: `${vars.components.button.padding.y} ${vars.components.button.padding.x}`,
  userSelect: 'none',
  color: vars.components.button.color.default,
  backgroundColor: vars.components.button.backgroundcolor.default,
  borderWidth: vars.components.button.borderWidth.default,
  borderColor: vars.components.button.bordercolor.default,
  borderStyle: vars.components.button.borderStyle.default,
  transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
  outline: 'none',
  whiteSpace: 'nowrap',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',

  ':hover': {
    backgroundColor: vars.components.button.backgroundcolor.hover,
    borderColor: vars.components.button.bordercolor.hover,
    color: vars.components.button.color.hover
  },
  ':focus': {
    backgroundColor: vars.components.button.backgroundcolor.hover,
    borderColor: vars.components.button.bordercolor.hover,
    color: vars.components.button.color.hover
  },

  ':active': {
    backgroundColor: vars.components.button.backgroundcolor.active,
    borderColor: vars.components.button.bordercolor.active,
    color: vars.components.button.color.active
  },

  selectors: {
    '&[disabled]': {
      cursor: 'not-allowed',
      backgroundColor: vars.components.button.backgroundcolor.disabled,
      borderColor: vars.components.button.bordercolor.disabled,
      color: vars.components.button.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor: vars.components.button.backgroundcolor.disabled,
      borderColor: vars.components.button.bordercolor.disabled,
      color: vars.components.button.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor: vars.components.button.backgroundcolor.disabled,
      borderColor: vars.components.button.bordercolor.disabled,
      color: vars.components.button.color.disabled
    }
  }
})

export const secondary = style({
  backgroundColor: vars.components.button.secondary.backgroundcolor.default,
  borderColor: vars.components.button.secondary.bordercolor.default,
  color: vars.components.button.secondary.color.default,

  ':hover': {
    backgroundColor: vars.components.button.secondary.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.bordercolor.hover,
    color: vars.components.button.secondary.color.hover
  },
  ':focus': {
    backgroundColor: vars.components.button.secondary.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.bordercolor.hover,
    color: vars.components.button.secondary.color.hover
  },

  ':active': {
    backgroundColor: vars.components.button.secondary.backgroundcolor.active,
    borderColor: vars.components.button.secondary.bordercolor.active,
    color: vars.components.button.secondary.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.secondary.backgroundcolor.disabled,
      borderColor: vars.components.button.secondary.bordercolor.disabled,
      color: vars.components.button.secondary.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.secondary.backgroundcolor.disabled,
      borderColor: vars.components.button.secondary.bordercolor.disabled,
      color: vars.components.button.secondary.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.secondary.backgroundcolor.disabled,
      borderColor: vars.components.button.secondary.bordercolor.disabled,
      color: vars.components.button.secondary.color.disabled
    }
  }
})

const stateChangeKeyframes = keyframes({
  from: {
    backgroundColor: vars.components.button.backgroundcolor.disabled,
    borderColor: vars.components.button.bordercolor.disabled,
    color: vars.components.button.color.disabled
  },
  to: {
    backgroundColor: vars.components.button.backgroundcolor.default,
    borderColor: vars.components.button.bordercolor.default,
    color: vars.components.button.color.default
  }
})

const stateChangeDisabledKeyframes = keyframes({
  from: {
    backgroundColor: vars.components.button.backgroundcolor.default,
    borderColor: vars.components.button.bordercolor.default,
    color: vars.components.button.color.default
  },
  to: {
    backgroundColor: vars.components.button.backgroundcolor.disabled,
    borderColor: vars.components.button.bordercolor.disabled,
    color: vars.components.button.color.disabled
  }
})

export const animateStateChange = style({
  animation: `${stateChangeKeyframes} ease-in-out`,
  animationDuration: vars.components.button.animatestate.duration,

  selectors: {
    '&[disabled]': {
      animation: `${stateChangeDisabledKeyframes} 0.3s ease-in-out`
    }
  }
})

export const tertiary = style({
  backgroundColor: vars.components.button.tertiary.backgroundcolor.default,
  borderColor: vars.components.button.tertiary.bordercolor.default,
  color: vars.components.button.tertiary.color.default,

  ':hover': {
    backgroundColor: vars.components.button.tertiary.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.bordercolor.hover,
    color: vars.components.button.tertiary.color.hover,
    textDecoration: vars.components.button.tertiary.decoration.hover
  },
  ':focus': {
    backgroundColor: vars.components.button.tertiary.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.bordercolor.hover,
    color: vars.components.button.tertiary.color.hover,
    textDecoration: vars.components.button.tertiary.decoration.hover
  },

  ':active': {
    backgroundColor: vars.components.button.tertiary.backgroundcolor.active,
    borderColor: vars.components.button.tertiary.bordercolor.active,
    color: vars.components.button.tertiary.color.active,
    textDecoration: vars.components.button.tertiary.decoration.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor: vars.components.button.tertiary.backgroundcolor.disabled,
      borderColor: vars.components.button.tertiary.bordercolor.disabled,
      color: vars.components.button.tertiary.color.disabled,
      textDecoration: vars.components.button.tertiary.decoration.disabled
    },
    '&:hover[disabled]': {
      backgroundColor: vars.components.button.tertiary.backgroundcolor.disabled,
      borderColor: vars.components.button.tertiary.bordercolor.disabled,
      color: vars.components.button.tertiary.color.disabled,
      textDecoration: vars.components.button.tertiary.decoration.disabled
    },
    '&:focus[disabled]': {
      backgroundColor: vars.components.button.tertiary.backgroundcolor.disabled,
      borderColor: vars.components.button.tertiary.bordercolor.disabled,
      color: vars.components.button.tertiary.color.disabled,
      textDecoration: vars.components.button.tertiary.decoration.disabled
    }
  }
})

export const action = style({
  backgroundColor: vars.components.button.action.backgroundcolor.default,
  borderColor: vars.components.button.action.bordercolor.default,
  color: vars.components.button.action.color.default,

  ':hover': {
    backgroundColor: vars.components.button.action.backgroundcolor.hover,
    borderColor: vars.components.button.action.bordercolor.hover,
    color: vars.components.button.action.color.hover
  },
  ':focus': {
    backgroundColor: vars.components.button.action.backgroundcolor.hover,
    borderColor: vars.components.button.action.bordercolor.hover,
    color: vars.components.button.action.color.hover
  },

  ':active': {
    backgroundColor: vars.components.button.action.backgroundcolor.active,
    borderColor: vars.components.button.action.bordercolor.active,
    color: vars.components.button.action.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor: vars.components.button.action.backgroundcolor.disabled,
      borderColor: vars.components.button.action.bordercolor.disabled,
      color: vars.components.button.action.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor: vars.components.button.action.backgroundcolor.disabled,
      borderColor: vars.components.button.action.bordercolor.disabled,
      color: vars.components.button.action.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor: vars.components.button.action.backgroundcolor.disabled,
      borderColor: vars.components.button.action.bordercolor.disabled,
      color: vars.components.button.action.color.disabled
    }
  }
})

export const secondaryaction = style({
  backgroundColor:
    vars.components.button.secondary.action.backgroundcolor.default,
  borderColor: vars.components.button.secondary.action.bordercolor.default,
  color: vars.components.button.secondary.action.color.default,

  ':hover': {
    backgroundColor:
      vars.components.button.secondary.action.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.action.bordercolor.hover,
    color: vars.components.button.secondary.action.color.hover
  },
  ':focus': {
    backgroundColor:
      vars.components.button.secondary.action.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.action.bordercolor.hover,
    color: vars.components.button.secondary.action.color.hover
  },

  ':active': {
    backgroundColor:
      vars.components.button.secondary.action.backgroundcolor.active,
    borderColor: vars.components.button.secondary.action.bordercolor.active,
    color: vars.components.button.secondary.action.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.secondary.action.backgroundcolor.disabled,
      borderColor: vars.components.button.secondary.action.bordercolor.disabled,
      color: vars.components.button.secondary.action.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.secondary.action.backgroundcolor.disabled,
      borderColor: vars.components.button.secondary.action.bordercolor.disabled,
      color: vars.components.button.secondary.action.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.secondary.action.backgroundcolor.disabled,
      borderColor: vars.components.button.secondary.action.bordercolor.disabled,
      color: vars.components.button.secondary.action.color.disabled
    }
  }
})

export const tertiaryaction = style({
  backgroundColor:
    vars.components.button.tertiary.action.backgroundcolor.default,
  borderColor: vars.components.button.tertiary.action.bordercolor.default,
  color: vars.components.button.tertiary.action.color.default,

  ':hover': {
    backgroundColor:
      vars.components.button.tertiary.action.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.action.bordercolor.hover,
    color: vars.components.button.tertiary.action.color.hover
  },
  ':focus': {
    backgroundColor:
      vars.components.button.tertiary.action.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.action.bordercolor.hover,
    color: vars.components.button.tertiary.action.color.hover
  },

  ':active': {
    backgroundColor:
      vars.components.button.tertiary.action.backgroundcolor.active,
    borderColor: vars.components.button.tertiary.action.bordercolor.active,
    color: vars.components.button.tertiary.action.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.action.backgroundcolor.disabled,
      borderColor: vars.components.button.tertiary.action.bordercolor.disabled,
      color: vars.components.button.tertiary.action.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.action.backgroundcolor.disabled,
      borderColor: vars.components.button.tertiary.action.bordercolor.disabled,
      color: vars.components.button.tertiary.action.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.action.backgroundcolor.disabled,
      borderColor: vars.components.button.tertiary.action.bordercolor.disabled,
      color: vars.components.button.tertiary.action.color.disabled
    }
  }
})

export const destructive = style({
  backgroundColor: vars.components.button.destructive.backgroundcolor.default,
  borderColor: vars.components.button.destructive.bordercolor.default,
  color: vars.components.button.destructive.color.default,

  ':hover': {
    backgroundColor: vars.components.button.destructive.backgroundcolor.hover,
    borderColor: vars.components.button.destructive.bordercolor.hover,
    color: vars.components.button.destructive.color.hover
  },

  ':focus': {
    backgroundColor: vars.components.button.destructive.backgroundcolor.hover,
    borderColor: vars.components.button.destructive.bordercolor.hover,
    color: vars.components.button.destructive.color.hover
  },
  ':active': {
    backgroundColor: vars.components.button.destructive.backgroundcolor.active,
    borderColor: vars.components.button.destructive.bordercolor.active,
    color: vars.components.button.destructive.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.destructive.backgroundcolor.disabled,
      borderColor: vars.components.button.destructive.bordercolor.disabled,
      color: vars.components.button.destructive.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.destructive.backgroundcolor.disabled,
      borderColor: vars.components.button.destructive.bordercolor.disabled,
      color: vars.components.button.destructive.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.destructive.backgroundcolor.disabled,
      borderColor: vars.components.button.destructive.bordercolor.disabled,
      color: vars.components.button.destructive.color.disabled
    }
  }
})

export const secondarydestructive = style({
  backgroundColor:
    vars.components.button.secondary.destructive.backgroundcolor.default,
  borderColor: vars.components.button.secondary.destructive.bordercolor.default,
  color: vars.components.button.secondary.destructive.color.default,

  ':hover': {
    backgroundColor:
      vars.components.button.secondary.destructive.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.destructive.bordercolor.hover,
    color: vars.components.button.secondary.destructive.color.hover
  },

  ':focus': {
    backgroundColor:
      vars.components.button.secondary.destructive.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.destructive.bordercolor.hover,
    color: vars.components.button.secondary.destructive.color.hover
  },

  ':active': {
    backgroundColor:
      vars.components.button.secondary.destructive.backgroundcolor.active,
    borderColor:
      vars.components.button.secondary.destructive.bordercolor.active,
    color: vars.components.button.secondary.destructive.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.secondary.destructive.backgroundcolor.disabled,
      borderColor:
        vars.components.button.secondary.destructive.bordercolor.disabled,
      color: vars.components.button.secondary.destructive.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.secondary.destructive.backgroundcolor.disabled,
      borderColor:
        vars.components.button.secondary.destructive.bordercolor.disabled,
      color: vars.components.button.secondary.destructive.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.secondary.destructive.backgroundcolor.disabled,
      borderColor:
        vars.components.button.secondary.destructive.bordercolor.disabled,
      color: vars.components.button.secondary.destructive.color.disabled
    }
  }
})

export const tertiarydestructive = style({
  backgroundColor:
    vars.components.button.tertiary.destructive.backgroundcolor.default,
  borderColor: vars.components.button.tertiary.destructive.bordercolor.default,
  color: vars.components.button.tertiary.destructive.color.default,

  ':hover': {
    backgroundColor:
      vars.components.button.tertiary.destructive.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.destructive.bordercolor.hover,
    color: vars.components.button.tertiary.destructive.color.hover
  },

  ':focus': {
    backgroundColor:
      vars.components.button.tertiary.destructive.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.destructive.bordercolor.hover,
    color: vars.components.button.tertiary.destructive.color.hover
  },

  ':active': {
    backgroundColor:
      vars.components.button.tertiary.destructive.backgroundcolor.active,
    borderColor: vars.components.button.tertiary.destructive.bordercolor.active,
    color: vars.components.button.tertiary.destructive.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.destructive.backgroundcolor.disabled,
      borderColor:
        vars.components.button.tertiary.destructive.bordercolor.disabled,
      color: vars.components.button.tertiary.destructive.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.destructive.backgroundcolor.disabled,
      borderColor:
        vars.components.button.tertiary.destructive.bordercolor.disabled,
      color: vars.components.button.tertiary.destructive.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.destructive.backgroundcolor.disabled,
      borderColor:
        vars.components.button.tertiary.destructive.bordercolor.disabled,
      color: vars.components.button.tertiary.destructive.color.disabled
    }
  }
})

export const peripheral = style({
  backgroundColor: vars.components.button.peripheral.backgroundcolor.default,
  borderColor: vars.components.button.peripheral.bordercolor.default,
  color: vars.components.button.peripheral.color.default,

  ':hover': {
    backgroundColor: vars.components.button.peripheral.backgroundcolor.hover,
    borderColor: vars.components.button.peripheral.bordercolor.hover,
    color: vars.components.button.peripheral.color.hover
  },

  ':focus': {
    backgroundColor: vars.components.button.peripheral.backgroundcolor.hover,
    borderColor: vars.components.button.peripheral.bordercolor.hover,
    color: vars.components.button.peripheral.color.hover
  },

  ':active': {
    backgroundColor: vars.components.button.peripheral.backgroundcolor.active,
    borderColor: vars.components.button.peripheral.bordercolor.active,
    color: vars.components.button.peripheral.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.peripheral.backgroundcolor.disabled,
      borderColor: vars.components.button.peripheral.bordercolor.disabled,
      color: vars.components.button.peripheral.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.peripheral.backgroundcolor.disabled,
      borderColor: vars.components.button.peripheral.bordercolor.disabled,
      color: vars.components.button.peripheral.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.peripheral.backgroundcolor.disabled,
      borderColor: vars.components.button.peripheral.bordercolor.disabled,
      color: vars.components.button.peripheral.color.disabled
    }
  }
})

export const secondaryperipheral = style({
  backgroundColor:
    vars.components.button.secondary.peripheral.backgroundcolor.default,
  borderColor: vars.components.button.secondary.peripheral.bordercolor.default,
  color: vars.components.button.secondary.peripheral.color.default,

  ':hover': {
    backgroundColor:
      vars.components.button.secondary.peripheral.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.peripheral.bordercolor.hover,
    color: vars.components.button.secondary.peripheral.color.hover
  },

  ':focus': {
    backgroundColor:
      vars.components.button.secondary.peripheral.backgroundcolor.hover,
    borderColor: vars.components.button.secondary.peripheral.bordercolor.hover,
    color: vars.components.button.secondary.peripheral.color.hover
  },

  ':active': {
    backgroundColor:
      vars.components.button.secondary.peripheral.backgroundcolor.active,
    borderColor: vars.components.button.secondary.peripheral.bordercolor.active,
    color: vars.components.button.secondary.peripheral.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.secondary.peripheral.backgroundcolor.disabled,
      borderColor:
        vars.components.button.secondary.peripheral.bordercolor.disabled,
      color: vars.components.button.secondary.peripheral.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.secondary.peripheral.backgroundcolor.disabled,
      borderColor:
        vars.components.button.secondary.peripheral.bordercolor.disabled,
      color: vars.components.button.secondary.peripheral.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.secondary.peripheral.backgroundcolor.disabled,
      borderColor:
        vars.components.button.secondary.peripheral.bordercolor.disabled,
      color: vars.components.button.secondary.peripheral.color.disabled
    }
  }
})

export const tertiaryperipheral = style({
  backgroundColor:
    vars.components.button.tertiary.peripheral.backgroundcolor.default,
  borderColor: vars.components.button.tertiary.peripheral.bordercolor.default,
  color: vars.components.button.tertiary.peripheral.color.default,

  ':hover': {
    backgroundColor:
      vars.components.button.tertiary.peripheral.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.peripheral.bordercolor.hover,
    color: vars.components.button.tertiary.peripheral.color.hover
  },

  ':focus': {
    backgroundColor:
      vars.components.button.tertiary.peripheral.backgroundcolor.hover,
    borderColor: vars.components.button.tertiary.peripheral.bordercolor.hover,
    color: vars.components.button.tertiary.peripheral.color.hover
  },

  ':active': {
    backgroundColor:
      vars.components.button.tertiary.peripheral.backgroundcolor.active,
    borderColor: vars.components.button.tertiary.peripheral.bordercolor.active,
    color: vars.components.button.tertiary.peripheral.color.active
  },

  selectors: {
    '&[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.peripheral.backgroundcolor.disabled,
      borderColor:
        vars.components.button.tertiary.peripheral.bordercolor.disabled,
      color: vars.components.button.tertiary.peripheral.color.disabled
    },
    '&:hover[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.peripheral.backgroundcolor.disabled,
      borderColor:
        vars.components.button.tertiary.peripheral.bordercolor.disabled,
      color: vars.components.button.tertiary.peripheral.color.disabled
    },
    '&:focus[disabled]': {
      backgroundColor:
        vars.components.button.tertiary.peripheral.backgroundcolor.disabled,
      borderColor:
        vars.components.button.tertiary.peripheral.bordercolor.disabled,
      color: vars.components.button.tertiary.peripheral.color.disabled
    }
  }
})

export const xsmall = style({
  lineHeight: vars.components.button.xsmall.lineheight,
  borderRadius: vars.components.button.xsmall.radius,
  fontSize: vars.components.button.xsmall.fontsize
})

export const small = style({
  lineHeight: vars.components.button.small.lineheight,
  borderRadius: vars.components.button.small.radius,
  fontSize: vars.components.button.small.fontsize
})

export const large = style({
  lineHeight: vars.components.button.large.lineheight,
  borderRadius: vars.components.button.large.radius,
  fontSize: vars.components.button.large.fontsize
})

export const justify = style({
  justifyContent: 'space-between'
})

export const justifyCenter = style({
  justifyContent: 'center'
})

export const fullWidth = style({
  width: '100%'
})

export const contentWrapper = style({
  display: 'inline-block',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export const iconLeft = style({
  marginLeft: vars.components.button.icon.margin
})

export const iconRight = style({
  marginRight: vars.components.button.icon.margin
})
