import React, { useEffect } from 'react';
import ShowData from './ShowData'

export default function MovieList(props) {
    const { add, err, data } = props;
    useEffect(() => {
        add();
    }, [add]);

    if (err) {
        return <div className="alert-danger text-center">{err.message}</div>;
    }
    else if (data.length) {
        return <ShowData {...props} />;
    }
    else {
        return (
            <div class="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}