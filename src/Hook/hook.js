import { profile } from '../Data/data'

export const profileFind = (id, setData) => {
    const db = profile.find((item) => item.id === id)
    return setData(db)
}