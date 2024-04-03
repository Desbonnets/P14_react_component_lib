// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// interface TableEntriesProps { }

// const TableEntries: React.FC<TableEntriesProps> = () => {

//     const { body, pageNumber, itemNumber } = useSelector((state: RootState) => state.table);
//     const startIndex = (pageNumber - 1) * itemNumber + 1;
//     const endIndex = Math.min(startIndex + itemNumber, body.length);

//     return (
//         <div>
//             Showing items {startIndex + 1} to {endIndex} of {body.length}
//         </div>
//     );
// };

// export default TableEntries;

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface TableEntriesProps { }

const TableEntries: React.FC<TableEntriesProps> = () => {

    const { body, pageNumber, itemNumber, displayItem } = useSelector((state: RootState) => state.table);
    const startIndex = (pageNumber - 1) * itemNumber;
    const endIndex = Math.min(startIndex + itemNumber, displayItem.length);

    return (
        <div>
            Showing items {startIndex + 1} to {endIndex} of {body.length}
        </div>
    );
};

export default TableEntries;

