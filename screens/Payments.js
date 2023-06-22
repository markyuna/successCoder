

import { StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import EmptyMsg from '../components/EmptyMsg';
import PaidItems from '../components/PaidItems';

const Payments = () => {

    const payments = useSelector(state => state.payments.payments);

    if (payments.length > 0) {
        return (
            <FlatList 
                data={payments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <PaidItems 
                        totalPrice={item.total}
                        date={item.date}
                        courseDetails={item}
                    />
                )}
            />
        ) 
    }
    return <EmptyMsg

            />
}

export default Payments

const styles = StyleSheet.create({})