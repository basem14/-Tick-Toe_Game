import React from 'react';
import { Modal, ActivityIndicator } from 'react-native-paper';

import { useSelector } from 'react-redux';

const LoadingModal = () => {
    const showLoading = useSelector((state: any) => state.generalReducer.loading);
    return (
        <Modal visible={showLoading}>
            <ActivityIndicator size={'large'} color={"#ffffff"} />
        </Modal>
    )
}

export { LoadingModal };