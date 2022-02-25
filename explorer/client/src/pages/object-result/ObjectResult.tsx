import { useLocation, useParams } from 'react-router-dom';

import mockTransactionData from '../../utils/mock_data.json';
import styles from './ObjectResult.module.css';

type DataType = {
    id: string;
    owner: string;
    version: number;
    readonly: boolean;
    type: string;
    image?: {
        category: string;
        data: string;
    };
};

function instanceOfDataType(object: any): object is DataType {
    return (
        object !== undefined &&
        ['id', 'owner', 'version', 'readonly', 'type'].every((x) => x in object)
    );
}

function ObjectResult() {
    const { state } = useLocation();
    const { id: objID } = useParams();

    const data =
        state || mockTransactionData.data.find(({ id }) => id === objID);

    if (instanceOfDataType(data)) {
        return (
            <div className={styles.resultbox}>
                {data?.image?.data && (
                    <img
                        className={styles.imagebox}
                        alt="NFT"
                        src={
                            data.image.category === 'svg'
                                ? `data:image/svg+xml;utf8,${encodeURIComponent(
                                      data.image.data
                                  )}`
                                : data.image.category === 'base64'
                                ? `data:image/png;base64,${data.image.data}`
                                : ''
                        }
                    />
                )}

                <dl
                    className={`${styles.textbox} ${
                        data?.image?.data
                            ? styles.accommodate
                            : styles.noaccommodate
                    }`}
                >
                    <dt>Object ID</dt>
                    <dd>{data.id}</dd>

                    <dt>Owner</dt>
                    <dd>{data.owner}</dd>

                    <dt>Version</dt>
                    <dd>{data.version}</dd>

                    <dt>Read Only?</dt>
                    {data.readonly ? (
                        <dd
                            data-testid="read-only-text"
                            className={styles.immutable}
                        >
                            Immutable
                        </dd>
                    ) : (
                        <dd
                            data-testid="read-only-text"
                            className={styles.mutable}
                        >
                            Mutable
                        </dd>
                    )}

                    <dt>Type</dt>
                    <dd>{data.type}</dd>
                </dl>
            </div>
        );
    }
    return (
        <dl className={styles.data}>
            <dt>There was an issue with the data on the following object:</dt>
            <dd>{objID}</dd>
        </dl>
    );
}

export default ObjectResult;
