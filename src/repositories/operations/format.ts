import {
  pick,
} from 'ramda'

const formatOperationFromDb = operation => {
  const fields = [
    'amount', 'label', 'tags', 'created_at', 'updated_at'
  ]

  return {
    id: operation._id.toString(),
    user_id: operation.user_id.toString(),
    ...pick(fields, operation)
  }
}

export default formatOperationFromDb