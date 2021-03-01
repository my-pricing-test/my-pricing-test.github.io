import { Table } from 'semantic-ui-react'
import { connect, MapStateToProps } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase-config'
import { AppState } from '../../store'
import Order from '../../models/order'
import ProductsTable from './products-table'
import Menu from './menu'

interface StateProps {
  order: Order
}

const mapState: MapStateToProps<StateProps, object, AppState> = state => ({
  order: state.order,
})

const ProductsPage = ({ order }: StateProps) => {
  const [user, isLoading] = useAuthState(auth)

  const header = <>
    <Table.HeaderCell>Назва</Table.HeaderCell>

    <Table.HeaderCell>Ціна</Table.HeaderCell>

    <Table.HeaderCell>{user ? 'Замовлення' : 'Наявність'}</Table.HeaderCell>
  </>

  return <>
    <Menu isLoggedIn={!!user} hasOrder={Object.values(order).filter(x => x && x.amount > 0).length > 0} />

    <ProductsTable header={header} isFirebaseLoading={isLoading} isLoggedIn={!!user} />
  </>
}

export default connect(mapState)(ProductsPage)
