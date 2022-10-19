import { Arrow } from "./Arrow"
import { Cancel } from "./Cancel"
import { Check } from "./Check"
import { Drag } from "./Drag"
import { Edit } from "./Edit"
import { Plus } from "./Plus"
import { Trash } from "./Trash"

interface Props {
  name: 'Arrow' | 'Cancel' | 'Check' | 'Drag' | 'Edit' | 'Plus' | 'Trash',
  height?: number,
  width?: number
}

const Icon = (props: Props) => {
  switch (props.name.toLowerCase()) {
    case 'arrow':
      return <Arrow {...props} />
    case 'cancel':
      return <Cancel {...props} />
    case 'check':
      return <Check {...props} />
    case 'drag':
      return <Drag {...props} />
    case 'edit':
      return <Edit {...props} />
    case 'plus':
      return <Plus {...props} />
    case 'trash':
      return <Trash {...props} />
    default:
      return <div />
  }
}

export { Icon }