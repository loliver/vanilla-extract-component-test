# Button

Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

## Component completion

| Action | Complete |
---------|----------|
| Code quality | Yes |
| Unit tests | Yes |
| Accessibility testing | No |
| CX design review | No |
| Browser compatibility | Chrome |

## Code example

```jsx
import Button from '@oceanblue/button'

const Example = () => (
  <Button appearance='action' variant='ghost' size='large'>Test button</Button>
)

export default Example
```
